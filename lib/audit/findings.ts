import type { AuditDimension, AuditEffort, AuditImpact, AuditState, AuditStep } from "@/lib/site-audit";

export type AuditFacts = {
  status: number;
  ms: number;
  hops: number;
  bytes: number;
  html: string;
  finalUrl: URL;
  headers: {
    robots: string;
    hsts: string;
    nosniff: string;
    frame: string;
    csp: string;
    referrer: string;
    permissions: string;
    coop: string;
    corp: string;
    server: string;
    powered: string;
  };
  cookies: string[];
  certDays: number | null;
  robotsTxt: { status: number; text: string };
  sitemap: { status: number; locs: number; lastmods: number; index: boolean };
  host: { otherHost: string; status: number; redirectsHome: boolean };
  http: { status: number; secure: boolean } | null;
  missingStatus: number;
  llms: { status: number; text: string };
  links: { path: string; status: number; title: string; words: number }[];
};

function finding(
  id: string,
  dimension: AuditDimension,
  label: string,
  state: AuditState,
  detail: string,
  why: string,
  impact: AuditImpact,
  action: string,
  effort: AuditEffort,
): AuditStep {
  return { id, chapter: dimension, dimension, label, state, detail, why, impact, action, effort };
}

function decode(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/<[^>]+>/g, " ")
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

function words(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<(header|nav|footer)[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean).length;
}

function schemaTypes(html: string) {
  const types = new Set<string>();
  let invalid = false;
  const blob: string[] = [];
  for (const match of html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    blob.push(match[1]);
    try {
      const walk = (node: unknown) => {
        if (Array.isArray(node)) return node.forEach(walk);
        if (!node || typeof node !== "object") return;
        const record = node as Record<string, unknown>;
        if (record["@type"]) {
          const value = record["@type"];
          for (const item of Array.isArray(value) ? value : [value]) types.add(String(item));
        }
        Object.values(record).forEach(walk);
      };
      walk(JSON.parse(match[1]));
    } catch {
      invalid = true;
    }
  }
  return { types: [...types], invalid, raw: blob.join(" ").toLowerCase() };
}

