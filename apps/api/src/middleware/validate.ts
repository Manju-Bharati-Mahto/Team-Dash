import type { NextFunction, Request, Response } from "express";
import type { ZodSchema } from "zod";
import { ZodError } from "zod";
import { apiError } from "../shared/apiResponse.js";

export function validateBody<T>(schema: ZodSchema<T>) {
  return (req: Request, _res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        next(
          apiError(
            "VALIDATION_ERROR",
            "Request validation failed",
            error.issues.map((issue) => ({
              path: issue.path.join("."),
              message: issue.message
            }))
          )
        );
        return;
      }

      next(error);
    }
  };
}
