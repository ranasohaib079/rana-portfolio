export default function Privacy() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="title text-balance text-4xl sm:text-5xl">privacy policy.</h1>

      <div className="prose prose-sm max-w-none dark:prose-invert">
        <p>
          This is a simple personal portfolio website. I do not collect any personal data except what you explicitly submit through the contact form.
        </p>

        <h2 className="text-xl font-semibold mt-8">Contact Form</h2>
        <p>
          When you submit the contact form, I collect your name, email, and message content to respond to your inquiry. I will not share your information with third parties without your explicit consent.
        </p>

        <h2 className="text-xl font-semibold mt-8">Analytics</h2>
        <p>
          This website uses simple, privacy-focused analytics to count page views. No personally identifiable information is collected. I do not use cookies for tracking purposes.
        </p>

        <h2 className="text-xl font-semibold mt-8">Changes to This Policy</h2>
        <p>
          This privacy policy may be updated occasionally. Any changes will be posted on this page.
        </p>

        <h2 className="text-xl font-semibold mt-8">Contact</h2>
        <p>
          If you have any questions about this privacy policy, please email me at{" "}
          <a href="mailto:sohaibrana079@gmail.com" className="underline">
            sohaibrana079@gmail.com
          </a>
          .
        </p>

        <p className="text-sm text-muted-foreground mt-8">
          Last updated: July 28, 2026
        </p>
      </div>
    </article>
  );
}