function blockedBots(text: string) {
  const bots = ["GPTBot", "OAI-SearchBot", "ClaudeBot", "PerplexityBot", "Google-Extended", "Googlebot", "Bingbot"];
  const groups: { agents: string[]; disallow: string[] }[] = [];
  let agents: string[] = [];
  let disallow: string[] = [];
  const flush = () => {
    if (agents.length) groups.push({ agents, disallow });
    agents = [];
    disallow = [];
  };
  for (const line of text.split(/\r?\n/)) {
    const clean = line.replace(/#.*$/, "").trim();
    if (!clean) continue;
    const agent = clean.match(/^user-agent:\s*(.+)$/i);
    const rule = clean.match(/^disallow:\s*(.*)$/i);
    if (agent) {
      if (disallow.length) flush();
      agents.push(agent[1].trim().toLowerCase());
    } else if (rule) disallow.push(rule[1].trim());
  }
  flush();
  return bots.map((bot) => {
    const group = groups.find((item) => item.agents.includes(bot.toLowerCase()));
    const star = groups.find((item) => item.agents.includes("*"));
    const rules = group?.disallow ?? star?.disallow ?? [];
    return { bot, blocked: rules.some((rule) => rule === "/") };
  });
}

function hostsFrom(html: string, page: URL) {
  const hosts = new Set<string>();
  for (const match of html.matchAll(/\b(?:src|href)=["']([^"']+)["']/gi)) {
    try {
      const url = new URL(match[1], page);
      if (url.host && url.host !== page.host) hosts.add(url.host);
    } catch {
      continue;
    }
  }
  return [...hosts];
}

export function buildFindings(facts: AuditFacts): AuditStep[] {
  const html = facts.html;
  const title = decode((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] ?? "");
  const lang = (html.match(/<html[^>]*\slang=["']([^"']+)/i) || [])[1] ?? "";
  const meta: Record<string, string> = {};
  for (const match of html.matchAll(/<meta\s[^>]*>/gi)) {
    const tag = attrs(match[0]);
    const key = (tag.name || tag.property || "").toLowerCase();
    if (key) meta[key] = tag.content ?? "";
  }
  let canonical = "";
  let icon = false;
  let hreflang = 0;
  for (const match of html.matchAll(/<link\s[^>]*>/gi)) {
    const tag = attrs(match[0]);
    const rel = (tag.rel ?? "").toLowerCase();
    if (rel === "canonical") canonical = tag.href ?? "";
    if (rel.split(/\s+/).includes("icon")) icon = true;
    if (rel === "alternate" && tag.hreflang) hreflang += 1;
  }
  const h1 = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((match) => decode(match[1])).filter(Boolean);
  const levels = [...html.matchAll(/<h([1-6])\b/gi)].map((match) => Number(match[1]));
  const h2 = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map((match) => decode(match[1])).filter(Boolean).slice(0, 4);
  const images = [...html.matchAll(/<img\b[^>]*>/gi)];
  const missingAlt = images.filter((tag) => !/\balt\s*=/.test(tag[0])).length;
  const missingSize = images.filter((tag) => !/\bwidth\s*=/.test(tag[0]) || !/\bheight\s*=/.test(tag[0])).length;
  const description = meta.description ?? "";
  const robots = `${meta.robots ?? ""} ${facts.headers.robots}`.toLowerCase();
  const textWords = words(html);
  const insecure = [...html.matchAll(/href=["']http:\/\//gi)].length;
  const schema = schemaTypes(html);
  const thirdParties = hostsFrom(html, facts.finalUrl);
  const googleFonts = /fonts\.googleapis\.com/i.test(html);
  const viewport = meta.viewport ?? "";
  const zoomLocked = /user-scalable\s*=\s*no/i.test(viewport) || /maximum-scale\s*=\s*1(?:\.0)?\b/i.test(viewport);
  const inputs = [...html.matchAll(/<input\b[^>]*>/gi)].filter((tag) => !/type=["']hidden["']/i.test(tag[0]));
  const unlabeled = inputs.filter((tag) => !/\b(aria-label|aria-labelledby|id)=/.test(tag[0])).length;
  const emptyLinks = [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)].filter((tag) => !decode(tag[2]) && !/aria-label=/i.test(tag[1])).length;
  const hasMain = /<main\b/i.test(html);
  const ids = [...html.matchAll(/\sid=["']([^"']+)["']/gi)].map((match) => match[1]);
  const duplicateIds = ids.length - new Set(ids).size;
  const hasForm = /<form\b/i.test(html);
  const hasTel = /href=["']tel:/i.test(html) || /"telephone"\s*:/i.test(schema.raw);
  const hasMail = /href=["']mailto:/i.test(html);
  const hasWhatsapp = /wa\.me|api\.whatsapp/i.test(html);
  const hasContact = /href=["'][^"']*(contact|reservation|réservation|devis|booking)/i.test(html);
  const cta = [...html.matchAll(/<(?:a|button)\b[^>]*>([\s\S]*?)<\/(?:a|button)>/gi)]
    .map((match) => decode(match[1]))
    .filter((label) => /contact|devis|réserver|reserver|appeler|écrire|ecrire|acheter|commander/i.test(label)).length;
  const legal = [/mentions/i, /confidentialit|privacy/i, /cookie/i].filter((pattern) => pattern.test(html)).length;
  const trackers = ["googletagmanager.com", "google-analytics.com", "googletagmanager", "connect.facebook", "clarity.ms", "snap.licdn"].filter((host) =>
    html.includes(host),
  );
  const stack = [
    /wp-content|wordpress/i.test(html) ? "WordPress" : "",
    /__NEXT_DATA__|\/_next\//i.test(html) ? "Next.js" : "",
    facts.headers.server.toLowerCase().includes("cloudflare") || /cf-ray/i.test(html) ? "Cloudflare" : "",
    facts.headers.server.toLowerCase().includes("vercel") ? "Vercel" : "",
    /js\.stripe\.com/i.test(html) ? "Stripe" : "",
    googleFonts ? "Google Fonts" : "",
    facts.headers.powered ? facts.headers.powered : "",
    facts.headers.server && !/cloudflare|vercel/i.test(facts.headers.server) ? facts.headers.server : "",
  ].filter(Boolean);
  const schemaWanted = ["Organization", "LocalBusiness", "PostalAddress", "FAQPage"];
  const schemaHas = (name: string) => schema.types.some((type) => type.toLowerCase() === name.toLowerCase());
  const hasHours = /openinghours/i.test(schema.raw) || /lundi|monday/i.test(html);
  const hasAddress = schemaHas("PostalAddress") || /"streetaddress"/i.test(schema.raw);
  const hasPhoneSignal = hasTel || /"telephone"/i.test(schema.raw);
  const bots = blockedBots(facts.robotsTxt.text);
  const blocked = bots.filter((bot) => bot.blocked).map((bot) => bot.bot);
  const answers = [
    description || h1.length ? "ce que fait le site" : "",
    hasAddress ? "une adresse" : "",
    hasPhoneSignal || hasMail || hasForm ? "un moyen d'écrire" : "",
    hasHours ? "des horaires" : "",
  ].filter(Boolean);
  const headerNames = [
    facts.headers.hsts ? "HSTS" : "",
    /nosniff/i.test(facts.headers.nosniff) ? "nosniff" : "",
    facts.headers.frame ? "cadre" : "",
    facts.headers.csp ? "CSP" : "",
    facts.headers.referrer ? "referrer" : "",
    facts.headers.permissions ? "permissions" : "",
  ].filter(Boolean);
  const weakCookies = facts.cookies.filter((cookie) => !/;\s*secure/i.test(cookie) || !/;\s*httponly/i.test(cookie));

  const speed: AuditState = facts.ms < 800 ? "pass" : facts.ms < 1800 ? "warn" : "fail";
  const weight: AuditState = facts.bytes < 200_000 ? "pass" : facts.bytes < 800_000 ? "warn" : "fail";
  const parties: AuditState = thirdParties.length <= 2 ? "pass" : thirdParties.length <= 6 ? "warn" : "fail";

  const out: AuditStep[] = [
    finding(
      "https",
      "Technique",
      "HTTPS",
      facts.finalUrl.protocol === "https:" ? (insecure ? "warn" : "pass") : "fail",
      facts.finalUrl.protocol === "https:"
        ? insecure
          ? `${insecure} lien${insecure > 1 ? "s" : ""} utilise${insecure > 1 ? "nt" : ""} encore http://.`
          : "La page est servie en https, sans lien http dans le HTML."
        : "La page finale est encore en http.",
      insecure
        ? "Les visiteurs arrivent en général sur le https, mais un lien http ajoute une redirection et laisse une configuration inachevée."
        : "Le cadenas est le minimum pour qu'un visiteur saisisse un formulaire sans avertissement du navigateur.",
      facts.finalUrl.protocol === "https:" ? "faible" : "élevé",
      insecure ? "Remplacer chaque lien http par son adresse https." : "Servir le site uniquement en https.",
      "court",
    ),
    finding(
      "redirects",
      "Technique",
      "Redirections",
      facts.hops > 2 ? "warn" : "pass",
      facts.hops ? `${facts.hops} redirection${facts.hops > 1 ? "s" : ""} avant la page.` : "La page répond sans redirection.",
      "Chaque redirection retarde la première lecture. Une chaîne longue se trompe aussi de domaine canonique.",
      facts.hops > 2 ? "moyen" : "faible",
      "Garder une seule redirection, vers l'adresse canonique.",
      "court",
    ),
    finding(
      "headers",
      "Technique",
      "En-têtes",
      headerNames.length >= 3 ? "pass" : "warn",
      headerNames.length ? `Présents : ${headerNames.join(", ")}.` : "HSTS, nosniff, cadre, CSP, referrer et permissions sont absents.",
      "Ces en-têtes limitent quelques abus du navigateur. Leur absence n'empêche pas une vente, mais elle laisse le site plus facile à intégrer ailleurs.",
      "faible",
      headerNames.includes("HSTS") ? "Compléter les en-têtes manquants sur l'hébergement." : "Ajouter au moins HSTS et nosniff sur la réponse.",
      "court",
    ),
    finding(
      "cookies",
      "Technique",
      "Cookies",
      facts.cookies.length === 0 ? "pass" : weakCookies.length ? "warn" : "pass",
      facts.cookies.length === 0 ? "La page ne pose pas de cookie." : weakCookies.length ? `${weakCookies.length} cookie${weakCookies.length > 1 ? "s" : ""} sans Secure ou HttpOnly.` : `${facts.cookies.length} cookie${facts.cookies.length > 1 ? "s" : ""}, avec Secure et HttpOnly.`,
      "Un cookie de session sans ces drapeaux peut partir sur une page non chiffrée ou être lu par un script.",
      weakCookies.length ? "moyen" : "faible",
      "Poser Secure, HttpOnly et SameSite sur les cookies de session.",
      "court",
    ),
    finding(
      "certificate",
      "Technique",
      "Certificat",
      facts.certDays === null ? "warn" : facts.certDays < 14 ? "fail" : facts.certDays < 30 ? "warn" : "pass",
      facts.certDays === null ? "La date d'expiration n'a pas pu être lue." : `Le certificat expire dans ${facts.certDays} jours.`,
      "Un certificat expiré affiche un avertissement avant même la page. Le visiteur repart.",
      facts.certDays !== null && facts.certDays < 14 ? "élevé" : "faible",
      "Renouveler le certificat avant l'échéance, idéalement tout seul.",
      "court",
    ),
    finding(
      "host",
      "Technique",
      "www",
      facts.host.redirectsHome ? "pass" : facts.host.status === 200 ? "warn" : "warn",
      facts.host.redirectsHome
        ? `${facts.host.otherHost} renvoie vers le site.`
        : facts.host.status === 200
          ? `${facts.host.otherHost} répond aussi, sans redirection.`
          : `${facts.host.otherHost} répond ${facts.host.status || "sans code"}.`,
      "Deux adresses qui répondent sans se choisir divisent les liens et peuvent créer un doublon.",
      facts.host.status === 200 && !facts.host.redirectsHome ? "moyen" : "faible",
      "Rediriger une seule variante, www ou sans www, vers l'autre.",
      "court",
    ),
    finding(
      "http",
      "Technique",
      "HTTP",
      facts.http === null ? "pass" : facts.http.secure ? "pass" : facts.http.status === 200 ? "fail" : "warn",
      facts.http === null ? "La page demandée est déjà en http." : facts.http.secure ? "Le http renvoie vers le https." : facts.http.status === 200 ? "La page reste disponible en http." : `Le http répond ${facts.http.status || "sans code"}.`,
      "Si le http sert encore la page, un visiteur ou un lien ancien peut rester hors du cadenas.",
      facts.http?.status === 200 ? "élevé" : "faible",
      "Rediriger tout le http vers le https.",
      "court",
    ),
    finding(
      "missing",
      "Technique",
      "Page absente",
      facts.missingStatus === 404 ? "pass" : "warn",
      facts.missingStatus === 404 ? "Une adresse inconnue répond 404." : `Une adresse inconnue répond ${facts.missingStatus || "sans code"}.`,
      "Une fausse page d'accueil à la place d'un 404 envoie Google et le visiteur au mauvais endroit.",
      facts.missingStatus === 200 ? "moyen" : "faible",
      "Répondre 404, avec une page utile, quand l'adresse n'existe pas.",
      "court",
    ),
    finding(
      "speed",
      "Performance",
      "Réponse",
      speed,
      `La page a répondu en ${facts.ms} ms depuis ce passage.`,
      "Ce temps est celui du serveur qui lit la page, pas un LCP de laboratoire. Au-delà de deux secondes, le visiteur attend avant le contenu.",
      speed === "fail" ? "élevé" : speed === "warn" ? "moyen" : "faible",
      "Rapprocher l'hébergement du public, et éviter les redirections inutiles.",
      "long",
    ),
    finding(
      "weight",
      "Performance",
      "Poids du HTML",
      weight,
      `${Math.round(facts.bytes / 1024)} Ko de HTML.`,
      "Un HTML lourd retarde l'affichage, surtout sur mobile. Les images et scripts en plus ne sont pas dans ce chiffre.",
      weight === "fail" ? "élevé" : "moyen",
      "Retirer du HTML ce qui ne sert pas la première lecture.",
      "moyen",
    ),
    finding(
      "third",
      "Performance",
      "Services tiers",
      parties,
      thirdParties.length ? `${thirdParties.length} domaine${thirdParties.length > 1 ? "s" : ""} extérieur${thirdParties.length > 1 ? "s" : ""} : ${thirdParties.slice(0, 4).join(", ")}.` : "Aucun domaine extérieur dans les adresses de la page.",
      "Chaque service tiers ajoute une attente, un script, et parfois un cookie. Ce passage ne mesure pas leur poids réel.",
      parties === "fail" ? "élevé" : parties === "warn" ? "moyen" : "faible",
      "Garder les scripts qui servent une mesure ou une vente, et retirer le reste.",
      "moyen",
    ),
    finding(
      "fonts",
      "Performance",
      "Polices",
      googleFonts ? "warn" : "pass",
      googleFonts ? "Une feuille Google Fonts est appelée dans la page." : "Pas d'appel visible à Google Fonts.",
      "Une police distante peut bloquer le texte. Une police locale s'affiche avec la page.",
      googleFonts ? "moyen" : "aucun",
      "Héberger la police utilisée, avec un affichage de repli.",
      "moyen",
    ),
    finding(
      "images",
      "Performance",
      "Images",
      images.length === 0 ? "pass" : missingSize === 0 ? "pass" : missingSize * 2 >= images.length ? "warn" : "warn",
      images.length === 0 ? "Aucune image dans le HTML." : missingSize ? `${missingSize} image${missingSize > 1 ? "s" : ""} sur ${images.length} sans largeur ni hauteur.` : `${images.length} images avec des dimensions.`,
      "Sans dimensions, la page saute quand l'image arrive. Ce n'est pas une mesure CLS.",
      missingSize ? "moyen" : "faible",
      "Donner une largeur et une hauteur, et servir une taille proche de l'affichage.",
      "moyen",
    ),
    finding(
      "title",
      "SEO",
      "Titre",
      !title ? "fail" : title.length < 15 || title.length > 70 ? "warn" : "pass",
      title ? `${title.length} caractères. ${title}` : "La page n'a pas de titre.",
      title.length < 15 ? "Un titre trop court ne dit pas l'offre dans les résultats." : title.length > 70 ? "Un titre trop long est coupé dans les résultats." : "Le titre est la ligne que Google et le visiteur lisent en premier.",
      !title ? "élevé" : "moyen",
      "Écrire un titre qui nomme l'offre et le lieu, entre 15 et 70 caractères.",
      "court",
    ),
    finding(
      "description",
      "SEO",
      "Description",
      !description ? "fail" : description.length < 50 || description.length > 170 ? "warn" : "pass",
      description ? `${description.length} caractères.` : "Aucune meta description.",
      "Sans description, le résultat de recherche fabrique un extrait. Avec une description claire, la ligne dit quoi faire.",
      !description ? "moyen" : "faible",
      "Écrire une description de 50 à 170 caractères, avec l'offre et le moyen de contact.",
      "court",
    ),
    finding(
      "h1",
      "SEO",
      "Titre visible",
      h1.length === 1 ? "pass" : h1.length === 0 ? "fail" : "warn",
      h1.length === 1 ? h1[0] : h1.length === 0 ? "Aucun H1." : `${h1.length} titres H1.`,
      "Le H1 dit de quoi parle la page. Zéro ou plusieurs titres brouillent cette phrase.",
      h1.length === 0 ? "élevé" : "moyen",
      "Garder un seul H1, celui de l'offre.",
      "court",
    ),
    finding(
      "headings",
      "SEO",
      "Sujets couverts",
      levels.length === 0 ? "fail" : levels[0] !== 1 || levels.some((level, index) => index > 0 && level > levels[index - 1] + 1) ? "warn" : "pass",
      h2.length ? h2.join(" · ") : levels.length ? `${levels.length} titres dans la page.` : "Aucun titre H1–H6.",
      "Les H2 sont les sujets qu'un moteur peut citer. S'ils sautent un niveau, la structure est plus dure à suivre.",
      "moyen",
      "Ordonner les titres, et nommer dans les H2 les questions du client.",
      "moyen",
    ),
    finding(
      "index",
      "SEO",
      "Indexation",
      /noindex/.test(robots) ? "fail" : canonical ? "pass" : "warn",
      /noindex/.test(robots) ? "La page demande à ne pas être indexée." : canonical ? canonical : "Pas de lien canonique.",
      "Noindex retire la page des résultats. Sans canonique, plusieurs adresses peuvent se concurrencer.",
      /noindex/.test(robots) ? "élevé" : "moyen",
      "Autoriser l'indexation de la page utile, et pointer une adresse canonique.",
      "court",
    ),
    finding(
      "robots",
      "SEO",
      "robots.txt",
      facts.robotsTxt.status !== 200 ? "fail" : /disallow:\s*\/\s*$/im.test(facts.robotsTxt.text) ? "warn" : /user-agent:/i.test(facts.robotsTxt.text) ? "pass" : "warn",
      facts.robotsTxt.status !== 200 ? `Réponse ${facts.robotsTxt.status || "vide"}.` : /disallow:\s*\/\s*$/im.test(facts.robotsTxt.text) ? "Le fichier bloque la racine." : "Des règles sont présentes.",
      "Ce fichier dit ce qu'un robot peut lire. Il ne fait pas le référencement. Bloquer la racine retire le site.",
      /disallow:\s*\/\s*$/im.test(facts.robotsTxt.text) ? "élevé" : "faible",
      "Laisser la racine lisible, et indiquer le sitemap.",
      "court",
    ),
    finding(
      "sitemap",
      "SEO",
      "Sitemap",
      facts.sitemap.status !== 200 ? "warn" : facts.sitemap.locs ? "pass" : "fail",
      facts.sitemap.status !== 200
        ? `Pas de sitemap à la racine (${facts.sitemap.status || "sans réponse"}).`
        : facts.sitemap.index
          ? `Index de ${facts.sitemap.locs} sitemap${facts.sitemap.locs > 1 ? "s" : ""}.`
          : facts.sitemap.locs
            ? `${facts.sitemap.locs} adresse${facts.sitemap.locs > 1 ? "s" : ""}${facts.sitemap.lastmods ? `, ${facts.sitemap.lastmods} datée${facts.sitemap.lastmods > 1 ? "s" : ""}` : ""}.`
            : "Le fichier répond, sans adresse.",
      "Le sitemap aide à découvrir les pages. Il ne garantit pas l'indexation.",
      facts.sitemap.locs ? "faible" : "moyen",
      "Publier les pages utiles, avec une date, et l'indiquer dans robots.txt.",
      "court",
    ),
    finding(
      "language",
      "SEO",
      "Langue",
      lang ? "pass" : "warn",
      lang ? `lang="${lang}".${hreflang ? ` ${hreflang} alternative${hreflang > 1 ? "s" : ""} de langue.` : ""}` : "La langue de la page n'est pas déclarée.",
      "La langue évite de présenter la page au mauvais public. Les alternatives ne servent que s'il existe vraiment une autre langue.",
      lang ? "faible" : "moyen",
      "Déclarer la langue réelle sur la balise html.",
      "court",
    ),
    finding(
      "text",
      "SEO",
      "Texte",
      textWords >= 250 ? "pass" : textWords >= 120 ? "warn" : "fail",
      `${textWords} mots hors menus.${h2.length ? ` Sujets vus : ${h2.join(", ")}.` : ""}`,
      textWords < 120 ? "Peu de texte laisse la page difficile à comprendre, pour un visiteur comme pour un moteur." : "Le volume compte moins que les sujets. Ici on lit les titres réellement présents.",
      textWords < 120 ? "élevé" : "moyen",
      "Couvrir les questions utiles au devis, sans remplir pour atteindre un nombre.",
      "moyen",
    ),
    finding(
      "social",
      "SEO",
      "Partage",
      meta["og:title"] && meta["og:description"] && meta["og:image"] ? "pass" : meta["og:title"] || meta["og:image"] ? "warn" : "fail",
      meta["og:image"] ? "Une image de partage est déclarée." : "Pas d'image Open Graph.",
      "Sans image ni titre de partage, un lien collé dans un message reste un extrait pauvre.",
      "faible",
      "Déclarer un titre, une description et une image de 1200×630.",
      "court",
    ),
    finding(
      "schema",
      "SEO",
      "Données structurées",
      schema.invalid ? "warn" : schema.types.length ? "pass" : "warn",
      schema.invalid ? "Un JSON-LD est présent, mais illisible." : schema.types.length ? schema.types.slice(0, 6).join(", ") + "." : "Pas de JSON-LD.",
      "Ces données disent à une machine le nom, le lieu ou le type de page. Elles ne créent pas un résultat enrichi à elles seules.",
      schema.types.length ? "faible" : "moyen",
      "Décrire l'organisation, l'adresse et le téléphone dans un JSON-LD valide.",
      "moyen",
    ),
    finding(
      "links",
      "SEO",
      "Pages liées",
      facts.links.length === 0 ? "warn" : facts.links.every((link) => link.status >= 200 && link.status < 300) ? "pass" : "warn",
      facts.links.length === 0 ? "Aucun lien interne sur l'accueil." : facts.links.map((link) => `${link.path} · ${link.status} · ${link.words} mots`).join(" — "),
      "Ce passage lit jusqu'à trois pages liées, pas tout le site. Une page liée qui ne répond pas casse un chemin depuis l'accueil.",
      "moyen",
      "Relier l'accueil aux pages qui font demander un devis, et retirer les liens morts.",
      "moyen",
    ),
    finding(
      "alt",
      "Accessibilité",
      "Textes des images",
      images.length === 0 || missingAlt === 0 ? "pass" : missingAlt * 2 >= images.length ? "fail" : "warn",
      images.length === 0 ? "Aucune image." : missingAlt === 0 ? `${images.length} images avec un attribut alt.` : `${missingAlt} image${missingAlt > 1 ? "s" : ""} sans attribut alt.`,
      "Sans alt, une image informative disparaît pour qui n'a pas l'image. Un alt vide reste correct si l'image est décorative. Ici on signale l'attribut absent.",
      missingAlt ? "moyen" : "faible",
      "Écrire un alt quand l'image informe, et le laisser vide quand elle décore.",
      "court",
    ),
    finding(
      "mobile",
      "Accessibilité",
      "Mobile",
      /width\s*=\s*device-width/i.test(viewport) ? (zoomLocked ? "warn" : "pass") : "fail",
      viewport ? viewport : "Pas de balise viewport.",
      zoomLocked ? "Interdire le zoom gêne la lecture. Ce passage ne prend pas de capture mobile." : "La balise viewport permet à la page de suivre la largeur du téléphone. Elle ne prouve pas que la mise en page tient.",
      /width\s*=\s*device-width/i.test(viewport) ? "faible" : "élevé",
      "Garder width=device-width, et laisser le zoom possible.",
      "court",
    ),
    finding(
      "labels",
      "Accessibilité",
      "Formulaires",
      inputs.length === 0 ? "pass" : unlabeled ? "warn" : "pass",
      inputs.length === 0 ? "Pas de champ dans cette page." : unlabeled ? `${unlabeled} champ${unlabeled > 1 ? "s" : ""} sans id ni aria-label.` : `${inputs.length} champ${inputs.length > 1 ? "s" : ""} identifié${inputs.length > 1 ? "s" : ""}.`,
      "Un champ sans nom accessible se remplit mal, et l'erreur ne se comprend pas.",
      unlabeled ? "moyen" : "faible",
      "Associer chaque champ à un libellé.",
      "court",
    ),
    finding(
      "names",
      "Accessibilité",
      "Liens et boutons",
      emptyLinks ? "warn" : "pass",
      emptyLinks ? `${emptyLinks} lien${emptyLinks > 1 ? "s" : ""} sans texte ni nom.` : "Les liens lus ont un texte.",
      "Un lien qui ne contient qu'une icône ne dit pas où il mène.",
      emptyLinks ? "moyen" : "faible",
      "Donner un texte visible, ou un nom accessible, à chaque lien.",
      "court",
    ),
    finding(
      "landmarks",
      "Accessibilité",
      "Repères",
      !hasMain || !lang || duplicateIds > 0 ? "warn" : "pass",
      `${hasMain ? "Un main est présent" : "Pas de balise main"}. ${duplicateIds ? `${duplicateIds} id en double.` : "Pas d'id en double détecté."}`,
      "Le repère main et des id uniques aident à parcourir la page. Ce n'est pas un audit WCAG complet.",
      "faible",
      "Entourer le contenu d'un main, et ne pas réutiliser le même id.",
      "court",
    ),
    finding(
      "entity",
      "GEO",
      "Identité lisible",
      [Boolean(title), Boolean(description || h1.length), hasPhoneSignal || hasMail || hasForm, hasAddress].filter(Boolean).length >= 3 ? "pass" : "warn",
      answers.length ? `La page permet de citer : ${answers.join(", ")}.` : "Ni l'offre, ni le lieu, ni le contact ne sont explicites.",
      "Un moteur de réponse ne recommande bien que ce qu'il peut reformuler : qui, quoi, où, comment écrire. Autoriser un robot ne suffit pas.",
      "élevé",
      "Écrire en clair le nom, l'offre, le lieu et un moyen de contact, dans la page et dans les données.",
      "moyen",
    ),
    finding(
      "business",
      "GEO",
      "Fiche machine",
      schemaWanted.filter(schemaHas).length >= 2 || (hasAddress && hasPhoneSignal) ? "pass" : "warn",
      `Dans le JSON-LD : ${schemaWanted.filter(schemaHas).join(", ") || "aucun des types Organization, LocalBusiness, PostalAddress, FAQPage"}.`,
      "Ces types aident une machine à séparer le nom, l'adresse et le téléphone. Leur absence ne bloque pas Google, elle rend l'entreprise plus difficile à citer.",
      "élevé",
      "Ajouter Organization ou LocalBusiness, avec adresse, téléphone et sameAs s'ils existent.",
      "moyen",
    ),
    finding(
      "llms",
      "GEO",
      "llms.txt",
      facts.llms.status === 200 && facts.llms.text.length > 80 ? "pass" : "warn",
      facts.llms.status === 200 ? `Le fichier répond, ${facts.llms.text.trim().split(/\s+/).filter(Boolean).length} mots.` : "Pas de /llms.txt.",
      "Ce fichier est une aide de lecture pour certains outils. Ce n'est pas une exigence de Google, ni une preuve que ChatGPT recommandera l'entreprise.",
      "faible",
      "Publier un llms.txt court : qui vous êtes, où, et les pages utiles.",
      "court",
    ),
    finding(
      "bots",
      "GEO",
      "Robots d'IA",
      facts.robotsTxt.status !== 200 ? "warn" : blocked.length ? "warn" : "pass",
      facts.robotsTxt.status !== 200 ? "robots.txt absent, donc pas de règle lisible." : blocked.length ? `Bloqués sur la racine : ${blocked.join(", ")}.` : "GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Googlebot et Bingbot ne sont pas bloqués sur la racine.",
      "Ne pas bloquer un robot le laisse lire. Cela ne veut pas dire qu'il citera l'entreprise.",
      blocked.length ? "moyen" : "faible",
      "Ne bloquer un robot d'IA que si c'est un choix explicite.",
      "court",
    ),
    finding(
      "answers",
      "GEO",
      "Réponses directes",
      answers.length >= 3 ? "pass" : answers.length ? "warn" : "fail",
      answers.length ? `Réponses trouvées : ${answers.join(", ")}.` : "La page ne répond clairement ni à l'offre, ni au lieu, ni au contact, ni aux horaires.",
      "Les questions utiles sont celles qu'un client pose : que faites-vous, où, comment vous écrire, quels horaires. On ne devine pas le métier au-delà du texte.",
      answers.length >= 3 ? "moyen" : "élevé",
      "Répondre à ces quatre questions dans des phrases autonomes.",
      "moyen",
    ),
    finding(
      "contact",
      "Conversion",
      "Contact",
      hasForm || hasTel || hasMail || hasWhatsapp || hasContact ? "pass" : "fail",
      [hasForm ? "formulaire" : "", hasTel ? "téléphone" : "", hasMail ? "email" : "", hasWhatsapp ? "WhatsApp" : "", hasContact ? "page de contact" : ""].filter(Boolean).join(", ") || "Aucun moyen de contact repéré.",
      "Sans moyen d'écrire visible dans le HTML, la visite ne devient pas une demande. On ne voit pas si le bouton est au-dessus de la ligne de flottaison.",
      hasForm || hasTel || hasMail ? "faible" : "élevé",
      "Mettre un formulaire, un téléphone ou un email dans la page, avec un libellé explicite.",
      "court",
    ),
    finding(
      "cta",
      "Conversion",
      "Appels à l'action",
      cta ? "pass" : "warn",
      cta ? `${cta} lien${cta > 1 ? "s" : ""} ou bouton${cta > 1 ? "s" : ""} avec un verbe de contact.` : "Pas de verbe de contact repéré sur les liens et boutons.",
      "Un visiteur agit s'il voit quoi faire : écrire, appeler, réserver. Un menu sans verbe laisse la page informative.",
      cta ? "faible" : "élevé",
      "Nommer l'action : parler d'un projet, réserver, demander un devis.",
      "court",
    ),
    finding(
      "trust",
      "Conversion",
      "Preuves",
      schemaHas("Review") || schemaHas("AggregateRating") ? "pass" : "warn",
      schemaHas("Review") || schemaHas("AggregateRating") ? "Un avis est déclaré dans les données." : "Pas d'avis structuré. Ce passage ne fabrique pas de témoignage.",
      "Une preuve aide à choisir. Un faux avis serait pire qu'une absence. On signale seulement ce qui est réellement marqué.",
      "moyen",
      "Montrer un fait vérifiable : une réalisation, une adresse, un nom. Pas un avis inventé.",
      "moyen",
    ),
    finding(
      "legal",
      "Conversion",
      "Pages légales",
      legal >= 2 ? "pass" : legal === 1 ? "warn" : "warn",
      legal ? `${legal} lien${legal > 1 ? "s" : ""} vers des mentions, une confidentialité ou des cookies.` : "Pas de lien repéré vers les mentions, la confidentialité ou les cookies.",
      "La présence d'un lien n'est pas une conformité. Elle dit seulement que la page existe dans le HTML.",
      "faible",
      "Lier les mentions et la confidentialité depuis le pied de page.",
      "court",
    ),
    finding(
      "measure",
      "Conversion",
      "Mesure",
      trackers.length ? "pass" : "warn",
      trackers.length ? `Script repéré : ${trackers.join(", ")}. Aucun événement de conversion n'est lisible dans ce HTML.` : "Pas de script de mesure repéré.",
      "Un script de visite ne dit pas si le formulaire est compté. Sans événement, on ne sait pas quelles pages amènent une demande.",
      "moyen",
      "Compter l'envoi du formulaire ou le clic d'appel, pas seulement la visite.",
      "moyen",
    ),
    finding(
      "stack",
      "Technique",
      "Pile",
      "pass",
      stack.length ? stack.join(" · ") : "Pile non reconnue dans le HTML et les en-têtes.",
      "Savoir sur quoi le site est construit dit qui peut le reprendre. Ce n'est pas un défaut.",
      "aucun",
      "Garder cette lecture pour le devis, pas comme une correction.",
      "court",
    ),
    finding(
      "icon",
      "Technique",
      "Icône",
      icon ? "pass" : "warn",
      icon ? "Une icône est déclarée." : "Pas de favicon dans la page.",
      "L'icône sert l'onglet et les favoris. Son absence ne coûte pas de clients.",
      "faible",
      "Déclarer une icône.",
      "court",
    ),
  ];

  return out.filter((item) => item.impact !== "aucun" || item.id === "stack");
}
