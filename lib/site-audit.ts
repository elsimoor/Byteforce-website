import { lookup } from "node:dns/promises";
import { isIP } from "node:net";
import tls from "node:tls";
import { buildFindings, type AuditFacts } from "@/lib/audit/findings";

export type AuditState = "running" | "pass" | "warn" | "fail";
export type AuditDimension = "Technique" | "Performance" | "SEO" | "Accessibilité" | "GEO" | "Conversion";
export type AuditImpact = "aucun" | "faible" | "moyen" | "élevé";
export type AuditEffort = "court" | "moyen" | "long";

export type AuditStep = {
  id: string;
  chapter: string;
  dimension: AuditDimension;
  label: string;
  state: AuditState;
  detail: string;
  why: string;
  impact: AuditImpact;
  action: string;
  effort: AuditEffort;
};

const MAX_HTML = 1_500_000;

function step(
  id: string,
  chapter: string,
  label: string,
  state: AuditState,
  detail = "",
  extra: Partial<Pick<AuditStep, "dimension" | "why" | "impact" | "action" | "effort">> = {},
): AuditStep {
  return {
    id,
    chapter,
    dimension: extra.dimension ?? "Technique",
    label,
    state,
    detail,
    why: extra.why ?? "",
    impact: extra.impact ?? "faible",
    action: extra.action ?? "",
    effort: extra.effort ?? "court",
  };
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
  let hops = 0;
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
      hops += 1;
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
      hops,
      bytes: html.length,
      cookies: typeof response.headers.getSetCookie === "function" ? response.headers.getSetCookie() : [],
      hsts: response.headers.get("strict-transport-security") ?? "",
      nosniff: response.headers.get("x-content-type-options") ?? "",
      frame: response.headers.get("x-frame-options") ?? "",
      csp: response.headers.get("content-security-policy") ?? "",
      referrer: response.headers.get("referrer-policy") ?? "",
      permissions: response.headers.get("permissions-policy") ?? "",
      coop: response.headers.get("cross-origin-opener-policy") ?? "",
      corp: response.headers.get("cross-origin-resource-policy") ?? "",
      server: response.headers.get("server") ?? "",
      powered: response.headers.get("x-powered-by") ?? "",
    };
  }
  throw new Error("Trop de redirections.");
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

export async function* auditPage(raw: string): AsyncGenerator<AuditStep> {
  yield step("address", "Technique", "Adresse", "running", "Vérification.", { dimension: "Technique", impact: "élevé", effort: "court" });
  let url: URL;
  try {
    url = parseAuditUrl(raw);
    await assertPublicHost(url);
  } catch (error) {
    yield step("address", "Technique", "Adresse", "fail", error instanceof Error ? error.message : "Adresse refusée.", {
      dimension: "Technique",
      why: "Sans une adresse publique, il n'y a pas de site à lire.",
      impact: "élevé",
      action: "Indiquer l'adresse https du site.",
      effort: "court",
    });
    return;
  }
  yield step("address", "Technique", "Adresse", "pass", url.hostname, {
    dimension: "Technique",
    why: "L'adresse est publique. La suite peut la lire.",
    impact: "faible",
    action: "Garder cette adresse comme canonique.",
    effort: "court",
  });

  yield step("response", "Technique", "La page répond", "running", "Lecture de la page d'accueil.", { dimension: "Technique" });
  let page: Awaited<ReturnType<typeof fetchPage>>;
  try {
    page = await fetchPage(url);
  } catch (error) {
    const message = error instanceof Error && error.name === "TimeoutError" ? "Pas de réponse dans le délai." : "Le site ne répond pas.";
    yield step("response", "Technique", "La page répond", "fail", message, {
      dimension: "Technique",
      why: "Si la page ne répond pas, aucun visiteur ni aucun moteur ne la lit.",
      impact: "élevé",
      action: "Rétablir la réponse de l'accueil avant le reste.",
      effort: "moyen",
    });
    return;
  }

  const moved = page.url.href.replace(/\/$/, "") !== url.href.replace(/\/$/, "");
  if (!page.html) {
    yield step("response", "Technique", "La page répond", "fail", page.status ? `Réponse ${page.status}, sans page HTML.` : "Pas de page HTML.", {
      dimension: "Technique",
      why: "Une réponse sans page ne peut ni se lire ni convertir.",
      impact: "élevé",
      action: "Servir le HTML de l'accueil.",
      effort: "moyen",
    });
    return;
  }
  const responseState: AuditState = page.status >= 200 && page.status < 300 ? "pass" : "fail";
  yield step(
    "response",
    "Technique",
    "La page répond",
    responseState,
    `${page.status} en ${page.ms} ms${moved ? `. Arrivée sur ${page.url.hostname}` : ""}.`,
    {
      dimension: "Technique",
      why: "C'est la porte d'entrée. Le temps détaillé est dans Performance.",
      impact: responseState === "pass" ? "faible" : "élevé",
      action: responseState === "pass" ? "Garder cette réponse." : "Corriger le code de réponse de l'accueil.",
      effort: "moyen",
    },
  );
  if (responseState === "fail") return;

  yield step("suite", "Technique", "Suite de la lecture", "running", "Fichiers, domaine, et jusqu'à trois pages liées.", {
    dimension: "Technique",
    why: "Le rapport a besoin de plus que l'accueil pour dire si le site peut être trouvé et contacté.",
    impact: "faible",
    action: "",
    effort: "court",
  });

  const facts = await collectFacts(page);
  yield step("suite", "Technique", "Suite de la lecture", "pass", "Fichiers, domaine et pages liées ont été lus.", {
    dimension: "Technique",
    why: "Ces lectures alimentent les conclusions. Ce n'est pas encore tout le site.",
    impact: "aucun",
    action: "",
    effort: "court",
  });
  for (const item of buildFindings(facts)) yield item;
}

