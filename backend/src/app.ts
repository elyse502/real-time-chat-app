import express from "express";
import cors from "cors";
import { env } from "./config/env";

const app = express();

app.use(
  cors({
    origin: env.clientUrl,
  }),
);

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Real-time Chat API is running.",
  });
});

export default app;
