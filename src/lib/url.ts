/**
 * Prefix a path from /public with the site's base path, so links keep working
 * when the site is served from a sub-folder (GitHub Pages project sites).
 * External URLs, mailto: links and in-page anchors are returned unchanged.
 */
export function withBase(path: string): string {
  if (/^([a-z]+:|#)/i.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
