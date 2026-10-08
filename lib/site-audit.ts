import { lookup } from "node:dns/promises";
import { isIP } from "node:net";

export type AuditState = "running" | "pass" | "warn" | "fail";

export type AuditStep = {
  id: string;
  chapter: string;
  label: string;
  state: AuditState;
  detail: string;
};

const MAX_HTML = 1_500_000;

function step(id: string, chapter: string, label: string, state: AuditState, detail = ""): AuditStep {
  return { id, chapter, label, state, detail };
}

export function parseAuditUrl(raw: string): URL {
  const trimmed = raw.trim();
  if (!trimmed) throw new Error("Indiquez l'adresse du site.");
  if (trimmed.length > 300) throw new Error("L'adresse est trop longue.");
  const withScheme = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  let url: URL;
  try {
    url = new URL(withScheme);
  } catch {
    throw new Error("Cette adresse n'est pas lisible.");
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new Error("Seules les adresses http et https sont lues.");
  }
  if (url.username || url.password) throw new Error("L'adresse ne doit pas contenir de mot de passe.");
  if (url.port && url.port !== "80" && url.port !== "443") throw new Error("Seuls les ports 80 et 443 sont lus.");
  const host = url.hostname.toLowerCase().replace(/\.$/, "");
  if (!host || host === "localhost" || host.endsWith(".localhost") || host.endsWith(".local") || host.endsWith(".internal")) {
    throw new Error("Cette adresse n'est pas un site public.");
  }
  url.hash = "";
  return url;
}

export function isBlockedAddress(address: string): boolean {
  const ip = address.toLowerCase().replace(/^\[|\]$/g, "");
  if (ip.includes(":")) {
    if (ip === "::" || ip === "::1") return true;
    if (ip.startsWith("fc") || ip.startsWith("fd") || ip.startsWith("fe80")) return true;
    const mapped = ip.match(/:ffff:(\d+\.\d+\.\d+\.\d+)$/);
    return mapped ? isBlockedAddress(mapped[1]) : false;
  }
  const parts = ip.split(".").map((part) => Number(part));
  if (parts.length !== 4 || parts.some((part) => !Number.isInteger(part) || part < 0 || part > 255)) return true;
  const [a, b] = parts;
  if (a === 0 || a === 10 || a === 127 || a === 255) return true;
  if (a === 169 && b === 254) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 192 && b === 168) return true;
  if (a === 100 && b >= 64 && b <= 127) return true;
  return false;
}

async function assertPublicHost(url: URL) {
  const host = url.hostname.replace(/^\[|\]$/g, "");
  const addresses = isIP(host) ? [host] : (await lookup(host, { all: true, verbatim: true })).map((record) => record.address);
  if (addresses.length === 0 || addresses.some(isBlockedAddress)) {
    throw new Error("Cette adresse n'est pas un site public.");
  }
}

function decode(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function attrs(tag: string) {
  const found: Record<string, string> = {};
  for (const match of tag.matchAll(/([a-zA-Z:-]+)\s*=\s*("([^"]*)"|'([^']*)')/g)) {
    found[match[1].toLowerCase()] = decode(match[3] ?? match[4] ?? "");
  }
  return found;
}

function textOf(html: string) {
  return decode(html.replace(/<[^>]+>/g, " "));
}

async function readLimited(response: Response) {
  const reader = response.body?.getReader();
  if (!reader) return "";
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (size < MAX_HTML) {
    const { done, value } = await reader.read();
    if (done || !value) break;
    size += value.byteLength;
    chunks.push(value);
  }
  await reader.cancel().catch(() => undefined);
  return new TextDecoder().decode(Buffer.concat(chunks)).slice(0, MAX_HTML);
}

async function fetchPage(start: URL) {
  let current = start;
  const started = Date.now();
  for (let hop = 0; hop < 5; hop += 1) {
    await assertPublicHost(current);
    const response = await fetch(current, {
      redirect: "manual",
      signal: AbortSignal.timeout(12_000),
      headers: {
        accept: "text/html,application/xhtml+xml",
        "user-agent": "ByteForceAudit/1.0 (+https://byteforce.ma/audit)",
      },
    });
    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get("location");
      await response.body?.cancel().catch(() => undefined);
      if (!location) throw new Error("Redirection sans adresse.");
      current = parseAuditUrl(new URL(location, current).href);
      continue;
    }
    const type = response.headers.get("content-type") ?? "";
    const robots = response.headers.get("x-robots-tag") ?? "";
    const html = /text\/html|application\/xhtml/i.test(type) ? await readLimited(response) : "";
    if (!html) await response.body?.cancel().catch(() => undefined);
    return {
      status: response.status,
      url: current,
      ms: Date.now() - started,
      html,
      robots,
      type,
      hsts: response.headers.get("strict-transport-security") ?? "",
      nosniff: response.headers.get("x-content-type-options") ?? "",
      frame: response.headers.get("x-frame-options") ?? response.headers.get("content-security-policy") ?? "",
    };
  }
  throw new Error("Trop de redirections.");
}

