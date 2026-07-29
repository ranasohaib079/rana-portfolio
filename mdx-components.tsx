import type { MDXComponents } from "mdx/types";
import Link from "next/link";

/**
 * Post bodies are wrapped in Tailwind's prose classes by the post layout, so
 * these overrides only handle what prose cannot: internal links routed through
 * next/link, and external links opened safely.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children, ...props }) => {
      const target = String(href ?? "");
      if (target.startsWith("/")) {
        return (
          <Link href={target} {...props}>
            {children}
          </Link>
        );
      }
      return (
        <a href={target} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    },
    ...components,
  };
}
