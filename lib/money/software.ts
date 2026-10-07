import type { MoneyPage } from "./types";

const contact = { href: "/contact", label: "Décrire le projet" };

export const softwarePages: MoneyPage[] = [
  {
    path: "developpement-logiciel-sur-mesure-maroc",
    group: "Logiciel",
    crumb: "Développement logiciel sur mesure",
    keyword: "développement logiciel sur mesure Maroc",
    title: "Développement logiciel sur mesure au Maroc",
    description:
      "Byte Force, à Casablanca, écrit le logiciel autour du processus réel : CRM, ERP, métier, automatisation. Le code reste à l'entreprise.",
    h1: "Développement logiciel sur mesure au Maroc",
    cta: "Parler du logiciel",
    schema: "service",
    lede: "Un logiciel sur mesure est un programme écrit pour le fonctionnement d'une entreprise précise, pas un abonnement configuré pour s'en approcher. Byte Force le conçoit depuis le Technopark, à Casablanca : le dépôt, le code et l'hébergement livré reviennent au client.",
    blocks: [
      {
        h: "Quand le sur-mesure a un sens",
        p: [
          "Il a un sens quand le travail ne rentre pas dans un outil du marché sans tordre le métier. Plusieurs fichiers Excel qui se contredisent, une validation qui n'existe que dans une conversation, un client qui attend un état que personne ne peut sortir le soir : le coût est déjà là, il est seulement mal compté.",
          "Il n'a pas de sens pour une comptabilité standard, une messagerie ou un tableur de dix lignes. Acheter un logiciel déjà fait est alors plus court. Le premier échange sert aussi à dire non.",
        ],
      },
      {
        h: "Ce que l'on construit vraiment",
        p: [
          "Le parent de cette page est le cadre. Les sujets précis ont leur propre page, parce qu'un CRM n'est pas un ERP et qu'un outil interne n'est pas une automatisation.",
        ],
        items: [
          "[[/developpement-logiciel-sur-mesure-maroc/crm|Un CRM sur mesure]] suit prospects, devis et relances selon le cycle de vente réel.",
          "[[/developpement-logiciel-sur-mesure-maroc/erp|Un ERP sur mesure]] relie achats, stocks, ventes et production sans empiler trois logiciels.",
          "[[/developpement-logiciel-sur-mesure-maroc/logiciel-metier|Un logiciel métier]] épouse un seul métier, avec son vocabulaire et ses règles.",
          "[[/developpement-logiciel-sur-mesure-maroc/automatisation|L'automatisation]] enlève les ressaisies et les passages manuels entre outils.",
        ],
      },
      {
        h: "Sur mesure, catalogue, ou équipe interne",
        heads: ["Sur mesure", "Autre voie"],
        table: [
          { point: "Le processus", a: "Le logiciel suit l'entreprise", b: "L'entreprise suit l'éditeur" },
          { point: "Les données", a: "Base et code remis au client", b: "Données chez l'éditeur, export limité" },
          { point: "Le délai", a: "Semaines, selon les rôles", b: "Jours si le besoin est standard" },
          { point: "L'équipe interne", a: "Utile pour la maintenance ensuite", b: "Lourde à monter pour un premier produit" },
        ],
        p: [
          "Faire construire à l'extérieur ne dispense pas d'un responsable métier chez le client. Byte Force écrit le périmètre avec lui. Sans cette personne, le logiciel décrit un processus que personne ne pratique.",
        ],
      },
      {
        h: "Architecture, droits, suite",
        p: [
          "Une première version tient souvent en une application web, une base, des rôles et les branchements vraiment utiles. L'authentification sépare qui voit un dossier, qui le valide, qui l'exporte. L'historique dit qui a changé quoi. Ce n'est pas un décor : c'est ce qui manque le jour où deux personnes éditent le même fichier.",
          "Après la remise, les défauts du périmètre convenu sont corrigés avec la livraison. La suite est un correctif devisé ou un suivi. Il n'y a pas de prix public : le montant suit les écrans, les rôles et les branchements. Un échange de trente minutes est gratuit.",
        ],
      },
    ],
    faqs: [
      { q: "Qu'est-ce qu'un logiciel sur mesure ?", a: "C'est un logiciel conçu pour les rôles, les données et les règles d'une entreprise, plutôt qu'un produit générique paramétré après coup." },
      { q: "Byte Force est-il une agence web généraliste ?", a: "Non. Le travail est le logiciel d'entreprise : application, métier, automatisation. Le bureau est au Technopark, boulevard Dammam, Aïn Chock, Casablanca." },
      { q: "Qui possède le code ?", a: "Le client, à la remise : code, dépôt et comptes d'hébergement livrés." },
      { q: "Combien de temps faut-il ?", a: "Un audit tient en quelques jours. Une première version tient souvent en plusieurs semaines. Le délai suit le nombre de rôles et de branchements, pas une promesse fixe." },
    ],
    proof: [
      { href: "/realisations/dealkhir", title: "Dealkhir", note: "Plateforme pour les organisations et les dons, en ligne à Casablanca depuis 2024." },
      { href: "/realisations/re-proche-de-moi", title: "Proche de moi", note: "Recherche et fiches, en ligne à Lille depuis 2024." },
      { href: "/realisations/coco-inbox", title: "Coco Inbox", note: "Produit publié : email temporaire, fichiers chiffrés, notes. Montréal, 2024." },
    ],
    links: [
      { href: "/solutions/remplacer-excel", label: "Remplacer Excel" },
      { href: "/solutions/remplacer-saas", label: "Remplacer un SaaS" },
      { href: "/developpement-logiciel-casablanca", label: "Depuis Casablanca" },
      { href: "/application-web-sur-mesure-maroc", label: "Application web" },
      contact,
    ],
  },
  {
    path: "developpement-logiciel-sur-mesure-maroc/crm",
    group: "Logiciel",
    crumb: "CRM sur mesure",
    keyword: "CRM sur mesure",
    title: "CRM sur mesure : pipeline, devis, relances",
    description:
      "Un CRM sur mesure suit le cycle de vente réel : prospects, opportunités, devis, relances et droits. Byte Force le construit à Casablanca.",
    h1: "CRM sur mesure",
    cta: "Décrire le cycle de vente",
    schema: "service",
    lede: "Un CRM sur mesure est le logiciel du cycle commercial d'une entreprise, pas une fiche contact générique. Prospects, opportunités, devis, relances et historique y suivent la façon dont l'équipe vend déjà. Byte Force l'écrit depuis Casablanca, dans le cadre du [[/developpement-logiciel-sur-mesure-maroc|développement logiciel sur mesure]].",
    blocks: [
      {
        h: "Ce qu'un CRM doit retenir",
        p: [
          "Le minimum utile n'est pas « une base clients ». C'est l'état d'une affaire : qui a parlé, quel devis est sorti, quelle relance est due, qui a le droit de changer le montant. Sans ça, le CRM devient un carnet d'adresses que personne n'ouvre.",
          "Les champs suivent le métier. Un bureau d'études ne qualifie pas un prospect comme un grossiste. Copier les étapes d'un éditeur force l'équipe à mentir au logiciel pour que le tableau de bord reste vert.",
        ],
      },
      {
        h: "Excel, CRM du marché, CRM écrit pour vous",
        p: [
          "Excel suffit tant qu'une personne tient le fichier et que les autres lui demandent. Il casse dès que deux commerciaux modifient la même liste, ou qu'une relance dépend d'une couleur de cellule. La page [[/developpement-logiciel-sur-mesure-maroc/crm/remplacer-excel|remplacer Excel par un CRM]] détaille ce passage.",
          "Un CRM du marché convient si le cycle est proche du modèle de l'éditeur. Il devient cher quand chaque exception est un module, un consultant, puis un contournement. Le [[/developpement-logiciel-sur-mesure-maroc/crm/logiciel-crm-personnalise|CRM personnalisé]] part des exceptions, parce que ce sont elles qui font le chiffre.",
        ],
      },
      {
        h: "Ce que Byte Force ne prétend pas",
        p: [
          "Le catalogue public ne contient pas de CRM commercial livré à un client nommé. Dealkhir et Coco Inbox sont d'autres produits. Les citer ici comme preuves de CRM serait faux. Le travail proposé est le suivant : lire le cycle, écrire les états d'une affaire, les droits, les relances, puis remettre le code.",
        ],
      },
    ],
    faqs: [
      { q: "Quelle différence entre un CRM et un ERP ?", a: "Le CRM suit la relation et la vente. L'ERP suit les ressources : achats, stocks, production, facturation interne. Beaucoup d'entreprises ont besoin de l'un bien avant l'autre." },
      { q: "Peut-on reprendre les fichiers Excel ?", a: "Oui, si les colonnes sont stables. La migration reprend les affaires en cours et l'historique utile, pas vingt ans de cellules vides. Le mapping se fait avant d'écrire les écrans." },
      { q: "Combien coûte un CRM sur mesure ?", a: "Il n'y a pas de prix affiché. Le montant suit le nombre d'étapes, de rôles, de documents et de branchements (email, devis, outil déjà payé). Un premier échange de trente minutes est gratuit." },
    ],
    proof: [],
    links: [
      { href: "/developpement-logiciel-sur-mesure-maroc/erp", label: "ERP sur mesure" },
      { href: "/solutions/remplacer-excel", label: "Le problème Excel, plus large" },
      { href: "/developpement-logiciel-casablanca/crm", label: "CRM à Casablanca" },
      contact,
    ],
  },
  {
    path: "developpement-logiciel-sur-mesure-maroc/crm/remplacer-excel",
    group: "Logiciel",
    crumb: "Remplacer Excel",
    keyword: "remplacer Excel par un CRM",
    title: "Remplacer Excel par un CRM",
    description:
      "Quand le fichier commercial devient le goulot : doublons, droits, historique, relances. Byte Force dit aussi quand Excel doit rester.",
    h1: "Remplacer Excel par un CRM",
    cta: "Montrer le fichier",
    schema: "service",
    lede: "Remplacer Excel par un CRM consiste à sortir le suivi commercial d'un tableur partagé pour le mettre dans un logiciel à états, à droits et à historique. Ce n'est justifié que si le fichier est déjà le goulot. Sinon, Excel reste le bon outil.",
    blocks: [
      {
        h: "Les signes que le fichier est devenu le travail",
        items: [
          "Deux versions circulent, et personne ne sait laquelle est vraie.",
          "Une couleur ou un commentaire tient lieu de statut.",
          "La relance dépend de la mémoire de la personne qui a le fichier ouvert.",
          "Un départ en congé bloque les devis, parce que le classeur est sur une machine.",
          "La direction demande un chiffre que le fichier ne peut pas produire sans une soirée de copier-coller.",
        ],
      },
      {
        h: "Ce qu'Excel fait encore très bien",
        p: [
          "Un calcul ponctuel, une liste tenue par une seule personne, un export que l'on retravaille : Excel gagne. Le CRM ne remplace pas le tableur de simulation. Il remplace le classeur qui est devenu la base commerciale de l'entreprise.",
          "La page plus large [[/solutions/remplacer-excel|remplacer Excel]] parle des opérations, pas seulement de la vente. Ici, le sujet est le pipeline.",
        ],
      },
      {
        h: "Migration sans recopier la grille",
        p: [
          "Reprendre les colonnes telles quelles produit un Excel avec un login. On commence par les états d'une affaire : nouveau, devis envoyé, relance, gagné, perdu. Ensuite seulement les champs. Les doublons se traitent avant l'import, pas après, sinon le CRM naît déjà faux.",
          "L'historique utile est celui qui sert encore : dernier échange, montant, prochaine action. Vingt onglets de 2016 n'ont souvent aucune valeur. On le dit avant de les migrer.",
        ],
      },
    ],
    faqs: [
      { q: "Quand faut-il remplacer Excel ?", a: "Quand plusieurs personnes doivent modifier le même suivi, que les droits n'existent pas, et qu'une information commerciale se perd entre deux fichiers." },
      { q: "Peut-on garder Excel à côté ?", a: "Oui pour les calculs et les exports. Non comme deuxième base des affaires : deux sources redeviennent le problème de départ." },
      { q: "Qui décide des colonnes ?", a: "Les gens qui vendent, avec Byte Force pour séparer un champ utile d'une habitude de mise en forme." },
    ],
    proof: [],
    links: [
      { href: "/developpement-logiciel-sur-mesure-maroc/crm", label: "CRM sur mesure" },
      { href: "/developpement-logiciel-sur-mesure-maroc/crm/logiciel-crm-personnalise", label: "CRM personnalisé" },
      contact,
    ],
  },
  {
    path: "developpement-logiciel-sur-mesure-maroc/crm/logiciel-crm-personnalise",
    group: "Logiciel",
    crumb: "CRM personnalisé",
    keyword: "logiciel CRM personnalisé",
    title: "CRM personnalisé pour une entreprise",
    description:
      "Un CRM personnalisé reprend les étapes, les documents et les droits de l'entreprise. Pas les étapes d'un éditeur renommées.",
    h1: "CRM personnalisé pour une entreprise",
    cta: "Décrire les étapes de vente",
    schema: "service",
    lede: "Un CRM personnalisé est un logiciel dont les étapes, les documents et les droits sont ceux de l'entreprise. « Personnalisé » ne veut pas dire un logo sur un produit standard. Si l'on ne change que les libellés, on a encore le CRM de l'éditeur.",
    blocks: [
      {
        h: "Ce qui est vraiment spécifique",
        p: [
          "Le spécifique, c'est une règle : un devis au-dessus d'un seuil part chez un directeur, une opportunité immobilière a une visite avant un chiffrage, un renouvellement n'est pas une nouvelle affaire. Ces règles se codent. Les renommer dans un menu déroulant ne les fait pas exister.",
          "Les permissions suivent la même logique. Un commercial voit ses affaires. Un responsable voit l'équipe. La comptabilité voit le gagné, pas le brouillon. Un CRM ouvert à tout le monde redevient un fichier partagé.",
        ],
      },
      {
        h: "Ce que l'on évite d'écrire",
        p: [
          "On n'écrit pas un clone de Salesforce avec moins de boutons. On écrit le parcours qui manque. Si quatre-vingt-dix pour cent du besoin est dans un CRM du marché, Byte Force le dit. Le sur-mesure commence là où le paramétrage s'arrête et où les contournements commencent.",
        ],
      },
    ],
    faqs: [
      { q: "Personnalisé veut-il dire que tout est codé à la main ?", a: "Non. L'authentification, les listes et les exports sont des pièces connues. Ce qui est écrit pour l'entreprise, ce sont les règles de vente et les écrans qui les portent." },
      { q: "Peut-on brancher l'email et les devis ?", a: "Oui, quand ils font partie du cycle. Un branchement décoratif n'est pas dans la première version." },
      { q: "Et si le processus change dans six mois ?", a: "Le code est au client. Une étape nouvelle est un évolution devisée, pas un ticket perdu chez un éditeur." },
    ],
    proof: [],
    links: [
      { href: "/developpement-logiciel-sur-mesure-maroc/crm", label: "CRM sur mesure" },
      { href: "/developpement-logiciel-sur-mesure-maroc/crm/remplacer-excel", label: "Partir d'Excel" },
      contact,
    ],
  },
  {
    path: "developpement-logiciel-sur-mesure-maroc/erp",
    group: "Logiciel",
    crumb: "ERP sur mesure",
    keyword: "ERP sur mesure",
    title: "ERP sur mesure : achats, stocks, ventes",
    description:
      "Un ERP sur mesure relie achats, stocks, ventes et production selon l'entreprise. Byte Force évite l'usine à gaz dès la première version.",
    h1: "ERP sur mesure",
    cta: "Décrire les flux",
    schema: "service",
    lede: "Un ERP sur mesure est le logiciel qui relie les ressources d'une entreprise : achats, stocks, ventes, et parfois production. Il ne commence pas par « tous les modules ». Il commence par le flux qui casse aujourd'hui. Byte Force le construit depuis Casablanca, à partir du [[/developpement-logiciel-sur-mesure-maroc|logiciel sur mesure]].",
    blocks: [
      {
        h: "ERP n'est pas un gros CRM",
        p: [
          "Le [[/developpement-logiciel-sur-mesure-maroc/crm|CRM]] s'arrête quand l'affaire est gagnée. L'ERP commence quand il faut commander, réserver, fabriquer, livrer, et savoir ce qui reste. Mélanger les deux dans un premier projet produit un logiciel que personne ne finit.",
          "Une PME qui souffre de relances commerciales n'a pas besoin d'un ERP. Une entreprise dont le stock du fichier ne correspond pas au stock du dépôt, si.",
        ],
      },
      {
        h: "Par où commencer",
        p: [
          "On choisit un flux de bout en bout. Exemple : une commande client réserve du stock, un achat fournisseur le reconstitue, un rôle valide le prix. Le reste attend. Le [[/developpement-logiciel-sur-mesure-maroc/erp/erp-personnalise|ERP personnalisé]] détaille les règles propres à l'entreprise. Le [[/developpement-logiciel-sur-mesure-maroc/erp/logiciel-gestion-entreprise|logiciel de gestion]] est le nom que beaucoup d'équipes utilisent avant de dire ERP.",
        ],
      },
      {
        h: "Preuve et limite",
        p: [
          "Aucun projet du catalogue public n'est un ERP. Le dire évite de vendre Dealkhir ou Coco Inbox pour ce qu'ils ne sont pas. Ce que Byte Force sait faire, et que ces projets montrent, c'est une application avec des rôles, des fiches et des données qui ne vivent plus dans un fichier.",
        ],
      },
    ],
    faqs: [
      { q: "Faut-il un ERP complet pour démarrer ?", a: "Non. Un flux réel, livré, vaut mieux que six modules maquettes. La suite s'ajoute quand le premier flux est utilisé." },
      { q: "Quelle différence avec un logiciel métier ?", a: "Le logiciel métier couvre un métier. L'ERP couvre plusieurs fonctions de l'entreprise et leurs dépendances : acheter change le stock, vendre change la production." },
      { q: "Les données comptables sont-elles incluses ?", a: "La comptabilité légale reste souvent dans l'outil du cabinet. L'ERP peut préparer les pièces et les exports. Recréer un logiciel comptable est un autre projet, rarement le bon." },
    ],
    proof: [],
    links: [
      { href: "/developpement-logiciel-sur-mesure-maroc/logiciel-metier", label: "Logiciel métier" },
      { href: "/solutions/logiciel-entreprise", label: "Logiciel pour une entreprise" },
      contact,
    ],
  },
  {
    path: "developpement-logiciel-sur-mesure-maroc/erp/erp-personnalise",
    group: "Logiciel",
    crumb: "ERP personnalisé",
    keyword: "ERP personnalisé",
    title: "ERP personnalisé, sans les modules inutiles",
    description:
      "L'ERP personnalisé code les règles d'achat, de stock et de validation de l'entreprise. Les modules qui ne servent pas restent dehors.",
    h1: "ERP personnalisé",
    cta: "Lister les règles qui bloquent",
    schema: "service",
    lede: "Un ERP personnalisé reprend les règles de gestion de l'entreprise : qui valide un achat, comment un stock est réservé, quand une fabrication démarre. Le mot personnalisé désigne ces règles, pas une couleur de tableau de bord.",
    blocks: [
      {
        h: "Les règles qui justifient le projet",
        items: [
          "Un achat au-dessus d'un seuil change de valideur.",
          "Un article a plusieurs unités, et le stock se trompe dès qu'on les mélange.",
          "Une commande n'est livrable que si la matière et l'acompte sont là.",
          "Le même produit n'a pas le même circuit selon le client ou le dépôt.",
        ],
        p: [
          "Si aucune règle de ce genre n'existe, un ERP du marché paramétré suffit. Byte Force le dit pendant le cadrage, avant d'écrire.",
        ],
      },
      {
        h: "Première version",
        p: [
          "On documente un circuit papier ou WhatsApp tel qu'il est, puis on en garde la partie qui évite l'erreur chère. Le reste du « module qualité » ou du « module RH » attend une vraie douleur. L'[[/developpement-logiciel-sur-mesure-maroc/erp|ERP sur mesure]] pose le cadre ; cette page ne parle que des règles propres.",
        ],
      },
    ],
    faqs: [
      { q: "Peut-on personnaliser un ERP déjà acheté ?", a: "Parfois, par paramétrage ou par un développement chez l'éditeur. Quand chaque évolution dépend d'un partenaire et d'une version, un logiciel à vous devient plus lisible. Ce n'est pas automatique." },
      { q: "Qui écrit les règles ?", a: "La personne qui subit l'exception aujourd'hui : achats, dépôt, atelier. Pas seulement la direction." },
    ],
    proof: [],
    links: [
      { href: "/developpement-logiciel-sur-mesure-maroc/erp", label: "ERP sur mesure" },
      { href: "/developpement-logiciel-sur-mesure-maroc/erp/logiciel-gestion-entreprise", label: "Logiciel de gestion" },
      contact,
    ],
  },
  {
    path: "developpement-logiciel-sur-mesure-maroc/erp/logiciel-gestion-entreprise",
    group: "Logiciel",
    crumb: "Logiciel de gestion",
    keyword: "logiciel de gestion entreprise",
    title: "Logiciel de gestion d'entreprise",
    description:
      "Le logiciel de gestion relie commandes, stocks et achats dans un seul état. Distinct d'un outil métier étroit et d'un CRM.",
    h1: "Logiciel de gestion d'entreprise",
    cta: "Décrire ce qui n'est pas à jour",
    schema: "service",
    lede: "Un logiciel de gestion d'entreprise donne un seul état des commandes, des stocks et des achats. Les équipes disent souvent « gestion » avant de dire ERP. Le besoin est le même : arrêter les fichiers qui se contredisent entre le commercial, le dépôt et les achats.",
    blocks: [
      {
        h: "Gestion n'est pas le mot fourre-tout",
        p: [
          "Un [[/developpement-logiciel-sur-mesure-maroc/logiciel-metier/gestion|logiciel de gestion sur mesure]] pour un seul métier reste côté logiciel métier. Ici, plusieurs services dépendent les uns des autres. Si seul le commerce souffre, restez sur le [[/developpement-logiciel-sur-mesure-maroc/crm|CRM]].",
          "L'erreur fréquente est de vouloir « tout gérer » : congés, flotte, prospects, stock, paie. Le logiciel devient une coquille. On coupe jusqu'au circuit dont le décalage coûte de l'argent chaque semaine.",
        ],
      },
      {
        h: "Ce que la direction peut enfin lire",
        p: [
          "Un état utile n'est pas un tableau de plus. C'est une question à laquelle le fichier ne répond pas : qu'est-ce qui est commandé et pas reçu, qu'est-ce qui est promis au client et pas en stock. Ces questions se codent comme des vues sur les mêmes données, pas comme un export du lundi.",
        ],
      },
    ],
    faqs: [
      { q: "Faut-il remplacer la comptabilité ?", a: "En général, non. Le logiciel de gestion prépare les faits (commande, réception, livraison). L'outil comptable les enregistre." },
      { q: "Combien de services faut-il impliquer ?", a: "Ceux qui touchent le flux choisi. Un projet « entreprise » écrit seulement avec la direction décrit un organigramme, pas le travail." },
    ],
    proof: [],
    links: [
      { href: "/developpement-logiciel-sur-mesure-maroc/erp", label: "ERP sur mesure" },
      { href: "/solutions/logiciel-entreprise", label: "Pour une entreprise établie" },
      contact,
    ],
  },
  {
    path: "developpement-logiciel-sur-mesure-maroc/logiciel-metier",
    group: "Logiciel",
    crumb: "Logiciel métier",
    keyword: "logiciel métier sur mesure",
    title: "Logiciel métier sur mesure",
    description:
      "Le logiciel métier parle le vocabulaire d'un seul métier : dossiers, étapes, pièces. Byte Force l'écrit quand le catalogue force à tricher.",
    h1: "Logiciel métier sur mesure",
    cta: "Décrire le métier",
    schema: "service",
    lede: "Un logiciel métier est un outil écrit dans le vocabulaire d'une activité : dossier, tournée, lot, chantier, séjour. Il ne cherche pas à gérer toute l'entreprise. Il rend un métier exécutable par plusieurs personnes sans mode d'emploi oral.",
    blocks: [
      {
        h: "Pourquoi le catalogue coince",
        p: [
          "Les logiciels verticaux existent, et il faut les regarder d'abord. Ils coincent quand le métier a une règle que l'éditeur traite comme une option impossible : un dossier qui change d'état selon une pièce manquante, un prix qui dépend d'une contrainte physique, une planification que le créneau standard ne sait pas dire.",
          "Byte Force part de cette règle. Le [[/developpement-logiciel-sur-mesure-maroc/logiciel-metier/gestion|suivi de gestion du métier]] et l'[[/developpement-logiciel-sur-mesure-maroc/logiciel-metier/outil-interne|outil interne]] ne sont pas le même projet : l'un tient les opérations, l'autre tient une tâche que seule l'équipe fait.",
        ],
      },
      {
        h: "Ce qu'il ne faut pas mettre dedans",
        p: [
          "La paie, le site vitrine et le CRM complet n'entrent pas dans la première version d'un logiciel métier. Chaque ajout dilue la règle qui justifiait le projet. On les relie plus tard, par export ou par [[/developpement-logiciel-sur-mesure-maroc/automatisation/integration-api|intégration]], s'ils existent déjà.",
        ],
      },
    ],
    faqs: [
      { q: "Avez-vous déjà livré un logiciel métier public ?", a: "Le catalogue montre des plateformes (Dealkhir, Proche de moi, Tourispeak), pas un logiciel vertical nommé pour un métier réglementé. On ne présente pas ces projets comme un ERP de clinique ou d'usine." },
      { q: "Faut-il un cahier des charges de cinquante pages ?", a: "Non. Il faut les étapes réelles d'un dossier, dites par ceux qui le traitent, et les cas qui partent en exception. Le reste se découvre en montrant l'écran." },
    ],
    proof: [
      { href: "/realisations/tourispeak", title: "Tourispeak", note: "Un réseau avec son propre parcours, pas un modèle d'agence. En ligne depuis Montréal, 2024." },
    ],
    links: [
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
      { href: "/application-web-sur-mesure-maroc/application-metier", label: "Application métier, côté web" },
      contact,
    ],
  },
  {
    path: "developpement-logiciel-sur-mesure-maroc/logiciel-metier/gestion",
    group: "Logiciel",
    crumb: "Gestion sur mesure",
    keyword: "logiciel de gestion sur mesure",
    title: "Logiciel de gestion sur mesure",
    description:
      "Suivi des dossiers, des pièces et des états d'un métier, sans devenir un ERP. Pour une équipe qui pilote encore à la feuille.",
    h1: "Logiciel de gestion sur mesure",
    cta: "Décrire un dossier type",
    schema: "service",
    lede: "Le logiciel de gestion sur mesure suit les dossiers d'un métier : ce qui est ouvert, ce qui manque, ce qui est livré, qui doit agir. Il reste à l'échelle de cette activité. Il ne prétend pas remplacer les achats, la paie et la comptabilité.",
    blocks: [
      {
        h: "Un dossier, pas un tableur",
        p: [
          "Dans la feuille, une ligne est un dossier et une colonne est un état. Ça tient jusqu'à ce qu'un dossier ait plusieurs pièces, plusieurs intervenants, ou un retour en arrière. Le logiciel donne au dossier une vie : créé, incomplet, en cours, bloqué, clos. Revenir en arrière est une action, pas une cellule effacée.",
          "C'est différent du [[/developpement-logiciel-sur-mesure-maroc/erp/logiciel-gestion-entreprise|logiciel de gestion d'entreprise]], qui croise plusieurs services. Ici, une équipe, un type de dossier.",
        ],
      },
      {
        h: "Droits et traces",
        p: [
          "La personne au contact du client ne doit pas réécrire un montant validé. L'historique sert le jour où l'on demande pourquoi un dossier est bloqué. Ces deux points sont la raison de quitter Excel, plus que le design de l'écran.",
        ],
      },
    ],
    faqs: [
      { q: "Quelle taille d'équipe justifie l'outil ?", a: "Dès que deux personnes doivent agir sur le même dossier sans se téléphoner pour savoir qui a la dernière version." },
      { q: "Peut-on exporter vers Excel ?", a: "Oui. L'export est une sortie, pas la base. La base reste le dossier." },
    ],
    proof: [],
    links: [
      { href: "/developpement-logiciel-sur-mesure-maroc/logiciel-metier", label: "Logiciel métier" },
      { href: "/solutions/remplacer-excel", label: "Sortir d'Excel" },
      contact,
    ],
  },
  {
    path: "developpement-logiciel-sur-mesure-maroc/logiciel-metier/outil-interne",
    group: "Logiciel",
    crumb: "Outil interne",
    keyword: "outil interne sur mesure",
    title: "Outil interne sur mesure",
    description:
      "Un outil interne fait une tâche que seul le personnel fait : planification, contrôle, préparation. Pas un portail client.",
    h1: "Outil interne sur mesure",
    cta: "Décrire la tâche répétée",
    schema: "service",
    lede: "Un outil interne sur mesure sert les gens de l'entreprise, pas leurs clients. Il remplace une suite de gestes : préparer une tournée, contrôler une pièce, assembler un dossier avant envoi. S'il faut un espace pour le client, c'est un [[/application-web-sur-mesure-maroc/portail-client|portail]], autre page, autre usage.",
    blocks: [
      {
        h: "Le bon candidat",
        p: [
          "Le bon candidat est une tâche faite souvent, par plusieurs personnes, avec un risque d'oubli. Une tâche rare ou un calcul de coin de table restent dans un fichier. L'outil interne se justifie quand l'oubli coûte une livraison, une relance ou une erreur que l'on découvre trop tard.",
          "On l'écrit petit. Un écran qui fait la tâche vaut mieux qu'une « plateforme interne » avec un menu de douze entrées vides.",
        ],
      },
      {
        h: "Accès",
        p: [
          "Pas de compte public. Connexion réservée, rôles courts, et souvent un usage au bureau ou sur le téléphone de l'équipe. Si le terrain n'a pas de réseau stable, on le dit au cadrage : un outil qui exige d'être en ligne au mauvais moment ne sera pas utilisé.",
        ],
      },
    ],
    faqs: [
      { q: "Est-ce une application mobile ?", a: "Seulement si la tâche se fait loin d'un bureau. Beaucoup d'outils internes restent une application web ouverte sur un téléphone. Le natif est un autre coût, décrit côté [[/developpement-application-mobile-maroc/application-metier|application métier mobile]]." },
      { q: "Qui forme l'équipe ?", a: "L'outil est assez proche du geste actuel pour qu'une séance suffise. S'il faut une formation d'une semaine, l'écran est mauvais." },
    ],
    proof: [],
    links: [
      { href: "/developpement-logiciel-sur-mesure-maroc/logiciel-metier", label: "Logiciel métier" },
      { href: "/application-web-sur-mesure-maroc/dashboard", label: "Tableau de bord" },
      contact,
    ],
  },
  {
    path: "developpement-logiciel-sur-mesure-maroc/automatisation",
    group: "Logiciel",
    crumb: "Automatisation",
    keyword: "automatisation des processus",
    title: "Automatisation des processus métier",
    description:
      "Enlever les ressaisies et les passages manuels, seulement là où la règle est stable. Byte Force écrit l'automatisation dans le logiciel.",
    h1: "Automatisation des processus",
    cta: "Montrer le passage manuel",
    schema: "service",
    lede: "Automatiser un processus, c'est faire exécuter par le logiciel une règle qui était une ressaisie, un copier-coller ou un oubli. Ce n'est pas « mettre de l'IA » sur un métier flou. La règle doit pouvoir s'écrire : si ceci, alors cela, et qui est prévenu si ça bloque.",
    blocks: [
      {
        h: "Ce qui s'automatise, et ce qui ne s'automatise pas",
        p: [
          "S'automatise : créer la fiche quand la commande est payée, envoyer la relance quand le devis a dix jours, recopier une référence d'un outil vers un autre. Ne s'automatise pas : un jugement qui change chaque semaine, une exception que seule une personne sait reconnaître et qu'elle ne peut pas décrire.",
          "Deux pages vont plus loin. [[/developpement-logiciel-sur-mesure-maroc/automatisation/entreprise|L'automatisation pour une entreprise]] parle du périmètre. [[/developpement-logiciel-sur-mesure-maroc/automatisation/integration-api|L'intégration API]] parle du branchement technique.",
        ],
      },
      {
        h: "Où vivent ces règles",
        p: [
          "Une règle importante vit dans le logiciel de l'entreprise, pas dans un scénario que personne ne sait relire. Les outils de scénarios suffisent pour une notification simple. Dès que la règle touche un stock, un montant ou un dossier client, elle doit être testable et dans le dépôt que le client possède.",
        ],
      },
    ],
    faqs: [
      { q: "Faut-il un logiciel entier pour automatiser ?", a: "Non. Parfois un branchement entre deux outils suffit. On le dit si c'est le cas. Le logiciel complet vient quand les outils n'ont pas la règle, ou quand les données n'ont pas d'endroit fiable." },
      { q: "Que se passe-t-il quand la règle se trompe ?", a: "L'action s'arrête, une personne voit pourquoi, et rien n'est écrasé en silence. Une automatisation sans file d'erreur est une automatisation dangereuse." },
    ],
    proof: [
      { href: "/realisations/snapchat-collect", title: "Snapchat Collect", note: "Collecte et redirection de campagnes, entre Marseille et Tanger, 2024. Un flux, pas un ERP." },
    ],
    links: [
      { href: "/solutions/automatisation-entreprise", label: "Le problème, côté entreprise" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
      contact,
    ],
  },
  {
    path: "developpement-logiciel-sur-mesure-maroc/automatisation/entreprise",
    group: "Logiciel",
    crumb: "Automatisation entreprise",
    keyword: "automatisation entreprise",
    title: "Automatisation pour une entreprise",
    description:
      "Choisir quels processus automatiser en premier, et lesquels laisser aux gens. Un périmètre, pas un slogan.",
    h1: "Automatisation pour une entreprise",
    cta: "Choisir le premier processus",
    schema: "service",
    lede: "Automatiser une entreprise ne veut rien dire tant qu'on n'a pas nommé un processus. Byte Force commence par un passage que l'équipe fait chaque jour et qu'elle peut décrire sans improviser. Le reste de l'entreprise n'est pas « transformé » par ce premier logiciel.",
    blocks: [
      {
        h: "Comment on choisit",
        items: [
          "Le geste est fréquent.",
          "La règle est stable depuis des mois, pas depuis lundi.",
          "L'erreur est chère ou invisible jusqu'au client.",
          "Les données de départ existent quelque part, même mal rangées.",
        ],
        p: [
          "Un processus qui change selon l'humeur du fondateur s'automatise mal. On le stabilise d'abord, parfois encore sur papier. La page [[/solutions/automatisation-entreprise|automatiser son entreprise]] part du symptôme ; celle-ci part du choix de construction.",
        ],
      },
      {
        h: "Ce que l'équipe garde",
        p: [
          "L'automatisation retire la copie. Elle ne retire pas la décision. Quelqu'un valide encore l'exception, le geste commercial, le cas client énervé. Un écran qui cache ces cas pousse l'équipe à travailler à côté du logiciel, et l'on a reconstruit Excel.",
        ],
      },
    ],
    faqs: [
      { q: "Par quel service commencer ?", a: "Par celui qui ressaisit, pas par celui qui crie le plus fort. La ressaisie montre que la donnée existe déjà deux fois." },
      { q: "Est-ce le même projet qu'un ERP ?", a: "Non. L'automatisation peut tenir en un flux. L'ERP relie plusieurs ressources. On ne vend pas le second quand le premier suffit." },
    ],
    proof: [],
    links: [
      { href: "/developpement-logiciel-sur-mesure-maroc/automatisation", label: "Automatisation des processus" },
      { href: "/solutions/automatisation-entreprise/workflow", label: "Un workflow précis" },
      contact,
    ],
  },
  {
    path: "developpement-logiciel-sur-mesure-maroc/automatisation/integration-api",
    group: "Logiciel",
    crumb: "Intégration API",
    keyword: "intégration API",
    title: "Intégration API entre vos outils",
    description:
      "Relier un logiciel à une API : contrat, erreurs, reprises. Byte Force écrit le branchement dans le système, pas dans un tableur.",
    h1: "Intégration API",
    cta: "Nommer les deux systèmes",
    schema: "service",
    lede: "Une intégration API fait passer une information d'un système à un autre sans qu'une personne la recopie : commande, paiement, fiche, statut. Byte Force l'écrit dans le logiciel concerné, avec un comportement clair quand l'autre système ne répond pas.",
    blocks: [
      {
        h: "Le branchement n'est pas le bouton",
        p: [
          "Le travail réel est le contrat : quels champs partent, lesquels sont obligatoires, que fait-on si l'identifiant existe déjà, comment on rejoue un appel raté. Un connecteur qui « marche en démo » et perd une commande le samedi n'est pas une intégration.",
          "L'offre [[/services/api-backend|API et backend]] décrit la construction d'une API. Cette page décrit le raccord à une API qui existe déjà, ou entre deux systèmes du client.",
        ],
      },
      {
        h: "Ce qu'il faut avoir sous la main",
        items: [
          "La documentation, ou un exemple réel d'appel qui réussit.",
          "Un compte de test. Pas la production comme bac à sable.",
          "La liste des cas limites : doublon, timeout, champ vide, montant à zéro.",
          "Qui est prévenu quand la file d'erreurs n'est plus vide.",
        ],
      },
    ],
    faqs: [
      { q: "Peut-on connecter un logiciel qui n'a pas d'API ?", a: "Parfois par fichier déposé à heure fixe, ou par une base que l'on lit. C'est plus fragile. On le dit, et on ne fait pas semblant que c'est une API." },
      { q: "Stripe, la compta, un reporting ?", a: "Si l'outil a une API et que le flux sert le processus, oui. On ne branche pas un service pour citer son nom." },
      { q: "Où vit le code ?", a: "Dans le dépôt remis au client, à côté du logiciel. Pas dans un compte personnel d'intégrateur." },
    ],
    proof: [
      { href: "/realisations/snapchat-collect", title: "Snapchat Collect", note: "Un flux de collecte et de redirection déjà en ligne, 2024." },
    ],
    links: [
      { href: "/services/api-backend", label: "API et backend" },
      { href: "/solutions/automatisation-entreprise/integration-outils", label: "Connecter les outils déjà payés" },
      { href: "/developpement-logiciel-sur-mesure-maroc/automatisation", label: "Automatisation" },
      contact,
    ],
  },
];
