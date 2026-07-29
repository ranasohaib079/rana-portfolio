"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import { sendContactMessage, type ContactResult } from "@/app/contact/actions";
import { profile } from "@/lib/content";

const inputClass =
  "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50";

export function ContactForm() {
  const [result, setResult] = useState<ContactResult | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const form = event.currentTarget;

    startTransition(async () => {
      const response = await sendContactMessage({
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        message: String(data.get("message") ?? ""),
      });
      setResult(response);
      if (response.status === "success") form.reset();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div className="h-16">
          <input
            type="text"
            className={inputClass}
            id="name"
            placeholder="Name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            disabled={isPending}
          />
        </div>
        <div className="h-16">
          <input
            type="email"
            className={inputClass}
            id="email"
            placeholder="Email"
            autoComplete="email"
            name="email"
            required
            disabled={isPending}
          />
        </div>
      </div>
      <div className="mt-2">
        <textarea
          className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          id="message"
          placeholder="Leave feedback about the site, career opportunities or just to say hello etc."
          name="message"
          rows={6}
          required
          minLength={10}
          maxLength={5000}
          disabled={isPending}
        />
      </div>
      <div className="mt-2">
        <button
          className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          type="submit"
          disabled={isPending}
        >
          <div className="flex items-center">
            <span>{isPending ? "Sending..." : "Send Message"}</span>
            <Send className="ml-2 h-4 w-4" />
          </div>
        </button>

        {result ? (
          <p
            role="status"
            className={`mt-3 text-sm ${
              result.status === "success" ? "text-foreground" : "text-destructive"
            }`}
          >
            {result.message}
          </p>
        ) : null}

        <p className="mt-4 text-xs text-muted-foreground">
          Prefer email? Reach me at{" "}
          <a href={`mailto:${profile.email}`} className="link font-semibold">
            {profile.email}
          </a>
          .
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          By submitting this form, I agree to the{" "}
          <Link href="/privacy" className="link font-semibold">
            privacy&nbsp;policy.
          </Link>
        </p>
      </div>
    </form>
  );
}
