import fs from "node:fs";
import path from "node:path";

export type GeoLevel = "City" | "Country";

export type GeoIntent =
  | "demande"
  | "agence"
  | "creation"
  | "developpement"
  | "entreprise"
  | "prix"
  | "sur-mesure";

export type GeoKeyword = {
  keyword: string;
  service: string;
  country: string;
  city: string;
  level: GeoLevel;
  intentLabel: string;
  slug: string;
  path: string;
  intent: GeoIntent;
  serviceSlug: string;
  countryCode: string;
  placeSlug: string;
};

const INTENTS: GeoIntent[] = [
  "demande",
  "agence",
  "creation",
  "developpement",
  "entreprise",
  "prix",
  "sur-mesure",
];

export function intentOf(keyword: string): GeoIntent {
  if (keyword.startsWith("Agence de ")) return "agence";
  if (keyword.startsWith("Création de ")) return "creation";
  if (keyword.startsWith("Développement de ")) return "developpement";
  if (keyword.startsWith("Entreprise de ")) return "entreprise";
  if (keyword.startsWith("Prix ")) return "prix";
  if (keyword.includes(" sur mesure sur mesure ")) return "sur-mesure";
  if (keyword.includes(" sur mesure ") && !keyword.startsWith("Développement logiciel sur mesure ")) return "sur-mesure";
  return "demande";
}

function parseCsv(csv: string) {
  const rows: string[][] = [];
  let i = 0;
  let field = "";
  let row: string[] = [];
  let quoted = false;
  while (i < csv.length) {
    const char = csv[i];
    if (quoted) {
      if (char === '"') {
        if (csv[i + 1] === '"') {
          field += '"';
          i += 2;
          continue;
        }
        quoted = false;
        i += 1;
        continue;
      }
      field += char;
      i += 1;
      continue;
    }
    if (char === '"') {
      quoted = true;
      i += 1;
      continue;
    }
    if (char === ",") {
      row.push(field);
      field = "";
      i += 1;
      continue;
    }
    if (char === "\n" || char === "\r") {
      if (char === "\r" && csv[i + 1] === "\n") i += 1;
      row.push(field);
      if (row.some((value) => value !== "")) rows.push(row);
      row = [];
      field = "";
      i += 1;
      continue;
    }
    field += char;
    i += 1;
  }
  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

let cached: GeoKeyword[] | null = null;

export function geoKeywords(): GeoKeyword[] {
  if (cached) return cached;
  const file = path.join(process.cwd(), "byteforce-geo-keywords.csv");
  const text = fs.readFileSync(file, "utf8").replace(/^\uFEFF/, "");
  const [header, ...data] = parseCsv(text);
  if (!header || header.join(",") !== "keyword,service,country,city,level,intent,url_slug_idea") {
    throw new Error("byteforce-geo-keywords.csv: en-tête inattendu");
  }
  cached = data.map((cells, index) => {
    if (cells.length !== 7) throw new Error(`Ligne ${index + 2}: ${cells.length} colonnes`);
    const [keyword, service, country, city, level, intentLabel, slug] = cells;
    if (level !== "City" && level !== "Country") throw new Error(`Niveau inconnu: ${level}`);
    const intent = intentOf(keyword);
    if (!INTENTS.includes(intent)) throw new Error(`Intention inconnue: ${keyword}`);
    const parts = slug.replace(/^\//, "").split("/");
    if (parts[0] !== "geo-location" || parts.length < 3) throw new Error(`Slug invalide: ${slug}`);
    if (level === "City" && parts.length !== 5) throw new Error(`Slug ville invalide: ${slug}`);
    if (level === "Country" && parts.length !== 4) throw new Error(`Slug pays invalide: ${slug}`);
    const serviceSlug = parts[1];
    const countryCode = parts[2];
    const placeSlug = level === "City" ? parts[3] : countryCode;
    if (!serviceSlug || !countryCode || !placeSlug) throw new Error(`Slug incomplet: ${slug}`);
    if (parts.at(-1) !== intent) {
      throw new Error(`Le slug ne finit pas par ${intent}: ${slug}`);
    }
    return {
      keyword,
      service,
      country,
      city,
      level,
      intentLabel,
      slug,
      path: slug.replace(/^\//, ""),
      intent,
      serviceSlug,
      countryCode,
      placeSlug,
    };
  });
  const paths = new Set<string>();
  for (const row of cached) {
    if (paths.has(row.path)) throw new Error(`Slug en double: ${row.path}`);
    paths.add(row.path);
  }
  return cached;
}

