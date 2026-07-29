"use client";

import { ArrowDownRight } from "lucide-react";
import { useChatbot } from "@/components/layout/header";

export function AskChatbotButton() {
  const { setIsChatOpen } = useChatbot();

  return (
    <button
      onClick={() => setIsChatOpen(true)}
      className="flex items-center gap-2 font-medium text-foreground hover:underline"
    >
      Ask the chatbot anything about me
      <ArrowDownRight className="h-4 w-4" />
    </button>
  );
}
