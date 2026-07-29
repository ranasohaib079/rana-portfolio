"use client";

import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, MessageSquare, Send } from "lucide-react";
import { useChatbot } from "@/components/layout/header";

export function Chatbot() {
  const { isChatOpen, setIsChatOpen } = useChatbot();
  const [messages, setMessages] = useState<{ id: string; role: "user" | "assistant"; content: string }[]>([
    { id: "welcome", role: "assistant", content: "Hi there! I'm Ted's AI assistant. How can I help you?" },
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMsgId = `user-${Date.now()}`;
    setMessages((prev) => [...prev, { id: userMsgId, role: "user", content: input }]);

    // Simulate AI response
    setTimeout(() => {
      const aiMsgId = `ai-${Date.now()}`;
      setMessages((prev) => [
        ...prev,
        {
          id: aiMsgId,
          role: "assistant",
          content: "This is a demo chatbot. In the real implementation, this would connect to an API to get responses about Ted."
        }
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <Collapsible
      open={isChatOpen}
      onOpenChange={setIsChatOpen}
      className="fixed bottom-8 right-8 z-40 w-80 rounded-md border bg-background"
    >
      <CollapsibleTrigger className="flex flex-1 items-center justify-between border-b px-6 py-4 text-sm font-medium transition-all hover:underline">
        <section className="flex w-full items-center justify-start gap-3">
          <MessageSquare className="h-5 w-5 text-primary" />
          <div className="flex flex-col items-start">
            <p className="text-xs">Chat with</p>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <p className="text-sm font-medium">Ted Support</p>
            </div>
          </div>
        </section>
        {isChatOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="flex h-64 flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="border-t p-3">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-transparent text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
