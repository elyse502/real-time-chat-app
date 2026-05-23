interface TypingIndicatorProps {
  users: string[];
}

const TypingIndicator = ({ users }: TypingIndicatorProps) => {
  if (users.length === 0) {
    return null;
  }

  return (
    <div className="px-6 py-2 text-sm text-slate-400">
      {users.join(", ")} typing...
    </div>
  );
};

export default TypingIndicator;
