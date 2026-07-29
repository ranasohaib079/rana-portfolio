"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, getToolName, isToolUIPart, type UIMessage } from "ai";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ArrowRight, ChevronDown, ChevronUp, MessageSquare, RotateCw, Send } from "lucide-react";
import { useChatbot } from "@/components/layout/header";
import { profile } from "@/lib/content";

const GREETING = `Hi! I'm ${profile.shortName}'s AI assistant. Ask me about his experience, projects, or skills.`;

const SUGGESTIONS = [
  "What's his background?",
  "Tell me about his AI projects",
  "What tech does he use?",
];

/** Tool outputs that carry a link render as a button under the reply. */
type LinkOutput = { href: string; label: string };

function isLinkOutput(value: unknown): value is LinkOutput {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as LinkOutput).href === "string" &&
    typeof (value as LinkOutput).label === "string"
  );
}

/**
 * Non-streaming failures arrive as the raw response body, so a JSON error
 * payload from the route would otherwise be shown to the visitor verbatim.
 */
function readableError(error: Error): string {
  const fallback = "Something went wrong. Please try again.";
  if (!error.message) return fallback;
  try {
    const parsed = JSON.parse(error.message);
    if (parsed && typeof parsed.error === "string") return parsed.error;
  } catch {
    // Not JSON, so the message is already human-readable.
  }
  return error.message.startsWith("{") ? fallback : error.message;
}

function MessageBubble({ message }: { message: UIMessage }) {
  const isUser = message.role === "user";
  const text = message.parts
    .filter((part) => part.type === "text")
    .map((part) => ("text" in part ? part.text : ""))
    .join("");

  const links = message.parts
    .filter(isToolUIPart)
    .filter((part) => part.state === "output-available")
    .map((part) => ({ name: getToolName(part), output: part.output }))
    .filter((entry) => isLinkOutput(entry.output))
    .map((entry) => entry.output as LinkOutput);

  if (!text && links.length === 0) return null;

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
          isUser ? "bg-primary text-primary-foreground" : "bg-muted"
        }`}
      >
        {text ? <p className="whitespace-pre-wrap">{text}</p> : null}
        {links.length > 0 ? (
          <div className="mt-2 flex flex-wrap gap-2">
            {links.map((link) => (
              <Link
                key={`${link.href}-${link.label}`}
                href={link.href}
                className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-2 py-1 text-xs font-medium text-foreground transition-colors hover:bg-accent"
              >
                {link.label}
                <ArrowRight className="h-3 w-3" />
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function Chatbot() {
  const { isChatOpen, setIsChatOpen } = useChatbot();
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const transport = useMemo(
    () => new DefaultChatTransport({ api: "/api/chat" }),
    []
  );

  const { messages, sendMessage, status, error, regenerate, clearError } = useChat({
    transport,
  });

  const isBusy = status === "submitted" || status === "streaming";

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isBusy, error]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isBusy) return;
    clearError();
    sendMessage({ text: trimmed });
    setInput("");
  };

  return (
    <Collapsible
      open={isChatOpen}
      onOpenChange={setIsChatOpen}
      className="fixed bottom-8 right-8 z-40 w-80 rounded-md border bg-background shadow-lg"
    >
      <CollapsibleTrigger className="flex flex-1 items-center justify-between border-b px-6 py-4 text-sm font-medium transition-all hover:underline">
        <section className="flex w-full items-center justify-start gap-3">
          <MessageSquare className="h-5 w-5 text-primary" />
          <div className="flex flex-col items-start">
            <p className="text-xs">Chat with</p>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <p className="text-sm font-medium">{profile.shortName}&apos;s assistant</p>
            </div>
          </div>
        </section>
        {isChatOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="flex h-80 flex-col overflow-hidden">
          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-4">
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-lg bg-muted px-3 py-2 text-sm">{GREETING}</div>
            </div>

            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}

            {status === "submitted" ? (
              <div className="flex justify-start">
                <div className="flex gap-1 rounded-lg bg-muted px-3 py-3">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
                </div>
              </div>
            ) : null}

            {error ? (
              <div className="flex flex-col items-start gap-2">
                <div className="max-w-[85%] rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
                  {readableError(error)}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    clearError();
                    regenerate();
                  }}
                  className="inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs font-medium transition-colors hover:bg-accent"
                >
                  <RotateCw className="h-3 w-3" />
                  Retry
                </button>
              </div>
            ) : null}

            {messages.length === 0 && !error ? (
              <div className="flex flex-wrap gap-2">
                {SUGGESTIONS.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => send(suggestion)}
                    className="rounded-full border px-3 py-1 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              send(input);
            }}
            className="border-t p-3"
          >
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask me anything..."
                maxLength={1500}
                aria-label="Message"
                className="flex-1 bg-transparent text-sm focus:outline-none disabled:opacity-50"
                disabled={isBusy}
              />
              <button
                type="submit"
                disabled={isBusy || !input.trim()}
                aria-label="Send message"
                className="rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
