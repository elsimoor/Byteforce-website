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
  figures?: { src: string; alt: string; caption: string }[];
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
  {
    slug: "tester-le-parcours",
    title: "Tester le parcours avant de le copier",
    description:
      "Un accueil court, un compte obligatoire et un essai gratuit peuvent vider la demande. Byte Force, à Casablanca, part du geste à mesurer.",
    h1: "Ce qu'un test doit trancher",
    date: "2026-10-08",
    lede: "Byte Force, au Technopark à Casablanca, écrit le logiciel à partir du geste réel, pas d'un parcours copié. Si le vôtre convertit mal, le premier geste est de le décrire : [[/contact|parler du projet]].",
    sections: [
      {
        heading: "Ce qu'on copie sans le mesurer",
        paragraphs: [
          "Moonly, une application d'astrologie, est l'exemple public de cette note. L'équipe dit avoir consacré plus d'un million de dollars à des tests sur six ans. Le passage au payant serait passé de 10 % en 2020 à 40 % en 2026, pour un chiffre d'affaires cumulé de 20 millions de dollars, sans investisseur.",
          "Byte Force n'a pas conçu Moonly et ne publie pas ces chiffres comme les siens. Il n'y a pas de grille de prix ici. La décision est plus étroite : un parcours copié sur une application généraliste peut être le mauvais parcours pour un produit précis.",
        ],
      },
      {
        heading: "Trente écrans peuvent valoir mieux qu'un compte",
        paragraphs: [
          "Le conseil habituel est un accueil très court, un compte tout de suite, un essai gratuit, puis un paiement à chaque fonction. Moonly dit avoir mesuré l'inverse sur plusieurs points. L'accueil fait une trentaine d'écrans : il nomme le problème avant de montrer les fonctions. Le compte n'est pas demandé. L'état reste sur l'appareil.",
          "Une mise en avant large dans la boutique a, pour eux, amené des visites qui convertissent mal. Un outil pour tout le monde et une application pour un problème précis ne se remplissent pas de la même façon. [[/developpement-application-mobile-maroc|L'application mobile]] et le [[/developpement-logiciel-sur-mesure-maroc|logiciel sur mesure]] partent du geste, pas d'un modèle d'écrans.",
        ],
      },
      {
        heading: "Un seul paiement, et un essai qui ne donne pas déjà tout",
        paragraphs: [
          "Plusieurs écrans de paiement, un par fonction, ont fait croire qu'il fallait payer chaque outil à part. Un seul écran, qui dit que le paiement ouvre l'ensemble, a mieux converti chez eux. Une image très dessinée convertissait moins qu'une image réaliste, pour un public qu'ils situent à 35 ans et plus. Coller le visage de la personne sur les écrans a fait l'effet inverse : des gens évitaient d'ouvrir l'application.",
          "L'essai gratuit laissait obtenir l'essentiel, puis partir. Ils l'ont retiré. Une offre au troisième jour, pour ceux qui n'avaient pas payé, a mieux tenu entre le jour 3 et le jour 30, selon leur mesure. Afficher un petit nombre par semaine plutôt que par mois, et un tarif à vie placé haut à côté de l'année, a changé le choix. Ce sont leurs prix, pas ceux de Byte Force.",
        ],
      },
      {
        heading: "Le paiement hors boutique n'est pas une règle universelle",
        paragraphs: [
          "Aux États-Unis, Moonly dit avoir fait payer une grande partie des clients sur le web, et que la valeur sur la durée a doublé : moins de commission, et une résiliation qui n'est plus un bouton dans les réglages du téléphone. Sur Android, le même détour a, selon eux, fait chuter la conversion à cause des avertissements de la boutique.",
          "On ne copie pas ce chemin sans lire la règle de la boutique du pays. Là où elle n'autorise pas un autre paiement, le paiement reste celui de la boutique. Byte Force ne vend pas une offre « agent IA ». Une règle utile est une règle stable dans le logiciel.",
        ],
      },
      {
        heading: "Quand écrire",
        paragraphs: [
          "Écrivez si l'application existe et que le parcours a été copié : accueil court, compte obligatoire, essai gratuit, ou un paiement par écran. Dites le geste que la personne doit accomplir, le moment où on lui demande de payer, et ce qu'elle obtient déjà sans payer.",
          "Le premier échange dure trente minutes et il est gratuit. La réponse part sous un jour ouvré. [[/contact|Écrire à Byte Force]] avec l'adresse de l'application, ou avec le geste que le logiciel doit permettre.",
        ],
      },
    ],
    en: {
      title: "Test the path before copying it",
      description:
        "A short welcome, a required account, and a free trial can drain the enquiry. Byte Force, in Casablanca, starts from the action worth measuring.",
      h1: "What a test has to decide",
      lede: "Byte Force, at Technopark in Casablanca, writes software from the real action, not from a copied path. If yours converts poorly, the first step is to describe it: [[/contact|talk about the project]].",
      sections: [
        {
          heading: "What gets copied without being measured",
          paragraphs: [
            "Moonly, an astrology application, is the public example in this note. The team says it spent more than one million dollars on tests over six years. Paid conversion is said to have moved from 10% in 2020 to 40% in 2026, for 20 million dollars in total revenue, with no investor.",
            "Byte Force did not design Moonly and does not publish these figures as its own. There is no public price list here. The decision is narrower: a path copied from a general application can be the wrong path for a specific product.",
          ],
        },
        {
          heading: "Thirty screens can be worth more than an account",
          paragraphs: [
            "The usual advice is a very short welcome, an account immediately, a free trial, then a payment on every feature. Moonly says it measured the opposite on several points. The welcome is about thirty screens: it names the problem before it shows the features. No account is required. The state stays on the device.",
            "A broad store feature brought them visits that convert poorly. A tool for everyone and an application for one precise problem do not fill the same way. [[/developpement-application-mobile-maroc|The mobile application]] and [[/developpement-logiciel-sur-mesure-maroc|custom software]] start from the action, not from a screen template.",
          ],
        },
        {
          heading: "One payment, and a trial that does not already give everything",
          paragraphs: [
            "Several payment screens, one per feature, made people think each tool had to be bought separately. One screen, which says the payment opens the whole product, converted better for them. A very drawn image converted worse than a realistic image, for an audience they place at 35 and older. Putting the person's face on the screens did the opposite: people avoided opening the application.",
            "The free trial let someone take the useful result, then leave. They removed it. An offer on the third day, for people who had not paid, held better between day 3 and day 30, by their measure. Showing a small number per week rather than per month, and a high lifetime price beside the year, changed the choice. Those are their prices, not Byte Force's.",
          ],
        },
        {
          heading: "Payment outside the store is not a universal rule",
          paragraphs: [
            "In the United States, Moonly says it moved a large share of customers to pay on the web, and that value over time doubled: a lower commission, and a cancellation that is no longer a button in the phone settings. On Android, the same detour cut conversion, by their account, because of the store warnings.",
            "Do not copy that path without reading the store rule for the country. Where another payment is not allowed, payment stays with the store. Byte Force does not sell an “AI agent” offer. A useful rule is a stable rule inside the software.",
          ],
        },
        {
          heading: "When to write",
          paragraphs: [
            "Write if the application exists and the path was copied: a short welcome, a required account, a free trial, or a payment on each screen. Say the action the person must complete, the moment they are asked to pay, and what they already get without paying.",
            "The first conversation is thirty minutes and it is free. A reply goes out within one business day. [[/contact|Write to Byte Force]] with the application address, or with the action the software must allow.",
          ],
        },
      ],
    },
    links: [
      { href: "/contact", label: "Parler du projet" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
      { href: "/developpement-application-mobile-maroc", label: "Application mobile" },
    ],
  },
  {
    slug: "quatre-lectures-a-cent",
    title: "Quatre lectures à 100, sur la page d'accueil",
    description:
      "Le 8 octobre 2026, PageSpeed affiche 100 en performance, accessibilité, bonnes pratiques et SEO sur byteforce.ma, et 3/3 pour les agents. C'est une lecture de laboratoire.",
    h1: "Ce que montrent quatre notes à 100",
    date: "2026-10-08",
    lede: "Byte Force, au Technopark à Casablanca, publie ici la lecture PageSpeed de sa page d'accueil. Si la vôtre doit être trouvée, lue, et utilisée pour écrire, le premier geste est de la décrire : [[/contact|parler du projet]].",
    figures: [
      {
        src: "/insights/screencapture-pagespeed-web-dev-analysis-https-byteforce-ma-k6jkig2rim-2026-10-08-15_30_55.png",
        alt: "PageSpeed Insights du 8 octobre 2026, 15:20, performance 100, accessibilité 100, bonnes pratiques 100, SEO 100, et 3/3 pour les agents. Premier affichage 0,7 s, plus grand élément 1,2 s.",
        caption:
          "Lecture du 8 octobre 2026, 15:20:00. Performance, accessibilité, bonnes pratiques et SEO à 100. Premier affichage 0,7 s, plus grand élément 1,2 s, indice de vitesse 1,2 s, blocage 0 ms, décalage 0. Agents : 3/3.",
      },
      {
        src: "/insights/screencapture-pagespeed-web-dev-analysis-https-byteforce-ma-k6jkig2rim-2026-10-08-15_30_35.png",
        alt: "PageSpeed Insights du 8 octobre 2026, 15:20:33, les quatre notes à 100 et 3/3 pour les agents. Premier affichage 0,2 s, plus grand élément 0,5 s.",
        caption:
          "Même rapport, 15:20:33. Les quatre notes sont encore à 100, et les agents à 3/3. Premier affichage 0,2 s, plus grand élément 0,5 s, indice de vitesse 0,5 s, blocage 0 ms, décalage 0.",
      },
    ],
    sections: [
      {
        heading: "Ce que le rapport affiche",
        paragraphs: [
          "Les deux captures viennent du même passage : [[https://pagespeed.web.dev/analysis/https-byteforce-ma/k6jkig2rim?hl=en_GB&form_factor=desktop|le rapport PageSpeed du 8 octobre 2026]]. Les quatre cercles sont à 100. La ligne des agents est à 3/3. Chrome n'a pas assez de visites réelles pour une mesure de terrain sur cette page. C'est une lecture de laboratoire, pas ce que les visiteurs ont mesuré dans leur navigateur.",
          "Une lecture plus tôt le même jour affichait 99 en performance, avec un plus grand élément à 2,1 s. Cette lecture-ci affiche 100. La note bouge d'un passage à l'autre. Elle n'est pas un classement Google, et elle ne se reporte pas toute seule sur le site d'un client.",
        ],
      },
      {
        heading: "Ce qui est en place sur la page",
        paragraphs: [
          "La page dit qui est Byte Force, où est le bureau, et comment écrire. Le bureau est au Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca. Il n'y a pas d'avis inventé et pas de grille de prix. L'image principale a une taille déclarée. Les polices sont des fichiers du site.",
          "La fiche courte est [[/llms.txt|llms.txt]] : un titre, puis des liens. Ce fichier n'est pas un facteur de classement. Autoriser un robot ne veut pas dire qu'il recommandera le site. Le 3/3 de ce rapport dit que la fiche a pu être lue ce jour-là, pas qu'une machine citera Byte Force.",
          "L'[[/audit|audit gratuit]] relit une page, puis jusqu'à dix adresses du sitemap. [[/services/creation-site-web|La création de site]] est le travail quand la page doit expliquer l'offre et recueillir une demande.",
        ],
      },
      {
        heading: "Quand écrire",
        paragraphs: [
          "Écrivez si la page existe et qu'une personne, ou une machine, ne peut pas dire ce que vous faites, où vous êtes, et comment vous joindre. Dites l'adresse, le geste que le visiteur doit pouvoir faire, et ce qui ne doit pas être inventé.",
          "Le premier échange dure trente minutes et il est gratuit. La réponse part sous un jour ouvré. [[/contact|Écrire à Byte Force]] avec l'adresse de la page.",
        ],
      },
    ],
    en: {
      title: "Four scores of 100, on the homepage",
      description:
        "On 8 October 2026, PageSpeed shows 100 for performance, accessibility, best practices and SEO on byteforce.ma, and 3/3 for agents. It is a lab reading.",
      h1: "What four scores of 100 show",
      lede: "Byte Force, at Technopark in Casablanca, publishes here the PageSpeed reading of its homepage. If yours must be found, read, and used to write, the first step is to describe it: [[/contact|talk about the project]].",
      sections: [
        {
          heading: "What the report shows",
          paragraphs: [
            "The two captures are the same pass: [[https://pagespeed.web.dev/analysis/https-byteforce-ma/k6jkig2rim?hl=en_GB&form_factor=desktop|the PageSpeed report of 8 October 2026]]. The four circles are at 100. The agent line is 3/3. Chrome does not have enough real visits for a field measurement of this page. This is a lab reading, not what visitors measured in their browser.",
            "An earlier reading the same day showed 99 for performance, with the largest element at 2.1 s. This reading shows 100. The score moves from one pass to the next. It is not a Google ranking, and it does not transfer by itself to a client's site.",
          ],
        },
        {
          heading: "What is in place on the page",
          paragraphs: [
            "The page says who Byte Force is, where the office is, and how to write. The office is at Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca. There are no invented reviews and no price list. The main image has a declared size. The fonts are files on the site.",
            "The short fiche is [[/llms.txt|llms.txt]]: a title, then links. That file is not a ranking factor. Allowing a bot does not mean it will recommend the site. The 3/3 on this report says the fiche could be read that day, not that a machine will cite Byte Force.",
            "The [[/audit|free audit]] reads a page, then up to ten sitemap addresses. [[/services/creation-site-web|Website creation]] is the work when the page must explain the offer and collect an enquiry.",
          ],
        },
        {
          heading: "When to write",
          paragraphs: [
            "Write if the page exists and a person, or a machine, cannot say what you do, where you are, and how to reach you. Give the address, the action the visitor must be able to take, and what must not be invented.",
            "The first conversation is thirty minutes and it is free. A reply goes out within one business day. [[/contact|Write to Byte Force]] with the page address.",
          ],
        },
      ],
    },
    links: [
      { href: "/contact", label: "Parler du projet" },
      { href: "/audit", label: "Auditer une page" },
      { href: "/services/creation-site-web", label: "Création de site web" },
    ],
  },
  {
    slug: "premiere-version-utile",
    title: "Lancer une première version utile",
    description:
      "La première version sert à apprendre d'une personne qui a le problème maintenant. Byte Force, à Casablanca, écrit ce geste, pas la liste complète.",
    h1: "Ce que la première version doit permettre",
    date: "2026-10-08",
    lede: "Byte Force, au Technopark à Casablanca, écrit le plus petit logiciel qu'une personne peut déjà utiliser pour son problème. Si le vôtre attend encore d'être complet, le premier geste est de le décrire : [[/contact|parler du projet]].",
    sections: [
      {
        heading: "Apprendre commence quand quelqu'un s'en sert",
        paragraphs: [
          "Cette note reprend un cadre public de Y Combinator. Une première version n'est pas un logiciel fini. C'est le plus court chemin pour mettre un geste réel entre les mains de quelqu'un, puis modifier ce geste. L'enquête, les entretiens et la comparaison des concurrents nomment la douleur. Ils ne disent pas si la solution tient, tant que personne ne s'en sert.",
          "Le piège est de passer un an à préparer, lever, et recruter avant qu'un client touche une version qui marche. Le débutant qui livre trop vite et la personne qui livre exprès un petit morceau arrivent au même endroit : une version dehors. Celui qui veut d'abord tout comprendre n'y arrive pas.",
        ],
      },
      {
        heading: "La personne pressée, pas le public général",
        paragraphs: [
          "La personne dont le problème brûle accepte un outil imparfait, si ça l'avance aujourd'hui. Celle qui attend un produit poli ne l'adoptera pas, et ce n'est pas un client perdu : elle n'était pas le public de cette version. Airbnb, Twitch et Stripe sont des exemples publics de ce cadre, pas des projets de Byte Force. Leurs premières versions étaient étroites : un lit pendant un salon, une seule vidéo, des paiements encore en partie manuels.",
          "Le premier iPhone est sorti sans boutique d'applications et sans vidéo. Le premier iPod cassait. Les versions connues sont venues après. Byte Force ne publie pas ces lancements comme les siens.",
        ],
      },
      {
        heading: "Couper la liste, garder le geste",
        paragraphs: [
          "Écrire la liste, puis retirer chaque ligne qui n'est pas nécessaire pour que la personne pressée commence aujourd'hui. Le reste attend une version suivante. On s'attache au problème de cette personne, pas au premier écran.",
          "Une première séance qui casse ne ferme pas l'entreprise. L'associé ne part pas pour ça, et l'argent ne disparaît pas dans la nuit. On réécrit à la même personne une semaine plus tard, avec le geste corrigé. Un questionnaire dit où ça fait mal. Seule une version qu'on peut ouvrir dit si le logiciel le résout.",
          "Byte Force ne promet pas un nombre de semaines valable pour tous. [[/insights/delai-logiciel-sur-mesure|Le délai]] suit le nombre de rôles et de branchements. Une première version tient souvent en plusieurs semaines. Le [[/developpement-logiciel-sur-mesure-maroc|logiciel sur mesure]] part du geste, pas du catalogue de fonctions.",
          "Le cadre cité dit qu'il vaut mieux cent personnes qui s'en servent vraiment que cent mille qui passent. Ce n'est pas un chiffre de Byte Force. C'est le choix : apprendre sur un usage réel, pas sur une audience large qui n'a pas le problème.",
        ],
      },
      {
        heading: "Quand écrire",
        paragraphs: [
          "Écrivez si le logiciel est encore une liste, ou si une première version existe et que personne ne s'en sert. Dites le geste que la personne pressée doit pouvoir faire cette semaine, et ce qui peut attendre.",
          "Le premier échange dure trente minutes et il est gratuit. La réponse part sous un jour ouvré. [[/contact|Écrire à Byte Force]] avec ce geste.",
        ],
      },
    ],
    en: {
      title: "Ship a first version someone can use",
      description:
        "The first version exists to learn from a person who has the problem now. Byte Force, in Casablanca, writes that action, not the full list.",
      h1: "What the first version must allow",
      lede: "Byte Force, at Technopark in Casablanca, writes the smallest software a person can already use for their problem. If yours is still waiting to be complete, the first step is to describe it: [[/contact|talk about the project]].",
      sections: [
        {
          heading: "Learning starts when someone uses it",
          paragraphs: [
            "This note follows a public Y Combinator frame. A first version is not a finished product. It is the shortest path to put a real action in someone's hands, then change that action. Surveys, interviews and competitor lists name the pain. They do not say whether the solution holds until someone uses it.",
            "The trap is to spend a year preparing, raising and hiring before a customer touches a version that works. The beginner who ships too fast and the person who deliberately ships a small piece arrive at the same place: a version outside. The person who wants to understand everything first does not.",
          ],
        },
        {
          heading: "The person in a hurry, not the general public",
          paragraphs: [
            "A person whose problem is urgent will use an imperfect tool if it moves them today. A person who wants a polished product will not adopt it, and that is not a lost customer: they were not the audience for this version. Airbnb, Twitch and Stripe are public examples of this frame, not Byte Force projects. Their first versions were narrow: a bed during a conference, a single video, payments that were still partly manual.",
            "The first iPhone shipped without an app store and without video. The first iPod broke. The known versions came later. Byte Force does not publish those launches as its own.",
          ],
        },
        {
          heading: "Cut the list, keep the action",
          paragraphs: [
            "Write the list, then remove every line that is not required for the person in a hurry to start today. The rest waits for a later version. Stay with that person's problem, not with the first screen.",
            "A first session that breaks does not close the company. A cofounder does not leave for that, and the money does not vanish overnight. You write to the same person a week later, with the action corrected. A survey says where it hurts. Only a version someone can open says whether the software resolves it.",
            "Byte Force does not promise a number of weeks that fits everyone. [[/insights/delai-logiciel-sur-mesure|The schedule]] follows the number of roles and connections. A first version often takes several weeks. [[/developpement-logiciel-sur-mesure-maroc|Custom software]] starts from the action, not from a feature catalogue.",
            "The frame cited here says it is better to have a hundred people who really use it than a hundred thousand who pass by. That is not a Byte Force figure. It is the choice: learn from real use, not from a wide audience that does not have the problem.",
          ],
        },
        {
          heading: "When to write",
          paragraphs: [
            "Write if the software is still a list, or if a first version exists and nobody uses it. Say the action the person in a hurry must be able to take this week, and what can wait.",
            "The first conversation is thirty minutes and it is free. A reply goes out within one business day. [[/contact|Write to Byte Force]] with that action.",
          ],
        },
      ],
    },
    links: [
      { href: "/contact", label: "Parler du projet" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
      { href: "/insights/delai-logiciel-sur-mesure", label: "Le délai" },
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
