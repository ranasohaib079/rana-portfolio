"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useChatbot } from "@/components/layout/header";

const work = [
  {
    company: "GoCe",
    role: "Full Stack & Computer Vision Engineer",
    period: "Nov 2025 – Jun 2026",
    logo: "/img/logos/goce.jpg",
    points: [
      "Built a panoramic image stitching pipeline using Hugin that transformed sequential mobile captures into high-resolution 360° environments, processing 200+ daily client requests and enabling remote property navigation through an interactive viewer",
      "Integrated Gemini-powered vision models into the panorama pipeline to detect, localize, and measure objects within 360° environments, exposing inference results through REST APIs for downstream spatial search and visual inspection",
      "Built Python microservices that processed and indexed panoramic datasets into structured spatial metadata, reducing processing time by 60% and enabling fast object retrieval across scanned environments",
    ],
  },
  {
    company: "Zabihah",
    role: "Full Stack & Data Engineer",
    period: "May 2025 – Aug 2025",
    logo: "/img/logos/zabihah.jpg",
    points: [
      "Delivered personalized restaurant recommendations to 250K+ users at sub-200ms response times using a location-based discovery system built on embedding-based geospatial queries, Core Location, and a REST API backend",
      "Built automated Python scripts that aggregated daily transaction data into structured business reports (revenue, order volume, sales trends), reducing manual reporting by 85%",
      "Increased daily active users by 40% by building a SwiftUI content feed with reviews, ratings, and comments, using optimized state management and lazy data fetching",
    ],
  },
  {
    company: "Resonate",
    role: "Full Stack Software Engineer",
    period: "Sep 2024 – Feb 2025",
    logo: "/img/logos/resonate.jpg",
    points: [
      "Increased user retention by 50% across an initial 1,000-user cohort by launching a TypeScript-based learning platform with a generative AI recommendation layer (embedding similarity over the Google Books corpus via OpenAI APIs)",
      "Cut recommender system latency by 40% by decomposing a monolithic engine into Go microservices with RESTful APIs, enabling independent model deployment and CI/CD via GitHub Actions",
      "Improved recommendation relevance by 20% and cut PR turnaround in half through intelligent feature engineering and unit-tested AI-assisted filtering logic",
    ],
  },
  {
    company: "Cars Commerce",
    role: "iOS Software Engineer Intern",
    period: "Jun 2024 – Aug 2024",
    logo: "/img/logos/cars-commerce.jpg",
    points: [
      "Cut CI/CD build times by 90% for a team shipping to 25M+ monthly users by creating a reusable SwiftUI component library",
      "Shipped 15+ production-ready SwiftUI components across the Cars.com app; built an internal component sandbox for real-time UI preview, reducing rework cycles",
    ],
  },
  {
    company: "Engageathon",
    role: "Backend Software Engineer Intern",
    period: "Nov 2023 – Apr 2024",
    logo: "/img/logos/engageathon.jpg",
    points: [
      "Achieved zero downtime across 3 NFL Alumni Super Bowl live events engaging 3,000+ attendees via a scalable real-time posting board with redundant backend services",
      "Improved API performance by 30% for 2,000 concurrent users by adding a Node.js caching layer",
    ],
  },
];

const education = [
  {
    name: "University of Illinois Urbana-Champaign",
    degree: "Master of Computer Science (Artificial Intelligence)",
    period: "Aug 2026 - Dec 2027",
    logo: "/img/logos/uiuc.jpg",
  },
  {
    name: "DePaul University",
    degree: "Bachelor of Science in Computer Science",
    period: "Sep 2020 - Dec 2024",
    logo: "/img/logos/depaul.jpg",
  },
];

