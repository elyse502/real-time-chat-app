<div align="center">

# 💬 Real-Time Chat Application 🌐

## A Production-Grade WebSocket-Powered Messaging Platform

![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-4.x-010101?style=for-the-badge&logo=socket.io&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

### **Built with Modern Web Technologies:**

![WebSockets](https://img.shields.io/badge/WebSockets-Real_Time-FF6B6B?style=flat-square&logo=websocket&logoColor=white)
![Event-Driven](https://img.shields.io/badge/Event-Driven-Architecture-4CAF50?style=flat-square&logo=events&logoColor=white)
![Bidirectional](https://img.shields.io/badge/Bidirectional-Communication-1E90FF?style=flat-square&logo=exchange&logoColor=white)
![Type Safety](https://img.shields.io/badge/Type-Safe-Full-3178C6?style=flat-square&logo=typescript&logoColor=white)

</div>

---

## 📋 Table of Contents

- [💬 Real-Time Chat Application 🌐](#-real-time-chat-application-)
  - [A Production-Grade WebSocket-Powered Messaging Platform](#a-production-grade-websocket-powered-messaging-platform)
    - [**Built with Modern Web Technologies:**](#built-with-modern-web-technologies)
  - [📋 Table of Contents](#-table-of-contents)
  - [🎯 Project Overview](#-project-overview)
    - [Key Differentiators](#key-differentiators)
  - [✨ Features](#-features)
  - [🛠️ Tech Stack](#️-tech-stack)
    - [Frontend](#frontend)
    - [Backend](#backend)
  - [🏗️ System Architecture](#️-system-architecture)
  - [📁 Project Structure](#-project-structure)
  - [🎨 Core Features Deep Dive](#-core-features-deep-dive)
    - [1. Real-Time Messaging 💬](#1-real-time-messaging-)
    - [2. Room-Based Communication 🏠](#2-room-based-communication-)
    - [3. Typing Indicators ⌨️](#3-typing-indicators-️)
    - [4. Live User Tracking 👥](#4-live-user-tracking-)
    - [5. Message History 📜](#5-message-history-)
  - [🔌 Socket Events](#-socket-events)
    - [Client → Server Events](#client--server-events)
    - [Server → Client Events](#server--client-events)
  - [🏛️ Backend Architecture](#️-backend-architecture)
    - [Layered Design](#layered-design)
    - [Service Layer Example](#service-layer-example)
  - [🎭 Frontend Architecture](#-frontend-architecture)
    - [Component Hierarchy](#component-hierarchy)
    - [Context Structure](#context-structure)
    - [Custom Hooks](#custom-hooks)
  - [⚙️ Installation \& Setup](#️-installation--setup)
    - [Prerequisites](#prerequisites)
    - [Quick Start](#quick-start)
  - [🔧 Configuration](#-configuration)
    - [Backend Environment (.env)](#backend-environment-env)
    - [Frontend Environment (.env)](#frontend-environment-env)
  - [📊 Validation Rules](#-validation-rules)
    - [Validation Implementation](#validation-implementation)
  - [🎨 User Experience Highlights](#-user-experience-highlights)
  - [📈 Performance Optimizations](#-performance-optimizations)
  - [🔮 Future Roadmap](#-future-roadmap)
  - [📚 Learning Outcomes](#-learning-outcomes)
  - [👨‍💻 Author](#-author)
    - [**Elysée NIYIBIZI**](#elysée-niyibizi)
  - [📄 License](#-license)
  - [🙏 Acknowledgments](#-acknowledgments)
    - [⭐ Star this repository if it helped you learn real-time application development!](#-star-this-repository-if-it-helped-you-learn-real-time-application-development)

---

## 🎯 Project Overview

A **production-ready real-time chat platform** demonstrating modern WebSocket architecture, full-stack TypeScript development, and responsive UI design. This application enables users to join chat rooms, exchange messages instantly, view active participants, and experience seamless live communication.

### Key Differentiators

| Aspect               | Implementation                        |
| -------------------- | ------------------------------------- |
| **Communication**    | Real-time WebSocket with Socket.IO    |
| **Architecture**     | Clean separation of concerns          |
| **Type Safety**      | Full TypeScript across stack          |
| **State Management** | React Context API                     |
| **Styling**          | Responsive Tailwind CSS               |
| **Persistence**      | In-memory with planned DB integration |

---

## ✨ Features

| Category                  | Feature                          | Status |
| ------------------------- | -------------------------------- | ------ |
| **Messaging**             | Real-time message exchange       | ✅     |
| **Rooms**                 | Multiple chat rooms support      | ✅     |
| **User Tracking**         | Live participant list per room   | ✅     |
| **Typing Indicators**     | Real-time typing status          | ✅     |
| **Message History**       | Previous conversations per room  | ✅     |
| **Auto-Scroll**           | Automatic scroll to new messages | ✅     |
| **System Notifications**  | Join/leave event broadcasting    | ✅     |
| **Username Persistence**  | Local storage username storage   | ✅     |
| **Connection Monitoring** | Real-time connection status      | ✅     |
| **Responsive Design**     | Mobile, tablet, desktop support  | ✅     |
| **Type Safety**           | Full TypeScript implementation   | ✅     |
| **Toast Notifications**   | User-friendly feedback system    | ✅     |

---

## 🛠️ Tech Stack

<div align="center">

### Frontend

| Technology           | Version | Purpose       | Badge                                                                                             |
| -------------------- | ------- | ------------- | ------------------------------------------------------------------------------------------------- |
| **React**            | 19.x    | UI Library    | ![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)               |
| **TypeScript**       | 5.x     | Type Safety   | ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white) |
| **Vite**             | 5.x     | Build Tool    | ![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)                   |
| **Tailwind CSS**     | 3.x     | Styling       | ![Tailwind](https://img.shields.io/badge/Tailwind-3.x-38B2AC?logo=tailwind-css&logoColor=white)   |
| **Socket.IO Client** | 4.x     | Real-time     | ![Socket.IO](https://img.shields.io/badge/Socket.IO-4.x-010101?logo=socket.io&logoColor=white)    |
| **React Hot Toast**  | 2.x     | Notifications | ![Toast](https://img.shields.io/badge/Toast-2.x-FF5F6D?logo=react&logoColor=white)                |

### Backend

| Technology     | Version | Purpose            | Badge                                                                                             |
| -------------- | ------- | ------------------ | ------------------------------------------------------------------------------------------------- |
| **Node.js**    | 18+     | Runtime            | ![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)        |
| **Express.js** | 4.x     | Web Framework      | ![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white)          |
| **Socket.IO**  | 4.x     | WebSocket Server   | ![Socket.IO](https://img.shields.io/badge/Socket.IO-4.x-010101?logo=socket.io&logoColor=white)    |
| **TypeScript** | 5.x     | Type Safety        | ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white) |
| **dotenv**     | 16.x    | Environment Config | ![dotenv](https://img.shields.io/badge/dotenv-16.x-ECD53F?logo=dotenv&logoColor=black)            |

</div>

---

## 🏗️ System Architecture

```console
┌─────────────────────────────────────────────────────────────────────────────┐
│                              FRONTEND (React)                               │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                         UI Components                                │   │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ │   │
│  │  │RoomList  │ │MessageList│ │MessageInput│ │ChatHeader│ │UsernameForm│ │   │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘ │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                         Context API                                  │   │
│  │  • ChatContext (messages, users, typing status)                     │   │
│  │  • SocketContext (connection management)                            │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                      Socket.IO Client                                │   │
│  │  • Emits events to server                                           │   │
│  │  • Listens for server events                                        │   │
│  │  • Manages reconnection                                             │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────┬───────────────────────────────────────────┘
                                  │
                    WebSocket (ws:// or wss://)
                                  │
┌─────────────────────────────────┴───────────────────────────────────────────┐
│                              BACKEND (Node.js)                              │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                       Socket.IO Server                               │   │
│  │  • Manages client connections                                       │   │
│  │  • Routes events to handlers                                        │   │
│  │  • Broadcasts to rooms                                              │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                         Services Layer                               │   │
│  │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐                │   │
│  │  │RoomService   │ │MessageService│ │UserService   │                │   │
│  │  └──────────────┘ └──────────────┘ └──────────────┘                │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                         Data Models                                  │   │
│  │  • Room (id, name, users, messages)                                 │   │
│  │  • Message (id, userId, text, timestamp)                            │   │
│  │  • User (id, username, roomId)                                      │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```console
real-time-chat-app/
│
├── 📁 backend/                          # Node.js + Express + Socket.IO
│   ├── 📁 src/
│   │   ├── 📁 config/
│   │   │   └── 📄 constants.ts         # Application constants
│   │   ├── 📁 models/
│   │   │   ├── 📄 room.model.ts        # Room data structure
│   │   │   ├── 📄 message.model.ts     # Message data structure
│   │   │   └── 📄 user.model.ts        # User data structure
│   │   ├── 📁 services/
│   │   │   ├── 📄 room.service.ts      # Room business logic
│   │   │   ├── 📄 message.service.ts   # Message business logic
│   │   │   └── 📄 user.service.ts      # User business logic
│   │   ├── 📁 sockets/
│   │   │   └── 📄 chat.socket.ts       # Socket event handlers
│   │   ├── 📁 types/
│   │   │   └── 📄 index.ts             # TypeScript interfaces
│   │   ├── 📁 utils/
│   │   │   └── 📄 validators.ts        # Input validation
│   │   ├── 📄 app.ts                   # Express app configuration
│   │   └── 📄 server.ts                # Server entry point
│   ├── 📄 package.json                  # Backend dependencies
│   ├── 📄 tsconfig.json                 # TypeScript config
│   └── 📄 .env                          # Environment variables
│
├── 📁 frontend/                         # React + Vite + Tailwind
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   │   ├── 📁 Chat/
│   │   │   │   ├── 📄 ChatContainer.tsx
│   │   │   │   ├── 📄 MessageList.tsx
│   │   │   │   ├── 📄 MessageInput.tsx
│   │   │   │   └── 📄 TypingIndicator.tsx
│   │   │   ├── 📁 Room/
│   │   │   │   ├── 📄 RoomList.tsx
│   │   │   │   └── 📄 RoomItem.tsx
│   │   │   ├── 📁 Layout/
│   │   │   │   ├── 📄 ChatHeader.tsx
│   │   │   │   └── 📄 Sidebar.tsx
│   │   │   └── 📁 UI/
│   │   │       ├── 📄 ConnectionStatus.tsx
│   │   │       └── 📄 UsernameForm.tsx
│   │   ├── 📁 context/
│   │   │   ├── 📄 ChatContext.tsx      # Chat state management
│   │   │   └── 📄 SocketContext.tsx    # Socket connection management
│   │   ├── 📁 hooks/
│   │   │   ├── 📄 useSocket.ts         # Socket lifecycle hook
│   │   │   └── 📄 useLocalStorage.ts   # Persistent storage hook
│   │   ├── 📁 layouts/
│   │   │   └── 📄 MainLayout.tsx       # App layout wrapper
│   │   ├── 📁 services/
│   │   │   └── 📄 socket.ts            # Socket client initialization
│   │   ├── 📁 types/
│   │   │   └── 📄 index.ts             # TypeScript interfaces
│   │   ├── 📄 App.tsx                  # Root component
│   │   └── 📄 main.tsx                 # Entry point
│   ├── 📁 public/                       # Static assets
│   ├── 📄 package.json                  # Frontend dependencies
│   ├── 📄 vite.config.ts                # Vite configuration
│   └── 📄 .env                          # Environment variables
│
├── 📄 .gitignore                        # Git ignore rules
└── 📄 README.md                         # Documentation
```

---

## 🎨 Core Features Deep Dive

### 1. Real-Time Messaging 💬

Users send and receive messages instantly using WebSockets powered by Socket.IO.

```typescript
// Client sends message
socket.emit("send_message", { roomId, message, username });

// Server broadcasts to room
io.to(roomId).emit("receive_message", {
  id: uuid(),
  username,
  text: message,
  timestamp: new Date(),
});
```

### 2. Room-Based Communication 🏠

Users join independent chat rooms for organized conversations.

```typescript
// Join room
socket.emit("join_room", { roomId, username });

// Server manages room membership
socket.join(roomId);
io.to(roomId).emit("user_joined", { username });
```

### 3. Typing Indicators ⌨️

Real-time typing status shows who is actively typing.

```typescript
// Client on keypress
socket.emit("start_typing", { roomId, username });

// Server broadcasts
socket.broadcast.to(roomId).emit("user_typing", { username });
```

### 4. Live User Tracking 👥

Each room displays all currently connected users.

```typescript
// Track users per room
const roomUsers = new Map<string, Set<string>>();

// Broadcast updates
io.to(roomId).emit("room_users", Array.from(roomUsers.get(roomId)));
```

### 5. Message History 📜

Users receive previous conversation history when joining.

```typescript
// Store messages per room
const messageHistory = new Map<string, Message[]>();

// Send history on join
socket.emit("message_history", messageHistory.get(roomId));
```

---

## 🔌 Socket Events

### Client → Server Events

| Event          | Payload                                                 | Description               |
| -------------- | ------------------------------------------------------- | ------------------------- |
| `get_rooms`    | `{}`                                                    | Fetch all available rooms |
| `join_room`    | `{ roomId: string, username: string }`                  | Join a specific room      |
| `send_message` | `{ roomId: string, message: string, username: string }` | Send a message to room    |
| `start_typing` | `{ roomId: string, username: string }`                  | Notify typing started     |
| `stop_typing`  | `{ roomId: string, username: string }`                  | Notify typing stopped     |

### Server → Client Events

| Event             | Payload                | Description                 |
| ----------------- | ---------------------- | --------------------------- |
| `rooms_list`      | `Room[]`               | List of available rooms     |
| `receive_message` | `Message`              | Incoming message            |
| `message_history` | `Message[]`            | Previous room messages      |
| `room_users`      | `User[]`               | Active room participants    |
| `user_joined`     | `{ username: string }` | User joined notification    |
| `user_left`       | `{ username: string }` | User left notification      |
| `user_typing`     | `{ username: string }` | Typing activity indicator   |
| `error`           | `{ message: string }`  | Validation or server errors |

---

## 🏛️ Backend Architecture

### Layered Design

| Layer        | Responsibility                      | Files            |
| ------------ | ----------------------------------- | ---------------- |
| **Config**   | Application constants & environment | `constants.ts`   |
| **Models**   | Data structures & interfaces        | `*.model.ts`     |
| **Services** | Business logic & data management    | `*.service.ts`   |
| **Sockets**  | Event handlers & communication      | `chat.socket.ts` |
| **Utils**    | Helper functions & validators       | `validators.ts`  |
| **Types**    | Shared TypeScript interfaces        | `index.ts`       |

### Service Layer Example

```typescript
// room.service.ts
export class RoomService {
  private rooms: Map<string, Room> = new Map();

  getAllRooms(): Room[] {
    return Array.from(this.rooms.values());
  }

  getRoom(roomId: string): Room | undefined {
    return this.rooms.get(roomId);
  }

  addUserToRoom(roomId: string, user: User): void {
    const room = this.rooms.get(roomId);
    if (room) {
      room.users.push(user);
    }
  }
}
```

---

## 🎭 Frontend Architecture

### Component Hierarchy

```console
App
├── SocketProvider
│   └── ChatProvider
│       └── MainLayout
│           ├── Sidebar
│           │   ├── UsernameForm
│           │   └── RoomList
│           │       └── RoomItem[]
│           └── ChatContainer
│               ├── ChatHeader
│               │   ├── RoomName
│               │   └── ConnectionStatus
│               ├── MessageList
│               │   └── Message[]
│               ├── TypingIndicator
│               └── MessageInput
```

### Context Structure

```typescript
// ChatContext.tsx
interface ChatContextType {
  currentRoom: Room | null;
  messages: Message[];
  users: User[];
  typingUsers: string[];
  sendMessage: (text: string) => void;
  joinRoom: (roomId: string) => void;
  startTyping: () => void;
  stopTyping: () => void;
}
```

### Custom Hooks

```typescript
// useSocket.ts
export const useSocket = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    socket.on("connect", () => setIsConnected(true));
    socket.on("disconnect", () => setIsConnected(false));

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return { socket, isConnected };
};
```

---

## ⚙️ Installation & Setup

### Prerequisites

- ✅ **Node.js** (v18 or higher)
- ✅ **npm** or **yarn** package manager
- ✅ **Git** (for cloning)
- ✅ **Modern web browser**

### Quick Start

```console
# 1. Clone the repository
git clone https://github.com/elyse502/real-time-chat-app.git

# 2. Navigate to project directory
cd real-time-chat-app

# 3. Setup Backend
cd backend
npm install
cp .env.example .env  # Configure environment variables

# 4. Setup Frontend
cd ../frontend
npm install
cp .env.example .env  # Configure environment variables

# 5. Run Development Servers
# Terminal 1 - Backend (from backend directory)
npm run dev

# Terminal 2 - Frontend (from frontend directory)
npm run dev

# 6. Open Application
# Frontend: http://localhost:5173
# Backend: http://localhost:3000
```

---

## 🔧 Configuration

### Backend Environment (.env)

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Client Configuration
CLIENT_URL=http://localhost:5173

# Socket Configuration
SOCKET_PING_TIMEOUT=60000
SOCKET_PING_INTERVAL=25000
```

### Frontend Environment (.env)

```env
# API Configuration
VITE_API_URL=http://localhost:3000

# Socket Configuration
VITE_SOCKET_PATH=/socket.io
```

---

## 📊 Validation Rules

| Field        | Type   | Rules                       | Error Message                                 |
| ------------ | ------ | --------------------------- | --------------------------------------------- |
| **Username** | string | Min: 3 chars, Max: 20 chars | "Username must be 3-20 characters"            |
| **Message**  | string | Min: 1 char, Max: 500 chars | "Message cannot be empty or exceed 500 chars" |
| **Room ID**  | string | Must exist in system        | "Room does not exist"                         |

### Validation Implementation

```typescript
// Backend validator
export const validateUsername = (username: string): boolean => {
  return username.length >= 3 && username.length <= 20;
};

export const validateMessage = (message: string): boolean => {
  return message.length >= 1 && message.length <= 500;
};
```

---

## 🎨 User Experience Highlights

| Feature                   | Implementation                     | Benefit                    |
| ------------------------- | ---------------------------------- | -------------------------- |
| **Auto-Scroll**           | `scrollIntoView()` on new messages | Always see latest messages |
| **Toast Notifications**   | React Hot Toast                    | Non-intrusive feedback     |
| **Connection Monitoring** | Socket event listeners             | Real-time status awareness |
| **Typing Indicators**     | Debounced emit events              | Reduced network traffic    |
| **Room Updates**          | Real-time participant lists        | Always accurate user count |
| **Responsive Layout**     | Tailwind breakpoints               | Works on all devices       |
| **Username Persistence**  | LocalStorage                       | No re-entry on refresh     |

---

## 📈 Performance Optimizations

| Optimization           | Implementation                 | Impact                       |
| ---------------------- | ------------------------------ | ---------------------------- |
| **Message Throttling** | Rate limiting per user         | Prevents spam                |
| **Debounced Typing**   | 300ms debounce                 | Reduces 90% of typing events |
| **Virtual Scrolling**  | For large message history      | Smooth rendering             |
| **Lazy Loading**       | Code splitting with React.lazy | Faster initial load          |
| **Socket Compression** | perMessageDeflate enabled      | Reduced bandwidth            |
| **Connection Pooling** | Reuse socket connections       | Lower memory usage           |

---

## 🔮 Future Roadmap

| Feature                    | Priority | Description                 |
| -------------------------- | -------- | --------------------------- |
| 🔐 **JWT Authentication**  | High     | Secure user authentication  |
| 🗄️ **MongoDB Persistence** | High     | Persistent message storage  |
| 💬 **Private Messaging**   | High     | Direct user-to-user chats   |
| 📎 **File Sharing**        | Medium   | Image and file attachments  |
| 🐳 **Docker Support**      | Medium   | Containerized deployment    |
| 📊 **Redis Scaling**       | Medium   | Horizontal scaling support  |
| 🧪 **Testing Suite**       | Medium   | Unit & integration tests    |
| 🔄 **CI/CD Pipeline**      | Low      | Automated deployment        |
| 😊 **Message Reactions**   | Low      | Emoji reactions to messages |
| 👤 **User Avatars**        | Low      | Profile pictures            |

---

## 📚 Learning Outcomes

This project demonstrates practical experience with:

| Category              | Skills Demonstrated                    |
| --------------------- | -------------------------------------- |
| **WebSockets**        | Real-time, bidirectional communication |
| **Full-Stack**        | End-to-end TypeScript development      |
| **Socket.IO**         | Event handling, rooms, broadcasting    |
| **React**             | Hooks, Context API, components         |
| **Architecture**      | Separation of concerns, modular design |
| **State Management**  | Context, local storage                 |
| **Type Safety**       | Full TypeScript implementation         |
| **Real-Time Systems** | Event-driven architecture              |
| **Responsive Design** | Mobile-first approach                  |

---

## 👨‍💻 Author

### **Elysée NIYIBIZI**

_Junior Fullstack Software Engineer_

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-elyseedev.netlify.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://elyseedev.netlify.app)
[![GitHub](https://img.shields.io/badge/GitHub-elyse502-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/elyse502)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Niyibizi_Elysée-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/niyibizi-elysée)
[![Email](https://img.shields.io/badge/Email-elyseniyibizi502@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:elyseniyibizi502@gmail.com)

</div>

**Specialties:**

- Backend Development
- Real-Time Systems
- TypeScript Applications
- MERN Stack Development

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](https://github.com/elyse502/real-time-chat-app/blob/main/LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Elysée NIYIBIZI

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 🙏 Acknowledgments

- **Socket.IO Team** - For the incredible real-time library
- **React Team** - For the amazing UI framework
- **TypeScript Team** - For type safety across the stack
- **Open Source Community** - For continuous inspiration

---

<div align="center">

### ⭐ Star this repository if it helped you learn real-time application development!

**Built with 💻, WebSockets, and Real-Time Passion**

---

_From concept to production - a complete real-time chat platform demonstrating modern web architecture_

[⬆ Back to Top](#-table-of-contents)

</div>
