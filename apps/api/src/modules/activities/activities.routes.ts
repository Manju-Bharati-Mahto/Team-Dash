import { Router } from "express";
import { notImplemented } from "../../shared/apiResponse.js";

export const activitiesRouter = Router();

activitiesRouter.get("/", (_req, res) => {
  res.status(501).json(notImplemented("activities"));
});
