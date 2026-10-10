export type Service = {
  slug: string;
  title: string;
  menu: string;
  summary: string;
  problem: string;
  includes: string[];
  audience: string;
  primaryKeyword: string;
  href?: string;
  sections?: { heading: string; paragraphs: string[] }[];
  faqs?: { q: string; a: string }[];
  links?: { href: string; label: string }[];
  plugins?: { name: string; version: string; href: string; summary: string; needs: string }[];
  en?: { h1: string; summary: string; sections: { heading: string; paragraphs: string[] }[] };
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
  problem?: string;
  solution?: string;
  result?: string;
  shot?: string;
  screens?: { src: string; width: number; height: number }[];
};

export const services: Service[] = [
  {
    slug: "creation-site-web",
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
    title: "Création de site web à Casablanca",
    sections: [
      {
        heading: "Ce que la page doit obtenir",
        paragraphs: [
          "Byte Force construit le site pour qu'une visite devienne une demande. La première page dit qui vous êtes, ce que vous vendez, et comment écrire. Le formulaire arrive avant le bas de page.",
          "Le bureau est au Technopark, à Casablanca. Le site peut servir une entreprise au Maroc, ou un projet déjà suivi en France.",
        ],
      },
      {
        heading: "Ce qui est livré",
        paragraphs: [
          "L'arborescence part des pages utiles au devis, pas d'un menu décoratif. Les textes sont en français. Les titres, la meta, le sitemap et les données structurées font partie de la livraison.",
          "Escapade Florale et Meubles de Septentrion sont des boutiques en ligne. Nu Lille, Ambulances Valcq et Les Hauts Paysages sont des sites vitrines. UAS est le site e-commerce livré à Casablanca en 2023. Le code et les comptes d'hébergement remis reviennent au client.",
        ],
      },
    ],
    faqs: [
      {
        q: "Faites-vous un site vitrine et une boutique ?",
        a: "Oui. Le choix dépend de ce que le visiteur doit pouvoir faire : demander un devis, ou commander. On ne livre pas les deux si un seul parcours suffit.",
      },
      {
        q: "Le référencement est-il inclus ?",
        a: "La base technique oui : titres, meta, sitemap, données structurées. Une stratégie de pages pour des requêtes commerciales est le service de référencement, à part.",
      },
      {
        q: "À qui écrire ?",
        a: "Le formulaire de contact, l'email ou le +212 666 650 696. Réponse sous un jour ouvré. Le bureau est au Technopark, boulevard Dammam, Aïn Chock.",
      },
    ],
    links: [
      { href: "/contact", label: "Parler d'un site" },
      { href: "/services/referencement-seo", label: "Référencement naturel" },
      { href: "/realisations", label: "Travaux publiés" },
    ],
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
    href: "/developpement-application-mobile-maroc",
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
    href: "/developpement-logiciel-sur-mesure-maroc",
  },
  {
    slug: "referencement-seo",
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
    primaryKeyword: "référencement naturel Casablanca",
    title: "Référencement naturel à Casablanca",
    sections: [
      {
        heading: "Une URL par intention d'achat",
        paragraphs: [
          "Byte Force ne promet pas une position. Le travail est de publier une page par requête commerciale, avec un titre, une meta et un texte qui répondent à cette requête, puis un lien vers le formulaire.",
          "Les pages qui se font concurrence sont fusionnées ou retirées de l'index. Une ville où Byte Force n'a pas de bureau n'a pas sa propre page.",
        ],
      },
      {
        heading: "Ce qui est suivi",
        paragraphs: [
          "On part des recherches qui précèdent une demande : création de site, logiciel sur mesure, application, hébergement, à Casablanca ou au Maroc. Le suivi regarde les pages publiées et les sujets encore absents.",
          "Le bureau est au Technopark, Casablanca. Écrire pour dire quelles pages doivent ramener des demandes.",
        ],
      },
    ],
    faqs: [
      {
        q: "Garantissez-vous la première place sur Google ?",
        a: "Non. Personne ne peut garantir une position. On peut garantir une page claire, indexable, et dédiée à une seule intention.",
      },
      {
        q: "Faut-il déjà un site ?",
        a: "Un site existant peut être repris. S'il n'y a pas encore de pages utiles au devis, la création du site vient avant le référencement.",
      },
      {
        q: "Comment démarrer ?",
        a: "Le formulaire demande le nom, l'email et le projet. Réponse sous un jour ouvré, au +212 666 650 696 ou par email.",
      },
    ],
    links: [
      { href: "/contact", label: "Parler du référencement" },
      { href: "/services/creation-site-web", label: "Création de site web" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
    ],
  },
  {
    slug: "hebergement",
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
    title: "Hébergement web au Maroc",
    sections: [
      {
        heading: "La mise en ligne fait partie du projet",
        paragraphs: [
          "Byte Force met le site ou l'application en ligne, avec le certificat et le nom de domaine. Les sauvegardes et la surveillance de la disponibilité évitent qu'une campagne tombe sur une page fermée.",
          "Il n'y a pas de pourcentage de disponibilité affiché : on dit ce qui est surveillé, et on corrige quand la page ne répond plus.",
        ],
      },
    ],
    faqs: [
      {
        q: "Hébergez-vous seulement les sites Byte Force ?",
        a: "Le cas le plus simple est un projet déjà livré par le studio. Un site existant peut être repris après un audit, si la reprise est le chemin honnête.",
      },
      {
        q: "Où sont les serveurs ?",
        a: "Le bureau est à Casablanca. L'hébergement est choisi pour le projet, pas pour une ville du serveur. Les comptes remis reviennent au client.",
      },
    ],
    links: [
      { href: "/contact", label: "Parler de l'hébergement" },
      { href: "/services/maintenance", label: "Maintenance" },
    ],
  },
  {
    slug: "design-graphique",
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
    title: "Design graphique à Casablanca",
    sections: [
      {
        heading: "Le design sert la lecture",
        paragraphs: [
          "Byte Force aligne la direction visuelle avec l'offre : pages d'accueil, pages service, et des supports simples pour les réseaux. Le visiteur doit comprendre ce qui est vendu avant de demander un devis.",
          "Agency Wonderland, à Marrakech, est un site de studio visuel livré en 2024. Les fichiers réutilisables restent à l'équipe.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le design est-il séparé du site ?",
        a: "Il peut l'être, pour une identité ou des supports. Sur un site, le design et les pages partent ensemble, pour que le formulaire soit lisible.",
      },
    ],
    links: [
      { href: "/contact", label: "Parler du design" },
      { href: "/realisations/agency-wonderland", label: "Agency Wonderland" },
    ],
  },
  {
    slug: "api-backend",
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
    title: "Développement API sur mesure",
    sections: [
      {
        heading: "Une seule source pour les données",
        paragraphs: [
          "Byte Force écrit le contrat d'API, l'authentification et les règles métier côté serveur. Le site et l'application lisent la même source : clients, commandes, contenus, droits.",
          "Snapchat Collect, entre Marseille et Tanger, est un flux de collecte et de redirection déjà en ligne en 2024. Ce n'est pas un ERP. C'est un branchement court, documenté pour l'équipe.",
          "Le contrat dit ce que l'appel reçoit et ce qu'il renvoie. L'authentification dit qui a le droit d'appeler. La note pour l'équipe tient en quelques pages : assez pour brancher le site sans relire tout le code. On n'écrit pas une API quand un formulaire envoie déjà le message au bon endroit.",
        ],
      },
    ],
    faqs: [
      {
        q: "Faut-il remplacer les outils déjà en place ?",
        a: "Non, si un branchement suffit. On remplace un outil seulement quand le contournement coûte plus cher que le logiciel.",
      },
    ],
    links: [
      { href: "/contact", label: "Parler d'une API" },
      { href: "/developpement-logiciel-sur-mesure-maroc/automatisation", label: "Automatisation" },
      { href: "/realisations/snapchat-collect", label: "Snapchat Collect" },
    ],
  },
  {
    slug: "maintenance",
    menu: "Maintenance",
    summary:
      "Corrections, mises à jour et petites évolutions au Technopark, à Casablanca, pour que le site continue à produire des demandes.",
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
    title: "Maintenance de site à Casablanca",
    sections: [
      {
        heading: "Garder le formulaire ouvert",
        paragraphs: [
          "Byte Force corrige après la mise en ligne, met à jour ce qui concerne la sécurité, et vérifie le formulaire et les pages qui reçoivent les demandes. Une petite évolution de page fait partie du suivi.",
          "Un correctif isolé peut être devisé sans abonnement. Le bureau est à Casablanca, la réponse part sous un jour ouvré.",
          "Le suivi porte sur un site ou un outil déjà publié. On regarde d'abord le parcours qui doit produire une demande : la page d'offre, le formulaire, le message qui part, et la page qui confirme l'envoi. Si un de ces points casse après une mise à jour, la correction vise ce point, pas une refonte.",
          "Une petite évolution, c'est un texte, un bloc ou un lien qui ne dit plus ce que l'entreprise fait. On ne change pas l'offre à la place du client. On met la page au niveau de ce qui est vrai aujourd'hui, puis on revérifie que le formulaire part encore.",
          "Le bureau est au Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca. On répond du lundi au vendredi, de 9h à 19h, par le formulaire, par email ou par WhatsApp. Aucun prix n'est affiché ici. Le premier message dit ce qui bloque, sur quel site, et depuis quand. Si le site a été écrit par quelqu'un d'autre, on le lit avant de le corriger. Si le code peut être repris, on le dit. Si une reprise complète est le chemin honnête, on le dit aussi, avant de toucher au site. Le code livré reste au client.",
        ],
      },
    ],
    faqs: [
      {
        q: "La maintenance couvre-t-elle un site fait par quelqu'un d'autre ?",
        a: "Après un audit, oui, si le code peut être repris. Si une reprise complète est le chemin honnête, on le dit avant de corriger.",
      },
    ],
    links: [
      { href: "/contact", label: "Parler de la maintenance" },
      { href: "/services/audit-correction", label: "Audit et correction" },
    ],
  },
  {
    slug: "audit-correction",
    menu: "Audit",
    summary:
      "Lecture d'un produit ou d'un site déjà en ligne: ce qui bloque, ce qui casse, et ce qu'il faut corriger en premier.",
    problem:
      "Un outil livré par quelqu'un d'autre peut être lent, fragile, ou impossible à faire évoluer. Avant de tout reprendre, il faut voir ce qui tient.",
    includes: [
      "Lecture du parcours et du code existant",
      "Liste des bugs et des risques, par priorité",
      "Correctifs sur les points qui bloquent l'usage",
    ],
    audience: "Équipes qui ont déjà un produit ou un site, et un problème précis.",
    primaryKeyword: "audit site web Casablanca",
    title: "Audit et correction d'un site",
    sections: [
      {
        heading: "Lire avant de tout reprendre",
        paragraphs: [
          "Byte Force lit le parcours et le code déjà en ligne. La liste sépare ce qui bloque l'usage, ce qui est fragile, et ce qui peut attendre. Les correctifs portent d'abord sur ce qui empêche un client de finir.",
          "Il n'y a pas de note sur 100. Le livrable est une liste priorisée, puis les corrections convenues.",
        ],
      },
    ],
    faqs: [
      {
        q: "L'audit oblige-t-il à refaire le site ?",
        a: "Non. Beaucoup de blocages se corrigent sur le produit existant. La refonte n'est proposée que si le code ne peut plus évoluer.",
      },
    ],
    links: [
      { href: "/contact", label: "Demander un audit" },
      { href: "/solutions/moderniser-application", label: "Moderniser une application" },
    ],
  },
  {
    slug: "plugins-wordpress",
    menu: "Plugins",
    summary:
      "Plugins WordPress pour un site déjà en ligne au Maroc. Quatre fichiers : Downloader, Connect, Ecommerce, Optimize Media.",
    problem:
      "Une extension du marché force parfois le site à changer, ou casse à la mise à jour. Un plugin sur mesure ajoute le geste qui manque, sans remplacer WordPress.",
    includes: [
      "Lecture du site et des extensions déjà installées",
      "Plugin PHP branché au thème, ou à WooCommerce si le site l'utilise",
      "Réglages que l'équipe peut utiliser sans toucher au code",
      "Correction après la mise en ligne",
    ],
    audience:
      "Entreprises qui ont déjà un site WordPress et un geste qu'aucune extension du marché ne couvre.",
    primaryKeyword: "développement plugin WordPress Maroc",
    title: "Développement de plugin WordPress au Maroc",
    sections: [
      {
        heading: "Ajouter seulement le geste qui manque",
        paragraphs: [
          "Le site est déjà sous WordPress. La question est si le geste qui manque tient dans un plugin.",
          "Byte Force, au Technopark à Casablanca, lit les extensions déjà installées. Le plugin est du PHP branché au thème, ou à WooCommerce si la boutique est déjà là. L'équipe le règle sans ouvrir le code.",
          "On ne remplace pas WordPress quand le site tient. Les quatre plugins plus bas sont déjà écrits. Un cinquième s'écrit quand le geste n'est dans aucun d'eux.",
        ],
      },
    ],
    plugins: [
      {
        name: "Plugin Downloader",
        version: "1.0.0",
        href: "/plugin-downloader.zip",
        summary:
          "Depuis wp-admin, on cherche un plugin sur le répertoire officiel WordPress.org, on télécharge le zip officiel, on l'installe ou on l'active. Les données viennent de l'API WordPress.org. Le plugin n'accepte pas une adresse quelconque à télécharger. Il faut le droit d'installer des plugins. WordPress 6.0 et PHP 7.4.",
        needs: "WordPress 6.0 · PHP 7.4",
      },
      {
        name: "PDM Connect",
        version: "1.0.0",
        href: "/pdm-connect.zip",
        summary:
          "Le fichier s'appelle NextJS Page Sync. À l'enregistrement d'une page ou d'un article, il envoie la structure des blocs Gutenberg vers une API Next.js dont l'adresse est dans les réglages.",
        needs: "WordPress · une API Next.js",
      },
      {
        name: "PDM Ecommerce",
        version: "1.0.0",
        href: "/pdm-ecommerce.zip",
        summary:
          "Une API pour une boutique WooCommerce déjà en place. L'accès passe par une clé publique et une clé secrète. Les routes publiées couvrent les catégories, les produits, la recherche et le panier.",
        needs: "WooCommerce",
      },
      {
        name: "PDM Optimize Media",
        version: "1.0.1",
        href: "/pdm-optimize-media.zip",
        summary:
          "Il compresse les images de la médiathèque sans changer leur adresse. La conversion WebP est possible. Si le fichier optimisé est plus lourd, il n'est pas gardé. Il faut GD ou Imagick. WordPress 5.8 et PHP 7.4.",
        needs: "WordPress 5.8 · PHP 7.4 · GD ou Imagick",
      },
    ],
    en: {
      h1: "WordPress plugins, written for the site you already have",
      summary:
        "Byte Force writes WordPress plugins for a site that is already online. Four can be downloaded: Plugin Downloader, PDM Connect, PDM Ecommerce and PDM Optimize Media.",
      sections: [
        {
          heading: "Add only the missing action",
          paragraphs: [
            "The site is already on WordPress. The question is whether the missing action fits a plugin.",
            "Byte Force, at Technopark in Casablanca, reads the plugins already installed. The plugin is PHP hooked to the theme, or to WooCommerce if the shop is already there. The team changes the settings without opening the code.",
            "WordPress stays when the site holds. The four plugins below are already written. A fifth is written when the action is in none of them.",
          ],
        },
        {
          heading: "When to write",
          paragraphs: [
            "Write if the site is already on WordPress and a market plugin forces a change of path, or breaks on every update. Say the action the team must be able to take, and what is already installed.",
            "The first conversation is thirty minutes and it is free. A reply goes out within one business day. The form is on this page, or at /contact.",
          ],
        },
      ],
    },
    faqs: [
      {
        q: "Une extension du marché ne suffit-elle pas ?",
        a: "Souvent si. Le plugin sur mesure commence quand l'extension force le site à changer, ou casse à chaque mise à jour.",
      },
      {
        q: "Peut-on installer les quatre plugins déjà écrits ?",
        a: "Oui. Chaque zip sur cette page s'installe par Extensions, Ajouter, Téléverser une extension. Un autre geste s'écrit après le premier échange.",
      },
    ],
    links: [
      { href: "/contact", label: "Parler d'un plugin" },
      { href: "/services/creation-site-web", label: "Création de site web" },
    ],
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
    shot: "/work/nu-lille.jpg",
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
    shot: "/work/meubles-de-septentrion.jpg",
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
    title: "Proche de moi",
    category: "Plate-forme",
    year: "2024",
    city: "Lille",
    country: "France",
    description:
      "Plateforme de mise en relation pour les boutiques de proximité. En ligne à Lille depuis 2024, avec la recherche et la carte.",
    url: "https://www.prochedemoi.fr/",
    serviceSlug: "logiciel-sur-mesure",
    problem:
      "Les commerces de proximité étaient difficiles à trouver dans un seul parcours.",
    solution:
      "Une plateforme publiée, avec la recherche, la carte et les fiches d'établissements.",
    result: "Le site est en ligne à Lille depuis 2024.",
    shot: "/work/proche.jpg",
    pages: [
      { label: "Recherche sur Proche de moi", href: "https://www.prochedemoi.fr/search?q=lille" },
      { label: "Carte sur Proche de moi", href: "https://www.prochedemoi.fr/map" },
      { label: "Lille sur Proche de moi", href: "https://www.prochedemoi.fr/france/nord-59/lille" },
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
    shot: "/work/ambulances-valcq.jpg",
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
    shot: "/work/les-hauts-paysages.jpg",
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
    problem: "Le don et les organisations n'avaient pas d'espace commun.",
    solution: "Une plateforme publiée pour les organisations et les dons.",
    result: "Le site est en ligne à Casablanca depuis 2024.",
    shot: "/work/dealkhir.jpg",
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
      "Produit publié pour l'email temporaire, les fichiers chiffrés et les notes sécurisées. En ligne à Montréal depuis l'année 2024.",
    url: "https://www.cocoinbox.com/",
    serviceSlug: "logiciel-sur-mesure",
    problem:
      "L'email, les fichiers et les notes partaient sans limite claire de durée ou de destinataire.",
    solution:
      "Un produit publié pour l'email temporaire, les fichiers chiffrés et les notes sécurisées.",
    result: "Le produit est en ligne, depuis Montréal, depuis 2024.",
    shot: "/work/coco-inbox.jpg",
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
    shot: "/work/uas.jpg",
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
    problem: "Le réseau touristique n'avait pas de site public pour les visites.",
    solution: "Un site publié pour des visites audio et le réseau, plus une application Android sur le Play Store.",
    result: "Le site est en ligne, depuis Montréal, depuis 2024. L'application Android est sur le Play Store.",
    shot: "/work/tourispeak.jpg",
    screens: [
      { src: "/work/tourispeak-app-1.webp", width: 273, height: 592 },
      { src: "/work/tourispeak-app-2.webp", width: 273, height: 592 },
      { src: "/work/tourispeak-app-3.webp", width: 273, height: 592 },
      { src: "/work/tourispeak-app-4.webp", width: 273, height: 592 },
    ],
    pages: [
      { label: "À propos", href: "https://tourispeak.com/about-us/" },
      {
        label: "Application Android",
        href: "https://play.google.com/store/apps/details?id=com.tourispeakApp.tourispeakApp",
      },
    ],
  },
  {
    slug: "zainek",
    title: "Zainek",
    category: "Plate-forme",
    year: "2026",
    city: "Safi",
    country: "Maroc",
    description:
      "Application Android et site pour trouver un salon, un coiffeur ou un nail artist, et demander un rendez-vous.",
    url: "https://www.zainek.com/",
    serviceSlug: "applications-mobiles",
    problem: "Chercher un salon ou un nail artist et réserver n'avait pas d'application publique.",
    solution: "Zainek : une application Android sur le Play Store, et le site zainek.com.",
    result: "L'application et le site sont en ligne. La fiche Play indique une mise à jour le 30 août 2026.",
    shot: "/work/zainek-site.png",
    screens: [
      { src: "/work/zainek-1.webp", width: 265, height: 592 },
      { src: "/work/zainek-2.webp", width: 265, height: 592 },
      { src: "/work/zainek-3.webp", width: 265, height: 592 },
    ],
    pages: [
      {
        label: "Application Android",
        href: "https://play.google.com/store/apps/details?id=com.nailsclient.zainek",
      },
    ],
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
    shot: "/work/agency-wonderland.png",
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
    shot: "/work/snapchat-collect.png",
    pages: [],
  },
  {
    slug: "crm-cocoinbox",
    title: "CRM Cocoinbox",
    category: "Plate-forme",
    year: "2026",
    city: "Montréal",
    country: "Canada",
    description:
      "CRM Cocoinbox : le courrier prépare le dossier, le pipeline et les relances. Produit en ligne depuis Montréal, année 2026.",
    url: "https://crm.cocoinbox.com/",
    serviceSlug: "logiciel-sur-mesure",
    problem: "Le courrier arrivait sans que le dossier, le pipeline et les relances soient déjà sur la même page.",
    solution: "Une page publique pour ce CRM. La capture montre la boîte, les fiches, et les colonnes Nouveau, Qualifié, Devis et Gagné.",
    result: "crm.cocoinbox.com est en ligne. L'année affichée est 2026. La ville est Montréal, comme Coco Inbox. Les montants dessinés sur la capture ne sont pas un chiffre du studio.",
    shot: "/work/crm.cocoinbox.png",
    pages: [],
  },
  {
    slug: "booking-proche-de-moi",
    title: "Réservation Proche de moi",
    category: "Plate-forme",
    year: "2026",
    city: "Lille",
    country: "France",
    description:
      "Réservation Proche de moi : l'établissement se connecte à son tableau de bord. Elle est en ligne à Lille depuis l'année 2026.",
    url: "https://booking.prochedemoi.fr/",
    serviceSlug: "logiciel-sur-mesure",
    problem: "La recherche des commerces et la réservation d'un établissement n'étaient pas la même adresse.",
    solution:
      "booking.prochedemoi.fr ouvre la connexion de l'établissement. La fiche de Walid Moultamiss nomme Next.js, TypeScript et Strapi pour ce travail, avec prochedemoi.fr.",
    result: "La page est en ligne à Lille depuis 2026. Ce n'est pas un nombre de réservations.",
    shot: "/work/booking.prochedemoi.png",
    pages: [],
  },
  {
    slug: "infinitebridge",
    title: "Infinitebridge",
    category: "Vitrine",
    year: "2023",
    city: "Maroc",
    country: "Maroc",
    description:
      "Site public d'Infinitebridge, société informatique au Maroc. La page d'accueil est en ligne sur infinitebridge.ma depuis 2023.",
    url: "https://www.infinitebridge.ma/",
    serviceSlug: "creation-site-web",
    shot: "/work/infinitebridge.png",
    pages: [],
  },
  {
    slug: "palais-mehdi",
    title: "Palais Mehdi",
    category: "Vitrine",
    year: "2026",
    city: "Marrakech",
    country: "Maroc",
    description:
      "Réservation du Palais Mehdi : dates, adultes, enfants, puis les disponibilités. En ligne à Marrakech depuis 2026 également.",
    url: "https://booking.palais-mehdi.com/",
    serviceSlug: "creation-site-web",
    shot: "/work/palaismehdi.png",
    pages: [],
  },
  {
    slug: "yoursmile",
    title: "YourSmile",
    category: "Plate-forme",
    year: "2025",
    city: "Casablanca",
    country: "Maroc",
    description:
      "YourSmile : comptes praticien et patient pour les aligneurs dentaires. Le site public cite Casablanca. En ligne depuis 2025.",
    url: "https://www.yoursmile.ma/",
    serviceSlug: "logiciel-sur-mesure",
    problem: "Le parcours des aligneurs demandait un écran pour le praticien, le patient et le back-office.",
    solution:
      "Le site public yoursmile.ma. Le CV décrit le CRM : administration, dentistes, back-office, API GraphQL, Node.js, MongoDB, droits d'accès, interfaces Next.js.",
    result: "Le site est en ligne depuis 2025. La page publique cite Casablanca. Les délais écrits sur cette page ne sont pas une mesure de Byte Force.",
    shot: "/work/yoursmile.png",
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
