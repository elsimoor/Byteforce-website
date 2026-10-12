import { geoKeywords, type GeoIntent, type GeoKeyword } from "./keywords";
import { geoPlaces } from "./places";
import { geoServices } from "./services";

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
  proof: { href: string; title: string; note: string }[];
  links: GeoLink[];
  related: GeoLink[];
  cities: GeoLink[];
  crumbs: GeoLink[];
  areaName: string;
  areaCountry: string;
  level: "City" | "Country";
  words: number;
};

const cta: Record<GeoIntent, string> = {
  demande: "Parler de mon projet",
  agence: "Écrire au studio",
  creation: "Décrire la première version",
  developpement: "Décrire ce qu'il faut coder",
  entreprise: "Écrire à Byte Force",
  prix: "Décrire le périmètre",
  "sur-mesure": "Comparer avec l'outil actuel",
};

function cap(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function countWords(parts: string[]) {
  const plain = parts.join(" ").replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, "$2");
  return plain.split(/\s+/).filter(Boolean).length;
}

function titleFor(row: GeoKeyword, short: string, prep: string) {
  if (row.intent === "sur-mesure" && row.serviceSlug === "developpement-logiciel-sur-mesure") {
    return `Logiciel dédié ${prep}`;
  }
  const lead: Record<GeoIntent, string> = {
    demande: cap(short),
    agence: `Agence ${short}`,
    creation: `Création ${short}`,
    developpement: `Développement ${short}`,
    entreprise: `Entreprise ${short}`,
    prix: `Prix ${short}`,
    "sur-mesure": `${cap(short)} sur mesure`,
  };
  return `${lead[row.intent]} ${prep}`;
}

function descriptionFor(keyword: string) {
  const full = `Pour « ${keyword} », Byte Force répond depuis Casablanca. Trente minutes pour cadrer, réponse sous un jour ouvré.`;
  if (full.length <= 160) return full;
  const short = `« ${keyword} ». Byte Force, Casablanca. Trente minutes, réponse sous un jour ouvré.`;
  return short.length <= 160 ? short : `${short.slice(0, 157)}…`;
}

