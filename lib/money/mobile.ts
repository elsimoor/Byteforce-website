import type { MoneyPage } from "./types";

const contact = { href: "/contact", label: "Décrire l'usage mobile" };

export const mobilePages: MoneyPage[] = [
  {
    path: "developpement-application-mobile-maroc",
    group: "Mobile",
    crumb: "Application mobile",
    keyword: "développement application mobile Maroc",
    title: "Développement d'application mobile au Maroc",
    description:
      "iOS, Android ou une seule base : Byte Force aide à choisir avant d'écrire. Casablanca. Pas de promesse de store sans usage réel.",
    h1: "Développement d'application mobile au Maroc",
    cta: "Dire où le geste se fait",
    schema: "service",
    lede: "Une application mobile est un programme installé sur le téléphone, pour un geste qui ne tient pas dans un onglet : terrain, hors-ligne, appareil photo, notifications que l'on ne peut pas rater. Si le geste tient dans le navigateur, Byte Force le dit et construit une application web. Le bureau est à Casablanca.",
    blocks: [
      {
        h: "Le choix se fait ici",
        items: [
          "iOS quand les utilisateurs sont sur iPhone et que le store Apple fait partie du contrat.",
          "Android quand le parc est Android, ce qui est fréquent au Maroc.",
          "Une base commune quand les deux stores sont exigés et que le geste est le même.",
          "Un outil d'équipe dehors, pas un produit grand public, quand le geste est une tournée.",
        ],
      },
      {
        h: "Ce que le catalogue ne montre pas",
        p: [
          "Deux applications Android sont publiques : [[/realisations/zainek|Zainek]], pour réserver un salon, et [[/realisations/tourispeak|Tourispeak]], pour des visites audio. Les fiches Play et les captures sont sur ces pages. Il n'y a pas d'application iOS vérifiée dans le catalogue. Le travail mobile se décide sur le geste, pas sur une capture seule.",
        ],
      },
    ],
    faqs: [
      { q: "Application web ou application installée ?", a: "Installée si le hors-ligne, les notifications fiables ou un capteur sont nécessaires. Web si l'équipe a du réseau et qu'un lien suffit à ouvrir l'outil." },
      { q: "Qui publie sur les stores ?", a: "Les comptes développeur sont au client. Byte Force peut préparer la fiche et la build. Le compte ne reste pas au nom du studio." },
      { q: "Combien de temps ?", a: "Plus long qu'une page web dès qu'il y a revue des stores et deux plateformes. On le chiffre après avoir choisi un seul geste principal." },
    ],
    proof: [
      { href: "/realisations/zainek", title: "Zainek", note: "Application Android et site pour un rendez-vous beauté. Fiche Play mise à jour le 30 août 2026." },
      { href: "/realisations/tourispeak", title: "Tourispeak", note: "Application Android de visites audio, en plus du site. Montréal, 2024." },
    ],
    links: [
      { href: "/application-web-sur-mesure-maroc", label: "Rester dans le navigateur" },
      contact,
    ],
  },
  {
    path: "developpement-application-mobile-maroc/ios",
    group: "Mobile",
    crumb: "iOS",
    keyword: "application mobile iOS",
    title: "Application iOS",
    description:
      "Une application iPhone quand le parc et le store le justifient. Compte Apple au client. Revue Apple prévue dans le délai.",
    h1: "Application mobile iOS",
    cta: "Dire pourquoi iPhone",
    schema: "service",
    lede: "Une application iOS est celle que l'on installe sur iPhone, via l'App Store ou un programme d'entreprise. Elle se justifie quand les utilisateurs sont sur iPhone, pas parce que la marque fait plus sérieux. La revue Apple fait partie du planning : un rejet sur une permission mal expliquée décale la mise en ligne.",
    blocks: [
      {
        h: "Ce qu'il faut accepter",
        p: [
          "Un compte Apple Developer au nom du client, une politique de confidentialité vraie, et des permissions demandées au moment où elles servent. L'application qui demande la position « au cas où » se fait recaler, ou se fait désinstaller.",
          "Si Android est aussi obligatoire dès le premier jour, la page [[/developpement-application-mobile-maroc/cross-platform|cross-platform]] est le bon point de départ. Faire iOS seul puis « porter » sans l'avoir prévu double souvent le coût.",
        ],
      },
    ],
    faqs: [
      { q: "Peut-on distribuer sans le store ?", a: "Dans un cadre entreprise, parfois. Pour le grand public, le store est le chemin. On ne promet pas un contournement." },
      { q: "Faut-il un Mac ?", a: "La build iOS exige l'outillage Apple. C'est inclus dans le projet, pas une surprise le dernier jour." },
    ],
    proof: [],
    links: [
      { href: "/developpement-application-mobile-maroc", label: "Application mobile" },
      { href: "/developpement-application-mobile-maroc/android", label: "Android" },
      contact,
    ],
  },
  {
    path: "developpement-application-mobile-maroc/android",
    group: "Mobile",
    crumb: "Android",
    keyword: "application mobile Android",
    title: "Application Android",
    description:
      "Android d'abord quand le parc l'est. Plusieurs tailles d'écran, un store, un compte au nom du client.",
    h1: "Application mobile Android",
    cta: "Décrire le téléphone utilisé",
    schema: "service",
    lede: "Une application Android vise le parc que l'on croise le plus sur le terrain au Maroc : des téléphones très différents, pas un seul modèle de démonstration. Elle se publie sur le Play Store avec un compte au nom du client, ou se distribue en interne si le store n'a pas de sens.",
    blocks: [
      {
        h: "Le piège de la démo",
        p: [
          "Une application fluide sur le téléphone du directeur peut ramer sur celui de l'équipe. On fixe un appareil modeste comme référence avant d'ajouter des animations. Les écrans se vérifient en petit, avec un doigt, dehors, pas seulement au bureau.",
          "Le hors-ligne se décide ici. Si la tournée passe dans une zone sans réseau, l'application doit enregistrer puis envoyer. Sinon elle sera contournée par un cahier, et le projet a échoué.",
        ],
      },
    ],
    faqs: [
      { q: "Faut-il iOS en même temps ?", a: "Seulement si des utilisateurs réels sont sur iPhone. Ajouter une plateforme « pour faire complet » sans utilisateur est du budget perdu." },
      { q: "Les vieilles versions d'Android ?", a: "On cible ce que l'équipe a vraiment, pas la dernière version par principe. Ça se mesure avec cinq téléphones de l'équipe, pas avec une statistique mondiale." },
    ],
    proof: [
      { href: "/realisations/zainek", title: "Zainek", note: "Publiée sur le Play Store, avec le site zainek.com." },
      { href: "/realisations/tourispeak", title: "Tourispeak", note: "Publiée sur le Play Store, à côté de tourispeak.com." },
    ],
    links: [
      { href: "/developpement-application-mobile-maroc", label: "Application mobile" },
      { href: "/developpement-application-mobile-maroc/application-metier", label: "Usage métier" },
      contact,
    ],
  },
  {
    path: "developpement-application-mobile-maroc/cross-platform",
    group: "Mobile",
    crumb: "Cross-platform",
    keyword: "application mobile cross-platform",
    title: "Application cross-platform",
    description:
      "Une base pour iOS et Android quand le geste est le même. Les limites : capteurs, revue des stores, performances.",
    h1: "Application mobile cross-platform",
    cta: "Dire si le geste est le même",
    schema: "service",
    lede: "Une application cross-platform partage une base de code entre iOS et Android. Elle convient quand le geste est le même sur les deux, et que maintenir deux équipes n'a pas de sens. Elle convient mal quand l'application est surtout un usage fin de l'appareil.",
    blocks: [
      {
        h: "Le partage a une limite",
        p: [
          "Les écrans, les comptes et les appels au serveur se partagent bien. Les notifications, l'appareil photo, le fond de tâche et les permissions divergent. Il faut les prévoir comme des écarts, pas comme une surprise en fin de projet. Le natif séparé redevient intéressant si ces écarts sont le produit.",
          "Ce n'est pas « moins cher de moitié ». C'est un projet, plus deux fiches de store, plus les écarts. Le gain est la suite : une correction métier se fait une fois.",
        ],
      },
    ],
    faqs: [
      { q: "Est-ce une application web dans une coque ?", a: "Pas si le geste a besoin du téléphone. Une coque autour d'un site se voit, et se fait recaler ou ignorer. Si le site suffit, on ne fait pas de coque." },
      { q: "Qui choisit la technique ?", a: "Byte Force, après le geste et le parc. Le nom d'un framework n'est pas un besoin." },
    ],
    proof: [],
    links: [
      { href: "/developpement-application-mobile-maroc/ios", label: "iOS seul" },
      { href: "/developpement-application-mobile-maroc/android", label: "Android seul" },
      { href: "/developpement-application-mobile-maroc", label: "Application mobile" },
      contact,
    ],
  },
  {
    path: "developpement-application-mobile-maroc/application-metier",
    group: "Mobile",
    crumb: "Application métier",
    keyword: "application mobile métier",
    title: "Application mobile métier",
    description:
      "L'outil de l'équipe sur le terrain : tournée, photo, signature, zone sans réseau. Pas une vitrine de marque.",
    h1: "Application mobile métier",
    cta: "Décrire la tournée",
    schema: "service",
    lede: "L'application mobile métier est l'outil que l'employé ouvre loin du bureau : relever, photographier, faire signer, noter qu'une pièce manque. Elle n'a pas à plaire à un inconnu sur un store. Elle a à marcher avec les gants, le soleil et un réseau moyen.",
    blocks: [
      {
        h: "Le geste avant le store",
        p: [
          "On suit une personne une matinée, ou on se fait raconter trois interventions dont une qui s'est mal passée. L'écran reprend cet ordre. Un menu copié sur l'intranet sera ignoré. Le [[/developpement-logiciel-sur-mesure-maroc/logiciel-metier/outil-interne|outil interne]] web reste préférable si tout se fait au dépôt avec du réseau.",
        ],
      },
      {
        h: "Hors-ligne",
        p: [
          "Si la zone blanche existe, les saisies restent sur l'appareil puis partent. Les conflits (deux personnes, même dossier) se prévoient. Sans cette règle, la première coupure réseau renvoie l'équipe au papier, et le papier redevient la base.",
        ],
      },
    ],
    faqs: [
      { q: "Les clients finaux l'installent-ils ?", a: "En général non. C'est un outil d'équipe. Le grand public relève du produit, pas de cette page." },
      { q: "Peut-on réutiliser l'application web ?", a: "Une partie des règles oui. L'écran de terrain se réécrit. Coller le back-office sur un téléphone produit un outil que l'on maudit." },
    ],
    proof: [],
    links: [
      { href: "/developpement-application-mobile-maroc", label: "Application mobile" },
      { href: "/developpement-logiciel-sur-mesure-maroc/logiciel-metier", label: "Logiciel métier" },
      contact,
    ],
  },
];
