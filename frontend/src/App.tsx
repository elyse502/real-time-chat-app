import { useEffect } from "react";

import ChatHeader from "./components/ChatHeader";
import MessageInput from "./components/MessageInput";
import MessageList from "./components/MessageList";
import RoomList from "./components/RoomList";
import UsernameForm from "./components/UsernameForm";

import ChatLayout from "./layouts/ChatLayout";

import { useSocket } from "./hooks/useSocket";

import { socket } from "./services/socket";

import { SOCKET_EVENTS } from "./constants/socket-events";

import { useChatContext } from "./context/chat.context";

import type {
  JoinRoomPayload,
  Message,
  RoomSummary,
  RoomUsersPayload,
} from "./types/chat.types";

function App() {
  useSocket();

  const {
    username,
    setUsername,
    rooms,
    setRooms,
    currentRoom,
    setCurrentRoom,
    messages,
    setMessages,
    roomUsers,
    setRoomUsers,
  } = useChatContext();

  useEffect(() => {
    socket.emit(SOCKET_EVENTS.GET_ROOMS);

    socket.on(SOCKET_EVENTS.ROOMS_LIST, (roomsData: RoomSummary[]) => {
      setRooms(roomsData);
    });

    socket.on(SOCKET_EVENTS.MESSAGE_HISTORY, (history: Message[]) => {
      setMessages(history);
    });

    socket.on(SOCKET_EVENTS.RECEIVE_MESSAGE, (message: Message) => {
      setMessages((previousMessages) => [...previousMessages, message]);
    });

    socket.on(SOCKET_EVENTS.ROOM_USERS, (payload: RoomUsersPayload) => {
      if (payload.room === currentRoom) {
        setRoomUsers(payload.users);
      }
    });

    return () => {
      socket.off(SOCKET_EVENTS.ROOMS_LIST);
      socket.off(SOCKET_EVENTS.MESSAGE_HISTORY);
      socket.off(SOCKET_EVENTS.RECEIVE_MESSAGE);
      socket.off(SOCKET_EVENTS.ROOM_USERS);
    };
  }, [currentRoom, setMessages, setRoomUsers, setRooms]);

  const handleSetUsername = (enteredUsername: string) => {
    setUsername(enteredUsername);
  };

  const handleJoinRoom = (room: string) => {
    if (!username) {
      return;
    }

    const payload: JoinRoomPayload = {
      username,
      room,
    };

    setCurrentRoom(room);

    socket.emit(SOCKET_EVENTS.JOIN_ROOM, payload);
  };

  const handleSendMessage = (content: string) => {
    if (!currentRoom) {
      return;
    }

    socket.emit(SOCKET_EVENTS.SEND_MESSAGE, {
      room: currentRoom,
      sender: username,
      content,
    });
  };

  if (!username) {
    return <UsernameForm onSubmit={handleSetUsername} />;
  }

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

      {!currentRoom ? (
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-3">Welcome {username}</h2>

            <p className="text-slate-400">Select a room to start chatting</p>
          </div>
        </div>
      ) : (
        <>
          <MessageList messages={messages} currentUsername={username} />

          <MessageInput
            onSendMessage={handleSendMessage}
            disabled={!currentRoom}
          />
        </>
      )}
    </ChatLayout>
  );
}

export default App;
