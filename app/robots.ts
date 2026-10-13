import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow:
        process.env.NODE_ENV === "production"
          ? ["/dashboard", "/dashboard/", "/taches", "/cdn-cgi", "/cdn-cgi/"]
          : ["/taches", "/cdn-cgi", "/cdn-cgi/"],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
