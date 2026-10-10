import { stackArticles } from "@/lib/stack-tools";

export const technologies = [
  { name: "Next.js", slug: "nextjs-dans-les-produits", file: "nextjs" },
  { name: "React", slug: "react-pour-l-interface", file: "react" },
  { name: "TypeScript", slug: "typescript-dans-le-code", file: "typescript" },
  { name: "WordPress", slug: "wordpress-quand-le-site-existe", file: "wordpress" },
  { name: "Node.js", slug: "nodejs-pour-le-serveur", file: "nodejs" },
  { name: "GraphQL", slug: "graphql-pour-l-api", file: "graphql" },
  { name: "PostgreSQL", slug: "postgresql-pour-les-enregistrements", file: "postgresql" },
  { name: "MongoDB", slug: "mongodb-pour-les-documents", file: "mongodb" },
  { name: "Redis", slug: "redis-pour-un-etat-rapide", file: "redis" },
  { name: "Firebase", slug: "firebase-si-l-auth-est-la", file: "firebase" },
  { name: "Cloudflare", slug: "cloudflare-devant-le-site", file: "cloudflare" },
  { name: "Vercel", slug: "vercel-pour-publier", file: "vercel" },
  { name: "OVHcloud", slug: "ovhcloud-pour-l-hebergement", file: "ovhcloud" },
  { name: "AI / LLM APIs", slug: "modele-apres-la-regle", file: "llm" },
  { name: "Expo", slug: "expo-pour-le-telephone", file: "expo" },
  { name: "Power BI", slug: "power-bi-si-l-outil-est-la", file: "powerbi" },
  { name: "Microsoft Clarity", slug: "clarity-sur-une-page", file: "clarity" },
  { name: "PostHog", slug: "posthog-pour-les-evenements", file: "posthog" },
  { name: "Mailgun", slug: "mailgun-pour-l-envoi", file: "mailgun" },
  { name: "Mailchimp", slug: "mailchimp-pour-la-liste", file: "mailchimp" },
  { name: "Hostinger", slug: "hostinger-pour-l-hebergement", file: "hostinger" },
  { name: "Namecheap", slug: "namecheap-pour-le-domaine", file: "namecheap" },
  { name: "Nindohost", slug: "nindohost-pour-l-hebergement", file: "nindohost" },
] as const;

const date = "2026-10-09";

