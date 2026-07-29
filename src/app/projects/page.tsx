import Image from "next/image";

export default function Projects() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="title text-balance text-4xl sm:text-5xl">my projects.</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
          </div>
        </div>

        {/* Search Engine */}
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
            <Image
              src="/img/projects/search-engine.jpg"
              alt="Search Engine"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold">Search Engine</h3>
            <p className="text-sm text-muted-foreground">
              An information retrieval engine built in Python, implementing the full pipeline from
              tokenization and document processing through inverted indexing, query matching, and
              result ranking, with unit test coverage across each stage
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-sm bg-muted px-2 py-1 text-xs">Information Retrieval</span>
              <span className="rounded-sm bg-muted px-2 py-1 text-xs">Inverted Index</span>
              <span className="rounded-sm bg-muted px-2 py-1 text-xs">Python</span>
              <span className="rounded-sm bg-muted px-2 py-1 text-xs">Ranking</span>
            </div>

            <div className="mt-4">
              <a
                href="https://github.com/ranasohaib079/Search-Engine"
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

        {/* Chat Room Server */}
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
            <Image
              src="/img/projects/chat-server.jpg"
              alt="Chat Room Server"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold">Chat Room Server</h3>
            <p className="text-sm text-muted-foreground">
              A multi-client chat room built on raw TCP sockets in Python, spawning a dedicated
              thread per connection and broadcasting messages to all other participants, with a
              mutex-guarded client registry to keep shared state safe under concurrent access
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-sm bg-muted px-2 py-1 text-xs">Concurrency</span>
              <span className="rounded-sm bg-muted px-2 py-1 text-xs">Multithreading</span>
              <span className="rounded-sm bg-muted px-2 py-1 text-xs">Python</span>
              <span className="rounded-sm bg-muted px-2 py-1 text-xs">TCP Sockets</span>
            </div>

            <div className="mt-4">
              <a
                href="https://github.com/ranasohaib079/chat-server"
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
    </article>
  );
}
