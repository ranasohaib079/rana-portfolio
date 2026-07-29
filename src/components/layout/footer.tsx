import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center pb-32 sm:flex-row-reverse sm:justify-between">
      <section className="flex gap-6">
        <a
          href="https://linkedin.com/in/tedawf"
          target="_blank"
          className="text-muted-foreground hover:text-foreground"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <span className="sr-only">LinkedIn</span>
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="https://github.com/tedawf"
          target="_blank"
          className="text-muted-foreground hover:text-foreground"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <span className="sr-only">GitHub</span>
          <Github className="h-5 w-5" />
        </a>
        <a
          href="mailto:hello@tedawf.com"
          target="_blank"
          className="text-muted-foreground hover:text-foreground"
          rel="noopener noreferrer"
          title="Email"
        >
          <span className="sr-only">Email</span>
          <Mail className="h-5 w-5" />
        </a>
      </section>
      <section className="mt-8 sm:mt-0">
        <p className="text-center text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()}</span>{" "}
          <Link href="/" className="link">
            tedawf.com
          </Link>{" "}
          |{" "}
          <Link href="/privacy" className="link font-bold">
            privacy?
          </Link>
        </p>
      </section>
    </footer>
  );
}
