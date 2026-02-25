import { z } from "zod";

export const createBlogSchema = z.object({
  body: z.object({
    title: z.string().min(1).max(500),
    content: z.string().min(1),
    published: z.boolean().optional(),
  }),
});

export const updateBlogSchema = z.object({
  params: z.object({ id: z.string().uuid() }),
  body: z.object({
    title: z.string().min(1).max(500).optional(),
    content: z.string().min(1).optional(),
    published: z.boolean().optional(),
  }),
});

export const getBlogBySlugSchema = z.object({
  params: z.object({ slug: z.string().min(1) }),
});

export const listBlogsQuerySchema = z.object({
  query: z.object({
    page: z.string().optional().transform(Number),
    limit: z.string().optional().transform(Number),
    search: z.string().optional(),
    published: z.enum(["true", "false"]).optional(),
  }),
});
