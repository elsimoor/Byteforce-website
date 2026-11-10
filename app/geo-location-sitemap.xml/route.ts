import { NextResponse } from "next/server";
import { GEO_LASTMOD } from "@/lib/geo/coverage";
import { indexableGeoPages } from "@/lib/geo/pages";
import { site } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = 86400;

function escapeXml(unsafe: string) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}

export async function GET() {
  const entries = [
    { loc: `${site.url}/geo-location`, lastmod: GEO_LASTMOD },
    ...indexableGeoPages().map((page) => ({
      loc: `${site.url}/${page.path}`,
      lastmod: GEO_LASTMOD,
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${escapeXml(e.loc)}</loc>
    <lastmod>${e.lastmod}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400",
    },
  });
}
