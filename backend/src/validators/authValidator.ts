import { z } from "zod";

export const registerSchema = z.object({
  body: z.object({
    name: z.string().min(1).max(255),
    email: z.string().email(),
    password: z.string().min(8).max(128),
    role: z.enum(["ADMIN", "PROFESSOR", "STUDENT"]).optional(),
    bio: z.string().max(2000).optional(),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(1),
  }),
});

export type RegisterBody = z.infer<typeof registerSchema>["body"];
export type LoginBody = z.infer<typeof loginSchema>["body"];
