interface ChatHeaderProps {
  room: string;
  users: string[];
}

const ChatHeader = ({ room, users }: ChatHeaderProps) => {
  return (
    <header className="border-b border-slate-800 p-4 bg-slate-900">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold">{room || "Select a room"}</h2>

          <p className="text-sm text-slate-400">{users.length} users online</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {users.map((user) => (
            <span
              key={user}
              className="bg-slate-800 px-3 py-1 rounded-full text-sm"
            >
              {user}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;
