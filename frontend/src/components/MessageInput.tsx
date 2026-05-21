import { type FormEvent, useState } from "react";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  disabled: boolean;
}

const MessageInput = ({ onSendMessage, disabled }: MessageInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      return;
    }

    onSendMessage(trimmedMessage);

    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-slate-800 p-4 bg-slate-900"
    >
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          disabled={disabled}
          onChange={(event) => setMessage(event.target.value)}
          className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none"
        />

        <button
          type="submit"
          disabled={disabled}
          className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 transition rounded-lg px-6 py-3 font-semibold cursor-pointer"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
