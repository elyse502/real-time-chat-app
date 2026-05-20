import { DEFAULT_ROOMS } from "../config/constants";
import { JoinRoomPayload, RoomSummary, User } from "../models/chat.model";

class RoomService {
  private users: User[] = [];

  public getRooms(): RoomSummary[] {
    return DEFAULT_ROOMS.map((roomName) => ({
      name: roomName,
      usersCount: this.getUsersInRoom(roomName).length,
    }));
  }

  public addUser(socketId: string, payload: JoinRoomPayload): User {
    const existingUserIndex = this.users.findIndex(
      (user) => user.socketId === socketId,
    );

    const user: User = {
      socketId,
      username: payload.username.trim(),
      room: payload.room,
    };

    if (existingUserIndex >= 0) {
      this.users[existingUserIndex] = user;
    } else {
      this.users.push(user);
    }

    return user;
  }

  public removeUser(socketId: string): User | undefined {
    const userIndex = this.users.findIndex(
      (user) => user.socketId === socketId,
    );

    if (userIndex === -1) {
      return undefined;
    }

    const [removedUser] = this.users.splice(userIndex, 1);

    return removedUser;
  }

  public getUser(socketId: string): User | undefined {
    return this.users.find((user) => user.socketId === socketId);
  }

  public getUsersInRoom(room: string): User[] {
    return this.users.filter((user) => user.room === room);
  }

  public getUsernamesInRoom(room: string): string[] {
    return this.getUsersInRoom(room).map((user) => user.username);
  }

  public roomExists(room: string): boolean {
    return DEFAULT_ROOMS.includes(room as (typeof DEFAULT_ROOMS)[number]);
  }
}

export const roomService = new RoomService();
