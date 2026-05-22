interface SystemMessageProps {
  content: string;
}

const SystemMessage = ({ content }: SystemMessageProps) => {
  return (
    <div className="flex justify-center">
      <div className="bg-slate-800 text-slate-300 text-sm px-4 py-2 rounded-full">
        {content}
      </div>
    </div>
  );
};

export default SystemMessage;
