export type ArticleCopy = {
  title: string;
  description: string;
  h1: string;
  lede: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  date: string;
  lede: string;
  sections: { heading: string; paragraphs: string[] }[];
  links: { href: string; label: string }[];
  en?: ArticleCopy;
};

export const articles: Article[] = [
  {
    slug: "cout-logiciel-sur-mesure-maroc",
    title: "Combien coûte un logiciel sur mesure au Maroc",
    description:
      "Byte Force ne publie pas de prix. À Casablanca, le montant suit les écrans, les rôles et les branchements. Premier échange de trente minutes, gratuit.",
    h1: "Combien coûte un logiciel sur mesure au Maroc",
    date: "2026-10-08",
    lede: "Byte Force, au Technopark à Casablanca, ne publie pas de grille de prix pour un logiciel sur mesure. Le montant suit les écrans, les rôles et les branchements. Un premier échange de trente minutes est gratuit. Cette page dit ce qui change la note, et ce qui ne la change pas.",
    sections: [
      {
        heading: "Il n'y a pas de prix affiché",
        paragraphs: [
          "Une page qui annonce « à partir de » un montant en dirhams décrit un forfait, pas le logiciel d'une entreprise précise. Byte Force ne le fait pas. Les pages du site ne sont pas un devis. Un projet commence après un périmètre écrit.",
          "Le [[/developpement-logiciel-sur-mesure-maroc|développement logiciel sur mesure au Maroc]] est le cadre. Le CRM, l'ERP, le logiciel métier et l'automatisation ont chacun leur page, parce qu'un pipeline de devis n'a pas le même périmètre qu'un stock.",
        ],
      },
      {
        heading: "Ce qui fait monter ou baisser le montant",
        paragraphs: [
          "Trois choses comptent. Le nombre d'écrans que quelqu'un utilise vraiment. Le nombre de rôles : qui crée un dossier, qui le valide, qui l'exporte. Les branchements : email, paiement, ou un outil déjà payé qui doit rester.",
          "Vouloir tout gérer d'un coup, congés, flotte, prospects, stock et paie, gonfle le périmètre sans rendre le premier circuit plus sûr. On coupe jusqu'au flux dont le décalage coûte chaque semaine. Le reste attend.",
        ],
      },
      {
        heading: "Ce qui ne change pas le prix",
        paragraphs: [
          "Le bureau est à Casablanca. La proximité ne rajoute pas une taxe, et elle n'en retire pas une non plus. Un projet pour une entreprise en France se fait depuis ce bureau : il n'y a pas de bureau en France ni au Canada.",
          "Un tableur de dix lignes, une comptabilité standard ou une messagerie n'appellent pas un logiciel sur mesure. L'échange sert aussi à dire non, et à laisser l'outil du marché en place.",
        ],
      },
      {
        heading: "Comment la note se décide",
        paragraphs: [
          "Un acompte lance le travail. Le reste suit des étapes liées à ce qui a été livré. Si le périmètre change, le changement est écrit et accepté avant d'être construit. À la remise, le client possède le code, le dépôt et les comptes d'hébergement livrés.",
          "Les projets publiés, Dealkhir à Casablanca ou Coco Inbox à Montréal, montrent ce qui est en ligne. Ils ne montrent pas un montant. Pour un chiffre, il faut le circuit réel : [[/contact|écrire à Casablanca]]. La réponse part sous un jour ouvré.",
        ],
      },
    ],
    links: [
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Développement logiciel sur mesure" },
      { href: "/developpement-logiciel-casablanca", label: "Depuis Casablanca" },
      { href: "/contact", label: "Décrire le circuit" },
    ],
  },
  {
    slug: "delai-logiciel-sur-mesure",
    title: "Délai d'un logiciel sur mesure",
    description:
      "Pas de délai fixe. Un audit tient en quelques jours, une première version souvent en plusieurs semaines. Byte Force, Casablanca.",
    h1: "Combien de temps pour un logiciel sur mesure",
    date: "2026-10-08",
    lede: "Byte Force ne promet pas un nombre de semaines valable pour tout le monde. À Casablanca, un audit tient en quelques jours. Une première version tient souvent en plusieurs semaines. Le délai suit le nombre de rôles et de branchements.",
    sections: [
      {
        heading: "Ce qui tient en jours",
        paragraphs: [
          "La réponse à un message part sous un jour ouvré, du lundi au vendredi, de 9h à 19h. Le premier échange dure trente minutes. Il sert à voir si le problème est un logiciel, ou un outil du marché qu'il faut garder.",
          "L'audit du besoin, avant d'écrire, tient en quelques jours : les étapes d'un dossier, dites par ceux qui le traitent, et les cas qui partent en exception. Ce n'est pas un cahier de cinquante pages.",
        ],
      },
      {
        heading: "Ce qui tient en semaines",
        paragraphs: [
          "Une première version est souvent une application web, une base, des rôles, et les branchements utiles. Elle ne couvre pas la paie, le site vitrine et le CRM complet en même temps. Ajouter ces trois sujets allonge le délai plus sûrement qu'un choix de technologie.",
          "Un besoin standard, déjà couvert par un logiciel du marché, se met en place en jours. Le sur-mesure prend des semaines parce qu'il suit l'entreprise, pas un paramétrage. Le [[/developpement-logiciel-sur-mesure-maroc|logiciel sur mesure]] décrit ce cadre.",
        ],
      },
      {
        heading: "Ce qui n'est pas une date",
        paragraphs: [
          "Il n'y a pas de date de mise en ligne promise sur cette page. Elle se pose quand le périmètre est écrit. Un changement de périmètre, accepté avant d'être construit, décale la suite. Le construire sans l'écrire décale aussi, et personne ne sait de combien.",
          "Pour poser une date sur un circuit précis, [[/contact|décrire le projet]]. Le téléphone est le +212 666 650 696.",
        ],
      },
    ],
    links: [
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Développement logiciel sur mesure" },
      { href: "/developpement-logiciel-casablanca", label: "Depuis Casablanca" },
      { href: "/contact", label: "Poser le périmètre" },
    ],
  },
  {
    slug: "qui-possede-le-code",
    title: "Qui possède le code d'un logiciel sur mesure",
    description:
      "À la remise, le client possède le code, le dépôt et les comptes d'hébergement livrés. Byte Force, Casablanca.",
    h1: "Qui possède le code",
    date: "2026-10-08",
    lede: "À la remise, le client possède le code, le dépôt et les comptes d'hébergement livrés par Byte Force. Le bureau est au Technopark, à Casablanca. Le logiciel ne reste pas chez un éditeur qui change ses prix.",
    sections: [
      {
        heading: "Ce qui est remis",
        paragraphs: [
          "Trois choses : le code, le dépôt, et les comptes d'hébergement qui ont été livrés avec le projet. Les [[/conditions|conditions]] le disent dans les mêmes termes. Elles ne sont pas un devis. Le projet commence après un périmètre écrit.",
          "Posséder le code ne dispense pas d'un responsable métier chez le client. Byte Force écrit le périmètre avec cette personne. Sans elle, le dépôt décrit un processus que personne ne pratique.",
        ],
      },
      {
        heading: "Ce qui n'est pas cédé avant la remise",
        paragraphs: [
          "Avant la remise, le travail est en cours. Un acompte le lance. Le reste suit des étapes liées à ce qui a été livré. Un changement de périmètre est écrit et accepté avant d'être construit.",
          "Un accord de confidentialité est possible avant le brief. La demande passe par le [[/contact|formulaire]].",
        ],
      },
      {
        heading: "Après, qui maintient",
        paragraphs: [
          "Les défauts du périmètre convenu sont corrigés avec la livraison. Après, un correctif est un devis isolé ou un suivi. Posséder le dépôt permet de le confier à quelqu'un d'autre. Le dépôt remis est celui du projet, pas les comptes déjà ouverts chez un éditeur. Le [[/developpement-logiciel-sur-mesure-maroc|logiciel sur mesure]] reste la page du projet lui-même.",
        ],
      },
    ],
    links: [
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Développement logiciel sur mesure" },
      { href: "/conditions", label: "Conditions" },
      { href: "/contact", label: "Parler de la remise" },
    ],
  },
  {
    slug: "apres-la-livraison",
    title: "Après la livraison d'un logiciel",
    description:
      "Les défauts du périmètre sont corrigés avec la livraison. Ensuite, un devis isolé ou un suivi. Byte Force, Casablanca.",
    h1: "Après la livraison",
    date: "2026-10-08",
    lede: "Byte Force corrige les défauts du périmètre convenu avec la livraison. Après la remise, un correctif est soit un devis isolé, soit un suivi. Il n'y a pas d'obligation de rester, et il n'y a pas non plus de logiciel abandonné sans le dire.",
    sections: [
      {
        heading: "Ce qui est inclus dans la livraison",
        paragraphs: [
          "Un défaut, c'est un comportement du périmètre écrit qui ne tient pas. Il est corrigé avec la livraison. Une idée nouvelle, un écran de plus, un rôle qui n'était pas dans le périmètre : ce n'est pas un défaut. C'est un changement, écrit et accepté avant d'être construit.",
          "Le client possède alors le code, le dépôt et les comptes d'hébergement livrés. Il peut arrêter là.",
        ],
      },
      {
        heading: "Ce qui vient après, si on continue",
        paragraphs: [
          "Deux formes. Un correctif isolé, devisé, sans suivi. Ou un suivi. Sur le site, les suivis nommés sont Care, Care Plus et Priority : de la surveillance et des sauvegardes jusqu'à un traitement en 4 heures pour une panne critique, sur le palier Priority. Les délais de réponse se comptent en jours ouvrés, sauf ce palier.",
          "Aucun de ces paliers n'a de prix sur cette page. Le montant se dit au moment du devis. La page [[/services/maintenance|maintenance]] décrit le suivi d'un site. Le [[/developpement-logiciel-sur-mesure-maroc|logiciel sur mesure]] décrit le produit lui-même.",
        ],
      },
      {
        heading: "Quand écrire",
        paragraphs: [
          "Avant le projet, pour savoir qui reprendra le dépôt. Après, pour un correctif ou une panne. [[/contact|Écrire à Casablanca]], ou WhatsApp au +212 666 650 696. La réponse part sous un jour ouvré.",
        ],
      },
    ],
    links: [
      { href: "/services/maintenance", label: "Maintenance" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
      { href: "/contact", label: "Décrire la suite" },
    ],
  },
  {
    slug: "site-web-ou-logiciel",
    title: "Site web ou logiciel sur mesure",
    description:
      "Un site explique l'offre et recueille une demande. Un logiciel tient le dossier, les rôles et les règles. Byte Force, Casablanca, fait les deux quand il le faut.",
    h1: "Site web ou logiciel sur mesure",
    date: "2026-10-08",
    lede: "Byte Force, à Casablanca, fait les deux, et ce n'est pas la même commande. Un site explique l'offre et recueille une demande. Un logiciel sur mesure tient un dossier, des rôles et une règle que le tableur ne sait pas garder.",
    sections: [
      {
        heading: "Quand c'est un site",
        paragraphs: [
          "Le visiteur doit comprendre l'offre et écrire. Une boutique, une vitrine, une page de prestations. Escapade Florale, Meubles de Septentrion ou Ambulances Valcq sont de cet ordre : le site est en ligne, et la fiche ne prétend pas qu'un logiciel de stock a été livré avec.",
          "La page [[/services/creation-site-web|création de site web à Casablanca]] est celle-là. Ce n'est pas un forfait de trois pages au thème. C'est le site dont le métier a besoin pour être compris.",
        ],
      },
      {
        heading: "Quand c'est un logiciel",
        paragraphs: [
          "Plusieurs personnes agissent sur le même dossier, avec un droit de valider et un historique. Le fichier se contredit, ou l'abonnement force un contournement chaque semaine. Là, le [[/developpement-logiciel-sur-mesure-maroc|logiciel sur mesure]] est la page à lire.",
          "Dealkhir, Proche de moi, Coco Inbox et Tourispeak sont des produits publiés, pas des vitrines. On ne les présente pas comme un CRM ou un ERP : le catalogue n'a pas de logiciel vertical chiffré pour un métier réglementé.",
        ],
      },
      {
        heading: "Quand les deux se touchent",
        paragraphs: [
          "Une entreprise peut avoir un site pour être trouvée et un logiciel pour travailler. Les construire comme un seul paquet, sans dire lequel reçoit la demande et lequel tient le dossier, produit un outil que personne n'ouvre. On sépare les deux périmètres.",
          "Le cœur du studio est le logiciel. Le site, le référencement, l'hébergement et un plugin WordPress existent quand le projet en a besoin. Pour trancher, [[/contact|décrire ce que la personne doit pouvoir faire]].",
        ],
      },
    ],
    links: [
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
      { href: "/services/creation-site-web", label: "Création de site web" },
      { href: "/contact", label: "Décrire le geste" },
    ],
  },
  {
    slug: "site-lisible-par-une-machine",
    title: "Un site qu'une machine peut lire",
    description:
      "Un visiteur comprend parfois un site qu'une machine ne peut ni citer ni utiliser pour écrire. Byte Force, à Casablanca, lit ce passage puis construit la suite.",
    h1: "Un site qu'une machine peut comprendre",
    date: "2026-10-08",
    lede: "Byte Force, au Technopark à Casablanca, conçoit des logiciels et des sites qu'un humain et une machine peuvent trouver, comprendre, et utiliser pour écrire. Si le vôtre est déjà en ligne, le premier geste est de le décrire : [[/contact|parler du projet]].",
    sections: [
      {
        heading: "Ce qu'une personne voit, et ce qu'une machine peut citer",
        paragraphs: [
          "Une page peut être claire pour quelqu'un qui la lit, et rester opaque pour un outil qui doit répondre : que fait cette entreprise, où est-elle, comment lui écrire. Autoriser un robot ne veut pas dire qu'il recommandera le site. Un fichier llms.txt n'est pas non plus un facteur de classement.",
          "Le passage utile tient en cinq questions. Est-ce qu'on peut découvrir la page. Est-ce qu'on peut identifier l'entreprise. Est-ce qu'on peut répondre sans deviner. Est-ce qu'on a un fait pour la recommander, sans inventer d'avis. Est-ce qu'on peut agir : formulaire, téléphone, email.",
        ],
      },
      {
        heading: "L'audit dit où ça bloque",
        paragraphs: [
          "L'[[/audit|audit gratuit]] lit une page d'accueil, puis jusqu'à dix adresses du sitemap. Il sépare la technique, la performance, le référencement, l'accessibilité, la lecture par une machine, et la conversion. Le temps affiché est celui de la réponse du serveur, pas un LCP de laboratoire.",
          "À la fin, une lecture machine ajoute la découverte, la compréhension, la réponse, la recommandation et l'action. Le JSON du même passage est sur /audit/json. Ce n'est pas une note arbitraire : chaque point dit ce qui a été vu, pourquoi ça compte, et quoi changer.",
          "Si le frein est l'action, le site peut être trouvé et rester sans demande. C'est souvent là que le travail commence. [[/contact|Décrire la page et ce que le visiteur doit pouvoir faire]].",
        ],
      },
      {
        heading: "Ce qu'il ne faut pas fabriquer",
        paragraphs: [
          "Pas d'avis structuré s'il n'existe pas. Pas de prix public si le montant dépend du périmètre. Pas d'adresse inventée. Byte Force publie le bureau : Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca. Les projets en France ou au Canada se font depuis ce bureau.",
          "Une réalisation liée, comme celles de [[/realisations|la page travaux]], est une preuve. Un témoignage écrit pour l'occasion n'en est pas une.",
        ],
      },
      {
        heading: "Quand Byte Force est le bon interlocuteur",
        paragraphs: [
          "Un site qui doit expliquer l'offre et recueillir une demande se lit sur [[/services/creation-site-web|la création de site]]. Un dossier, des rôles et une règle que le tableur ne garde pas se lisent sur le [[/developpement-logiciel-sur-mesure-maroc|logiciel sur mesure]]. Le choix entre les deux est déjà écrit : [[/insights/site-web-ou-logiciel|site ou logiciel]].",
          "La fiche pour les outils qui lisent Byte Force est sur [[/ai|pour les agents]]. Elle ne vend pas une offre « agent IA ». L'automatisation publiée est une règle stable dans le logiciel.",
          "Le premier échange dure trente minutes et il est gratuit. La réponse part sous un jour ouvré. [[/contact|Écrire à Byte Force]] avec l'adresse du site, ou avec le geste que le logiciel doit permettre.",
        ],
      },
    ],
    en: {
      title: "A site a machine can read",
      description:
        "A visitor can understand a site that a machine still cannot cite or use to get in touch. Byte Force, in Casablanca, reads that gap and builds what comes next.",
      h1: "A site a machine can understand",
      lede: "Byte Force, at Technopark in Casablanca, builds software and websites a person and a machine can find, understand, and use to write. If yours is already online, the first step is to describe it: [[/contact|talk about the project]].",
      sections: [
        {
          heading: "What a person sees, and what a machine can cite",
          paragraphs: [
            "A page can be clear to someone reading it and still be opaque to a tool that must answer what the company does, where it is, and how to write. Allowing a bot does not mean it will recommend the site. An llms.txt file is not a Google ranking factor either.",
            "The useful pass is five questions. Can the page be discovered. Can the company be identified. Can the questions be answered without guessing. Is there a real fact to recommend it, with no invented review. Can someone act: a form, a phone number, an email.",
          ],
        },
        {
          heading: "The audit shows where it stops",
          paragraphs: [
            "The [[/audit|free audit]] reads a homepage, then up to ten sitemap addresses. It separates technique, performance, search, accessibility, machine reading, and conversion. The time shown is the server response, not a lab LCP.",
            "At the end, a machine reading adds discovery, understanding, answers, recommendation, and action. The JSON for the same pass is at /audit/json. It is not an arbitrary grade: each point says what was seen, why it matters, and what to change.",
            "If the block is action, the site can be found and still produce no enquiry. That is often where the work starts. [[/contact|Describe the page and what the visitor must be able to do]].",
          ],
        },
        {
          heading: "What not to invent",
          paragraphs: [
            "No structured review if none exists. No public price if the amount depends on the scope. No invented address. Byte Force publishes the office: Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca. Projects in France or Canada are done from that office.",
            "A linked project, like those on [[/realisations|the work page]], is proof. A testimonial written for the occasion is not.",
          ],
        },
        {
          heading: "When Byte Force is the right studio",
          paragraphs: [
            "A site that must explain the offer and collect an enquiry is [[/services/creation-site-web|website creation]]. A record, roles, and a rule a spreadsheet cannot keep are [[/developpement-logiciel-sur-mesure-maroc|custom software]]. The choice between them is already written: [[/insights/site-web-ou-logiciel|website or software]].",
            "The fiche for tools that read Byte Force is [[/ai|for agents]]. It does not sell an “AI agent” offer. The published automation is a stable rule inside the software.",
            "The first conversation is thirty minutes and it is free. A reply goes out within one business day. [[/contact|Write to Byte Force]] with the site address, or with the action the software must allow.",
          ],
        },
      ],
    },
    links: [
      { href: "/contact", label: "Parler du projet" },
      { href: "/audit", label: "Auditer une page" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
      { href: "/services/creation-site-web", label: "Création de site web" },
    ],
  },
  {
    slug: "rouvrir-l-application",
    title: "Rouvrir l'application le lendemain",
    description:
      "Une application utile peut n'être ouverte qu'une fois. Byte Force, à Casablanca, conçoit le geste qui donne une raison de revenir.",
    h1: "Ce qui fait revenir dans l'application",
    date: "2026-10-08",
    lede: "Byte Force, au Technopark à Casablanca, écrit des logiciels qu'une personne doit pouvoir rouvrir sans qu'on la relance. Si la vôtre est déjà en ligne et qu'on ne revient pas, le premier geste est de le dire : [[/contact|parler du projet]].",
    sections: [
      {
        heading: "Le téléchargement ne prouve pas le retour",
        paragraphs: [
          "Duolingo est l'exemple public de cette note. Beaucoup de gens l'ouvrent sans chercher à devenir bilingues. Le cours est le travail. L'habitude vient de ce qui l'entoure : un personnage qui réagit, une leçon très courte, une récompense qui change, une série qu'on n'a pas envie de perdre.",
          "Byte Force n'a pas conçu Duolingo et ne publie pas ses chiffres comme les siens. La décision est la même pour un logiciel métier : si personne n'a une raison de revenir demain, le premier usage ne compte pas.",
        ],
      },
      {
        heading: "Montrer le geste avant de demander un compte",
        paragraphs: [
          "Duolingo laisse entrer sans formulaire. Quelques questions courtes, une leçon d'une minute, puis seulement l'invitation à garder ce qui vient d'être fait. Un compte demandé trop tôt fait quitter avant d'avoir vu à quoi sert l'outil.",
          "Le chemin recommandé est déjà coché. La personne peut le changer. Elle n'a pas à comparer trois durées avant d'avoir compris le geste. [[/developpement-logiciel-sur-mesure-maroc|Le logiciel sur mesure]] part de ce geste, pas d'un écran d'inscription.",
        ],
      },
      {
        heading: "Une erreur ne doit pas faire honte",
        paragraphs: [
          "Un bandeau rouge et le mot « erreur » arrêtent la séance. Duolingo marque la faute et dit comment la corriger, sans féliciter la faute. La personne voit ce qui ne va pas et peut continuer.",
          "Le geste reste court : un choix, un ordre à remettre, pas une phrase entière à taper quand ce n'est pas nécessaire. Quand le métier exige une saisie longue, on la garde. On n'habille pas un formulaire en jeu.",
        ],
      },
      {
        heading: "Ce qu'on perd en ne revenant pas",
        paragraphs: [
          "Une récompense toujours identique cesse de tirer. Une récompense qui change, puis une raison explicite de revenir le lendemain, relie les deux séances. Ça ne remplace pas le travail. Si le bonus est le seul contenu, l'application ne sert plus le métier.",
          "Ce que la personne a façonné — un profil, un dossier, une série — est plus dur à quitter qu'un outil anonyme. La série doit protéger le geste utile. Une règle qui punit sans livrer ce geste est une mauvaise règle. L'automatisation que Byte Force publie est une règle stable dans le logiciel, pas une offre « agent IA ».",
        ],
      },
      {
        heading: "Quand écrire",
        paragraphs: [
          "Écrivez si l'application existe et que les gens ne reviennent pas, ou si le logiciel doit être ouvert chaque jour pour un geste précis. Dites quel est ce geste, ce que la personne perd en le sautant, et ce qui ne doit pas ressembler à une punition.",
          "Le premier échange dure trente minutes et il est gratuit. La réponse part sous un jour ouvré. [[/contact|Écrire à Byte Force]] avec l'adresse de l'application, ou avec le geste que le logiciel doit permettre.",
        ],
      },
    ],
    en: {
      title: "Opening the application again tomorrow",
      description:
        "A useful application can still be opened only once. Byte Force, in Casablanca, designs the action that gives a reason to return.",
      h1: "What brings someone back into the application",
      lede: "Byte Force, at Technopark in Casablanca, builds software a person can open again without being chased. If yours is already online and people do not return, the first step is to say so: [[/contact|talk about the project]].",
      sections: [
        {
          heading: "A download does not prove a return",
          paragraphs: [
            "Duolingo is the public example in this note. Many people open it without trying to become fluent. The lesson is the work. The habit comes from what surrounds it: a character that reacts, a very short lesson, a reward that changes, a streak they do not want to lose.",
            "Byte Force did not design Duolingo and does not publish its numbers as its own. The decision is the same for business software: if nobody has a reason to come back tomorrow, the first use does not count.",
          ],
        },
        {
          heading: "Show the action before asking for an account",
          paragraphs: [
            "Duolingo lets someone in without a form. A few short questions, a one-minute lesson, and only then an invitation to keep what they just did. An account asked for too early makes people leave before they have seen what the tool is for.",
            "The recommended path is already selected. The person can change it. They do not have to compare three durations before they understand the action. [[/developpement-logiciel-sur-mesure-maroc|Custom software]] starts from that action, not from a signup screen.",
          ],
        },
        {
          heading: "A mistake should not shame",
          paragraphs: [
            "A red banner and the word “error” stop the session. Duolingo marks the mistake and says how to correct it, without praising the mistake. The person sees what is wrong and can continue.",
            "The action stays short: a choice, an order to restore, not a full sentence to type when that is unnecessary. When the job requires a long entry, keep it. Do not dress a form up as a game.",
          ],
        },
        {
          heading: "What is lost by not coming back",
          paragraphs: [
            "A reward that is always the same stops pulling. A reward that changes, then an explicit reason to return tomorrow, ties the two sessions together. It does not replace the work. If the bonus is the only content, the application no longer serves the job.",
            "What the person shaped — a profile, a record, a streak — is harder to leave than an anonymous tool. The streak has to protect the useful action. A rule that punishes without delivering that action is a bad rule. The automation Byte Force publishes is a stable rule inside the software, not an “AI agent” offer.",
          ],
        },
        {
          heading: "When to write",
          paragraphs: [
            "Write if the application exists and people do not return, or if the software must be opened every day for one precise action. Say what that action is, what the person loses by skipping it, and what must not feel like a punishment.",
            "The first conversation is thirty minutes and it is free. A reply goes out within one business day. [[/contact|Write to Byte Force]] with the application address, or with the action the software must allow.",
          ],
        },
      ],
    },
    links: [
      { href: "/contact", label: "Parler du projet" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
    ],
  },
];

const slugs = new Set<string>();
const titles = new Set<string>();
for (const article of articles) {
  if (slugs.has(article.slug)) throw new Error(`Duplicate article ${article.slug}`);
  if (titles.has(article.title)) throw new Error(`Duplicate article title ${article.title}`);
  slugs.add(article.slug);
  titles.add(article.title);
}

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
