import Image from "next/image";
import { GitHubIcon } from "@/components/icons";
import type { Project } from "@/lib/content";

export function ProjectCard({
  project,
  variant = "full",
}: {
  project: Project;
  /** "featured" uses the shorter copy and tag list sized for the home page grid. */
  variant?: "full" | "featured";
}) {
  const isFeatured = variant === "featured";
  const description =
    isFeatured && project.summary ? project.summary : project.description;
  const tags = isFeatured && project.featuredTags ? project.featuredTags : project.tags;

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow">
      <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-sm bg-muted px-2 py-1 text-xs">
              {tag}
            </span>
          ))}
        </div>

        {project.source ? (
          <div className="mt-4">
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <GitHubIcon width={14} height={14} className="mr-2" />
              Source
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}
