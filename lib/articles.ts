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
      "Combien coûte un logiciel sur mesure : pas de prix public. À Casablanca, la note suit les écrans, les rôles et les branchements.",
    h1: "Combien coûte un logiciel sur mesure au Maroc",
    date: "2026-10-08",
    lede: "Combien coûte un logiciel sur mesure : Byte Force, au Technopark à Casablanca, ne publie pas de grille. Le montant suit les écrans, les rôles et les branchements. Un premier échange de trente minutes est gratuit. [[/contact|Écrire à Casablanca]] pour le circuit réel, pas pour une grille.",
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
      { href: "/contact", label: "Décrire le circuit" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Développement logiciel sur mesure" },
      { href: "/developpement-logiciel-casablanca", label: "Depuis Casablanca" },
    ],
    en: {
      title: "What custom software costs in Morocco",
      description:
        "What custom software costs in Morocco: no public price. In Casablanca, the figure follows screens, roles and connections.",
      h1: "What custom software costs in Morocco",
      lede: "What custom software costs is not a public grid. Byte Force, at Technopark in Casablanca, does not publish one. The amount follows the screens, the roles and the connections. The first thirty minutes are free. [[/contact|Write to Casablanca]] with the real workflow, not for a price list.",
      sections: [
        {
          heading: "There is no displayed price",
          paragraphs: [
            "A page that announces « from » an amount in dirhams describes a package, not one company's software. Byte Force does not do that. The pages of the site are not a quote. A project starts after a written scope.",
            "Custom software development in Morocco is the frame. CRM, ERP, trade software and automation each have their own page, because a quote pipeline is not a stockroom.",
          ],
        },
        {
          heading: "What moves the amount up or down",
          paragraphs: [
            "Three things count. The number of screens someone really uses. The number of roles: who creates a file, who approves it, who exports it. The connections: email, payment, or a tool already paid for that must stay.",
            "Wanting to manage everything at once, leave, a fleet, prospects, stock and payroll, swells the scope without making the first circuit safer. Cut back to the flow whose delay costs money every week. The rest waits.",
          ],
        },
        {
          heading: "What does not change the price",
          paragraphs: [
            "The office is in Casablanca. Being nearby does not add a tax, and it does not remove one. A project for a company in France is done from this office: there is no office in France or Canada.",
            "A ten-line spreadsheet, standard accounting or a mailbox does not call for custom software. The conversation is also there to say no, and to leave the market tool in place.",
          ],
        },
        {
          heading: "How the figure is decided",
          paragraphs: [
            "A deposit starts the work. The rest follows steps tied to what was delivered. If the scope changes, the change is written and accepted before it is built. At handover, the client owns the code, the repository and the hosting accounts that were delivered.",
            "Published projects, Dealkhir in Casablanca or Coco Inbox in Montreal, show what is online. They do not show a figure. A number needs the real workflow: [[/contact|write to Casablanca]]. A reply goes out within one business day.",
          ],
        },
      ],
    },
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
  {
    slug: "logiciel-sur-mesure-maroc",
    title: "Logiciel sur mesure au Maroc",
    description:
      "Un logiciel sur mesure au Maroc suit le circuit réel, depuis le Technopark à Casablanca. Pas de grille de prix. Premier échange de trente minutes, gratuit.",
    h1: "Logiciel sur mesure au Maroc",
    date: "2026-10-08",
    lede: "Un logiciel sur mesure au Maroc est un programme écrit pour le circuit d'une entreprise précise, pas un abonnement que l'on tord pour s'en approcher. Byte Force le conçoit depuis le Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca. Il n'y a pas de prix public. Le premier échange dure trente minutes et il est gratuit. [[/contact|Écrire à Casablanca]] pour dire le geste qui bloque déjà chaque semaine.",
    sections: [
      {
        heading: "Quand le marché ne suffit plus",
        paragraphs: [
          "Le logiciel sur mesure a un sens quand le travail ne rentre pas dans un outil déjà vendu sans tordre le métier. Plusieurs fichiers qui se contredisent, une validation qui n'existe que dans une conversation, un état que personne ne peut sortir le soir : le coût est déjà là, il est seulement mal compté. Le [[/developpement-logiciel-sur-mesure-maroc|développement logiciel sur mesure]] est le cadre. Le CRM, l'ERP, le logiciel métier et l'automatisation ont chacun leur page, parce qu'un pipeline de devis n'a pas le même périmètre qu'un stock.",
          "Il n'a pas de sens pour une comptabilité standard, une messagerie, ou un tableur de dix lignes. Acheter un logiciel déjà fait est alors plus court. L'échange sert aussi à dire non, et à laisser l'outil du marché en place. Une page qui promet un logiciel pour « tout gérer » décrit un catalogue, pas le circuit d'une entreprise de Casablanca.",
        ],
      },
      {
        heading: "Ce que l'on écrit vraiment",
        paragraphs: [
          "On part du geste dont le décalage coûte. Qui crée le dossier, qui le valide, qui l'exporte, et quel outil déjà payé doit rester branché. Le nombre d'écrans que quelqu'un utilise vraiment compte plus que la liste des modules qu'un éditeur affiche. Vouloir les congés, la flotte, les prospects, le stock et la paie dans la même première version gonfle le périmètre sans rendre le premier circuit plus sûr.",
          "Le bureau est à Casablanca. [[/developpement-logiciel-casablanca|On peut cadrer autour de la table]], avec le fichier sous les yeux. Il n'y a pas de bureau en France ni au Canada : ces projets se font depuis ce même bureau. La proximité ne rajoute pas une taxe, et elle n'en retire pas une non plus. Le décalage avec l'Europe est d'une heure une partie de l'année, nul le reste.",
        ],
      },
      {
        heading: "Ce qui revient à l'entreprise",
        paragraphs: [
          "À la remise, le client possède le code, le dépôt et les comptes d'hébergement livrés. Ce n'est pas un accès loué que l'éditeur peut fermer. Les projets publiés, Dealkhir à Casablanca ou Coco Inbox à Montréal, montrent ce qui est en ligne. Ils ne montrent pas un montant, et leurs chiffres ne sont pas ceux de Byte Force.",
          "Un acompte lance le travail. Le reste suit des étapes liées à ce qui a été livré. Si le périmètre change, le changement est écrit et accepté avant d'être construit. Il n'y a pas de délai fixe affiché : un premier passage tient souvent en plusieurs semaines, et le calendrier suit les rôles et les branchements, pas une promesse valable pour tout le monde.",
        ],
      },
      {
        heading: "Quand écrire",
        paragraphs: [
          "Écrire quand le circuit réel ne tient plus dans l'outil du marché, ou quand plusieurs personnes ressaisissent la même information. Dire le geste, les rôles, et ce qui doit rester branché. Le reste peut attendre une version d'après.",
          "La réponse part sous un jour ouvré, du lundi au vendredi, de 9 h à 19 h. [[/contact|Décrire le circuit]] suffit pour le premier échange. Le téléphone du bureau est le +212 666 650 696.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Décrire le circuit" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Développement logiciel sur mesure" },
      { href: "/developpement-logiciel-casablanca", label: "Depuis Casablanca" },
    ],
    en: {
      title: "Custom software in Morocco",
      description:
        "Custom software in Morocco follows the real workflow, from Technopark in Casablanca. No public price list. The first thirty minutes are free.",
      h1: "Custom software in Morocco",
      lede: "Custom software in Morocco is a program written for one company's workflow, not a subscription bent until it almost fits. Byte Force designs it from Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca. There is no public price. The first conversation is thirty minutes and it is free. [[/contact|Write to Casablanca]] and name the action that already slips every week.",
      sections: [
        {
          heading: "When a market tool is no longer enough",
          paragraphs: [
            "Custom software makes sense when the work does not fit a product already on sale without bending the job. Several files that contradict each other, an approval that exists only in a conversation, a report nobody can produce in the evening: the cost is already there, it is only badly counted. Custom software development is the frame. CRM, ERP, trade software and automation each have their own page, because a quote pipeline is not a stockroom.",
            "It does not make sense for standard accounting, a mailbox, or a ten-line spreadsheet. Buying software that already exists is shorter then. The conversation is also there to say no, and to leave the market tool in place. A page that promises software to « manage everything » describes a catalogue, not the workflow of a company in Casablanca.",
          ],
        },
        {
          heading: "What actually gets written",
          paragraphs: [
            "Start from the action whose delay costs money. Who creates the file, who approves it, who exports it, and which tool already paid for must stay connected. The number of screens someone really uses matters more than the module list a vendor displays. Wanting leave, a fleet, prospects, stock and payroll in the same first version swells the scope without making the first circuit safer.",
            "The office is in Casablanca. The scope can be set around a table, with the file in view. There is no office in France or Canada: those projects are done from this same office. Being nearby does not add a tax, and it does not remove one either. The offset with Europe is one hour for part of the year, and none for the rest.",
          ],
        },
        {
          heading: "What the company keeps",
          paragraphs: [
            "At handover, the client owns the code, the repository and the hosting accounts that were delivered. It is not a rented login a vendor can close. Published projects, Dealkhir in Casablanca or Coco Inbox in Montreal, show what is online. They do not show a price, and their figures are not Byte Force figures.",
            "A deposit starts the work. The rest follows steps tied to what was delivered. If the scope changes, the change is written and accepted before it is built. There is no fixed public schedule: a first pass often takes several weeks, and the calendar follows the roles and the connections, not a promise that fits everyone.",
          ],
        },
        {
          heading: "When to write",
          paragraphs: [
            "Write when the real workflow no longer fits the market tool, or when several people retype the same information. Name the action, the roles, and what must stay connected. The rest can wait for a later version.",
            "A reply goes out within one business day, Monday to Friday, 9:00 to 19:00. [[/contact|Describe the workflow]] is enough for the first conversation. The office phone is +212 666 650 696.",
          ],
        },
      ],
    },
  },
  {
    slug: "developpement-logiciel-sur-mesure-maroc",
    title: "Développement logiciel sur mesure Maroc",
    description:
      "Développement logiciel sur mesure Maroc : Byte Force part d'un périmètre écrit, au Technopark à Casablanca. Pas de délai fixe publié.",
    h1: "Développement logiciel sur mesure Maroc",
    date: "2026-10-08",
    lede: "Un développement logiciel sur mesure au Maroc commence quand le circuit est nommé, pas quand une liste de modules est copiée. Byte Force le mène depuis le Technopark, boulevard Dammam, Aïn Chock, à Casablanca. Il n'y a pas de délai fixe publié, et pas de prix public. [[/contact|Écrire à Casablanca]] pour dire qui fait le geste aujourd'hui, et où ça coince.",
    sections: [
      {
        heading: "Ce qui se décide au premier échange",
        paragraphs: [
          "Le premier échange dure trente minutes. Il sert à voir si le problème est un logiciel, ou un outil du marché qu'il faut garder. On y nomme le geste, les rôles, et le branchement qui doit rester. La réponse à un message part sous un jour ouvré, du lundi au vendredi, de 9 h à 19 h.",
          "Le [[/developpement-logiciel-sur-mesure-maroc|cadre du développement]] reste la page de l'offre. Cette page-ci dit l'ordre du travail. On ne promet pas un nombre de semaines valable pour toutes les entreprises. Une première version tient souvent en plusieurs semaines, et le calendrier suit le nombre de rôles et de branchements.",
        ],
      },
      {
        heading: "Le périmètre est écrit avant d'être construit",
        paragraphs: [
          "Un projet commence après un périmètre écrit. Les pages du site ne sont pas un devis. Trois choses y figurent : les écrans que quelqu'un utilise vraiment, les rôles, et les branchements, email, paiement, ou un outil déjà payé. Vouloir tout le reste dans le même passage, congés, flotte, stock et paie, retarde le circuit qui coûte déjà.",
          "Si le périmètre change, le changement est écrit et accepté avant d'être construit. Un acompte lance le travail. Le reste suit des étapes liées à ce qui a été livré. [[/developpement-logiciel-casablanca|À Casablanca]], ce cadrage peut se faire autour de la table, avec le fichier sous les yeux. Il n'y a pas de bureau en France ni au Canada.",
        ],
      },
      {
        heading: "Ce que la première version doit déjà faire",
        paragraphs: [
          "La première version doit permettre le geste, pas illustrer le catalogue. La personne pressée doit pouvoir ouvrir le logiciel et finir l'action qui bloque aujourd'hui. Le reste attend. Une première session qui casse ne ferme pas l'entreprise : on réécrit le même geste, on ne rajoute pas dix écrans pour compenser.",
          "À la remise, le client possède le code, le dépôt et les comptes d'hébergement livrés. Dealkhir et Coco Inbox montrent des produits en ligne. Ils ne montrent pas un montant, et leurs chiffres ne sont pas des résultats de Byte Force.",
        ],
      },
      {
        heading: "Quand écrire",
        paragraphs: [
          "Écrire quand le circuit est déjà clair et que l'outil actuel force une ressaisie, une validation orale, ou un état impossible le soir. Dire ce qui doit marcher dans la première version, et ce qui peut attendre.",
          "[[/contact|Décrire le périmètre]] suffit. Le premier échange est gratuit. Le téléphone du bureau est le +212 666 650 696.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Décrire le périmètre" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "L'offre logiciel" },
      { href: "/developpement-logiciel-casablanca", label: "Le bureau à Casablanca" },
    ],
    en: {
      title: "Custom software development in Morocco",
      description:
        "Custom software development in Morocco starts from a written scope, at Technopark in Casablanca. No fixed public schedule.",
      h1: "Custom software development in Morocco",
      lede: "Custom software development in Morocco starts when the workflow is named, not when a module list is copied. Byte Force runs it from Technopark, boulevard Dammam, Aïn Chock, in Casablanca. There is no fixed public schedule, and no public price. [[/contact|Write to Casablanca]] and say who does the action today, and where it sticks.",
      sections: [
        {
          heading: "What the first conversation decides",
          paragraphs: [
            "The first conversation lasts thirty minutes. It checks whether the problem is software, or a market tool that should stay. The action, the roles and the connection that must remain are named there. A reply to a message goes out within one business day, Monday to Friday, 9:00 to 19:00.",
            "The offer page remains the frame for the work. This page says the order of the work. Byte Force does not promise a number of weeks that fits every company. A first version often takes several weeks, and the calendar follows the number of roles and connections.",
          ],
        },
        {
          heading: "The scope is written before it is built",
          paragraphs: [
            "A project starts after a written scope. The pages of the site are not a quote. Three things are on it: the screens someone really uses, the roles, and the connections, email, payment, or a tool already paid for. Wanting everything else in the same pass, leave, a fleet, stock and payroll, delays the circuit that already costs money.",
            "If the scope changes, the change is written and accepted before it is built. A deposit starts the work. The rest follows steps tied to what was delivered. In Casablanca, that framing can happen around a table, with the file in view. There is no office in France or Canada.",
          ],
        },
        {
          heading: "What the first version must already do",
          paragraphs: [
            "The first version must allow the action, not illustrate a catalogue. The person in a hurry must be able to open the software and finish the action that blocks today. The rest waits. A first session that breaks does not close the company: the same action is rewritten, ten screens are not added to compensate.",
            "At handover, the client owns the code, the repository and the hosting accounts that were delivered. Dealkhir and Coco Inbox show products online. They do not show a price, and their figures are not Byte Force results.",
          ],
        },
        {
          heading: "When to write",
          paragraphs: [
            "Write when the workflow is already clear and the current tool forces a retype, a spoken approval, or a report that cannot be produced in the evening. Say what must work in the first version, and what can wait.",
            "[[/contact|Describe the scope]] is enough. The first conversation is free. The office phone is +212 666 650 696.",
          ],
        },
      ],
    },
  },
  {
    slug: "prix-logiciel-sur-mesure-maroc",
    title: "Prix logiciel sur mesure Maroc",
    description:
      "Prix d'un logiciel sur mesure au Maroc : aucun montant public. La note suit les écrans, les rôles et les branchements. Écrire à Casablanca.",
    h1: "Prix logiciel sur mesure Maroc",
    date: "2026-10-08",
    lede: "Le prix d'un logiciel sur mesure au Maroc n'est pas une ligne de catalogue. Byte Force, au Technopark à Casablanca, ne publie pas de montant. La note suit les écrans que quelqu'un utilise, les rôles, et les branchements. [[/contact|Écrire à Casablanca]] pour faire lire le circuit, pas pour recevoir une grille.",
    sections: [
      {
        heading: "Ce qu'une page ne peut pas chiffrer",
        paragraphs: [
          "Une page qui annonce un prix « à partir de » un montant en dirhams décrit un forfait, pas le logiciel d'une entreprise précise. Byte Force ne le fait pas. Les pages du site ne sont pas un devis. Un chiffre n'existe qu'après un périmètre écrit.",
          "Le [[/insights/cout-logiciel-sur-mesure-maroc|montant d'un logiciel sur mesure]] se décide sur le même principe : pas de grille, trois choses qui bougent la note. Cette page dit quoi demander à voir sur un devis, avant de comparer deux chiffres qui ne parlent pas du même circuit.",
        ],
      },
      {
        heading: "Les trois lignes qui comptent",
        paragraphs: [
          "La première ligne est le nombre d'écrans que quelqu'un utilise vraiment. Un écran de saisie et un écran de validation ne valent pas un module « complet » qu'aucune personne n'ouvre. La deuxième ligne est le nombre de rôles : qui crée, qui valide, qui exporte. La troisième est le branchement : email, paiement, ou un outil déjà payé qui doit rester.",
          "Vouloir les congés, la flotte, les prospects, le stock et la paie sur le même devis gonfle le prix sans rendre le premier circuit plus sûr. On coupe jusqu'au flux dont le décalage coûte chaque semaine. Le reste est une ligne d'après, pas une ligne cachée.",
        ],
      },
      {
        heading: "Ce qui ne devrait pas changer la note",
        paragraphs: [
          "Le bureau est à Casablanca, Technopark, boulevard Dammam, Aïn Chock. La proximité ne rajoute pas une taxe, et elle n'en retire pas une non plus. Un projet pour une entreprise en France ou au Canada se fait depuis ce bureau : il n'y a pas d'autre adresse.",
          "Le [[/developpement-logiciel-sur-mesure-maroc|développement]] ne se vend pas au mot du cahier des charges. Un tableur de dix lignes, une comptabilité standard ou une messagerie n'appellent pas un logiciel sur mesure. Dire non fait partie du premier échange, et ça ne produit pas de facture.",
        ],
      },
      {
        heading: "Quand écrire",
        paragraphs: [
          "Écrire quand deux devis se comparent sans dire les écrans, les rôles et les branchements, ou quand un montant « à partir de » tient lieu de périmètre. Apporter le geste qui bloque, pas une liste de modules copiée.",
          "Le premier échange dure trente minutes et il est gratuit. La réponse part sous un jour ouvré, du lundi au vendredi, de 9 h à 19 h. [[/contact|Décrire les trois lignes]] suffit. Le téléphone du bureau est le +212 666 650 696.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Faire lire le circuit" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Le logiciel sur mesure" },
      { href: "/developpement-logiciel-casablanca", label: "Depuis Casablanca" },
    ],
    en: {
      title: "What a custom software quote includes in Morocco",
      description:
        "No public price for custom software in Morocco. The figure follows screens, roles and connections. Write from Casablanca.",
      h1: "What a custom software quote includes in Morocco",
      lede: "The price of custom software in Morocco is not a catalogue line. Byte Force, at Technopark in Casablanca, does not publish a figure. The amount follows the screens someone uses, the roles, and the connections. [[/contact|Write to Casablanca]] to have the workflow read, not to receive a grid.",
      sections: [
      {
        heading: "What a page cannot price",
        paragraphs: [
          "A page that announces a price « from » an amount in dirhams describes a package, not one company's software. Byte Force does not do that. The pages of the site are not a quote. A figure exists only after a written scope.",
          "The cost of custom software is decided on the same rule: no grid, three things that move the amount. This page says what to ask to see on a quote, before comparing two figures that do not describe the same workflow.",
        ],
      },
      {
        heading: "The three lines that matter",
        paragraphs: [
          "The first line is the number of screens someone really uses. A screen to enter and a screen to approve are not a « complete » module nobody opens. The second line is the number of roles: who creates, who approves, who exports. The third is the connection: email, payment, or a tool already paid for that must stay.",
          "Wanting leave, a fleet, prospects, stock and payroll on the same quote raises the price without making the first circuit safer. Cut back to the flow whose delay costs money every week. The rest is a later line, not a hidden one.",
        ],
      },
      {
        heading: "What should not change the figure",
        paragraphs: [
          "The office is in Casablanca, Technopark, boulevard Dammam, Aïn Chock. Being nearby does not add a tax, and it does not remove one. A project for a company in France or Canada is done from this office: there is no other address.",
          "The work is not sold by the word count of a specification. A ten-line spreadsheet, standard accounting or a mailbox does not call for custom software. Saying no is part of the first conversation, and it does not produce an invoice.",
        ],
      },
      {
        heading: "When to write",
        paragraphs: [
          "Write when two quotes are compared without naming the screens, the roles and the connections, or when an amount « from » stands in for a scope. Bring the action that blocks, not a copied module list.",
          "The first conversation is thirty minutes and it is free. A reply goes out within one business day, Monday to Friday, 9:00 to 19:00. [[/contact|Describe the three lines]] is enough. The office phone is +212 666 650 696.",
        ],
      },
      ],
    },
  },
  {
    slug: "logiciel-metier-sur-mesure",
    title: "Logiciel métier sur mesure",
    description:
      "Un logiciel métier sur mesure épouse un seul geste, avec son vocabulaire. Byte Force, Casablanca. Pas de prix public. Écrire.",
    h1: "Logiciel métier sur mesure",
    date: "2026-10-08",
    lede: "Un logiciel métier sur mesure sert un seul geste, avec le vocabulaire de ceux qui le font. Il n'est pas un ERP qui promet tous les services, ni un tableur renommé. Byte Force l'écrit depuis le Technopark, à Casablanca. Il n'y a pas de prix public. [[/contact|Écrire]] pour nommer ce geste, et seulement celui-là.",
    sections: [
      {
        heading: "Un métier, pas une suite",
        paragraphs: [
          "Le logiciel métier a un sens quand le vocabulaire ne se traduit pas dans un outil général sans perdre une règle. Un dossier qui change de nom selon qui le touche, une étape que seul un ancien sait, un état que le marché n'imprime pas : c'est là que le sur-mesure tient. Le [[/developpement-logiciel-sur-mesure-maroc/logiciel-metier|logiciel métier]] a déjà sa page d'offre. Celle-ci dit comment reconnaître que le sujet est un métier, et pas un stock ou un pipeline de devis.",
          "Il n'a pas de sens si le geste est une comptabilité standard, une messagerie, ou dix lignes dans un tableur. Acheter l'outil du marché est alors plus court. Le premier échange sert aussi à dire non.",
        ],
      },
      {
        heading: "Ce qui doit être dans la première version",
        paragraphs: [
          "La première version reprend le geste dont le décalage coûte chaque semaine. Les écrans sont ceux que la personne ouvre vraiment. Les rôles sont ceux qui existent déjà : qui crée, qui valide, qui exporte. Le reste du métier attend. Ajouter la paie, la flotte et les congés dans le même passage fait un autre logiciel.",
          "Le bureau est à Casablanca, boulevard Dammam, Aïn Chock. On peut poser le dossier sur la table. Il n'y a pas de bureau en France ni au Canada. La proximité ne change pas le montant : il n'y a de toute façon pas de grille affichée.",
        ],
      },
      {
        heading: "Ce que l'entreprise garde",
        paragraphs: [
          "À la remise, le client possède le code, le dépôt et les comptes d'hébergement livrés. Le vocabulaire du métier reste dans le logiciel, pas dans la tête d'une seule personne ni dans un fichier que trois collègues écrasent. Un acompte lance le travail. Si le périmètre change, il est écrit avant d'être construit.",
          "Les projets publiés montrent des produits en ligne, pas un modèle de logiciel métier universel. Tourispeak, par exemple, suit le parcours d'un réseau. On ne lui prête pas les règles d'un autre métier, et on ne publie pas ses chiffres comme s'ils étaient ceux de Byte Force.",
        ],
      },
      {
        heading: "Quand écrire",
        paragraphs: [
          "Écrire quand le geste a un nom dans l'entreprise et qu'aucun outil du marché ne le porte sans le tordre. Dire ce nom, qui le fait, et ce qui doit rester branché. Le [[/developpement-logiciel-sur-mesure-maroc|cadre]] reste le logiciel sur mesure, pas une suite.",
          "Le premier échange dure trente minutes et il est gratuit. La réponse part sous un jour ouvré, de 9 h à 19 h, du lundi au vendredi. [[/contact|Décrire le geste]] suffit. Le téléphone est le +212 666 650 696.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Nommer le geste" },
      { href: "/developpement-logiciel-sur-mesure-maroc/logiciel-metier", label: "Le logiciel métier" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Le cadre logiciel" },
    ],
    en: {
      title: "Custom software for one trade",
      description:
        "Trade software follows one action and its vocabulary. Byte Force, Casablanca. No public price. Write with that action.",
      h1: "Custom software for one trade",
      lede: "Custom trade software serves one action, in the words of the people who do it. It is not an ERP that promises every department, and it is not a renamed spreadsheet. Byte Force writes it from Technopark, in Casablanca. There is no public price. [[/contact|Write]] and name that action, and only that one.",
      sections: [
      {
        heading: "One trade, not a suite",
        paragraphs: [
          "Trade software makes sense when the vocabulary cannot move into a general tool without losing a rule. A file that changes name depending on who touches it, a step only a veteran knows, a report the market does not print: that is where custom work holds. The offer page already exists. This page says how to tell that the subject is one trade, not a stockroom or a quote pipeline.",
          "It does not make sense if the action is standard accounting, a mailbox, or ten lines in a spreadsheet. Buying the market tool is shorter then. The first conversation is also there to say no.",
        ],
      },
      {
        heading: "What the first version must hold",
        paragraphs: [
          "The first version takes the action whose delay costs money every week. The screens are the ones the person really opens. The roles are the ones that already exist: who creates, who approves, who exports. The rest of the trade waits. Adding payroll, a fleet and leave in the same pass makes a different piece of software.",
          "The office is in Casablanca, boulevard Dammam, Aïn Chock. The file can sit on the table. There is no office in France or Canada. Being nearby does not change the amount: there is no published grid anyway.",
        ],
      },
      {
        heading: "What the company keeps",
        paragraphs: [
          "At handover, the client owns the code, the repository and the hosting accounts that were delivered. The trade's vocabulary stays in the software, not in one person's head and not in a file three colleagues overwrite. A deposit starts the work. If the scope changes, it is written before it is built.",
          "Published projects show products online, not a universal trade-software template. Tourispeak, for example, follows one network's path. It is not lent another trade's rules, and its figures are not published as Byte Force results.",
        ],
      },
      {
        heading: "When to write",
        paragraphs: [
          "Write when the action has a name inside the company and no market tool carries it without bending it. Say that name, who does it, and what must stay connected. The frame remains custom software, not a suite.",
          "The first conversation is thirty minutes and it is free. A reply goes out within one business day, 9:00 to 19:00, Monday to Friday. [[/contact|Describe the action]] is enough. The phone is +212 666 650 696.",
        ],
      },
      ],
    },
  },
  {
    slug: "quand-creer-un-logiciel-sur-mesure",
    title: "Quand créer un logiciel sur mesure",
    description:
      "Quand créer un logiciel sur mesure : quand le marché tord le métier. Byte Force, Casablanca. Pas de prix public. Premier échange gratuit.",
    h1: "Quand créer un logiciel sur mesure",
    date: "2026-10-08",
    lede: "Quand créer un logiciel sur mesure : quand le travail ne rentre plus dans l'outil du marché sans tordre le métier. Pas avant. Byte Force, au Technopark à Casablanca, commence par cette question. Il n'y a pas de prix public. [[/contact|Écrire]] si le geste coince déjà chaque semaine.",
    sections: [
      {
        heading: "Les signes que le moment est là",
        paragraphs: [
          "Le moment est là quand plusieurs personnes ressaisissent la même information, quand une validation n'existe que dans une conversation, ou quand un état ne sort pas le soir. Le coût est déjà payé en heures. Il n'est seulement pas sur une facture de logiciel. Le [[/developpement-logiciel-sur-mesure-maroc|développement]] devient raisonnable à ce moment-là, pas parce qu'un voisin a « digitalisé ».",
          "Le moment n'est pas là pour une comptabilité standard, une messagerie, ou un tableur de dix lignes. Créer un logiciel alors, c'est payer pour reconstruire un outil déjà vendu. Le premier échange sert à le dire.",
        ],
      },
      {
        heading: "Ce qu'il faut pouvoir nommer",
        paragraphs: [
          "Avant d'écrire une ligne, on doit pouvoir nommer le geste, les rôles, et le branchement qui doit rester. Qui crée le dossier, qui le valide, qui l'exporte. Sans ces trois noms, le projet est une liste de souhaits. On ne promet pas un nombre de semaines : une première version tient souvent en plusieurs semaines, selon ces noms.",
          "Le bureau est à Casablanca, boulevard Dammam, Aïn Chock, du lundi au vendredi, de 9 h à 19 h. On peut montrer le fichier autour de la table. Il n'y a pas de bureau en France ni au Canada. [[/solutions/logiciel-pme|Une PME]] et une entreprise déjà outillée ne passent pas par la même porte, mais la question de départ est la même.",
        ],
      },
      {
        heading: "Ce que créer ne veut pas dire",
        paragraphs: [
          "Créer ne veut pas dire tout remplacer. L'email, le paiement ou l'outil déjà payé peuvent rester branchés. Créer ne veut pas dire non plus un logiciel que l'éditeur peut fermer : à la remise, le code, le dépôt et les comptes d'hébergement livrés sont à l'entreprise.",
          "Créer ne fixe pas un prix public. La note suit les écrans, les rôles et les branchements, après un périmètre écrit. Les pages du site ne sont pas un devis. Un « à partir de » en dirhams décrirait un forfait, pas ce circuit.",
        ],
      },
      {
        heading: "Quand écrire",
        paragraphs: [
          "Écrire quand le signe est là et que le geste a un nom. Apporter un exemple de dossier, pas un cahier de cinquante pages. Dire ce qui peut attendre la version d'après.",
          "Trente minutes, gratuites. Réponse sous un jour ouvré. [[/contact|Décrire le moment]] suffit. Le téléphone du bureau est le +212 666 650 696.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Dire où ça coince" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Le logiciel sur mesure" },
      { href: "/solutions/logiciel-pme", label: "Pour une PME" },
    ],
    en: {
      title: "When to build custom software",
      description:
        "Build custom software when the market tool bends the job. Byte Force, Casablanca. No public price. The first talk is free.",
      h1: "When to build custom software",
      lede: "Custom software is worth building when the work no longer fits a market tool without bending the job. Not before. Byte Force, at Technopark in Casablanca, starts with that question. There is no public price. [[/contact|Write]] if the action already slips every week.",
      sections: [
      {
        heading: "The signs that the moment is here",
        paragraphs: [
          "The moment is here when several people retype the same information, when an approval exists only in a conversation, or when a report cannot be produced in the evening. The cost is already paid in hours. It is only not on a software invoice. Development becomes reasonable then, not because a neighbour has « gone digital ».",
          "The moment is not here for standard accounting, a mailbox, or a ten-line spreadsheet. Building software then means paying to rebuild a tool already on sale. The first conversation is there to say so.",
        ],
      },
      {
        heading: "What you must be able to name",
        paragraphs: [
          "Before a line is written, someone must be able to name the action, the roles, and the connection that must stay. Who creates the file, who approves it, who exports it. Without those three names, the project is a wish list. There is no promised number of weeks: a first version often takes several weeks, according to those names.",
          "The office is in Casablanca, boulevard Dammam, Aïn Chock, Monday to Friday, 9:00 to 19:00. The file can be shown around the table. There is no office in France or Canada. A small company and a company that already has tools do not walk through the same door, but the opening question is the same.",
        ],
      },
      {
        heading: "What building does not mean",
        paragraphs: [
          "Building does not mean replacing everything. Email, payment, or a tool already paid for can stay connected. Building also does not mean software a vendor can switch off: at handover, the code, the repository and the delivered hosting accounts belong to the company.",
          "Building does not set a public price. The figure follows the screens, the roles and the connections, after a written scope. The pages of the site are not a quote. An amount « from » in dirhams would describe a package, not this workflow.",
        ],
      },
      {
        heading: "When to write",
        paragraphs: [
          "Write when the sign is there and the action has a name. Bring an example of a file, not a fifty-page specification. Say what can wait for a later version.",
          "Thirty minutes, free. A reply within one business day. [[/contact|Describe the moment]] is enough. The office phone is +212 666 650 696.",
        ],
      },
      ],
    },
  },
  {
    slug: "logiciel-personnalise-ou-standard",
    title: "Logiciel personnalisé vs logiciel standard",
    description:
      "Logiciel personnalisé vs logiciel standard : garder le marché si le métier rentre dedans. Sinon, l'écrire. Casablanca. Pas de prix public.",
    h1: "Logiciel personnalisé vs logiciel standard",
    date: "2026-10-08",
    lede: "Logiciel personnalisé vs logiciel standard : la question est de savoir si le métier rentre dans l'outil déjà vendu. S'il rentre, on le garde. S'il faut le tordre chaque semaine, on écrit. Byte Force est à Casablanca. Pas de prix public. [[/contact|Écrire]] avec le geste, pas avec un logo d'éditeur.",
    sections: [
      {
        heading: "Quand le standard gagne",
        paragraphs: [
          "Le logiciel standard gagne pour une comptabilité ordinaire, une messagerie, un tableur court, ou un cycle de vente que l'éditeur a déjà prévu. Le payer chaque mois est alors plus court que de le réécrire. Byte Force le dit au premier échange. Ce n'est pas une défaite : c'est le bon outil.",
          "Le standard perd quand l'équipe passe son temps à contourner : champs inutiles, exports recopiés, règles du métier écrites dans un commentaire. Le [[/solutions/remplacer-saas/logiciel-personnalise|logiciel personnalisé]] commence là, pas au premier abonnement qui déplaît.",
        ],
      },
      {
        heading: "Ce que personnalisé veut dire ici",
        paragraphs: [
          "Personnalisé ne veut pas dire un thème, un logo, et les mêmes écrans. Ça veut dire les rôles réels, les écrans réellement ouverts, et les branchements qui doivent rester. Le [[/developpement-logiciel-sur-mesure-maroc|cadre]] est le même que pour tout logiciel écrit ici : périmètre écrit, acompte, code rendu à l'entreprise.",
          "Personnalisé ne veut pas dire non plus un prix affiché. Deux éditeurs peuvent annoncer un abonnement. Ça ne dit pas ce que coûte le contournement chaque semaine. On ne publie pas de montant en dirhams à la place.",
        ],
      },
      {
        heading: "Ce qu'il ne faut pas comparer",
        paragraphs: [
          "On ne compare pas une plaquette de cinquante modules à trois écrans qui finissent le geste. On ne compare pas non plus le bureau de Casablanca à une « taxe » ou à une remise. Technopark, boulevard Dammam, Aïn Chock. Pas de bureau en France ni au Canada. La proximité ne chiffre pas le choix.",
          "On ne promet pas que le standard est lent ou que le sur-mesure est noble. On regarde le dossier. Dealkhir ou Coco Inbox montrent des produits en ligne. Ils ne tranchent pas ce choix pour une autre entreprise, et leurs chiffres ne sont pas les nôtres.",
        ],
      },
      {
        heading: "Quand écrire",
        paragraphs: [
          "Écrire quand l'équipe peut montrer un contournement concret, ou quand elle hésite et veut qu'on dise de garder l'outil. Les deux réponses sont utiles. Apporter le nom du geste et le nom de l'outil actuel.",
          "Trente minutes, gratuites. Réponse sous un jour ouvré, 9 h à 19 h. [[/contact|Décrire l'outil actuel]] suffit. Téléphone : +212 666 650 696.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Dire si le métier rentre" },
      { href: "/solutions/remplacer-saas/logiciel-personnalise", label: "Le logiciel à la place du contournement" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Écrire le logiciel" },
    ],
    en: {
      title: "Custom software or a standard product",
      description:
        "Custom or standard software: keep the market tool if the job fits. Otherwise, write it. Casablanca. No public price.",
      h1: "Custom software or a standard product",
      lede: "Custom software or a standard product: the question is whether the job fits the tool already on sale. If it fits, keep it. If it must be bent every week, write. Byte Force is in Casablanca. No public price. [[/contact|Write]] with the action, not with a vendor logo.",
      sections: [
      {
        heading: "When standard wins",
        paragraphs: [
          "Standard software wins for ordinary accounting, a mailbox, a short spreadsheet, or a sales cycle the vendor already designed. Paying for it each month is then shorter than rewriting it. Byte Force says so in the first conversation. That is not a loss: it is the right tool.",
          "Standard loses when the team spends its time working around it: useless fields, copied exports, trade rules written in a comment. Custom software starts there, not at the first subscription someone dislikes.",
        ],
      },
      {
        heading: "What custom means here",
        paragraphs: [
          "Custom does not mean a theme, a logo, and the same screens. It means the real roles, the screens people actually open, and the connections that must stay. The frame is the same as for any software written here: a written scope, a deposit, the code returned to the company.",
          "Custom also does not mean a displayed price. Two vendors can announce a subscription. That does not say what the workaround costs each week. No amount in dirhams is published instead.",
        ],
      },
      {
        heading: "What not to compare",
        paragraphs: [
          "Do not compare a fifty-module brochure with three screens that finish the action. Do not compare the Casablanca office with a « tax » or a discount either. Technopark, boulevard Dammam, Aïn Chock. No office in France or Canada. Being nearby does not price the choice.",
          "There is no promise that standard is slow or that custom is noble. Look at the file. Dealkhir or Coco Inbox show products online. They do not settle this choice for another company, and their figures are not ours.",
        ],
      },
      {
        heading: "When to write",
        paragraphs: [
          "Write when the team can show a concrete workaround, or when it is unsure and wants to be told to keep the tool. Both answers are useful. Bring the name of the action and the name of the current tool.",
          "Thirty minutes, free. A reply within one business day, 9:00 to 19:00. [[/contact|Describe the current tool]] is enough. Phone: +212 666 650 696.",
        ],
      },
      ],
    },
  },
  {
    slug: "avantages-logiciel-sur-mesure",
    title: "Avantages d'un logiciel sur mesure",
    description:
      "Avantages d'un logiciel sur mesure : le circuit n'est pas tordu, et le code revient à l'entreprise. Casablanca. Pas de prix public.",
    h1: "Avantages d'un logiciel sur mesure",
    date: "2026-10-08",
    lede: "Les avantages d'un logiciel sur mesure tiennent en deux faits, pas en une liste marketing. Le circuit n'a pas à être tordu pour entrer dans un outil déjà vendu. À la remise, le code revient à l'entreprise. Byte Force est au Technopark, à Casablanca. Pas de prix public. [[/contact|Écrire]] pour voir si ces deux faits s'appliquent.",
    sections: [
      {
        heading: "Le métier n'est pas le contourné",
        paragraphs: [
          "L'avantage utile, c'est que les rôles du logiciel sont les rôles de l'entreprise. Qui crée, qui valide, qui exporte. Un outil standard demande souvent l'inverse : l'équipe apprend le vocabulaire de l'éditeur. Quand cet apprentissage devient le travail, le sur-mesure évite la ressaisie et la validation orale.",
          "Ce n'est pas un avantage si le métier rentre déjà dans l'outil du marché. Une comptabilité standard, une messagerie, un tableur de dix lignes n'ont pas besoin d'être réécrits. Le [[/developpement-logiciel-sur-mesure-maroc|cadre]] le dit, et le premier échange aussi. Inventer un avantage là serait vendre un doublon.",
        ],
      },
      {
        heading: "Le code ne reste pas chez l'éditeur",
        paragraphs: [
          "Le deuxième avantage est la remise. Le client possède le code, le dépôt et les comptes d'hébergement livrés. Ce n'est pas un login qu'un abonnement peut couper. La page [[/insights/qui-possede-le-code|qui possède le code]] détaille ce point. On ne le confond pas avec une promesse de « propriété intellectuelle » floue.",
          "Cet avantage ne chiffre pas le projet. Il n'y a pas de prix public, et pas de gain en dirhams affiché. La note suit les écrans, les rôles et les branchements, après un périmètre écrit. Un acompte lance le travail. Un changement de périmètre est écrit avant d'être construit.",
        ],
      },
      {
        heading: "Ce qui n'est pas un avantage",
        paragraphs: [
          "Ce n'est pas un avantage d'avoir plus d'écrans. Ce n'est pas un avantage d'être à Casablanca au sens d'une remise ou d'une taxe : le bureau est au Technopark, boulevard Dammam, Aïn Chock, et la proximité ne change pas une grille qui n'existe pas. Il n'y a pas de bureau en France ni au Canada.",
          "Ce n'est pas non plus un avantage mesuré par un taux, un nombre de clients, ou une note. Byte Force n'en publie pas. Dealkhir et Coco Inbox montrent des produits en ligne. Leurs chiffres ne sont pas repris ici comme preuve.",
        ],
      },
      {
        heading: "Quand écrire",
        paragraphs: [
          "Écrire si le contournement est déjà le travail, ou si l'abonnement peut fermer un outil dont l'entreprise ne peut plus se passer. Dire le geste et qui le fait. Le reste peut attendre.",
          "Trente minutes, gratuites. Réponse sous un jour ouvré, lundi à vendredi, 9 h à 19 h. [[/contact|Décrire le contournement]] suffit. Téléphone : +212 666 650 696.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Voir si ça s'applique" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Le logiciel sur mesure" },
      { href: "/developpement-logiciel-casablanca", label: "Depuis Casablanca" },
    ],
    en: {
      title: "What custom software actually changes",
      description:
        "Custom software keeps the real workflow, and the code returns to the company. Casablanca. No public price, no invented gain.",
      h1: "What custom software actually changes",
      lede: "The advantages of custom software are two facts, not a marketing list. The workflow does not have to be bent to fit a tool already on sale. At handover, the code returns to the company. Byte Force is at Technopark, in Casablanca. No public price. [[/contact|Write]] to see whether those two facts apply.",
      sections: [
      {
        heading: "The job is not the workaround",
        paragraphs: [
          "The useful advantage is that the roles in the software are the company's roles. Who creates, who approves, who exports. A standard tool often asks the reverse: the team learns the vendor's vocabulary. When that learning becomes the work, custom software avoids the retype and the spoken approval.",
          "It is not an advantage if the job already fits the market tool. Standard accounting, a mailbox, a ten-line spreadsheet do not need to be rewritten. The offer says so, and so does the first conversation. Inventing an advantage there would be selling a duplicate.",
        ],
      },
      {
        heading: "The code does not stay with the vendor",
        paragraphs: [
          "The second advantage is handover. The client owns the code, the repository and the hosting accounts that were delivered. It is not a login a subscription can cut. The page on who owns the code says this plainly. It is not a vague promise about intellectual property.",
          "This advantage does not price the project. There is no public price, and no gain in dirhams on display. The figure follows the screens, the roles and the connections, after a written scope. A deposit starts the work. A scope change is written before it is built.",
        ],
      },
      {
        heading: "What is not an advantage",
        paragraphs: [
          "More screens are not an advantage. Being in Casablanca is not an advantage in the sense of a discount or a tax: the office is at Technopark, boulevard Dammam, Aïn Chock, and being nearby does not change a grid that does not exist. There is no office in France or Canada.",
          "It is also not an advantage measured by a rate, a client count, or a score. Byte Force does not publish those. Dealkhir and Coco Inbox show products online. Their figures are not reused here as proof.",
        ],
      },
      {
        heading: "When to write",
        paragraphs: [
          "Write if the workaround is already the work, or if a subscription can close a tool the company can no longer do without. Name the action and who does it. The rest can wait.",
          "Thirty minutes, free. A reply within one business day, Monday to Friday, 9:00 to 19:00. [[/contact|Describe the workaround]] is enough. Phone: +212 666 650 696.",
        ],
      },
      ],
    },
  },
  {
    slug: "developpement-logiciel-entreprise-maroc",
    title: "Développement logiciel entreprise Maroc",
    description:
      "Développement logiciel entreprise Maroc : le programme suit l'entreprise déjà outillée, depuis Casablanca. Pas de prix public. Écrire.",
    h1: "Développement logiciel entreprise Maroc",
    date: "2026-10-08",
    lede: "Le développement logiciel pour une entreprise au Maroc part de ce qui est déjà en place, pas d'une page blanche. Byte Force le mène depuis le Technopark, à Casablanca. Il n'y a pas de prix public. [[/contact|Écrire]] pour dire quels outils restent, et quel geste ne passe plus entre eux.",
    sections: [
      {
        heading: "L'entreprise a déjà des outils",
        paragraphs: [
          "Une entreprise n'arrive en général pas sans logiciel. Elle a un tableur, un abonnement, parfois un vieil écran que plus personne n'ose modifier. Le développement consiste à écrire le morceau qui manque, ou à relier ce qui se contredit, pas à tout jeter le premier jour. La page [[/solutions/logiciel-entreprise|logiciel pour une entreprise déjà outillée]] est l'offre. Celle-ci dit l'ordre : nommer le geste, garder ce qui marche, écrire le reste.",
          "Tout jeter est un autre projet, plus long, et souvent inutile. La messagerie, la comptabilité standard, le paiement déjà branché peuvent rester. On ne les réécrit pas pour avoir l'air complet.",
        ],
      },
      {
        heading: "Ce qui se décide à Casablanca",
        paragraphs: [
          "Le bureau est au Technopark, boulevard Dammam, Aïn Chock, 20001. Du lundi au vendredi, de 9 h à 19 h, le cadrage peut se faire avec le fichier sur la table. Il n'y a pas de bureau en France ni au Canada. Une entreprise marocaine et une entreprise française se parlent depuis ce même bureau.",
          "Il n'y a pas de délai fixe. Une première version tient souvent en plusieurs semaines, selon les rôles et les branchements. Le [[/developpement-logiciel-sur-mesure-maroc|cadre]] reste le logiciel sur mesure : périmètre écrit, acompte, code rendu. Les pages du site ne sont pas un devis.",
        ],
      },
      {
        heading: "Ce que l'entreprise récupère",
        paragraphs: [
          "À la remise, elle possède le code, le dépôt et les comptes d'hébergement livrés. Les outils qu'on a choisi de garder restent les siens. On ne publie pas un nombre de salariés, un chiffre d'affaires, ou une note : rien de tout cela n'est sur le site comme résultat de Byte Force.",
          "Dealkhir, à Casablanca, montre une plateforme en ligne depuis 2024. Ce n'est pas le modèle de toute entreprise. On ne lui prête pas la paie, la flotte ou le stock d'un autre.",
        ],
      },
      {
        heading: "Quand écrire",
        paragraphs: [
          "Écrire quand le geste traverse deux outils et que personne ne sait plus lequel dit vrai. Apporter le nom des outils et le nom du dossier. Pas une liste de tous les services de l'entreprise.",
          "Trente minutes, gratuites. Réponse sous un jour ouvré. [[/contact|Décrire les outils]] suffit. Téléphone : +212 666 650 696.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Dire quels outils restent" },
      { href: "/solutions/logiciel-entreprise", label: "Logiciel pour une entreprise" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Le cadre sur mesure" },
    ],
    en: {
      title: "Software development for a company in Morocco",
      description:
        "Software for a company in Morocco starts from the tools already in place, from Casablanca. No public price. Write with what must stay.",
      h1: "Software development for a company in Morocco",
      lede: "Software development for a company in Morocco starts from what is already in place, not from a blank page. Byte Force runs it from Technopark, in Casablanca. There is no public price. [[/contact|Write]] and say which tools stay, and which action no longer passes between them.",
      sections: [
      {
        heading: "The company already has tools",
        paragraphs: [
          "A company rarely arrives with no software. It has a spreadsheet, a subscription, sometimes an old screen nobody dares to change. Development means writing the missing piece, or joining what contradicts itself, not throwing everything away on day one. The offer page is for a company that already has tools. This page says the order: name the action, keep what works, write the rest.",
          "Throwing everything away is another project, longer, and often useless. The mailbox, standard accounting, a payment already connected can stay. They are not rewritten in order to look complete.",
        ],
      },
      {
        heading: "What is decided in Casablanca",
        paragraphs: [
          "The office is at Technopark, boulevard Dammam, Aïn Chock, 20001. Monday to Friday, 9:00 to 19:00, the scope can be set with the file on the table. There is no office in France or Canada. A Moroccan company and a French company are both spoken with from this same office.",
          "There is no fixed schedule. A first version often takes several weeks, according to the roles and the connections. The frame remains custom software: a written scope, a deposit, the code returned. The pages of the site are not a quote.",
        ],
      },
      {
        heading: "What the company gets back",
        paragraphs: [
          "At handover, it owns the code, the repository and the hosting accounts that were delivered. The tools chosen to stay remain its own. No headcount, revenue, or score is published: none of that is on the site as a Byte Force result.",
          "Dealkhir, in Casablanca, shows a platform online since 2024. It is not the model of every company. It is not lent another company's payroll, fleet or stock.",
        ],
      },
      {
        heading: "When to write",
        paragraphs: [
          "Write when the action crosses two tools and nobody knows which one is right. Bring the names of the tools and the name of the file. Not a list of every department.",
          "Thirty minutes, free. A reply within one business day. [[/contact|Describe the tools]] is enough. Phone: +212 666 650 696.",
        ],
      },
      ],
    },
  },
  {
    slug: "agence-developpement-logiciel-casablanca",
    title: "Agence développement logiciel Casablanca",
    description:
      "Agence développement logiciel Casablanca : Byte Force est un studio au Technopark, pas une agence de vitrines. Pas de prix public.",
    h1: "Agence développement logiciel Casablanca",
    date: "2026-10-08",
    lede: "Agence de développement logiciel à Casablanca : le mot agence désigne ici un studio qui écrit le logiciel, au Technopark, boulevard Dammam, Aïn Chock. Pas une fabrique de sites vitrines au forfait. Pas de prix public. [[/contact|Écrire]] pour le circuit, pas pour une plaquette.",
    sections: [
      {
        heading: "Ce que le mot agence ne doit pas couvrir",
        paragraphs: [
          "Beaucoup de recherches « agence » attendent un site vitrine, un logo, et un forfait. Byte Force n'est pas cette offre. Le studio écrit des logiciels, des applications, et des sites quand le site porte un geste. La page [[/developpement-logiciel-casablanca|développement logiciel à Casablanca]] dit le lieu. Celle-ci dit ce qu'on ne prend pas : une vitrine sans circuit, vendue « à partir de » un montant.",
          "Le [[/services/creation-site-web|site]] existe comme offre à part, quand la page doit être trouvée et lue. Ce n'est pas le même travail qu'un CRM, un outil métier, ou un produit utilisé par plusieurs clients. Mélanger les deux dans un devis unique est le réflexe qu'on refuse.",
        ],
      },
      {
        heading: "Où l'on se voit",
        paragraphs: [
          "Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca. Lundi à vendredi, 9 h à 19 h. Pour une entreprise de la ville, le cadrage peut se faire autour de la table. On ne prétend pas avoir un bureau dans chaque quartier, ni en France, ni au Canada.",
          "La proximité ne rajoute pas une taxe et n'en retire pas une. Il n'y a pas de grille. Le montant, quand il existe, suit les écrans, les rôles et les branchements, après un périmètre écrit. Le premier échange de trente minutes est gratuit, et il peut conclure qu'il ne faut pas construire.",
        ],
      },
      {
        heading: "Ce qui est livré",
        paragraphs: [
          "À la remise, le client possède le code, le dépôt et les comptes d'hébergement livrés. Ce n'est pas un accès que l'agence garde. Dealkhir est en ligne à Casablanca depuis 2024. C'est un projet publié, pas une preuve que toute entreprise de la ville a le même besoin, et pas un chiffre de Byte Force.",
          "Il n'y a pas de délai fixe affiché pour « une agence à Casablanca ». Une première version tient souvent en plusieurs semaines. Le calendrier suit le périmètre, pas le quartier.",
        ],
      },
      {
        heading: "Quand écrire",
        paragraphs: [
          "Écrire quand le besoin est un logiciel, pas une plaquette. Dire le geste, les rôles, et si un site public fait partie du même circuit ou non. Si c'est seulement une vitrine, le premier échange le dira.",
          "Réponse sous un jour ouvré. [[/contact|Décrire le geste]] suffit. Téléphone : +212 666 650 696.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Décrire le circuit" },
      { href: "/developpement-logiciel-casablanca", label: "Développement à Casablanca" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Le logiciel sur mesure" },
    ],
    en: {
      title: "A software studio in Casablanca",
      description:
        "In Casablanca, Byte Force is a software studio at Technopark, not a brochure agency. No public price. Write about the workflow.",
      h1: "A software studio in Casablanca",
      lede: "A software development agency in Casablanca: here the word means a studio that writes the software, at Technopark, boulevard Dammam, Aïn Chock. Not a shop for brochure sites sold as a package. No public price. [[/contact|Write]] about the workflow, not about a leaflet.",
      sections: [
      {
        heading: "What the word agency should not cover",
        paragraphs: [
          "Many searches for « agency » expect a brochure site, a logo, and a package. Byte Force is not that offer. The studio writes software, applications, and sites when the site carries an action. The Casablanca page says the place. This page says what is not taken: a brochure with no workflow, sold « from » an amount.",
          "A website exists as a separate offer, when the page must be found and read. That is not the same work as a CRM, a trade tool, or a product used by several customers. Mixing the two into one quote is the reflex that gets refused.",
        ],
      },
      {
        heading: "Where we meet",
        paragraphs: [
          "Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca. Monday to Friday, 9:00 to 19:00. For a company in the city, the scope can be set around the table. There is no claim of an office in every neighbourhood, nor in France, nor in Canada.",
          "Being nearby does not add a tax and does not remove one. There is no grid. The amount, when it exists, follows the screens, the roles and the connections, after a written scope. The first thirty minutes are free, and they can end with the decision not to build.",
        ],
      },
      {
        heading: "What is delivered",
        paragraphs: [
          "At handover, the client owns the code, the repository and the hosting accounts that were delivered. It is not an access the studio keeps. Dealkhir has been online in Casablanca since 2024. It is a published project, not proof that every company in the city has the same need, and not a Byte Force figure.",
          "There is no fixed public schedule for « an agency in Casablanca ». A first version often takes several weeks. The calendar follows the scope, not the neighbourhood.",
        ],
      },
      {
        heading: "When to write",
        paragraphs: [
          "Write when the need is software, not a leaflet. Name the action, the roles, and whether a public site is part of the same workflow. If it is only a brochure, the first conversation will say so.",
          "A reply within one business day. [[/contact|Describe the action]] is enough. Phone: +212 666 650 696.",
        ],
      },
      ],
    },
  },
  {
    slug: "crm-personnalise-maroc",
    title: "CRM personnalisé Maroc",
    description:
      "CRM personnalisé au Maroc : le pipeline suit le cycle réel, depuis Casablanca. Pas le cycle d'un éditeur. Pas de prix public. Écrire.",
    h1: "CRM personnalisé Maroc",
    date: "2026-10-08",
    lede: "Un CRM personnalisé au Maroc suit le cycle de vente de l'entreprise, pas celui dessiné dans un abonnement. Prospects, devis, relances : seulement s'ils existent vraiment. Byte Force l'écrit depuis le Technopark, à Casablanca. Pas de prix public. [[/contact|Écrire]] pour décrire le cycle, pas pour choisir un logo.",
    sections: [
      {
        heading: "Le cycle, pas le catalogue",
        paragraphs: [
          "Un CRM personnalisé a un sens quand le cycle ne rentre pas dans les étapes de l'éditeur : un devis qui attend une validation interne, une relance qui dépend d'un chantier, un client qui n'est pas une fiche standard. La page [[/developpement-logiciel-sur-mesure-maroc/crm|CRM sur mesure]] est l'offre. Celle-ci dit quoi apporter : le nom des étapes, dans l'ordre où elles arrivent vraiment.",
          "Il n'a pas de sens si le cycle est déjà celui de l'outil du marché et que l'équipe s'en sert. Changer de logo ne justifie pas un développement. Le premier échange peut conclure de garder l'abonnement.",
        ],
      },
      {
        heading: "Ce qui entre dans la première version",
        paragraphs: [
          "La première version porte le geste commercial qui coince : créer le dossier, le faire avancer, savoir qui doit relancer. Pas la comptabilité, pas la paie, pas le stock. Ces sujets ont d'autres pages. Les rôles sont ceux du bureau : qui crée, qui valide, qui exporte.",
          "Le bureau est à Casablanca, Technopark, boulevard Dammam. On peut dérouler un vrai devis sur la table. Pas de bureau en France ni au Canada. Pas de grille de prix. La note, plus tard, suit les écrans, les rôles et les branchements.",
        ],
      },
      {
        heading: "Ce qui est rendu",
        paragraphs: [
          "À la remise, le client possède le code, le dépôt et l'hébergement livré. Le CRM n'est pas un login que l'éditeur ferme. Un acompte lance le travail après un périmètre écrit. Un changement est écrit avant d'être construit. Il n'y a pas de délai fixe : souvent plusieurs semaines pour une première version, selon le cycle.",
          "Aucun avis, aucune note, aucun nombre de clients n'est publié pour appuyer cette page. Les projets en ligne montrent autre chose que le cycle de vente d'une entreprise précise.",
        ],
      },
      {
        heading: "Quand écrire",
        paragraphs: [
          "Écrire quand les relances vivent dans une boîte mail ou un fichier que deux personnes écrasent. Dire les étapes et qui les tient. [[/developpement-logiciel-casablanca/crm|À Casablanca]], le cadrage peut se faire au bureau.",
          "Trente minutes, gratuites. Réponse sous un jour ouvré, 9 h à 19 h. [[/contact|Décrire les étapes]] suffit. Téléphone : +212 666 650 696.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Décrire le cycle" },
      { href: "/developpement-logiciel-sur-mesure-maroc/crm", label: "Le CRM sur mesure" },
      { href: "/developpement-logiciel-casablanca/crm", label: "CRM à Casablanca" },
    ],
    en: {
      title: "A custom CRM in Morocco",
      description:
        "A custom CRM in Morocco follows the real sales cycle, from Casablanca. Not a vendor's stages. No public price. Write with the cycle.",
      h1: "A custom CRM in Morocco",
      lede: "A custom CRM in Morocco follows the company's sales cycle, not the one drawn in a subscription. Prospects, quotes, follow-ups: only if they really exist. Byte Force writes it from Technopark, in Casablanca. No public price. [[/contact|Write]] to describe the cycle, not to pick a logo.",
      sections: [
      {
        heading: "The cycle, not the catalogue",
        paragraphs: [
          "A custom CRM makes sense when the cycle does not fit the vendor's stages: a quote waiting for an internal approval, a follow-up that depends on a job site, a customer who is not a standard card. The offer page already exists. This page says what to bring: the names of the steps, in the order they actually happen.",
          "It does not make sense if the cycle is already the market tool's cycle and the team uses it. Changing the logo does not justify development. The first conversation can end with keeping the subscription.",
        ],
      },
      {
        heading: "What enters the first version",
        paragraphs: [
          "The first version carries the commercial action that sticks: create the file, move it forward, know who must follow up. Not accounting, not payroll, not stock. Those subjects have other pages. The roles are the office's roles: who creates, who approves, who exports.",
          "The office is in Casablanca, Technopark, boulevard Dammam. A real quote can be walked through on the table. No office in France or Canada. No price grid. The figure, later, follows the screens, the roles and the connections.",
        ],
      },
      {
        heading: "What is handed over",
        paragraphs: [
          "At handover, the client owns the code, the repository and the delivered hosting. The CRM is not a login a vendor closes. A deposit starts the work after a written scope. A change is written before it is built. There is no fixed schedule: often several weeks for a first version, according to the cycle.",
          "No review, no score, no client count is published to support this page. Projects online show something other than one company's sales cycle.",
        ],
      },
      {
        heading: "When to write",
        paragraphs: [
          "Write when follow-ups live in a mailbox or in a file two people overwrite. Name the steps and who holds them. In Casablanca, the scope can be set at the office.",
          "Thirty minutes, free. A reply within one business day, 9:00 to 19:00. [[/contact|Describe the steps]] is enough. Phone: +212 666 650 696.",
        ],
      },
      ],
    },
  },
  {
    slug: "creation-crm-sur-mesure",
    title: "Création CRM sur mesure",
    description:
      "Création d'un CRM sur mesure : on part des étapes réelles, pas d'un modèle vide. Byte Force, Casablanca. Pas de prix public.",
    h1: "Création CRM sur mesure",
    date: "2026-10-08",
    lede: "La création d'un CRM sur mesure commence quand les étapes du dossier sont nommées. Pas quand on a choisi un nom de produit. Byte Force le fait depuis Casablanca, au Technopark. Pas de prix public. [[/contact|Écrire]] avec l'ordre des étapes, même s'il tient sur une feuille.",
    sections: [
      {
        heading: "Ce qu'il faut avoir avant d'écrire",
        paragraphs: [
          "Avant la création, on écrit les étapes qu'un dossier traverse vraiment. Qui le crée, qui le fait avancer, qui relance, qui exporte. Sans cette liste, on construirait le CRM d'un éditeur avec un autre logo. L'offre est sur la page [[/developpement-logiciel-sur-mesure-maroc/crm|CRM]]. Le [[/developpement-logiciel-sur-mesure-maroc/crm/logiciel-crm-personnalise|CRM personnalisé]] dit le même sujet pour une entreprise dont le cycle ne rentre pas dans un modèle.",
          "Une feuille suffit. Un cahier de cinquante pages retarde. Le premier échange de trente minutes sert à voir si la liste est un CRM ou un tableur qu'il faut garder.",
        ],
      },
      {
        heading: "L'ordre du travail",
        paragraphs: [
          "Le périmètre est écrit, puis construit. Un acompte lance le travail. Le reste suit ce qui est livré. Si une étape est ajoutée, elle est acceptée avant d'être codée. Il n'y a pas de délai fixe publié : une première version tient souvent en plusieurs semaines.",
          "On ne met pas la paie, le stock et les congés dans cette création. Un CRM qui promet toute l'entreprise n'est plus un CRM. Le bureau, à Casablanca, boulevard Dammam, peut relire la liste autour de la table. Pas d'autre bureau en France ou au Canada.",
        ],
      },
      {
        heading: "Ce que la création ne promet pas",
        paragraphs: [
          "Pas de prix public. Pas de montant « à partir de ». La note suit les écrans, les rôles et les branchements, email ou outil déjà payé compris. Les pages du site ne sont pas un devis.",
          "Pas d'avis clients, pas de note, pas de nombre de pipelines « gérés ». À la remise, le code, le dépôt et l'hébergement livré sont à l'entreprise. C'est le fait. Le reste serait une invention.",
        ],
      },
      {
        heading: "Quand écrire",
        paragraphs: [
          "Écrire quand la liste des étapes existe déjà dans la tête de deux personnes qui ne la disent pas pareil. Apporter les deux versions. On en gardera une.",
          "Réponse sous un jour ouvré, lundi à vendredi, 9 h à 19 h. [[/contact|Envoyer les étapes]] suffit. Téléphone : +212 666 650 696.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Donner l'ordre des étapes" },
      { href: "/developpement-logiciel-sur-mesure-maroc/crm", label: "L'offre CRM" },
      { href: "/developpement-logiciel-sur-mesure-maroc/crm/logiciel-crm-personnalise", label: "Le CRM personnalisé" },
    ],
    en: {
      title: "Creating a custom CRM",
      description:
        "Creating a custom CRM starts from the real steps, not an empty template. Byte Force, Casablanca. No public price.",
      h1: "Creating a custom CRM",
      lede: "Creating a custom CRM starts when the steps of a file are named. Not when a product name has been chosen. Byte Force does it from Casablanca, at Technopark. No public price. [[/contact|Write]] with the order of the steps, even if it fits on one sheet.",
      sections: [
      {
        heading: "What must exist before writing",
        paragraphs: [
          "Before creation, the steps a file really crosses are written down. Who creates it, who moves it, who follows up, who exports. Without that list, the result would be a vendor's CRM with another logo. The offer is on the CRM page. The custom CRM page says the same subject for a company whose cycle does not fit a template.",
          "One sheet is enough. A fifty-page specification delays the work. The first thirty minutes check whether the list is a CRM or a spreadsheet that should stay.",
        ],
      },
      {
        heading: "The order of the work",
        paragraphs: [
          "The scope is written, then built. A deposit starts the work. The rest follows what is delivered. If a step is added, it is accepted before it is coded. There is no fixed public schedule: a first version often takes several weeks.",
          "Payroll, stock and leave are not put into this creation. A CRM that promises the whole company is no longer a CRM. The office, in Casablanca, boulevard Dammam, can reread the list around the table. No other office in France or Canada.",
        ],
      },
      {
        heading: "What creation does not promise",
        paragraphs: [
          "No public price. No amount « from ». The figure follows the screens, the roles and the connections, including email or a tool already paid for. The pages of the site are not a quote.",
          "No client reviews, no score, no count of pipelines « managed ». At handover, the code, the repository and the delivered hosting belong to the company. That is the fact. The rest would be an invention.",
        ],
      },
      {
        heading: "When to write",
        paragraphs: [
          "Write when the list of steps already exists in the heads of two people who do not say it the same way. Bring both versions. One will be kept.",
          "A reply within one business day, Monday to Friday, 9:00 to 19:00. [[/contact|Send the steps]] is enough. Phone: +212 666 650 696.",
        ],
      },
      ],
    },
  },
  {
    slug: "cout-crm-personnalise",
    title: "Combien coûte un CRM personnalisé",
    description:
      "Combien coûte un CRM personnalisé : pas de montant public. La note suit les étapes, les rôles et les branchements. Casablanca.",
    h1: "Combien coûte un CRM personnalisé",
    date: "2026-10-08",
    lede: "Combien coûte un CRM personnalisé : Byte Force ne publie pas de montant. À Casablanca, la note suit les étapes du cycle, les rôles, et les branchements. Le [[/insights/cout-logiciel-sur-mesure-maroc|principe est le même]] que pour tout logiciel. [[/contact|Écrire]] pour le cycle réel, pas pour une grille.",
    sections: [
      {
        heading: "Il n'y a pas de tarif de CRM",
        paragraphs: [
          "Un CRM « à partir de » tant de dirhams par utilisateur décrit l'abonnement d'un éditeur, ou un forfait. Byte Force ne publie ni l'un ni l'autre. Les pages du site ne sont pas un devis. Un chiffre n'existe qu'après les étapes écrites : qui crée le dossier, qui le fait avancer, qui relance.",
          "Comparer deux CRM personnalisés sans ces étapes, c'est comparer deux mots. La page [[/developpement-logiciel-sur-mesure-maroc/crm|CRM sur mesure]] dit ce qui se construit. Celle-ci dit ce qui fait bouger la note, et ce qui ne la fait pas bouger.",
        ],
      },
      {
        heading: "Ce qui change le montant",
        paragraphs: [
          "Le nombre d'étapes que quelqu'un utilise vraiment. Le nombre de rôles. Les branchements : la boîte mail, un outil déjà payé, un export que la comptabilité doit recevoir. Ajouter le stock, la paie et les congés sur le même devis fait monter la note sans rendre la relance plus sûre.",
          "Le bureau à Casablanca, Technopark, boulevard Dammam, ne rajoute pas une ligne. Pas de bureau en France ni au Canada. La proximité n'est pas une remise. Un premier échange de trente minutes est gratuit, y compris s'il conclut de garder l'outil du marché.",
        ],
      },
      {
        heading: "Ce qu'un devis devrait montrer",
        paragraphs: [
          "Les écrans. Les rôles. Les branchements. Ce qui est dans la première version, et ce qui attend. Un acompte, puis des étapes liées à ce qui est livré. À la remise, le code, le dépôt et l'hébergement livré sont à l'entreprise. Si le périmètre change, c'est écrit avant.",
          "Il n'y a pas de délai fixe collé au prix. Une première version tient souvent en plusieurs semaines, selon le cycle. On ne publie pas un gain, un nombre de commerciaux, ou une note pour justifier un montant qui n'est pas affiché.",
        ],
      },
      {
        heading: "Quand écrire",
        paragraphs: [
          "Écrire quand un chiffre circule sans dire les étapes, ou quand l'abonnement actuel coûte en contournements que personne n'a écrits. Apporter le cycle, pas un budget inventé.",
          "Réponse sous un jour ouvré, 9 h à 19 h. [[/contact|Décrire les étapes]] suffit. Téléphone : +212 666 650 696.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Décrire le cycle" },
      { href: "/developpement-logiciel-sur-mesure-maroc/crm", label: "Le CRM" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Le logiciel sur mesure" },
    ],
    en: {
      title: "What a custom CRM costs",
      description:
        "What a custom CRM costs is not public. The figure follows the steps, the roles and the connections. Casablanca. No grid.",
      h1: "What a custom CRM costs",
      lede: "What a custom CRM costs is not a published figure. In Casablanca, the amount follows the steps of the cycle, the roles, and the connections. The rule is the same as for any custom software. [[/contact|Write]] with the real cycle, not for a grid.",
      sections: [
      {
        heading: "There is no CRM tariff",
        paragraphs: [
          "A CRM « from » so many dirhams per user describes a vendor's subscription, or a package. Byte Force publishes neither. The pages of the site are not a quote. A figure exists only after the steps are written: who creates the file, who moves it, who follows up.",
          "Comparing two custom CRMs without those steps is comparing two words. The CRM page says what gets built. This page says what moves the amount, and what does not.",
        ],
      },
      {
        heading: "What changes the amount",
        paragraphs: [
          "The number of steps someone really uses. The number of roles. The connections: the mailbox, a tool already paid for, an export accounting must receive. Adding stock, payroll and leave on the same quote raises the amount without making the follow-up safer.",
          "The office in Casablanca, Technopark, boulevard Dammam, does not add a line. No office in France or Canada. Being nearby is not a discount. A first conversation of thirty minutes is free, including when it ends with keeping the market tool.",
        ],
      },
      {
        heading: "What a quote should show",
        paragraphs: [
          "The screens. The roles. The connections. What is in the first version, and what waits. A deposit, then steps tied to what is delivered. At handover, the code, the repository and the delivered hosting belong to the company. If the scope changes, it is written first.",
          "There is no fixed schedule stuck to the price. A first version often takes several weeks, according to the cycle. No gain, no count of salespeople, and no score is published to justify an amount that is not displayed.",
        ],
      },
      {
        heading: "When to write",
        paragraphs: [
          "Write when a figure is circulating without the steps, or when the current subscription costs in workarounds nobody has written down. Bring the cycle, not an invented budget.",
          "A reply within one business day, 9:00 to 19:00. [[/contact|Describe the steps]] is enough. Phone: +212 666 650 696.",
        ],
      },
      ],
    },
  },
  {
    slug: "crm-ou-excel",
    title: "CRM vs Excel entreprise",
    description:
      "CRM vs Excel dans une entreprise : le fichier suffit tant qu'une personne l'écrit. Dès qu'ils sont deux, le dossier se contredit. Casablanca.",
    h1: "CRM vs Excel entreprise",
    date: "2026-10-08",
    lede: "CRM vs Excel, pour une entreprise : le tableur suffit tant qu'une seule personne écrit le dossier. Dès que deux personnes le modifient, personne ne sait plus quelle ligne est vraie. Byte Force, à Casablanca, ne publie pas de prix pour trancher. [[/contact|Écrire]] avec le fichier, ou sans.",
    sections: [
      {
        heading: "Quand Excel gagne",
        paragraphs: [
          "Excel gagne pour une liste courte, tenue par une personne, sans validation et sans relance oubliée. Le recopier dans un CRM serait payer pour un écran de plus. Le premier échange le dit. Byte Force n'a pas intérêt à construire si le fichier tient.",
          "Excel perd quand deux commerciaux écrasent la même ligne, quand la relance est une couleur, ou quand le devis part d'une version que l'autre n'a pas. Là, le [[/developpement-logiciel-sur-mesure-maroc/crm/remplacer-excel|remplacement]] a un sens. La page [[/solutions/remplacer-excel|fichier devenu l'entreprise]] décrit le même seuil, vu depuis le tableur.",
        ],
      },
      {
        heading: "Ce que le CRM ne doit pas reprendre",
        paragraphs: [
          "On ne reprend pas les cinquante colonnes. On reprend le dossier : qui le crée, qui le fait avancer, qui doit relancer. Le reste du classeur, calculs ponctuels compris, peut rester dans le tableur. Un CRM qui recopierait Excel en entier n'aurait rien réglé.",
          "Pas de prix public pour « passer de Excel à un CRM ». La note suit ce qu'on reprend vraiment. Casablanca, Technopark, boulevard Dammam. Pas de bureau ailleurs. Pas de délai fixe : souvent plusieurs semaines pour la première version du cycle, pas pour tout le classeur.",
        ],
      },
      {
        heading: "Ce qui est rendu",
        paragraphs: [
          "Le code, le dépôt et l'hébergement livré reviennent à l'entreprise. Le fichier Excel peut rester une archive. On ne publie pas un taux de conversion, un nombre de lignes migrées, ou une note. Rien de tout cela n'est un fait du studio.",
          "Un acompte après un périmètre écrit. Un changement écrit avant d'être construit. Le [[/developpement-logiciel-sur-mesure-maroc/crm|CRM]] reste l'offre. Cette page ne sert qu'à choisir entre le fichier et le cycle.",
        ],
      },
      {
        heading: "Quand écrire",
        paragraphs: [
          "Écrire quand vous pouvez dire combien de personnes touchent le même fichier cette semaine. Une seule : gardez Excel. Deux ou plus, avec des versions qui divergent : apportez le fichier, ou décrivez les colonnes qui se contredisent.",
          "Trente minutes, gratuites. Réponse sous un jour ouvré, 9 h à 19 h. [[/contact|Dire qui écrit]] suffit. Téléphone : +212 666 650 696.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Dire qui écrit le fichier" },
      { href: "/developpement-logiciel-sur-mesure-maroc/crm/remplacer-excel", label: "Remplacer Excel par un CRM" },
      { href: "/solutions/remplacer-excel", label: "Quand le fichier est devenu l'entreprise" },
    ],
    en: {
      title: "CRM or Excel for a company",
      description:
        "CRM or Excel: the file is enough while one person writes it. Once two people edit it, the row is no longer true. Casablanca.",
      h1: "CRM or Excel for a company",
      lede: "CRM vs Excel, for a company: the spreadsheet is enough while one person writes the file. Once two people change it, nobody knows which row is true. Byte Force, in Casablanca, does not publish a price to settle it. [[/contact|Write]] with the file, or without it.",
      sections: [
      {
        heading: "When Excel wins",
        paragraphs: [
          "Excel wins for a short list, kept by one person, with no approval and no forgotten follow-up. Copying it into a CRM would mean paying for one more screen. The first conversation says so. Byte Force has no reason to build if the file holds.",
          "Excel loses when two salespeople overwrite the same row, when the follow-up is a colour, or when the quote leaves from a version the other person does not have. Then replacement makes sense. The page about the file becoming the company describes the same threshold, seen from the spreadsheet.",
        ],
      },
      {
        heading: "What the CRM should not copy",
        paragraphs: [
          "The fifty columns are not copied. The file is: who creates it, who moves it, who must follow up. The rest of the workbook, including one-off calculations, can stay in the spreadsheet. A CRM that copied Excel entirely would have fixed nothing.",
          "No public price for « moving from Excel to a CRM ». The figure follows what is actually taken. Casablanca, Technopark, boulevard Dammam. No office elsewhere. No fixed schedule: often several weeks for the first version of the cycle, not for the whole workbook.",
        ],
      },
      {
        heading: "What is handed over",
        paragraphs: [
          "The code, the repository and the delivered hosting return to the company. The Excel file can remain an archive. No conversion rate, no count of migrated rows, and no score is published. None of that is a fact of the studio.",
          "A deposit after a written scope. A change written before it is built. The CRM page remains the offer. This page only helps choose between the file and the cycle.",
        ],
      },
      {
        heading: "When to write",
        paragraphs: [
          "Write when you can say how many people touch the same file this week. One: keep Excel. Two or more, with versions that diverge: bring the file, or describe the columns that contradict each other.",
          "Thirty minutes, free. A reply within one business day, 9:00 to 19:00. [[/contact|Say who writes it]] is enough. Phone: +212 666 650 696.",
        ],
      },
      ],
    },
  },
  {
    slug: "remplacer-excel-par-un-crm",
    title: "Remplacer Excel par un CRM",
    description:
      "Remplacer Excel par un CRM se décide quand deux personnes écrasent le même dossier. Byte Force, Casablanca. Pas de prix public.",
    h1: "Remplacer Excel par un CRM",
    date: "2026-10-08",
    lede: "Remplacer Excel par un CRM se décide sur un fait : deux personnes modifient le même dossier, et plus personne ne sait quelle ligne est partie chez le client. Byte Force, au Technopark à Casablanca, ne vend pas la migration d'un classeur entier. Pas de prix public. [[/contact|Écrire]] pour dire quelles colonnes se contredisent.",
    sections: [
      {
        heading: "Le seuil",
        paragraphs: [
          "On remplace le fichier quand la relance, le devis ou le statut vivent dans des versions différentes. Une couleur, un onglet « final », un mail « regarde la v3 ». Le [[/developpement-logiciel-sur-mesure-maroc/crm/remplacer-excel|CRM qui remplace Excel]] est l'offre. La page [[/solutions/remplacer-excel|tableur]] dit le même seuil sans parler encore d'un cycle de vente.",
          "On ne remplace pas un classeur de dix lignes tenu par une personne. On ne remplace pas non plus toute la comptabilité parce que le pipeline est cassé. Le CRM reprend le dossier commercial. Le calcul ponctuel peut rester dans Excel.",
        ],
      },
      {
        heading: "Ce qui est repris",
        paragraphs: [
          "Les colonnes qui décident : le client, l'étape, qui doit agir, la date de relance. Pas les cinquante colonnes historiques. La première version permet de créer le dossier, de le faire avancer, et de voir la relance du jour. Le reste du classeur attend.",
          "Périmètre écrit, acompte, puis livraison. À la remise, le code, le dépôt et l'hébergement sont à l'entreprise. Le fichier peut rester une archive. Pas de nombre de lignes migrées publié : on n'a pas ce chiffre, et on n'en invente pas.",
        ],
      },
      {
        heading: "Ce qui ne change pas la décision",
        paragraphs: [
          "Le bureau est à Casablanca, boulevard Dammam, Aïn Chock. Ça permet de regarder le fichier ensemble. Ça ne crée pas un tarif « migration Excel ». Pas de grille. Pas de bureau en France ni au Canada. Pas de délai fixe : souvent plusieurs semaines pour le cycle repris, pas pour tout l'historique.",
          "Un éditeur qui promet d'importer le classeur tel quel promet un Excel avec un login. Ce n'est pas le sujet. Si l'import est utile, il porte les colonnes décidées, pas l'onglet entier.",
        ],
      },
      {
        heading: "Quand écrire",
        paragraphs: [
          "Écrire avec le nom des colonnes qui divergent, et le nombre de personnes qui les touchent. Une personne : gardez le fichier. Plusieurs : le cycle a une page.",
          "Trente minutes, gratuites. Réponse sous un jour ouvré, 9 h à 19 h. [[/contact|Décrire le fichier]] suffit. Téléphone : +212 666 650 696.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Dire quelles colonnes divergent" },
      { href: "/developpement-logiciel-sur-mesure-maroc/crm/remplacer-excel", label: "L'offre pour quitter Excel" },
      { href: "/solutions/remplacer-excel", label: "Le fichier devenu l'entreprise" },
    ],
    en: {
      title: "Replacing Excel with a CRM",
      description:
        "Replace Excel with a CRM when two people overwrite the same file. Byte Force, Casablanca. No public price, and not a full workbook import.",
      h1: "Replacing Excel with a CRM",
      lede: "Replacing Excel with a CRM is decided on one fact: two people edit the same file, and nobody knows which row went to the customer. Byte Force, at Technopark in Casablanca, does not sell a migration of the whole workbook. No public price. [[/contact|Write]] and say which columns contradict each other.",
      sections: [
      {
        heading: "The threshold",
        paragraphs: [
          "The file is replaced when the follow-up, the quote or the status live in different versions. A colour, a tab named final, an email saying look at v3. The offer page is the CRM that replaces Excel. The spreadsheet page says the same threshold before it is a sales cycle.",
          "A ten-line workbook kept by one person is not replaced. Accounting is not replaced either because the pipeline is broken. The CRM takes the commercial file. The one-off calculation can stay in Excel.",
        ],
      },
      {
        heading: "What is taken",
        paragraphs: [
          "The columns that decide: the customer, the step, who must act, the follow-up date. Not the fifty historical columns. The first version can create the file, move it, and show today's follow-up. The rest of the workbook waits.",
          "A written scope, a deposit, then delivery. At handover, the code, the repository and the hosting belong to the company. The file can remain an archive. No count of migrated rows is published: that figure is not on file, and it is not invented.",
        ],
      },
      {
        heading: "What does not change the decision",
        paragraphs: [
          "The office is in Casablanca, boulevard Dammam, Aïn Chock. That lets us look at the file together. It does not create a « Excel migration » tariff. No grid. No office in France or Canada. No fixed schedule: often several weeks for the cycle that was taken, not for the whole history.",
          "A vendor that promises to import the workbook as it stands promises Excel with a login. That is not the subject. If an import is useful, it carries the columns that were decided, not the entire tab.",
        ],
      },
      {
        heading: "When to write",
        paragraphs: [
          "Write with the names of the columns that diverge, and how many people touch them. One person: keep the file. Several: the cycle has a page.",
          "Thirty minutes, free. A reply within one business day, 9:00 to 19:00. [[/contact|Describe the file]] is enough. Phone: +212 666 650 696.",
        ],
      },
      ],
    },
  },
  {
    slug: "quand-utiliser-un-crm",
    title: "Quand utiliser un CRM",
    description:
      "Quand utiliser un CRM : quand la relance ne tient plus dans une tête ou un fichier. Byte Force, Casablanca. Pas de prix public. Écrire.",
    h1: "Quand utiliser un CRM",
    date: "2026-10-08",
    lede: "Quand utiliser un CRM : quand la relance, le devis ou le statut ne tiennent plus dans une tête ou dans un fichier qu'une seule personne maîtrise. Pas avant. Byte Force est à Casablanca. Pas de prix public. [[/contact|Écrire]] pour dire où la relance se perd.",
    sections: [
      {
        heading: "Le moment",
        paragraphs: [
          "Le moment est là quand un client attend une réponse que personne ne retrouve, ou quand deux personnes annoncent deux étapes différentes pour le même dossier. Utiliser un CRM, c'est donner un endroit unique à cette étape. L'offre est le [[/developpement-logiciel-sur-mesure-maroc/crm|CRM sur mesure]], si le cycle n'est pas celui d'un éditeur. Sinon, l'outil du marché peut suffire.",
          "Le moment n'est pas là pour une liste de dix noms, tenue par le dirigeant seul. Un tableur reste plus court. Le premier échange sert à ne pas construire.",
        ],
      },
      {
        heading: "Ce qu'utiliser veut dire",
        paragraphs: [
          "Utiliser veut dire : créer le dossier, le faire avancer, voir qui doit relancer aujourd'hui. Pas installer cinquante modules. Pas remplacer la comptabilité. Les rôles sont ceux qui existent déjà. La première version s'arrête à ce geste.",
          "À Casablanca, Technopark, boulevard Dammam, on peut dérouler trois dossiers réels. Pas de bureau en France ni au Canada. Pas de grille. Le montant suivra les étapes retenues, pas le mot CRM.",
        ],
      },
      {
        heading: "Ce qui est livré si on construit",
        paragraphs: [
          "Si le cycle est propre à l'entreprise, le code, le dépôt et l'hébergement livré lui reviennent. Un acompte après un périmètre écrit. Pas de délai fixe : souvent plusieurs semaines. [[/solutions/logiciel-pme|Une PME]] n'a pas besoin du CRM d'un groupe pour commencer.",
          "On ne publie pas un taux de relance, un nombre de fiches, ou une note. Ces chiffres ne sont pas des faits du studio. Les projets en ligne ne sont pas des CRM de démonstration.",
        ],
      },
      {
        heading: "Quand écrire",
        paragraphs: [
          "Écrire quand vous pouvez raconter la dernière relance perdue. Si vous ne pouvez pas, le CRM est en avance. Si vous pouvez, apportez l'étape et qui devait la faire.",
          "Trente minutes, gratuites. Réponse sous un jour ouvré, 9 h à 19 h. [[/contact|Raconter la relance]] suffit. Téléphone : +212 666 650 696.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Dire où la relance se perd" },
      { href: "/developpement-logiciel-sur-mesure-maroc/crm", label: "Le CRM sur mesure" },
      { href: "/solutions/logiciel-pme", label: "Pour une PME" },
    ],
    en: {
      title: "When to use a CRM",
      description:
        "Use a CRM when the follow-up no longer fits in one head or one file. Byte Force, Casablanca. No public price. Write with the lost follow-up.",
      h1: "When to use a CRM",
      lede: "When to use a CRM: when the follow-up, the quote or the status no longer fit in one head or in a file one person controls. Not before. Byte Force is in Casablanca. No public price. [[/contact|Write]] and say where the follow-up gets lost.",
      sections: [
      {
        heading: "The moment",
        paragraphs: [
          "The moment is here when a customer waits for an answer nobody can find, or when two people announce two different steps for the same file. Using a CRM means giving that step one place. The offer is a custom CRM, if the cycle is not a vendor's cycle. Otherwise the market tool can be enough.",
          "The moment is not here for a list of ten names, kept by the owner alone. A spreadsheet stays shorter. The first conversation is there so that nothing gets built.",
        ],
      },
      {
        heading: "What using means",
        paragraphs: [
          "Using means: create the file, move it forward, see who must follow up today. Not installing fifty modules. Not replacing accounting. The roles are the ones that already exist. The first version stops at that action.",
          "In Casablanca, Technopark, boulevard Dammam, three real files can be walked through. No office in France or Canada. No grid. The amount will follow the steps that were kept, not the word CRM.",
        ],
      },
      {
        heading: "What is delivered if it is built",
        paragraphs: [
          "If the cycle belongs to the company, the code, the repository and the delivered hosting return to it. A deposit after a written scope. No fixed schedule: often several weeks. A small company does not need a group's CRM to start.",
          "No follow-up rate, no count of cards, and no score is published. Those figures are not facts of the studio. Projects online are not demo CRMs.",
        ],
      },
      {
        heading: "When to write",
        paragraphs: [
          "Write when you can tell the story of the last follow-up that was lost. If you cannot, the CRM is early. If you can, bring the step and who was supposed to do it.",
          "Thirty minutes, free. A reply within one business day, 9:00 to 19:00. [[/contact|Tell the follow-up]] is enough. Phone: +212 666 650 696.",
        ],
      },
      ],
    },
  },
  {
    slug: "crm-pme-maroc",
    title: "CRM pour PME Maroc",
    description:
      "CRM pour une PME au Maroc : le cycle tient souvent dans quelques étapes, pas dans une suite de groupe. Casablanca. Pas de prix public.",
    h1: "CRM pour PME Maroc",
    date: "2026-10-08",
    lede: "Un CRM pour une PME au Maroc n'est pas le CRM d'un groupe avec les modules en moins. C'est le cycle réel : souvent peu d'étapes, tenues par peu de personnes. Byte Force l'écrit depuis le Technopark, à Casablanca. Pas de prix public. [[/contact|Écrire]] pour nommer ces étapes.",
    sections: [
      {
        heading: "Ce qu'une PME n'a pas à acheter",
        paragraphs: [
          "Une PME n'a pas à ouvrir la paie, le stock et le marketing automation pour suivre dix devis. Le [[/solutions/logiciel-pme|logiciel pour une PME]] part du geste qui coince. Le [[/developpement-logiciel-sur-mesure-maroc/crm|CRM]] est ce geste quand il est commercial. Le reste attend, ou reste dans l'outil déjà payé.",
          "Elle n'a pas non plus à réécrire un cycle qui rentre déjà dans un abonnement simple. Si trois étapes standard suffisent et que l'équipe s'en sert, on le dit. Construire alors serait un doublon.",
        ],
      },
      {
        heading: "Le cycle court",
        paragraphs: [
          "La première version : créer le dossier, le faire avancer, voir la relance. Les rôles sont ceux qui existent, souvent le dirigeant et une autre personne, pas une hiérarchie dessinée pour un groupe. Les écrans sont ceux qu'ils ouvrent vraiment.",
          "À Casablanca, boulevard Dammam, Aïn Chock, on peut prendre trois dossiers de la semaine et les poser sur la table. Pas de bureau en France ni au Canada. Pas de grille « PME ». La note suivra ces étapes, après un périmètre écrit.",
        ],
      },
      {
        heading: "Ce qui est rendu",
        paragraphs: [
          "Le code, le dépôt et l'hébergement livré reviennent à l'entreprise. Un acompte lance le travail. Pas de délai fixe : souvent plusieurs semaines, selon les rôles, pas selon une étiquette PME. Un changement de périmètre est écrit avant d'être construit.",
          "On ne publie pas un nombre de PME accompagnées, un taux, ou une note. Dealkhir, en ligne à Casablanca, n'est pas un CRM de PME et on ne le présente pas comme tel.",
        ],
      },
      {
        heading: "Quand écrire",
        paragraphs: [
          "Écrire quand les devis et les relances tiennent dans une boîte mail ou un fichier à deux. Apporter les étapes, même si elles sont quatre. Pas le catalogue d'un éditeur.",
          "Trente minutes, gratuites. Réponse sous un jour ouvré, 9 h à 19 h. [[/contact|Décrire les quatre étapes]] suffit. Téléphone : +212 666 650 696.",
        ],
      },
    ],
    links: [
      { href: "/contact", label: "Nommer les étapes" },
      { href: "/developpement-logiciel-sur-mesure-maroc/crm", label: "Le CRM sur mesure" },
      { href: "/solutions/logiciel-pme", label: "Logiciel pour une PME" },
    ],
    en: {
      title: "A CRM for an SME in Morocco",
      description:
        "A CRM for an SME in Morocco is the real short cycle, not a group's suite with modules removed. Casablanca. No public price.",
      h1: "A CRM for an SME in Morocco",
      lede: "A CRM for an SME in Morocco is not a group's CRM with the modules switched off. It is the real cycle: often few steps, kept by few people. Byte Force writes it from Technopark, in Casablanca. No public price. [[/contact|Write]] and name those steps.",
      sections: [
      {
        heading: "What an SME does not have to buy",
        paragraphs: [
          "An SME does not have to open payroll, stock and marketing automation to follow ten quotes. Software for an SME starts from the action that sticks. The CRM is that action when it is commercial. The rest waits, or stays in the tool already paid for.",
          "It also does not have to rewrite a cycle that already fits a simple subscription. If three standard steps are enough and the team uses them, that is said. Building then would be a duplicate.",
        ],
      },
      {
        heading: "The short cycle",
        paragraphs: [
          "The first version: create the file, move it forward, see the follow-up. The roles are the ones that exist, often the owner and one other person, not a hierarchy drawn for a group. The screens are the ones they really open.",
          "In Casablanca, boulevard Dammam, Aïn Chock, three files from the week can be put on the table. No office in France or Canada. No « SME » grid. The figure will follow those steps, after a written scope.",
        ],
      },
      {
        heading: "What is handed over",
        paragraphs: [
          "The code, the repository and the delivered hosting return to the company. A deposit starts the work. No fixed schedule: often several weeks, according to the roles, not according to an SME label. A scope change is written before it is built.",
          "No count of SMEs helped, no rate, and no score is published. Dealkhir, online in Casablanca, is not an SME CRM and is not presented as one.",
        ],
      },
      {
        heading: "When to write",
        paragraphs: [
          "Write when quotes and follow-ups live in a mailbox or a file shared by two people. Bring the steps, even if there are four. Not a vendor's catalogue.",
          "Thirty minutes, free. A reply within one business day, 9:00 to 19:00. [[/contact|Describe the steps]] is enough. Phone: +212 666 650 696.",
        ],
      },
      ],
    },
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
