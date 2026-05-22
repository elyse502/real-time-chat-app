export interface User {
  socketId: string;
  username: string;
  room: string;
}

export interface Message {
  id: string;
  room: string;
  sender: string;
  content: string;
  timestamp: string;
  type?: "user" | "system";
}

export interface JoinRoomPayload {
  username: string;
  room: string;
}

export interface SendMessagePayload {
  room: string;
  sender: string;
  content: string;
}

export interface RoomSummary {
  name: string;
  usersCount: number;
}

export interface RoomUsersPayload {
  room: string;
  users: string[];
}
