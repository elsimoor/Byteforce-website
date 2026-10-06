import type { MetadataRoute } from "next";
import { categories, cities } from "@/lib/catalog";
import { projects, services } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
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
    })),
    ...services.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
    })),
    ...projects.map((project) => ({
      url: `${site.url}/realisations/${project.slug}`,
    })),
    ...categories().map((category) => ({
      url: `${site.url}${category.path}`,
    })),
    ...cities().map((city) => ({
      url: `${site.url}${city.path}`,
    })),
  ];
}