function schemaTypes(html: string) {
  const types: string[] = [];
  let invalid = false;
  for (const match of html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const walk = (node: unknown) => {
        if (Array.isArray(node)) {
          node.forEach(walk);
          return;
        }
        if (!node || typeof node !== "object") return;
        const record = node as Record<string, unknown>;
        if (record["@type"]) {
          const value = record["@type"];
          types.push(Array.isArray(value) ? value.map(String).join("/") : String(value));
        }
        Object.values(record).forEach(walk);
      };
      walk(JSON.parse(match[1]));
    } catch {
      invalid = true;
    }
  }
  return { types: [...new Set(types)].slice(0, 6), invalid };
}

function headingNote(html: string) {
  const levels = [...html.matchAll(/<h([1-6])\b/gi)].map((match) => Number(match[1]));
  if (!levels.length) return { state: "fail" as const, detail: "Aucun titre H1–H6." };
  const jump = levels.findIndex((level, index) => index > 0 && level > levels[index - 1] + 1);
  const counts = [1, 2, 3].map((level) => `${levels.filter((item) => item === level).length} H${level}`).join(", ");
  if (levels[0] !== 1) return { state: "warn" as const, detail: `Le premier titre est un H${levels[0]}. ${counts}.` };
  if (jump >= 0) return { state: "warn" as const, detail: `H${levels[jump]} suit H${levels[jump - 1]}. ${counts}.` };
  return { state: "pass" as const, detail: counts };
}

function wordCount(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<(header|nav|footer)[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean).length;
}

function sameSite(left: string, right: string) {
  return left.replace(/^www\./, "") === right.replace(/^www\./, "");
}

