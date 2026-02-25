export const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api";

type Blog = {
  id: string;
  title: string;
  slug: string;
  content: string;
  published: boolean;
  createdAt: string;
  authorId?: string;
};

async function fetchJSON<T>(path: string, init?: RequestInit): Promise<T> {
  const url = `${API_BASE}${path}`;
  const res = await fetch(url, {
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    ...init,
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Request failed ${res.status} ${res.statusText} - ${text}`);
  }
  return (await res.json()) as T;
}

export async function listBlogs({
  page = 1,
  limit = 10,
  search,
  publishedOnly = true,
}: {
  page?: number;
  limit?: number;
  search?: string;
  publishedOnly?: boolean;
}) {
  const params = new URLSearchParams({ page: String(page), limit: String(limit) });
  if (search) params.set("search", search);
  if (publishedOnly === false) params.set("published", "false");
  const payload = await fetchJSON<{ success: boolean; data: Blog[] }>(`/blogs?${params.toString()}`);
  return payload.data;
}

export async function getBlogBySlug(slug: string) {
  const payload = await fetchJSON<{ success: boolean; data: Blog }>(`/blogs/${encodeURIComponent(slug)}`);
  return payload.data;
}

export async function getPopularBlogs(limit = 5) {
  const payload = await fetchJSON<{ success: boolean; data: Blog[] }>(`/blogs/popular?limit=${limit}`);
  return payload.data;
}

export type { Blog };
