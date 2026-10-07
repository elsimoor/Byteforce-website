import type { MoneyPage } from "./types";

const contact = { href: "/contact", label: "Décrire la situation" };

export const solutionPages: MoneyPage[] = [
  {
    path: "solutions/remplacer-excel",
    group: "Problème",
    crumb: "Remplacer Excel",
    keyword: "remplacer Excel par un logiciel",
    title: "Remplacer Excel quand le fichier est devenu l'entreprise",
    description:
      "Doublons, versions, droits absents. Quand sortir d'Excel, et quand le garder. Byte Force, Casablanca, sans chiffre inventé.",
    h1: "Remplacer Excel",
    cta: "Montrer comment le fichier circule",
    schema: "article",
    lede: "Excel devient un problème le jour où le fichier est la mémoire de l'entreprise et que plus personne ne peut le modifier sans risque. Le remplacer n'est pas une mode. C'est une décision, et elle est parfois mauvaise.",
    blocks: [
      {
        h: "Les symptômes",
        items: [
          "« Quelle est la dernière version » est une question quotidienne.",
          "Deux services ont des totaux différents pour la même chose.",
          "Un départ ou un congé bloque le fichier.",
          "Une couleur, un onglet caché ou un commentaire tient lieu de règle.",
          "Le soir, quelqu'un recolle les morceaux pour que la direction ait un chiffre.",
        ],
      },
      {
        h: "La cause",
        p: [
          "Excel est un excellent tableur pour une personne. Il n'a pas de droits fins, pas d'historique fiable dès que le fichier est copié, pas d'état obligatoire. L'entreprise a grandi, le fichier non. La cause n'est pas « le manque de digital ». C'est un outil solo utilisé comme base commune.",
        ],
      },
      {
        h: "Quand ça coûte, et quand il faut s'abstenir",
        p: [
          "Ça coûte quand une commande est perdue, un stock promis deux fois, ou une relance oubliée parce que la ligne était sur l'autre onglet. Tant que le fichier est un brouillon personnel, le changer coûte plus cher que le garder.",
          "Les suites ne sont pas toutes un gros logiciel. [[/solutions/remplacer-excel/automatisation|Automatiser]] le passage qui fait mal. [[/solutions/remplacer-excel/centralisation-donnees|Centraliser]] si le mal est la dispersion. Un [[/developpement-logiciel-sur-mesure-maroc/crm/remplacer-excel|CRM]] si le fichier est le pipeline commercial. Un [[/developpement-logiciel-sur-mesure-maroc/logiciel-metier/gestion|suivi de dossiers]] si le fichier est l'opération.",
        ],
      },
    ],
    faqs: [
      { q: "Faut-il tout quitter Excel ?", a: "Non. Les calculs, les simulations et les exports peuvent rester. Ce qui part, c'est la base que plusieurs personnes modifient." },
      { q: "Peut-on migrer les feuilles ?", a: "Les feuilles stables, oui. On mappe les colonnes avant. On ne migre pas les mises en forme comme si elles étaient des données." },
      { q: "Qui le fait ?", a: "Byte Force, depuis Casablanca. Le code et la base reviennent à l'entreprise." },
    ],
    proof: [],
    links: [
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
      contact,
    ],
  },
  {
    path: "solutions/remplacer-excel/automatisation",
    group: "Problème",
    crumb: "Automatiser",
    keyword: "automatiser les processus Excel",
    title: "Automatiser ce qu'Excel fait encore à la main",
    description:
      "Recopie, relance, consolider trois onglets. Automatiser le geste, sans remplacer tout le fichier le premier jour.",
    h1: "Automatiser à la sortie d'Excel",
    cta: "Nommer la recopie",
    schema: "article",
    lede: "Parfois le fichier peut rester, et c'est la recopie qui doit disparaître. Automatiser au sortir d'Excel, c'est faire faire par une règle ce qu'une personne colle d'un onglet à l'autre chaque matin.",
    blocks: [
      {
        h: "Le geste type",
        p: [
          "Exporter une commande, la recoller dans un suivi, changer une couleur, envoyer un message si la cellule est rouge. Ce geste a une règle. Tant qu'elle est stable, elle peut sortir du presse-papiers. S'il change chaque semaine selon qui est là, l'automatiser fige le désordre.",
          "Ce n'est pas encore le grand [[/developpement-logiciel-sur-mesure-maroc/automatisation|projet d'automatisation]]. C'est le premier morceau, choisi parce qu'Excel est la source.",
        ],
      },
      {
        h: "L'erreur à éviter",
        p: [
          "Automatiser la consolidation de cinq fichiers faux produit un chiffre faux plus vite. On nettoie la source, ou on désigne un seul fichier maître, avant d'écrire la règle.",
        ],
      },
    ],
    faqs: [
      { q: "Un script Excel suffit-il ?", a: "Pour un geste local, souvent oui. Dès que deux personnes et un autre outil sont dans la boucle, le script dans un classeur redevient opaque. On le sort." },
      { q: "Où va la suite ?", a: "Si d'autres fichiers tombent pour la même raison, on regarde [[/solutions/remplacer-excel|le remplacement]], pas un deuxième script." },
    ],
    proof: [],
    links: [
      { href: "/solutions/remplacer-excel", label: "Remplacer Excel" },
      { href: "/developpement-logiciel-sur-mesure-maroc/automatisation", label: "Automatisation des processus" },
      contact,
    ],
  },
  {
    path: "solutions/remplacer-excel/centralisation-donnees",
    group: "Problème",
    crumb: "Centraliser",
    keyword: "centraliser les données Excel",
    title: "Centraliser des données éparpillées dans Excel",
    description:
      "Plusieurs classeurs, plusieurs vérités. Comment désigner une source, et ce qu'une base change vraiment.",
    h1: "Centraliser les données",
    cta: "Lister les fichiers qui se contredisent",
    schema: "article",
    lede: "Centraliser, c'est qu'une information ait un seul endroit modifiable. Tant que le stock est dans un fichier, la promesse client dans un autre et le chiffre du lundi dans un troisième, ajouter un logiciel par-dessus ne fait qu'une quatrième version.",
    blocks: [
      {
        h: "Désigner la source",
        p: [
          "Pour chaque information qui compte, une question : qui a le droit de la changer, et où. Le client a un nom. La commande a un état. Le stock a une quantité. Si deux fichiers peuvent les modifier, il n'y a pas de source. Le travail de centralisation commence par cette liste, pas par le choix d'une base.",
          "[[/realisations/re-proche-de-moi|Proche de moi]] montre, dans un autre domaine, des fiches consultables au lieu de documents épars. Ce n'est pas un projet de stock. C'est l'idée : une fiche, pas une pièce jointe.",
        ],
      },
      {
        h: "Ce que la base ne répare pas",
        p: [
          "Elle ne devine pas laquelle des deux lignes était vraie. Ce tri est humain, une fois. Ensuite la base empêche le retour en arrière. Sans ce tri, on a importé le conflit.",
        ],
      },
    ],
    faqs: [
      { q: "Faut-il un data warehouse ?", a: "Non pour une PME qui a trois classeurs. Une base tenue par l'application suffit. Le reporting lourd vient quand il y a déjà une source propre." },
      { q: "Les anciens fichiers ?", a: "Archivés en lecture. Pas branchés comme deuxième saisie." },
    ],
    proof: [
      { href: "/realisations/re-proche-de-moi", title: "Proche de moi", note: "Des fiches publiées plutôt que des documents dispersés. Lille, 2024." },
    ],
    links: [
      { href: "/solutions/remplacer-excel", label: "Remplacer Excel" },
      { href: "/application-web-sur-mesure-maroc/dashboard", label: "Lire ces données" },
      contact,
    ],
  },
  {
    path: "solutions/remplacer-saas",
    group: "Problème",
    crumb: "Remplacer un SaaS",
    keyword: "remplacer un SaaS",
    title: "Remplacer un SaaS qui dicte le métier",
    description:
      "Abonnements, contournements, données bloquées. Quand écrire son logiciel, et quand renégocier l'outil.",
    h1: "Remplacer un SaaS",
    cta: "Nommer l'abonnement",
    schema: "article",
    lede: "On remplace un SaaS quand l'outil a pris le pas sur le métier : l'équipe contourne, paie des sièges inutiles, et ne peut pas sortir ses dossiers. On ne le remplace pas parce qu'un concurrent a un plus bel écran.",
    blocks: [
      {
        h: "Symptômes",
        items: [
          "Un export quotidien recolle ce que l'outil ne sait pas montrer.",
          "Des champs sont détournés (« le téléphone contient le code dépôt »).",
          "Le prix monte avec des modules que l'on n'utilise pas, parce que le seul dont on a besoin est dans le pack.",
          "Partir est flou : les données s'exportent mal, ou pas du tout.",
        ],
      },
      {
        h: "Trois voies",
        p: [
          "[[/solutions/remplacer-saas/reduire-couts|Réduire le coût]] sans réécrire : couper des sièges, des modules, des doublons d'outils. [[/solutions/remplacer-saas/logiciel-personnalise|Écrire le morceau]] que l'éditeur ne fera pas. Ou [[/developpement-saas-maroc/remplacer-saas|reprendre le produit]] si vous le revendez vous-même à plusieurs clients. Ces trois voies ne sont pas le même projet.",
        ],
      },
    ],
    faqs: [
      { q: "Est-ce toujours rentable ?", a: "Non. Un abonnement de quelques utilisateurs, même imparfait, coûte souvent moins qu'un développement. On fait le calcul avec vos sièges réels, pas avec une promesse de pourcentage." },
      { q: "Les données peuvent-elles sortir ?", a: "Il faut le vérifier avant de décider. Un outil qui ne laisse pas partir les dossiers est un argument. Un outil qui exporte proprement retire l'urgence." },
    ],
    proof: [],
    links: [
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
      contact,
    ],
  },
  {
    path: "solutions/remplacer-saas/reduire-couts",
    group: "Problème",
    crumb: "Réduire les coûts",
    keyword: "réduire les coûts SaaS",
    title: "Réduire le coût des SaaS avant de réécrire",
    description:
      "Sièges vides, outils en double, modules jamais ouverts. Le tri vient avant le développement.",
    h1: "Réduire les coûts SaaS",
    cta: "Lister les abonnements",
    schema: "article",
    lede: "Réduire le coût des SaaS commence par une liste : qui paie quoi, qui se connecte, quel outil fait le même travail qu'un autre. Écrire un logiciel pour « économiser » sans cette liste produit une dépense de plus.",
    blocks: [
      {
        h: "Ce que l'on coupe sans développer",
        items: [
          "Les sièges de personnes parties.",
          "Le deuxième outil de la même tâche, gardé « au cas où ».",
          "Le module dont personne ne connaît le mot de passe.",
          "L'export payant qui existe parce que l'écran principal est inutilisable : parfois un réglage suffit.",
        ],
        p: [
          "Byte Force peut aider à lire cette liste. Ce n'est pas un audit certifié, et ce n'est pas une promesse d'économie en pourcentage. Si après le tri le métier est encore tordu par l'outil, on parle de [[/solutions/remplacer-saas/logiciel-personnalise|logiciel]].",
        ],
      },
    ],
    faqs: [
      { q: "Faut-il un logiciel pour payer moins ?", a: "Souvent non. Le développement se justifie par une règle que l'abonnement ne fera pas, pas par la facture seule." },
      { q: "Qui résilie ?", a: "L'entreprise, sur ses comptes. On ne coupe pas un outil à votre place." },
    ],
    proof: [],
    links: [
      { href: "/solutions/remplacer-saas", label: "Remplacer un SaaS" },
      { href: "/developpement-saas-maroc/remplacer-saas", label: "Si le remplacement est un produit" },
      contact,
    ],
  },
  {
    path: "solutions/remplacer-saas/logiciel-personnalise",
    group: "Problème",
    crumb: "Logiciel personnalisé",
    keyword: "logiciel personnalisé",
    title: "Le logiciel personnalisé à la place du contournement",
    description:
      "Garder l'abonnement pour ce qu'il fait bien. Écrire seulement la règle qu'il refuse. Données et code chez vous.",
    h1: "Logiciel personnalisé",
    cta: "Décrire le contournement",
    schema: "article",
    lede: "Le logiciel personnalisé, ici, est le morceau que l'abonnement ne sait pas faire et que l'équipe bricole. On ne réécrit pas la messagerie. On écrit la règle métier, et on laisse l'éditeur là où il est honnête.",
    blocks: [
      {
        h: "Le découpage",
        p: [
          "On nomme le contournement en une phrase : « chaque soir, on recolle les commandes dans un fichier parce que le statut livraison n'existe pas ». Cette phrase est le périmètre. Le reste de l'abonnement reste. Le lien, s'il existe, est une [[/developpement-logiciel-sur-mesure-maroc/automatisation/integration-api|intégration]], pas une guerre de remplacement.",
          "Le cadre de construction est le [[/developpement-logiciel-sur-mesure-maroc|logiciel sur mesure]]. Cette page sert à décider si le morceau vaut d'être écrit.",
        ],
      },
    ],
    faqs: [
      { q: "Et si l'éditeur ajoute la fonction dans six mois ?", a: "Possible. Si votre contournement est temporaire et supportable, attendre peut être raisonnable. S'il coûte chaque semaine, attendre est aussi un coût. On le dit sans théâtre." },
      { q: "Le code est-il à nous ?", a: "Oui, à la remise. L'abonnement que vous gardez reste sous le contrat de l'éditeur." },
    ],
    proof: [],
    links: [
      { href: "/solutions/remplacer-saas", label: "Remplacer un SaaS" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Développement sur mesure" },
      contact,
    ],
  },
  {
    path: "solutions/automatisation-entreprise",
    group: "Problème",
    crumb: "Automatiser l'entreprise",
    keyword: "automatiser son entreprise",
    title: "Automatiser son entreprise, un processus à la fois",
    description:
      "WhatsApp, Excel, email : le circuit manuel. Par où commencer sans automatiser le chaos.",
    h1: "Automatiser son entreprise",
    cta: "Raconter un circuit d'une journée",
    schema: "article",
    lede: "Automatiser son entreprise commence par un circuit que l'on peut raconter : une demande arrive, quelqu'un la recopie, quelqu'un d'autre la relance, le client redemande où ça en est. Tant que ce récit n'existe pas, il n'y a rien à automatiser.",
    blocks: [
      {
        h: "Le circuit que l'on voit souvent",
        p: [
          "Le client écrit sur WhatsApp. Quelqu'un note dans Excel. Un devis part par email. Le statut vit dans la tête de la personne qui a répondu. Ça marche à trois. À huit, les oublis sont le produit. La cause n'est pas l'absence d'un robot. C'est l'absence d'un état partagé.",
          "Deux précisions : le [[/solutions/automatisation-entreprise/workflow|workflow]] est le circuit avec ses états. [[/solutions/automatisation-entreprise/integration-outils|Connecter les outils]] est le cas où les logiciels existent déjà et ne se parlent pas. La construction est sur [[/developpement-logiciel-sur-mesure-maroc/automatisation|l'automatisation logicielle]].",
        ],
      },
      {
        h: "L'erreur chère",
        p: [
          "Automatiser cinq outils le même mois. Le premier circuit livré et utilisé apprend plus que cinq maquettes. On choisit celui dont l'oubli se voit chez le client.",
        ],
      },
    ],
    faqs: [
      { q: "Faut-il un chef de projet interne ?", a: "Oui, une personne qui vit le circuit. Sans elle, on automatise l'organigramme." },
      { q: "L'IA est-elle nécessaire ?", a: "Rarement pour ce problème. Une règle claire et un état partagé suffisent. L'IA n'est pas un synonyme d'automatisation." },
    ],
    proof: [],
    links: [
      { href: "/developpement-logiciel-sur-mesure-maroc/automatisation/entreprise", label: "Côté construction" },
      contact,
    ],
  },
  {
    path: "solutions/automatisation-entreprise/workflow",
    group: "Problème",
    crumb: "Workflow",
    keyword: "automatisation workflow",
    title: "Automatiser un workflow",
    description:
      "États, responsables, retours en arrière. Un workflow est une file de décisions, pas un dessin de flèches.",
    h1: "Automatiser un workflow",
    cta: "Écrire les états sur un papier",
    schema: "article",
    lede: "Un workflow est la liste des états d'un dossier et des personnes qui ont le droit de les changer. L'automatiser, c'est que le dossier avance, revienne en arrière, et prévienne, sans qu'un message « tu peux regarder » soit le seul moteur.",
    blocks: [
      {
        h: "Ce qu'un schéma oublie",
        p: [
          "Les flèches montrent le cas heureux. Le travail réel est le retour : pièce manquante, client qui change, validation refusée. Si le workflow ne sait pas revenir, l'équipe sortira du logiciel pour le cas pénible, c'est-à-dire le cas qui compte.",
          "On écrit les états avec les verbes de l'équipe. « En attente de pièce » est un état. « Phase 2 » n'en est pas un.",
        ],
      },
    ],
    faqs: [
      { q: "Combien d'états ?", a: "Assez pour que deux personnes ne se demandent pas où ça en est. Rarement plus de sept au début. Au-delà, c'est souvent deux workflows collés." },
      { q: "Les notifications ?", a: "Une, à la personne qui doit agir. Dix notifications et plus personne ne lit." },
    ],
    proof: [],
    links: [
      { href: "/solutions/automatisation-entreprise", label: "Automatiser l'entreprise" },
      { href: "/developpement-logiciel-sur-mesure-maroc/logiciel-metier/gestion", label: "Suivi de dossiers" },
      contact,
    ],
  },
  {
    path: "solutions/automatisation-entreprise/integration-outils",
    group: "Problème",
    crumb: "Connecter les outils",
    keyword: "connecter les outils",
    title: "Connecter les outils déjà en place",
    description:
      "CRM, mail, paiement, tableau : les faire se parler sans tout remplacer. Erreurs et reprises incluses.",
    h1: "Connecter les outils",
    cta: "Nommer les deux outils",
    schema: "article",
    lede: "Connecter les outils, c'est arrêter la ressaisie entre des logiciels que l'entreprise a déjà décidé de garder. Ce n'est pas un projet de remplacement. Si l'un des outils est le problème, on ne le branche pas plus fort : on regarde [[/solutions/remplacer-saas|s'il doit partir]].",
    blocks: [
      {
        h: "Le bon raccord",
        p: [
          "Une information naît dans un outil et doit apparaître dans l'autre : un paiement crée une commande, un statut clôt une relance. On écrit ce sens unique. Les synchronisations « dans les deux sens sur tous les champs » se contredisent. La technique est l'[[/developpement-logiciel-sur-mesure-maroc/automatisation/integration-api|intégration API]] quand une API existe.",
          "Snapchat Collect, dans le catalogue, est un flux de collecte et de redirection déjà en ligne. Ce n'est pas votre comptabilité. C'est un exemple de flux étroit, pas d'usine.",
        ],
      },
    ],
    faqs: [
      { q: "Et si l'outil n'a pas d'API ?", a: "Un fichier déposé à heure fixe peut suffire. C'est plus fragile, et on le dit. Parfois le bon conseil est de changer d'outil plutôt que de gratter un écran." },
      { q: "Qui surveille les ratés ?", a: "Une personne nommée, avec une file visible. Un raccord sans responsable est une perte silencieuse." },
    ],
    proof: [
      { href: "/realisations/snapchat-collect", title: "Snapchat Collect", note: "Un flux court, déjà publié, entre collecte et redirection. 2024." },
    ],
    links: [
      { href: "/solutions/automatisation-entreprise", label: "Automatiser l'entreprise" },
      { href: "/services/api-backend", label: "API et backend" },
      contact,
    ],
  },
  {
    path: "solutions/moderniser-application",
    group: "Problème",
    crumb: "Moderniser",
    keyword: "moderniser une application",
    title: "Moderniser une application qui fait peur à modifier",
    description:
      "Lente, fragile, connue d'une seule personne. Moderniser sans tout jeter, ni faire semblant qu'un thème suffit.",
    h1: "Moderniser une application",
    cta: "Dire ce que plus personne n'ose changer",
    schema: "article",
    lede: "Moderniser une application, c'est pouvoir la modifier encore dans deux ans sans prier. Le symptôme est connu : une seule personne sait, une petite demande prend des semaines, on a peur de toucher. Le remède n'est pas automatiquement une réécriture.",
    blocks: [
      {
        h: "Trois niveaux",
        p: [
          "Un défaut localisé relève de l'[[/services/audit-correction|audit et de la correction]]. Une application web encore utile mais intouchable relève de la [[/solutions/moderniser-application/refonte-web|refonte]]. Un socle que l'on quitte, avec les données et les comptes, relève de la [[/solutions/moderniser-application/migration|migration]]. Les mélanger dans un devis unique est la façon de ne rien finir.",
        ],
      },
      {
        h: "Ce qu'il ne faut pas croire",
        p: [
          "« On va le passer en moderne » n'est pas un besoin. Le besoin est une modification que l'entreprise n'arrive plus à obtenir : un nouveau rôle, un nouveau canal, une correction qui traîne. On part de là.",
        ],
      },
    ],
    faqs: [
      { q: "Faut-il tout réécrire ?", a: "Seulement si le coût de modifier dépasse le coût de reprendre le geste principal. Souvent un cœur se garde et les bords se réécrivent." },
      { q: "Et si la personne qui sait part ?", a: "C'est le moment de documenter le comportement réel, pas l'intention d'origine. Le code, s'il existe, se lit. S'il n'existe pas, on le dit : on reconstruit." },
    ],
    proof: [],
    links: [
      { href: "/application-web-sur-mesure-maroc/refonte", label: "Refonte, côté construction" },
      { href: "/services/maintenance", label: "Maintenance" },
      contact,
    ],
  },
  {
    path: "solutions/moderniser-application/refonte-web",
    group: "Problème",
    crumb: "Refonte web",
    keyword: "refonte application web",
    title: "Refonte web : ce qui doit changer pour les utilisateurs",
    description:
      "L'application sert encore, mais chaque changement est un risque. Ce qu'il faut observer avant de commander une refonte.",
    h1: "Refonte d'application web",
    cta: "Lister les changements en attente",
    schema: "article",
    lede: "La refonte web se justifie quand l'application sert encore et que la file des changements ne sort plus. Elle ne se justifie pas pour « faire plus moderne » si l'équipe s'en sert sans douleur. Le comment est sur [[/application-web-sur-mesure-maroc/refonte|la page construction]].",
    blocks: [
      {
        h: "Avant de signer",
        items: [
          "Quels écrans sont ouverts chaque jour.",
          "Quels changements sont demandés depuis six mois et jamais livrés.",
          "Où sont le code, la base et les comptes.",
          "Qui pleurera si l'application s'arrête une heure.",
        ],
        p: [
          "Sans ces quatre réponses, une refonte est un vœu. Avec elles, on peut dire si un audit suffit.",
        ],
      },
    ],
    faqs: [
      { q: "Les utilisateurs vont-ils rechigner ?", a: "Oui si le geste quotidien change pour rien. La refonte réussie est ennuyeuse sur les actions fréquentes." },
      { q: "C'est différent d'une refonte de site ?", a: "Oui. Un site vitrine se juge à la page. Une application se juge à la tâche finie. On ne vend pas l'un pour l'autre." },
    ],
    proof: [],
    links: [
      { href: "/solutions/moderniser-application", label: "Moderniser" },
      { href: "/application-web-sur-mesure-maroc/refonte", label: "Construire la refonte" },
      contact,
    ],
  },
  {
    path: "solutions/moderniser-application/migration",
    group: "Problème",
    crumb: "Migration",
    keyword: "migration application",
    title: "Migrer une application sans perdre les dossiers",
    description:
      "Changer de socle : données, comptes, fichiers, et le week-end où l'on bascule. Ce qui doit être écrit avant.",
    h1: "Migration d'application",
    cta: "Dire ce qui ne doit pas se perdre",
    schema: "article",
    lede: "Migrer une application, c'est changer l'endroit où vivent les dossiers, les comptes et les fichiers, puis faire travailler les gens au nouvel endroit. Le risque n'est pas le nouveau design. C'est un dossier ouvert qui n'arrive pas, ou qui arrive deux fois.",
    blocks: [
      {
        h: "L'ordre",
        p: [
          "Inventaire de ce qui est encore vivant. Essai de migration sur une copie. Comparaison : nombre de dossiers, un échantillon lu par l'équipe, pas seulement un total. Bascule avec l'ancien en lecture seule. Une personne joignable le lendemain. Cet ordre n'est pas négociable pour faire joli dans un planning.",
          "La [[/solutions/moderniser-application/refonte-web|refonte]] peut inclure une migration. Elles ne sont pas synonymes : on peut refondre sans déménager, et déménager sans tout redessiner.",
        ],
      },
    ],
    faqs: [
      { q: "Faut-il tout l'historique ?", a: "L'historique encore demandé, oui. Le reste peut rester en archive consultable. Tout migrer « pour ne rien perdre » ralentit et importe des erreurs mortes." },
      { q: "Peut-on revenir en arrière ?", a: "Oui si l'ancien est resté en lecture et que la bascule est datée. Non si l'on a déjà écrit des jours de travail des deux côtés." },
    ],
    proof: [],
    links: [
      { href: "/solutions/moderniser-application", label: "Moderniser" },
      { href: "/application-web-sur-mesure-maroc/refonte", label: "Refonte web" },
      contact,
    ],
  },
  {
    path: "solutions/logiciel-pme",
    group: "Secteur",
    crumb: "Logiciel PME",
    keyword: "logiciel pour PME",
    title: "Logiciel pour une PME",
    description:
      "Une PME n'a pas besoin d'un ERP de groupe. Elle a besoin du circuit qui casse. Byte Force cadre petit, à Casablanca.",
    h1: "Logiciel pour une PME",
    cta: "Décrire l'équipe réelle",
    schema: "service",
    lede: "Une PME a rarement un service informatique et rarement le temps d'un projet de dix-huit mois. Le logiciel utile est celui qui retire une confusion précise : le suivi, le devis, le stock du petit dépôt. Pas une suite qui imite un groupe.",
    blocks: [
      {
        h: "Ce qui change avec la taille",
        p: [
          "Le dirigeant est souvent dans le circuit. S'il n'a pas une heure pour montrer comment un dossier avance, le projet décrit un souhait. On écrit pour les deux ou trois rôles qui existent, pas pour un organigramme futur.",
          "Le budget se protège par le découpage. Une première version courte, utilisée, puis la suite. Le [[/developpement-logiciel-sur-mesure-maroc|sur-mesure]] et le [[/solutions/logiciel-entreprise|logiciel d'une entreprise plus structurée]] ne se vendent pas avec le même découpage.",
        ],
      },
      {
        h: "Ce qu'on refuse",
        p: [
          "Un « digitalisation complète » sans processus nommé. C'est un slogan. La page [[/solutions/digitalisation-entreprise|digitalisation]] dit la même chose plus crûment.",
        ],
      },
    ],
    faqs: [
      { q: "Une PME peut-elle posséder son logiciel ?", a: "Oui. C'est même le point : le code ne reste pas chez un éditeur qui change ses prix. La maintenance, elle, demande quelqu'un, en interne ou en suivi." },
      { q: "Faut-il embaucher un développeur après ?", a: "Pas forcément. Il faut quelqu'un qui connaît le métier et peut décrire un changement. L'écriture peut rester externe." },
    ],
    proof: [
      { href: "/realisations/dealkhir", title: "Dealkhir", note: "Une plateforme d'ampleur tenable, en ligne à Casablanca depuis 2024. Pas une suite de groupe." },
    ],
    links: [
      { href: "/solutions/remplacer-excel", label: "Si le point de départ est Excel" },
      { href: "/developpement-logiciel-casablanca", label: "À Casablanca" },
      contact,
    ],
  },
  {
    path: "solutions/logiciel-entreprise",
    group: "Secteur",
    crumb: "Logiciel entreprise",
    keyword: "logiciel pour entreprise",
    title: "Logiciel pour une entreprise déjà outillée",
    description:
      "Plusieurs services, des outils déjà là, des règles de validation. Le logiciel d'entreprise se branche, il ne repart pas de zéro.",
    h1: "Logiciel pour une entreprise",
    cta: "Dire quel service bloque l'autre",
    schema: "service",
    lede: "Une entreprise déjà structurée n'a pas un problème de « présence en ligne ». Elle a des services qui ne partagent pas le même état : commerce, opérations, finance. Le logiciel vient là où ces services se contredisent, pas à la place de tout ce qui marche.",
    blocks: [
      {
        h: "Le contexte",
        p: [
          "Il y a déjà des comptes, parfois un ERP partiel, un cabinet comptable, des habitudes de validation. Ignorer ça, c'est livrer un îlot. Le bon projet nomme la frontière : ce qui reste dans l'outil actuel, ce qui est écrit, comment les deux se parlent. Voir [[/developpement-logiciel-sur-mesure-maroc/erp|l'ERP]] si plusieurs ressources sont dans le même flux, ou [[/solutions/automatisation-entreprise/integration-outils|la connexion]] si les outils doivent seulement se parler.",
        ],
      },
      {
        h: "Décision",
        p: [
          "Le sponsor qui ne se sert pas du logiciel ne suffit pas. Il faut le responsable du flux, et le droit de dire non à un service qui veut son module dans la même version. Sans ce droit, le projet redevient une liste de souhaits.",
        ],
      },
    ],
    faqs: [
      { q: "C'est différent d'une PME ?", a: "Oui sur le nombre de parties et d'outils déjà payés. Non sur la règle : un flux, livré, utilisé, avant le suivant." },
      { q: "Travaillez-vous avec la DSI ?", a: "S'il y en a une, oui. Le dépôt, les accès et la mise en production se font avec elle. On ne pose pas un serveur dans un coin." },
    ],
    proof: [],
    links: [
      { href: "/solutions/logiciel-pme", label: "Plutôt une PME" },
      { href: "/developpement-logiciel-sur-mesure-maroc/erp/logiciel-gestion-entreprise", label: "Logiciel de gestion" },
      contact,
    ],
  },
  {
    path: "solutions/digitalisation-entreprise",
    group: "Secteur",
    crumb: "Digitalisation",
    keyword: "digitalisation entreprise",
    title: "Digitaliser une entreprise : par le processus, pas par le slogan",
    description:
      "La digitalisation utile nomme un papier, un message ou un fichier qui bloque. Byte Force refuse le mot s'il ne cache rien.",
    h1: "Digitalisation d'entreprise",
    cta: "Montrer le papier ou le message",
    schema: "service",
    lede: "Digitaliser une entreprise, au sens utile, c'est qu'un geste qui vit sur papier, dans un message ou dans un fichier ait enfin un état que plusieurs personnes peuvent voir. Le mot seul ne décrit pas un projet. S'il n'y a pas de geste, il n'y a rien à construire.",
    blocks: [
      {
        h: "Par quoi ça commence vraiment",
        p: [
          "Un bon de livraison signé sur papier puis ressaisi. Un accord donné par message vocal. Une validation qui attend que quelqu'un soit au bureau. Chacun de ces gestes peut devenir un écran, un droit, une trace. « Devenir digital » ne peut pas.",
          "Selon le geste, la suite est [[/solutions/remplacer-excel|Excel]], [[/solutions/automatisation-entreprise|l'automatisation]], ou une [[/application-web-sur-mesure-maroc|application web]]. On choisit après avoir vu le geste, pas avant.",
        ],
      },
      {
        h: "Ce que Byte Force ne vend pas",
        p: [
          "Une transformation, une révolution, un accompagnement sans livrable. Il y a un logiciel, un périmètre, une remise. Le bureau est au Technopark à Casablanca, joignable en semaine.",
        ],
      },
    ],
    faqs: [
      { q: "Par où une direction doit-elle commencer ?", a: "Par le geste dont l'absence se voit chez le client cette semaine. Pas par un schéma de tous les services." },
      { q: "Faut-il former tout le monde ?", a: "Les personnes qui font le geste. Une formation générale à « le digital » n'aide pas à utiliser un dossier." },
    ],
    proof: [],
    links: [
      { href: "/solutions/logiciel-pme", label: "Logiciel PME" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
      contact,
    ],
  },
];
