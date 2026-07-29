import type { Metadata } from "next";
import { Calistoga, Inter } from "next/font/google";
import "./globals.css";
import { Header, ChatbotProvider } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Chatbot } from "@/components/chatbot";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Rana Sohaib Hani",
  description:
    "Full Stack & AI/ML Software Engineer. Master's student in AI at UIUC. Portfolio of full-stack, computer vision, and ML work.",
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