export const techArticles = [
  {
    slug: "nextjs-dans-les-produits",
    title: "Next.js dans les produits du studio",
    description:
      "Next.js chez Byte Force : Proche de moi, Coco Inbox, et le site du studio. Le cadre suit le produit. Bureau à Casablanca.",
    h1: "Next.js dans les produits du studio",
    date,
    lede: "Vous ouvrez une page. La question est si cette page est le produit, ou seulement son affiche. Next.js est le cadre quand l'écran et l'enregistrement vivent dans le même dépôt. [[/realisations/re-proche-de-moi|Proche de moi]] et [[/realisations/coco-inbox|Coco Inbox]] sont deux produits déjà en ligne ainsi. Le site du studio aussi. [[/contact|Écrire à Casablanca]] si le prochain parcours doit s'ouvrir dans un navigateur.",
    sections: [
      {
        heading: "Où le cadre est déjà nommé",
        paragraphs: [
          "La fiche de Walid Moultamiss nomme le travail sur prochedemoi.fr et booking.prochedemoi.fr. Recherche locale, CMS headless avec Next.js, TypeScript et Strapi, fiches de commerces, données structurées. Le produit est en ligne à Lille depuis 2024. Ce n'est pas une promesse de trafic. C'est le cadre nommé pour ce produit.",
          "Coco Inbox est à Montréal depuis 2024. Next.js porte l'interface : email temporaire, fichiers chiffrés, notes. Node.js, GraphQL et MongoDB sont nommés à part. Le cadre ne les avale pas.",
        ],
      },
      {
        heading: "La page et le produit",
        paragraphs: [
          "Next.js sert quand la page que la personne ouvre et le produit qu'elle utilise ne sont pas deux chantiers. Une fiche, une recherche, une réservation, un message : l'écran et la donnée partent du même dépôt.",
          "À la remise, le client possède ce dépôt, avec les comptes d'hébergement livrés. byteforce.ma est le troisième exemple public. Les pages, les articles et le formulaire y sont. Ce n'est pas un produit client. Le studio publie avec l'outil qu'il propose.",
        ],
      },
      {
        heading: "Quand le thème suffit encore",
        paragraphs: [
          "Un site WordPress qui tient n'est pas réécrit en Next.js pour changer de nom. Les plugins du studio existent pour le geste qui manque sur un site déjà en ligne.",
          "Le passage se décide quand le produit a des comptes, des rôles, ou un parcours que le thème ne porte plus. Il n'y a pas de prix sur cette page. Le premier échange dure trente minutes. Il est gratuit. La réponse part sous un jour ouvré, du lundi au vendredi, de 9h à 19h.",
        ],
      },
      {
        heading: "Dire ce que la personne doit faire",
        paragraphs: [
          "Le message utile dit le geste, et ce qui existe déjà : un site, un fichier, un outil. [[/developpement-logiciel-sur-mesure-maroc|Le logiciel sur mesure]] est le cadre commercial. Next.js n'est l'outil que si le parcours le demande.",
          "[[/contact|Écrire à Casablanca]]. Le bureau est au Technopark, boulevard Dammam, Aïn Chock, 20001.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Décrire le produit" },
      { href: "/audit", label: "Audit d'une page" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
      { href: "/realisations/re-proche-de-moi", label: "Proche de moi" },
      { href: "/realisations/coco-inbox", label: "Coco Inbox" },
    ],
    en: {
      title: "Next.js in the studio products",
      description:
        "Next.js at Byte Force: Proche de moi, Coco Inbox, and the studio site. The frame follows the product. Office in Casablanca.",
      h1: "Next.js in the studio products",
      lede: "You open a page. The question is whether that page is the product, or only its poster. Next.js is the frame when the screen and the record live in the same repository. [[/realisations/re-proche-de-moi|Proche de moi]] and [[/realisations/coco-inbox|Coco Inbox]] are already online that way. So is the studio site. [[/contact|Write to Casablanca]] if the next path must open in a browser.",
      sections: [
        {
          heading: "Where the frame is already named",
          paragraphs: [
            "Walid Moultamiss's profile names the work on prochedemoi.fr and booking.prochedemoi.fr. Local search, a headless CMS with Next.js, TypeScript and Strapi, shop listings, structured data. The product has been online in Lille since 2024. That is not a traffic promise. It is the frame named for that product.",
            "Coco Inbox has been in Montreal since 2024. Next.js carries the interface: temporary email, encrypted files, notes. Node.js, GraphQL and MongoDB are named apart. The frame does not swallow them.",
          ],
        },
        {
          heading: "The page and the product",
          paragraphs: [
            "Next.js is used when the page a person opens and the product they use are not two jobs. A listing, a search, a booking, a message: the screen and the data leave from the same repository.",
            "At handover the client owns that repository, with the hosting accounts that were delivered. byteforce.ma is the third public example. The pages, the articles and the form are there. It is not a client product. The studio publishes with the tool it offers.",
          ],
        },
        {
          heading: "When the theme still holds",
          paragraphs: [
            "A WordPress site that still holds is not rewritten in Next.js for a new name. The studio plugins exist for the missing action on a site that is already online.",
            "The move is decided when the product has accounts, roles, or a path the theme no longer carries. There is no price on this page. The first conversation is thirty minutes, and it is free. A reply goes out within one business day, Monday to Friday, 9:00 to 19:00.",
          ],
        },
        {
          heading: "Say what the person must do",
          paragraphs: [
            "The useful note says the action, and what already exists: a site, a file, a tool. Custom software is the commercial frame. Next.js is the tool only when the path needs it.",
            "[[/contact|Write to Casablanca]]. The office is at Technopark, boulevard Dammam, Aïn Chock, 20001.",
          ],
        },
      ],
    },
  },
  {
    slug: "react-pour-l-interface",
    title: "React pour l'interface du produit",
    description:
      "React pour l'interface des produits Byte Force : les écrans en ligne de Proche de moi et de Coco Inbox. Bureau à Casablanca.",
    h1: "React pour l'interface du produit",
    date,
    lede: "React est l'interface des produits dont le cadre est Next.js. La personne voit un écran. Le dépôt, lui, est en React. [[/realisations/re-proche-de-moi|Proche de moi]] et [[/realisations/coco-inbox|Coco Inbox]] sont les deux produits publics déjà nommés ainsi. [[/contact|Écrire à Casablanca]] pour le parcours que l'équipe doit voir.",
    sections: [
      {
        heading: "L'écran, pas la marque de l'outil",
        paragraphs: [
          "Le CV cite React parmi les outils du studio, avec Next.js et TypeScript. Sur Proche de moi, les fiches de commerces, la recherche et la réservation sont des écrans. Sur Coco Inbox, l'email temporaire, les fichiers et les notes sont des écrans. React est la façon d'écrire ces écrans, pas un produit vendu à part.",
          "Le site du studio est la même famille : les pages que vous lisez sont des composants. Cela ne veut pas dire que chaque site du catalogue est une application React. Les boutiques décrites seulement comme des sites en ligne ne sont pas rangées ici.",
        ],
      },
      {
        heading: "Comment on s'en sert",
        paragraphs: [
          "Un écran correspond à un geste : chercher un commerce, ouvrir une note, envoyer un fichier qui expire. Si le geste n'a pas de responsable, l'écran n'entre pas. L'interface ne précède pas le métier. Elle le montre dans l'ordre déjà décidé.",
          "Les rôles restent visibles. Qui crée, qui lit, qui n'entre pas. React ne décide pas des droits. Il affiche ce que le serveur a déjà accepté.",
        ],
      },
      {
        heading: "Quand un autre écran suffit",
        paragraphs: [
          "Une page WordPress qui explique une offre et reçoit un message n'a pas besoin d'une interface React. Le plugin s'écrit en PHP, branché au thème. React arrive quand plusieurs personnes utilisent le même produit chaque jour, avec un état qui change.",
          "Aucun prix n'est affiché. Le bureau est au Technopark, à Casablanca, du lundi au vendredi, de 9h à 19h.",
        ],
      },
      {
        heading: "Décrire l'écran utile",
        paragraphs: [
          "Le message utile dit l'écran que l'équipe ouvre le matin, et celui qu'elle ne devrait plus ouvrir. [[/developpement-logiciel-sur-mesure-maroc|Le logiciel sur mesure]] porte ce choix. React n'est cité que si cet écran est une application.",
          "[[/contact|Écrire à Casablanca]]. La réponse part sous un jour ouvré.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Décrire l'écran" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
      { href: "/realisations/re-proche-de-moi", label: "Proche de moi" },
      { href: "/realisations/coco-inbox", label: "Coco Inbox" },
    ],
    en: {
      title: "React for the product interface",
      description:
        "React for Byte Force product screens: Proche de moi and Coco Inbox. The interface follows the action. Office in Casablanca.",
      h1: "React for the product interface",
      lede: "React is the interface of the products whose frame is Next.js. The person sees a screen. The repository is React. [[/realisations/re-proche-de-moi|Proche de moi]] and [[/realisations/coco-inbox|Coco Inbox]] are the two public products already named that way. [[/contact|Write to Casablanca]] with the path the team must see.",
      sections: [
        {
          heading: "The screen, not the tool's brand",
          paragraphs: [
            "The CV names React among the studio tools, with Next.js and TypeScript. On Proche de moi the shop listings, the search and the booking are screens. On Coco Inbox the temporary email, the files and the notes are screens. React is how those screens are written. It is not a separate product.",
            "The studio site is the same family. Shops described only as live sites are not filed here.",
          ],
        },
        {
          heading: "How it is used",
          paragraphs: [
            "One screen matches one action: find a shop, open a note, send a file that expires. If the action has no owner, the screen stays out. The interface does not come before the work.",
            "Roles stay visible. React does not decide permissions. It shows what the server already accepted.",
          ],
        },
        {
          heading: "When another screen is enough",
          paragraphs: [
            "A WordPress page that explains an offer and receives a message does not need a React interface. A plugin is PHP, hooked to the theme. React arrives when several people use the same product every day.",
            "No price is displayed. The office is at Technopark, Casablanca, Monday to Friday, 9:00 to 19:00.",
          ],
        },
        {
          heading: "Describe the useful screen",
          paragraphs: [
            "Say which screen the team opens in the morning. Custom software carries that choice. React is named only when that screen is an application.",
            "[[/contact|Write to Casablanca]]. A reply goes out within one business day.",
          ],
        },
      ],
    },
  },
  {
    slug: "typescript-dans-le-code",
    title: "TypeScript dans le code du produit",
    description:
      "TypeScript dans le code Byte Force : Proche de moi le nomme, avec Next.js et Strapi. Le studio l'écrit aussi. Casablanca.",
    h1: "TypeScript dans le code du produit",
    date,
    lede: "TypeScript est le langage nommé pour Proche de moi, à côté de Next.js et de Strapi. Le CV le cite aussi pour l'ensemble du studio. [[/realisations/re-proche-de-moi|Le produit en ligne à Lille]] montre le parcours, pas le typage. [[/contact|Écrire à Casablanca]] si le dépôt doit rester lisible après la remise.",
    sections: [
      {
        heading: "Le projet qui le nomme",
        paragraphs: [
          "prochedemoi.fr et booking.prochedemoi.fr : recherche locale, CMS headless, fiches de commerces, données structurées. La fiche dit Next.js, TypeScript et Strapi. TypeScript sert à ce que la fiche d'un commerce, la recherche et la réservation parlent des mêmes champs.",
          "Le site du studio est écrit en TypeScript. C'est un exemple public du même choix, pas un deuxième produit client. Les autres réalisations ne sont pas étiquetées TypeScript tant que leur page ne le dit pas.",
        ],
      },
      {
        heading: "À quoi sert le typage ici",
        paragraphs: [
          "Un champ qui change de nom casse l'écran avant la mise en ligne, pas après le message d'un commerçant. Le typage ne remplace pas l'essai fait par une personne du métier. Il évite une classe d'écarts entre l'API et l'interface.",
          "À la remise, le client possède le dépôt. Un langage explicite sert l'équipe qui reprend le code, qu'elle soit au studio ou chez le client. Ce n'est pas une ligne de devis.",
        ],
      },
      {
        heading: "Là où il n'est pas imposé",
        paragraphs: [
          "Un plugin WordPress reste en PHP, parce que WordPress est en PHP. TypeScript n'est pas ajouté à un thème pour faire moderne. Il accompagne les produits Next.js, là où l'interface et l'API sont dans le même langage.",
          "Pas de prix affiché. Premier échange de trente minutes, gratuit. Réponse sous un jour ouvré.",
        ],
      },
      {
        heading: "Dire qui reprendra le dépôt",
        paragraphs: [
          "[[/developpement-logiciel-sur-mesure-maroc|Le logiciel sur mesure]] se juge au geste, puis au dépôt que l'équipe pourra rouvrir. TypeScript est un choix de ce dépôt quand le produit est une application.",
          "[[/contact|Écrire à Casablanca]] avec le parcours et le nom de qui maintiendra le code ensuite.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Décrire le dépôt" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
      { href: "/realisations/re-proche-de-moi", label: "Proche de moi" },
      { href: "/walid-moultamiss", label: "Fiche de Walid Moultamiss" },
    ],
    en: {
      title: "TypeScript in the product code",
      description:
        "TypeScript in Byte Force code: Proche de moi names it, with Next.js and Strapi. The studio site uses it too. Casablanca.",
      h1: "TypeScript in the product code",
      lede: "TypeScript is the language named for Proche de moi, next to Next.js and Strapi. The CV also names it for the studio. [[/realisations/re-proche-de-moi|The product online in Lille]] shows the path, not the types. [[/contact|Write to Casablanca]] if the repository must stay readable after handover.",
      sections: [
        {
          heading: "The project that names it",
          paragraphs: [
            "prochedemoi.fr and booking.prochedemoi.fr: local search, a headless CMS, shop listings, structured data. The profile says Next.js, TypeScript and Strapi. TypeScript keeps the listing, the search and the booking on the same fields.",
            "The studio site is written in TypeScript. Other case studies are not labelled TypeScript until their page says so.",
          ],
        },
        {
          heading: "What the types are for",
          paragraphs: [
            "A renamed field breaks the screen before launch, not after a shop owner writes. Types do not replace a trial by someone in the trade. They remove a class of gaps between the API and the interface.",
            "At handover the client owns the repository. An explicit language helps the team that will open it next. It is not a line on a quote.",
          ],
        },
        {
          heading: "Where it is not imposed",
          paragraphs: [
            "A WordPress plugin stays in PHP, because WordPress is PHP. TypeScript is not added to a theme to look current. It goes with Next.js products, where the interface and the API share a language.",
            "No public price. The first thirty minutes are free. A reply within one business day.",
          ],
        },
        {
          heading: "Say who will own the repository",
          paragraphs: [
            "Custom software is judged by the action, then by the repository the team can reopen. TypeScript is a choice for that repository when the product is an application.",
            "[[/contact|Write to Casablanca]] with the path and the name of who will maintain the code.",
          ],
        },
      ],
    },
  },
  {
    slug: "wordpress-quand-le-site-existe",
    title: "WordPress quand le site existe déjà",
    description:
      "WordPress chez Byte Force : quatre plugins, et des sites déjà en ligne. On ne réécrit pas un site qui tient. Casablanca.",
    h1: "WordPress quand le site existe déjà",
    date,
    lede: "WordPress reste quand le site tient. Byte Force écrit le plugin du geste qui manque, et a maintenu un parc de sites déjà en ligne. [[/services/plugins-wordpress|Les quatre plugins]] se téléchargent. [[/contact|Écrire à Casablanca]] avec ce qui est déjà installé.",
    sections: [
      {
        heading: "Les plugins déjà écrits",
        paragraphs: [
          "Quatre fichiers : Downloader, Connect, Ecommerce, Optimize Media. Downloader installe un plugin depuis le répertoire WordPress.org, pas depuis une adresse quelconque. Connect, aussi nommé NextJS Page Sync, envoie la structure des blocs Gutenberg vers une API Next.js dont l'adresse est dans les réglages. Ecommerce vise la boutique déjà sur WooCommerce. Optimize Media compresse les images de la médiathèque sans changer leur adresse.",
          "Le plugin est du PHP branché au thème, ou à WooCommerce si la boutique est là. L'équipe le règle sans ouvrir le code. Un cinquième s'écrit seulement quand le geste n'est dans aucun des quatre.",
        ],
      },
      {
        heading: "Le parc déjà en ligne",
        paragraphs: [
          "D'août 2025 à mars 2026, la fiche de Walid Moultamiss décrit la maintenance de sites WordPress et d'hébergements OVHcloud chez YourSoft Run. Le CV indique plus de 30 environnements mutualisés, des extensions sur mesure, Stripe, DNS, SSL et des migrations. Ce chiffre est celui du CV. Il n'est pas un résultat du studio affiché comme une preuve commerciale.",
          "Les boutiques du catalogue, à Lille ou ailleurs, ne sont pas déclarées WordPress sur leur page. Cette page ne les range pas sous WordPress tant que leur fiche ne le dit pas.",
        ],
      },
      {
        heading: "Quand on ne remplace pas WordPress",
        paragraphs: [
          "Une extension du marché qui force l'équipe à changer de parcours, ou qui casse à chaque mise à jour, n'impose pas une réécriture. Le plugin sur mesure ajoute le geste. Si le site ne peut plus être repris, on le dit avant de le toucher.",
          "Le CV cite aussi WooCommerce pour la période du studio à Casablanca, de 2022 à janvier 2024, parmi plus de 20 projets web et logiciels. Le détail de chaque projet n'est pas recopié ici.",
        ],
      },
      {
        heading: "Dire le geste qui manque",
        paragraphs: [
          "Le message utile nomme le site, les extensions déjà là, et l'action que l'équipe ne peut pas faire. [[/services/creation-site-web|La création de site]] est l'autre porte, quand il n'y a pas encore de site.",
          "[[/contact|Écrire à Casablanca]]. Pas de prix sur cette page. Réponse sous un jour ouvré, au Technopark.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Décrire le site WordPress" },
      { href: "/services/plugins-wordpress", label: "Plugins WordPress" },
      { href: "/services/creation-site-web", label: "Création de site" },
      { href: "/walid-moultamiss", label: "Fiche de Walid Moultamiss" },
    ],
    en: {
      title: "WordPress when the site already exists",
      description:
        "WordPress at Byte Force: four plugins, and care for sites already online. A site that holds is not rewritten. Casablanca.",
      h1: "WordPress when the site already exists",
      lede: "WordPress stays when the site holds. Byte Force writes the plugin for the missing action, and has maintained sites that were already online. [[/services/plugins-wordpress|The four plugins]] can be downloaded. [[/contact|Write to Casablanca]] with what is already installed.",
      sections: [
        {
          heading: "The plugins already written",
          paragraphs: [
            "Four files: Downloader, Connect, Ecommerce, Optimize Media. Downloader installs from the WordPress.org directory, not from an arbitrary address. Connect, also named NextJS Page Sync, sends Gutenberg block structure to a Next.js API whose address is in the settings. Ecommerce is for a shop already on WooCommerce. Optimize Media compresses media-library images without changing their address.",
            "The plugin is PHP hooked to the theme, or to WooCommerce if the shop is there. A fifth is written only when the action is in none of the four.",
          ],
        },
        {
          heading: "The park already online",
          paragraphs: [
            "From August 2025 to March 2026, Walid Moultamiss's profile describes maintenance of WordPress sites and OVHcloud hosting at YourSoft Run. The CV states 30+ shared hosting environments, custom extensions, Stripe, DNS, SSL and migrations. That figure belongs to the CV. It is not reused as a studio marketing result.",
            "Catalogue shops are not declared WordPress on their pages. This page does not file them under WordPress until their own page says so.",
          ],
        },
        {
          heading: "When WordPress is not replaced",
          paragraphs: [
            "A market plugin that forces a new path, or breaks on every update, does not require a rewrite. The custom plugin adds the action. If the site cannot be taken over, that is said before it is touched.",
            "The CV also names WooCommerce for the Casablanca studio period, 2022 to January 2024, among 20+ web and software projects. Each project is not copied here.",
          ],
        },
        {
          heading: "Name the missing action",
          paragraphs: [
            "Say the site, the plugins already there, and the action the team cannot take. Website creation is the other door, when there is no site yet.",
            "[[/contact|Write to Casablanca]]. No price on this page. A reply within one business day, at Technopark.",
          ],
        },
      ],
    },
  },
  {
    slug: "nodejs-pour-le-serveur",
    title: "Node.js pour le serveur du produit",
    description:
      "Node.js chez Byte Force : le serveur de Coco Inbox et du CRM orthodontique, avec GraphQL. L'interface reste à part. Casablanca.",
    h1: "Node.js pour le serveur du produit",
    date,
    lede: "Node.js est le serveur nommé pour Coco Inbox et pour le CRM orthodontique. L'interface est en Next.js. Le serveur porte l'API, les droits, et les données. [[/realisations/coco-inbox|Coco Inbox]] est le produit public. [[/contact|Écrire à Casablanca]] pour le geste que le serveur doit accepter.",
    sections: [
      {
        heading: "Deux serveurs déjà décrits",
        paragraphs: [
          "Coco Inbox, Montréal, 2024 : email temporaire, fichiers chiffrés, notes. La fiche dit Next.js, Node.js, GraphQL et MongoDB, avec un accent sur la confidentialité. Node.js est le processus qui reçoit la demande, vérifie qui parle, et écrit le document.",
          "Le CRM orthodontique, janvier à juillet 2025, chez YourSmile Run au Maroc : parcours pour l'administration, les dentistes et le back-office, API GraphQL, Node.js, MongoDB, droits d'accès, interfaces Next.js. Ce CRM n'a pas de page réalisation. Il est décrit sur [[/walid-moultamiss|la fiche]].",
        ],
      },
      {
        heading: "Ce que le serveur décide",
        paragraphs: [
          "L'écran peut proposer un bouton. Le serveur décide si le rôle a le droit. Un fichier chiffré, une note, un dossier patient : l'écriture passe par Node.js, pas par le navigateur seul. Les comptes remis au client incluent l'endroit où ce processus tourne.",
          "Le studio cite Node.js dans le CV pour la période Casablanca, avec Next.js, React, TypeScript, GraphQL, MongoDB et WordPress. La page d'accueil dit que la pile livrée inclut React, Next.js et Node.js. Ce n'est pas la pile de chaque boutique du catalogue.",
        ],
      },
      {
        heading: "Là où Node.js n'entre pas",
        paragraphs: [
          "Un plugin WordPress s'exécute dans PHP, sur l'hébergement du site. On n'ajoute pas un serveur Node.js à côté d'un site qui n'a qu'un formulaire. Le serveur apparaît quand le produit a une API, des rôles, et un état que la page ne peut pas porter seule.",
          "Pas de prix. Trente minutes, gratuites. Réponse sous un jour ouvré, 9h à 19h, au Technopark.",
        ],
      },
      {
        heading: "Nommer la demande que le serveur reçoit",
        paragraphs: [
          "[[/developpement-logiciel-sur-mesure-maroc|Le logiciel sur mesure]] commence par cette demande : qui l'envoie, ce qu'elle contient, qui la lit. Node.js est le choix quand cette demande est une API du produit.",
          "[[/contact|Écrire à Casablanca]] avec le geste et les rôles. Le reste du cadre se décide après.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Décrire la demande" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
      { href: "/realisations/coco-inbox", label: "Coco Inbox" },
      { href: "/walid-moultamiss", label: "Fiche de Walid Moultamiss" },
    ],
    en: {
      title: "Node.js for the product server",
      description:
        "Node.js at Byte Force: the server for Coco Inbox and the orthodontic CRM, with GraphQL. The screen stays apart. Casablanca.",
      h1: "Node.js for the product server",
      lede: "Node.js is the server named for Coco Inbox and for the orthodontic CRM. The interface is Next.js. The server carries the API, the permissions, and the data. [[/realisations/coco-inbox|Coco Inbox]] is the public product. [[/contact|Write to Casablanca]] with the action the server must accept.",
      sections: [
        {
          heading: "Two servers already described",
          paragraphs: [
            "Coco Inbox, Montreal, 2024: temporary email, encrypted files, notes. The profile says Next.js, Node.js, GraphQL and MongoDB, with an emphasis on privacy. Node.js is the process that receives the request, checks who is speaking, and writes the document.",
            "The orthodontic CRM, January to July 2025, at YourSmile Run in Morocco: paths for administration, dentists and the back office, a GraphQL API, Node.js, MongoDB, access rights, Next.js interfaces. That CRM has no case-study page. It is described on the profile.",
          ],
        },
        {
          heading: "What the server decides",
          paragraphs: [
            "The screen can show a button. The server decides whether the role is allowed. An encrypted file, a note, a patient file: the write goes through Node.js, not through the browser alone. The accounts handed to the client include where that process runs.",
            "The homepage says the stack shipped with includes React, Next.js and Node.js. That is not the stack of every shop in the catalogue.",
          ],
        },
        {
          heading: "Where Node.js stays out",
          paragraphs: [
            "A WordPress plugin runs in PHP, on the site's host. A Node.js server is not added beside a site that only has a form. The server appears when the product has an API, roles, and state the page cannot carry alone.",
            "No price. Thirty minutes, free. A reply within one business day, 9:00 to 19:00, at Technopark.",
          ],
        },
        {
          heading: "Name the request the server receives",
          paragraphs: [
            "Custom software starts from that request: who sends it, what it contains, who reads it. Node.js is the choice when that request is the product API.",
            "[[/contact|Write to Casablanca]] with the action and the roles.",
          ],
        },
      ],
    },
  },
  {
    slug: "graphql-pour-l-api",
    title: "GraphQL pour l'API du produit",
    description:
      "GraphQL chez Byte Force : l'API de Coco Inbox et du CRM orthodontique, devant Node.js et MongoDB. Casablanca, Technopark.",
    h1: "GraphQL pour l'API du produit",
    date,
    lede: "GraphQL est l'API nommée pour Coco Inbox et pour le CRM orthodontique. L'écran demande un dossier. L'API répond avec les champs de ce dossier, pas avec toute la base. [[/realisations/coco-inbox|Coco Inbox]] est public. [[/contact|Écrire à Casablanca]] pour nommer les champs que l'écran doit lire.",
    sections: [
      {
        heading: "Les deux API déjà écrites",
        paragraphs: [
          "Coco Inbox : email, notes et fichiers, confidentialité, Next.js, Node.js, GraphQL, MongoDB. L'écran de la note ne devrait pas recevoir le fichier entier si la personne n'a demandé que le titre et la date. GraphQL sert à coller la question de l'écran aux champs utiles.",
          "Le CRM orthodontique, YourSmile Run, Maroc, janvier à juillet 2025 : administration, dentistes, back-office, droits d'accès. L'API GraphQL est devant Node.js et MongoDB. Les interfaces sont en Next.js. Le détail est sur [[/walid-moultamiss|la fiche]], pas sur une page réalisation séparée.",
        ],
      },
      {
        heading: "Pourquoi une API nommée",
        paragraphs: [
          "Plusieurs écrans lisent le même dossier : la recherche, la fiche, le back-office. Sans une API, chaque écran invente sa lecture. GraphQL fixe les types que TypeScript reprend côté interface, quand le produit est dans cette pile.",
          "Les droits restent au serveur. Une requête qui demande un champ interdit ne le reçoit pas parce que le schéma l'a dessiné joli. Le rôle est vérifié avant la réponse.",
        ],
      },
      {
        heading: "Quand une route simple suffit",
        paragraphs: [
          "Un formulaire de contact n'a pas besoin de GraphQL. Une page qui envoie un message a une route. GraphQL entre quand plusieurs rôles lisent et écrivent les mêmes objets, avec des champs qui ne sont pas les mêmes pour chacun.",
          "Le CV cite GraphQL pour la période du studio à Casablanca, sans détailler chaque dépôt. Cette page ne l'ajoute pas aux boutiques dont la fiche ne parle pas d'API.",
        ],
      },
      {
        heading: "Lister les champs de l'écran",
        paragraphs: [
          "[[/developpement-logiciel-sur-mesure-maroc|Le logiciel sur mesure]] se décide sur ces champs : ce que l'administration voit, ce que l'autre rôle ne voit pas. GraphQL est l'outil si cette liste est l'API du produit.",
          "[[/contact|Écrire à Casablanca]]. Trente minutes, sans prix affiché. Réponse sous un jour ouvré.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Lister les champs" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
      { href: "/realisations/coco-inbox", label: "Coco Inbox" },
      { href: "/walid-moultamiss", label: "Fiche de Walid Moultamiss" },
    ],
    en: {
      title: "GraphQL for the product API",
      description:
        "GraphQL at Byte Force: the API for Coco Inbox and the orthodontic CRM, in front of Node.js and MongoDB. Office, Casablanca.",
      h1: "GraphQL for the product API",
      lede: "GraphQL is the API named for Coco Inbox and for the orthodontic CRM. The screen asks for a record. The API answers with that record's fields, not with the whole database. [[/realisations/coco-inbox|Coco Inbox]] is public. [[/contact|Write to Casablanca]] to name the fields the screen must read.",
      sections: [
        {
          heading: "The two APIs already written",
          paragraphs: [
            "Coco Inbox: email, notes and files, privacy, Next.js, Node.js, GraphQL, MongoDB. The note screen should not receive the whole file when the person asked for the title and the date. GraphQL binds the screen's question to the useful fields.",
            "The orthodontic CRM at YourSmile Run, Morocco, January to July 2025: administration, dentists, back office, access rights. The GraphQL API sits in front of Node.js and MongoDB. The detail is on the profile, not on a separate case-study page.",
          ],
        },
        {
          heading: "Why the API is named",
          paragraphs: [
            "Several screens read the same record: search, the file, the back office. Without an API, each screen invents its own read. GraphQL fixes the types the interface can share when the product is on this stack.",
            "Permissions stay on the server. A query that asks for a forbidden field does not receive it because the schema looks neat. The role is checked before the answer.",
          ],
        },
        {
          heading: "When a simple route is enough",
          paragraphs: [
            "A contact form does not need GraphQL. A page that sends a message has a route. GraphQL arrives when several roles read and write the same objects, with fields that are not the same for each role.",
            "The CV names GraphQL for the Casablanca studio period, without listing every repository. This page does not add it to shops whose page does not mention an API.",
          ],
        },
        {
          heading: "List the fields on the screen",
          paragraphs: [
            "Custom software is decided on those fields: what administration sees, what the other role does not. GraphQL is the tool when that list is the product API.",
            "[[/contact|Write to Casablanca]]. Thirty minutes, no public price. A reply within one business day.",
          ],
        },
      ],
    },
  },
  {
    slug: "postgresql-pour-les-enregistrements",
    title: "PostgreSQL pour des enregistrements liés",
    description:
      "PostgreSQL est cité pour des enregistrements liés. Les produits nommés du studio décrivent MongoDB, pas cette base. Casablanca.",
    h1: "PostgreSQL pour des enregistrements liés",
    date,
    lede: "PostgreSQL est sur la pile affichée du studio pour des enregistrements qui se référencent entre eux. Aucune page de réalisation ne nomme PostgreSQL aujourd'hui. Coco Inbox et le CRM orthodontique nomment MongoDB. [[/contact|Écrire à Casablanca]] si les données du prochain produit sont des lignes liées, pas des documents.",
    sections: [
      {
        heading: "Ce que les fiches disent vraiment",
        paragraphs: [
          "La page d'accueil range PostgreSQL sous les enregistrements, à côté de MongoDB pour les documents. Le CV publié sur la fiche de Walid Moultamiss cite MongoDB, pas PostgreSQL. Cette page ne corrige pas le CV en inventant un projet.",
          "[[/realisations/coco-inbox|Coco Inbox]] et le CRM orthodontique sont donc décrits avec MongoDB. Les ranger sous PostgreSQL serait faux. Ils restent sur la page MongoDB.",
        ],
      },
      {
        heading: "Quand les lignes liées sont le bon outil",
        paragraphs: [
          "PostgreSQL sert quand une commande pointe vers un client, un stock et une facture, et que ces liens doivent rester vrais même si un écran change. Une contrainte dans la base vaut mieux qu'une vérification oubliée dans un écran.",
          "Le choix se fait après le dessin des objets, pas avant. Si les objets sont des notes, des fichiers et des messages au schéma souple, le studio a déjà livré ce cas avec MongoDB. Si les objets sont des comptes qui se référencent, PostgreSQL entre dans la discussion.",
        ],
      },
      {
        heading: "Ce qui ne change pas",
        paragraphs: [
          "L'outil de données n'est pas le produit. Le client possède le dépôt et les comptes d'hébergement livrés. Aucun prix n'est affiché parce que le moteur ne fixe pas le périmètre. Le périmètre, ce sont les écrans, les rôles et les liens.",
          "Le bureau est au Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca. Lundi au vendredi, 9h à 19h. Premier échange de trente minutes, gratuit.",
        ],
      },
      {
        heading: "Apporter le lien entre les objets",
        paragraphs: [
          "[[/developpement-logiciel-sur-mesure-maroc|Le logiciel sur mesure]] commence par ces objets. Dites lequel pointe vers lequel. On dira si c'est une base de lignes, une base de documents, ou un fichier qui suffit encore.",
          "[[/contact|Écrire à Casablanca]] avec un exemple réel : deux lignes qui doivent rester d'accord, et qui ne le sont plus aujourd'hui.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Décrire les liens" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
      { href: "/walid-moultamiss", label: "Fiche de Walid Moultamiss" },
      { href: "/realisations/coco-inbox", label: "Coco Inbox" },
    ],
    en: {
      title: "PostgreSQL for related records",
      description:
        "PostgreSQL is listed for related records. The named Byte Force products describe MongoDB, not this store. Office, Casablanca.",
      h1: "PostgreSQL for related records",
      lede: "PostgreSQL is on the studio stack shown for records that point at each other. No case-study page names PostgreSQL today. Coco Inbox and the orthodontic CRM name MongoDB. [[/contact|Write to Casablanca]] if the next product's data is related rows, not documents.",
      sections: [
        {
          heading: "What the pages actually say",
          paragraphs: [
            "The homepage files PostgreSQL under records, next to MongoDB for documents. The CV published on Walid Moultamiss's profile names MongoDB, not PostgreSQL. This page does not invent a project to fill the gap.",
            "Coco Inbox and the orthodontic CRM are therefore described with MongoDB. Filing them under PostgreSQL would be false. They stay on the MongoDB page.",
          ],
        },
        {
          heading: "When related rows are the right tool",
          paragraphs: [
            "PostgreSQL fits when an order points at a customer, a stock line and an invoice, and those links must stay true even if a screen changes. A constraint in the database beats a check forgotten in a screen.",
            "The choice comes after the objects are drawn. Notes, files and messages with a loose shape are a case the studio has already shipped with MongoDB. Objects that reference each other as accounts bring PostgreSQL into the discussion.",
          ],
        },
        {
          heading: "What does not change",
          paragraphs: [
            "The data tool is not the product. The client owns the repository and the delivered hosting accounts. No price is shown, because the engine does not set the scope. The scope is the screens, the roles and the links.",
            "The office is at Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca. Monday to Friday, 9:00 to 19:00. The first thirty minutes are free.",
          ],
        },
        {
          heading: "Bring the link between the objects",
          paragraphs: [
            "Custom software starts from those objects. Say which one points at which. The answer may be rows, documents, or a file that is still enough.",
            "[[/contact|Write to Casablanca]] with a real example: two rows that must agree, and no longer do.",
          ],
        },
      ],
    },
  },
  {
    slug: "mongodb-pour-les-documents",
    title: "MongoDB pour les documents du produit",
    description:
      "MongoDB chez Byte Force : Coco Inbox et le CRM orthodontique. Notes, fichiers, dossiers. Pas pour chaque site. Casablanca.",
    h1: "MongoDB pour les documents du produit",
    date,
    lede: "MongoDB est la base nommée pour Coco Inbox et pour le CRM orthodontique. Les objets sont des documents : un email, une note, un fichier, un dossier. [[/realisations/coco-inbox|Coco Inbox]] est en ligne à Montréal depuis 2024. [[/contact|Écrire à Casablanca]] si le prochain produit ressemble à ces dossiers, pas à un tableur de comptes liés.",
    sections: [
      {
        heading: "Coco Inbox",
        paragraphs: [
          "Le produit publié sert l'email temporaire, les fichiers chiffrés et les notes sécurisées. La fiche technique dit Next.js, Node.js, GraphQL et MongoDB, avec un accent sur la confidentialité. Un message et la pièce qui l'accompagne n'ont pas le même schéma qu'une facture. Le document suit ce que la personne a réellement déposé.",
          "Des fonctions aident à lire et à répondre aux emails. Elles sont dans le produit. Elles ne sont pas un agent vendu à côté. La page sur le modèle dit la règle : une règle stable d'abord.",
        ],
      },
      {
        heading: "Le CRM orthodontique",
        paragraphs: [
          "De janvier à juillet 2025, chez YourSmile Run au Maroc, le CRM décrit des parcours pour l'administration, les dentistes et le back-office. API GraphQL, Node.js, MongoDB, droits d'accès, interfaces Next.js. Un dossier de soin n'est pas une ligne unique. MongoDB porte ce dossier. Il n'y a pas de page réalisation séparée : le texte est sur [[/walid-moultamiss|la fiche]].",
          "Le CV cite aussi MongoDB pour les projets du studio à Casablanca entre 2022 et janvier 2024, sans en faire la base de chaque site vitrine. Les boutiques du catalogue ne sont pas attribuées à MongoDB ici.",
        ],
      },
      {
        heading: "Documents, pas un réflexe",
        paragraphs: [
          "MongoDB n'est pas choisi parce que le nom est connu. Il est choisi quand les objets varient : une note avec ou sans fichier, un message avec une durée, un dossier dont les champs ne sont pas les mêmes pour deux rôles. Quand les objets sont des comptes qui doivent se référencer sans faille, la conversation inclut PostgreSQL. Aucun produit public n'est encore étiqueté ainsi.",
          "Le client possède le dépôt et les comptes livrés. Pas de prix sur cette page. Trente minutes gratuites. Réponse sous un jour ouvré.",
        ],
      },
      {
        heading: "Apporter un dossier réel",
        paragraphs: [
          "[[/developpement-logiciel-sur-mesure-maroc|Le logiciel sur mesure]] part d'un dossier que l'équipe ouvre aujourd'hui, même s'il est encore un fichier. MongoDB n'est cité que si ce dossier ne tient pas dans une grille fixe.",
          "[[/contact|Écrire à Casablanca]] avec ce dossier, sans le nettoyer pour qu'il ait l'air d'une base.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Apporter un dossier" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
      { href: "/realisations/coco-inbox", label: "Coco Inbox" },
      { href: "/walid-moultamiss", label: "Fiche de Walid Moultamiss" },
    ],
    en: {
      title: "MongoDB for the product documents",
      description:
        "MongoDB at Byte Force: Coco Inbox and the orthodontic CRM. Notes, files, records. Not a store for every site. Casablanca.",
      h1: "MongoDB for the product documents",
      lede: "MongoDB is the database named for Coco Inbox and for the orthodontic CRM. The objects are documents: an email, a note, a file, a record. [[/realisations/coco-inbox|Coco Inbox]] has been online in Montreal since 2024. [[/contact|Write to Casablanca]] if the next product looks like those records, not like a sheet of linked accounts.",
      sections: [
        {
          heading: "Coco Inbox",
          paragraphs: [
            "The published product is for temporary email, encrypted files and secure notes. The technical note says Next.js, Node.js, GraphQL and MongoDB, with an emphasis on privacy. A message and its attachment are not the same shape as an invoice. The document follows what the person actually left.",
            "Functions help read and answer email. They live in the product. They are not an agent sold beside it. The page about a model states the rule: a stable rule first.",
          ],
        },
        {
          heading: "The orthodontic CRM",
          paragraphs: [
            "From January to July 2025, at YourSmile Run in Morocco, the CRM describes paths for administration, dentists and the back office. GraphQL API, Node.js, MongoDB, access rights, Next.js interfaces. A care record is not a single row. MongoDB carries that record. There is no separate case-study page: the text is on the profile.",
            "The CV also names MongoDB for Casablanca studio projects between 2022 and January 2024, without making it the database of every brochure site. Catalogue shops are not assigned to MongoDB here.",
          ],
        },
        {
          heading: "Documents, not a reflex",
          paragraphs: [
            "MongoDB is not chosen because the name is familiar. It is chosen when objects vary: a note with or without a file, a message with a lifetime, a record whose fields differ by role. When objects are accounts that must reference each other without gaps, the conversation includes PostgreSQL. No public product is labelled that way yet.",
            "The client owns the repository and the delivered accounts. No price on this page. Thirty free minutes. A reply within one business day.",
          ],
        },
        {
          heading: "Bring a real record",
          paragraphs: [
            "Custom software starts from a record the team opens today, even if it is still a file. MongoDB is named only when that record does not fit a fixed grid.",
            "[[/contact|Write to Casablanca]] with that record, without cleaning it so it looks like a database.",
          ],
        },
      ],
    },
  },
  {
    slug: "redis-pour-un-etat-rapide",
    title: "Redis pour un état qui doit répondre vite",
    description:
      "Redis est cité pour un état rapide. Aucune réalisation ne le nomme. On dit quand il entrerait, sans inventer de projet. Casablanca.",
    h1: "Redis pour un état qui doit répondre vite",
    date,
    lede: "Redis est affiché sur la pile du studio pour un état qui doit répondre vite : une session, un compteur, une file courte. Aucune page de réalisation et aucun passage du CV ne nomment Redis sur un produit. [[/contact|Écrire à Casablanca]] si un écran attend une réponse que la base ne doit pas recalculer à chaque fois.",
    sections: [
      {
        heading: "Ce qui n'est pas écrit",
        paragraphs: [
          "Coco Inbox, Proche de moi, Dealkhir et Tourispeak ont des pages. Elles décrivent le problème, ce qui a été publié, la ville et l'année. Elles ne disent pas Redis. Le CV cite Node.js, GraphQL, MongoDB, Next.js, React, TypeScript, WordPress, Vercel, OVHcloud et Cloudflare. Redis n'y est pas.",
          "Inventer que l'email temporaire ou la recherche de commerces passe par Redis serait un mensonge. Cette page ne le fait pas. La base nommée pour Coco Inbox reste MongoDB.",
        ],
      },
      {
        heading: "Le cas où on en parle",
        paragraphs: [
          "Redis entre dans la discussion quand le même état est lu très souvent et écrit rarement, ou l'inverse sur une file courte : le nombre de places restantes, une session, un verrou le temps d'une écriture. Ce n'est pas la mémoire du métier. Si Redis tombe, le dossier doit toujours être dans la base qui fait foi.",
          "On ne l'ajoute pas pour accélérer un site vitrine. Un site qui met du temps à s'ouvrir se regarde d'abord sur la page, les images et l'hébergement. [[/services/hebergement|L'hébergement]] et [[/services/maintenance|la maintenance]] sont les pages de ce sujet.",
        ],
      },
      {
        heading: "La remise des comptes",
        paragraphs: [
          "Si Redis fait partie du produit livré, le compte est au nom du client, comme les autres comptes d'hébergement. Le studio ne garde pas un état critique sur un service que le client ne peut pas ouvrir.",
          "Pas de prix, pas de chiffre de millisecondes inventé. Le premier échange dure trente minutes. Il est gratuit. Le bureau est au Technopark, à Casablanca.",
        ],
      },
      {
        heading: "Décrire l'état qui se répète",
        paragraphs: [
          "[[/developpement-logiciel-sur-mesure-maroc|Le logiciel sur mesure]] a besoin du geste, pas du nom Redis. Dites quelle information est relue sans cesse, et où est la copie qui fait foi si cette mémoire disparaît.",
          "[[/contact|Écrire à Casablanca]]. La réponse part sous un jour ouvré, de 9h à 19h.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Décrire l'état relu" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
      { href: "/services/hebergement", label: "Hébergement" },
      { href: "/realisations", label: "Travaux publiés" },
    ],
    en: {
      title: "Redis for state that must answer fast",
      description:
        "Redis is listed for fast state. No case study names it. The page says when it would enter, without a fake project. Casablanca.",
      h1: "Redis for state that must answer fast",
      lede: "Redis is shown on the studio stack for state that must answer fast: a session, a counter, a short queue. No case-study page and no CV passage names Redis on a product. [[/contact|Write to Casablanca]] if a screen waits on an answer the database should not recompute every time.",
      sections: [
        {
          heading: "What is not written",
          paragraphs: [
            "Coco Inbox, Proche de moi, Dealkhir and Tourispeak have pages. They describe the problem, what was published, the city and the year. They do not say Redis. The CV names Node.js, GraphQL, MongoDB, Next.js, React, TypeScript, WordPress, Vercel, OVHcloud and Cloudflare. Redis is not there.",
            "Inventing that temporary email or shop search goes through Redis would be false. This page does not do that. The database named for Coco Inbox remains MongoDB.",
          ],
        },
        {
          heading: "The case where it is discussed",
          paragraphs: [
            "Redis enters the discussion when the same state is read very often and written rarely, or the reverse on a short queue: seats left, a session, a lock for the length of a write. It is not the memory of the business. If Redis stops, the record must still be in the database that is the source of truth.",
            "It is not added to speed up a brochure site. A slow site is looked at first on the page, the images and the host. Hosting and maintenance are the pages for that subject.",
          ],
        },
        {
          heading: "What is handed over",
          paragraphs: [
            "If Redis is part of the delivered product, the account is in the client's name, like the other hosting accounts. The studio does not keep critical state on a service the client cannot open.",
            "No price, and no invented millisecond figure. The first conversation is thirty minutes and free. The office is at Technopark, Casablanca.",
          ],
        },
        {
          heading: "Describe the state that repeats",
          paragraphs: [
            "Custom software needs the action, not the name Redis. Say which fact is reread constantly, and where the copy of record lives if that memory disappears.",
            "[[/contact|Write to Casablanca]]. A reply goes out within one business day, 9:00 to 19:00.",
          ],
        },
      ],
    },
  },
  {
    slug: "firebase-si-l-auth-est-la",
    title: "Firebase seulement si l'auth est déjà là",
    description:
      "Firebase est cité pour l'authentification. Aucun produit public du studio ne le nomme. On ne l'ajoute pas par défaut. Casablanca.",
    h1: "Firebase seulement si l'auth est déjà là",
    date,
    lede: "Firebase est sur la pile affichée, à la ligne authentification. Aucune réalisation et aucun passage du CV ne disent qu'un produit Byte Force tourne sur Firebase. [[/contact|Écrire à Casablanca]] si un produit existe déjà avec Firebase et qu'il faut le reprendre, pas pour l'ajouter par habitude.",
    sections: [
      {
        heading: "Rien à coller sur un projet public",
        paragraphs: [
          "Les comptes de Coco Inbox et du CRM orthodontique sont décrits avec Node.js, GraphQL et les droits d'accès. La fiche ne dit pas Firebase. Proche de moi est décrit avec Next.js, TypeScript et Strapi. La fiche ne dit pas Firebase non plus.",
          "Le CV liste React, Next.js, TypeScript, Node.js, GraphQL, MongoDB, WordPress, WooCommerce, PHP, Vercel, OVHcloud et Cloudflare. Firebase n'y figure pas. L'afficher sur l'accueil comme outil possible n'est pas une étude de cas.",
        ],
      },
      {
        heading: "Le seul cas honnête",
        paragraphs: [
          "Firebase a un sens quand le produit du client est déjà dessus : authentification, fichiers ou messages déjà branchés, et l'équipe ne demande pas une réécriture pour changer de logo. On lit ce qui est là. On dit si la reprise tient, ou si les comptes doivent revenir sur un serveur que le client possède.",
          "On ne propose pas Firebase comme identité par défaut d'un logiciel neuf. Les droits d'un CRM déjà livré ont été écrits dans l'API. Un deuxième fournisseur d'identité ne s'ajoute pas pour faire une ligne de pile.",
        ],
      },
      {
        heading: "Les comptes restent au client",
        paragraphs: [
          "Si un service tiers fait partie de la livraison, le compte est au nom du client. Le studio ne garde pas la clé qui ouvre les utilisateurs. C'est la même règle que pour l'hébergement et le dépôt.",
          "Pas de prix. Trente minutes, gratuites. Technopark, Casablanca, lundi à vendredi, 9h à 19h.",
        ],
      },
      {
        heading: "Dire ce qui authentifie déjà",
        paragraphs: [
          "[[/developpement-logiciel-sur-mesure-maroc|Le logiciel sur mesure]] demande qui peut entrer, pas le nom Firebase. Si Firebase est déjà en place, dites-le. Si rien n'existe, on part des rôles.",
          "[[/contact|Écrire à Casablanca]] avec le mode de connexion actuel, ou avec le fait qu'il n'y en a pas encore.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Décrire la connexion" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
      { href: "/walid-moultamiss", label: "Fiche de Walid Moultamiss" },
      { href: "/realisations", label: "Travaux publiés" },
    ],
    en: {
      title: "Firebase only if auth is already there",
      description:
        "Firebase is listed for authentication. No public Byte Force product names it here. It is not added by default. Casablanca.",
      h1: "Firebase only if auth is already there",
      lede: "Firebase is on the stack shown, on the authentication line. No case study and no CV passage say a Byte Force product runs on Firebase. [[/contact|Write to Casablanca]] if a product already uses Firebase and must be taken over, not to add it out of habit.",
      sections: [
        {
          heading: "Nothing to pin on a public project",
          paragraphs: [
            "Accounts on Coco Inbox and the orthodontic CRM are described with Node.js, GraphQL and access rights. The profile does not say Firebase. Proche de moi is described with Next.js, TypeScript and Strapi. The profile does not say Firebase there either.",
            "The CV lists React, Next.js, TypeScript, Node.js, GraphQL, MongoDB, WordPress, WooCommerce, PHP, Vercel, OVHcloud and Cloudflare. Firebase is not on that list. Showing it on the homepage as a possible tool is not a case study.",
          ],
        },
        {
          heading: "The only honest case",
          paragraphs: [
            "Firebase makes sense when the client's product is already on it: authentication, files or messages already connected, and the team is not asking for a rewrite to change a logo. What is there is read. Then we say whether the takeover holds, or whether the accounts should come back to a server the client owns.",
            "Firebase is not the default identity of a new piece of software. Rights in a CRM already delivered were written in the API. A second identity provider is not added to fill a stack line.",
          ],
        },
        {
          heading: "Accounts stay with the client",
          paragraphs: [
            "If a third-party service is part of the delivery, the account is in the client's name. The studio does not keep the key that opens the users. The same rule covers hosting and the repository.",
            "No price. Thirty minutes, free. Technopark, Casablanca, Monday to Friday, 9:00 to 19:00.",
          ],
        },
        {
          heading: "Say what already signs people in",
          paragraphs: [
            "Custom software asks who may enter, not for the name Firebase. If Firebase is already in place, say so. If nothing exists yet, the work starts from the roles.",
            "[[/contact|Write to Casablanca]] with the current sign-in, or with the fact that there is none yet.",
          ],
        },
      ],
    },
  },
  {
    slug: "cloudflare-devant-le-site",
    title: "Cloudflare devant un site déjà en ligne",
    description:
      "Cloudflare est cité dans le CV, sans un produit public qui le nomme. Il se place devant un site, il ne le remplace pas. Casablanca.",
    h1: "Cloudflare devant un site déjà en ligne",
    date,
    lede: "Le CV de Walid Moultamiss cite Cloudflare parmi les outils, avec Vercel et OVHcloud. Aucune page de réalisation ne dit que tel produit est derrière Cloudflare. [[/contact|Écrire à Casablanca]] si un site déjà en ligne doit être joint, protégé, ou servi avec un certificat, sans changer l'application.",
    sections: [
      {
        heading: "Ce que le CV dit, et ce qu'il ne dit pas",
        paragraphs: [
          "La fiche publie la liste : React, Next.js, TypeScript, Node.js, GraphQL, MongoDB, WordPress, WooCommerce, PHP, Vercel, OVHcloud et Cloudflare. Cloudflare y est un outil de livraison et de bordure, pas le nom d'un produit. YourSoft Run décrit DNS, SSL et des migrations sur des hébergements OVHcloud. Ce n'est pas écrit comme un mandat Cloudflare.",
          "Coller Cloudflare sur Coco Inbox, Proche de moi ou Dealkhir serait inventer le chemin réseau. Leurs pages disent la ville, l'année et le problème. Elles ne disent pas le proxy.",
        ],
      },
      {
        heading: "À quoi sert la bordure",
        paragraphs: [
          "Cloudflare se discute quand le nom de domaine, le certificat et le cache devant l'origine doivent être réglés sans toucher au code du produit. Le site ou l'application reste l'origine. La bordure ne devient pas le logiciel.",
          "Le DNS et le certificat font déjà partie de [[/services/hebergement|l'hébergement]] : mise en ligne, certificat, sauvegardes, nom de domaine. Cloudflare est un moyen parmi d'autres, choisi pour le projet, pas une ville de serveur imposée. Les comptes remis reviennent au client.",
        ],
      },
      {
        heading: "Ce qu'on ne promet pas",
        paragraphs: [
          "Pas de pourcentage de disponibilité. Pas de chiffre de performance copié d'un tableau de bord. On dit ce qui est surveillé, et on corrige quand la page ne répond plus. [[/services/maintenance|La maintenance]] est la page de ce suivi.",
          "Aucun prix. Premier échange de trente minutes, gratuit. Bureau au Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca.",
        ],
      },
      {
        heading: "Donner le domaine et l'origine",
        paragraphs: [
          "Le message utile contient le nom de domaine, l'endroit où le site tourne aujourd'hui, et ce qui bloque : certificat, DNS, ou une page lente. On ne commence pas par le logo Cloudflare.",
          "[[/contact|Écrire à Casablanca]]. La réponse part sous un jour ouvré.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Décrire le domaine" },
      { href: "/audit", label: "Audit d'une page" },
      { href: "/services/hebergement", label: "Hébergement" },
      { href: "/services/maintenance", label: "Maintenance" },
      { href: "/walid-moultamiss", label: "Fiche de Walid Moultamiss" },
    ],
    en: {
      title: "Cloudflare in front of a live site",
      description:
        "Cloudflare is named in the CV, with no public product on it. It sits in front of a site. It does not replace it. Casablanca.",
      h1: "Cloudflare in front of a live site",
      lede: "Walid Moultamiss's CV names Cloudflare among the tools, with Vercel and OVHcloud. No case-study page says a given product sits behind Cloudflare. [[/contact|Write to Casablanca]] if a live site must be joined, protected, or served with a certificate, without changing the application.",
      sections: [
        {
          heading: "What the CV says, and what it does not",
          paragraphs: [
            "The profile publishes the list: React, Next.js, TypeScript, Node.js, GraphQL, MongoDB, WordPress, WooCommerce, PHP, Vercel, OVHcloud and Cloudflare. Cloudflare is a delivery and edge tool there, not the name of a product. YourSoft Run describes DNS, SSL and migrations on OVHcloud hosting. That is not written as a Cloudflare engagement.",
            "Pinning Cloudflare on Coco Inbox, Proche de moi or Dealkhir would invent the network path. Their pages say the city, the year and the problem. They do not say the proxy.",
          ],
        },
        {
          heading: "What the edge is for",
          paragraphs: [
            "Cloudflare is discussed when the domain, the certificate and the cache in front of the origin must be set without touching the product code. The site or the application remains the origin. The edge does not become the software.",
            "DNS and the certificate are already part of hosting: go-live, certificate, backups, domain name. Cloudflare is one means among others, chosen for the project, not an imposed server city. Delivered accounts return to the client.",
          ],
        },
        {
          heading: "What is not promised",
          paragraphs: [
            "No uptime percentage. No performance figure copied from a dashboard. What is watched is said, and a page that does not answer is fixed. Maintenance is the page for that care.",
            "No price. The first thirty minutes are free. Office at Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca.",
          ],
        },
        {
          heading: "Give the domain and the origin",
          paragraphs: [
            "The useful note contains the domain, where the site runs today, and what is blocked: certificate, DNS, or a slow page. The work does not start from the Cloudflare logo.",
            "[[/contact|Write to Casablanca]]. A reply goes out within one business day.",
          ],
        },
      ],
    },
  },
  {
    slug: "vercel-pour-publier",
    title: "Vercel pour publier le produit",
    description:
      "Vercel est cité dans le CV. Le catalogue du studio est publié sur Vercel. Le compte livré revient au client. Casablanca.",
    h1: "Vercel pour publier le produit",
    date,
    lede: "Le produit est dans le dépôt. La question est qui peut l'ouvrir, et sous quel nom. Vercel est l'outil de publication nommé dans le CV, à côté d'OVHcloud et de Cloudflare. Le catalogue des projets est en ligne sur catalogue-iota.vercel.app. Ce catalogue n'est pas un produit client. [[/contact|Écrire à Casablanca]] pour la mise en ligne d'un produit Next.js, avec le compte au nom du client.",
    sections: [
      {
        heading: "Ce qui est public, et ce qui ne l'est pas",
        paragraphs: [
          "La fiche de Walid Moultamiss range Vercel dans les outils du CV. Le catalogue du studio, lié depuis le site, est hébergé sur un domaine vercel.app. Il montre les travaux. Le site du studio est de la même famille : une application Next.js mise en ligne, pas un serveur décrit page par page.",
          "Les produits clients ne sont pas tous déclarés sur Vercel. Proche de moi, Coco Inbox, Dealkhir et Tourispeak ont leurs domaines. Leur page ne dit pas le nom de l'hébergeur de production. Cette page ne l'invente pas.",
        ],
      },
      {
        heading: "Du dépôt à l'adresse",
        paragraphs: [
          "Vercel sert quand le produit est une application Next.js, et que la mise en ligne, l'aperçu d'une branche et le domaine doivent suivre le dépôt. Le déploiement n'est pas le métier. C'est la façon d'ouvrir la version convenue.",
          "À la remise, le compte est au client. Le studio ne garde pas la seule clé qui publie. C'est la même phrase que pour le dépôt et pour les autres comptes d'hébergement.",
        ],
      },
      {
        heading: "L'hôte qu'on ne déplace pas",
        paragraphs: [
          "Un site WordPress sur un hébergement mutualisé, comme le parc OVHcloud décrit au CV, ne se déplace pas sur Vercel pour changer d'écran de réglage. [[/services/hebergement|L'hébergement]] se choisit pour le projet. Le bureau est à Casablanca. La ville du serveur n'est pas un argument.",
          "Pas de prix de plateforme recopié. Le périmètre reste les écrans, les rôles et la mise en ligne. Trente minutes, gratuites.",
        ],
      },
      {
        heading: "Dire le domaine",
        paragraphs: [
          "[[/developpement-logiciel-sur-mesure-maroc|Le logiciel sur mesure]] inclut le jour où quelqu'un d'autre que l'auteur ouvre le produit. Vercel est un moyen de ce jour quand le cadre est Next.js.",
          "[[/contact|Écrire à Casablanca]] avec le domaine souhaité, ou avec le domaine déjà en place.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Décrire la mise en ligne" },
      { href: "/audit", label: "Audit d'une page" },
      { href: "/services/hebergement", label: "Hébergement" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
      { href: "/walid-moultamiss", label: "Fiche de Walid Moultamiss" },
    ],
    en: {
      title: "Vercel for publishing the product",
      description:
        "Vercel is named in the CV. The studio catalogue is published on Vercel. The delivered account returns to the client. Casablanca.",
      h1: "Vercel for publishing the product",
      lede: "The product is in the repository. The question is who can open it, and under which name. Vercel is the publishing tool named in the CV, next to OVHcloud and Cloudflare. The project catalogue is online at catalogue-iota.vercel.app. That catalogue is not a client product. [[/contact|Write to Casablanca]] about putting a Next.js product online, with the account in the client's name.",
      sections: [
        {
          heading: "What is public, and what is not",
          paragraphs: [
            "Walid Moultamiss's profile files Vercel among the CV tools. The studio catalogue, linked from the site, is hosted on a vercel.app domain. It shows the work. The studio site is the same family: a Next.js application put online, not a server described page by page.",
            "Client products are not all declared on Vercel. Proche de moi, Coco Inbox, Dealkhir and Tourispeak have their own domains. Their pages do not name the production host. This page does not invent it.",
          ],
        },
        {
          heading: "From the repository to the address",
          paragraphs: [
            "Vercel is used when the product is a Next.js application, and go-live, a branch preview and the domain should follow the repository. Deployment is not the trade. It is how the agreed version opens.",
            "At handover the account belongs to the client. The studio does not keep the only key that publishes. The same sentence covers the repository and the other hosting accounts.",
          ],
        },
        {
          heading: "The host you do not move",
          paragraphs: [
            "A WordPress site on shared hosting, like the OVHcloud park described in the CV, is not moved to Vercel to change a settings screen. Hosting is chosen for the project. The office is in Casablanca. The server's city is not an argument.",
            "No copied platform price. The scope stays the screens, the roles and the go-live. Thirty minutes, free.",
          ],
        },
        {
          heading: "Name the domain",
          paragraphs: [
            "Custom software includes the day someone other than the author opens the product. Vercel is one way to that day when the frame is Next.js.",
            "[[/contact|Write to Casablanca]] with the domain you want, or with the domain already in place.",
          ],
        },
      ],
    },
  },
  {
    slug: "ovhcloud-pour-l-hebergement",
    title: "OVHcloud pour l'hébergement remis",
    description:
      "OVHcloud dans le CV : sites WordPress chez YourSoft Run. Les comptes livrés reviennent au client. Au bureau de Casablanca.",
    h1: "OVHcloud pour l'hébergement remis",
    date,
    lede: "OVHcloud est l'hébergeur nommé pour le parc de sites WordPress maintenu chez YourSoft Run, d'août 2025 à mars 2026. Le CV indique plus de 30 environnements mutualisés, le DNS, le SSL et des migrations. [[/contact|Écrire à Casablanca]] si un site déjà hébergé doit être repris, ou si les comptes doivent être au nom du client.",
    sections: [
      {
        heading: "Le parc décrit au CV",
        paragraphs: [
          "La fiche dit : maintenance d'un parc de sites WordPress et d'hébergements OVHcloud. Extensions sur mesure, Stripe, Power BI, DNS, SSL, migrations. Le nombre « plus de 30 » est une phrase du CV, pas un palmarès du site. Il ne se recolle pas sur une autre offre.",
          "Ce travail est en France, en télétravail, pour YourSoft Run. Le bureau de Byte Force reste au Technopark, à Casablanca. Il n'y a pas de bureau en France. L'hébergement n'en crée pas un.",
        ],
      },
      {
        heading: "Ce que l'hébergement comprend",
        paragraphs: [
          "[[/services/hebergement|La page hébergement]] dit la mise en ligne, le certificat, les sauvegardes, le nom de domaine, et la surveillance. Elle ne promet pas un pourcentage de disponibilité. OVHcloud est un hôte déjà utilisé pour ce parc WordPress, pas le seul hôte possible d'un logiciel Next.js.",
          "Les comptes remis reviennent au client. Un hébergement que le client ne peut pas ouvrir n'est pas livré. Les migrations citées au CV servent à déplacer un site sans perdre le domaine ni le certificat.",
        ],
      },
      {
        heading: "WordPress ici, pas tous les produits",
        paragraphs: [
          "Le lien avec [[/services/plugins-wordpress|les plugins]] est direct : le site qui tient reste sur WordPress, l'hébergement suit. Un produit comme Coco Inbox n'est pas décrit comme un mutualisé OVHcloud. Sa fiche parle de Next.js, Node.js, GraphQL et MongoDB.",
          "Choisir l'hôte se fait après le type de site. Une boutique WordPress et une application à comptes ne partagent pas le même plan parce que le logo de l'hôte est le même.",
        ],
      },
      {
        heading: "Donner l'hébergement actuel",
        paragraphs: [
          "Le message utile dit où le site est aujourd'hui, qui possède le compte, et ce qui casse : DNS, certificat, ou une page qui ne répond plus. [[/services/maintenance|La maintenance]] prend le relais quand le site est déjà en ligne.",
          "[[/contact|Écrire à Casablanca]]. Pas de prix d'hébergeur recopié. Réponse sous un jour ouvré, 9h à 19h.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Décrire l'hébergement" },
      { href: "/services/hebergement", label: "Hébergement" },
      { href: "/services/plugins-wordpress", label: "Plugins WordPress" },
      { href: "/services/maintenance", label: "Maintenance" },
    ],
    en: {
      title: "OVHcloud for hosting handed over",
      description:
        "OVHcloud in the CV: care of hosting and WordPress sites at YourSoft Run. Delivered accounts return to the client. Casablanca.",
      h1: "OVHcloud for hosting handed over",
      lede: "OVHcloud is the host named for the WordPress park maintained at YourSoft Run, from August 2025 to March 2026. The CV states 30+ shared environments, DNS, SSL and migrations. [[/contact|Write to Casablanca]] if a site already hosted must be taken over, or if the accounts must be in the client's name.",
      sections: [
        {
          heading: "The park described in the CV",
          paragraphs: [
            "The profile says: maintenance of a park of WordPress sites and OVHcloud hosting. Custom extensions, Stripe, Power BI, DNS, SSL, migrations. The « 30+ » figure is a CV sentence, not a leaderboard on the site. It is not pasted onto another offer.",
            "That work was in France, remote, for YourSoft Run. The Byte Force office stays at Technopark, Casablanca. There is no office in France. Hosting does not create one.",
          ],
        },
        {
          heading: "What hosting includes",
          paragraphs: [
            "The hosting page says go-live, the certificate, backups, the domain name, and watching availability. It does not promise an uptime percentage. OVHcloud is a host already used for that WordPress park, not the only possible host of a Next.js application.",
            "Delivered accounts return to the client. Hosting the client cannot open is not delivered. The migrations named in the CV move a site without losing the domain or the certificate.",
          ],
        },
        {
          heading: "WordPress here, not every product",
          paragraphs: [
            "The link with the plugins is direct: a site that holds stays on WordPress, and the host follows. A product like Coco Inbox is not described as OVHcloud shared hosting. Its note says Next.js, Node.js, GraphQL and MongoDB.",
            "The host is chosen after the kind of site. A WordPress shop and an application with accounts do not share a plan because the host logo is the same.",
          ],
        },
        {
          heading: "Give the current host",
          paragraphs: [
            "The useful note says where the site is today, who owns the account, and what breaks: DNS, the certificate, or a page that no longer answers. Maintenance takes over when the site is already online.",
            "[[/contact|Write to Casablanca]]. No copied host price. A reply within one business day, 9:00 to 19:00.",
          ],
        },
      ],
    },
  },
  {
    slug: "modele-apres-la-regle",
    title: "Un modèle seulement après la règle",
    description:
      "Chez Coco Inbox, des fonctions aident à lire les emails. La règle stable passe avant le modèle. Pas d'agent vendu. Casablanca.",
    h1: "Un modèle seulement après la règle",
    date,
    lede: "La ligne « AI / LLM APIs » de l'accueil ne vend pas un agent. Sur Coco Inbox, la fiche décrit des fonctions d'aide à la lecture et à la réponse des emails, dans un produit dont le cœur est l'email temporaire, les fichiers chiffrés et les notes. [[/realisations/coco-inbox|Le produit]] est en ligne. [[/contact|Écrire à Casablanca]] avec la tâche qui se répète, pas avec le nom d'un modèle.",
    sections: [
      {
        heading: "Le seul produit où c'est écrit",
        paragraphs: [
          "Coco Inbox, Montréal, 2024 : Next.js, Node.js, GraphQL, MongoDB, confidentialité. Les fonctions d'aide concernent la lecture et la réponse des emails. Elles sont dans le produit. Elles ne sont pas une offre séparée, ni un agent conversationnel à abonnement.",
          "Aucun autre travail public n'est décrit avec une API de modèle. Proche de moi est une recherche, des fiches et une réservation. Dealkhir est une plateforme de dons. Tourispeak est un site et une application Android. Cette page ne leur ajoute pas un modèle.",
        ],
      },
      {
        heading: "La règle d'abord",
        paragraphs: [
          "Si la tâche s'explique en une règle stable, la règle est écrite. Un modèle n'est ajouté que lorsque cette règle ne peut pas porter le geste. Le choix est dit avant le chantier, pas découvert dans l'interface.",
          "Aider à lire un email n'est pas une raison pour envoyer le message, les fichiers et les notes vers un tiers sans le dire. La fiche insiste sur la confidentialité. Un branchement vers une API de modèle, s'il existe dans un futur périmètre, se décide par écrit, avec le compte au nom du client.",
        ],
      },
      {
        heading: "Ce qui n'est pas en vente",
        paragraphs: [
          "Pas d'agent, pas de chatbot catalogue, pas de pourcentage de temps gagné. Snapchat Collect, s'il est cité ailleurs, n'est pas une preuve d'IA et ses chiffres ne sont pas repris. Le studio ne publie pas de métrique d'automatisation.",
          "Le bureau reste au Technopark. Pas de prix. Trente minutes pour voir si la tâche est une règle, un modèle, ou un outil du marché qu'il faut garder.",
        ],
      },
      {
        heading: "Décrire la tâche répétée",
        paragraphs: [
          "[[/developpement-logiciel-sur-mesure-maroc|Le logiciel sur mesure]] reçoit la tâche : qui la fait, sur quel écran, avec quel texte. Si une règle suffit, on s'arrête là.",
          "[[/contact|Écrire à Casablanca]] avec trois exemples où la tâche casse, si la règle ne tient pas. Réponse sous un jour ouvré.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Décrire la tâche" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
      { href: "/realisations/coco-inbox", label: "Coco Inbox" },
      { href: "/walid-moultamiss", label: "Fiche de Walid Moultamiss" },
    ],
    en: {
      title: "A model only after the rule",
      description:
        "On Coco Inbox, functions help read and answer email. The stable rule comes before a model. No agent is sold. Casablanca.",
      h1: "A model only after the rule",
      lede: "The homepage line « AI / LLM APIs » does not sell an agent. On Coco Inbox, the profile describes functions that help read and answer email, inside a product whose core is temporary email, encrypted files and notes. [[/realisations/coco-inbox|The product]] is online. [[/contact|Write to Casablanca]] with the task that repeats, not with a model name.",
      sections: [
        {
          heading: "The only product where this is written",
          paragraphs: [
            "Coco Inbox, Montreal, 2024: Next.js, Node.js, GraphQL, MongoDB, privacy. The help functions concern reading and answering email. They are in the product. They are not a separate offer, and not a subscription conversational agent.",
            "No other public work is described with a model API. Proche de moi is search, listings and a booking. Dealkhir is a donations platform. Tourispeak is a site and an Android application. This page does not add a model to them.",
          ],
        },
        {
          heading: "The rule first",
          paragraphs: [
            "If the task can be explained as one stable rule, the rule is written. A model is added only when that rule cannot carry the action. The choice is said before the build, not discovered in the interface.",
            "Help reading an email is not a reason to send the message, the files and the notes to a third party without saying so. The profile stresses privacy. A connection to a model API, if it exists in a future scope, is decided in writing, with the account in the client's name.",
          ],
        },
        {
          heading: "What is not for sale",
          paragraphs: [
            "No agent, no catalogue chatbot, no percentage of time saved. Snapchat Collect, if it is mentioned elsewhere, is not proof of AI and its figures are not reused. The studio does not publish an automation metric.",
            "The office stays at Technopark. No price. Thirty minutes to see whether the task is a rule, a model, or a market tool that should stay.",
          ],
        },
        {
          heading: "Describe the repeated task",
          paragraphs: [
            "Custom software receives the task: who does it, on which screen, with which text. If a rule is enough, the work stops there.",
            "[[/contact|Write to Casablanca]] with three examples where the task breaks, if the rule does not hold. A reply within one business day.",
          ],
        },
      ],
    },
  },
  ...stackArticles,
];