function intentParagraphs(row: GeoKeyword, short: string, prep: string, place: string) {
  const name = row.service;
  if (row.intent === "agence") {
    return [
      `« ${row.keyword} » cherche une société à qui confier ${short} ${prep}, pas une liste de profils indépendants. Byte Force est un studio, avec une adresse à Casablanca, un téléphone et un périmètre écrit avant le code. La personne qui répond au premier échange travaille dans l'équipe qui livre. Il n'y a pas de revente du dossier à un inconnu après la signature.`,
      `Une agence, dans cette recherche, veut dire un interlocuteur qui reste après la mise en ligne : le dépôt, les accès, et la suite. Ce n'est pas une garantie de résultat chiffré, et ce n'est pas un bureau ${prep}. Le bureau est unique. L'offre ${name} se discute à distance quand le lieu n'est pas Casablanca, avec le même contrat que pour un client qui passe au Technopark.`,
    ];
  }
  if (row.intent === "creation") {
    return [
      `« ${row.keyword} » part d'une première version, pas d'un système déjà plein. On écrit ce que la version doit permettre, et ce qui attend. Créer ${short} ${prep} ne veut pas dire ouvrir tous les cas le premier mois. Un geste utilisé vaut mieux qu'un catalogue d'écrans que personne n'ouvre.`,
      `La création comprend le cadrage, les textes nécessaires pour comprendre l'écran, le dépôt au nom de l'entreprise, et une mise en ligne dont les comptes ne restent pas au studio. Elle ne comprend pas, sauf écriture contraire, la publicité, le contenu de blog continu, ni un second produit. ${place} nomme le lieu de la recherche. Le lieu de construction reste Casablanca.`,
    ];
  }
  if (row.intent === "developpement") {
    return [
      `« ${row.keyword} » parle du code : faire exister ${short} ${prep}, dans un dépôt que l'entreprise possède. On choisit la technique selon la contrainte, pas selon une mode. À la remise, le dépôt et les comptes d'hébergement livrés sont au client. Le studio ne garde pas la clé comme condition pour continuer.`,
      `Développer suppose un périmètre déjà nommé. Sans lui, on code le mauvais geste. Les rôles, les erreurs, et ce qui doit rester lent parce qu'un humain valide, sont écrits avant. ${place} ne change pas le langage du dépôt. Ça change l'heure des points, et parfois la langue des écrans, si l'équipe le demande.`,
    ];
  }
  if (row.intent === "entreprise") {
    return [
      `« ${row.keyword} » cherche une entreprise spécialisée, pas un profil généraliste qui ferait ${short} entre deux autres métiers. Byte Force est un studio de logiciel à Casablanca. Cette page isole une offre, ${name}, pour une recherche qui ajoute un lieu. Les autres offres ont leurs pages. On ne les empile pas dans le même devis.`,
      `Spécialisé ne veut pas dire présent ${prep}. Le seul établissement est le Technopark, à Casablanca. L'entreprise qui cherche ${prep} parle au même studio, aux mêmes heures, avec le même refus d'inventer un client local qui n'est pas dans le catalogue.`,
    ];
  }
  if (row.intent === "prix") {
    return [
      `« ${row.keyword} » demande un prix. Byte Force n'en publie pas. Le montant de ${short} ${prep} suit le périmètre : le nombre de rôles, les outils déjà en place, les langues de l'écran, ce qui doit continuer à marcher pendant la bascule, et si un déplacement est vraiment nécessaire. Deux recherches identiques ne donnent pas deux projets identiques.`,
      `Une grille affichée sans avoir vu le fichier décrit un autre métier. Le premier échange dure trente minutes et sert à dire si un chiffrage a un sens. Ensuite un périmètre écrit. Ensuite seulement un montant. La devise se discute selon la société : dirham au Maroc, euro en France, dollar canadien au Canada. Le lieu ${place} ne crée pas un tarif local séparé.`,
    ];
  }
  if (row.intent === "sur-mesure") {
    return [
      `« ${row.keyword} » oppose le sur-mesure à l'outil déjà en rayon. ${cap(short)} ${prep} se justifie quand les colonnes ou les écrans du produit du marché obligent l'équipe à travailler à côté, dans un second fichier. Si le produit du marché suffit, Byte Force le dit. Construire pour coller à une habitude mauvaise n'est pas le but.`,
      `Le sur-mesure se paie en périmètre, pas en abonnement décoratif. La première version tient dans un geste. Le dépôt revient à l'entreprise. Quand la formulation double le mot « sur mesure », comme pour le logiciel, il s'agit de la même intention : un programme écrit pour ce processus, pas deux logiciels. ${place} est le lieu cherché, pas une variante du produit.`,
    ];
  }
  return [
    `« ${row.keyword} » est la recherche directe : ${name} ${prep}. Byte Force la prend depuis Casablanca. La page dit ce que l'offre contient, comment les rendez-vous se passent pour ce lieu, et où écrire. Elle ne promet pas une équipe sur place hors du Technopark.`,
    `Le cadre déjà publié de l'offre reste la page parente. Cette URL existe parce que la recherche ajoute un lieu. On y répond avec le même studio, les mêmes heures, et le catalogue tel qu'il est, sans déplacer un projet dans une ville où il n'est pas.`,
  ];
}

function bureauAnswer(row: GeoKeyword, placeLabel: string) {
  if (placeLabel === "Casablanca" || (row.level === "Country" && row.country === "Maroc")) {
    return "Oui, un seul : Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca. Sur rendez-vous, en semaine, de 9 h à 19 h. Il n'y a pas d'autre adresse.";
  }
  return `Non. Le seul bureau est à Casablanca, au Technopark, boulevard Dammam, Aïn Chock. Le travail pour ${placeLabel} se fait en visio, de 9 h à 19 h heure de Casablanca. Un déplacement se décide seulement s'il est écrit dans le périmètre.`;
}

const built = new Map<string, GeoPage>();

