import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="title">my projects.</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Tradingview Telegram Alerts */}
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

        {/* NFTVue */}
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

        {/* Portfolio 2023 (Outdated) */}
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="relative h-48 w-full overflow-hidden rounded-t-xl bg-gray-100 dark:bg-gray-800">
            <div className="flex h-full w-full items-center justify-center p-4">
              <Image
                src="https://ext.same-assets.com/137667400/849522504.jpeg"
                alt="Portfolio 2023"
                width={250}
                height={150}
                className="object-contain"
              />
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold">Portfolio 2023 (Outdated)</h3>
            <p className="text-sm text-muted-foreground">
              Simple markdown portfolio made with Astro
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-sm bg-muted px-2 py-1 text-xs">Astro</span>
              <span className="rounded-sm bg-muted px-2 py-1 text-xs">Netlify</span>
              <span className="rounded-sm bg-muted px-2 py-1 text-xs">SEO</span>
              <span className="rounded-sm bg-muted px-2 py-1 text-xs">TailwindCSS</span>
            </div>

            <div className="mt-4 flex gap-2">
              <a
                href="https://tedawf-dot-com.netlify.app"
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
              <a
                href="https://github.com/tedawf/portfolio-2023"
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

        {/* Rapid Ride Fight */}
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="relative h-48 w-full overflow-hidden rounded-t-xl bg-gray-100 dark:bg-gray-800">
            <Image
              src="https://ext.same-assets.com/137667400/849522504.bmp"
              alt="Rapid Ride Fight"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold">Rapid Ride Fight (Final Year)</h3>
            <p className="text-sm text-muted-foreground">
              3D capture-the-flag, multiplayer boat fighting, with smart AI and water graphics
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-sm bg-muted px-2 py-1 text-xs">3D</span>
              <span className="rounded-sm bg-muted px-2 py-1 text-xs">C/C++</span>
              <span className="rounded-sm bg-muted px-2 py-1 text-xs">Custom Game Engine</span>
              <span className="rounded-sm bg-muted px-2 py-1 text-xs">OpenGL</span>
            </div>

            <div className="mt-4 flex gap-2">
              <a
                href="https://www.youtube.com/watch?v=bge3fiypg5U"
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
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Gameplay
              </a>
              <a
                href="https://www.youtube.com/watch?v=PNAO-aI1Daw"
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
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Trailer
              </a>
            </div>
          </div>
        </div>

        {/* Glowing Under */}
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="relative h-48 w-full overflow-hidden rounded-t-xl bg-gray-100 dark:bg-gray-800">
            <div className="flex h-full w-full items-center justify-center bg-teal-900 p-4">
              <h2 className="text-2xl font-bold text-teal-200">Glowing Under</h2>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold">Glowing Under (2nd Year)</h3>
            <p className="text-sm text-muted-foreground">
              2D platformer with a focus on puzzle-solving, no-death exploration and storytelling
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-sm bg-muted px-2 py-1 text-xs">2D</span>
              <span className="rounded-sm bg-muted px-2 py-1 text-xs">C/C++</span>
              <span className="rounded-sm bg-muted px-2 py-1 text-xs">Custom Game Engine</span>
              <span className="rounded-sm bg-muted px-2 py-1 text-xs">OpenGL</span>
            </div>

            <div className="mt-4">
              <a
                href="https://www.youtube.com/watch?v=u6RYwBZlSfg"
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
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Trailer
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
