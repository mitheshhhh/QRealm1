import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import { prisma } from "../config/prisma.js";
import { UnauthorizedError } from "../utils/errors.js";
import type { JwtPayload } from "../types/auth.js";

export interface AuthRequest extends Request {
  userId?: string;
  userRole?: string;
}

export async function authenticate(
  req: AuthRequest,
  _res: Response,
  next: NextFunction
): Promise<void> {
  const token =
    req.cookies?.accessToken ??
    (req.headers.authorization?.startsWith("Bearer ")
      ? req.headers.authorization.slice(7)
      : null);

  if (!token) {
    next(new UnauthorizedError("Authentication required"));
    return;
  }

  try {
    const decoded = jwt.verify(token, env.JWT_ACCESS_SECRET) as JwtPayload;
    const user = await prisma.user.findUnique({
      where: { id: decoded.sub },
      select: { id: true, role: true },
    });
    if (!user) {
      next(new UnauthorizedError("User not found"));
      return;
    }
    req.userId = user.id;
    req.userRole = user.role;
    next();
  } catch {
    next(new UnauthorizedError("Invalid or expired token"));
  }
}

export async function optionalAuth(
  req: AuthRequest,
  _res: Response,
  next: NextFunction
): Promise<void> {
  const token =
    req.cookies?.accessToken ??
    (req.headers.authorization?.startsWith("Bearer ")
      ? req.headers.authorization.slice(7)
      : null);

  if (!token) {
    next();
    return;
  }

  try {
    const decoded = jwt.verify(token, env.JWT_ACCESS_SECRET) as JwtPayload;
    const user = await prisma.user.findUnique({
      where: { id: decoded.sub },
      select: { id: true, role: true },
    });
    if (user) {
      req.userId = user.id;
      req.userRole = user.role;
    }
  } catch {
    // ignore invalid token
  }
  next();
}
