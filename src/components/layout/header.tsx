"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MessageSquare, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect, createContext, useContext } from "react";

type ChatbotContextType = {
  isChatOpen: boolean;
  setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export function ChatbotProvider({ children }: { children: React.ReactNode }) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <ChatbotContext.Provider value={{ isChatOpen, setIsChatOpen }}>
      {children}
    </ChatbotContext.Provider>
  );
}

export function useChatbot() {
  const context = useContext(ChatbotContext);
  if (context === undefined) {
    throw new Error("useChatbot must be used within a ChatbotProvider");
  }
  return context;
}

export function Header() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const { setIsChatOpen } = useChatbot();

  // The resolved theme is only known in the browser, so defer icon rendering
  // until after mount to keep the server and client markup identical.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const navItems = [
    { name: "home", path: "/" },
    { name: "projects", path: "/projects" },
    { name: "blog", path: "/blog" },
    { name: "contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <nav className="flex items-center justify-between">
        <ul className="flex gap-4 sm:gap-8">
          {navItems.map((item) => (
            <li key={item.path} className="link">
              <Link
                href={item.path}
                className={pathname === item.path ? "text-foreground" : ""}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-0 sm:gap-4">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Chat Toggle"
            className="h-9 w-9"
            onClick={() => setIsChatOpen(true)}
          >
            <span className="sr-only">Chat Toggle</span>
            <MessageSquare className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Theme Toggle"
            className="h-9 w-9"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            <span className="sr-only">Theme Toggle</span>
            {!mounted ? (
              <span className="h-[1.2rem] w-[1.2rem]" />
            ) : resolvedTheme === "dark" ? (
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
          </Button>
        </div>
      </nav>
    </header>
  );
}
