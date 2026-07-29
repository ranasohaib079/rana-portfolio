import { Search, X } from "lucide-react";

export default function Blog() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="title text-balance text-4xl sm:text-5xl">my blog.</h1>

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
              <div className="flex flex-col justify-between p-6 sm:flex-row sm:items-center">
                <div className="max-w-md md:max-w-lg">
                  <h3 className="text-lg font-semibold">Coming soon</h3>
                  <p className="mt-1 line-clamp-2 text-sm font-light text-muted-foreground">
                    No posts yet — this card is a placeholder so it&apos;s easy to add real write-ups
                    later without changing the layout.
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
