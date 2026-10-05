import type { MetadataRoute } from "next";
import { categories, cities } from "@/lib/catalog";
import { projects, services } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "",
    "/services",
    "/realisations",
    "/a-propos",
    "/contact",
    "/mentions-legales",
    "/confidentialite",
    "/conditions",
  ];
  return [
    ...staticPaths.map((path) => ({
      url: `${site.url}${path || "/"}`,
      lastModified: now,
    })),
    ...services.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      lastModified: now,
    })),
    ...projects.map((project) => ({
      url: `${site.url}/realisations/${project.slug}`,
      lastModified: now,
    })),
    ...categories().map((category) => ({
      url: `${site.url}${category.path}`,
      lastModified: now,
    })),
    ...cities().map((city) => ({
      url: `${site.url}${city.path}`,
      lastModified: now,
    })),
  ];
}
