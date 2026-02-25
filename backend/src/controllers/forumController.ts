import type { Response, NextFunction } from "express";
import * as forumService from "../services/forumService.js";
import { UnauthorizedError } from "../utils/errors.js";
import type { AuthRequest } from "../middleware/auth.js";

export async function list(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const result = await forumService.listForums({ page, limit });
    res.status(200).json({ success: true, data: result });
  } catch (e) {
    next(e);
  }
}

export async function getById(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id = req.params.id as string;
    const forum = await forumService.getForumById(id);
    res.status(200).json({ success: true, data: forum });
  } catch (e) {
    next(e);
  }
}

export async function create(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    if (!req.userId) return next(new UnauthorizedError("Authentication required"));
    const { title, content } = req.body as { title: string; content: string };
    const forum = await forumService.createForum(req.userId, { title, content });
    res.status(201).json({ success: true, data: forum });
  } catch (e) {
    next(e);
  }
}

export async function addComment(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    if (!req.userId) return next(new UnauthorizedError("Authentication required"));
    const forumId = req.params.id as string;
    const { content, parentId } = req.body as {
      content: string;
      parentId?: string;
    };
    const comment = await forumService.addComment(forumId, req.userId, {
      content,
      parentId,
    });
    res.status(201).json({ success: true, data: comment });
  } catch (e) {
    next(e);
  }
}

export async function toggleLike(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    if (!req.userId) return next(new UnauthorizedError("Authentication required"));
    const forumId = req.params.id as string;
    const result = await forumService.toggleLikeForum(forumId, req.userId);
    res.status(200).json({ success: true, data: result });
  } catch (e) {
    next(e);
  }
}
