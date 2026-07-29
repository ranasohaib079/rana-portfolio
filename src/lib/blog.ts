import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  /** Rough minutes to read, derived from word count. */
  readingTime: number;
  draft: boolean;
};

const POSTS_DIR = path.join(process.cwd(), "src", "content", "blog");

function parse(fileName: string): PostMeta {
  const raw = fs.readFileSync(path.join(POSTS_DIR, fileName), "utf8");
  const { data, content } = matter(raw);
  const words = content.trim().split(/\s+/).length;

  return {
    slug: fileName.replace(/\.mdx?$/, ""),
    title: String(data.title ?? "Untitled"),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    readingTime: Math.max(1, Math.round(words / 200)),
    draft: data.draft === true,
  };
}

/** Published posts, newest first. Drafts are excluded outside development. */
export function getPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => /\.mdx?$/.test(file))
    .map(parse)
    .filter((post) => !post.draft || process.env.NODE_ENV === "development")
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): PostMeta | undefined {
  return getPosts().find((post) => post.slug === slug);
}

export function formatDate(date: string): string {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
