import { Router } from "express";
import { notImplemented } from "../../shared/apiResponse.js";

export const usersRouter = Router();

usersRouter.get("/", (_req, res) => {
  res.status(501).json(notImplemented("users"));
});
