import http from "http";
import app from "./app";
import { env } from "./config/env";

const httpServer = http.createServer(app);

httpServer.listen(env.port, () => {
  console.log(`Server is running on http://localhost:${env.port} 🚀`);
});
