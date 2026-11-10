import { countryByCode, geoCaseStudies, geoCoverage, type GeoCountryConfig } from "./coverage";
import { geoPlaces } from "./places";
import { geoServices, type GeoProof, type GeoService } from "./services";

export type GeoBlock = { h: string; p?: string[]; items?: string[] };
export type GeoLink = { href: string; label: string };

export type GeoPage = {
  path: string;
  keyword: string;
  title: string;
  description: string;
  h1: string;
  cta: string;
  lede: string;
  blocks: GeoBlock[];
  faqs: { q: string; a: string }[];
  proof: GeoProof[];
  links: GeoLink[];
  related: GeoLink[];
  cities: GeoLink[];
  crumbs: GeoLink[];
  areaName: string;
  areaCountry: string;
  level: "City" | "Country";
  words: number;
};

type Target = {
  service: GeoService;
  country: GeoCountryConfig;
  city: { slug: string; name: string } | null;
};

function placeKey(country: GeoCountryConfig, cityName: string) {
  return `${country.name}|${cityName}`;
}

function targets(): Target[] {
  const list: Target[] = [];
  for (const service of Object.values(geoServices)) {
    for (const country of geoCoverage.countries) {
      list.push({ service, country, city: null });
      for (const city of country.cities) list.push({ service, country, city });
    }
  }
  return list;
}

function pathFor(target: Target) {
  const base = `geo-location/${target.service.slug}/${target.country.code}`;
  return target.city ? `${base}/${target.city.slug}` : base;
}

function placeFor(target: Target) {
  const name = target.city?.name ?? target.country.name;
  const place = geoPlaces[placeKey(target.country, name)];
  if (!place) throw new Error(`Lieu sans texte: ${target.country.name}|${name}`);
  return place;
}

function localProof(target: Target, placeLabel: string): GeoProof[] {
  const extra = geoCaseStudies.filter((item) => item.service === target.service.slug && item.city === (target.city?.slug ?? target.country.code));
  const fromCatalogue = target.service.proof.filter((item) => item.note.toLowerCase().includes(placeLabel.toLowerCase()));
  return [...fromCatalogue, ...extra.map(({ href, title, note }) => ({ href, title, note }))];
}

