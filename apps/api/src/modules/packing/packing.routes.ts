import { Router } from "express";
import { notImplemented } from "../../shared/apiResponse.js";

export const packingRouter = Router();

packingRouter.get("/", (_req, res) => {
  res.status(501).json(notImplemented("packing"));
});
