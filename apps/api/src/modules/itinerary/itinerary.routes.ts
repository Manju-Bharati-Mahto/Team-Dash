import { Router } from "express";
import { notImplemented } from "../../shared/apiResponse.js";

export const itineraryRouter = Router();

itineraryRouter.get("/", (_req, res) => {
  res.status(501).json(notImplemented("itinerary"));
});
