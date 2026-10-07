import type { MoneyPage } from "./types";

const contact = { href: "/contact", label: "Décrire le produit" };

export const saasPages: MoneyPage[] = [
  {
    path: "developpement-saas-maroc",
    group: "SaaS",
    crumb: "Développement SaaS",
    keyword: "développement SaaS Maroc",
    title: "Développement SaaS au Maroc",
    description:
      "Byte Force construit le produit : comptes, abonnement, rôles, données isolées. Depuis Casablanca. Pas un site habillé en SaaS.",
    h1: "Développement SaaS au Maroc",
    cta: "Décrire le produit",
    schema: "service",
    lede: "Un SaaS est un logiciel utilisé par plusieurs clients via un abonnement, avec des comptes, des rôles et des données qui ne se mélangent pas. Le développer, c'est construire ce produit. Ce n'est pas mettre un prix sur une page vitrine. Byte Force le fait depuis Casablanca.",
    blocks: [
      {
        h: "Ce qui distingue un SaaS d'un logiciel interne",
        p: [
          "Un logiciel interne a un propriétaire. Un SaaS en a plusieurs, qui ne doivent jamais voir les dossiers des autres. L'isolation des données, l'invitation d'un utilisateur, la facturation et l'arrêt d'un compte font partie du produit. Les oublier et les ajouter « après le premier client » est la dette classique.",
          "La première version doit déjà séparer les clients. Les rôles d'une entreprise acheteuse, la facturation et l'isolation des données font partie de ce produit. Remplacer un abonnement qui dicte le métier est un autre sujet : [[/solutions/remplacer-saas|le SaaS que l'on subit]].",
        ],
      },
      {
        h: "Ce que Coco Inbox montre, et ne montre pas",
        p: [
          "Coco Inbox est un produit publié : email temporaire, fichiers chiffrés, notes, en ligne depuis Montréal en 2024. C'est la preuve qu'un produit peut sortir et tenir. Ce n'est pas la preuve d'un SaaS de facturation ou d'un outil RH. On ne lui prête pas ces fonctions.",
        ],
      },
    ],
    faqs: [
      { q: "Faut-il tout le multi-tenant au premier jour ?", a: "Il faut que les données d'un client ne fuient pas vers un autre. Le raffinement (facturation fine, domaines, rôles avancés) peut attendre le deuxième palier, pas la cloison." },
      { q: "Qui possède le code ?", a: "Le client qui commande le produit. Ses propres clients, eux, utilisent le service. Les deux propriétés ne se confondent pas." },
      { q: "Y a-t-il un prix de SaaS affiché ?", a: "Non. Le montant du développement suit les rôles, la facturation et les branchements. L'abonnement que vous vendrez à vos clients est votre décision commerciale." },
    ],
    proof: [
      { href: "/realisations/coco-inbox", title: "Coco Inbox", note: "Produit en ligne : email temporaire, fichiers chiffrés, notes. Montréal, 2024." },
    ],
    links: [
      { href: "/developpement-logiciel-france", label: "Pour une entreprise en France" },
      { href: "/solutions/remplacer-saas", label: "Subir trop de SaaS" },
      contact,
    ],
  },
  {
    path: "developpement-saas-maroc/mvp",
    group: "SaaS",
    crumb: "MVP",
    keyword: "MVP SaaS",
    title: "MVP SaaS : la première version qui s'utilise",
    description:
      "Un MVP SaaS est le plus petit produit qu'un client peut payer ou utiliser. Pas une maquette. Byte Force coupe le reste.",
    h1: "MVP d'un SaaS",
    cta: "Nommer le geste principal",
    schema: "service",
    lede: "Le MVP d'un SaaS est la plus petite version qu'un utilisateur réel peut employer pour le geste qui justifie le produit. Une maquette cliquable n'est pas un MVP. Un MVP a un compte, une donnée qui reste, et une action qui réussit.",
    blocks: [
      {
        h: "Ce qui entre, ce qui attend",
        p: [
          "Entre : le parcours principal, l'isolation minimale entre clients, et de quoi savoir si quelqu'un revient. Attend : les rôles rares, les intégrations de prestige, l'application mobile, le tableau de bord investisseur. Chaque écran sans utilisateur est une semaine de retard.",
          "L'ancienne page « MVP startup » menait ici. Le sujet n'est pas la startup comme étiquette. C'est la première version d'un produit vendu à plusieurs.",
        ],
      },
      {
        h: "Comment on sait que c'est fini",
        p: [
          "Une personne dehors, pas le fondateur, accomplit le geste sans qu'on lui tienne la souris. Si ce critère n'est pas atteint, on n'ajoute pas de fonctionnalité. On répare le geste.",
        ],
      },
    ],
    faqs: [
      { q: "Un MVP est-il jetable ?", a: "Non s'il est écrit proprement. Il est incomplet, pas bâclé. Le code reste la base de la suite, parce qu'il est au client." },
      { q: "Faut-il la facturation dans le MVP ?", a: "Si le test est « est-ce que quelqu'un paie », oui, même simple. Si le test est un usage interne chez trois pilotes, un contrat dehors suffit au début." },
    ],
    proof: [
      { href: "/realisations/coco-inbox", title: "Coco Inbox", note: "Un produit publié, avec un usage précis, pas une maquette." },
    ],
    links: [
      { href: "/developpement-saas-maroc", label: "Développement SaaS" },
      { href: "/developpement-saas-maroc/saas-b2b", label: "SaaS B2B" },
      contact,
    ],
  },
  {
    path: "developpement-saas-maroc/saas-b2b",
    group: "SaaS",
    crumb: "SaaS B2B",
    keyword: "SaaS B2B",
    title: "SaaS B2B : plusieurs utilisateurs, une entreprise",
    description:
      "Le SaaS B2B vend à une organisation : invitation, rôles, administrateur, données de l'équipe. Pas un compte grand public isolé.",
    h1: "SaaS B2B",
    cta: "Décrire l'acheteur et l'utilisateur",
    schema: "service",
    lede: "Un SaaS B2B est acheté par une organisation et utilisé par plusieurs personnes qui n'ont pas les mêmes droits. L'acheteur n'est souvent pas l'utilisateur quotidien. Le produit doit servir les deux, sinon le contrat se signe et l'outil reste vide.",
    blocks: [
      {
        h: "Le compte entreprise",
        p: [
          "Il y a une organisation, des invitations, un administrateur, et des rôles. Un commercial ne configure pas la facturation. Un admin ne devrait pas être le seul à pouvoir travailler. Cette structure se pose au début. L'ajouter quand dix clients sont en production, c'est une migration, pas un réglage.",
          "Le [[/developpement-saas-maroc/multi-tenant|multi-tenant]] est la façon technique de tenir ces organisations côte à côte. La page B2B parle de l'achat et de l'usage. L'autre parle de l'isolation.",
        ],
      },
      {
        h: "Onboarding",
        p: [
          "Le premier utilisateur B2B abandonne si la configuration demande un appel. Le parcours d'arrivée fait partie du produit : inviter un collègue, importer un fichier réel, voir un résultat. Pas une visite guidée de boutons vides.",
        ],
      },
    ],
    faqs: [
      { q: "B2B exclut-il une offre simple ?", a: "Non. Beaucoup de SaaS B2B commencent avec un seul rôle et une invitation. L'important est de ne pas modeler le produit comme une app grand public à compte unique." },
      { q: "Faut-il un commercial dans le logiciel ?", a: "Le logiciel peut préparer l'essai et le devis. Il ne remplace pas la vente si le cycle est long. On n'automatise pas un appel qui doit rester un appel." },
    ],
    proof: [],
    links: [
      { href: "/developpement-saas-maroc", label: "Développement SaaS" },
      { href: "/developpement-saas-maroc/multi-tenant", label: "Multi-tenant" },
      contact,
    ],
  },
  {
    path: "developpement-saas-maroc/multi-tenant",
    group: "SaaS",
    crumb: "Multi-tenant",
    keyword: "SaaS multi-tenant",
    title: "SaaS multi-tenant : isoler les clients",
    description:
      "Plusieurs entreprises dans un même produit, sans mélange de données. Ce qu'il faut décider avant le premier client payant.",
    h1: "SaaS multi-tenant",
    cta: "Décrire qui ne doit rien voir",
    schema: "service",
    lede: "Un SaaS multi-tenant fait tourner plusieurs entreprises dans le même produit, chacune avec ses utilisateurs et ses données. Le point dur n'est pas l'écran. C'est la certitude qu'une requête ne renvoie jamais la ligne d'un autre client.",
    blocks: [
      {
        h: "Ce qu'il faut trancher tôt",
        items: [
          "Où est la frontière : organisation, établissement, ou marque.",
          "Un utilisateur peut-il appartenir à deux clients.",
          "Les fichiers et les exports respectent la même frontière que les écrans.",
          "Une tâche de fond (email, calcul) charge le bon tenant, pas « le dernier ouvert ».",
        ],
        p: [
          "Une base par client est plus simple à isoler et plus lourde à opérer. Une base partagée est plus simple à opérer et plus dangereuse si un filtre est oublié. Le choix se fait selon le nombre de clients visé et la sensibilité des données, pas selon une mode.",
        ],
      },
      {
        h: "Ce n'est pas un réglage graphique",
        p: [
          "Le logo par client est facile. L'oubli d'un filtre sur une recherche est le bug qui fait perdre un contrat. Les tests du multi-tenant sont des tests : deux organisations, une action, zéro fuite. Ils font partie du périmètre, pas de la démo.",
        ],
      },
    ],
    faqs: [
      { q: "Un seul client au début dispense-t-il du sujet ?", a: "Non. Le deuxième client arrive plus vite que la réécriture. La cloison minimale se pose tout de suite. Les options avancées peuvent attendre." },
      { q: "Peut-on extraire les données d'un client qui part ?", a: "Oui, ça se prévoit : un export de ses dossiers, puis la suppression. Un SaaS qui ne sait pas rendre les données n'est pas fini." },
    ],
    proof: [],
    links: [
      { href: "/developpement-saas-maroc/saas-b2b", label: "SaaS B2B" },
      { href: "/developpement-saas-maroc", label: "Développement SaaS" },
      contact,
    ],
  },
  {
    path: "developpement-saas-maroc/remplacer-saas",
    group: "SaaS",
    crumb: "Remplacer un SaaS",
    keyword: "remplacer un SaaS par un logiciel",
    title: "Remplacer un SaaS par votre logiciel",
    description:
      "Quand l'abonnement force le métier. Ce qu'on reprend, ce qu'on laisse à l'éditeur, et comment on migre sans deux bases.",
    h1: "Remplacer un SaaS par votre logiciel",
    cta: "Nommer l'outil qui coince",
    schema: "service",
    lede: "Remplacer un SaaS, c'est reprendre dans un logiciel à vous la partie du métier que l'abonnement ne sait plus suivre. On ne remplace pas tout l'abonnement par principe. La messagerie et la comptabilité standard restent souvent où elles sont.",
    blocks: [
      {
        h: "Le critère",
        p: [
          "On remplace quand les contournements sont devenus le travail : exports quotidiens, champs détournés, double saisie vers un fichier, utilisateurs fantômes que l'on paie. On ne remplace pas parce qu'un écran déplaît. La page [[/solutions/remplacer-saas|côté problème]] décrit les symptômes. Ici, on parle du produit de remplacement, construit comme un [[/developpement-saas-maroc|SaaS]] seulement si plusieurs de vos clients doivent s'en servir. Si une seule entreprise s'en sert, c'est un logiciel, pas un SaaS.",
        ],
      },
      {
        h: "Migration",
        p: [
          "On sort les dossiers ouverts, les utilisateurs encore actifs, les pièces encore demandées. On ne clone pas dix ans d'historique inutilisé. Pendant un temps court, l'ancien outil est en lecture seule. Deux endroits modifiables, c'est la panne assurée.",
        ],
      },
    ],
    faqs: [
      { q: "Est-ce toujours moins cher ?", a: "Pas à l'écriture. Le développement se paie d'un coup, l'abonnement se paie tous les mois. Le calcul dépend du nombre d'utilisateurs, des modules et des contournements. On ne promet pas une économie chiffrée." },
      { q: "Peut-on garder une partie du SaaS ?", a: "Oui. Remplacer le suivi métier et garder la facturation de l'éditeur est souvent le bon découpage. L'intégration relie les deux." },
    ],
    proof: [],
    links: [
      { href: "/solutions/remplacer-saas", label: "Le problème des SaaS empilés" },
      { href: "/solutions/remplacer-saas/reduire-couts", label: "Réduire le coût sans tout réécrire" },
      { href: "/developpement-saas-maroc", label: "Développement SaaS" },
      contact,
    ],
  },
];
