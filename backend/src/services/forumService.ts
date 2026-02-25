import { prisma } from "../config/prisma.js";
import { NotFoundError, ForbiddenError } from "../utils/errors.js";

export async function listForums(opts: { page?: number; limit?: number }) {
  const page = Math.max(1, opts.page ?? 1);
  const limit = Math.min(50, Math.max(1, opts.limit ?? 10));
  const skip = (page - 1) * limit;

  const [items, total] = await Promise.all([
    prisma.forum.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      include: {
        author: { select: { id: true, name: true, email: true, role: true } },
        _count: { select: { comments: true, likes: true } },
      },
    }),
    prisma.forum.count(),
  ]);

  return { items, total, page, limit };
}

export async function getForumById(id: string) {
  const forum = await prisma.forum.findUnique({
    where: { id },
    include: {
      author: { select: { id: true, name: true, email: true, role: true } },
      comments: {
        where: { parentId: null },
        include: {
          user: { select: { id: true, name: true } },
          replies: {
            include: { user: { select: { id: true, name: true } } },
          },
        },
        orderBy: { createdAt: "asc" },
      },
      _count: { select: { likes: true } },
    },
  });
  if (!forum) throw new NotFoundError("Forum not found");
  return forum;
}

export async function createForum(
  authorId: string,
  data: { title: string; content: string }
) {
  const forum = await prisma.forum.create({
    data: { title: data.title, content: data.content, authorId },
    include: {
      author: { select: { id: true, name: true, email: true, role: true } },
    },
  });
  return forum;
}

export async function addComment(
  forumId: string,
  userId: string,
  data: { content: string; parentId?: string }
) {
  const forum = await prisma.forum.findUnique({ where: { id: forumId } });
  if (!forum) throw new NotFoundError("Forum not found");

  const comment = await prisma.comment.create({
    data: {
      content: data.content,
      userId,
      forumId,
      parentId: data.parentId || null,
    },
    include: {
      user: { select: { id: true, name: true } },
    },
  });
  return comment;
}

export async function toggleLikeForum(forumId: string, userId: string) {
  const forum = await prisma.forum.findUnique({ where: { id: forumId } });
  if (!forum) throw new NotFoundError("Forum not found");

  const existing = await prisma.like.findFirst({
    where: { userId, forumId },
  });

  if (existing) {
    await prisma.like.delete({ where: { id: existing.id } });
    return { liked: false };
  }
  await prisma.like.create({
    data: { userId, forumId },
  });
  return { liked: true };
}

export async function addBlogComment(
  blogId: string,
  userId: string,
  data: { content: string; parentId?: string }
) {
  const blog = await prisma.blog.findUnique({ where: { id: blogId } });
  if (!blog) throw new NotFoundError("Blog not found");

  const comment = await prisma.comment.create({
    data: {
      content: data.content,
      userId,
      blogId,
      parentId: data.parentId || null,
    },
    include: {
      user: { select: { id: true, name: true } },
    },
  });
  return comment;
}

export async function toggleLikeBlog(blogId: string, userId: string) {
  const blog = await prisma.blog.findUnique({ where: { id: blogId } });
  if (!blog) throw new NotFoundError("Blog not found");

  const existing = await prisma.like.findFirst({
    where: { userId, blogId },
  });

  if (existing) {
    await prisma.like.delete({ where: { id: existing.id } });
    return { liked: false };
  }
  await prisma.like.create({
    data: { userId, blogId },
  });
  return { liked: true };
}
