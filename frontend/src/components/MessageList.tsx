import { type Message } from "../types/chat.types";

interface MessageListProps {
  messages: Message[];
  currentUsername: string;
}

const MessageList = ({ messages, currentUsername }: MessageListProps) => {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4">
      {messages.map((message) => {
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

              <p className="break-words">{message.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;
