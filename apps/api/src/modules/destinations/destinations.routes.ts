import { Router } from "express";
import { notImplemented } from "../../shared/apiResponse.js";

export const destinationsRouter = Router();

destinationsRouter.get("/", (_req, res) => {
  res.status(501).json(notImplemented("destinations"));
});
