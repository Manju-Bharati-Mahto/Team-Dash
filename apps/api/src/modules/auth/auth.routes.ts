import { Router } from "express";
import { notImplemented } from "../../shared/apiResponse.js";

export const authRouter = Router();

authRouter.get("/", (_req, res) => {
  res.status(501).json(notImplemented("auth"));
});
