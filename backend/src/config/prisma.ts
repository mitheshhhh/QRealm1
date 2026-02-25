import { PrismaClient } from "@prisma/client";
import { logger } from "../utils/logger.js";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? [{ emit: "event", level: "query" }, { emit: "stdout", level: "error" }]
        : [{ emit: "stdout", level: "error" }],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

prisma.$connect().catch((err) => {
  logger.error("Prisma connect failed", { error: err });
});
