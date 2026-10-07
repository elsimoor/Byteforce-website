import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      ...(process.env.NODE_ENV === "production" ? { disallow: ["/dashboard", "/dashboard/"] } : {}),
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
