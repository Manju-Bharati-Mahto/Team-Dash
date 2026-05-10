import { Router } from "express";
import { notImplemented } from "../../shared/apiResponse.js";

export const notesRouter = Router();

notesRouter.get("/", (_req, res) => {
  res.status(501).json(notImplemented("notes"));
});
