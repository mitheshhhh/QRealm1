import type { Response, NextFunction } from "express";
import * as forumService from "../services/forumService.js";
import { UnauthorizedError } from "../utils/errors.js";
import type { AuthRequest } from "../middleware/auth.js";

export async function addBlogComment(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    if (!req.userId) return next(new UnauthorizedError("Authentication required"));
    const blogId = req.params.id as string;
    const { content, parentId } = req.body as { content: string; parentId?: string };
    const comment = await forumService.addBlogComment(blogId, req.userId, {
      content,
      parentId,
    });
    res.status(201).json({ success: true, data: comment });
  } catch (e) {
    next(e);
  }
}

export async function toggleBlogLike(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    if (!req.userId) return next(new UnauthorizedError("Authentication required"));
    const blogId = req.params.id as string;
    const result = await forumService.toggleLikeBlog(blogId, req.userId);
    res.status(200).json({ success: true, data: result });
  } catch (e) {
    next(e);
  }
}
