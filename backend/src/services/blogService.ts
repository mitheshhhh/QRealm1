import { prisma } from "../config/prisma.js";
import { cacheGet, cacheSet, cacheDelPattern } from "../config/redis.js";
import { NotFoundError, ForbiddenError } from "../utils/errors.js";
import { generateSlug, ensureUniqueSlug } from "../utils/slug.js";

const LIST_CACHE_TTL = 60;
const POPULAR_CACHE_TTL = 120;
const CACHE_KEY_LIST = "blogs:list:";
const CACHE_KEY_POPULAR = "blogs:popular";
const CACHE_KEY_SLUG = "blogs:slug:";

export async function listBlogs(opts: {
  page?: number;
  limit?: number;
  search?: string;
  publishedOnly?: boolean;
}) {
  const page = Math.max(1, opts.page ?? 1);
  const limit = Math.min(50, Math.max(1, opts.limit ?? 10));
  const skip = (page - 1) * limit;
  const publishedOnly = opts.publishedOnly ?? true;

  const cacheKey = `${CACHE_KEY_LIST}${page}:${limit}:${opts.search ?? ""}:${publishedOnly}`;
  const cached = await cacheGet<{ items: unknown[]; total: number }>(cacheKey);
  if (cached) return cached;

  const where: { published?: boolean; OR?: { title: { contains: string; mode: "insensitive" }; content: { contains: string; mode: "insensitive" } }[] } = {};
  if (publishedOnly) where.published = true;
  if (opts.search?.trim()) {
    const q = opts.search.trim();
    where.OR = [
      { title: { contains: q, mode: "insensitive" } },
      { content: { contains: q, mode: "insensitive" } },
    ];
  }

  const [items, total] = await Promise.all([
    prisma.blog.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      include: {
        author: {
          select: { id: true, name: true, email: true, role: true },
        },
        _count: { select: { comments: true, likes: true } },
      },
    }),
    prisma.blog.count({ where }),
  ]);

  const result = { items, total, page, limit };
  await cacheSet(cacheKey, result, LIST_CACHE_TTL);
  return result;
}

export async function getBySlug(slug: string, userId?: string) {
  const cacheKey = `${CACHE_KEY_SLUG}${slug}`;
  const cached = await cacheGet<unknown>(cacheKey);
  if (cached) return cached as Awaited<ReturnType<typeof getBySlug>>;

  const blog = await prisma.blog.findUnique({
    where: { slug },
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

  if (!blog) throw new NotFoundError("Blog not found");
  if (blog.published === false && blog.authorId !== userId) throw new NotFoundError("Blog not found");

  await cacheSet(cacheKey, blog, LIST_CACHE_TTL);
  return blog;
}

export async function getPopular(limit = 5) {
  const cached = await cacheGet<unknown[]>(`${CACHE_KEY_POPULAR}:${limit}`);
  if (cached) return cached;

  const items = await prisma.blog.findMany({
    where: { published: true },
    orderBy: { likes: { _count: "desc" } },
    take: limit,
    include: {
      author: { select: { id: true, name: true } },
      _count: { select: { likes: true, comments: true } },
    },
  });
  await cacheSet(`${CACHE_KEY_POPULAR}:${limit}`, items, POPULAR_CACHE_TTL);
  return items;
}

async function invalidateBlogCache(): Promise<void> {
  await cacheDelPattern("blogs:*");
}

export async function createBlog(
  authorId: string,
  data: { title: string; content: string; published?: boolean }
) {
  const baseSlug = generateSlug(data.title);
  const existing = await prisma.blog.findMany({ select: { slug: true } });
  const slug = ensureUniqueSlug(
    baseSlug,
    existing.map((b) => b.slug)
  );

  const blog = await prisma.blog.create({
    data: {
      title: data.title,
      slug,
      content: data.content,
      authorId,
      published: data.published ?? false,
    },
    include: {
      author: { select: { id: true, name: true, email: true, role: true } },
    },
  });
  await invalidateBlogCache();
  return blog;
}

export async function updateBlog(
  id: string,
  userId: string,
  userRole: string,
  data: { title?: string; content?: string; published?: boolean }
) {
  const blog = await prisma.blog.findUnique({ where: { id } });
  if (!blog) throw new NotFoundError("Blog not found");
  if (blog.authorId !== userId && userRole !== "ADMIN")
    throw new ForbiddenError("Not allowed to update this blog");

  const update: { title?: string; content?: string; published?: boolean; slug?: string } = {
    ...(data.title !== undefined && { title: data.title }),
    ...(data.content !== undefined && { content: data.content }),
    ...(data.published !== undefined && { published: data.published }),
  };

  if (data.title !== undefined && data.title !== blog.title) {
    const baseSlug = generateSlug(data.title);
    const existing = await prisma.blog.findMany({
      where: { id: { not: id } },
      select: { slug: true },
    });
    update.slug = ensureUniqueSlug(
      baseSlug,
      existing.map((b) => b.slug)
    );
  }

  const updated = await prisma.blog.update({
    where: { id },
    data: update,
    include: {
      author: { select: { id: true, name: true, email: true, role: true } },
    },
  });
  await invalidateBlogCache();
  return updated;
}

export async function deleteBlog(id: string, userId: string, userRole: string) {
  const blog = await prisma.blog.findUnique({ where: { id } });
  if (!blog) throw new NotFoundError("Blog not found");
  if (blog.authorId !== userId && userRole !== "ADMIN")
    throw new ForbiddenError("Not allowed to delete this blog");

  await prisma.blog.delete({ where: { id } });
  await invalidateBlogCache();
}
