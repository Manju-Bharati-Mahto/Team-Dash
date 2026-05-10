import { Router } from "express";
import { notImplemented } from "../../shared/apiResponse.js";

export const budgetRouter = Router();

budgetRouter.get("/", (_req, res) => {
  res.status(501).json(notImplemented("budget"));
});
