import { google } from "@ai-sdk/google";
import {
  convertToModelMessages,
  stepCountIs,
  streamText,
  type UIMessage,
} from "ai";
import { chatTools } from "@/lib/chat-tools";
import { profile } from "@/lib/content";
import { checkRateLimit, getClientId } from "@/lib/ratelimit";
import { systemPrompt } from "@/lib/system-prompt";

export const runtime = "nodejs";
export const maxDuration = 30;

/** Caps chosen to keep a single request's token cost bounded and predictable. */
const MAX_MESSAGES = 20;
const MAX_CHARS_PER_MESSAGE = 1500;
const MAX_OUTPUT_TOKENS = 500;

const UNAVAILABLE = `The chat assistant is temporarily unavailable. You can reach ${profile.shortName} directly at ${profile.email}.`;

function textOf(message: UIMessage): string {
  return message.parts
    .filter((part) => part.type === "text")
    .map((part) => ("text" in part ? part.text : ""))
    .join("");
}

/**
 * Gemini's free tier quota can be exhausted or revoked without warning, so a
 * quota failure is treated as an expected state rather than a crash.
 */
function isQuotaError(error: unknown): boolean {
  const message =
    error instanceof Error ? error.message : typeof error === "string" ? error : "";
  return /quota|rate.?limit|429|RESOURCE_EXHAUSTED/i.test(message);
}

export async function POST(request: Request) {
  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    return Response.json({ error: UNAVAILABLE }, { status: 503 });
  }

  let messages: UIMessage[];
  try {
    const body = await request.json();
    messages = body?.messages;
    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: "No messages provided." }, { status: 400 });
    }
  } catch {
    return Response.json({ error: "Malformed request." }, { status: 400 });
  }

  const latest = messages[messages.length - 1];
  if (latest?.role === "user" && textOf(latest).length > MAX_CHARS_PER_MESSAGE) {
    return Response.json(
      { error: "That message is too long. Could you shorten it?" },
      { status: 413 }
    );
  }

  const { success, retryAfter } = await checkRateLimit(getClientId(request));
  if (!success) {
    return Response.json(
      {
        error: `You've sent a lot of messages in a short window. Try again in ${retryAfter}s, or email ${profile.email}.`,
      },
      { status: 429, headers: { "Retry-After": String(retryAfter) } }
    );
  }

  // Only the tail of the conversation is sent, so a long session cannot grow
  // the prompt without bound.
  const trimmed = messages.slice(-MAX_MESSAGES);

  try {
    const result = streamText({
      // gemini-2.5-flash is closed to new API keys; 3.6 Flash is the current default.
      model: google(process.env.CHAT_MODEL || "gemini-3.6-flash"),
      system: systemPrompt,
      messages: await convertToModelMessages(trimmed),
      tools: chatTools,
      stopWhen: stepCountIs(4),
      maxOutputTokens: MAX_OUTPUT_TOKENS,
      temperature: 0.3,
      abortSignal: request.signal,
      onFinish({ usage, finishReason }) {
        console.log("[chat]", {
          finishReason,
          inputTokens: usage?.inputTokens,
          outputTokens: usage?.outputTokens,
        });
      },
    });

    return result.toUIMessageStreamResponse({
      onError: (error) => {
        console.error("[chat] stream error", error);
        return isQuotaError(error)
          ? UNAVAILABLE
          : "Something went wrong generating that reply. Please try again.";
      },
    });
  } catch (error) {
    console.error("[chat] request failed", error);
    return Response.json(
      { error: isQuotaError(error) ? UNAVAILABLE : "Something went wrong. Please try again." },
      { status: isQuotaError(error) ? 503 : 500 }
    );
  }
}
