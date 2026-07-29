import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack, computer vision, and machine learning projects, including a retrieval-augmented generation knowledge base and a grounded portfolio assistant.",
  alternates: { canonical: "/projects" },
};

export default function Projects() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="title text-balance text-4xl sm:text-5xl">my projects.</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </article>
  );
}