function internalTargets(html: string, pageUrl: URL) {
  const found: URL[] = [];
  const seen = new Set<string>();
  const home = pageUrl.pathname.replace(/\/$/, "") || "/";
  for (const match of html.matchAll(/<a\s[^>]*>/gi)) {
    const href = attrs(match[0]).href;
    if (!href || /^(mailto:|tel:|javascript:|#)/i.test(href)) continue;
    try {
      const next = new URL(href, pageUrl);
      if (!sameSite(next.hostname, pageUrl.hostname)) continue;
      next.hash = "";
      const path = next.pathname.replace(/\/$/, "") || "/";
      if (path === home || seen.has(path)) continue;
      seen.add(path);
      found.push(next);
    } catch {
      continue;
    }
  }
  const rank = (url: URL) => (/contact|a-propos|about|services|realisation|travail/i.test(url.pathname) ? 0 : 1);
  return found.sort((left, right) => rank(left) - rank(right)).slice(0, 3);
}

async function fetchText(start: URL, max = 400_000) {
  let current = start;
  for (let hop = 0; hop < 4; hop += 1) {
    await assertPublicHost(current);
    const response = await fetch(current, {
      redirect: "manual",
      signal: AbortSignal.timeout(8_000),
      headers: {
        accept: "text/plain,application/xml,text/xml,*/*",
        "user-agent": "ByteForceAudit/1.0 (+https://byteforce.ma/audit)",
      },
    });
    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get("location");
      await response.body?.cancel().catch(() => undefined);
      if (!location) return { status: response.status, text: "", url: current };
      current = parseAuditUrl(new URL(location, current).href);
      continue;
    }
    const reader = response.body?.getReader();
    if (!reader) return { status: response.status, text: "", url: current };
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (size < max) {
      const { done, value } = await reader.read();
      if (done || !value) break;
      size += value.byteLength;
      chunks.push(value);
    }
    await reader.cancel().catch(() => undefined);
    return { status: response.status, text: new TextDecoder().decode(Buffer.concat(chunks)), url: current };
  }
  return { status: 0, text: "", url: start };
}

async function fetchStatus(start: URL) {
  await assertPublicHost(start);
  const response = await fetch(start, {
    redirect: "manual",
    signal: AbortSignal.timeout(8_000),
    headers: { "user-agent": "ByteForceAudit/1.0 (+https://byteforce.ma/audit)", accept: "*/*" },
  });
  const location = response.headers.get("location") ?? "";
  await response.body?.cancel().catch(() => undefined);
  return { status: response.status, location };
}

function judge(
  html: string,
  robotsHeader: string,
  finalUrl: URL,
  headers: { hsts: string; nosniff: string; frame: string },
): AuditStep[] {
  const chapter = "Page";
  const title = decode((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] ?? "");
  const lang = (html.match(/<html[^>]*\slang=["']([^"']+)/i) || [])[1] ?? "";
  const meta: Record<string, string> = {};
  for (const match of html.matchAll(/<meta\s[^>]*>/gi)) {
    const tag = attrs(match[0]);
    const key = (tag.name || tag.property || "").toLowerCase();
    if (key && tag.content !== undefined) meta[key] = tag.content;
  }
  let canonical = "";
  let icon = false;
  for (const match of html.matchAll(/<link\s[^>]*>/gi)) {
    const tag = attrs(match[0]);
    const rel = (tag.rel ?? "").toLowerCase();
    if (rel === "canonical" && tag.href) canonical = tag.href;
    if (rel.split(/\s+/).includes("icon")) icon = true;
  }
  const h1 = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((match) => textOf(match[1])).filter(Boolean);
  const images = [...html.matchAll(/<img\b[^>]*>/gi)];
  const missingAlt = images.filter((match) => !/\balt\s*=/.test(match[0])).length;
  const schema = schemaTypes(html);
  const headings = headingNote(html);
  const viewport = meta.viewport ?? "";
  const description = meta.description ?? "";
  const robots = `${meta.robots ?? ""} ${robotsHeader}`.toLowerCase();
  const words = wordCount(html);
  const insecureLinks = [...html.matchAll(/href=["']http:\/\//gi)].length;
  const socialBits = [
    meta["og:title"] ? "titre" : "",
    meta["og:description"] ? "description" : "",
    meta["og:image"] ? "image" : "",
  ].filter(Boolean);
  const headerBits = [headers.hsts ? "HSTS" : "", /nosniff/i.test(headers.nosniff) ? "nosniff" : "", headers.frame ? "cadre" : ""].filter(Boolean);

  const titleState: AuditState = !title ? "fail" : title.length < 15 || title.length > 70 ? "warn" : "pass";
  const descriptionState: AuditState = !description ? "fail" : description.length < 50 || description.length > 170 ? "warn" : "pass";
  const h1State: AuditState = h1.length === 1 ? "pass" : h1.length === 0 ? "fail" : "warn";
  const indexState: AuditState = /noindex/.test(robots) ? "fail" : canonical ? "pass" : "warn";
  const imageState: AuditState = images.length === 0 ? "pass" : missingAlt === 0 ? "pass" : missingAlt * 2 >= images.length ? "fail" : "warn";
  const schemaState: AuditState = schema.invalid ? "warn" : schema.types.length ? "pass" : "warn";

  return [
    step("title", chapter, "Titre", titleState, title ? `${title.length} caractères. ${title}` : "La page n'a pas de titre."),
    step("description", chapter, "Description", descriptionState, description ? `${description.length} caractères.` : "Aucune meta description."),
    step("h1", chapter, "Titre visible", h1State, h1.length === 1 ? h1[0] : h1.length === 0 ? "Aucun H1." : `${h1.length} titres H1.`),
    step("headings", chapter, "Ordre des titres", headings.state, headings.detail),
    step("index", chapter, "Indexation", indexState, /noindex/.test(robots) ? "La page demande à ne pas être indexée." : canonical ? canonical : "Pas de lien canonique."),
    step("social", chapter, "Partage", socialBits.length === 3 ? "pass" : socialBits.length ? "warn" : "fail", socialBits.length ? `Open Graph : ${socialBits.join(", ")}.` : "Pas de titre, description, ni image de partage."),
    step("language", chapter, "Langue", lang ? "pass" : "warn", lang ? `lang="${lang}".` : "La langue de la page n'est pas déclarée."),
    step("mobile", chapter, "Mobile", /width\s*=\s*device-width/i.test(viewport) ? "pass" : "fail", viewport ? viewport : "Pas de balise viewport."),
    step("icon", chapter, "Icône", icon ? "pass" : "warn", icon ? "Une icône est déclarée." : "Pas de favicon dans la page."),
    step("images", chapter, "Images", imageState, images.length === 0 ? "Aucune image sur la page." : missingAlt === 0 ? `${images.length} images avec un attribut alt.` : `${missingAlt} image${missingAlt > 1 ? "s" : ""} sans attribut alt.`),
    step(
      "https",
      chapter,
      "HTTPS",
      finalUrl.protocol === "https:" ? (insecureLinks ? "warn" : "pass") : "fail",
      finalUrl.protocol === "https:" ? (insecureLinks ? `${insecureLinks} lien${insecureLinks > 1 ? "s" : ""} encore en http.` : "La page est servie en https.") : "La page finale est encore en http.",
    ),
    step("headers", chapter, "En-têtes", headerBits.length >= 2 ? "pass" : "warn", headerBits.length ? headerBits.join(", ") + "." : "Pas de HSTS, nosniff, ni protection de cadre."),
    step("text", chapter, "Texte", words >= 250 ? "pass" : words >= 120 ? "warn" : "fail", `${words} mots hors menus.`),
    step("schema", chapter, "Données structurées", schemaState, schema.invalid ? "Un JSON-LD est présent, mais illisible." : schema.types.length ? schema.types.join(", ") + "." : "Pas de JSON-LD sur cette page."),
  ];
}

async function* filesAndHost(pageUrl: URL, html: string): AsyncGenerator<AuditStep> {
  yield step("robots", "Fichiers", "robots.txt", "running", "Lecture du fichier.");
  try {
    const robots = await fetchText(new URL("/robots.txt", pageUrl.origin), 80_000);
    const blocksHome = /disallow:\s*\/\s*$/im.test(robots.text);
    const hasAgent = /user-agent:/i.test(robots.text);
    const pointsSitemap = /sitemap:/i.test(robots.text);
    const state: AuditState = robots.status !== 200 ? "fail" : blocksHome ? "warn" : hasAgent ? "pass" : "warn";
    const detail =
      robots.status !== 200
        ? `Réponse ${robots.status || "vide"}.`
        : blocksHome
          ? "Le fichier bloque la racine du site."
          : `${hasAgent ? "Règles présentes" : "Peu de règles"}${pointsSitemap ? ", avec un sitemap" : ""}.`;
    yield step("robots", "Fichiers", "robots.txt", state, detail);
  } catch {
    yield step("robots", "Fichiers", "robots.txt", "fail", "Le fichier ne répond pas.");
  }

  yield step("sitemap", "Fichiers", "Sitemap", "running", "Comptage des adresses.");
  try {
    const sitemap = await fetchText(new URL("/sitemap.xml", pageUrl.origin));
    const locs = sitemap.text.match(/<loc>/gi)?.length ?? 0;
    const indexes = sitemap.text.match(/<sitemap[\s>]/gi)?.length ?? 0;
    const lastmods = sitemap.text.match(/<lastmod>/gi)?.length ?? 0;
    if (sitemap.status !== 200) {
      yield step("sitemap", "Fichiers", "Sitemap", "warn", `Pas de sitemap à la racine (${sitemap.status || "sans réponse"}).`);
    } else if (indexes && !sitemap.text.includes("<url>")) {
      yield step("sitemap", "Fichiers", "Sitemap", locs ? "pass" : "warn", `Index de ${locs} sitemap${locs > 1 ? "s" : ""}.`);
    } else if (!locs) {
      yield step("sitemap", "Fichiers", "Sitemap", "fail", "Le fichier répond, sans adresse.");
    } else {
      yield step("sitemap", "Fichiers", "Sitemap", "pass", `${locs} adresse${locs > 1 ? "s" : ""}${lastmods ? `, ${lastmods} avec une date` : ""}.`);
    }
  } catch {
    yield step("sitemap", "Fichiers", "Sitemap", "warn", "Le sitemap ne répond pas.");
  }

  const otherHost = pageUrl.hostname.startsWith("www.") ? pageUrl.hostname.slice(4) : `www.${pageUrl.hostname}`;
  yield step("host", "Domaine", "www", "running", `Lecture de ${otherHost}.`);
  try {
    const other = new URL(pageUrl.href);
    other.hostname = otherHost;
    const probe = await fetchStatus(other);
    const locationHost = probe.location ? new URL(probe.location, other).hostname : "";
    const redirectsHome = probe.status >= 300 && probe.status < 400 && sameSite(locationHost, pageUrl.hostname);
    yield step(
      "host",
      "Domaine",
      "www",
      redirectsHome ? "pass" : probe.status === 200 ? "warn" : "warn",
      redirectsHome ? `${otherHost} renvoie vers le site.` : probe.status === 200 ? `${otherHost} répond aussi, sans redirection.` : `${otherHost} répond ${probe.status || "sans code"}.`,
    );
  } catch {
    yield step("host", "Domaine", "www", "warn", `${otherHost} ne répond pas.`);
  }

  if (pageUrl.protocol === "https:") {
    yield step("http", "Domaine", "HTTP", "running", "Vérification du passage vers https.");
    try {
      const httpUrl = new URL(pageUrl.href);
      httpUrl.protocol = "http:";
      const probe = await fetchStatus(httpUrl);
      const secure = probe.status >= 300 && probe.status < 400 && probe.location.startsWith("https://");
      yield step("http", "Domaine", "HTTP", secure ? "pass" : probe.status === 200 ? "fail" : "warn", secure ? "Le http renvoie vers le https." : probe.status === 200 ? "La page reste disponible en http." : `Réponse ${probe.status || "vide"}.`);
    } catch {
      yield step("http", "Domaine", "HTTP", "warn", "Le http ne répond pas.");
    }
  }

  yield step("missing", "Domaine", "Page absente", "running", "Demande d'une adresse qui n'existe pas.");
  try {
    const missing = new URL(`/byteforce-audit-absent-${Date.now().toString(36)}`, pageUrl.origin);
    const probe = await fetchStatus(missing);
    yield step("missing", "Domaine", "Page absente", probe.status === 404 ? "pass" : "warn", probe.status === 404 ? "Une adresse inconnue répond 404." : `Une adresse inconnue répond ${probe.status}.`);
  } catch {
    yield step("missing", "Domaine", "Page absente", "warn", "La demande n'a pas abouti.");
  }

  const links = internalTargets(html, pageUrl);
  if (!links.length) {
    yield step("links", "Liens", "Pages liées", "warn", "Aucun lien interne sur l'accueil.");
    return;
  }
  for (const [index, link] of links.entries()) {
    const id = `link-${index}`;
    const label = link.pathname === "/" ? link.hostname : link.pathname;
    yield step(id, "Liens", label, "running", "Lecture de la page.");
    try {
      const linked = await fetchPage(link);
      if (!linked.html) {
        yield step(id, "Liens", label, "warn", linked.status ? `Réponse ${linked.status}, sans page HTML.` : "Pas de page HTML.");
        continue;
      }
      const linkedTitle = decode((linked.html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] ?? "");
      const noindex = /noindex/i.test(linked.robots) || /<meta[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(linked.html);
      const words = wordCount(linked.html);
      const state: AuditState = linked.status < 200 || linked.status >= 300 ? "fail" : !linkedTitle || words < 120 ? "warn" : "pass";
      yield step(
        id,
        "Liens",
        label,
        state,
        `${linked.status} · ${words} mots${linkedTitle ? ` · ${linkedTitle}` : ""}${noindex ? " · noindex" : ""}.`,
      );
    } catch {
      yield step(id, "Liens", label, "fail", "La page ne répond pas.");
    }
  }
}

export async function* auditPage(raw: string): AsyncGenerator<AuditStep> {
  yield step("address", "Arrivée", "Adresse", "running", "Vérification.");
  let url: URL;
  try {
    url = parseAuditUrl(raw);
    await assertPublicHost(url);
  } catch (error) {
    yield step("address", "Arrivée", "Adresse", "fail", error instanceof Error ? error.message : "Adresse refusée.");
    return;
  }
  yield step("address", "Arrivée", "Adresse", "pass", url.hostname);

  yield step("response", "Arrivée", "La page répond", "running", "Lecture de la page d'accueil.");
  let page: Awaited<ReturnType<typeof fetchPage>>;
  try {
    page = await fetchPage(url);
  } catch (error) {
    const message = error instanceof Error && error.name === "TimeoutError" ? "Pas de réponse dans le délai." : "Le site ne répond pas.";
    yield step("response", "Arrivée", "La page répond", "fail", message);
    return;
  }

  const moved = page.url.href.replace(/\/$/, "") !== url.href.replace(/\/$/, "");
  if (!page.html) {
    yield step("response", "Arrivée", "La page répond", "fail", page.status ? `Réponse ${page.status}, sans page HTML.` : "Pas de page HTML.");
    return;
  }
  const responseState: AuditState = page.status >= 200 && page.status < 300 ? "pass" : "fail";
  yield step(
    "response",
    "Arrivée",
    "La page répond",
    responseState,
    `${page.status} en ${page.ms} ms${moved ? `. Arrivée sur ${page.url.hostname}` : ""}.`,
  );
  if (responseState === "fail") return;

  for (const item of judge(page.html, page.robots, page.url, page)) yield item;
  yield* filesAndHost(page.url, page.html);
}
