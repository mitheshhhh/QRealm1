import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../config/prisma.js";
import { env } from "../config/env.js";
import { ConflictError, UnauthorizedError } from "../utils/errors.js";
import type { JwtPayload, TokenPair } from "../types/auth.js";
import type { Role } from "@prisma/client";

const SALT_ROUNDS = 12;

export async function register(
  name: string,
  email: string,
  password: string,
  role: Role = "STUDENT",
  bio?: string
) {
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) throw new ConflictError("Email already registered");

  const hashed = await bcrypt.hash(password, SALT_ROUNDS);
  const user = await prisma.user.create({
    data: { name, email, password: hashed, role, bio },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      bio: true,
      createdAt: true,
    },
  });
  return user;
}

export async function login(email: string, password: string): Promise<{ user: object; tokens: TokenPair }> {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new UnauthorizedError("Invalid email or password");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new UnauthorizedError("Invalid email or password");

  const tokens = createTokenPair(user.id, user.email, user.role);
  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      bio: user.bio,
      createdAt: user.createdAt,
    },
    tokens,
  };
}

export function createTokenPair(userId: string, email: string, role: string): TokenPair {
  const accessToken = jwt.sign(
    { sub: userId, email, role, type: "access" } as JwtPayload,
    env.JWT_ACCESS_SECRET,
    { expiresIn: env.JWT_ACCESS_EXPIRES_IN }
  );
  const refreshToken = jwt.sign(
    { sub: userId, email, role, type: "refresh" } as JwtPayload,
    env.JWT_REFRESH_SECRET,
    { expiresIn: env.JWT_REFRESH_EXPIRES_IN }
  );
  return {
    accessToken,
    refreshToken,
    accessExpiresIn: env.JWT_ACCESS_EXPIRES_IN,
    refreshExpiresIn: env.JWT_REFRESH_EXPIRES_IN,
  };
}

export function verifyRefreshToken(refreshToken: string): JwtPayload {
  const decoded = jwt.verify(refreshToken, env.JWT_REFRESH_SECRET) as JwtPayload;
  if (decoded.type !== "refresh") throw new UnauthorizedError("Invalid token type");
  return decoded;
}

export async function getMe(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      bio: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  if (!user) throw new UnauthorizedError("User not found");
  return user;
}
