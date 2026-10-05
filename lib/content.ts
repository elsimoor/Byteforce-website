export type Service = {
  slug: string;
  title: string;
  menu: string;
  summary: string;
  problem: string;
  includes: string[];
  audience: string;
  primaryKeyword: string;
};

export type Project = {
  slug: string;
  title: string;
  category: "E-Commerce" | "Vitrine" | "Plate-forme";
  year: string;
  city: string;
  country: string;
  description: string;
  url: string;
  serviceSlug: string;
  pages: { label: string; href: string }[];
};

export const services: Service[] = [
  {
    slug: "creation-site-web",
    title: "Création de site web",
    menu: "Sites web",
    summary:
      "Sites vitrines et boutiques qui expliquent l'offre et recueillent une demande, pas seulement une visite.",
    problem:
      "Un site lent, flou ou sans appel à l'action laisse le prospect repartir. La page doit dire qui vous êtes, ce que vous vendez, et comment vous écrire.",
    includes: [
      "Arborescence et pages utiles au devis",
      "Rédaction orientée demande, en français",
      "Formulaire de contact branché sur le suivi",
      "Base technique: titres, meta, données structurées, sitemap",
    ],
    audience:
      "Commerces, marques et PME au Maroc qui veulent être trouvés et contactés.",
    primaryKeyword: "création site web Casablanca",
  },
  {
    slug: "applications-mobiles",
    title: "Applications mobiles",
    menu: "Applications",
    summary:
      "Applications iOS et Android conçues autour d'un usage réel: réserver, commander, suivre, payer.",
    problem:
      "Une application qui recopie un site sans usage mobile ne sera pas ouverte deux fois. On part du geste que le client doit pouvoir faire dans la poche.",
    includes: [
      "Parcours iOS et Android",
      "Compte, notifications et contenus utiles",
      "Lien avec votre site ou votre outil interne",
      "Version publiable, puis corrections après les premiers usages",
    ],
    audience:
      "Entreprises qui ont déjà une offre et veulent un canal direct avec leurs clients.",
    primaryKeyword: "développement application mobile Maroc",
  },
  {
    slug: "logiciel-sur-mesure",
    title: "Logiciel sur mesure",
    menu: "Logiciel",
    summary:
      "Outils internes, plateformes et espaces clients quand un tableur ou un modèle générique ne suffit plus.",
    problem:
      "Les équipes perdent du temps à recopier les mêmes informations. Un logiciel sur mesure reprend le flux réel: qui saisit, qui valide, qui relance.",
    includes: [
      "Cadrage du flux de travail",
      "Interface pour l'équipe et, si besoin, pour le client",
      "Rôles, droits et historique",
      "Mise en ligne et prise en main",
    ],
    audience:
      "Sociétés qui veulent un outil à leur nom, pas une pile de fichiers partagés.",
    primaryKeyword: "développement logiciel sur mesure Maroc",
  },
  {
    slug: "referencement-seo",
    title: "Référencement naturel",
    menu: "SEO",
    summary:
      "Pages construites pour les recherches qui précèdent une demande: service, ville, intention d'achat.",
    problem:
      "Être en ligne ne suffit pas si Google envoie le prospect chez un concurrent. On vise les requêtes commerciales, une URL par sujet, sans pages qui se font concurrence.",
    includes: [
      "Carte de mots-clés et pages cibles",
      "Titres, meta et contenu de la page",
      "Maillage interne vers le formulaire",
      "Suivi des pages publiées et des trous restants",
    ],
    audience:
      "Entreprises qui veulent des demandes depuis Google, au Maroc et sur les marchés déjà couverts.",
    primaryKeyword: "agence SEO Casablanca",
  },
  {
    slug: "hebergement",
    title: "Hébergement",
    menu: "Hébergement",
    summary:
      "Hébergement web et cloud pour garder le site rapide, en ligne, et simple à mettre à jour.",
    problem:
      "Un site qui tombe le jour d'une campagne, ou qui met quatre secondes à s'ouvrir, perd la demande. L'hébergement fait partie de la livraison, pas d'un après-coup.",
    includes: [
      "Mise en ligne du site ou de l'application",
      "Certificat, sauvegardes et nom de domaine",
      "Surveillance de la disponibilité",
      "Espace pour faire évoluer le projet",
    ],
    audience: "Équipes qui veulent un interlocuteur unique après la mise en ligne.",
    primaryKeyword: "hébergement web Maroc",
  },
  {
    slug: "design-graphique",
    title: "Design graphique",
    menu: "Design",
    summary:
      "Identité, pages et supports qui rendent l'offre lisible avant même le premier appel.",
    problem:
      "Si le visiteur ne comprend pas l'offre en quelques secondes, il ne demande pas de devis. Le design sert la lecture et la confiance, pas un habillage interchangeable.",
    includes: [
      "Direction visuelle alignée avec l'offre",
      "Pages d'accueil et pages service",
      "Supports simples pour les réseaux",
      "Fichiers réutilisables par votre équipe",
    ],
    audience: "Marques qui lancent ou reprennent une présence en ligne.",
    primaryKeyword: "design graphique Casablanca",
  },
  {
    slug: "api-backend",
    title: "API et backend",
    menu: "API",
    summary:
      "APIs et logique serveur pour connecter le site, l'application et les outils déjà en place.",
    problem:
      "Sans un backend clair, chaque nouveau canal recopie les données. L'API garde une seule source: clients, commandes, contenus, droits.",
    includes: [
      "Contrat d'API et authentification",
      "Connexion au site ou à l'application",
      "Règles métier côté serveur",
      "Documentation courte pour l'équipe",
    ],
    audience: "Projets qui ont déjà plusieurs outils et besoin de les faire parler ensemble.",
    primaryKeyword: "développement API sur mesure",
  },
  {
    slug: "maintenance",
    title: "Maintenance",
    menu: "Maintenance",
    summary:
      "Corrections, mises à jour et petites évolutions pour que le site continue à produire des demandes.",
    problem:
      "Un formulaire cassé ou un contenu périmé arrête les leads sans prévenir. La maintenance garde le parcours de contact ouvert.",
    includes: [
      "Corrections après mise en ligne",
      "Mises à jour de sécurité",
      "Petites évolutions de pages",
      "Vérification du formulaire et des pages clés",
    ],
    audience: "Clients Byte Force qui ont déjà un site ou un outil à faire vivre.",
    primaryKeyword: "maintenance site web Casablanca",
  },
];

