import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // No reason to let crawlers spend the chat quota.
      disallow: "/api/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
