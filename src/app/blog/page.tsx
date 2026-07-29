import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Write-ups on full-stack engineering, computer vision, and applied AI.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  const posts = getPosts();

  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="title text-balance text-4xl sm:text-5xl">my blog.</h1>

      <div className="rounded-xl border bg-card text-card-foreground shadow">
        <ul className="flex flex-col divide-y">
          {posts.length === 0 ? (
            <li>
              <div className="p-6">
                <h3 className="text-lg font-semibold">Coming soon</h3>
                <p className="mt-1 text-sm font-light text-muted-foreground">
                  No posts yet. Check back later for write-ups on full-stack, CV, and AI
                  projects.
                </p>
              </div>
            </li>
          ) : (
            posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex flex-col justify-between p-6 transition-colors hover:bg-accent/50 sm:flex-row sm:items-center"
                >
                  <div className="max-w-md md:max-w-lg">
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                    <p className="mt-1 line-clamp-2 text-sm font-light text-muted-foreground">
                      {post.description}
                    </p>
                  </div>
                  <p className="mt-2 flex w-full justify-end whitespace-nowrap text-sm font-light text-muted-foreground sm:mt-0 sm:w-auto">
                    {formatDate(post.date)}
                  </p>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </article>
  );
}
