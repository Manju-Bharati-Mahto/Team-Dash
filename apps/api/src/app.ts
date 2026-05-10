import cors from "cors";
import express from "express";
import { env } from "./config/env.js";
import { healthRouter } from "./modules/health/health.routes.js";

export const app = express();

app.use(cors({ origin: env.WEB_ORIGIN }));
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ data: { status: "ok" } });
});

app.use("/api", healthRouter);
