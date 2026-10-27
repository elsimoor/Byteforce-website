import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = 86400;

export async function GET() {
  const sitemaps = [
    {
      loc: `${site.url}/pages-sitemap.xml`,
      lastmod: "2026-10-13",
    },
    {
      loc: `${site.url}/insights-sitemap.xml`,
      lastmod: "2026-10-12",
    },
    {
      loc: `${site.url}/villes-sitemap.xml`,
      lastmod: "2026-10-12",
    },
    {
      loc: `${site.url}/geo-location-sitemap.xml`,
      lastmod: "2026-10-12",
    },
    {
      loc: `${site.url}/outils-sitemap.xml`,
      lastmod: "2026-10-27",
    },
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (s) => `  <sitemap>
    <loc>${s.loc}</loc>
    <lastmod>${s.lastmod}</lastmod>
  </sitemap>`
  )
  .join("\n")}
</sitemapindex>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400",
    },
  });
}
