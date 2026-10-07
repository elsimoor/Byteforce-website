import type { MetadataRoute } from "next";
import { categories, cities } from "@/lib/catalog";
import { projects, services } from "@/lib/content";
import { moneyPages } from "@/lib/money";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/services",
    "/realisations",
    "/a-propos",
    "/insights",
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
      url: `${site.url}${service.href ?? `/services/${service.slug}`}`,
    })),
    ...moneyPages
      .filter((page) => {
        const path = `/${page.path}`;
        const already =
          path === "/developpement-logiciel-casablanca" ||
          services.some((service) => service.href === path);
        return !already;
      })
      .map((page) => ({
        url: `${site.url}/${page.path}`,
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
