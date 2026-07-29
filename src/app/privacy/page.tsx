import type { Metadata } from "next";
import { profile } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What this site collects, and what it does not.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="title text-balance text-4xl sm:text-5xl">privacy policy.</h1>

      <div className="prose prose-sm max-w-none dark:prose-invert">
        <p>
          This is a personal portfolio site. There are no accounts, no advertising, and no
          tracking cookies. The only information that reaches me is what you deliberately
          send through the contact form or the chat assistant.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Contact form</h2>
        <p>
          If you submit the contact form, your name, email address, and message are sent to my
          inbox through <a href="https://resend.com">Resend</a>, an email delivery provider. I
          use them to reply to you, and I do not share them with anyone else. Your email
          address is also used to rate limit the form so it cannot be used to send bulk mail.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Chat assistant</h2>
        <p>
          The chat widget sends the messages you type to{" "}
          <a href="https://ai.google.dev/gemini-api/terms">Google&apos;s Gemini API</a> in
          order to generate a reply. Please do not put anything sensitive into it. This site
          runs on Gemini&apos;s free tier, and Google states that free-tier prompts may be used
          to improve their models, so treat anything you send as leaving my control once it
          reaches them.
        </p>
        <p>
          Conversations are not stored on this site. They live only in your browser tab and
          disappear when you close or reload it. To keep the assistant from being abused, the
          server temporarily records a rate-limiting counter derived from your IP address; it
          holds no message content and expires on its own.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Hosting and logs</h2>
        <p>
          The site is hosted on <a href="https://vercel.com">Vercel</a>, which records standard
          server request logs on my behalf. I do not run any analytics product, so there is no
          page-view tracking, session recording, or advertising profile built from your visit.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Changes to this policy</h2>
        <p>
          This policy may be updated occasionally. Any changes will be posted on this page.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Contact</h2>
        <p>
          If you have questions about this policy, email me at{" "}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>.
        </p>

        <p className="mt-8 text-sm text-muted-foreground">Last updated: July 29, 2026</p>
      </div>
    </article>
  );
}