export const projects: Project[] = [
  {
    slug: "escapade-florale",
    title: "Escapade Florale",
    category: "E-Commerce",
    year: "2024",
    city: "Lille",
    country: "France",
    description:
      "Boutique en ligne spécialisée dans les compositions florales artisanales et créations uniques.",
    url: "https://escapadeflorale.enconstru.fr/",
    serviceSlug: "creation-site-web",
    pages: [
      { label: "Boutique", href: "https://escapadeflorale.enconstru.fr/boutique/" },
      {
        label: "Un produit",
        href: "https://escapadeflorale.enconstru.fr/produit/bouquet-coeur-a-coeur/",
      },
    ],
  },
  {
    slug: "nu-lille",
    title: "Nu Lille",
    category: "E-Commerce",
    year: "2023",
    city: "Lille",
    country: "France",
    description:
      "Expérience gastronomique et événementielle haut de gamme au cœur de la métropole lilloise.",
    url: "https://nu-lille.fr/",
    serviceSlug: "creation-site-web",
    pages: [{ label: "Événements", href: "https://nu-lille.fr/evenements/" }],
  },
  {
    slug: "meubles-de-septentrion",
    title: "Meubles de Septentrion",
    category: "E-Commerce",
    year: "2023",
    city: "Marcq-en-Barœul",
    country: "France",
    description: "Mobilier d'exception et pièces de caractère pour des intérieurs élégants.",
    url: "https://meubles-de-septentrion.fr/",
    serviceSlug: "creation-site-web",
    pages: [
      { label: "Boutique", href: "https://meubles-de-septentrion.fr/boutique/" },
      {
        label: "Un produit",
        href: "https://meubles-de-septentrion.fr/produit/2-corps-a-2-portes-metal-croisillons/",
      },
    ],
  },
  {
    slug: "re-proche-de-moi",
    title: "Re Proche de moi",
    category: "Plate-forme",
    year: "2024",
    city: "Lille",
    country: "France",
    description:
      "Plateforme de mise en relation et marketplace locale pour les boutiques de proximité.",
    url: "https://re.prochedemoi.fr/",
    serviceSlug: "logiciel-sur-mesure",
    pages: [
      { label: "Recherche", href: "https://re.prochedemoi.fr/search?q=lille" },
      { label: "Carte", href: "https://re.prochedemoi.fr/map" },
      { label: "Lille", href: "https://re.prochedemoi.fr/france/nord-59/lille" },
    ],
  },
  {
    slug: "ambulances-valcq",
    title: "Ambulances Valcq",
    category: "Vitrine",
    year: "2022",
    city: "Roubaix",
    country: "France",
    description: "Site vitrine pour les services de transport sanitaire professionnel à Roubaix.",
    url: "https://ambulances-valcq.fr/",
    serviceSlug: "creation-site-web",
    pages: [],
  },
  {
    slug: "les-hauts-paysages",
    title: "Les Hauts Paysages",
    category: "Vitrine",
    year: "2023",
    city: "Nord",
    country: "France",
    description:
      "Aménagements paysagers et conception d'espaces verts dans le Nord de la France.",
    url: "https://leshautspaysages.fr/",
    serviceSlug: "creation-site-web",
    pages: [{ label: "Prestations", href: "https://leshautspaysages.fr/prestations/" }],
  },
  {
    slug: "dealkhir",
    title: "Dealkhir",
    category: "Plate-forme",
    year: "2024",
    city: "Casablanca",
    country: "Maroc",
    description: "Plateforme solidaire facilitant le don et l'engagement communautaire au Maroc.",
    url: "https://www.dealkhir.ma/en",
    serviceSlug: "logiciel-sur-mesure",
    pages: [
      { label: "Organisations", href: "https://www.dealkhir.ma/en/organizations" },
    ],
  },
  {
    slug: "coco-inbox",
    title: "Coco Inbox",
    category: "Plate-forme",
    year: "2024",
    city: "Montréal",
    country: "Canada",
    description:
      "Outil innovant pour la gestion et l'optimisation des flux de communication digitale.",
    url: "https://www.cocoinbox.com/",
    serviceSlug: "logiciel-sur-mesure",
    pages: [],
  },
  {
    slug: "uas",
    title: "UAS",
    category: "E-Commerce",
    year: "2023",
    city: "Casablanca",
    country: "Maroc",
    description:
      "Universal Aviation Services. Solutions e-commerce pour le secteur aéronautique au Maroc.",
    url: "https://uas.ma/",
    serviceSlug: "creation-site-web",
    pages: [],
  },
  {
    slug: "tourispeak",
    title: "Tourispeak",
    category: "Plate-forme",
    year: "2024",
    city: "Montréal",
    country: "Canada",
    description:
      "Réseau collaboratif dédié à l'industrie du tourisme et au partage d'expertises.",
    url: "https://tourispeak.com/",
    serviceSlug: "logiciel-sur-mesure",
    pages: [{ label: "À propos", href: "https://tourispeak.com/about-us/" }],
  },
  {
    slug: "agency-wonderland",
    title: "Agency Wonderland",
    category: "Vitrine",
    year: "2024",
    city: "Marrakech",
    country: "Maroc",
    description:
      "Studio de création et production visuelle basé à Marrakech, explorant les frontières du design contemporain.",
    url: "http://agencywonderland.com/",
    serviceSlug: "design-graphique",
    pages: [{ label: "Galerie", href: "http://agencywonderland.com/gallery-grid/" }],
  },
  {
    slug: "snapchat-collect",
    title: "Snapchat Collect",
    category: "Plate-forme",
    year: "2024",
    city: "Tanger",
    country: "Maroc",
    description:
      "Solution de collecte et redirection intelligente pour campagnes sociales, opérant entre Marseille et Tanger.",
    url: "https://snapchat-collect.vercel.app/fr",
    serviceSlug: "api-backend",
    pages: [],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function projectsForService(slug: string) {
  return projects.filter((project) => project.serviceSlug === slug);
}
