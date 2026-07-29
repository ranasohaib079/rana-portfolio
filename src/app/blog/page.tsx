import Link from "next/link";
import { Search, X } from "lucide-react";

export default function Blog() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="title">my blog.</h1>

      <div className="flex flex-col gap-12">
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search something..."
              className="flex h-10 w-full rounded-md border border-input bg-transparent pl-10 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-8 rounded-md px-3 text-xs"
            disabled
          >
            Clear
            <X className="ml-2 h-4 w-4" />
          </button>
        </div>

        <div className="rounded-xl border bg-card text-card-foreground shadow">
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
            <li className="border-t">
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
            <li className="border-t">
              <Link href="/blog/hello-world">
                <div className="flex flex-col justify-between p-6 sm:flex-row sm:items-center">
                  <div className="max-w-md md:max-w-lg">
                    <h3 className="text-lg font-semibold">Hello World!</h3>
                    <p className="mt-1 line-clamp-2 text-sm font-light text-muted-foreground">
                      This is my first post on my blog to test out how things look in markdown.
                    </p>
                  </div>
                  <p className="mt-2 flex w-full justify-end text-sm font-light sm:mt-0 sm:w-auto">
                    September 7, 2024
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
