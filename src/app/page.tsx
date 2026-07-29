"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { useChatbot } from "@/components/layout/header";

export default function Home() {
  const { setIsChatOpen } = useChatbot();

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="title">Hi Sohaib here </h1>
          <p className="text-lg">Software Engineer New Grad from DePaul University </p>
          <p className="text-lg">
            I like to develop full-stack apps, watch instant coffee and get coding advice
            from my cat, {" "}
            <a
              href="https://www.instagram.com/gomugomu.cat"
              target="_blank"
              rel="noopener noreferrer"
              className="link font-medium underline underline-offset-4"
            >
              Luffy.
            </a>
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
              className="flex items-center gap-2 rounded-lg border bg-background px-4 py-2 font-medium"
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

        <div className="relative mt-4 aspect-square h-48 w-48 shrink-0 overflow-hidden rounded-lg md:mt-0">
          <Image
            src="https://ext.same-assets.com/3903566631/849522504.jpeg"
            alt="Ted's profile photo"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Work Experience */}
      <div className="mt-8">
        <div className="flex border-b">
          <div className="flex-1 border-b border-primary/50 text-center py-3 text-lg font-medium">
            Work
          </div>
          <div className="flex-1 text-center py-3 text-lg text-muted-foreground">
            Education
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-8">
          {/* Resonate */}
          <div className="flex gap-4">
            <div className="relative mt-1 h-10 w-10 rounded-full bg-neutral-100 p-1 dark:bg-neutral-800">
              <Image
                src="https://ext.same-assets.com/3903566631/700231450.png"
                alt="DBS Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Sep 2024 - Feb 2025</p>
                  <h3 className="font-medium">Resonate</h3>
                  <p className="text-sm text-muted-foreground">Full Stack Engineer (Part-time)</p>
                </div>
              </div>
              <ul className="list-inside list-disc text-sm">
                <li>Created an app that recommends books and encourages discussions amongst readers using Google Books and OpenAI</li>
                <li>Developed RESTful APIs and microservices in Go to optimize the user chat matching system, improving matching efficiency</li>
              </ul>
            </div>
          </div>

          {/* Cars Commerce */}
          <div className="flex gap-4">
            <div className="relative mt-1 h-10 w-10 rounded-full bg-neutral-100 p-1 dark:bg-neutral-800">
              <Image
                src="https://ext.same-assets.com/3903566631/1232334329.png"
                alt="SIT Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Jun 2024 - Aug 2024</p>
                  <h3 className="font-medium">Cars Commerce</h3>
                  <p className="text-sm text-muted-foreground">iOS Software Engineer (Intern)</p>
                </div>
              </div>
              <ul className="list-inside list-disc text-sm">
                <li>Developed and integrated 15 SwiftUI components that bolstered UI consistency and engagement for a user base exceeding 25 million monthly users</li>
                <li>Architected a centralized blueprint system and deployed a real-time prototyping tool to mimic car listings</li>
              </ul>
              {/* <div className="mt-2">
                <Link
                  href="https://nftvue.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  NFTVue
                </Link>
              </div> */}
            </div>
          </div>

          {/* Engageathon */}
          <div className="flex gap-4">
            <div className="relative mt-1 h-10 w-10 rounded-full bg-neutral-100 p-1 dark:bg-neutral-800">
              <Image
                src="https://ext.same-assets.com/3903566631/700231450.png"
                alt="DBS Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Nov 2023 - Apr 2024</p>
                  <h3 className="font-medium">ENGAGEathon</h3>
                  <p className="text-sm text-muted-foreground">Software Engineer (Intern)</p>
                </div>
              </div>
              <ul className="list-inside list-disc text-sm">
                <li>Launched a live-interaction posting board supporting 3 Super Bowl events in partnership with the NFL Alumni Association</li>
                <li>Developed a real-time messaging system in React Native that facilitated communication for over 50 corporations and social groups during community events</li>
              </ul>
            </div>
          </div>

          {/* Freelancing */}
          <div className="flex gap-4">
            <div className="relative mt-1 h-10 w-10 rounded-full bg-neutral-100 p-1 dark:bg-neutral-800">
              <Image
                src="https://ext.same-assets.com/3903566631/1624427419.png"
                alt="Activate Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Dec 2023 - Present</p>
                  <h3 className="font-medium">Freelancer</h3>
                  <p className="text-sm text-muted-foreground">Web Developer</p>
                </div>
              </div>
              <ul className="list-inside list-disc text-sm">
                <li>Crafted responsive, custom websites for mosques, learning centers, and other diverse clients using modern web technologies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">featured projects</h2>
          <Link href="/projects" className="flex items-center gap-1 text-sm">
            view more
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* TradingView Project */}
          <div className="rounded-xl border bg-card text-card-foreground shadow">
            <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
              <Image
                src="https://ext.same-assets.com/3903566631/849522504.png"
                alt="Tradingview Telegram Alerts"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">Tradingview Telegram Alerts</h3>
              <p className="text-sm text-muted-foreground">
                Real-time trading alerts with chart snapshots sent to Telegram, designed to keep traders informed and responsive to market changes
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-sm bg-muted px-2 py-1 text-xs">Docker</span>
                <span className="rounded-sm bg-muted px-2 py-1 text-xs">FastAPI</span>
                <span className="rounded-sm bg-muted px-2 py-1 text-xs">Fly.io</span>
                <span className="rounded-sm bg-muted px-2 py-1 text-xs">Python</span>
                <span className="rounded-sm bg-muted px-2 py-1 text-xs">Selenium</span>
                <span className="rounded-sm bg-muted px-2 py-1 text-xs">Telegram Bot API</span>
              </div>

              <div className="mt-4">
                <a
                  href="https://github.com/tedawf/tradingview-telegram-alerts"
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

          {/* NFTVue Project */}
          <div className="rounded-xl border bg-card text-card-foreground shadow">
            <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
              <Image
                src="https://ext.same-assets.com/137667400/849522504.bmp"
                alt="NFTVue"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">NFTVue</h3>
              <p className="text-sm text-muted-foreground">
                Non-Fungible Tokens (NFTs) Gallery Viewer website that allows users to connect their crypto wallets to view and verify their tokens
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-sm bg-muted px-2 py-1 text-xs">HashKey DID</span>
                <span className="rounded-sm bg-muted px-2 py-1 text-xs">MetaMask</span>
                <span className="rounded-sm bg-muted px-2 py-1 text-xs">NFTScan</span>
                <span className="rounded-sm bg-muted px-2 py-1 text-xs">NextJS</span>
                <span className="rounded-sm bg-muted px-2 py-1 text-xs">TailwindCSS</span>
                <span className="rounded-sm bg-muted px-2 py-1 text-xs">WalletConnect</span>
                <span className="rounded-sm bg-muted px-2 py-1 text-xs">Web3</span>
              </div>

              <div className="mt-4">
                <a
                  href="https://nftvue.vercel.app"
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
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" x2="22" y1="12" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">recent posts</h2>
          <Link href="/blog" className="flex items-center gap-1 text-sm">
            view more
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-4 rounded-xl border bg-card text-card-foreground shadow">
          <ul className="flex flex-col">
            <li>
              <Link href="/blog/my-portfolio-is-live">
                <div className="flex flex-col justify-between p-6 sm:flex-row sm:items-center">
                  <div className="max-w-md md:max-w-lg">
                    <h3 className="text-lg font-semibold">My Portfolio is Live: Here&apos;s What I Learned</h3>
                    <p className="mt-1 line-clamp-2 text-sm font-light text-muted-foreground">
                      From a sleek, minimal design to an integrated AI chatbot. It even got a live review from one of my favorite creators!
                    </p>
                  </div>
                  <p className="mt-2 flex w-full justify-end text-sm font-light sm:mt-0 sm:w-auto">
                    September 27, 2024
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/blog/making-tvta">
                <div className="flex flex-col justify-between p-6 sm:flex-row sm:items-center">
                  <div className="max-w-md md:max-w-lg">
                    <h3 className="text-lg font-semibold">Making TradingView Telegram Alerts</h3>
                    <p className="mt-1 line-clamp-2 text-sm font-light text-muted-foreground">
                      Real-time trading alerts with chart snapshots sent to Telegram, designed for real traders.
                    </p>
                  </div>
                  <p className="mt-2 flex w-full justify-end text-sm font-light sm:mt-0 sm:w-auto">
                    September 11, 2024
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
