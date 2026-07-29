import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/blog";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const posts: MetadataRoute.Sitemap = getPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [
    { url: siteUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    ...posts,
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.1 },
  ];
}
