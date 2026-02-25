export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function ensureUniqueSlug(baseSlug: string, existingSlugs: string[]): string {
  const set = new Set(existingSlugs);
  let slug = baseSlug;
  let n = 1;
  while (set.has(slug)) {
    slug = `${baseSlug}-${n}`;
    n += 1;
  }
  return slug;
}
