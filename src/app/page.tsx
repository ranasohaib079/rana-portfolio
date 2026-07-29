import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AskChatbotButton } from "@/components/ask-chatbot-button";
import { ProjectCard } from "@/components/project-card";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { education, featuredProjects, profile, skills, work } from "@/lib/content";
import { formatDate, getPosts } from "@/lib/blog";

export default function Home() {
  const posts = getPosts().slice(0, 3);

  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="title text-balance text-4xl sm:text-5xl">{profile.greeting}</h1>
          <p className="text-lg">{profile.headline}</p>
          <p className="text-lg">{profile.tagline}</p>
          <div className="mt-4">
            <AskChatbotButton />
          </div>
          <div className="mt-6 flex gap-2">
            <Link
              href={profile.resume}
              className="inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Resume
              <DownloadIcon width={16} height={16} />
            </Link>

            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
              title="LinkedIn"
            >
              <LinkedInIcon />
            </a>

            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
              title="GitHub"
            >
              <GitHubIcon />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="text-muted-foreground hover:text-foreground"
              title="Email"
            >
              <MailIcon />
            </a>
          </div>
        </div>

        <div className="relative mt-4 aspect-square h-48 w-48 shrink-0 overflow-hidden rounded-lg md:mt-0">
          <Image
            src={profile.photo}
            alt={profile.name}
            fill
            sizes="192px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <Tabs defaultValue="work" className="mt-8 scroll-mt-24" id="experience">
        <TabsList className="mb-2 grid w-full grid-cols-2">
          <TabsTrigger value="work">Work</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>

        <TabsContent value="work">
          <div className="rounded-xl border bg-card text-card-foreground shadow">
            <ul className="ml-10 border-l">
              {work.map((job) => (
                <li key={job.company} className="relative ml-10 py-4">
                  <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white">
                    <span className="relative flex size-12 shrink-0 overflow-hidden rounded-full border">
                      <Image
                        src={job.logo}
                        alt={`${job.company} logo`}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-start gap-2">
                    <h3 className="text-base font-semibold leading-none">{job.company}</h3>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <p className="text-sm font-medium leading-none text-muted-foreground">
                        {job.role}
                      </p>
                      <time className="whitespace-nowrap pr-8 text-xs tabular-nums text-muted-foreground">
                        {job.period}
                      </time>
                    </div>
                    <ul className="ml-4 list-outside list-disc">
                      {job.points.map((point) => (
                        <li key={point} className="prose pr-8 text-sm dark:prose-invert">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="education">
          <div className="rounded-xl border bg-card text-card-foreground shadow">
            <ul className="ml-10 border-l">
              {education.map((school) => (
                <li key={school.name} className="relative ml-10 py-4">
                  <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white">
                    <span className="relative flex size-12 shrink-0 overflow-hidden rounded-full border">
                      <Image
                        src={school.logo}
                        alt={`${school.name} logo`}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-start gap-2">
                    <h3 className="text-base font-semibold leading-none">{school.name}</h3>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <p className="text-sm font-medium leading-none text-muted-foreground">
                        {school.degree}
                      </p>
                      <time className="whitespace-nowrap pr-8 text-xs tabular-nums text-muted-foreground">
                        {school.period}
                      </time>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 scroll-mt-24" id="skills">
        <h2 className="title text-2xl sm:text-3xl">skills</h2>
        <div className="mt-4 flex flex-col gap-4">
          {skills.map((group) => (
            <div key={group.label}>
              <p className="mb-2 text-sm font-medium text-muted-foreground">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-sm bg-muted px-2 py-1 text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 scroll-mt-24" id="projects">
        <div className="flex items-center justify-between">
          <h2 className="title text-2xl sm:text-3xl">featured projects</h2>
          <Link href="/projects" className="flex items-center gap-1 text-sm">
            view more
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} variant="featured" />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="title text-2xl sm:text-3xl">recent posts</h2>
          <Link href="/blog" className="flex items-center gap-1 text-sm">
            view more
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-4 rounded-xl border bg-card text-card-foreground shadow">
          <ul className="flex flex-col divide-y">
            {posts.length === 0 ? (
              <li>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Coming soon</h3>
                  <p className="mt-1 line-clamp-2 text-sm font-light text-muted-foreground">
                    Blog posts are on the way. Check back later for write-ups on full-stack, CV,
                    and AI projects.
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
      </div>
    </article>
  );
}
