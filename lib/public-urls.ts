import { articles } from "@/lib/articles";
import { cityPages } from "@/lib/city-pages";
import { projects, services } from "@/lib/content";
import { geoKeywords } from "@/lib/geo/keywords";
import { insightCategories } from "@/lib/insight-categories";
import { moneyPages } from "@/lib/money";
import { studioSections } from "@/lib/studio-sections";

const staticPaths = [
  "/",
  "/services",
  "/realisations",
  "/studio",
  "/insights",
  "/contact",
  "/audit",
  "/recherche",
  "/how-we-write",
  "/walid-moultamiss",
  "/checklists/comprendre-le-travail",
  "/checklists/dessiner-le-produit",
  "/checklists/construire-le-produit",
  "/checklists/lancer-le-produit",
  "/checklists/ameliorer-le-produit",
  "/ai",
  "/ai/services",
  "/ai/work",
  "/ai/contact",
  "/ai/faq",
  "/solutions",
  "/developpement-logiciel-sur-mesure-maroc",
  "/developpement-logiciel-sur-mesure-casablanca",
  "/crm/logiciel-crm-personnalise",
  "/crm-sur-mesure-maroc",
  "/developpement-saas-maroc",
  "/developpement-erp-maroc",
  "/agence-wordpress-maroc",
  "/developpement-application-mobile-maroc",
  "/developpement-application-mobile-casablanca",
  "/integration-ia-automatisation-entreprise-maroc",
  "/mentions-legales",
  "/confidentialite",
  "/conditions",
  "/plan-du-site",
  "/outils",
  "/outils/claude-artifact-to-markdown",
];

export function publicEntries() {
  const dates = new Map<string, string>();
  const set = (path: string, date: string) => {
    const current = dates.get(path);
    if (!current || date > current) dates.set(path, date);
  };
  for (const path of staticPaths) set(path, "2026-10-08");
  for (const service of services) set(service.href ?? `/services/${service.slug}`, "2026-10-08");
  for (const page of moneyPages) set(`/${page.path}`, "2026-10-12");
  for (const city of cityPages) set(`/villes/${city.slug}`, "2026-10-12");
  for (const category of insightCategories) set(`/insights/category/${category.slug}`, "2026-10-12");

  for (const project of projects) {
    const year = Number(project.year);
    set(`/realisations/${project.slug}`, Number.isFinite(year) ? `${project.year}-01-01` : "2026-10-08");
  }
  for (const article of articles) set(`/insights/${article.slug}`, article.date);
  set("/how-we-write", "2026-10-09");
  set("/walid-moultamiss", "2026-10-09");
  set("/checklists/lancer-le-produit", "2026-10-09");
  set("/checklists/comprendre-le-travail", "2026-10-09");
  set("/checklists/dessiner-le-produit", "2026-10-09");
  set("/checklists/construire-le-produit", "2026-10-09");
  set("/checklists/ameliorer-le-produit", "2026-10-09");
  set("/recherche", "2026-10-09");
  set("/", "2026-10-13");
  set("/services", "2026-10-13");
  set("/solutions", "2026-10-13");
  set("/realisations", "2026-10-13");
  set("/plan-du-site", "2026-10-13");
  for (const section of studioSections) set(`/studio/${section.slug}`, "2026-10-13");
  set("/ou-en-est-le-projet", "2026-10-13");
  set("/checklists/comprendre-le-travail", "2026-10-13");
  return [...dates.entries()].map(([path, lastModified]) => ({ path, lastModified }));
}
