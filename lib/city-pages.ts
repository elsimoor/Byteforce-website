export type CityPage = {
  slug: string;
  city: string;
  country: "Maroc" | "France" | "Canada";
  pillar: { href: string; label: string };
  pillarCrumb: string;
  title: string;
  description: string;
  h1: string;
  keyword: string;
  lede: string;
  sections: { heading: string; paragraphs: string[] }[];
  services: { href: string; label: string }[];
  studies: string[];
};

const contact = "Le formulaire, l'email ou le +212 666 650 696. Réponse sous un jour ouvré. Aucun prix n'est affiché : le montant suit le périmètre.";

export const cityPages: CityPage[] = [
  {
    slug: "casablanca",
    city: "Casablanca",
    country: "Maroc",
    pillar: { href: "/developpement-logiciel-maroc", label: "Développement logiciel au Maroc" },
    pillarCrumb: "Développement logiciel au Maroc",
    title: "Byte Force à Casablanca · Studio logiciel",
    description:
      "Studio de développement logiciel à Casablanca. Technopark, Aïn Chock, siège de Byte Force. Logiciels métier, CRM, SaaS pour entreprises casablancaises.",
    h1: "Byte Force à Casablanca",
    keyword: "Byte Force à Casablanca",
    lede: "Byte Force est un studio logiciel à Casablanca. L'adresse est le Technopark, boulevard Dammam, Aïn Chock, 20001. Cette page dit où se trouve le bureau et ce qui a déjà été publié dans la ville. Le service de développement est sur une autre URL, pour ne pas mélanger la présence locale et l'offre.",
    sections: [
      {
        heading: "Le studio à Casablanca",
        paragraphs: [
          "Le seul établissement est au Technopark, boulevard Dammam, Aïn Chock. On reçoit sur rendez-vous, du lundi au vendredi, de 9 h à 19 h. Il n'y a pas de seconde adresse à Anfa, à Maarif ou ailleurs dans la ville. Le téléphone est le +212 666 650 696.",
          "Venir au bureau sert quand le fichier ou le dossier doit être vu ensemble. Un premier échange de trente minutes peut aussi se faire en visio. La réponse à un message part sous un jour ouvré.",
          "Cette page n'est pas le devis du logiciel. Elle situe le studio. Pour le travail lui-même, la page est le développement logiciel à Casablanca.",
        ],
      },
      {
        heading: "L'écosystème tech de Casablanca",
        paragraphs: [
          "Casablanca concentre le Technopark et CasaNearshore, des équipes produit, et beaucoup d'entreprises qui font encore tourner une opération dans un tableur. Le studio est dans ce paysage, pas au-dessus. On ne prétend pas représenter le parc, ni publier un classement des acteurs.",
          "Le besoin que Byte Force prend est précis : un processus qui ne rentre plus dans l'outil du marché, un site qui doit recevoir une demande, une application que l'équipe rouvre le lendemain. Le reste se refuse.",
        ],
      },
      {
        heading: "Projets publiés à Casablanca",
        paragraphs: [
          "Deux fiches du catalogue sont à Casablanca. Dealkhir est une plateforme de dons et d'organisations, en ligne depuis 2024. UAS est une boutique aéronautique. Ce sont des produits publiés, pas une preuve que tous les métiers de la ville ont déjà un logiciel Byte Force.",
          "On ne publie pas ici de montant de dons, de nombre de commandes, ni de témoignage. La preuve est l'adresse en ligne, sur la fiche de chaque projet.",
        ],
      },
      {
        heading: "Ce que l'on construit depuis ce bureau",
        paragraphs: [
          "Les services partent de Casablanca pour tout le Maroc : logiciel sur mesure, site, application mobile, API, design, audit, hébergement, maintenance. Le cœur reste le logiciel d'entreprise. Le site et le plugin WordPress existent quand le projet en a besoin.",
          contact,
        ],
      },
    ],
    services: [
      { href: "/developpement-logiciel-casablanca", label: "Développement logiciel à Casablanca" },
      { href: "/services", label: "Tous les services" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
    ],
    studies: ["dealkhir", "uas"],
  },
  {
    slug: "marrakech",
    city: "Marrakech",
    country: "Maroc",
    pillar: { href: "/developpement-logiciel-maroc", label: "Développement logiciel au Maroc" },
    pillarCrumb: "Développement logiciel au Maroc",
    title: "Développement logiciel à Marrakech · Byte Force",
    description:
      "Développement logiciel à Marrakech. Applications tourisme, hôtellerie et commerces. Studio basé à Casablanca, interventions à Marrakech.",
    h1: "Développement logiciel à Marrakech",
    keyword: "développement logiciel Marrakech",
    lede: "Byte Force développe un logiciel, un site ou une application pour une entreprise à Marrakech, depuis le bureau de Casablanca. Il n'y a pas d'agence sur place. Deux projets du catalogue sont publiés dans la ville : un séjour et un studio visuel.",
    sections: [
      {
        heading: "Le numérique à Marrakech",
        paragraphs: [
          "Marrakech vit du tourisme, de l'hôtellerie et de commerces qui doivent être compris avant le premier message. Un visiteur cherche un séjour, une date, une façon de réserver. Un studio veut montrer un travail. Ce n'est pas le même produit qu'un stock d'usine, et on ne le traite pas comme tel.",
          "La ville a aussi des équipes qui lancent un outil. Le critère reste le geste : ce que quelqu'un doit pouvoir faire, et ce qui existe déjà. Si une page suffit, on construit une page. Si un dossier doit être suivi par plusieurs personnes, c'est un logiciel.",
        ],
      },
      {
        heading: "Projets réalisés à Marrakech",
        paragraphs: [
          "Palais Mehdi est un site de réservation de séjour. Agency Wonderland est le site d'un studio visuel. Les deux sont dans le catalogue, avec leur adresse publique. On n'ajoute pas un taux de réservation ni un avis client que le dossier ne contient pas.",
          "Ces fiches montrent qu'un livrable pour Marrakech peut être en ligne sans bureau dans la ville. Elles ne couvrent pas l'hôtellerie entière.",
        ],
      },
      {
        heading: "Services pour une entreprise de Marrakech",
        paragraphs: [
          "Le site, quand l'offre doit être lue et qu'une demande doit partir. L'application web, quand un client suit une réservation. Le logiciel sur mesure, quand l'équipe ressaisit. L'application mobile, seulement si le geste est sur le téléphone.",
          "Le cadrage se fait en visio. Un déplacement à Marrakech se décide s'il est nécessaire pour voir le métier, et il est écrit dans le périmètre. Il n'est pas inclus par défaut.",
        ],
      },
      {
        heading: "Travailler à distance depuis Casablanca",
        paragraphs: [
          "Le fuseau est le même. Les points tiennent dans la journée. Le français est la langue du cadrage, sauf demande contraire. Le dépôt et les comptes livrés reviennent à l'entreprise.",
          contact,
        ],
      },
    ],
    services: [
      { href: "/services/creation-site-web", label: "Création de site web" },
      { href: "/application-web-sur-mesure-maroc", label: "Application web" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
    ],
    studies: ["palais-mehdi", "agency-wonderland"],
  },
  {
    slug: "tanger",
    city: "Tanger",
    country: "Maroc",
    pillar: { href: "/developpement-logiciel-maroc", label: "Développement logiciel au Maroc" },
    pillarCrumb: "Développement logiciel au Maroc",
    title: "Développement logiciel à Tanger · Byte Force",
    description:
      "Développement logiciel à Tanger. Solutions pour la zone franche, logistique et industrie. Studio à Casablanca, projets à Tanger.",
    h1: "Développement logiciel à Tanger",
    keyword: "développement logiciel Tanger",
    lede: "Byte Force conçoit un logiciel pour une entreprise à Tanger depuis Casablanca. Le bureau n'est pas dans la zone franche. Le projet publié qui cite Tanger est une collecte de campagnes, pas un logiciel de port.",
    sections: [
      {
        heading: "Tanger et le numérique",
        paragraphs: [
          "Tanger Med, la zone franche et l'industrie créent des flux : un colis, un dossier, une campagne, une validation. Le logiciel utile est souvent un passage entre deux outils déjà en place, pas une suite complète. On le dit avant d'écrire.",
          "Une entreprise tangéroise peut aussi avoir besoin d'un site qui reçoit une demande, ou d'un outil interne que l'équipe ouvre le matin. Le choix se fait sur le geste, pas sur le nom de la ville.",
        ],
      },
      {
        heading: "Ce qui est déjà publié",
        paragraphs: [
          "Snapchat Collect est une collecte et une redirection de campagnes, entre Marseille et Tanger, en ligne depuis 2024. C'est un flux court. Ce n'est pas un ERP, et on ne le présente pas comme la preuve d'un logiciel portuaire.",
        ],
      },
      {
        heading: "Services pour une entreprise tangéroise",
        paragraphs: [
          "L'automatisation, quand la ressaisie entre deux outils est le problème. L'API, quand les systèmes doivent se parler. Le logiciel métier, quand un seul métier a ses règles. Le site, quand il manque une page qui explique et qui reçoit.",
          "Le cadrage est en visio, en français, sur les heures du Technopark. Un déplacement se discute s'il faut voir une ligne, un quai ou un atelier que l'écran ne montre pas.",
        ],
      },
      {
        heading: "La distance",
        paragraphs: [
          "Casablanca et Tanger ne partagent pas un bureau. Elles partagent une langue de travail et une journée. Le code livré est à l'entreprise. Le studio ne garde pas l'hébergement comme condition.",
          contact,
        ],
      },
    ],
    services: [
      { href: "/developpement-logiciel-sur-mesure-maroc/automatisation", label: "Automatisation" },
      { href: "/services/api-backend", label: "API" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
    ],
    studies: ["snapchat-collect"],
  },
  {
    slug: "safi",
    city: "Safi",
    country: "Maroc",
    pillar: { href: "/developpement-logiciel-maroc", label: "Développement logiciel au Maroc" },
    pillarCrumb: "Développement logiciel au Maroc",
    title: "Développement logiciel à Safi · Byte Force",
    description:
      "Développement logiciel à Safi. Solutions digitales pour PME, industrie et pêche. Studio à Casablanca, projets pour Safi.",
    h1: "Développement logiciel à Safi",
    keyword: "développement logiciel Safi",
    lede: "Byte Force travaille pour une entreprise à Safi depuis Casablanca. Le projet publié dans la ville est Zainek, une application et un site de rendez-vous. Il n'y a pas de bureau à Safi.",
    sections: [
      {
        heading: "Le contexte à Safi",
        paragraphs: [
          "Safi mêle industrie, pêche et PME. Beaucoup d'opérations tiennent encore dans un cahier, un fichier ou le téléphone d'une personne. Le logiciel a un sens quand deux personnes doivent voir le même état, ou quand un client doit faire un geste sans appeler.",
          "Il n'a pas de sens pour remplacer un tableur de dix lignes ou une comptabilité déjà couverte. Le premier échange sert aussi à le dire.",
        ],
      },
      {
        heading: "Besoins que l'on sait cadrer",
        paragraphs: [
          "Un stock que deux personnes écrivent. Une facture ressaisie. Un suivi de commande qui se perd entre un message et un fichier. Une prise de rendez-vous qui devrait tenir dans une application. Chacun de ces sujets est un périmètre, pas un slogan.",
          "Zainek montre le dernier cas : trouver un salon et demander un rendez-vous, avec une application Android et un site. La fiche Play et le site sont publics. On n'invente pas un volume de réservations.",
        ],
      },
      {
        heading: "Services pour une PME de Safi",
        paragraphs: [
          "Le logiciel métier pour un seul geste. Le site quand l'offre doit être lue. L'application mobile seulement si le téléphone est l'endroit du geste. La maintenance ensuite, si le livrable doit rester ouvert.",
          "On ne vend pas une transformation de la ville. On écrit le processus que l'entreprise montre.",
        ],
      },
      {
        heading: "Depuis Casablanca",
        paragraphs: [
          "Les points sont en visio. Le français est la langue de travail. Un déplacement à Safi n'est pas le mode courant. S'il est nécessaire, il est dans le périmètre.",
          contact,
        ],
      },
    ],
    services: [
      { href: "/developpement-logiciel-sur-mesure-maroc/logiciel-metier", label: "Logiciel métier" },
      { href: "/developpement-application-mobile-maroc", label: "Application mobile" },
      { href: "/services/creation-site-web", label: "Site web" },
    ],
    studies: ["zainek"],
  },
  {
    slug: "rabat",
    city: "Rabat",
    country: "Maroc",
    pillar: { href: "/developpement-logiciel-maroc", label: "Développement logiciel au Maroc" },
    pillarCrumb: "Développement logiciel au Maroc",
    title: "Développement logiciel à Rabat · Byte Force",
    description:
      "Développement logiciel à Rabat. Applications pour administrations, institutions et entreprises. Studio à Casablanca, projets pour Rabat.",
    h1: "Développement logiciel à Rabat",
    keyword: "développement logiciel Rabat",
    lede: "Byte Force répond à une entreprise ou une institution à Rabat depuis Casablanca. Il n'y a pas de bureau dans la capitale, et aucun projet du catalogue n'est publié au nom d'une administration de Rabat. On ne l'invente pas.",
    sections: [
      {
        heading: "Rabat et le numérique",
        paragraphs: [
          "Rabat concentre des administrations, des institutions et des entreprises qui gravitent autour. Les demandes qui ont un sens pour un studio sont concrètes : un portail où un usager suit un dossier, une gestion de documents que plusieurs services voient, une ressaisie entre un fichier et un outil déjà payé.",
          "Un slogan de digitalisation ne suffit pas à ouvrir un projet. Il faut le geste, la personne qui le fait, et ce qui existe déjà.",
        ],
      },
      {
        heading: "Ce que l'on peut cadrer",
        paragraphs: [
          "Un espace où un citoyen ou un client voit l'état d'une demande, sans appeler. Un dossier partagé entre deux services, avec un droit de valider. Une extraction qui part d'un outil déjà en place, au lieu d'être recopiée.",
          "Byte Force n'est pas un intégrateur de marché public, et cette page ne le prétend pas. S'il y a une direction des systèmes, le dépôt et la mise en production se font avec elle.",
        ],
      },
      {
        heading: "Services",
        paragraphs: [
          "L'application web pour un portail. Le logiciel sur mesure pour un flux interne. L'API pour brancher ce qui est déjà là. Le site seulement si le besoin est d'expliquer et de recevoir une demande.",
        ],
      },
      {
        heading: "Casablanca et Rabat",
        paragraphs: [
          "Le trajet est d'environ une heure. Un rendez-vous au Technopark est possible. Un déplacement à Rabat se décide s'il faut voir le métier, et il est écrit. Le travail courant reste la visio, sur les heures du bureau.",
          contact,
        ],
      },
    ],
    services: [
      { href: "/application-web-sur-mesure-maroc", label: "Application web" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
      { href: "/services/api-backend", label: "API" },
    ],
    studies: [],
  },
  {
    slug: "fes",
    city: "Fès",
    country: "Maroc",
    pillar: { href: "/developpement-logiciel-maroc", label: "Développement logiciel au Maroc" },
    pillarCrumb: "Développement logiciel au Maroc",
    title: "Création site web à Fès | BYTE FORCE",
    description:
      "Création de site web et logiciel sur mesure à Fès : vitrine, e-commerce et gestion pour PME et artisans. Code garanti, devis gratuit en 24h.",
    h1: "Création de site web et développement logiciel à Fès",
    keyword: "création site web fès",
    lede: "Byte Force conçoit des sites internet professionnels, boutiques en ligne et logiciels métier pour les entreprises et artisans de Fès et de la région Fès-Meknès, depuis son studio au Technopark.",
    sections: [
      {
        heading: "Fès et le numérique",
        paragraphs: [
          "Fès a l'artisanat, le commerce, des PME et des universités. Une commande, un stock d'atelier ou un suivi client y vivent souvent dans un cahier ou un fichier que une seule personne comprend. Le logiciel commence quand une deuxième personne doit agir sur le même état, ou quand un acheteur doit voir une pièce sans appeler.",
          "On ne promet pas de « digitaliser la médina ». On regarde un geste.",
        ],
      },
      {
        heading: "Besoins typiques",
        paragraphs: [
          "Montrer un catalogue et recevoir une commande, quand le site est le bon outil. Tenir un stock et une facture dans le même endroit, quand le fichier se contredit. Suivre des clients et des relances, quand elles sortent de la mémoire d'une personne.",
          "Si un outil du marché couvre déjà ce geste, Byte Force le dit. Construire pour coller à une mauvaise habitude n'est pas le but.",
        ],
      },
      {
        heading: "Services",
        paragraphs: [
          "La création de site pour une vitrine ou une boutique. Le logiciel métier pour l'atelier ou le commerce. Le CRM sur mesure si le cycle de vente est le sujet. Chaque offre a sa page, pour ne pas tout mettre dans le même devis.",
        ],
      },
      {
        heading: "À distance",
        paragraphs: [
          "Le cadrage est en visio, en français, depuis le Technopark. Un déplacement à Fès n'est pas automatique. Le code et les comptes livrés reviennent à l'entreprise.",
          contact,
        ],
      },
    ],
    services: [
      { href: "/services/creation-site-web", label: "Création de site" },
      { href: "/developpement-logiciel-sur-mesure-maroc/logiciel-metier", label: "Logiciel métier" },
      { href: "/developpement-logiciel-sur-mesure-maroc/crm", label: "CRM sur mesure" },
    ],
    studies: [],
  },
  {
    slug: "agadir",
    city: "Agadir",
    country: "Maroc",
    pillar: { href: "/developpement-logiciel-maroc", label: "Développement logiciel au Maroc" },
    pillarCrumb: "Développement logiciel au Maroc",
    title: "Création site web & WordPress à Agadir | BYTE FORCE",
    description:
      "Agence web et développement WordPress à Agadir et Souss-Massa : sites vitrines, e-commerce, CRM et applications. Devis gratuit en 24h.",
    h1: "Création de site web et développement WordPress à Agadir",
    keyword: "création site wordpress agadir",
    lede: "Byte Force accompagne les entreprises d'Agadir, Taghazout et du Souss-Massa dans la création de sites WordPress performants, l'optimisation SEO locale et le développement de logiciels métier sur mesure depuis son studio au Technopark.",
    sections: [
      {
        heading: "Le web et le digital à Agadir et dans le Souss",
        paragraphs: [
          "Agadir et la région Souss-Massa combinent tourisme balnéaire, surf camps (Taghazout), agroalimentaire, coopératives d'argan et export. Ces entreprises ont besoin de sites web rapides, visibles sur Google au Maroc et à l'international, capables de convertir un visiteur en client ou en réservation sans friction.",
          "Nous concevons des sites WordPress sur mesure, sans thèmes lourds ni extensions inutiles : chargement en moins de 1,5 seconde, design responsive adapté aux touristes comme aux acheteurs B2B, et intégration multilingue (français, anglais, arabe).",
        ],
      },
      {
        heading: "Besoins fréquents à Agadir",
        paragraphs: [
          "Création de site vitrine et catalogue pour présenter des produits du terroir, hôtels, riads et activités touristiques.",
          "Développement WooCommerce ou boutique sur mesure avec paiement en dirhams (CMI) et devises internationales (Stripe / PayPal).",
          "Logiciel de gestion de réservations, planning de cours de surf ou suivi de commandes agroalimentaires pour remplacer les messages WhatsApp et les tableurs dispersés.",
        ],
      },
      {
        heading: "Services pour les entreprises d'Agadir",
        paragraphs: [
          "Création et refonte de site WordPress : architecture propre, sécurité renforcée, sauvegardes automatiques.",
          "Référencement naturel (SEO) local et national pour ranker sur Agadir, le Maroc et l'Europe.",
          "Développement logiciel et CRM sur mesure pour automatiser la gestion commerciale.",
        ],
      },
      {
        heading: "Collaboration fluide à distance",
        paragraphs: [
          "Tous les échanges se font en visioconférence (Google Meet, WhatsApp) aux horaires du Maroc (9h-19h). Le code source, le nom de domaine et l'hébergement restent à 100% votre propriété exclusive.",
          contact,
        ],
      },
    ],
    services: [
      { href: "/agence-wordpress-maroc", label: "Agence WordPress Maroc" },
      { href: "/services/creation-site-web", label: "Création de site web" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
    ],
    studies: [],
  },
  {
    slug: "lille",
    city: "Lille",
    country: "France",
    pillar: { href: "/developpement-logiciel-france", label: "Développement logiciel pour la France" },
    pillarCrumb: "Développement logiciel France",
    title: "Développement logiciel à Lille · Byte Force",
    description:
      "Studio logiciel pour entreprises lilloises. Sites web, applications, logiciels métier. Basé à Casablanca, clients à Lille depuis 2023.",
    h1: "Développement logiciel à Lille",
    keyword: "développement logiciel Lille",
    lede: "Byte Force livre pour des entreprises à Lille depuis Casablanca. Il n'y a pas de bureau à Lille, ni de société française. Les projets publiés dans la ville commencent en 2023 et 2024 : un restaurant, une boutique florale, une plateforme de commerces, un tableau de réservation.",
    sections: [
      {
        heading: "Ce qui est en ligne à Lille",
        paragraphs: [
          "Nu Lille est un site gastronomique, en ligne depuis 2023. Escapade Florale est une boutique de fleurs, en 2024. Proche de moi est une plateforme de commerces de proximité, avec recherche, carte et fiches, en 2024. La réservation Proche de moi est un tableau de bord séparé, en 2026.",
          "Ces fiches ne sont pas toutes des logiciels métier. Les sites montrent une livraison à distance pour un public français. La plateforme montre un parcours qui n'est pas une vitrine. On ne les additionne pas en un seul « client logiciel ».",
        ],
      },
      {
        heading: "Pourquoi le nearshore tient pour Lille",
        paragraphs: [
          "Casablanca et Lille partagent le français. Le fuseau est le même une partie de l'année, et à une heure le reste. Un point en visio tient dans la journée des deux côtés. Le contrat et la facture sont ceux de l'entreprise marocaine. On ne laisse pas croire à une agence lilloise.",
          "Le code, le dépôt et les comptes d'hébergement livrés reviennent au client. L'hébergement n'est pas « au Maroc » par principe : il est chez le fournisseur ouvert au nom de l'entreprise.",
        ],
      },
      {
        heading: "Services",
        paragraphs: [
          "Un site, une boutique, une application web, un logiciel interne. Le choix se fait après avoir vu ce que le visiteur ou l'équipe doit pouvoir faire. La maintenance peut continuer à distance après la remise.",
          contact,
        ],
      },
    ],
    services: [
      { href: "/services/creation-site-web", label: "Création de site" },
      { href: "/application-web-sur-mesure-maroc", label: "Application web" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
    ],
    studies: ["nu-lille", "escapade-florale", "re-proche-de-moi", "booking-proche-de-moi"],
  },
  {
    slug: "roubaix",
    city: "Roubaix",
    country: "France",
    pillar: { href: "/developpement-logiciel-france", label: "Développement logiciel pour la France" },
    pillarCrumb: "Développement logiciel France",
    title: "Développement logiciel à Roubaix · Byte Force",
    description:
      "Solutions logicielles pour entreprises à Roubaix. Sites, applications, outils métier. Studio à Casablanca.",
    h1: "Développement logiciel à Roubaix",
    keyword: "développement logiciel Roubaix",
    lede: "Byte Force travaille pour une entreprise à Roubaix depuis Casablanca. Le projet publié dans la ville est le site d'Ambulances Valcq, en ligne depuis 2022. Il n'y a pas de bureau à Roubaix.",
    sections: [
      {
        heading: "Roubaix",
        paragraphs: [
          "Roubaix a une histoire industrielle et un tissu d'entreprises de service. Le numérique utile y est souvent une page qui dit qui appeler, ou un outil qui suit une course, un dossier, une commande. Byte Force ne prétend pas connaître chaque métier de la ville. On part de celui qu'on nous montre.",
          "La proximité de Lille compte pour le catalogue : plusieurs projets français sont dans la métropole. Roubaix a sa fiche, pour ne pas la fondre dans Lille.",
        ],
      },
      {
        heading: "Le projet publié",
        paragraphs: [
          "Ambulances Valcq est un site vitrine de transport sanitaire. L'adresse publique est sur la fiche. On n'invente pas une flotte, une zone chiffrée, ni un logiciel de régulation. Le livrable est le site.",
        ],
      },
      {
        heading: "Services",
        paragraphs: [
          "La création de site, quand le visiteur doit comprendre l'activité et écrire. Le logiciel, si le planning ou le dossier ne tient plus dans un fichier. L'audit, si un site existant bloque.",
          "Le travail se fait en visio. Lille est à quelques minutes de Roubaix pour un client, Casablanca est à un vol si un déplacement est écrit. Le mode courant est la distance.",
          contact,
        ],
      },
    ],
    services: [
      { href: "/services/creation-site-web", label: "Création de site" },
      { href: "/services/audit-correction", label: "Audit" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
    ],
    studies: ["ambulances-valcq"],
  },
  {
    slug: "nord",
    city: "Nord",
    country: "France",
    pillar: { href: "/developpement-logiciel-france", label: "Développement logiciel pour la France" },
    pillarCrumb: "Développement logiciel France",
    title: "Développement logiciel dans le Nord · Byte Force",
    description:
      "Studio logiciel pour entreprises du Nord. Lille, Roubaix, Marcq-en-Barœul. Basé à Casablanca, clients dans le Nord depuis 2023.",
    h1: "Développement logiciel dans le Nord",
    keyword: "développement logiciel Nord de la France",
    lede: "Cette page couvre le Nord, pas une ville. Byte Force y a livré depuis Casablanca : Lille, Roubaix, Marcq-en-Barœul, et un site paysager dont la zone est le Nord. Il n'y a pas de bureau dans la région.",
    sections: [
      {
        heading: "La région, pas une agence locale",
        paragraphs: [
          "Le catalogue français de Byte Force est concentré dans le Nord. Ce n'est pas un hasard de page : ce sont les projets publiés. Lille a plusieurs fiches. Roubaix a Ambulances Valcq. Marcq-en-Barœul a Meubles de Septentrion. Les Hauts Paysages est un site d'aménagements, avec le Nord comme zone.",
          "Chaque ville a sa page. Celle-ci relie. Elle ne remplace pas Lille, Roubaix ou Marcq-en-Barœul.",
        ],
      },
      {
        heading: "Ce qui a été livré",
        paragraphs: [
          "Des sites vitrines, des boutiques, une plateforme de commerces, un tableau de réservation. Le détail est sur chaque fiche. On ne publie pas un chiffre régional de trafic ou de chiffre d'affaires. Ces données ne sont pas dans le dossier.",
        ],
      },
      {
        heading: "Comment on travaille avec le Nord",
        paragraphs: [
          "Visio, français, heures qui se recouvrent avec Casablanca. Contrat de l'entreprise marocaine. Code remis. Maintenance possible à distance. Un déplacement se discute, il n'est pas une tournée.",
          contact,
        ],
      },
    ],
    services: [
      { href: "/villes/lille", label: "Lille" },
      { href: "/villes/roubaix", label: "Roubaix" },
      { href: "/villes/marcq-en-baroeul", label: "Marcq-en-Barœul" },
    ],
    studies: ["les-hauts-paysages", "nu-lille", "ambulances-valcq", "meubles-de-septentrion"],
  },
  {
    slug: "marcq-en-baroeul",
    city: "Marcq-en-Barœul",
    country: "France",
    pillar: { href: "/developpement-logiciel-france", label: "Développement logiciel pour la France" },
    pillarCrumb: "Développement logiciel France",
    title: "Développement logiciel à Marcq-en-Barœul · Byte Force",
    description:
      "Solutions logicielles à Marcq-en-Barœul. Studio à Casablanca, client local : Meubles de Septentrion.",
    h1: "Développement logiciel à Marcq-en-Barœul",
    keyword: "développement logiciel Marcq-en-Barœul",
    lede: "Byte Force a livré à Marcq-en-Barœul la boutique de Meubles de Septentrion, en 2023, depuis Casablanca. Il n'y a pas d'autre projet publié dans la commune, et pas de bureau sur place.",
    sections: [
      {
        heading: "Une commune de la métropole",
        paragraphs: [
          "Marcq-en-Barœul est à côté de Lille. Les entreprises y sont des commerces, des ateliers, des sièges qui n'ont pas besoin d'une agence dans la rue pour avoir un site ou un outil. Le catalogue Byte Force y a une fiche, pas un réseau.",
          "La page existe pour que la recherche locale trouve le projet réel, au lieu de le noyer dans Lille.",
        ],
      },
      {
        heading: "Meubles de Septentrion",
        paragraphs: [
          "C'est une boutique de mobilier, meubles-de-septentrion.fr, publiée en 2023. Le visiteur voit des pièces et une fiche produit. On ne publie pas le nombre de références ni un taux de conversion. Le service lié est la création de site.",
        ],
      },
      {
        heading: "Services",
        paragraphs: [
          "Un catalogue en ligne, un site qui explique, un logiciel si le stock ou la commande ne tiennent plus sur le site du marchand. On le dit après avoir vu comment une commande est confirmée aujourd'hui.",
          "Lille est proche pour le client. Le studio est à Casablanca. Les points sont en visio.",
          contact,
        ],
      },
    ],
    services: [
      { href: "/services/creation-site-web", label: "Création de site" },
      { href: "/villes/lille", label: "Lille, à côté" },
      { href: "/developpement-logiciel-france", label: "France" },
    ],
    studies: ["meubles-de-septentrion"],
  },
  {
    slug: "montreal",
    city: "Montréal",
    country: "Canada",
    pillar: { href: "/developpement-logiciel-france", label: "Développement logiciel pour la France" },
    pillarCrumb: "International",
    title: "Développement logiciel pour Montréal · Byte Force",
    description:
      "Studio logiciel pour entreprises montréalaises. Francophone, même langue, décalage de 5 h. Clients à Montréal depuis 2023.",
    h1: "Développement logiciel pour Montréal",
    keyword: "développement logiciel Montréal nearshore",
    lede: "Byte Force a publié des produits pour Montréal depuis Casablanca : Coco Inbox, le CRM Cocoinbox, Tourispeak. Il n'y a pas de bureau au Québec. Le français est commun. Le décalage est d'environ cinq heures.",
    sections: [
      {
        heading: "Ce qui est en ligne",
        paragraphs: [
          "Coco Inbox est un produit d'email temporaire, de fichiers chiffrés et de notes, cocoinbox.com, en 2024. Le CRM Cocoinbox est une autre adresse, pour des dossiers créés depuis le courrier. Tourispeak est un réseau de visites, avec un site et une application Android.",
          "Ce sont trois fiches, pas une filiale. On ne publie pas un nombre d'utilisateurs.",
        ],
      },
      {
        heading: "La langue et l'heure",
        paragraphs: [
          "Le cadrage se fait en français. Les écrans aussi, sauf demande contraire. Cinq heures de décalage veulent dire que les points se posent en fin de matinée à Casablanca, début de journée à Montréal, ou l'inverse en fin de journée marocaine. On l'écrit dans le rythme du projet. On ne promet pas une astreinte de nuit.",
          "Le contrat reste celui de l'entreprise à Casablanca. Il n'y a pas de société canadienne à annoncer.",
        ],
      },
      {
        heading: "Services",
        paragraphs: [
          "Un produit à comptes, un CRM, une application. Le nearshore n'est pas un tarif affiché. Le montant suit le périmètre. La page France reste le pilier des projets francophones hors Maroc, parce qu'il n'y a pas de second pilier international.",
          contact,
        ],
      },
    ],
    services: [
      { href: "/developpement-saas-maroc", label: "SaaS" },
      { href: "/developpement-logiciel-sur-mesure-maroc/crm", label: "CRM" },
      { href: "/developpement-application-mobile-maroc", label: "Application mobile" },
    ],
    studies: ["coco-inbox", "crm-cocoinbox", "tourispeak"],
  },
];

export function getCityPage(slug: string) {
  return cityPages.find((city) => city.slug === slug);
}
