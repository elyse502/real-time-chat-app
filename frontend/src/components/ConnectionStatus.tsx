import { useEffect, useState } from "react";

import { socket } from "../services/socket";

const ConnectionStatus = () => {
  const [connected, setConnected] = useState(socket.connected);

  useEffect(() => {
    const handleConnect = () => {
      setConnected(true);
    };

    const handleDisconnect = () => {
      setConnected(false);
    };

    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);

    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
    };
  }, []);

  return (
    <div className="px-4 py-2 border-b border-slate-800 bg-slate-900">
      <div className="flex items-center gap-2 text-sm">
        <div
          className={`w-3 h-3 rounded-full ${
            connected ? "bg-green-500" : "bg-red-500"
          }`}
        />

        <span>{connected ? "Connected" : "Disconnected"}</span>
      </div>
    </div>
  );
};

export default ConnectionStatus;
