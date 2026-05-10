import { Router } from "express";
import { notImplemented } from "../../shared/apiResponse.js";

export const tripsRouter = Router();

tripsRouter.get("/", (_req, res) => {
  res.status(501).json(notImplemented("trips"));
});
