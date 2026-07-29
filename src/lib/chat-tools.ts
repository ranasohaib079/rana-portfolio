import { tool } from "ai";
import { z } from "zod";
import { profile, sections, type SectionKey } from "@/lib/content";

const sectionKeys = Object.keys(sections) as [SectionKey, ...SectionKey[]];

type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
};

/**
 * Unauthenticated GitHub requests are limited to 60/hour per IP, which a busy
 * day could exhaust, so results are cached for an hour by the fetch cache.
 */
const getGitHubRepos = tool({
  description:
    "Fetch live public repository data from GitHub (stars, primary language, last updated). Use only when the visitor asks about repository activity or stats, not to describe what a project does.",
  inputSchema: z.object({
    limit: z
      .number()
      .int()
      .min(1)
      .max(10)
      .default(6)
      .describe("How many of the most recently updated repositories to return."),
  }),
  execute: async ({ limit }) => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${profile.githubUser}/repos?sort=updated&per_page=20`,
        {
          headers: { Accept: "application/vnd.github+json" },
          next: { revalidate: 3600 },
        }
      );

      if (!response.ok) {
        return { ok: false as const, error: "GitHub is not reachable right now." };
      }

      const repos = (await response.json()) as GitHubRepo[];
      return {
        ok: true as const,
        repos: repos
          .filter((repo) => !repo.fork)
          .slice(0, limit)
          .map((repo) => ({
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            language: repo.language,
            stars: repo.stargazers_count,
            updated: repo.updated_at.slice(0, 10),
          })),
      };
    } catch {
      return { ok: false as const, error: "GitHub is not reachable right now." };
    }
  },
});

const linkToSection = tool({
  description:
    "Return a link to a section of this portfolio so the visitor can jump straight there. Use when directing someone to work history, skills, projects, the blog, or contact details.",
  inputSchema: z.object({
    section: z.enum(sectionKeys).describe("Which part of the site to link to."),
  }),
  execute: async ({ section }) => sections[section],
});

const getResume = tool({
  description:
    "Return a link to the downloadable resume PDF. Use when the visitor asks for a resume or CV.",
  inputSchema: z.object({}),
  execute: async () => ({
    href: profile.resume,
    label: "Download resume",
    email: profile.email,
  }),
});

export const chatTools = { getGitHubRepos, linkToSection, getResume };
