/**
 * Single source of truth for everything the site says about me.
 *
 * The pages render from this and the chatbot's system prompt is serialised from
 * it, so the assistant can never drift from what a visitor can actually read.
 */

export const profile = {
  name: "Rana Sohaib Hani",
  shortName: "Sohaib",
  greeting: "hi, sohaib here.",
  headline: "Full Stack & Computer Vision/AI Engineer",
  tagline: "Master's student in AI at UIUC. Mostly full-stack, increasingly ML.",
  email: "sohaibrana079@gmail.com",
  photo: "/img/me-1.jpg",
  resume: "/resume.pdf",
  githubUser: "ranasohaib079",
  links: {
    github: "https://github.com/ranasohaib079",
    linkedin: "https://linkedin.com/in/rshani/",
  },
} as const;

export type Job = {
  company: string;
  role: string;
  period: string;
  logo: string;
  points: string[];
};

export const work: Job[] = [
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

export type School = {
  name: string;
  degree: string;
  period: string;
  logo: string;
};

export const education: School[] = [
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

export type Project = {
  title: string;
  image: string;
  alt: string;
  /** Shown on the projects page. */
  description: string;
  /** Shown on the home page's featured cards; falls back to description. */
  summary?: string;
  tags: string[];
  /** Narrower tag list for the smaller home page cards; falls back to tags. */
  featuredTags?: string[];
  source?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Enterprise RAG Knowledge Base",
    image: "/img/projects/enterprise-rag.jpg",
    alt: "Enterprise RAG Knowledge Base",
    description:
      "Upload dense, multi-page PDFs and chat with them. A FastAPI ingestion pipeline parses each page, chunks it, and embeds it into Postgres with pgvector under an HNSW index; questions retrieve the top matching chunks and stream a Gemini-grounded answer over SSE, cited down to the page, and refuse to answer when nothing clears the similarity threshold",
    summary:
      "Upload dense, multi-page PDFs and chat with them. Answers are generated with retrieval-augmented generation, grounded in the document text and cited down to the page, streamed over SSE from a FastAPI backend with Gemini embeddings indexed in Postgres via pgvector",
    tags: [
      "Docker",
      "FastAPI",
      "Gemini",
      "pgvector",
      "PostgreSQL",
      "RAG",
      "React",
      "TypeScript",
    ],
    featuredTags: ["FastAPI", "Gemini", "pgvector", "RAG", "React"],
    source: "https://github.com/ranasohaib079/Enterprise-RAG-Knowledge-Base",
    featured: true,
  },
  {
    title: "DePaul University Cybersecurity Clinic",
    image: "/img/projects/cybersecurity-clinic.jpg",
    alt: "DePaul University Cybersecurity Clinic",
    description:
      "Team Lead & Developer (March 2024) — Secured a $100K grant by leading a 6-member team to ship a full-stack web application enabling DePaul's Cybersecurity Clinic to deliver real-world client services, built with role-based authentication and a normalized relational schema",
    tags: ["Flask", "Full Stack", "MariaDB", "React", "Security", "Team Lead"],
    featuredTags: ["Full Stack", "Security", "Team Lead"],
    source: "https://github.com/cr35wx/cypher",
    featured: true,
  },
  {
    title: "Portfolio AI Assistant",
    image: "/img/projects/portfolio-chatbot.jpg",
    alt: "Portfolio AI Assistant",
    description:
      "The chatbot on this site. A Next.js route handler streams Gemini responses through the Vercel AI SDK, grounded in a single structured content module so it can only answer from real portfolio data and refuses everything else. Tool calls let it pull live GitHub repo stats, deep-link to page sections, and hand over the resume, with per-IP rate limiting and graceful degradation when the model quota runs out",
    tags: [
      "Gemini",
      "Next.js",
      "Rate Limiting",
      "Streaming",
      "Tool Calling",
      "TypeScript",
      "Vercel AI SDK",
    ],
    source: "https://github.com/ranasohaib079/rana-portfolio",
  },
  {
    title: "Search Engine",
    image: "/img/projects/search-engine.jpg",
    alt: "Search Engine",
    description:
      "An information retrieval engine built in Python, implementing the full pipeline from tokenization and document processing through inverted indexing, query matching, and result ranking, with unit test coverage across each stage",
    tags: ["Information Retrieval", "Inverted Index", "Python", "Ranking"],
    source: "https://github.com/ranasohaib079/Search-Engine",
  },
  {
    title: "Chat Room Server",
    image: "/img/projects/chat-server.jpg",
    alt: "Chat Room Server",
    description:
      "A multi-client chat room built on raw TCP sockets in Python, spawning a dedicated thread per connection and broadcasting messages to all other participants, with a mutex-guarded client registry to keep shared state safe under concurrent access",
    tags: ["Concurrency", "Multithreading", "Python", "TCP Sockets"],
    source: "https://github.com/ranasohaib079/chat-server",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "Java", "TypeScript", "JavaScript", "Go", "Swift", "C", "C++"],
  },
  {
    label: "Frameworks & Tools",
    items: [
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
    ],
  },
  {
    label: "ML & AI",
    items: [
      "Computer Vision",
      "LLMs",
      "Generative AI",
      "PyTorch",
      "Hugging Face Transformers",
      "Model Inference",
    ],
  },
  {
    label: "Databases & Cloud",
    items: ["AWS", "SQL", "PostgreSQL", "MariaDB", "MySQL", "Supabase", "Firebase", "GCP"],
  },
];

/** Anchors the chatbot's linkToSection tool is allowed to send visitors to. */
export const sections = {
  work: { href: "/#experience", label: "Work experience" },
  education: { href: "/#experience", label: "Education" },
  skills: { href: "/#skills", label: "Skills" },
  projects: { href: "/projects", label: "All projects" },
  blog: { href: "/blog", label: "Blog" },
  contact: { href: "/contact", label: "Contact" },
  resume: { href: "/resume.pdf", label: "Resume" },
} as const;

export type SectionKey = keyof typeof sections;
