const base = import.meta.env.BASE_URL;
const normalizedBase = base.endsWith("/") ? base : `${base}/`;

const normalizePath = (path: string) => (path.startsWith("/") ? path.slice(1) : path);

export const withBase = (path: string) => `${normalizedBase}${normalizePath(path)}`;
