import { articles, type Article } from "@/lib/articles";

export type InsightCategory = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  offer: { href: string; label: string };
  slugs: string[];
};

export const insightCategories: InsightCategory[] = [
  {
    slug: "logiciel-sur-mesure",
    title: "Logiciel sur mesure · Décisions",
    description: "Décisions Byte Force sur le logiciel sur mesure au Maroc : prix, délai, standard ou écrit, et à qui appartient le code.",
    h1: "Décisions sur le logiciel sur mesure",
    lede: "Ces pages servent à décider avant d'écrire un logiciel. Le cadre commercial est le développement logiciel sur mesure au Maroc.",
    offer: { href: "/developpement-logiciel-sur-mesure-maroc", label: "Développement logiciel sur mesure" },
    slugs: [
      "developpement-logiciel-sur-mesure-maroc",
      "logiciel-sur-mesure-maroc",
      "avantages-logiciel-sur-mesure",
      "prix-logiciel-sur-mesure-maroc",
      "cout-logiciel-sur-mesure-maroc",
      "combien-coute-un-logiciel-sur-mesure",
      "prix-seo-maroc",
      "delai-logiciel-sur-mesure",
      "quand-creer-un-logiciel-sur-mesure",
      "logiciel-personnalise-ou-standard",
      "logiciel-sur-mesure-ou-standard",
      "logiciel-metier-sur-mesure",
      "agence-developpement-logiciel-casablanca",
    ],
  },
  {
    slug: "crm",
    title: "CRM · Décisions",
    description: "Décisions sur le CRM sur mesure : Excel, Salesforce, coût, et le moment où le fichier ne suffit plus.",
    h1: "Décisions sur le CRM",
    lede: "Ces pages aident à choisir entre un fichier, un CRM du marché et un CRM écrit pour le cycle réel.",
    offer: { href: "/developpement-logiciel-sur-mesure-maroc/crm", label: "CRM sur mesure" },
    slugs: [
      "creation-crm-sur-mesure",
      "crm-personnalise-ou-salesforce",
      "crm-personnalise-maroc",
      "cout-crm-personnalise",
      "logiciel-gestion-clients-sur-mesure",
      "quand-utiliser-un-crm",
      "comment-choisir-un-crm",
      "crm-pme-maroc",
      "crm-ou-excel",
      "remplacer-excel-par-un-crm",
      "remplacer-excel-par-un-logiciel",
    ],
  },
  {
    slug: "saas",
    title: "SaaS · Décisions",
    description: "Décisions pour créer un SaaS : première version, isolation des clients, coût, et idée à juger.",
    h1: "Décisions sur le SaaS",
    lede: "Ces pages parlent d'un produit à plusieurs clients. L'offre est le développement SaaS au Maroc.",
    offer: { href: "/developpement-saas-maroc", label: "Développement SaaS" },
    slugs: [
      "creation-saas-maroc",
      "comment-creer-un-saas",
      "comment-creer-un-saas-au-maroc",
      "developpement-saas-sur-mesure",
      "developpement-application-saas",
      "saas-sur-mesure-ou-standard",
      "mvp-saas-maroc",
      "cout-creation-saas",
      "idee-saas-entreprise-maroc",
    ],
  },
  {
    slug: "applications-mobiles",
    title: "Applications mobiles · Décisions",
    description: "Décisions sur l'application mobile : prix, web ou installée, et le geste sur le téléphone.",
    h1: "Décisions sur l'application mobile",
    lede: "Ces pages servent à savoir si le geste est sur le téléphone. L'offre est le développement d'application mobile au Maroc.",
    offer: { href: "/developpement-application-mobile-maroc", label: "Application mobile" },
    slugs: [
      "application-mobile-sur-mesure",
      "prix-application-mobile-maroc",
      "cout-application-mobile",
      "creer-une-application-pour-son-entreprise",
      "developpement-application-mobile-maroc",
      "application-web-ou-mobile",
    ],
  },
  {
    slug: "applications-web",
    title: "Applications web · Décisions",
    description: "Décisions sur l'application web, le logiciel d'entreprise, et le choix entre un site et un outil.",
    h1: "Décisions sur l'application web",
    lede: "Ces pages séparent le site qui explique et l'application qui fait faire. L'offre est l'application web sur mesure.",
    offer: { href: "/application-web-sur-mesure-maroc", label: "Application web sur mesure" },
    slugs: [
      "developpement-application-web-maroc",
      "cout-application-web",
      "developpement-logiciel-entreprise-maroc",
      "site-web-ou-logiciel",
      "rouvrir-l-application",
    ],
  },
  {
    slug: "pile",
    title: "Pile technique · Décisions",
    description: "Décisions sur les outils du dépôt : Next.js, bases, hébergement, mesure, courrier.",
    h1: "Décisions sur la pile",
    lede: "Chaque page dit quand un outil entre dans un produit, et quand il n'a pas à être cité.",
    offer: { href: "/services/api-backend", label: "API et backend" },
    slugs: [
      "nextjs-dans-les-produits",
      "react-pour-l-interface",
      "nodejs-pour-le-serveur",
      "typescript-dans-le-code",
      "graphql-pour-l-api",
      "postgresql-pour-les-enregistrements",
      "mongodb-pour-les-documents",
      "redis-pour-un-etat-rapide",
      "firebase-si-l-auth-est-la",
      "expo-pour-le-telephone",
      "wordpress-quand-le-site-existe",
      "tarif-creation-site-wordpress-maroc",
      "cloudflare-devant-le-site",
      "vercel-pour-publier",
      "ovhcloud-pour-l-hebergement",
      "nindohost-pour-l-hebergement",
      "hostinger-pour-l-hebergement",
      "namecheap-pour-le-domaine",
      "posthog-pour-les-evenements",
      "clarity-sur-une-page",
      "mailchimp-pour-la-liste",
      "mailgun-pour-l-envoi",
      "power-bi-si-l-outil-est-la",
    ],
  },
  {
    slug: "intelligence-artificielle",
    title: "Intelligence artificielle · Décisions",
    description: "Deux décisions : une règle d'abord, un modèle seulement si le geste l'exige.",
    h1: "Décisions sur l'intelligence artificielle",
    lede: "Byte Force n'ajoute pas un modèle pour le nom. Ces pages disent quand une règle suffit.",
    offer: { href: "/developpement-logiciel-sur-mesure-maroc/automatisation", label: "Automatisation" },
    slugs: ["automatisation-entreprise-avec-ia", "intelligence-artificielle-entreprise-maroc", "modele-apres-la-regle"],
  },
  {
    slug: "processus",
    title: "Processus · Décisions",
    description: "Contrat, première version, test, livraison, propriété du code, et lecture par une machine.",
    h1: "Décisions sur le processus",
    lede: "Ces pages disent comment un projet commence, se remet, et se lit. Le contact reste à Casablanca.",
    offer: { href: "/contact", label: "Écrire à Casablanca" },
    slugs: [
      "contrat-avant-le-code",
      "premiere-version-utile",
      "tester-le-parcours",
      "apres-la-livraison",
      "qui-possede-le-code",
      "site-lisible-par-une-machine",
      "quatre-lectures-a-cent",
    ],
  },
];

const bySlug = new Map(insightCategories.flatMap((category) => category.slugs.map((slug) => [slug, category])));

export function getInsightCategory(slug: string) {
  return insightCategories.find((category) => category.slug === slug);
}

export function categoryOf(articleSlug: string) {
  return bySlug.get(articleSlug);
}

export function articlesIn(category: InsightCategory): Article[] {
  const order = new Map(category.slugs.map((slug, index) => [slug, index]));
  return articles
    .filter((article) => order.has(article.slug))
    .sort((a, b) => (order.get(a.slug) ?? 0) - (order.get(b.slug) ?? 0));
}

export function relatedArticles(article: Article, count = 3): Article[] {
  const category = categoryOf(article.slug);
  if (!category) return [];
  return articlesIn(category).filter((item) => item.slug !== article.slug).slice(0, count);
}
