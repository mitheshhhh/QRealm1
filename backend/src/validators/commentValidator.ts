import { z } from "zod";

export const blogIdParamSchema = z.object({
  params: z.object({ id: z.string().uuid() }),
});

export const blogCommentSchema = z.object({
  params: z.object({ id: z.string().uuid() }),
  body: z.object({
    content: z.string().min(1).max(10000),
    parentId: z.string().uuid().optional(),
  }),
});
