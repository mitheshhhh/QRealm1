import type { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodError } from "zod";

export function validate(schema: ZodSchema) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    try {
      const parsed = schema.safeParse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      if (!parsed.success) {
        next(parsed.error);
        return;
      }
      if (parsed.data.body) req.body = parsed.data.body;
      if (parsed.data.query) req.query = parsed.data.query;
      if (parsed.data.params) req.params = parsed.data.params;
      next();
    } catch (e) {
      next(e instanceof ZodError ? e : new Error("Validation failed"));
    }
  };
}