function certDays(host: string) {
  return new Promise<number | null>((resolve) => {
    const socket = tls.connect({ host, port: 443, servername: host, timeout: 8_000 }, () => {
      const cert = socket.getPeerCertificate();
      socket.end();
      if (!cert || !cert.valid_to) {
        resolve(null);
        return;
      }
      resolve(Math.round((new Date(cert.valid_to).getTime() - Date.now()) / 86_400_000));
    });
    socket.on("error", () => resolve(null));
    socket.on("timeout", () => {
      socket.destroy();
      resolve(null);
    });
  });
}

async function collectFacts(page: Awaited<ReturnType<typeof fetchPage>>): Promise<AuditFacts> {
  const origin = page.url.origin;
  const robotsTxt = await fetchText(new URL("/robots.txt", origin), 80_000).catch(() => ({ status: 0, text: "", url: page.url }));
  const sitemapRaw = await fetchText(new URL("/sitemap.xml", origin)).catch(() => ({ status: 0, text: "", url: page.url }));
  const locs = sitemapRaw.text.match(/<loc>/gi)?.length ?? 0;
  const otherHost = page.url.hostname.startsWith("www.") ? page.url.hostname.slice(4) : `www.${page.url.hostname}`;
  let host = { otherHost, status: 0, redirectsHome: false };
  try {
    const other = new URL(page.url.href);
    other.hostname = otherHost;
    const probe = await fetchStatus(other);
    const locationHost = probe.location ? new URL(probe.location, other).hostname : "";
    host = {
      otherHost,
      status: probe.status,
      redirectsHome: probe.status >= 300 && probe.status < 400 && sameSite(locationHost, page.url.hostname),
    };
  } catch {
    host = { otherHost, status: 0, redirectsHome: false };
  }
  let http: AuditFacts["http"] = null;
  if (page.url.protocol === "https:") {
    try {
      const httpUrl = new URL(page.url.href);
      httpUrl.protocol = "http:";
      const probe = await fetchStatus(httpUrl);
      http = { status: probe.status, secure: probe.status >= 300 && probe.status < 400 && probe.location.startsWith("https://") };
    } catch {
      http = { status: 0, secure: false };
    }
  }
  let missingStatus = 0;
  try {
    missingStatus = (await fetchStatus(new URL(`/byteforce-audit-absent-${Date.now().toString(36)}`, origin))).status;
  } catch {
    missingStatus = 0;
  }
  const llms = await fetchText(new URL("/llms.txt", origin), 80_000).catch(() => ({ status: 0, text: "", url: page.url }));
  const links = [];
  for (const link of internalTargets(page.html, page.url)) {
    try {
      const linked = await fetchPage(link);
      const linkedTitle = decode((linked.html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] ?? "");
      links.push({ path: link.pathname || "/", status: linked.status, title: linkedTitle, words: wordCount(linked.html) });
    } catch {
      links.push({ path: link.pathname || "/", status: 0, title: "", words: 0 });
    }
  }
  return {
    status: page.status,
    ms: page.ms,
    hops: page.hops,
    bytes: page.bytes,
    html: page.html,
    finalUrl: page.url,
    headers: {
      robots: page.robots,
      hsts: page.hsts,
      nosniff: page.nosniff,
      frame: page.frame,
      csp: page.csp,
      referrer: page.referrer,
      permissions: page.permissions,
      coop: page.coop,
      corp: page.corp,
      server: page.server,
      powered: page.powered,
    },
    cookies: page.cookies,
    certDays: page.url.protocol === "https:" ? await certDays(page.url.hostname) : null,
    robotsTxt: { status: robotsTxt.status, text: robotsTxt.text },
    sitemap: {
      status: sitemapRaw.status,
      locs,
      lastmods: sitemapRaw.text.match(/<lastmod>/gi)?.length ?? 0,
      index: /<sitemap[\s>]/i.test(sitemapRaw.text) && !/<url[\s>]/i.test(sitemapRaw.text),
    },
    host,
    http,
    missingStatus,
    llms: { status: llms.status, text: llms.text },
    links,
  };
}
