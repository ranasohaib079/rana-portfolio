"use server";

import { Resend } from "resend";
import { z } from "zod";
import { profile } from "@/lib/content";
import { checkRateLimit } from "@/lib/ratelimit";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least a sentence or two.")
    .max(5000, "That message is too long."),
});

export type ContactResult =
  | { status: "success"; message: string }
  | { status: "error"; message: string };

/**
 * Sends the contact form to my inbox via Resend.
 *
 * Without RESEND_API_KEY the action reports that the form is unavailable and
 * points at the mailto fallback rendered next to it, so an unconfigured deploy
 * never silently swallows a message.
 */
export async function sendContactMessage(input: {
  name: string;
  email: string;
  message: string;
}): Promise<ContactResult> {
  const parsed = schema.safeParse(input);
  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "Please check the form and try again.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      status: "error",
      message: `The form isn't wired up yet. Please email me directly at ${profile.email}.`,
    };
  }

  // Server actions have no request object, so the limiter is keyed on the
  // sender's address. It is weaker than per-IP but still caps a single abuser.
  const { success, retryAfter } = await checkRateLimit(`contact:${parsed.data.email}`);
  if (!success) {
    return {
      status: "error",
      message: `You've already sent a message recently. Try again in ${retryAfter}s.`,
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
      to: profile.email,
      replyTo: parsed.data.email,
      subject: `Portfolio contact from ${parsed.data.name}`,
      text: `From: ${parsed.data.name} <${parsed.data.email}>\n\n${parsed.data.message}`,
    });

    if (error) {
      console.error("[contact] resend error", error);
      return {
        status: "error",
        message: `That didn't send. Please email me directly at ${profile.email}.`,
      };
    }

    return { status: "success", message: "Thanks — your message is on its way." };
  } catch (error) {
    console.error("[contact] unexpected error", error);
    return {
      status: "error",
      message: `That didn't send. Please email me directly at ${profile.email}.`,
    };
  }
}
