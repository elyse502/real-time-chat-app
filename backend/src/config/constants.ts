export const DEFAULT_ROOMS = [
  "General",
  "Technology",
  "Sports",
  "Random",
] as const;

export const SOCKET_EVENTS = {
  CONNECTION: "connection",
  DISCONNECT: "disconnect",
  ERROR: "error",
  GET_ROOMS: "get_rooms",
  ROOMS_LIST: "rooms_list",
  JOIN_ROOM: "join_room",
  LEAVE_ROOM: "leave_room",
  SEND_MESSAGE: "send_message",
  RECEIVE_MESSAGE: "receive_message",
  MESSAGE_HISTORY: "message_history",
  USER_JOINED: "user_joined",
  USER_LEFT: "user_left",
  ROOM_USERS: "room_users",
} as const;
