import { Router } from "express";
import { z } from "zod";
import { prisma } from "../../db/prisma.js";
import { getSeedHealth } from "../../db/seedVerification.js";
import { validateBody } from "../../middleware/validate.js";
import { success } from "../../shared/apiResponse.js";
import { asyncRoute } from "../../shared/asyncRoute.js";

export const healthRouter = Router();

const probeSchema = z.object({
  label: z.string().min(2).max(80)
});

healthRouter.get(
  "/health",
  asyncRoute(async (_req, res) => {
    res.json(success({ status: "ok", database: "postgresql" }));
  })
);

healthRouter.get(
  "/foundation-probes/latest",
  asyncRoute(async (_req, res) => {
    const probe = await prisma.foundationProbe.findFirst({
      orderBy: { createdAt: "desc" }
    });

    res.json(success(probe));
  })
);

healthRouter.post(
  "/foundation-probes",
  validateBody(probeSchema),
  asyncRoute(async (req, res) => {
    const probe = await prisma.foundationProbe.create({
      data: { label: req.body.label }
    });

    res.status(201).json(success(probe));
  })
);

healthRouter.get(
  "/status/seed",
  asyncRoute(async (_req, res) => {
    const counts = await getSeedHealth();
    res.json(success({ counts }));
  })
);
