import type { Metadata } from "next";
import { Calistoga, Inter } from "next/font/google";
import "./globals.css";
import { Header, ChatbotProvider } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Chatbot } from "@/components/chatbot";
import { profile } from "@/lib/content";
import { siteUrl } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
});

const description =
  "Full Stack & AI/ML Software Engineer. Master's student in AI at UIUC. Portfolio of full-stack, computer vision, and ML work.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: profile.name,
    template: `%s | ${profile.name}`,
  },
  description,
  keywords: [
    "Rana Sohaib Hani",
    "software engineer",
    "full stack developer",
    "computer vision",
    "machine learning",
    "AI engineer",
    "UIUC",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: profile.name,
    title: profile.name,
    description,
    url: siteUrl,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: profile.name,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${calistoga.variable} mx-auto flex min-h-screen max-w-3xl flex-col px-8 font-sans antialiased`}>
        <ThemeProvider>
          <ChatbotProvider>
            <Header />
            <main className="grow">{children}</main>
            <Footer />
            <Chatbot />
          </ChatbotProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
