import cors from "cors";
import express from "express";
import { env } from "./config/env.js";
import { errorMiddleware } from "./middleware/error.js";
import { activitiesRouter } from "./modules/activities/activities.routes.js";
import { authRouter } from "./modules/auth/auth.routes.js";
import { budgetRouter } from "./modules/budget/budget.routes.js";
import { destinationsRouter } from "./modules/destinations/destinations.routes.js";
import { healthRouter } from "./modules/health/health.routes.js";
import { itineraryRouter } from "./modules/itinerary/itinerary.routes.js";
import { notesRouter } from "./modules/notes/notes.routes.js";
import { packingRouter } from "./modules/packing/packing.routes.js";
import { sharingRouter } from "./modules/sharing/sharing.routes.js";
import { tripsRouter } from "./modules/trips/trips.routes.js";
import { usersRouter } from "./modules/users/users.routes.js";
import { success } from "./shared/apiResponse.js";

export const app = express();

app.use(cors({ origin: env.WEB_ORIGIN }));
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json(success({ status: "ok", database: "postgresql" }));
});

app.use("/api", healthRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/trips", tripsRouter);
app.use("/api/destinations", destinationsRouter);
app.use("/api/activities", activitiesRouter);
app.use("/api/itinerary", itineraryRouter);
app.use("/api/budget", budgetRouter);
app.use("/api/packing", packingRouter);
app.use("/api/sharing", sharingRouter);
app.use("/api/notes", notesRouter);

app.use(errorMiddleware);
