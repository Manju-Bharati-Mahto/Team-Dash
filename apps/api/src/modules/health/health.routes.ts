import { Router } from "express";
import { z } from "zod";
import { prisma } from "../../db/prisma.js";

export const healthRouter = Router();

const probeSchema = z.object({
  label: z.string().min(2).max(80)
});

healthRouter.get("/foundation-probes/latest", async (_req, res, next) => {
  try {
    const probe = await prisma.foundationProbe.findFirst({
      orderBy: { createdAt: "desc" }
    });

    res.json({ data: probe });
  } catch (error) {
    next(error);
  }
});

healthRouter.post("/foundation-probes", async (req, res, next) => {
  try {
    const body = probeSchema.parse(req.body);
    const probe = await prisma.foundationProbe.create({
      data: { label: body.label }
    });

    res.status(201).json({ data: probe });
  } catch (error) {
    next(error);
  }
});
