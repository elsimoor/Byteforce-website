import type { MoneyPage } from "./types";

const contact = { href: "/contact", label: "Écrire depuis ici" };

export const placePages: MoneyPage[] = [
  {
    path: "developpement-logiciel-casablanca",
    group: "Lieu",
    crumb: "Casablanca",
    keyword: "développement logiciel Casablanca",
    title: "Développement logiciel à Casablanca",
    description:
      "Byte Force est au Technopark, Aïn Chock. On peut se voir. Le logiciel se cadre avec l'équipe, pas seulement en visio.",
    h1: "Développement logiciel à Casablanca",
    cta: "Prendre un créneau au Technopark",
    schema: "service",
    lede: "Byte Force est à Casablanca : Technopark, boulevard Dammam, Aïn Chock, 20001. L'équipe se voit en semaine, de 9 h à 19 h. Pour une entreprise de la ville, ça change une chose concrète : le cadrage peut se faire autour de la table, avec le fichier ou le dossier sous les yeux, pas seulement en partage d'écran.",
    blocks: [
      {
        h: "Pourquoi la proximité compte ici",
        p: [
          "Beaucoup d'entreprises casablancaises font encore tenir l'opération par une personne et un fichier. Le montrer en vrai, au dépôt ou au bureau, évite un cahier des charges qui décrit un autre métier. On se déplace dans la ville quand le geste ne se comprend pas autrement. On ne prétend pas avoir un bureau dans chaque quartier.",
          "Le décalage avec l'Europe est d'une heure une partie de l'année, nul le reste. Pour un client à Casablanca, il n'y en a pas. Les points se calent sur les heures du bureau.",
        ],
      },
      {
        h: "Deux demandes fréquentes sur place",
        p: [
          "Le [[/developpement-logiciel-sur-mesure-maroc/crm|CRM]], quand l'équipe commerciale est dans la ville et que le suivi quitte le téléphone du directeur. L'[[/application-web-sur-mesure-maroc|application web]], quand clients et employés doivent ouvrir le même état. Le cadre national est le [[/developpement-logiciel-sur-mesure-maroc|logiciel sur mesure au Maroc]].",
          "Dealkhir est en ligne à Casablanca depuis 2024 : une plateforme pour des organisations, pas une preuve que tous les métiers de la ville sont déjà livrés.",
        ],
      },
      {
        h: "Comment on travaille",
        p: [
          "Un premier échange de trente minutes, au bureau ou en visio. Ensuite un périmètre écrit. Le code, le dépôt et l'hébergement livré sont à l'entreprise. Le téléphone est le +212 666 650 696. On ne publie pas de prix : il suit le périmètre.",
        ],
      },
    ],
    faqs: [
      { q: "Peut-on venir au Technopark ?", a: "Oui, sur rendez-vous, en semaine. L'adresse est boulevard Dammam, Aïn Chock." },
      { q: "Travaillez-vous seulement à Casablanca ?", a: "Le bureau est ici. Des projets du catalogue sont aussi en France et au Canada. Le déplacement se décide selon le besoin de voir le métier." },
      { q: "Quelle langue ?", a: "Le français pour le cadrage et les écrans, sauf demande contraire." },
    ],
    proof: [
      { href: "/realisations/dealkhir", title: "Dealkhir", note: "En ligne à Casablanca depuis 2024." },
    ],
    links: [
      { href: "/studio", label: "Le bureau" },
      { href: "/villes/casablanca", label: "Byte Force à Casablanca" },
      { href: "/services/creation-site-web", label: "Création de site" },
      { href: "/realisations/dealkhir", label: "Dealkhir" },
      { href: "/developpement-logiciel-maroc", label: "Maroc" },
      { href: "/contact", label: "Contact" },
      { href: "/solutions/logiciel-pme", label: "Pour une PME" },
    ],
  },
  {
    path: "developpement-logiciel-casablanca/crm",
    group: "Lieu",
    crumb: "CRM",
    keyword: "CRM sur mesure Casablanca",
    title: "CRM sur mesure à Casablanca",
    description:
      "Un CRM cadré en ville, avec l'équipe commerciale autour de la table. Même offre que le CRM sur mesure, avec la proximité du Technopark.",
    h1: "CRM sur mesure à Casablanca",
    cta: "Apporter le fichier commercial",
    schema: "service",
    lede: "À Casablanca, le CRM sur mesure se cadre souvent avec le fichier ouvert sur la table : les colonnes réelles, pas celles du modèle. Byte Force est au Technopark. Le contenu du logiciel est celui du [[/developpement-logiciel-sur-mesure-maroc/crm|CRM sur mesure]] : étapes, devis, relances, droits. Cette page existe parce que la rencontre change le cadrage, pas parce que le CRM serait différent à Anfa ou à Aïn Chock.",
    blocks: [
      {
        h: "Ce que la rencontre change",
        p: [
          "On voit qui tient vraiment le fichier, et qui croit le tenir. Dans une équipe commerciale locale, ce n'est pas toujours la même personne. Une visio rate ce détail une fois sur deux. Le produit, lui, ne gagne pas une fonction « Casablanca ». Il gagne un processus juste.",
        ],
      },
      {
        h: "Limite",
        p: [
          "Il n'y a pas de CRM client casablancais dans le catalogue public. Dealkhir n'est pas un pipeline de vente. On ne l'utilise pas comme preuve locale de CRM.",
        ],
      },
    ],
    faqs: [
      { q: "Faut-il venir avec toute l'équipe ?", a: "Non. La personne qui vend et celle qui relance suffisent au premier passage. La direction vient si elle impose des étapes que l'équipe ne pratique pas." },
      { q: "Le prix change-t-il parce que c'est Casablanca ?", a: "Non. Il suit le périmètre. La proximité évite des allers-retours, elle n'ajoute pas une taxe." },
    ],
    proof: [],
    links: [
      { href: "/developpement-logiciel-casablanca", label: "Développement à Casablanca" },
      { href: "/developpement-logiciel-sur-mesure-maroc/crm", label: "CRM sur mesure" },
      contact,
    ],
  },
  {
    path: "developpement-logiciel-casablanca/application-web",
    group: "Lieu",
    crumb: "Application web",
    keyword: "application web Casablanca",
    title: "Application web à Casablanca",
    description:
      "Une application web cadrée avec les utilisateurs sur place. Byte Force au Technopark. Distinct d'un site vitrine.",
    h1: "Application web à Casablanca",
    cta: "Montrer l'outil actuel",
    schema: "service",
    lede: "Une application web à Casablanca se juge avec les gens qui cliqueront demain, pas avec une maquette envoyée. Le bureau de Byte Force est au Technopark. On peut faire essayer un parcours à l'équipe avant qu'il soit trop tard pour changer l'ordre des écrans. Le fond du sujet est l'[[/application-web-sur-mesure-maroc|application web sur mesure]].",
    blocks: [
      {
        h: "Site ou application",
        p: [
          "Beaucoup de demandes locales commencent par « un site ». Si le client doit suivre une demande, ou l'équipe un dossier, c'est une application. Le site vitrine est une autre offre, [[/services/creation-site-web|déjà sur le site]]. Les mélanger produit une plaquette avec un login dont personne ne veut.",
          "Dealkhir, en ligne à Casablanca, est une plateforme, pas une vitrine. C'est l'ordre de grandeur : des comptes, des parcours, une mise en ligne.",
        ],
      },
    ],
    faqs: [
      { q: "Peut-on tester au bureau ?", a: "Oui, sur rendez-vous. Un parcours se juge mieux avec la personne qui fera la tâche qu'avec un compte rendu." },
      { q: "L'hébergement est-il à Casablanca ?", a: "L'hébergement livré est au nom du client, chez le fournisseur choisi avec lui. Le bureau Byte Force n'est pas une salle serveur." },
    ],
    proof: [
      { href: "/realisations/dealkhir", title: "Dealkhir", note: "Plateforme en ligne à Casablanca depuis 2024." },
    ],
    links: [
      { href: "/developpement-logiciel-casablanca", label: "Casablanca" },
      { href: "/application-web-sur-mesure-maroc", label: "Application web sur mesure" },
      contact,
    ],
  },
  {
    path: "developpement-logiciel-france",
    group: "Lieu",
    crumb: "France",
    keyword: "développement logiciel France",
    title: "Développement logiciel pour entreprises en France · Byte Force",
    description:
      "Studio logiciel à Casablanca pour entreprises françaises. Même fuseau horaire, livrables en français. Lille, Nord, Roubaix.",
    h1: "Développement logiciel pour une entreprise en France",
    cta: "Décrire le projet, à distance",
    schema: "service",
    lede: "Byte Force travaille avec des entreprises françaises depuis Casablanca. Il n'y a pas de bureau en France, ni de société française. Le fuseau est le même une partie de l'année, et à une heure le reste. La langue du cadrage et des écrans est le français. [[/contact|Écrire pour décrire le projet]].",
    blocks: [
      {
        h: "Le même jour, pas la même adresse",
        p: [
          "Un projet pour la France se cadre en visio, sur les heures du Technopark, qui couvrent la journée française. Le contrat et la facture sont ceux de l'entreprise à Casablanca. On ne laisse pas croire à une filiale lilloise ou parisienne.",
          "Le code, le dépôt et les comptes d'hébergement livrés reviennent au client. L'hébergement est chez le fournisseur ouvert à son nom. Il n'est pas « au Maroc » par principe.",
        ],
      },
      {
        h: "Pourquoi ce nearshore",
        p: [
          "Le fuseau horaire se recouvre. Une question posée le matin en France a une réponse dans la journée, du lundi au vendredi. Le français est la langue de travail du studio, pas une langue ajoutée pour le marché.",
          "Le coût se discute sur un périmètre écrit, pas sur une grille « moins cher de tant ». Byte Force ne publie pas de pourcentage. Deux projets français n'ont pas le même nombre de rôles. Le premier échange dure trente minutes et sert aussi à dire si un outil du marché suffit.",
          "Un déplacement en France est possible quand le métier ne se comprend pas en vidéo. Il se compte en quelques heures de vol. Il n'est pas le mode de travail. Le mode courant est la visio, avec un partage d'écran de la personne qui fait le geste.",
        ],
      },
      {
        h: "Lille",
        p: [
          "Lille est la ville française la plus présente dans le catalogue. Nu Lille, Escapade Florale, Proche de moi et le tableau de réservation Proche de moi sont en ligne. [[/villes/lille|Développement logiciel à Lille]].",
        ],
      },
      {
        h: "Roubaix",
        p: [
          "Roubaix a le site d'Ambulances Valcq, en ligne depuis 2022. C'est une vitrine de transport sanitaire, pas un logiciel de régulation. [[/villes/roubaix|Développement logiciel à Roubaix]].",
        ],
      },
      {
        h: "Le Nord",
        p: [
          "Le Nord relie ces villes. Les Hauts Paysages est un site d'aménagements dont la zone est le Nord. La page régionale ne remplace pas les villes. [[/villes/nord|Développement logiciel dans le Nord]].",
        ],
      },
      {
        h: "Marcq-en-Barœul",
        p: [
          "Meubles de Septentrion est une boutique de mobilier publiée en 2023 à Marcq-en-Barœul. [[/villes/marcq-en-baroeul|La page de la commune]].",
        ],
      },
      {
        h: "Montréal",
        p: [
          "Montréal n'est pas en France. C'est le marché francophone du catalogue en dehors du Maroc et de la France : Coco Inbox, le CRM Cocoinbox, Tourispeak. Le décalage est d'environ cinq heures. La page est [[/villes/montreal|le développement pour Montréal]]. Elle remonte ici faute d'un second pilier.",
        ],
      },
      {
        h: "Réalisations",
        p: [
          "[[/realisations/ambulances-valcq|Ambulances Valcq]] à Roubaix. [[/realisations/nu-lille|Nu Lille]] et [[/realisations/escapade-florale|Escapade Florale]] à Lille. [[/realisations/les-hauts-paysages|Les Hauts Paysages]] dans le Nord. [[/realisations/meubles-de-septentrion|Meubles de Septentrion]] à Marcq-en-Barœul. Chacune a son adresse publique. Aucune n'est un témoignage chiffré.",
        ],
      },
      {
        h: "Comment ça se passe",
        p: [
          "On nomme le geste. On regarde l'outil déjà en place. On écrit le périmètre. On construit la première version de ce geste. Les points sont en français. Après la remise, les défauts du périmètre sont corrigés avec la livraison. La suite est un correctif ou un suivi, décrit sur la [[/services/maintenance|maintenance]].",
          "Deux sujets reviennent souvent : un [[/developpement-saas-maroc|SaaS]] dont les clients sont en France, et un [[/developpement-logiciel-sur-mesure-maroc|logiciel interne]] pour une équipe française. Le fond technique est le même qu'au Maroc. Pour le Maroc, la page est [[/developpement-logiciel-maroc|le développement logiciel au Maroc]].",
        ],
      },
    ],
    faqs: [
      { q: "Vous déplacez-vous en France ?", a: "Pas comme une agence locale. Un déplacement se discute s'il est nécessaire pour voir un métier. Le travail courant est à distance." },
      { q: "Les factures et le contrat ?", a: "Ils suivent l'entreprise marocaine Byte Force. On ne laisse pas croire à une société française." },
      { q: "La maintenance après livraison ?", a: "Oui, à distance : correctifs du périmètre convenu, puis suivi ou devis. Le fuseau permet un échange dans la journée." },
    ],
    proof: [
      { href: "/realisations/ambulances-valcq", title: "Ambulances Valcq", note: "Site de transport sanitaire, Roubaix, 2022." },
      { href: "/realisations/nu-lille", title: "Nu Lille", note: "Site gastronomique, Lille, 2023." },
      { href: "/realisations/escapade-florale", title: "Escapade Florale", note: "Boutique florale, Lille, 2024." },
      { href: "/realisations/les-hauts-paysages", title: "Les Hauts Paysages", note: "Site paysager, Nord, 2023." },
      { href: "/realisations/meubles-de-septentrion", title: "Meubles de Septentrion", note: "Boutique de mobilier, Marcq-en-Barœul, 2023." },
    ],
    links: [
      { href: "/villes/lille", label: "Lille" },
      { href: "/villes/roubaix", label: "Roubaix" },
      { href: "/villes/nord", label: "Nord" },
      { href: "/villes/marcq-en-baroeul", label: "Marcq-en-Barœul" },
      { href: "/villes/montreal", label: "Montréal" },
      { href: "/services/maintenance", label: "Maintenance" },
      { href: "/developpement-logiciel-maroc", label: "Le pilier Maroc" },
      { href: "/developpement-logiciel-casablanca", label: "Le bureau est à Casablanca" },
      contact,
    ],
  },
  {
    path: "developpement-logiciel-france/saas",
    group: "Lieu",
    crumb: "SaaS",
    keyword: "SaaS pour entreprises françaises",
    title: "SaaS pour des entreprises en France",
    description:
      "Construire à distance un SaaS dont les clients sont en France. Comptes, isolation, français. Pas de société française inventée.",
    h1: "SaaS pour des entreprises françaises",
    cta: "Décrire vos clients",
    schema: "service",
    lede: "Construire un SaaS dont les clients sont en France ne demande pas un bureau à Paris. Cela demande un produit en français, un support qui répond dans la journée française, et des données cloisonnées. Byte Force le développe depuis Casablanca. La forme du produit est celle du [[/developpement-saas-maroc|développement SaaS]].",
    blocks: [
      {
        h: "Ce que la distance change",
        p: [
          "Les essais utilisateurs se font en visio, avec un vrai compte, pas avec une visite sur place. Il faut donc un parcours que l'on peut juger sans être dans la pièce. C'est une contrainte saine. Coco Inbox, publié depuis Montréal, montre qu'un produit peut vivre loin de Casablanca. Il ne montre pas un SaaS B2B français.",
          "La facturation de vos clients, la TVA, les mentions : ce sont vos décisions d'éditeur. Byte Force écrit le mécanisme que vous avez choisi. On ne joue pas le conseil juridique.",
        ],
      },
    ],
    faqs: [
      { q: "Le produit peut-il être hébergé en Europe ?", a: "Oui, chez le fournisseur que vous ouvrez à votre nom. Le lieu du bureau de Byte Force n'impose pas le lieu des données." },
      { q: "Qui parle aux premiers clients ?", a: "Vous. On peut être sur l'appel technique. Le produit n'a pas de service commercial déguisé en studio." },
    ],
    proof: [
      { href: "/realisations/coco-inbox", title: "Coco Inbox", note: "Un produit publié, opéré à distance. Montréal, 2024." },
    ],
    links: [
      { href: "/developpement-logiciel-france", label: "Travailler avec la France" },
      { href: "/developpement-saas-maroc", label: "SaaS B2B" },
      contact,
    ],
  },
  {
    path: "developpement-logiciel-france/logiciel-sur-mesure",
    group: "Lieu",
    crumb: "Logiciel sur mesure",
    keyword: "logiciel sur mesure entreprise française",
    title: "Logiciel sur mesure pour une entreprise française",
    description:
      "Un logiciel interne, cadré en visio depuis Casablanca, pour une équipe en France. Code remis. Pas d'agence parisienne fictive.",
    h1: "Logiciel sur mesure pour une entreprise française",
    cta: "Décrire l'équipe et l'outil actuel",
    schema: "service",
    lede: "Une entreprise en France peut faire écrire son logiciel interne à Casablanca sans prétendre que le studio est français. Le cadrage est en visio, en français, sur des heures qui se recouvrent. Le résultat est le même qu'un [[/developpement-logiciel-sur-mesure-maroc|logiciel sur mesure]] : processus, rôles, code remis.",
    blocks: [
      {
        h: "Ce qu'il faut montrer à distance",
        p: [
          "Un enregistrement du geste, ou un partage d'écran avec la personne qui le fait, vaut mieux qu'un document de vingt pages écrit par quelqu'un qui ne le fait pas. On insiste là-dessus parce qu'on ne passe pas dans le bureau. Si le métier est physique et incompréhensible en vidéo, on le dit avant de chiffrer.",
          "Proche de moi, à Lille, prouve une livraison distante déjà en production. Ce n'est pas le logiciel interne d'une usine. On ne le survend pas.",
        ],
      },
    ],
    faqs: [
      { q: "Le décalage horaire gêne-t-il ?", a: "Peu. Casablanca est à l'heure de Paris une partie de l'année, et à une heure sinon. Les points tiennent dans la journée des deux côtés." },
      { q: "Et la maintenance ?", a: "À distance, comme la construction. Une urgence se traite dans les heures du bureau, du lundi au vendredi, 9 h–19 h heure du Maroc." },
    ],
    proof: [
      { href: "/realisations/re-proche-de-moi", title: "Proche de moi", note: "Livré et en ligne à Lille, 2024." },
    ],
    links: [
      { href: "/developpement-logiciel-france", label: "France" },
      { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" },
      contact,
    ],
  },
];
