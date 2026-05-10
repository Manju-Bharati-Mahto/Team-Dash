export type ApiErrorPayload = {
  code: string;
  message: string;
  details?: unknown;
  status?: number;
};

export function success<T>(data: T) {
  return { data };
}

export function apiError(code: string, message: string, details?: unknown, status?: number) {
  const error = new Error(message) as Error & { apiError: ApiErrorPayload };
  error.apiError = { code, message, details, status };
  return error;
}

export function notImplemented(domain: string) {
  return {
    error: {
      code: "NOT_IMPLEMENTED",
      message: `${domain} endpoints are planned for a later Traveloop phase.`
    }
  };
}
