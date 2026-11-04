import fs from "fs";

const html = fs.readFileSync(process.env.TEMP + "/seo-page.html", "utf8");
const h1 = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => m[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim());
console.log("h1 count", h1.length);
console.log("h1", h1[0]);
const headings = [...html.matchAll(/<h([23])\b[^>]*>([\s\S]*?)<\/h\1>/gi)].map((m) => m[2].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim());
for (const phrase of [
  "agence de référencement Maroc",
  "consultant SEO Maroc",
  "prestataire SEO",
  "agence référencement web",
  "SEO Casablanca",
  "agence SEO Casablanca",
]) {
  console.log(phrase, html.toLowerCase().includes(phrase.toLowerCase()) ? "yes" : "MISSING");
}
console.log("headings:");
headings.forEach((h) => console.log("-", h));
const contacts = [...html.matchAll(/href="([^"]*contact[^"]*)"/gi)].map((m) => m[1]);
console.log("contact hrefs", [...new Set(contacts)]);
const badCta = [...html.matchAll(/<a\b[^>]*class="[^"]*btn[^"]*"[^>]*>/gi)].map((m) => m[0]);
console.log("btn anchors", badCta.length);
const alts = [...html.matchAll(/alt="([^"]+)"/gi)].map((m) => m[1]);
console.log("alts", alts.filter((a) => a.includes("SEO") || a.includes("Search")));
const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)].map((m) => {
  try {
    const data = JSON.parse(m[1]);
    return data["@type"] || (data["@graph"] ? "graph" : "ok");
  } catch (error) {
    return "INVALID " + error.message;
  }
});
console.log("schema", schemas);
console.log("canonical", /rel="canonical" href="([^"]+)"/.exec(html)?.[1]);
console.log("title", /<title>([^<]+)<\/title>/.exec(html)?.[1]);
console.log("description", /name="description" content="([^"]+)"/.exec(html)?.[1]);
console.log("hreflang", [...html.matchAll(/hrefLang="([^"]+)"/gi)].map((m) => m[1]));
console.log("robots", /name="robots" content="([^"]+)"/.exec(html)?.[1]);
console.log("priority image", /search-console-performance[^"]*"/.test(html) || html.includes("search-console-performance"));
console.log("generative", html.includes("search-console-generative-ai"));
console.log("placeholder", html.includes("[X]"));
console.log("width height", /width="1920"/.test(html), /height="1080"/.test(html));
const text = html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
const idx = text.toLowerCase().indexOf("agence seo casablanca");
console.log("keyword index in text", idx);
console.log("words before keyword", text.slice(0, idx).trim().split(/\s+/).length);
