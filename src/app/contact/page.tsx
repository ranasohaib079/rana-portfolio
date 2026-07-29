import Link from "next/link";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="title">contact me.</h1>

      <form>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="h-16">
            <input
              type="text"
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              id="name"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="h-16">
            <input
              type="email"
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              id="email"
              placeholder="Email"
              autoComplete="email"
              name="email"
            />
          </div>
        </div>
        <div className="mt-2">
          <textarea
            className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            id="message"
            placeholder="Leave feedback about the site, career opportunities or just to say hello etc."
            name="message"
            rows={6}
          />
        </div>
        <div className="mt-2">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full disabled:opacity-50"
            type="submit"
          >
            <div className="flex items-center">
              <span>Send Message</span>
              <Send className="ml-2 h-4 w-4" />
            </div>
          </button>
          <p className="mt-4 text-xs text-muted-foreground">
            By submitting this form, I agree to the{" "}
            <Link href="/privacy" className="link font-semibold">
              privacy&nbsp;policy.
            </Link>
          </p>
        </div>
      </form>
    </article>
  );
}