function build(target: Target): GeoPage {
  const place = placeFor(target);
  const path = pathFor(target);
  const h1 = `${target.service.name} ${place.prep}`;
  const title = `${h1} | Byte Force`;
  const description = `${h1}. Studio à Casablanca, devis en ${target.country.currency}. Trente minutes, réponse sous un jour ouvré.`;
  const proof = localProof(target, place.label);
  const siblings = target.country.cities
    .filter((city) => city.slug !== target.city?.slug)
    .map((city) => ({
      href: `/geo-location/${target.service.slug}/${target.country.code}/${city.slug}`,
      label: city.name,
    }));
  const countryHref = `/geo-location/${target.service.slug}/${target.country.code}`;
  const crumbs: GeoLink[] = [
    { href: "/", label: "Accueil" },
    { href: "/geo-location", label: "Lieux" },
    target.service.parent,
  ];
  if (target.city) crumbs.push({ href: countryHref, label: target.country.name });
  crumbs.push({ href: `/${path}`, label: h1 });

  const links: GeoLink[] = [
    target.service.parent,
    { href: "/contact", label: "Contact" },
    { href: "/geo-location", label: "Toutes les pages par lieu" },
  ];
  if (target.city) links.push({ href: countryHref, label: `${target.service.short} ${geoPlaces[placeKey(target.country, target.country.name)].prep}` });

  const range = target.country.range
    ? `La fourchette publiée pour une société dans ce pays est ${target.country.range}. Elle ne remplace pas le périmètre.`
    : `Aucune fourchette en ${target.country.currencyLabel} n'est publiée. Le montant suit le périmètre : rôles, outils déjà en place, langues, reprise des données, déplacement s'il est écrit.`;

  const blocks: GeoBlock[] = [
    { h: place.label, p: place.paragraphs },
    { h: target.service.name, p: target.service.paragraphs.slice(0, 2) },
    { h: "Ce qui est livré", items: target.service.includes },
    {
      h: "Le passage",
      items: [
        `On nomme le geste pour ${place.label}, et ce qui attend la première version.`,
        "Trente minutes pour dire si le sujet est bien cette offre. La réponse part sous un jour ouvré.",
        `${target.country.hours} Le montant se discute en ${target.country.currencyLabel}, après le périmètre, pas avant.`,
        "À la remise, le dépôt et les comptes d'hébergement livrés sont à l'entreprise.",
      ],
    },
    { h: "Le montant", p: [range, "Le premier échange ne donne pas un prix public. Il dit si un chiffrage a un sens."] },
  ];

  if (!proof.length) {
    blocks.push({
      h: "Cas à écrire",
      p: [
        `Aucun projet du catalogue n'est étiqueté ${place.label} pour ${target.service.name}. Le témoignage et la fiche restent à fournir. On n'invente pas un client pour remplir la page.`,
      ],
    });
  }

  const faqs = [
    {
      q: `Y a-t-il un bureau ${place.prep} ?`,
      a:
        place.label === "Casablanca" || (!target.city && target.country.code === "ma")
          ? "Oui, un seul : Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca. Sur rendez-vous, en semaine, de 9 h à 19 h."
          : `Non. Le seul bureau est à Casablanca. Le travail ${place.prep} se fait en visio. Un déplacement se décide seulement s'il est écrit dans le périmètre.`,
    },
    {
      q: `Quel prix pour ${target.service.short} ${place.prep} ?`,
      a: range,
    },
    {
      q: `Que comprend ${target.service.short} ${place.prep} ?`,
      a: target.service.includes.slice(0, 3).join(" "),
    },
    {
      q: `Comment se passent les points ${place.prep} ?`,
      a: `${target.country.hours} Le téléphone est le +212 666 650 696. La langue de cadrage est le français.`,
    },
    {
      q: "Quelle est la première étape ?",
      a: "Écrire avec le fichier, l'URL, ou le geste qui bloque. Trente minutes suffisent souvent. Le périmètre écrit vient avant le code et avant le montant.",
    },
  ];

  const lede = `Byte Force prend ${target.service.short} ${place.prep} depuis Casablanca. ${place.paragraphs[0]} Le cadre de l'offre est [[${target.service.parent.href}|${target.service.parent.label}]].`;
  const texts = [h1, lede, ...blocks.flatMap((block) => [block.h, ...(block.p ?? []), ...(block.items ?? [])]), ...faqs.flatMap((item) => [item.q, item.a])];
  const words = texts.join(" ").split(/\s+/).filter(Boolean).length;

  return {
    path,
    keyword: h1,
    title,
    description,
    h1,
    cta: "Décrire le projet",
    lede,
    blocks,
    faqs,
    proof,
    links,
    related: [],
    cities: target.city ? siblings : target.country.cities.map((city) => ({ href: `${countryHref}/${city.slug}`, label: city.name })),
    crumbs,
    areaName: place.label,
    areaCountry: target.country.name,
    level: target.city ? "City" : "Country",
    words,
  };
}

const built = new Map<string, GeoPage>(targets().map((target) => {
  const page = build(target);
  return [page.path, page];
}));

export function indexableGeoPages() {
  return [...built.values()];
}

export function getGeoPage(path: string) {
  return built.get(path) ?? null;
}

export function geoDirectory() {
  return Object.values(geoServices).map((service) => ({
    name: service.name,
    parent: service.parent,
    countries: geoCoverage.countries.map((country) => ({
      country: country.name,
      places: [
        {
          city: country.name,
          pages: [{ href: `/geo-location/${service.slug}/${country.code}`, label: `${service.name} ${geoPlaces[placeKey(country, country.name)].prep}` }],
        },
        ...country.cities.map((city) => ({
          city: city.name,
          pages: [{ href: `/geo-location/${service.slug}/${country.code}/${city.slug}`, label: `${service.name} ${geoPlaces[placeKey(country, city.name)].prep}` }],
        })),
      ],
    })),
  }));
}

export function geoLinksFor(serviceSlug: string) {
  const service = geoServices[serviceSlug];
  if (!service) return [];
  return geoCoverage.countries.flatMap((country) => [
    { href: `/geo-location/${service.slug}/${country.code}`, label: `${service.short} ${geoPlaces[placeKey(country, country.name)].prep}` },
    ...country.cities.map((city) => ({
      href: `/geo-location/${service.slug}/${country.code}/${city.slug}`,
      label: city.name,
    })),
  ]);
}

function auditGeoPages() {
  const titles = new Set<string>();
  const descriptions = new Set<string>();
  for (const page of built.values()) {
    if (titles.has(page.title)) throw new Error(`Titre en double: ${page.title}`);
    if (descriptions.has(page.description)) throw new Error(`Description en double: ${page.description}`);
    if (page.faqs.length < 4 || page.faqs.length > 6) throw new Error(`${page.path}: ${page.faqs.length} questions`);
    titles.add(page.title);
    descriptions.add(page.description);
  }
  for (const country of geoCoverage.countries) {
    if (!countryByCode(country.code)) throw new Error(country.code);
  }
}

auditGeoPages();