export function getGeoPage(path: string) {
  const hit = built.get(path);
  if (hit) return hit;
  const row = geoKeywords().find((item) => item.path === path);
  if (!row) return null;
  const service = geoServices[row.serviceSlug];
  const place = geoPlaces[`${row.country}|${row.city}`];
  if (!service) throw new Error(`Service sans texte: ${row.serviceSlug}`);
  if (!place) throw new Error(`Lieu sans texte: ${row.country}|${row.city}`);

  const samePlace = geoKeywords().filter(
    (item) => item.serviceSlug === row.serviceSlug && item.country === row.country && item.city === row.city,
  );
  const demande = samePlace.find((item) => item.intent === "demande");
  const related = samePlace
    .filter((item) => item.path !== row.path)
    .map((item) => ({ href: `/${item.path}`, label: item.keyword }));
  const cities =
    row.level === "Country"
      ? geoKeywords()
          .filter(
            (item) =>
              item.serviceSlug === row.serviceSlug &&
              item.country === row.country &&
              item.level === "City" &&
              item.intent === row.intent,
          )
          .map((item) => ({ href: `/${item.path}`, label: item.city }))
      : [];
  const countryRow =
    row.level === "City"
      ? geoKeywords().find(
          (item) =>
            item.serviceSlug === row.serviceSlug &&
            item.country === row.country &&
            item.level === "Country" &&
            item.intent === row.intent,
        )
      : undefined;

  const crumbs: GeoLink[] = [
    { href: "/", label: "Accueil" },
    { href: "/geo-location", label: "Lieux" },
    { href: service.parent.href, label: service.parent.label },
  ];
  if (row.intent !== "demande" && demande) crumbs.push({ href: `/${demande.path}`, label: place.label });
  crumbs.push({ href: `/${row.path}`, label: row.keyword });

  const links: GeoLink[] = [
    service.parent,
    { href: "/contact", label: "Contact" },
    { href: "/geo-location", label: "Toutes les pages par lieu" },
  ];
  if (countryRow) links.push({ href: `/${countryRow.path}`, label: `${service.short} ${geoPlaces[`${row.country}|${row.country}`].prep}` });

  const lede = `Byte Force répond à « ${row.keyword} » depuis Casablanca. L'offre est ${service.name}, ${place.prep}. Le bureau est au Technopark, boulevard Dammam, Aïn Chock, 20001. Il n'y en a pas d'autre. Le cadre de cette offre est [[${service.parent.href}|${service.parent.label}]]. Pour la confier, écrivez par le [[/contact|contact]] : un premier échange de trente minutes, une réponse sous un jour ouvré, au +212 666 650 696.`;

  const blocks: GeoBlock[] = [
    { h: "Ce que la recherche demande", p: intentParagraphs(row, service.short, place.prep, place.label) },
    { h: service.name, p: service.paragraphs },
    { h: "Ce qui est dans le périmètre", items: service.includes },
    { h: place.label, p: place.paragraphs },
    {
      h: "Comment le studio travaille",
      p: [
        "Le travail commence par le geste à rendre possible. On écrit qui s'en sert, ce qui est dans la première version, et ce qui attend. Ensuite seulement le code. À la remise, le dépôt et les comptes d'hébergement livrés sont à l'entreprise. Le studio ne garde pas le compte développeur, le nom de domaine, ni l'accès d'administration comme une condition pour rester.",
        "Aucun prix n'est publié sur le site. Le montant suit le périmètre écrit : les rôles, les outils déjà là, les langues de l'écran, la reprise des données, et un déplacement s'il est vraiment utile. Une page qui annoncerait un forfait sans avoir vu le processus décrirait un autre projet. Le premier échange dure trente minutes. La réponse part sous un jour ouvré, à l'adresse du site ou par le formulaire.",
        `Les heures sont fixes : lundi au vendredi, de 9 h à 19 h, heure de Casablanca. ${place.prep.charAt(0).toUpperCase()}${place.prep.slice(1)}, on cale les points dans ces heures. On ne promet pas une astreinte de nuit, ni une équipe dans le fuseau du mot-clé. Le catalogue public reste la seule preuve de mise en ligne. Un projet n'est pas déplacé dans une ville pour illustrer une page.`,
      ],
    },
  ];

  const faqs = [
    {
      q: `Qui répond à « ${row.keyword} » ?`,
      a: `Byte Force, studio de logiciel à Casablanca. L'offre concernée est ${service.name}. Le contact est le formulaire du site, ou le +212 666 650 696, du lundi au vendredi, de 9 h à 19 h. La page parente de l'offre est ${service.parent.label}.`,
    },
    {
      q: `Quel est le prix ${place.prep} ?`,
      a: "Il n'est pas publié. Il suit le périmètre : rôles, outils déjà en place, langues, reprise des données, déplacement éventuel. Le premier échange de trente minutes sert à savoir si un chiffrage a un sens. La devise se discute selon la société, pas selon une grille locale.",
    },
    {
      q: `Y a-t-il un bureau ${place.prep} ?`,
      a: bureauAnswer(row, place.label),
    },
    {
      q: "Quelle est la première étape ?",
      a: "Écrire ou appeler, avec le fichier, l'URL, ou le geste qui bloque. Trente minutes suffisent souvent à dire si le sujet est bien cette offre. Une réponse part sous un jour ouvré. Le périmètre écrit vient avant le code et avant le montant.",
    },
  ];

  const texts = [
    row.keyword,
    lede,
    ...blocks.flatMap((block) => [block.h, ...(block.p ?? []), ...(block.items ?? [])]),
    ...faqs.flatMap((item) => [item.q, item.a]),
  ];
  const page: GeoPage = {
    path: row.path,
    keyword: row.keyword,
    title: titleFor(row, service.short, place.prep),
    description: descriptionFor(row.keyword),
    h1: row.keyword,
    cta: cta[row.intent],
    lede,
    blocks,
    faqs,
    proof: service.proof,
    links,
    related,
    cities,
    crumbs,
    areaName: place.label,
    areaCountry: row.country,
    level: row.level,
    words: countWords(texts),
  };
  built.set(path, page);
  return page;
}

