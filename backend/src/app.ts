import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",
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
