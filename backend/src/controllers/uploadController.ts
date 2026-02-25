import type { Response, NextFunction } from "express";
import * as uploadService from "../services/uploadService.js";
import { UnauthorizedError } from "../utils/errors.js";
import type { AuthRequest } from "../middleware/auth.js";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp", "application/pdf"];

export async function upload(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    if (!req.userId) return next(new UnauthorizedError("Authentication required"));

    const file = req.file;
    if (!file?.buffer) {
      res.status(400).json({ success: false, error: "No file uploaded" });
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      res.status(400).json({ success: false, error: "File too large (max 10MB)" });
      return;
    }
    if (file.mimetype && !ALLOWED_TYPES.includes(file.mimetype)) {
      res.status(400).json({ success: false, error: "File type not allowed" });
      return;
    }

    const folder = (req.body?.folder as string) ?? "uploads";
    const result = await uploadService.uploadStream(file.buffer, folder);
    res.status(200).json({ success: true, data: result });
  } catch (e) {
    next(e);
  }
}

export async function signedParams(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    if (!req.userId) return next(new UnauthorizedError("Authentication required"));
    const folder = (req.body?.folder as string) ?? (req.query?.folder as string) ?? "uploads";
    const params = uploadService.getSignedUploadParams(folder);
    res.status(200).json({ success: true, data: params });
  } catch (e) {
    next(e);
  }
}
