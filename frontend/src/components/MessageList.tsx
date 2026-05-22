import { useEffect, useRef } from "react";

import SystemMessage from "./SystemMessage";

import { type Message } from "../types/chat.types";

interface MessageListProps {
  messages: Message[];
  currentUsername: string;
}

const MessageList = ({ messages, currentUsername }: MessageListProps) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4">
      {messages.map((message) => {
        if (message.type === "system") {
          return <SystemMessage key={message.id} content={message.content} />;
        }

        const isCurrentUser = message.sender === currentUsername;

        return (
          <div
            key={message.id}
            className={`flex ${
              isCurrentUser ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xl rounded-2xl px-4 py-3 ${
                isCurrentUser ? "bg-blue-600" : "bg-slate-800"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="font-semibold">{message.sender}</span>

                <span className="text-xs text-slate-300">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </span>
              </div>

              <p className="wrap-break-word">{message.content}</p>
            </div>
          </div>
        );
      })}

      <div ref={bottomRef} />
    </div>
  );
};

export default MessageList;
