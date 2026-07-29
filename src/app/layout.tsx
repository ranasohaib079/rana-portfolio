import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, ChatbotProvider } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Chatbot } from "@/components/chatbot";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Ted Thoughts",
  description: "My personal site to showcase my developer work and opinions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} mx-auto flex min-h-screen max-w-3xl flex-col px-8 font-sans antialiased`}>
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
