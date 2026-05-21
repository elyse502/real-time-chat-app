import { useEffect } from "react";
import { socket } from "../services/socket";

export const useSocket = (): void => {
  useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);
};