export default function Home() {
  const { setIsChatOpen } = useChatbot();

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="title text-balance text-4xl sm:text-5xl">hi, sohaib here.</h1>
          <p className="text-lg">Full Stack & Computer Vision/AI Engineer</p>
          <p className="text-lg">
            Master&apos;s student in AI at UIUC. Mostly full-stack, increasingly ML.
          </p>
          <div className="mt-4">
            <button
              onClick={handleOpenChat}
              className="flex items-center gap-2 font-medium text-foreground hover:underline"
            >
              Ask the chatbot anything about me
              <ArrowDownRight className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-6 flex gap-2">
            <Link
              href="/resume.pdf"
              className="inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M18 13l-6 6M6 13l6 6" />
              </svg>
            </Link>

            <a
              href="https://linkedin.com/in/rshani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
              title="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            <a
              href="https://github.com/ranasohaib079"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
              title="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>

            <a
              href="mailto:sohaibrana079@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
              title="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Drop your photos into /public/img/me-1.jpg (me-2.jpg, me-3.jpg reserved) */}
        <div className="relative mt-4 aspect-square h-48 w-48 shrink-0 overflow-hidden rounded-lg md:mt-0">
          <Image
            src="/img/me-1.jpg"
            alt="Rana Sohaib Hani"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Work / Education */}
      <Tabs defaultValue="work" className="mt-8">
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

      {/* Skills */}
      <div className="mt-8">
        <h2 className="title text-2xl sm:text-3xl">skills</h2>
        <div className="mt-4 flex flex-col gap-4">
          <div>
            <p className="mb-2 text-sm font-medium text-muted-foreground">Languages</p>
            <div className="flex flex-wrap gap-2">
              {["Python", "Java", "TypeScript", "JavaScript", "Go", "Swift", "C", "C++"].map(
                (skill) => (
                  <span key={skill} className="rounded-sm bg-muted px-2 py-1 text-xs">
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-muted-foreground">Frameworks & Tools</p>
            <div className="flex flex-wrap gap-2">
              {[
                "React.js",
                "React Native",
                "SwiftUI",
                "UIKit",
                "Node.js",
                "FastAPI",
                "Flask",
                ".NET",
                "Docker",
                "Git",
              ].map((skill) => (
                <span key={skill} className="rounded-sm bg-muted px-2 py-1 text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-muted-foreground">ML & AI</p>
            <div className="flex flex-wrap gap-2">
              {[
                "Computer Vision",
                "LLMs",
                "Generative AI",
                "PyTorch",
                "Hugging Face Transformers",
                "Model Inference",
              ].map((skill) => (
                <span key={skill} className="rounded-sm bg-muted px-2 py-1 text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-muted-foreground">Databases & Cloud</p>
            <div className="flex flex-wrap gap-2">
              {[
                "AWS",
                "SQL",
                "PostgreSQL",
                "MariaDB",
                "MySQL",
                "Supabase",
                "Firebase",
                "GCP",
              ].map((skill) => (
                <span key={skill} className="rounded-sm bg-muted px-2 py-1 text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="title text-2xl sm:text-3xl">featured projects</h2>
          <Link href="/projects" className="flex items-center gap-1 text-sm">
            view more
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Enterprise RAG Knowledge Base */}
          <div className="rounded-xl border bg-card text-card-foreground shadow">
            <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
              <Image
                src="/img/projects/enterprise-rag.jpg"
                alt="Enterprise RAG Knowledge Base"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">Enterprise RAG Knowledge Base</h3>
              <p className="text-sm text-muted-foreground">
                Upload dense, multi-page PDFs and chat with them. Answers are generated with
                retrieval-augmented generation, grounded in the document text and cited down to the
                page, streamed over SSE from a FastAPI backend with Gemini embeddings indexed in
                Postgres via pgvector
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-sm bg-muted px-2 py-1 text-xs">FastAPI</span>
                <span className="rounded-sm bg-muted px-2 py-1 text-xs">Gemini</span>
                <span className="rounded-sm bg-muted px-2 py-1 text-xs">pgvector</span>
                <span className="rounded-sm bg-muted px-2 py-1 text-xs">RAG</span>
                <span className="rounded-sm bg-muted px-2 py-1 text-xs">React</span>
              </div>

              <div className="mt-4">
                <a
                  href="https://github.com/ranasohaib079/Enterprise-RAG-Knowledge-Base"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  Source
                </a>
              </div>
            </div>
          </div>

          {/* DePaul Cybersecurity Clinic */}
          <div className="rounded-xl border bg-card text-card-foreground shadow">
            <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
              <Image
                src="/img/projects/cybersecurity-clinic.jpg"
                alt="DePaul University Cybersecurity Clinic"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">DePaul University Cybersecurity Clinic</h3>
              <p className="text-sm text-muted-foreground">
                Team Lead & Developer (March 2024) — Secured a $100K grant by leading a 6-member team
                to ship a full-stack web application enabling DePaul&apos;s Cybersecurity Clinic to
                deliver real-world client services, built with role-based authentication and a
                normalized relational schema
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-sm bg-muted px-2 py-1 text-xs">Full Stack</span>
                <span className="rounded-sm bg-muted px-2 py-1 text-xs">Security</span>
                <span className="rounded-sm bg-muted px-2 py-1 text-xs">Team Lead</span>
              </div>

              <div className="mt-4">
                <a
                  href="https://github.com/cr35wx/cypher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  Source
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Recent Posts */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="title text-2xl sm:text-3xl">recent posts</h2>
          <Link href="/blog" className="flex items-center gap-1 text-sm">
            view more
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-4 rounded-xl border bg-card text-card-foreground shadow">
          <ul className="flex flex-col">
            <li>
              <div className="flex flex-col justify-between p-6 sm:flex-row sm:items-center">
                <div className="max-w-md md:max-w-lg">
                  <h3 className="text-lg font-semibold">Coming soon</h3>
                  <p className="mt-1 line-clamp-2 text-sm font-light text-muted-foreground">
                    Blog posts are on the way. Check back later for write-ups on full-stack, CV, and
                    AI projects.
                  </p>
                </div>
                <p className="mt-2 flex w-full justify-end text-sm font-light sm:mt-0 sm:w-auto">
                  —
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
