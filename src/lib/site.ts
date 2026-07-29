/**
 * Resolves the canonical origin for absolute URLs in metadata, the sitemap, and
 * robots.txt.
 *
 * Vercel injects VERCEL_PROJECT_PRODUCTION_URL, so production works without any
 * manual configuration; NEXT_PUBLIC_SITE_URL overrides it once a custom domain
 * is attached.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();
