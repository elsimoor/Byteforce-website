/**
 * Checks the public site after a deploy.
 * Run: npm run check-live
 * Another host: CHECK_ORIGIN=https://byteforce.ma npm run check-live
 */

const origin = (process.env.CHECK_ORIGIN || "https://byteforce.ma").replace(/\/$/, "");
const results = [];

function decode(value) {
  return String(value)
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function check(name, ok, detail = "") {
  results.push({ name, ok });
  const mark = ok ? "PASS" : "FAIL";
  console.log(`${mark}  ${name}${detail ? " — " + detail : ""}`);
}

function meta(html, name) {
  const tags = html.match(/<meta\b[^>]*>/gi) || [];
  for (const tag of tags) {
    if (!new RegExp(`(?:name|property)=["']${name}["']`, "i").test(tag)) continue;
    const content = tag.match(/content=["']([^"']*)["']/i);
    if (content) return decode(content[1]);
  }
  return "";
}

function titleOf(html) {
  return decode((html.match(/<title>([^<]*)<\/title>/i) || [])[1] || "").trim();
}

function canonicalOf(html) {
  const tag = (html.match(/<link\b[^>]*rel=["']canonical["'][^>]*>/i) || [])[0] || "";
  return decode((tag.match(/href=["']([^"']+)["']/i) || [])[1] || "");
}

function crashed(html) {
  return /Application error/i.test(html) || /Server Components render/i.test(html);
}

function words(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<(header|nav|footer)[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean).length;
}

async function get(path, { redirect = "follow", method = "GET" } = {}) {
  const url = path.startsWith("http") ? path : `${origin}${path}`;
  const res = await fetch(url, {
    method,
    redirect,
    headers: { "user-agent": "byteforce-live-check", accept: "text/html,application/xml" },
  });
  const text = method === "HEAD" ? "" : await res.text();
  return { url, status: res.status, headers: res.headers, text, final: res.url };
}

function pageOk(html, expectedTitle) {
  return html.includes(expectedTitle) && !crashed(html);
}

async function main() {
  console.log(`Live check  ${origin}  ${new Date().toISOString()}\n`);

  const home = await get("/");
  const homeTitle = titleOf(home.text);
  check("homepage responds", home.status === 200, String(home.status));
  check(
    "homepage title is French and names Casablanca",
    homeTitle.includes("Développement logiciel sur mesure à Casablanca"),
    homeTitle,
  );
  check("homepage locale is fr_FR", meta(home.text, "og:locale") === "fr_FR", meta(home.text, "og:locale"));
  check("homepage canonical is the bare host", canonicalOf(home.text) === origin, canonicalOf(home.text));
  check("homepage nav is French", home.text.includes("Travaux") && home.text.includes("À propos") && home.text.includes("Décisions"));
  check("logo alt is Byte Force", /alt=["']Byte Force["']/.test(home.text));
  check("homepage did not crash", !crashed(home.text));
  check(
    "homepage has no English nav phrases",
    !/Start a project|>\s*About\s*<|>\s*Work\s*<|Software engineering studio/i.test(home.text),
  );

  const sitemap = await get("/sitemap.xml");
  const locs = [...sitemap.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const lastmods = sitemap.text.match(/<lastmod>/g) || [];
  check("sitemap responds", sitemap.status === 200, `${locs.length} URLs`);
  check("sitemap has lastmod on every URL", locs.length > 0 && lastmods.length === locs.length, `${lastmods.length} lastmod`);
  check("sitemap omits city and category doorway URLs", !locs.some((url) => url.includes("/villes/") || url.includes("/categories/")));
  check("sitemap omits the redirecting service URLs", !locs.some((url) => url.includes("/services/logiciel-sur-mesure") || url.includes("/services/applications-mobiles")));
  check("sitemap lists the homepage without a trailing slash", locs.includes(origin));
  check("sitemap lists the Casablanca page", locs.includes(`${origin}/developpement-logiciel-casablanca`));

  const cities = ["/villes/lille", "/villes/tanger"];
  for (const path of cities) {
    const page = await get(path);
    check(`${path} is noindex`, meta(page.text, "robots").includes("noindex") && page.status === 200, meta(page.text, "robots"));
    check(
      `${path} links to the final service URLs`,
      !page.text.includes("/services/logiciel-sur-mesure") && !page.text.includes("/services/applications-mobiles"),
    );
  }

  const services = [
    ["/services/creation-site-web", "Création de site web à Casablanca"],
    ["/services/referencement-seo", "Référencement naturel à Casablanca"],
  ];
  for (const [path, expected] of services) {
    const page = await get(path);
    const headings = page.text.match(/<h2\b/gi) || [];
    check(`${path} title`, titleOf(page.text).includes(expected), titleOf(page.text));
    check(`${path} has sections and a FAQ`, headings.length >= 2 && page.text.includes("FAQPage"), `${headings.length} H2`);
    check(`${path} did not crash`, page.status === 200 && !crashed(page.text));
    check(`${path} has an Open Graph image`, meta(page.text, "og:image").includes("opengraph-image"));
  }

  const category = await get("/categories/e-commerce");
  check("category page is noindex", category.status === 200 && meta(category.text, "robots").includes("noindex"), meta(category.text, "robots"));

  const contact = await get("/contact");
  check("contact has a canonical", canonicalOf(contact.text) === `${origin}/contact`, canonicalOf(contact.text));
  check("contact has a meta description", meta(contact.text, "description").length > 40);
  check("contact has Open Graph title and description", meta(contact.text, "og:title").includes("Contact") && meta(contact.text, "og:description").length > 40);
  check("contact locale is fr_FR", meta(contact.text, "og:locale") === "fr_FR");

  const about = await get("/a-propos");
  check("about title names the studio", titleOf(about.text).includes("Studio logiciel à Casablanca"), titleOf(about.text));
  check("about states there is no office in France", about.text.includes("Pas de bureau en France"));
  check("about is more than a stub", words(about.text) >= 250, `${words(about.text)} words`);
  check("about Open Graph is specific", meta(about.text, "og:description").includes("Casablanca") && !meta(about.text, "og:title").endsWith("· Casablanca"));

  const insights = await get("/insights");
  check("insights title is French", titleOf(insights.text).includes("Décider avant de construire"), titleOf(insights.text));
  check("insights description is French", /remplacer|entreprise|application/i.test(meta(insights.text, "description")), meta(insights.text, "description").slice(0, 80));
  check("insights explains the published decisions", words(insights.text) >= 250, `${words(insights.text)} words`);

  const servicesIndex = await get("/services");
  check("services index title names Casablanca", titleOf(servicesIndex.text).includes("Services à Casablanca"), titleOf(servicesIndex.text));

  const coco = await get("/realisations/coco-inbox");
  const cocoDesc = meta(coco.text, "description");
  check("Coco Inbox description matches the product", cocoDesc.includes("email temporaire") && !cocoDesc.includes("flux de communication"), cocoDesc);
  check(
    "Coco Inbox does not link the redirecting service URLs",
    !coco.text.includes("/services/logiciel-sur-mesure") && !coco.text.includes("/services/applications-mobiles"),
  );

  const projects = ["/realisations/nu-lille", "/realisations/dealkhir", "/realisations/uas", "/realisations"];
  for (const path of projects) {
    const page = await get(path);
    check(`${path} renders`, page.status === 200 && titleOf(page.text).includes("Byte Force") && !crashed(page.text), titleOf(page.text));
    if (path !== "/realisations") {
      check(`${path} has locale, image and an article`, meta(page.text, "og:locale") === "fr_FR" && meta(page.text, "og:image").includes("opengraph-image") && page.text.includes('"Article"'), `${words(page.text)} words`);
      check(`${path} is not a stub`, words(page.text) >= 250, `${words(page.text)} words`);
    }
  }
  const dealkhir = await get("/realisations/dealkhir");
  check("Dealkhir links Casablanca to the money page", dealkhir.text.includes("/developpement-logiciel-casablanca") && !dealkhir.text.includes("/villes/casablanca"));
  const gestion = await get("/developpement-logiciel-sur-mesure-maroc/erp/logiciel-gestion-entreprise");
  check(
    "gestion page links to the final métier URL",
    gestion.text.includes("/developpement-logiciel-sur-mesure-maroc/logiciel-metier") && !gestion.text.includes("/logiciel-metier/gestion"),
  );
  const listing = await get("/realisations");
  check("realisations listing shows a project screenshot", listing.text.includes("/work/coco-inbox.jpg"));

  for (const shot of ["/work/proche.jpg", "/work/dealkhir.jpg", "/work/coco-inbox.jpg", "/work/tourispeak.jpg"]) {
    const image = await get(shot, { method: "HEAD" });
    check(`${shot} is reachable`, image.status === 200, String(image.status));
  }

  const robots = await get("/robots.txt");
  check("robots.txt blocks the dashboard and points at the sitemap", robots.status === 200 && robots.text.includes("Disallow: /dashboard") && robots.text.includes(`${origin}/sitemap.xml`));

  const missing = await get("/this-page-does-not-exist-check");
  check("unknown URL is a real 404", missing.status === 404, String(missing.status));

  const dashboard = await get("/dashboard");
  check("dashboard is hidden in production", dashboard.status === 404, String(dashboard.status));

  const aboutRedirect = await get("/about", { redirect: "manual" });
  const aboutLocation = aboutRedirect.headers.get("location") || "";
  check("old /about redirects to /a-propos", [301, 308].includes(aboutRedirect.status) && aboutLocation.includes("/a-propos"), `${aboutRedirect.status} ${aboutLocation}`);

  const serviceRedirect = await get("/services/logiciel-sur-mesure", { redirect: "manual" });
  const serviceLocation = serviceRedirect.headers.get("location") || "";
  check(
    "old software service URL redirects to the money page",
    [301, 308].includes(serviceRedirect.status) && serviceLocation.includes("/developpement-logiciel-sur-mesure-maroc"),
    `${serviceRedirect.status} ${serviceLocation}`,
  );

  const www = await get("https://www.byteforce.ma/", { redirect: "manual" });
  const wwwLocation = www.headers.get("location") || "";
  check("www redirects to the bare host", [301, 302, 307, 308].includes(www.status) && wwwLocation.startsWith("https://byteforce.ma"), `${www.status} ${wwwLocation}`);

  const money = await get("/developpement-logiciel-sur-mesure-maroc");
  check("software money page renders", money.status === 200 && pageOk(money.text, "Byte Force") && !crashed(money.text), titleOf(money.text));

  const failed = results.filter((item) => !item.ok).length;
  console.log(`\n${results.length - failed} passed, ${failed} failed`);
  process.exit(failed === 0 ? 0 : 1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
