import type { Response, NextFunction } from "express";
import { ForbiddenError } from "../utils/errors.js";
import type { AuthRequest } from "./auth.js";
import type { Role } from "@prisma/client";

export function requireRoles(...roles: Role[]) {
  const set = new Set(roles);
  return (req: AuthRequest, _res: Response, next: NextFunction): void => {
    if (!req.userId || !req.userRole) {
      next(new ForbiddenError("Authentication required"));
      return;
    }
    if (!set.has(req.userRole as Role)) {
      next(new ForbiddenError("Insufficient permissions"));
      return;
    }
    next();
  };
}

export const adminOnly = requireRoles("ADMIN");
export const adminOrProfessor = requireRoles("ADMIN", "PROFESSOR");
