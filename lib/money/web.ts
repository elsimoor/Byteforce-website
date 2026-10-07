import type { MoneyPage } from "./types";

const contact = { href: "/contact", label: "Décrire l'application" };

export const webPages: MoneyPage[] = [
  {
    path: "application-web-sur-mesure-maroc",
    group: "Web",
    crumb: "Application web sur mesure",
    keyword: "application web sur mesure Maroc",
    title: "Application web sur mesure au Maroc",
    description:
      "Portail, outil métier, tableau de bord : l'application web que l'équipe utilise vraiment. Byte Force, Casablanca. Le code est au client.",
    h1: "Application web sur mesure au Maroc",
    cta: "Décrire l'usage",
    schema: "service",
    lede: "Une application web sur mesure est un outil ouvert dans le navigateur, écrit pour une tâche précise : suivre un dossier, donner un accès au client, lire des chiffres qui viennent des vraies données. Ce n'est pas un site vitrine. Byte Force la construit à Casablanca.",
    blocks: [
      {
        h: "Site, application, logiciel",
        p: [
          "Le site explique. L'application fait faire quelque chose. Le [[/developpement-logiciel-sur-mesure-maroc|logiciel sur mesure]] est le cadre plus large, quand le sujet dépasse le navigateur : règles métier, ERP, automatisation. Beaucoup de logiciels d'entreprise commencent pourtant comme application web, parce que l'équipe a déjà un navigateur et pas envie d'installer un programme.",
        ],
      },
      {
        h: "Quatre besoins différents",
        items: [
          "[[/application-web-sur-mesure-maroc/application-metier|L'application métier]] porte le vocabulaire d'une activité.",
          "[[/application-web-sur-mesure-maroc/portail-client|Le portail client]] donne au client un endroit, au lieu d'un fil WhatsApp.",
          "[[/application-web-sur-mesure-maroc/dashboard|Le tableau de bord]] lit les données déjà là, sans les ressaisir.",
          "[[/application-web-sur-mesure-maroc/refonte|La refonte]] reprend une application devenue dangereuse à modifier.",
        ],
      },
      {
        h: "Ce que la première version contient",
        p: [
          "Un parcours, des comptes, une base, et l'administration pour l'équipe. Pas un catalogue de fonctionnalités vues ailleurs. L'hébergement livré et le dépôt reviennent au client. Les défauts du périmètre convenu sont corrigés avec la livraison.",
        ],
      },
    ],
    faqs: [
      { q: "Une application web fonctionne-t-elle sur téléphone ?", a: "Oui dans le navigateur, si les écrans sont prévus pour. Une application installée depuis un store est un autre projet, décrit côté mobile." },
      { q: "Qui possède les données ?", a: "L'entreprise. Elles ne restent pas dans un compte Byte Force après la remise." },
      { q: "Combien de temps ?", a: "Souvent plusieurs semaines pour une première version utilisable. Le délai suit les rôles et les branchements, pas un forfait affiché." },
    ],
    proof: [
      { href: "/realisations/dealkhir", title: "Dealkhir", note: "Une plateforme utilisée par des organisations, en ligne à Casablanca depuis 2024." },
      { href: "/realisations/re-proche-de-moi", title: "Proche de moi", note: "Recherche et fiches, en ligne à Lille depuis 2024." },
      { href: "/realisations/tourispeak", title: "Tourispeak", note: "Réseau et visites, en ligne depuis Montréal, 2024." },
    ],
    links: [
      { href: "/developpement-logiciel-casablanca/application-web", label: "Application web à Casablanca" },
      { href: "/services/creation-site-web", label: "Si le besoin est un site" },
      contact,
    ],
  },
  {
    path: "application-web-sur-mesure-maroc/application-metier",
    group: "Web",
    crumb: "Application métier",
    keyword: "application métier web",
    title: "Application métier dans le navigateur",
    description:
      "L'application métier web suit dossiers et étapes d'une activité. Distincte du logiciel métier plus large et du simple site.",
    h1: "Application métier",
    cta: "Décrire un dossier",
    schema: "service",
    lede: "L'application métier web est l'endroit où une équipe traite ses dossiers dans le navigateur. Elle parle le métier : pas « item » et « status » si personne ne dit ces mots. Le [[/developpement-logiciel-sur-mesure-maroc/logiciel-metier|logiciel métier]] peut aller plus loin (règles hors écran, plusieurs systèmes). Ici, le sujet est l'application que l'on ouvre le matin.",
    blocks: [
      {
        h: "Ce que l'écran doit permettre",
        p: [
          "Trouver un dossier, voir ce qui bloque, faire l'action suivante, laisser une trace. Si l'écran oblige à tenir un cahier à côté, il a raté. On conçoit à partir de trois dossiers réels, dont un cas pénible, pas à partir d'une démo heureuse.",
        ],
      },
      {
        h: "Limite honnête",
        p: [
          "Tourispeak et Dealkhir montrent des applications publiées avec leur propre parcours. Ils ne sont pas la preuve d'un logiciel de chantier, de clinique ou d'atelier. On ne les habille pas d'un métier qu'ils n'ont pas.",
        ],
      },
    ],
    faqs: [
      { q: "Faut-il un compte par employé ?", a: "Oui dès que l'on veut savoir qui a validé. Un login partagé revient au fichier sans propriétaire." },
      { q: "Peut-on commencer sans application mobile ?", a: "Oui. Le navigateur sur téléphone couvre beaucoup de tournées. Le natif se décide quand l'appareil, le hors-ligne ou le store l'exigent." },
    ],
    proof: [
      { href: "/realisations/tourispeak", title: "Tourispeak", note: "Parcours propre au réseau, pas un thème générique. Montréal, 2024." },
    ],
    links: [
      { href: "/application-web-sur-mesure-maroc", label: "Application web" },
      { href: "/developpement-logiciel-sur-mesure-maroc/logiciel-metier", label: "Logiciel métier" },
      contact,
    ],
  },
  {
    path: "application-web-sur-mesure-maroc/portail-client",
    group: "Web",
    crumb: "Portail client",
    keyword: "portail client sur mesure",
    title: "Portail client sur mesure",
    description:
      "Un espace où le client suit sa demande, ses documents et ses échanges, au lieu d'un fil de messages introuvable.",
    h1: "Portail client",
    cta: "Décrire ce que le client demande",
    schema: "service",
    lede: "Un portail client est l'espace où la personne dehors voit l'état de sa demande, ses documents et ce qu'on attend d'elle. Il existe pour arrêter les « vous pouvez me renvoyer le PDF » et les captures WhatsApp. Il n'existe pas pour republier le site de l'entreprise.",
    blocks: [
      {
        h: "Ce que le client vient chercher",
        items: [
          "Où en est ma demande.",
          "Quel document manque.",
          "Quel montant ou quel rendez-vous est retenu.",
          "À qui écrire sans recommencer l'historique.",
        ],
        p: [
          "Chaque ligne en trop est une raison de ne pas revenir. Un portail à quinze menus imite l'intranet de l'équipe. Le client a trois questions. On répond à celles-là.",
        ],
      },
      {
        h: "Côté équipe",
        p: [
          "Le portail n'est pas une deuxième base. L'état affiché au client est le même que celui de l'[[/application-web-sur-mesure-maroc/application-metier|application métier]] ou du dossier interne. Sinon quelqu'un met à jour deux endroits, et le portail ment dès la deuxième semaine.",
        ],
      },
    ],
    faqs: [
      { q: "Faut-il un compte ?", a: "Pour un suivi durable, oui. Pour un envoi unique, un lien à durée limitée suffit parfois. On choisit selon la sensibilité des pièces." },
      { q: "Le client peut-il déposer des fichiers ?", a: "Oui, si c'est le geste qui aujourd'hui passe par email. La taille, le type et qui peut les lire se décident avant, pas après le premier incident." },
    ],
    proof: [
      { href: "/realisations/dealkhir", title: "Dealkhir", note: "Des organisations ont un espace, pas seulement une page publique. Casablanca, 2024." },
    ],
    links: [
      { href: "/application-web-sur-mesure-maroc", label: "Application web" },
      { href: "/application-web-sur-mesure-maroc/dashboard", label: "Tableau de bord interne" },
      contact,
    ],
  },
  {
    path: "application-web-sur-mesure-maroc/dashboard",
    group: "Web",
    crumb: "Tableau de bord",
    keyword: "dashboard entreprise",
    title: "Tableau de bord d'entreprise",
    description:
      "Un dashboard qui lit les données du logiciel, pas un export collé chaque lundi. Indicateurs choisis avec ceux qui décident.",
    h1: "Tableau de bord d'entreprise",
    cta: "Dire quelle question reste sans réponse",
    schema: "service",
    lede: "Un tableau de bord d'entreprise répond à quelques questions avec les données déjà enregistrées par le travail. Il ne crée pas ces données. S'il faut les ressaisir pour que le graphique existe, le dashboard est un poster.",
    blocks: [
      {
        h: "Choisir les questions, pas les graphiques",
        p: [
          "« Qu'est-ce qui est en retard », « qu'est-ce qui est promis et pas disponible », « quelles affaires n'ont pas bougé ». Trois questions tenues à jour valent douze camemberts. On les écrit avec la personne qui décide, puis on vérifie que la donnée source existe. Sinon le premier chantier n'est pas le dashboard, c'est la saisie.",
          "Un outil de reporting déjà payé peut rester le lieu de lecture. Dans ce cas le travail est l'[[/developpement-logiciel-sur-mesure-maroc/automatisation/integration-api|intégration]], pas un deuxième écran.",
        ],
      },
      {
        h: "Droits",
        p: [
          "Un commercial ne voit pas la marge d'un autre. Une vue direction n'est pas la vue dépôt. Le dashboard reprend les rôles de l'application. Une page « admin » ouverte à tout le monde n'est pas un outil de pilotage.",
        ],
      },
    ],
    faqs: [
      { q: "Power BI ou un écran à nous ?", a: "Si l'entreprise a déjà l'outil et quelqu'un qui s'en sert, on alimente cet outil. On n'en reconstruit un que si personne ne le maintient ou s'il ne peut pas lire la base." },
      { q: "Les chiffres peuvent-ils être faux ?", a: "Oui, s'ils viennent d'un export manuel. On affiche la source et l'heure. Un chiffre sans date est une opinion." },
    ],
    proof: [],
    links: [
      { href: "/application-web-sur-mesure-maroc", label: "Application web" },
      { href: "/developpement-logiciel-sur-mesure-maroc/erp", label: "Quand les données viennent d'un ERP" },
      contact,
    ],
  },
  {
    path: "application-web-sur-mesure-maroc/refonte",
    group: "Web",
    crumb: "Refonte",
    keyword: "refonte application web",
    title: "Refonte d'une application web",
    description:
      "Reprendre une application devenue risquée à modifier : ce qu'on garde, ce qu'on réécrit, et comment les utilisateurs ne s'arrêtent pas.",
    h1: "Refonte d'une application web",
    cta: "Décrire ce qui casse",
    schema: "service",
    lede: "Refondre une application web, c'est la rendre à nouveau modifiable et sûre, sans perdre les données ni le geste des utilisateurs. Ce n'est pas un nouveau thème. Si le problème est seulement la lenteur ou un défaut précis, un audit suffit souvent. La page [[/solutions/moderniser-application|moderniser une application]] part du symptôme ; celle-ci dit comment on refait.",
    blocks: [
      {
        h: "Garder, réécrire, jeter",
        p: [
          "On lit ce qui est en production : parcours encore utilisés, données à ne pas perdre, comptes, branchements. On réécrit ce que plus personne n'ose toucher. On jette les écrans que les logs ou l'équipe disent morts. Tout réécrire « pour être propre » est la façon la plus sûre de livrer moins que l'existant.",
        ],
      },
      {
        h: "La bascule",
        p: [
          "Les utilisateurs passent quand leurs dossiers sont là et que le geste principal prend le même temps. Une bascule un vendredi soir sans retour arrière est un choix, pas une obligation. On prévoit qui surveille le lundi. Le sujet voisin, la [[/solutions/moderniser-application/migration|migration]], concerne le déménagement des données et des comptes quand on change de socle.",
        ],
      },
    ],
    faqs: [
      { q: "Faut-il le code source ?", a: "Oui pour une refonte honnête. Sans code, on observe le comportement et l'on reconstruit. Ce n'est plus une refonte, c'est un nouveau logiciel informé par l'ancien. Le délai n'est pas le même." },
      { q: "L'équipe doit-elle réapprendre ?", a: "Le moins possible sur les gestes quotidiens. La nouveauté se concentre là où l'ancien système mentait ou bloquait." },
    ],
    proof: [],
    links: [
      { href: "/application-web-sur-mesure-maroc", label: "Application web" },
      { href: "/services/audit-correction", label: "Audit et correction" },
      { href: "/solutions/moderniser-application/refonte-web", label: "Le problème de la refonte" },
      contact,
    ],
  },
];
