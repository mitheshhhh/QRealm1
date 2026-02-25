import { prisma } from "../config/prisma.js";
import { ForbiddenError, NotFoundError } from "../utils/errors.js";

export async function listUsers(opts: { page?: number; limit?: number }) {
  const page = Math.max(1, opts.page ?? 1);
  const limit = Math.min(100, Math.max(1, opts.limit ?? 20));
  const skip = (page - 1) * limit;

  const [items, total] = await Promise.all([
    prisma.user.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        bio: true,
        createdAt: true,
        _count: { select: { blogs: true, forums: true } },
      },
    }),
    prisma.user.count(),
  ]);

  return { items, total, page, limit };
}

export async function deleteUser(userId: string, adminId: string) {
  if (userId === adminId) throw new ForbiddenError("Cannot delete yourself");
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new NotFoundError("User not found");
  await prisma.user.delete({ where: { id: userId } });
}

export async function getAnalytics() {
  const [totalUsers, totalBlogs, totalForums, activeUsersLast7] = await Promise.all([
    prisma.user.count(),
    prisma.blog.count(),
    prisma.forum.count(),
    prisma.user.count({
      where: {
        OR: [
          { blogs: { some: { updatedAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } } } },
          { forums: { some: { updatedAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } } } },
          { comments: { some: { createdAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } } } },
        ],
      },
    }),
  ]);

  return {
    totalUsers,
    totalBlogs,
    totalForums,
    activeUsersLast7Days: activeUsersLast7,
  };
}
