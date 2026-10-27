import { NextResponse } from "next/server";
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
  const today = new Date().toISOString().split("T")[0];

  const tools = [
    {
      loc: `${site.url}/outils`,
      lastmod: today,
    },
    {
      loc: `${site.url}/outils/claude-artifact-to-markdown`,
      lastmod: today,
    },
    {
      loc: `${site.url}/audit`,
      lastmod: today,
    },
    {
      loc: `${site.url}/ou-en-est-le-projet`,
      lastmod: today,
    },
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${tools
  .map(
    (t) => `  <url>
    <loc>${escapeXml(t.loc)}</loc>
    <lastmod>${t.lastmod}</lastmod>
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
