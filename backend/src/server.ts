import http from "node:http";
import { Server } from "socket.io";

import app from "./app";
import { env } from "./config/env";
import { registerChatSocket } from "./sockets";

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: env.clientUrl,
    methods: ["GET", "POST"],
  },
});

registerChatSocket(io);

httpServer.listen(env.port, () => {
  console.log(`Server is running on http://localhost:${env.port} 🚀`);
});
