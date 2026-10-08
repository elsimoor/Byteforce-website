import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { projects, services } from "@/lib/content";
import { moneyPages } from "@/lib/money";
import { site } from "@/lib/site";

const updated = new Date("2026-10-08");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/services",
    "/realisations",
    "/a-propos",
    "/insights",
    "/contact",
    "/audit",
    "/mentions-legales",
    "/confidentialite",
    "/conditions",
  ];
  const urls = [
    ...staticPaths.map((path) => `${site.url}${path}`),
    ...services.map((service) => `${site.url}${service.href ?? `/services/${service.slug}`}`),
    ...moneyPages
      .filter((page) => {
        const path = `/${page.path}`;
        return !services.some((service) => service.href === path);
      })
      .map((page) => `${site.url}/${page.path}`),
    ...projects.map((project) => `${site.url}/realisations/${project.slug}`),
    ...articles.map((article) => `${site.url}/insights/${article.slug}`),
  ];
  return [...new Set(urls)].map((url) => ({ url, lastModified: updated }));
}