export function geoDirectory() {
  const countryOrder = ["Maroc", "France", "Canada"];
  const services = Object.values(geoServices);
  return services.map((service) => ({
    name: service.name,
    parent: service.parent,
    countries: countryOrder.map((country) => {
      const rows = geoKeywords().filter((row) => row.serviceSlug === service.slug && row.country === country);
      const places = [...new Set(rows.map((row) => row.city))];
      places.sort((a, b) => {
        if (a === country) return -1;
        if (b === country) return 1;
        return a.localeCompare(b, "fr");
      });
      return {
        country,
        places: places.map((city) => ({
          city,
          pages: rows
            .filter((row) => row.city === city)
            .sort((a, b) => a.keyword.localeCompare(b.keyword, "fr"))
            .map((row) => ({ href: `/${row.path}`, label: row.keyword })),
        })),
      };
    }),
  }));
}

function auditGeoPages() {
  const titles = new Set<string>();
  const descriptions = new Set<string>();
  let min = Number.POSITIVE_INFINITY;
  let minPath = "";
  for (const row of geoKeywords()) {
    const page = getGeoPage(row.path);
    if (!page) throw new Error(`Page absente: ${row.path}`);
    if (page.words < 600) throw new Error(`${page.path}: ${page.words} mots`);
    if (titles.has(page.title)) throw new Error(`Titre en double: ${page.title}`);
    if (descriptions.has(page.description)) throw new Error(`Description en double: ${page.description}`);
    titles.add(page.title);
    descriptions.add(page.description);
    if (page.words < min) {
      min = page.words;
      minPath = page.path;
    }
  }
  if (titles.size !== geoKeywords().length) throw new Error("Le sitemap des lieux ne couvre pas tout le CSV");
  console.log(`[geo] ${titles.size} pages, minimum ${min} mots (${minPath})`);
}

auditGeoPages();
