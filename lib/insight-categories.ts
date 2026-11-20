import { articles, type Article } from "@/lib/articles";

export type InsightCategory = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  notes?: string[];
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
      "automatisation-ia-entreprise-maroc",
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
      "crm-sur-mesure-ou-crm-standard",
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
    notes: [
      "Une application mobile se juge au geste dans la main : une photo, une signature, une tournée, une notification que la personne doit voir hors du bureau. iOS et Android sont les deux stores. React Native et Expo servent quand le même geste doit exister sur les deux, sans tenir deux dépôts. Un développement séparé se justifie seulement si le téléphone impose une capacité que le cadre commun ne couvre pas.",
      "Le web suffit quand le geste se fait devant un écran large, avec un lien, et sans installation. Le mobile se justifie quand la personne n'est pas au bureau, ou quand le store est le point d'entrée. Faire les deux par défaut double le périmètre sans doubler l'usage. Le choix s'écrit avant le premier écran.",
      "Les textes liés ici couvrent [[/insights/application-mobile-sur-mesure|l'application mobile sur mesure]], [[/insights/prix-application-mobile-maroc|le prix au Maroc]], [[/insights/cout-application-mobile|ce qui fait le coût]], [[/insights/creer-une-application-pour-son-entreprise|créer une application pour son entreprise]], [[/insights/developpement-application-mobile-maroc|le développement au Maroc]], et [[/insights/application-web-ou-mobile|le web ou le mobile]]. L'offre commerciale est [[/developpement-application-mobile-maroc|l'application mobile]].",
    ],
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
    notes: [
      "Un site vitrine explique. Une application web fait faire. Le visiteur du site lit l'offre, le lieu et le contact. La personne qui ouvre l'application a un droit, un dossier, et une action : valider, relancer, suivre. Confondre les deux dans un seul écran produit souvent un site que l'équipe n'utilise pas, ou un outil que personne ne trouve depuis une recherche.",
      "Les formes qui reviennent sont un tableau de bord, un portail client, un outil interne, ou un SaaS où chaque client ne voit que ses dossiers. Le tableau de bord montre l'état. Le portail laisse le client déposer ou suivre. L'outil interne remplace le fichier que deux personnes écrasent. Le SaaS isole les comptes. Aucun de ces mots ne fixe un prix : le montant suit le geste, les rôles et les outils déjà en place.",
      "La pile écrite pour ces produits, quand le parcours le demande, est Next.js pour la page, React pour l'écran, Node.js pour le serveur. Ce n'est pas une obligation collée sur chaque devis. C'est ce que le studio utilise quand l'application doit être retrouvée, comprise, et rouverte le lendemain. Les textes de ce regroupement couvrent [[/insights/developpement-application-web-maroc|le développement d'une application web au Maroc]], [[/insights/cout-application-web|le coût d'une application web]], [[/insights/developpement-logiciel-entreprise-maroc|le logiciel pour une entreprise]], [[/insights/site-web-ou-logiciel|le choix entre un site et un logiciel]], et [[/insights/rouvrir-l-application|ce qui fait rouvrir l'application]]. L'offre est [[/application-web-sur-mesure-maroc|l'application web sur mesure]].",
    ],
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
    notes: [
      "En 2026, une entreprise au Maroc regarde l'intelligence artificielle d'abord pour le travail qui se répète. Trier un courrier. Sortir un montant d'une facture. Classer une demande vers le bon service. Répondre à une question dont la réponse est déjà écrite. Voir une tendance dans des chiffres que l'équipe recopie encore à la main. Le sujet n'est pas d'ajouter un modèle parce que le mot circule. Le sujet est de nommer le geste, puis de voir s'il tient dans une règle. Le studio n'a pas de grille publique pour ce travail : le devis vient après le périmètre.",
      "Les demandes qui reviennent sont précises. Automatiser le tri des emails, quand la boîte mélange devis, relances et bruit. Extraire des données d'un PDF ou d'un tableau, pour ne plus les ressaisir. Classifier des messages selon qui doit répondre. Tenir un chatbot seulement si les réponses sont dans un texte vérifié, et s'il sait passer la main à une personne. Regarder une analyse prédictive seulement quand l'historique est propre : un modèle ne répare pas un fichier faux, et Byte Force n'annonce pas ici un pourcentage de gain.",
      "Ce regroupement va s'étoffer à mesure que ces questions se précisent dans les projets. Trois textes sont déjà en ligne. [[/insights/automatisation-entreprise-avec-ia|Automatiser une entreprise, avec ou sans IA]] dit quand la règle suffit. [[/insights/intelligence-artificielle-entreprise-maroc|L'intelligence artificielle pour une entreprise au Maroc]] part du geste, pas du nom du modèle. [[/insights/modele-apres-la-regle|Un modèle seulement après la règle]] fixe l'ordre. Quand la règle doit vivre dans un outil, le cadre est [[/developpement-logiciel-sur-mesure-maroc/automatisation|l'automatisation]]. Le bureau reste au Technopark, à Casablanca. Le premier échange sert à voir le fichier, pas à promettre un résultat chiffré.",
    ],
    offer: { href: "/developpement-logiciel-sur-mesure-maroc/automatisation", label: "Automatisation" },
    slugs: ["automatisation-entreprise-avec-ia", "intelligence-artificielle-entreprise-maroc", "modele-apres-la-regle"],
  },
  {
    slug: "processus",
    title: "Processus · Décisions",
    description: "Contrat, première version, test, livraison, propriété du code, et lecture par une machine.",
    h1: "Décisions sur le processus",
    lede: "Ces pages disent comment un projet commence, se remet, et se lit. Le contact reste à Casablanca.",
    notes: [
      "Un projet chez Byte Force suit cinq temps, dans cet ordre. Le contrat écrit le geste, la propriété du code et ce qui est remis. Le design nomme les écrans avant d'écrire. La construction livre une version qu'une personne peut ouvrir. Le lancement met en ligne ce qui a été accepté. L'amélioration vient après, sur un défaut du périmètre ou sur une suite écrite. On ne saute pas un temps pour aller plus vite vers le code.",
      "Les listes qui accompagnent ces temps sont publiques, à côté des articles. [[/checklists/comprendre-le-travail|Comprendre le travail]]. [[/checklists/dessiner-le-produit|Dessiner le produit]]. [[/checklists/construire-le-produit|Construire le produit]]. [[/checklists/lancer-le-produit|Lancer le produit]]. [[/checklists/ameliorer-le-produit|Améliorer le produit]]. Elles ne remplacent pas les textes ci-dessous. Elles disent quoi vérifier avant de passer au temps suivant. Le bureau qui répond est au Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca, en semaine de 9 h à 19 h. Un déplacement, en France ou ailleurs, ne se décide que s'il est écrit dans le périmètre.",
    ],
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
