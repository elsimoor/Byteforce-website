export type Article = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  date: string;
  lede: string;
  sections: { heading: string; paragraphs: string[] }[];
  links: { href: string; label: string }[];
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
