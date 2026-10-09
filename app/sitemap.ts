import type { MetadataRoute } from "next";
import { publicEntries } from "@/lib/public-urls";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicEntries().map((entry) => ({
    url: entry.path === "/" ? `${site.url}/` : `${site.url}${entry.path}`,
    lastModified: entry.lastModified,
  }));
}
