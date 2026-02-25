import type { Response, NextFunction } from "express";
import * as adminService from "../services/adminService.js";
import { UnauthorizedError } from "../utils/errors.js";
import type { AuthRequest } from "../middleware/auth.js";

export async function listUsers(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const result = await adminService.listUsers({ page, limit });
    res.status(200).json({ success: true, data: result });
  } catch (e) {
    next(e);
  }
}

export async function deleteUser(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    if (!req.userId) return next(new UnauthorizedError("Authentication required"));
    const userId = req.params.id as string;
    await adminService.deleteUser(userId, req.userId);
    res.status(200).json({ success: true, message: "User deleted" });
  } catch (e) {
    next(e);
  }
}

export async function getAnalytics(
  _req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const analytics = await adminService.getAnalytics();
    res.status(200).json({ success: true, data: analytics });
  } catch (e) {
    next(e);
  }
}
