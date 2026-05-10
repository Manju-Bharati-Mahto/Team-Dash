import type { ErrorRequestHandler } from "express";

function statusForCode(code: string) {
  if (code === "VALIDATION_ERROR") return 400;
  if (code === "NOT_FOUND") return 404;
  if (code === "NOT_IMPLEMENTED") return 501;
  return 500;
}

export const errorMiddleware: ErrorRequestHandler = (error, _req, res, _next) => {
  const apiError = error.apiError as
    | { code: string; message: string; details?: unknown; status?: number }
    | undefined;

  if (apiError) {
    res.status(apiError.status ?? statusForCode(apiError.code)).json({
      error: {
        code: apiError.code,
        message: apiError.message,
        details: apiError.details
      }
    });
    return;
  }

  res.status(500).json({
    error: {
      code: "INTERNAL_SERVER_ERROR",
      message: "An unexpected Traveloop API error occurred."
    }
  });
};
