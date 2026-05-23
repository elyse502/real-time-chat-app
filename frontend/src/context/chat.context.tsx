/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  type Dispatch,
  type ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

import type { Message, RoomSummary } from "../types/chat.types";

import { useLocalStorage } from "../hooks/useLocalStorage";

interface ChatContextValue {
  username: string;
  setUsername: (username: string) => void;
  currentRoom: string;
  setCurrentRoom: (room: string) => void;
  rooms: RoomSummary[];
  setRooms: (rooms: RoomSummary[]) => void;
  messages: Message[];
  setMessages: Dispatch<React.SetStateAction<Message[]>>;
  roomUsers: string[];
  setRoomUsers: (users: string[]) => void;
  typingUsers: string[];
  setTypingUsers: Dispatch<React.SetStateAction<string[]>>;
}

const ChatContext = createContext<ChatContextValue | undefined>(undefined);

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const [username, setUsername] = useLocalStorage("chat_username", "");
  const [typingUsers, setTypingUsers] = useState<string[]>([]);
  const [currentRoom, setCurrentRoom] = useState("");
  const [rooms, setRooms] = useState<RoomSummary[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [roomUsers, setRoomUsers] = useState<string[]>([]);

  const value = useMemo(
    () => ({
      username,
      setUsername,
      currentRoom,
      setCurrentRoom,
      rooms,
      setRooms,
      messages,
      setMessages,
      roomUsers,
      setRoomUsers,
      typingUsers,
      setTypingUsers,
    }),
    [
      username,
      currentRoom,
      rooms,
      messages,
      roomUsers,
      typingUsers,
      setUsername,
    ],
  );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChatContext = (): ChatContextValue => {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error("useChatContext must be used within ChatProvider");
  }

  return context;
};
