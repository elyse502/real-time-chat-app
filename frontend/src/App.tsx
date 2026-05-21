import { useEffect } from "react";

import ChatHeader from "./components/ChatHeader";
import RoomList from "./components/RoomList";

import ChatLayout from "./layouts/ChatLayout";

import { useSocket } from "./hooks/useSocket";
import { socket } from "./services/socket";

import { SOCKET_EVENTS } from "./constants/socket-events";

import { useChatContext } from "./context/chat.context";

import type { RoomSummary, RoomUsersPayload } from "./types/chat.types";

function App() {
  useSocket();

  const { rooms, setRooms, currentRoom, setCurrentRoom, roomUsers } =
    useChatContext();

  useEffect(() => {
    socket.emit(SOCKET_EVENTS.GET_ROOMS);

    socket.on(SOCKET_EVENTS.ROOMS_LIST, (roomsData: RoomSummary[]) => {
      setRooms(roomsData);
    });

    socket.on(SOCKET_EVENTS.ROOM_USERS, (payload: RoomUsersPayload) => {
      if (payload.room === currentRoom) {
        return;
      }
    });

    return () => {
      socket.off(SOCKET_EVENTS.ROOMS_LIST);
      socket.off(SOCKET_EVENTS.ROOM_USERS);
    };
  }, [setRooms, currentRoom]);

  const handleJoinRoom = (room: string) => {
    setCurrentRoom(room);
  };

  return (
    <ChatLayout
      sidebar={
        <RoomList
          rooms={rooms}
          currentRoom={currentRoom}
          onJoinRoom={handleJoinRoom}
        />
      }
    >
      <ChatHeader room={currentRoom} users={roomUsers} />

      <div className="flex-1 flex items-center justify-center p-6">
        {!currentRoom ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-3">Welcome to the chat</h2>

            <p className="text-slate-400">Select a room to start chatting</p>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold">{currentRoom}</h2>

            <p className="text-slate-400 mt-2">Chat interface coming next</p>
          </div>
        )}
      </div>
    </ChatLayout>
  );
}

export default App;
