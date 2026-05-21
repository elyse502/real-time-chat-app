import { type FormEvent, useState } from "react";

interface UsernameFormProps {
  onSubmit: (username: string) => void;
}

const UsernameForm = ({ onSubmit }: UsernameFormProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const username = value.trim();

    if (!username) {
      return;
    }

    onSubmit(username);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-slate-900 p-8 rounded-2xl border border-slate-800"
      >
        <h1 className="text-3xl font-bold mb-3">Join Chat</h1>

        <p className="text-slate-400 mb-6">Enter your username to continue</p>

        <input
          type="text"
          placeholder="Your username"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none"
        />

        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 hover:bg-blue-500 transition rounded-lg py-3 font-semibold cursor-pointer"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default UsernameForm;
