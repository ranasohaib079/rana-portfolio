import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { formatDate, getPost, getPosts } from "@/lib/blog";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    },
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { default: Body } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <Link
        href="/blog"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        back to blog
      </Link>

      <header className="flex flex-col gap-2">
        <h1 className="title text-balance text-3xl sm:text-4xl">{post.title}</h1>
        <p className="text-sm text-muted-foreground">
          {formatDate(post.date)} · {post.readingTime} min read
        </p>
      </header>

      <div className="prose max-w-none dark:prose-invert prose-headings:font-semibold prose-a:font-medium">
        <Body />
      </div>
    </article>
  );
}
