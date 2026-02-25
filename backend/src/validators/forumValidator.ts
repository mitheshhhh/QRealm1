import { z } from "zod";

export const createForumSchema = z.object({
  body: z.object({
    title: z.string().min(1).max(500),
    content: z.string().min(1),
  }),
});

export const forumIdParamSchema = z.object({
  params: z.object({ id: z.string().uuid() }),
});

export const addCommentSchema = z.object({
  params: z.object({ id: z.string().uuid() }),
  body: z.object({
    content: z.string().min(1).max(10000),
    parentId: z.string().uuid().optional(),
  }),
});

export const listForumsQuerySchema = z.object({
  query: z.object({
    page: z.string().optional().transform(Number),
    limit: z.string().optional().transform(Number),
  }),
});
