import { Server, Socket } from "socket.io";
import { SOCKET_EVENTS } from "../config/constants";
import { messageService } from "../services/message.service";
import { roomService } from "../services/room.service";
import { JoinRoomPayload, SendMessagePayload } from "../models/chat.model";
import { isValidString } from "../utils/validators";

const emitRooms = (io: Server): void => {
  io.emit(SOCKET_EVENTS.ROOMS_LIST, roomService.getRooms());
};

const emitRoomUsers = (io: Server, room: string): void => {
  io.to(room).emit(SOCKET_EVENTS.ROOM_USERS, {
    room,
    users: roomService.getUsernamesInRoom(room),
  });
};

const registerGetRoomsHandler = (socket: Socket): void => {
  socket.on(SOCKET_EVENTS.GET_ROOMS, () => {
    socket.emit(SOCKET_EVENTS.ROOMS_LIST, roomService.getRooms());
  });
};

const registerJoinRoomHandler = (io: Server, socket: Socket): void => {
  socket.on(SOCKET_EVENTS.JOIN_ROOM, (payload: JoinRoomPayload) => {
    const username = payload.username.trim();
    const room = payload.room.trim();

    if (!isValidString(username, 3, 20)) {
      socket.emit(SOCKET_EVENTS.ERROR, {
        message: "Username must be between 3 and 20 characters",
      });

      return;
    }

    if (!roomService.roomExists(room)) {
      socket.emit(SOCKET_EVENTS.ERROR, {
        message: "Selected room does not exist",
      });

      return;
    }

    const existingUser = roomService.getUser(socket.id);

    if (existingUser) {
      socket.leave(existingUser.room);
    }

    const user = roomService.addUser(socket.id, {
      username,
      room,
    });

    socket.join(room);

    socket.emit(
      SOCKET_EVENTS.MESSAGE_HISTORY,
      messageService.getMessagesByRoom(room),
    );

    socket.to(room).emit(SOCKET_EVENTS.USER_JOINED, {
      username: user.username,
    });

    emitRoomUsers(io, room);
    emitRooms(io);
  });
};

const registerSendMessageHandler = (io: Server, socket: Socket): void => {
  socket.on(SOCKET_EVENTS.SEND_MESSAGE, (payload: SendMessagePayload) => {
    const user = roomService.getUser(socket.id);

    if (!user) {
      return;
    }

    const content = payload.content.trim();

    if (!isValidString(content, 1, 500)) {
      socket.emit(SOCKET_EVENTS.ERROR, {
        message: "Message must be between 1 and 500 characters",
      });

      return;
    }

    const message = messageService.createMessage({
      room: user.room,
      sender: user.username,
      content,
    });

    io.to(user.room).emit(SOCKET_EVENTS.RECEIVE_MESSAGE, message);
  });
};

const registerDisconnectHandler = (io: Server, socket: Socket): void => {
  socket.on(SOCKET_EVENTS.DISCONNECT, () => {
    const user = roomService.removeUser(socket.id);

    if (!user) {
      return;
    }

    socket.to(user.room).emit(SOCKET_EVENTS.USER_LEFT, {
      username: user.username,
    });

    emitRoomUsers(io, user.room);
    emitRooms(io);
  });
};

export const registerChatSocket = (io: Server): void => {
  io.on(SOCKET_EVENTS.CONNECTION, (socket: Socket) => {
    console.log(`User connected: ${socket.id}`);

    registerGetRoomsHandler(socket);
    registerJoinRoomHandler(io, socket);
    registerSendMessageHandler(io, socket);
    registerDisconnectHandler(io, socket);
  });
};
