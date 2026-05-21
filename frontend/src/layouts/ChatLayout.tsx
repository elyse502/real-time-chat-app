import { type ReactNode } from "react";

interface ChatLayoutProps {
  sidebar: ReactNode;
  children: ReactNode;
}

const ChatLayout = ({ sidebar, children }: ChatLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col md:flex-row">
      {sidebar}

      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
};

export default ChatLayout;
