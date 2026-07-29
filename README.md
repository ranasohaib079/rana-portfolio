# rana-portfolio

Personal portfolio for Rana Sohaib Hani, with an AI assistant that answers questions about
my background using only the content this site actually publishes.

Built with Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, and the Vercel AI SDK
on Gemini.

## Running locally

Requires Node 20 or newer.

```bash
npm install
cp .env.example .env.local   # then fill in the values you want
npm run dev
```

The site runs at http://localhost:3000. Every environment variable is optional except the
Gemini key, and the features that depend on them degrade gracefully rather than breaking:

| Variable | Effect when missing |
| --- | --- |
| `GOOGLE_GENERATIVE_AI_API_KEY` | Chat replies with "temporarily unavailable" and shows my email |
| `UPSTASH_REDIS_REST_URL` / `_TOKEN` | Rate limiting is skipped, which is fine locally |
| `RESEND_API_KEY` | Contact form tells visitors to email me directly |
| `NEXT_PUBLIC_SITE_URL` | Falls back to Vercel's deployment URL, then localhost |

## How the content is organised

[`src/lib/content.ts`](src/lib/content.ts) is the single source of truth for the profile,
work history, education, projects, and skills. The pages render from it and the chatbot's
system prompt is serialised from it, so the assistant cannot describe anything the site
does not show. Edit that one file to update the site.

## How the chatbot works

```
chatbot.tsx (useChat) -> /api/chat -> rate limit -> streamText -> Gemini
                                                      |
                            content.ts -> system-prompt.ts
```

- [`src/app/api/chat/route.ts`](src/app/api/chat/route.ts) streams the response and caps
  message count, input length, and output tokens.
- [`src/lib/system-prompt.ts`](src/lib/system-prompt.ts) builds the grounding prompt with
  refusal and prompt-injection rules.
- [`src/lib/chat-tools.ts`](src/lib/chat-tools.ts) defines three tools: live GitHub repo
  stats, deep links into the site, and the resume link.
- [`src/lib/ratelimit.ts`](src/lib/ratelimit.ts) applies a per-IP sliding window, so one
  visitor cannot exhaust the daily model quota.

Quota exhaustion is treated as an expected state: the widget falls back to a friendly
"unavailable, here's my email" message instead of surfacing an error.

## Writing a blog post

Add an `.mdx` file to `src/content/blog/`. Frontmatter drives the index and metadata:

```mdx
---
title: Post title
description: One or two sentences for the listing and link previews.
date: 2026-07-29
draft: false
---
```

Drafts are visible in development and hidden in production. Reading time is computed from
word count.

## Deploying

The site is designed for Vercel's free Hobby tier. Import the repo at
[vercel.com/new](https://vercel.com/new), add the environment variables you want in project
settings, and deploy. The default `*.vercel.app` subdomain works without a custom domain.

## Scripts

```bash
npm run dev      # dev server with Turbopack
npm run build    # production build, type check, and lint
npm run lint     # biome lint plus tsc --noEmit
npm run format   # biome format
```
