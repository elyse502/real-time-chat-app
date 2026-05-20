import dotenv from "dotenv";
dotenv.config();

import http from "http";
import app from "./app";

const PORT = Number(process.env.PORT) || 5000;

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} 🚀`);
});
