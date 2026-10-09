import { articles } from "@/lib/articles";
import { projects, services } from "@/lib/content";
import { moneyPages } from "@/lib/money";

const staticPaths = [
  "/",
  "/services",
  "/realisations",
  "/studio",
  "/insights",
  "/contact",
  "/audit",
  "/recherche",
  "/how-we-write",
  "/ai",
  "/ai/services",
  "/ai/work",
  "/ai/contact",
  "/ai/faq",
  "/mentions-legales",
  "/confidentialite",
  "/conditions",
];

export function publicEntries() {
  const dates = new Map<string, string>();
  const set = (path: string, date: string) => {
    const current = dates.get(path);
    if (!current || date > current) dates.set(path, date);
  };
  for (const path of staticPaths) set(path, "2026-10-08");
  for (const service of services) set(service.href ?? `/services/${service.slug}`, "2026-10-08");
  for (const page of moneyPages) set(`/${page.path}`, "2026-10-08");
  for (const project of projects) {
    const year = Number(project.year);
    set(`/realisations/${project.slug}`, Number.isFinite(year) ? `${project.year}-01-01` : "2026-10-08");
  }
  for (const article of articles) set(`/insights/${article.slug}`, article.date);
  set("/how-we-write", "2026-10-09");
  set("/recherche", "2026-10-09");
  return [...dates.entries()].map(([path, lastModified]) => ({ path, lastModified }));
}
