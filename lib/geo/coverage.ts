/**
 * The only file to edit for which geo pages exist.
 * Morocco keeps every city. France and Canada stay on a short allowlist.
 * `range` is the public price band. Leave it null until the figure is real.
 * `caseStudies` is where a real fiche or testimonial is attached to a city.
 */

export const GEO_LASTMOD = "2026-11-10";

export const GEO_MODIFIERS = ["prix", "agence", "entreprise", "demande", "creation", "sur-mesure", "developpement"] as const;

export type GeoCountryCode = "ma" | "fr" | "ca";

export type GeoCityConfig = { slug: string; name: string };

export type GeoCountryConfig = {
  code: GeoCountryCode;
  name: "Maroc" | "France" | "Canada";
  currency: "MAD" | "EUR" | "CAD";
  currencyLabel: string;
  /** Public band, for example "18 000 à 45 000 MAD". null means it is not published. */
  range: string | null;
  hours: string;
  cities: GeoCityConfig[];
};

export const geoCoverage: { countries: GeoCountryConfig[] } = {
  countries: [
    {
      code: "ma",
      name: "Maroc",
      currency: "MAD",
      currencyLabel: "dirhams",
      range: null,
      hours: "Même heure que le bureau, 9 h–19 h à Casablanca.",
      cities: [
        { slug: "casablanca", name: "Casablanca" },
        { slug: "rabat", name: "Rabat" },
        { slug: "marrakech", name: "Marrakech" },
        { slug: "tanger", name: "Tanger" },
        { slug: "fes", name: "Fès" },
        { slug: "agadir", name: "Agadir" },
      ],
    },
    {
      code: "fr",
      name: "France",
      currency: "EUR",
      currencyLabel: "euros",
      range: null,
      hours: "Une heure de décalage une partie de l'année, aucune le reste. Les points tiennent dans la journée française.",
      cities: [
        { slug: "paris", name: "Paris" },
        { slug: "lyon", name: "Lyon" },
      ],
    },
    {
      code: "ca",
      name: "Canada",
      currency: "CAD",
      currencyLabel: "dollars canadiens",
      range: null,
      hours: "Plusieurs heures de décalage : matin sur place, après-midi à Casablanca, dans les heures du studio.",
      cities: [
        { slug: "montreal", name: "Montréal" },
        { slug: "toronto", name: "Toronto" },
      ],
    },
  ],
};

/** Real fiches only. Empty until a project is actually in that city for that offer. */
export const geoCaseStudies: { service: string; city: string; href: string; title: string; note: string }[] = [];

/** Content-service slug -> geo service slug, for links from /services/[slug]. */
export const contentSlugToGeo: Record<string, string> = {
  "applications-mobiles": "applications-mobiles",
  "logiciel-sur-mesure": "developpement-logiciel-sur-mesure",
  "creation-site-web": "sites-web-et-applications-web",
  "design-graphique": "design-ui-ux",
  hebergement: "hebergement-cloud",
  maintenance: "maintenance-de-site-web",
  "audit-correction": "audit-technique",
  "plugins-wordpress": "developpement-wordpress",
  "api-backend": "integration-api",
  "referencement-seo": "seo",
};

const modifierSet = new Set<string>(GEO_MODIFIERS);

export function isGeoModifier(slug: string) {
  return modifierSet.has(slug);
}

export function countryByCode(code: string) {
  return geoCoverage.countries.find((country) => country.code === code) ?? null;
}

export function isAllowedCity(countryCode: string, citySlug: string) {
  const country = countryByCode(countryCode);
  return Boolean(country?.cities.some((city) => city.slug === citySlug));
}
