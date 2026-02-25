import type { Request, Response, NextFunction } from "express";
import * as authService from "../services/authService.js";
import { BadRequestError } from "../utils/errors.js";
import { env } from "../config/env.js";
import type { AuthRequest } from "../middleware/auth.js";

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  ...(env.COOKIE_DOMAIN ? { domain: env.COOKIE_DOMAIN } : {}),
};

const REFRESH_COOKIE_OPTIONS = {
  ...COOKIE_OPTIONS,
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

export async function register(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { name, email, password, role, bio } = req.body as {
      name: string;
      email: string;
      password: string;
      role?: string;
      bio?: string;
    };
    const user = await authService.register(
      name,
      email,
      password,
      (role as "ADMIN" | "PROFESSOR" | "STUDENT") ?? "STUDENT",
      bio
    );
    res.status(201).json({ success: true, data: { user } });
  } catch (e) {
    next(e);
  }
}

export async function login(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { email, password } = req.body as { email: string; password: string };
    const { user, tokens } = await authService.login(email, password);

    res.cookie("accessToken", tokens.accessToken, {
      ...COOKIE_OPTIONS,
      maxAge: 15 * 60 * 1000,
    });
    res.cookie("refreshToken", tokens.refreshToken, REFRESH_COOKIE_OPTIONS);

    res.status(200).json({
      success: true,
      data: {
        user,
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
        expiresIn: tokens.accessExpiresIn,
      },
    });
  } catch (e) {
    next(e);
  }
}

export async function logout(
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    res.clearCookie("accessToken", COOKIE_OPTIONS);
    res.clearCookie("refreshToken", REFRESH_COOKIE_OPTIONS);
    res.status(200).json({ success: true, message: "Logged out" });
  } catch (e) {
    next(e);
  }
}

export async function me(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    if (!req.userId) {
      next(new BadRequestError("Not authenticated"));
      return;
    }
    const user = await authService.getMe(req.userId);
    res.status(200).json({ success: true, data: { user } });
  } catch (e) {
    next(e);
  }
}

export async function refresh(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const token = req.cookies?.refreshToken ?? req.body?.refreshToken;
    if (!token) {
      next(new BadRequestError("Refresh token required"));
      return;
    }
    const payload = authService.verifyRefreshToken(token);
    const tokens = authService.createTokenPair(
      payload.sub,
      payload.email,
      payload.role
    );

    res.cookie("accessToken", tokens.accessToken, {
      ...COOKIE_OPTIONS,
      maxAge: 15 * 60 * 1000,
    });
    res.cookie("refreshToken", tokens.refreshToken, REFRESH_COOKIE_OPTIONS);

    res.status(200).json({
      success: true,
      data: {
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
        expiresIn: tokens.accessExpiresIn,
      },
    });
  } catch (e) {
    next(e);
  }
}
