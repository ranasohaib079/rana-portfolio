import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about roles, collaborations, or feedback on the site.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="title text-balance text-4xl sm:text-5xl">contact me.</h1>
      <ContactForm />
    </article>
  );
}
