import { Message, SendMessagePayload } from "../models/chat.model";
import { generateId } from "../utils/generate-id";
import { getTimestamp } from "../utils/get-timestamp";

class MessageService {
  private messages: Map<string, Message[]> = new Map();

  public getMessagesByRoom(room: string): Message[] {
    return this.messages.get(room) || [];
  }

  public createMessage(payload: SendMessagePayload): Message {
    const message: Message = {
      id: generateId(),
      room: payload.room,
      sender: payload.sender.trim(),
      content: payload.content.trim(),
      timestamp: getTimestamp(),
    };

    const existingMessages = this.getMessagesByRoom(payload.room);

    this.messages.set(payload.room, [...existingMessages, message]);

    return message;
  }

  public clearRoomMessages(room: string): void {
    this.messages.delete(room);
  }
}

export const messageService = new MessageService();
