import { Router } from "express";
import { notImplemented } from "../../shared/apiResponse.js";

export const sharingRouter = Router();

sharingRouter.get("/", (_req, res) => {
  res.status(501).json(notImplemented("sharing"));
});
