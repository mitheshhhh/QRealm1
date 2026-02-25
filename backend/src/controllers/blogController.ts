import type { Response, NextFunction } from "express";
import * as blogService from "../services/blogService.js";
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
    const search = req.query.search == null ? undefined : String(req.query.search);
    const publishedOnly = req.query.published === "false" ? false : true;
    const result = await blogService.listBlogs({
      page,
      limit,
      search,
      publishedOnly,
    });
    res.status(200).json({ success: true, data: result });
  } catch (e) {
    next(e);
  }
}

export async function getBySlug(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const slug = req.params.slug as string;
    const blog = await blogService.getBySlug(slug, req.userId);
    res.status(200).json({ success: true, data: blog });
  } catch (e) {
    next(e);
  }
}

export async function getPopular(
  _req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const limit = Math.min(20, Number(_req.query.limit) || 5);
    const items = await blogService.getPopular(limit);
    res.status(200).json({ success: true, data: items });
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
    const { title, content, published } = req.body as {
      title: string;
      content: string;
      published?: boolean;
    };
    const blog = await blogService.createBlog(req.userId, {
      title,
      content,
      published,
    });
    res.status(201).json({ success: true, data: blog });
  } catch (e) {
    next(e);
  }
}

export async function update(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    if (!req.userId || !req.userRole) return next(new UnauthorizedError("Authentication required"));
    const id = req.params.id as string;
    const { title, content, published } = req.body as {
      title?: string;
      content?: string;
      published?: boolean;
    };
    const blog = await blogService.updateBlog(id, req.userId, req.userRole, {
      title,
      content,
      published,
    });
    res.status(200).json({ success: true, data: blog });
  } catch (e) {
    next(e);
  }
}

export async function remove(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    if (!req.userId || !req.userRole) return next(new UnauthorizedError("Authentication required"));
    const id = req.params.id as string;
    await blogService.deleteBlog(id, req.userId, req.userRole);
    res.status(200).json({ success: true, message: "Deleted" });
  } catch (e) {
    next(e);
  }
}
