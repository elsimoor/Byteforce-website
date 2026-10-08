import { lookup } from "node:dns/promises";
import { isIP } from "node:net";

export type AuditState = "running" | "pass" | "warn" | "fail";

export type AuditStep = {
  id: string;
  label: string;
  state: AuditState;
  detail: string;
};

const MAX_HTML = 1_500_000;

function step(id: string, label: string, state: AuditState, detail = ""): AuditStep {
  return { id, label, state, detail };
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
    return { status: response.status, url: current, ms: Date.now() - started, html, robots, type };
  }
  throw new Error("Trop de redirections.");
}

function judge(html: string, robotsHeader: string, finalUrl: URL): AuditStep[] {
  const title = decode((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] ?? "");
  const lang = (html.match(/<html[^>]*\slang=["']([^"']+)/i) || [])[1] ?? "";
  const meta: Record<string, string> = {};
  for (const match of html.matchAll(/<meta\s[^>]*>/gi)) {
    const tag = attrs(match[0]);
    const key = (tag.name || tag.property || "").toLowerCase();
    if (key && tag.content !== undefined) meta[key] = tag.content;
  }
  let canonical = "";
  for (const match of html.matchAll(/<link\s[^>]*>/gi)) {
    const tag = attrs(match[0]);
    if (tag.rel?.toLowerCase() === "canonical" && tag.href) canonical = tag.href;
  }
  const h1 = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((match) => textOf(match[1])).filter(Boolean);
  const images = [...html.matchAll(/<img\b[^>]*>/gi)];
  const missingAlt = images.filter((match) => !/\balt\s*=/.test(match[0])).length;
  const jsonLd = /<script[^>]*type=["']application\/ld\+json["']/i.test(html);
  const viewport = meta.viewport ?? "";
  const description = meta.description ?? "";
  const robots = `${meta.robots ?? ""} ${robotsHeader}`.toLowerCase();
  const words = html
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<(header|nav|footer)[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean).length;
  const insecureLinks = [...html.matchAll(/href=["']http:\/\//gi)].length;

  const titleState: AuditState = !title ? "fail" : title.length < 15 || title.length > 70 ? "warn" : "pass";
  const descriptionState: AuditState = !description ? "fail" : description.length < 50 || description.length > 170 ? "warn" : "pass";
  const h1State: AuditState = h1.length === 1 ? "pass" : h1.length === 0 ? "fail" : "warn";
  const indexState: AuditState = /noindex/.test(robots) ? "fail" : canonical ? "pass" : "warn";
  const imageState: AuditState = images.length === 0 ? "pass" : missingAlt === 0 ? "pass" : missingAlt * 2 >= images.length ? "fail" : "warn";

  return [
    step(
      "title",
      "Titre",
      titleState,
      title ? `${title.length} caractères. ${title}` : "La page n'a pas de titre.",
    ),
    step(
      "description",
      "Description",
      descriptionState,
      description ? `${description.length} caractères.` : "Aucune meta description.",
    ),
    step(
      "h1",
      "Titre visible",
      h1State,
      h1.length === 1 ? h1[0] : h1.length === 0 ? "Aucun H1." : `${h1.length} titres H1.`,
    ),
    step(
      "index",
      "Indexation",
      indexState,
      /noindex/.test(robots) ? "La page demande à ne pas être indexée." : canonical ? canonical : "Pas de lien canonique.",
    ),
    step(
      "social",
      "Image sociale",
      meta["og:image"] ? "pass" : "warn",
      meta["og:image"] ? "Une image est déclarée pour le partage." : "Pas d'image Open Graph.",
    ),
    step("language", "Langue", lang ? "pass" : "warn", lang ? `lang="${lang}".` : "La langue de la page n'est pas déclarée."),
    step(
      "mobile",
      "Mobile",
      /width\s*=\s*device-width/i.test(viewport) ? "pass" : "fail",
      viewport ? viewport : "Pas de balise viewport.",
    ),
    step(
      "images",
      "Images",
      imageState,
      images.length === 0 ? "Aucune image sur la page." : missingAlt === 0 ? `${images.length} images avec un attribut alt.` : `${missingAlt} image${missingAlt > 1 ? "s" : ""} sans attribut alt.`,
    ),
    step(
      "https",
      "HTTPS",
      finalUrl.protocol === "https:" ? (insecureLinks ? "warn" : "pass") : "fail",
      finalUrl.protocol === "https:"
        ? insecureLinks
          ? `${insecureLinks} lien${insecureLinks > 1 ? "s" : ""} encore en http.`
          : "La page est servie en https."
        : "La page finale est encore en http.",
    ),
    step(
      "text",
      "Texte",
      words >= 250 ? "pass" : words >= 120 ? "warn" : "fail",
      `${words} mots hors menus.`,
    ),
    step(
      "schema",
      "Données structurées",
      jsonLd ? "pass" : "warn",
      jsonLd ? "Un bloc JSON-LD est présent." : "Pas de JSON-LD sur cette page.",
    ),
  ];
}

export async function* auditPage(raw: string): AsyncGenerator<AuditStep> {
  yield step("address", "Adresse", "running", "Vérification.");
  let url: URL;
  try {
    url = parseAuditUrl(raw);
    await assertPublicHost(url);
  } catch (error) {
    yield step("address", "Adresse", "fail", error instanceof Error ? error.message : "Adresse refusée.");
    return;
  }
  yield step("address", "Adresse", "pass", url.hostname);

  yield step("response", "La page répond", "running", "Lecture de la page d'accueil.");
  let page: Awaited<ReturnType<typeof fetchPage>>;
  try {
    page = await fetchPage(url);
  } catch (error) {
    const message = error instanceof Error && error.name === "TimeoutError" ? "Pas de réponse dans le délai." : "Le site ne répond pas.";
    yield step("response", "La page répond", "fail", message);
    return;
  }

  const moved = page.url.href.replace(/\/$/, "") !== url.href.replace(/\/$/, "");
  if (!page.html) {
    yield step("response", "La page répond", "fail", page.status ? `Réponse ${page.status}, sans page HTML.` : "Pas de page HTML.");
    return;
  }
  const responseState: AuditState = page.status >= 200 && page.status < 300 ? "pass" : "fail";
  yield step(
    "response",
    "La page répond",
    responseState,
    `${page.status} en ${page.ms} ms${moved ? `. Arrivée sur ${page.url.hostname}` : ""}.`,
  );
  if (responseState === "fail") return;

  for (const item of judge(page.html, page.robots, page.url)) yield item;
}
