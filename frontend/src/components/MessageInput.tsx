import { type FormEvent, useRef, useState } from "react";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  onTyping: () => void;
  onStopTyping: () => void;
  disabled: boolean;
}

const MessageInput = ({
  onSendMessage,
  onTyping,
  onStopTyping,
  disabled,
}: MessageInputProps) => {
  const [message, setMessage] = useState("");
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      return;
    }

    onSendMessage(trimmedMessage);

    setMessage("");

    onStopTyping();
  };

  const handleTyping = (value: string) => {
    setMessage(value);

    onTyping();

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      onStopTyping();
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-slate-800 p-4 bg-slate-900"
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          disabled={disabled}
          onChange={(event) => handleTyping(event.target.value)}
          className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none"
        />

        <button
          type="submit"
          disabled={disabled}
          className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 transition rounded-lg px-6 py-3 font-semibold cursor-pointer w-full sm:w-auto"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
