import { z } from "zod";

export const tripNameSchema = z.string().min(2).max(120);

export type ApiSuccess<T> = {
  data: T;
};
