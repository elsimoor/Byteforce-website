const base = (process.env.GEO_BASE || "http://localhost:3002").replace(/\/$/, "");
const origin = "https://byteforce.ma";

const sitemap = await fetch(`${base}/geo-location-sitemap.xml`);
if (!sitemap.ok) {
  console.error(`sitemap HTTP ${sitemap.status}`);
  process.exit(1);
}
const xml = await sitemap.text();
const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (!locs.length) {
  console.error("sitemap has no URLs");
  process.exit(1);
}

let failed = 0;
for (const loc of locs) {
  let url;
  try {
    url = new URL(loc);
  } catch {
    console.error(`bad loc ${loc}`);
    failed += 1;
    continue;
  }
  if (url.origin !== origin || url.search || url.hostname.startsWith("www.")) {
    console.error(`loc must be ${origin} without query: ${loc}`);
    failed += 1;
    continue;
  }
  const response = await fetch(`${base}${url.pathname}`, { redirect: "manual" });
  if (response.status !== 200) {
    console.error(`${url.pathname} HTTP ${response.status}`);
    failed += 1;
    continue;
  }
  const html = await response.text();
  if (/noindex/i.test(html)) {
    console.error(`${url.pathname} is noindex`);
    failed += 1;
    continue;
  }
  const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i)?.[1];
  const expected = `${origin}${url.pathname}`;
  if (canonical !== expected && canonical !== url.pathname) {
    console.error(`${url.pathname} canonical ${canonical || "missing"}`);
    failed += 1;
  }
}

if (failed) {
  console.error(`${failed} of ${locs.length} geo URLs failed`);
  process.exit(1);
}
console.log(`${locs.length} geo URLs ok`);
