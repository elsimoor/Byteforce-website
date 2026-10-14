export type StudioBlock = { h: string; p: string[] };
export type StudioFaq = { q: string; a: string };
export type StudioLink = { href: string; label: string };

export type StudioSection = {
  slug: string;
  title: string;
  card: string;
  heroImage?: string;
  h1: string;
  titleTag: string;
  description: string;
  lede: string;
  blocks: StudioBlock[];
  faqs: StudioFaq[];
  links: StudioLink[];
};

export const studioSections: StudioSection[] = [
  {
    slug: "ou-lon-travaille",
    title: "Où l'on travaille",
    card: "Technopark, Bd Dammam, Aïn Chock, 20001 Casablanca. Lundi au vendredi, 9h à 19h. Réponse sous un jour ouvré. Le premier échange dure trente minutes, et il est gratuit.",
    heroImage: "/studio/technopark.png",
    h1: "Le bureau est au Technopark, à Casablanca.",
    titleTag: "Bureau Byte Force au Technopark · Casablanca",
    description:
      "Byte Force travaille au Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca. Du lundi au vendredi, de 9h à 19h. Réponse sous un jour ouvré.",
    lede: "Byte Force est un studio logiciel à Casablanca. Le bureau est au Technopark, boulevard Dammam, Aïn Chock, 20001. On y répond du lundi au vendredi, de 9h à 19h. Le premier échange dure trente minutes, et il est gratuit.",
    blocks: [
      {
        h: "Une seule adresse",
        p: [
          "L'adresse publique est le Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca, au Maroc. C'est le bureau où le studio lit un projet, écrit une note, et répond au téléphone. Il n'y a pas de deuxième adresse sur ce site.",
          "Il n'y a pas de bureau en France ni au Canada. Un projet lillois, roubaisien ou montréalais du catalogue a été fait depuis Casablanca. La ville écrite sur une fiche est celle du travail publié, pas un local ouvert dans cette ville.",
          "Avant de passer, écrivez. Le premier message dit le jour qui vous arrange, entre 9h et 19h. Quelqu'un est alors là pour le créneau. Une visite sans message peut tomber sur une heure déjà prise.",
        ],
      },
      {
        h: "Les heures et le premier échange",
        p: [
          "Les heures sont fixes : lundi, mardi, mercredi, jeudi et vendredi, de 9h à 19h, heure de Casablanca. Le samedi et le dimanche ne sont pas des jours de bureau. On ne promet pas une astreinte de nuit.",
          "Le premier échange dure trente minutes. Il est gratuit. Il sert à entendre le geste qui bloque : un écran déjà là, un formulaire qui n'envoie rien, ou un outil à écrire. Il ne produit pas un prix publié. Aucun montant n'est affiché sur le site.",
          "La réponse au premier message part sous un jour ouvré. Le jour ouvré est un jour de ces heures-là. Un message envoyé le vendredi soir peut attendre le lundi.",
        ],
      },
      {
        h: "Comment joindre le bureau",
        p: [
          "Trois chemins arrivent au même bureau. Le formulaire est sur la page contact. L'email du site est lu aux mêmes heures. Le téléphone est le +212 666 650 696, et WhatsApp utilise ce numéro.",
          "Le message utile tient en peu de choses : votre nom, un moyen de répondre, et la tâche. Un lien vers l'écran, un fichier, ou une photo suffisent. Un cahier des charges complet n'est pas demandé pour ce premier pas.",
          "On parle français, anglais et arabe. Le site public est écrit en français. La fiche de Walid Moultamiss existe en français et en anglais, avec les deux CV.",
        ],
      },
      {
        h: "Le décalage avec l'Europe et l'est des États-Unis",
        p: [
          "Casablanca est à GMT+1. Avec l'Europe de l'Ouest, le décalage est d'environ une heure. Avec le Royaume-Uni, le fuseau se recouvre une grande partie de la journée. Avec la côte est des États-Unis, la plage commune est de quatre à cinq heures.",
          "Un point avec une équipe en France se cale dans les heures de Casablanca. On ne déplace pas le bureau dans le fuseau du client pour faire croire à une présence locale. Le chevauchement suffit pour un échange de trente minutes.",
          "Si le sujet est un logiciel déjà en ligne, le lien de la page suffit pour préparer l'échange. Si le sujet est un outil à écrire, décrivez qui s'en sert et le geste qui doit marcher le premier jour.",
        ],
      },
    ],
    faqs: [
      {
        q: "Où est le bureau de Byte Force ?",
        a: "Au Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca, au Maroc. C'est la seule adresse. Il n'y a pas de bureau en France ni au Canada.",
      },
      {
        q: "Quels sont les horaires ?",
        a: "Du lundi au vendredi, de 9h à 19h, heure de Casablanca. La réponse à un message part sous un jour ouvré, dans ces heures.",
      },
      {
        q: "Le premier rendez-vous est-il payant ?",
        a: "Non. Le premier échange dure trente minutes et il est gratuit. Il sert à comprendre la tâche. Le prix du travail, lui, n'est pas publié : il se fixe quand le périmètre est connu.",
      },
      {
        q: "Faut-il venir au Technopark ?",
        a: "Non. Un appel, un email ou WhatsApp suffit. Une visite se prend dans les heures du bureau, après un message, pour que quelqu'un soit là.",
      },
      {
        q: "Peut-on travailler avec une équipe en France depuis ce bureau ?",
        a: "Oui. Les projets du catalogue faits pour la France ou le Canada ont été menés depuis Casablanca. Le point se cale dans les heures de 9h à 19h.",
      },
    ],
    links: [
      { href: "/contact", label: "Écrire au bureau" },
      { href: "/studio", label: "Le studio" },
      { href: "/villes/casablanca", label: "Casablanca" },
      { href: "/studio/comment-commencer", label: "Comment commencer" },
    ],
  },
  {
    slug: "ce-que-vous-gardez",
    title: "Ce que vous gardez",
    card: "Le code, le dépôt et les comptes d'hébergement vous reviennent. Pas de prix sur ce site. La première note dit ce qui existe, et ce qui doit changer.",
    h1: "Le code, le dépôt et les comptes vous reviennent.",
    titleTag: "Le code vous revient · Byte Force",
    description:
      "À la remise, le code, le dépôt et les comptes d'hébergement livrés reviennent au client. Pas de prix public sur le site.",
    lede: "Byte Force rend le code, le dépôt et les comptes d'hébergement livrés. Le studio ne garde pas l'administration comme une condition pour rester. Aucun prix n'est publié. La première note dit ce qui existe, et ce qui doit changer.",
    blocks: [
      {
        h: "Ce qui est remis",
        p: [
          "À la fin d'un travail livré, trois choses reviennent à l'entreprise : le code, le dépôt où ce code est versionné, et les comptes d'hébergement qui ont été ouverts pour ce travail. Le nom de domaine, s'il a été acheté pour le projet, est au nom du client.",
          "Le studio ne conserve pas le compte développeur, l'accès d'administration, ni le mot de passe de l'hébergement comme un moyen de rester indispensable. Une autre équipe doit pouvoir reprendre le dépôt sans demander une permission au studio.",
          "Cette remise vaut pour un logiciel écrit ici, pour un site, et pour un correctif quand le correctif produit du code. Le détail de ce qui est remis est écrit dans la note, pas supposé.",
        ],
      },
      {
        h: "La première note",
        p: [
          "Avant le code, il y a une note. Elle dit ce qui existe déjà : l'écran, le formulaire, l'outil, le fichier. Elle dit ensuite ce qui doit changer, et ce qui attend. Elle ne promet pas un résultat chiffré qui n'est pas dans le dossier.",
          "S'il n'y a pas encore de produit, la note décrit le geste du premier jour : qui s'en sert, ce qu'il saisit, ce qui doit rester. Le reste du logiciel vient après, quand ce geste tient.",
          "S'il y a déjà un produit, la note commence par la lecture. On ne réécrit pas une base qu'on n'a pas lue. Si une reprise complète est le chemin honnête, la note le dit avant qu'on touche au site.",
        ],
      },
      {
        h: "Pas de prix sur le site",
        p: [
          "Aucun forfait, aucun tarif horaire, aucune grille n'est affiché sur byteforce.ma. Un montant publié sans avoir vu le processus décrirait un autre projet. Le prix se fixe quand la tâche est connue : les rôles, les outils déjà là, les langues de l'écran, la reprise des données.",
          "Le premier échange de trente minutes sert à savoir si un chiffrage a un sens. Il est gratuit. La réponse qui suit peut être une note, un refus, ou une question. Elle part sous un jour ouvré.",
          "La devise se discute avec la société qui commande. Elle ne dépend pas d'une ville écrite dans une page. Le bureau qui chiffre est à Casablanca.",
        ],
      },
      {
        h: "Continuer avec une autre équipe",
        p: [
          "Garder le dépôt veut dire pouvoir partir. Si l'entreprise veut confier la suite à quelqu'un d'autre, elle a le code et les comptes livrés. Le studio ne facture pas une libération de compte qui lui a déjà été remise.",
          "Ce que le studio ne remet pas, c'est un secret qui n'est pas à lui : le mot de passe d'un compte que le client n'a pas ouvert avec nous, ou l'accès d'un outil du marché souscrit à un autre nom. La note liste les accès qu'il faudra, sans les inventer.",
          "Les travaux déjà publiés restent la preuve. Chaque fiche du catalogue dit ce qui a été mis en ligne, avec sa ville et son année. Un chiffre qui n'est pas dans le dossier n'est pas ajouté pour décorer la remise.",
        ],
      },
    ],
    faqs: [
      {
        q: "Qui possède le code à la fin ?",
        a: "L'entreprise qui a commandé le travail. Le code, le dépôt et les comptes d'hébergement livrés lui reviennent. Le studio ne garde pas l'administration comme condition pour continuer.",
      },
      {
        q: "Pourquoi n'y a-t-il pas de prix sur le site ?",
        a: "Parce qu'un prix sans périmètre décrit un autre projet. Le montant suit les rôles, les outils déjà en place et la reprise des données. Le premier échange de trente minutes est gratuit.",
      },
      {
        q: "Qu'est-ce que la première note ?",
        a: "Un texte qui dit ce qui existe et ce qui doit changer, avant d'écrire le code. Si une reprise complète est plus honnête qu'un correctif, la note le dit avant qu'on touche au produit.",
      },
      {
        q: "Le nom de domaine reste-t-il au studio ?",
        a: "Non. Un nom acheté pour le projet est au nom du client. Les comptes d'hébergement livrés aussi. Le studio ne s'en sert pas comme d'un verrou.",
      },
      {
        q: "Une autre équipe peut-elle reprendre ensuite ?",
        a: "Oui, si le dépôt et les comptes ont été remis. C'est le sens de la remise. La fiche publique du travail reste sur ce site, avec ce qui a vraiment été publié.",
      },
    ],
    links: [
      { href: "/contact", label: "Demander la note" },
      { href: "/insights/qui-possede-le-code", label: "Qui possède le code" },
      { href: "/services/hebergement", label: "Hébergement" },
      { href: "/studio/deja-en-ligne", label: "Si c'est déjà en ligne" },
    ],
  },
  {
    slug: "deja-en-ligne",
    title: "Déjà en ligne",
    card: "Un formulaire qui n'envoie rien, une page périmée, ou un bug qui bloque une vente. Un correctif ponctuel n'a pas besoin d'un plan. Si une autre équipe a écrit le code, on le lit d'abord.",
    h1: "Un correctif pour ce qui est déjà en ligne.",
    titleTag: "Corriger un site déjà en ligne · Byte Force",
    description:
      "Formulaire muet, page périmée ou bug qui bloque une vente. Byte Force lit le code déjà en ligne avant de le corriger. Un lien suffit.",
    lede: "Un formulaire qui n'envoie rien, une page qui ne dit plus l'offre, ou un bug qui bloque une vente : Byte Force peut corriger ça sans repartir de zéro. Si une autre équipe a écrit le code, on le lit d'abord.",
    blocks: [
      {
        h: "Ce qui mérite un correctif",
        p: [
          "Le cas le plus clair est un parcours qui devait produire une demande et qui ne le fait plus. Le visiteur remplit le formulaire, rien ne part. La page d'offre parle d'un service que l'entreprise ne fait plus. Un bouton mène à une erreur. Une vente s'arrête sur un écran.",
          "Un correctif ponctuel n'a pas besoin d'un plan de refonte. Il a besoin de l'adresse, du geste qui échoue, et d'un moyen de le revoir. Une photo du formulaire, une capture de l'erreur, ou le lien de la page suffisent pour commencer.",
          "On ne promet pas qu'un symptôme visible est un petit correctif. Parfois le formulaire tait un problème plus loin : un compte, une règle, une donnée qui ne se range pas. La lecture le dit. Le correctif vient après.",
        ],
      },
      {
        h: "Lire avant de toucher",
        p: [
          "Si une autre équipe a écrit le code, Byte Force le lit avant de le modifier. Lire veut dire ouvrir le dépôt ou la page, suivre le geste qui casse, et nommer ce qui est repris. On ne remplace pas un site pour éviter de le comprendre.",
          "La lecture peut conclure qu'un correctif tient. Elle peut aussi conclure qu'une reprise complète est le chemin honnête. Cette phrase est dite avant de toucher au produit, pas après une semaine de patches. Le client décide avec cette phrase, pas avec une surprise.",
          "Le code lu n'est pas recopié dans une fiche publique. La fiche dit le problème et ce qui a été publié. Les accès reçus pour la lecture servent à cette lecture. Ils ne deviennent pas un compte que le studio garde.",
        ],
      },
      {
        h: "Ce que la lecture regarde",
        p: [
          "On regarde d'abord le chemin qui doit mener à une demande : la page qui explique l'offre, le formulaire, le message qui part, et la page qui confirme l'envoi. Si l'un de ces points est cassé, la correction vise ce point.",
          "On regarde aussi ce qu'une machine peut lire : le titre, la description, l'adresse canonique, et si la page dit qui fait le travail et où. Un site déjà en ligne qui ne dit pas cela reste difficile à trouver, même si le formulaire marche.",
          "L'audit gratuit du site lit une page d'accueil, puis quelques adresses. Il sépare la technique, la performance, le référencement, l'accessibilité, la lecture par une machine, et la conversion. Ce n'est pas le correctif. C'est une façon de voir la page avant d'écrire.",
        ],
      },
      {
        h: "Corriger n'est pas recommencer",
        p: [
          "Un écran qui tourne déjà est une moitié de travail. Le finir, c'est les comptes, les données qui restent, les cas qui cassent, la mise en ligne au nom du client, et le dépôt remis. On ne jette pas cette moitié pour en reconstruire une pareille.",
          "Une page périmée se met à jour avec ce qui est vrai aujourd'hui. On ne change pas l'offre à la place de l'entreprise. On aligne la page sur ce qu'elle fait, puis on vérifie que le message part encore.",
          "Le bureau qui lit est au Technopark, à Casablanca. La réponse au premier lien part sous un jour ouvré. Le prix du correctif se fixe quand la tâche est connue. Il n'est pas sur cette page.",
        ],
      },
    ],
    faqs: [
      {
        q: "Corrigez-vous un site écrit par une autre équipe ?",
        a: "Oui, après l'avoir lu. Si le code peut être repris, on le dit. Si une reprise complète est le chemin honnête, on le dit avant de modifier le site.",
      },
      {
        q: "Faut-il un cahier des charges pour un bug ?",
        a: "Non. Un lien, une capture, ou une photo du formulaire qui échoue suffisent. Un correctif ponctuel n'a pas besoin d'un plan de refonte.",
      },
      {
        q: "Que regardez-vous en premier ?",
        a: "Le parcours qui doit produire une demande : la page d'offre, le formulaire, l'envoi, et la confirmation. Ensuite le titre, la description, et ce que la page dit de l'entreprise.",
      },
      {
        q: "L'audit gratuit corrige-t-il le site ?",
        a: "Non. L'audit lit la page et sépare les sujets. Le correctif est un travail à part, chiffré quand on a vu ce qui casse.",
      },
      {
        q: "Allez-vous réécrire tout le site ?",
        a: "Seulement si la lecture montre qu'un correctif ne tient pas. Cette conclusion est dite avant de toucher au code. Sinon on corrige le point qui bloque.",
      },
    ],
    links: [
      { href: "/contact", label: "Envoyer le lien" },
      { href: "/services/audit-correction", label: "Audit et correction" },
      { href: "/audit", label: "Audit gratuit" },
      { href: "/studio/apres-la-mise-en-ligne", label: "Après la mise en ligne" },
    ],
  },
  {
    slug: "apres-la-mise-en-ligne",
    title: "Après la mise en ligne",
    card: "Le suivi surveille le site, garde une copie, et corrige ce qui casse. Le même bureau répond sous un jour ouvré. Le prix se fixe quand la tâche est connue.",
    h1: "Après la mise en ligne, le même bureau répond.",
    titleTag: "Après la mise en ligne · Suivi Byte Force",
    description:
      "Après la mise en ligne, Byte Force surveille, garde une copie et corrige ce qui casse. Le prix se fixe quand la tâche est connue.",
    lede: "La mise en ligne n'est pas la fin du travail. Byte Force surveille le site, garde une copie, et corrige ce qui casse. Le même bureau, au Technopark à Casablanca, répond sous un jour ouvré.",
    blocks: [
      {
        h: "Ce que le suivi fait",
        p: [
          "Le suivi regarde un site ou un outil déjà publié. Il vérifie que le parcours de demande tient encore : la page qui explique l'offre, le formulaire, le message qui part. Si une mise à jour casse ce parcours, la correction vise ce point.",
          "Une copie du travail est gardée pour pouvoir revenir en arrière quand une modification casse plus qu'elle ne répare. La copie n'est pas un deuxième produit. C'est de quoi restaurer ce qui marchait.",
          "Les mises à jour qui concernent la sécurité font partie de ce suivi, ainsi que les petites évolutions de page : un texte, un bloc, un lien qui ne dit plus ce que l'entreprise fait. On ne change pas l'offre à la place du client.",
        ],
      },
      {
        h: "Le prix, quand la tâche est connue",
        p: [
          "Aucun abonnement n'est affiché sur le site. Un correctif isolé peut être chiffré sans forfait. Le montant suit la tâche : ce qui casse, depuis quand, et si le code est repris ou non.",
          "On ne publie pas un prix de surveillance, ni une promesse de disponibilité en pourcentage. Ce genre de chiffre, sans mesure sur le site concerné, décrirait un autre contrat. La note dit ce qui est surveillé.",
          "Le premier message décrit le symptôme. Un lien vers la page, l'heure où ça a cassé, et ce que l'utilisateur faisait. Avec ça, le bureau peut dire si c'est un correctif court ou une lecture plus longue.",
        ],
      },
      {
        h: "Le même bureau",
        p: [
          "La personne qui répond après la mise en ligne est le studio qui a le dépôt, ou qui l'a lu. Il n'y a pas un autre service, dans une autre ville, pour les incidents. L'adresse reste le Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca.",
          "Les heures restent lundi au vendredi, de 9h à 19h. Une alerte qui arrive le samedi est lue au prochain jour ouvré, sauf si un créneau a été écrit autrement dans la note. On ne promet pas une équipe de nuit.",
          "Le téléphone est le +212 666 650 696. L'email du site et le formulaire aboutissent au même endroit. Pour un site couché, le lien et l'heure suffisent. Inutile d'envoyer un mot de passe dans le premier message.",
        ],
      },
      {
        h: "Ce qui reste au client",
        p: [
          "Le suivi ne reprend pas la propriété. Le code, le dépôt et les comptes d'hébergement livrés restent à l'entreprise. Surveiller n'est pas garder la clé. Si le suivi s'arrête, l'entreprise a toujours le dépôt.",
          "Un hébergement ouvert pour le projet est au nom du client. Les sauvegardes dont on parle ici sont celles convenues dans la note. On n'invente pas une rétention de plusieurs années si elle n'a pas été écrite.",
          "Quand le produit doit encore changer après la mise en ligne, le changement a le même ordre que le premier travail : le geste, puis le code, puis la remise. La page de maintenance décrit l'offre. Cette page décrit la suite, une fois que c'est en ligne.",
        ],
      },
    ],
    faqs: [
      {
        q: "Que se passe-t-il après la mise en ligne ?",
        a: "Le studio peut surveiller le parcours de demande, garder une copie, appliquer les mises à jour de sécurité convenues, et corriger ce qui casse. Le même bureau répond.",
      },
      {
        q: "Y a-t-il un prix de suivi sur le site ?",
        a: "Non. Un correctif isolé peut être chiffré sans forfait. Le montant se fixe quand on sait ce qui casse et si le code se reprend. Aucune grille n'est publiée.",
      },
      {
        q: "Qui répond si le site ne répond plus ?",
        a: "Byte Force, au Technopark à Casablanca, du lundi au vendredi, de 9h à 19h, sous un jour ouvré. Le lien de la page et l'heure du problème suffisent pour le premier message.",
      },
      {
        q: "Le suivi vous retire-t-il le code ?",
        a: "Non. Le dépôt et les comptes livrés restent à l'entreprise. Arrêter le suivi ne ferme pas l'accès au code déjà remis.",
      },
      {
        q: "Une petite modification de page est-elle du suivi ?",
        a: "Oui, quand c'est un texte, un bloc ou un lien à aligner sur ce que l'entreprise fait vraiment. On ne réécrit pas l'offre à sa place. On vérifie ensuite que le formulaire part encore.",
      },
    ],
    links: [
      { href: "/contact", label: "Parler du suivi" },
      { href: "/services/maintenance", label: "Maintenance" },
      { href: "/services/hebergement", label: "Hébergement" },
      { href: "/studio/deja-en-ligne", label: "Déjà en ligne" },
    ],
  },
  {
    slug: "comment-commencer",
    title: "Comment commencer",
    card: "Écrire depuis la page contact, par email, ou sur WhatsApp. Votre nom, un moyen de répondre, et la tâche. Un lien, un fichier, ou une photo du formulaire qui échoue suffit.",
    h1: "Écrire, avec le lien ou la tâche.",
    titleTag: "Comment commencer un projet · Byte Force",
    description:
      "Écrivez à Byte Force par le formulaire, l'email ou WhatsApp. Votre nom, un moyen de répondre et la tâche suffisent. Réponse sous un jour ouvré.",
    lede: "Pour commencer, écrivez depuis la page contact, par email, ou sur WhatsApp. Le message tient en trois choses : votre nom, un moyen de répondre, et la tâche. Un lien, un fichier, ou une photo du formulaire qui échoue suffit.",
    blocks: [
      {
        h: "Les trois chemins",
        p: [
          "Le formulaire de contact demande le nom, l'email et le projet. C'est le chemin le plus simple quand vous êtes sur le site. L'email du site aboutit au même bureau. WhatsApp utilise le +212 666 650 696.",
          "Les trois chemins sont lus du lundi au vendredi, de 9h à 19h, heure de Casablanca. La réponse part sous un jour ouvré. Il n'y a pas de portail à créer pour ce premier message.",
          "Choisissez le chemin que vous utiliserez pour la suite. Si vous vivez sur WhatsApp, écrivez là. Si vous voulez une trace dans une boîte mail, utilisez l'email ou le formulaire. Le bureau ne demande pas les trois à la fois.",
        ],
      },
      {
        h: "Ce que le message contient",
        p: [
          "Votre nom. Un moyen de répondre : email ou numéro. La tâche, en une ou deux phrases. Exemples qui suffisent : le formulaire de cette page n'envoie rien ; cet écran tourne chez moi et je veux le finir ; il nous faut un outil pour ce geste.",
          "Ajoutez un lien si la chose est en ligne. Ajoutez un fichier ou une photo si elle ne l'est pas. Une capture du message d'erreur vaut mieux qu'un long récit. N'envoyez pas un mot de passe dans ce premier message. Un lien public suffit pour regarder.",
          "Si le projet a été construit au feeling et qu'une moitié tourne déjà, dites-le. On ne recommence pas cette moitié. On regarde les comptes, les données, les cas qui cassent, la mise en ligne, et le dépôt.",
        ],
      },
      {
        h: "Ce qui se passe ensuite",
        p: [
          "Sous un jour ouvré, le bureau répond. La réponse peut proposer les trente minutes, poser une question, ou dire que le sujet n'est pas le sien. Le premier échange dure trente minutes et il est gratuit.",
          "Ces trente minutes servent à nommer le geste et à voir si une note a un sens. La note dit ce qui existe et ce qui doit changer. Le prix vient après la note, pas avant, et il n'est pas sur le site.",
          "Vous n'avez pas à préparer un cahier des charges, un schéma, ni un budget détaillé. Si vous les avez, ils aident. S'ils n'existent pas, le lien et la phrase sur la tâche suffisent pour le premier pas.",
        ],
      },
      {
        h: "Ce qu'on ne vous demande pas",
        p: [
          "Pas de création de compte sur ce site pour écrire. Pas de pièce d'identité dans le premier message. Pas une liste d'outils à la mode. Le studio travaille avec React, Next.js et Node.js quand le projet est un logiciel web, et il le dit. L'outil se choisit après le geste, pas l'inverse.",
          "Pas un engagement signé pour obtenir la réponse. La réponse au premier message fait partie du travail du bureau. Le travail payant commence quand le périmètre est écrit et accepté.",
          "Si vous ne savez pas si c'est un correctif, un suivi, ou un logiciel nouveau, envoyez quand même le lien. La lecture sert à classer. Vous n'avez pas à choisir la bonne offre dans le menu avant d'écrire.",
        ],
      },
    ],
    faqs: [
      {
        q: "Par où écrire ?",
        a: "Par la page contact, par l'email du site, ou par WhatsApp au +212 666 650 696. Les trois arrivent au bureau de Casablanca.",
      },
      {
        q: "Que faut-il mettre dans le message ?",
        a: "Votre nom, un moyen de répondre, et la tâche. Un lien, un fichier, ou une photo aident. Un mot de passe n'a pas sa place dans ce premier envoi.",
      },
      {
        q: "Sous quel délai répondez-vous ?",
        a: "Sous un jour ouvré, du lundi au vendredi, entre 9h et 19h, heure de Casablanca. Un message du vendredi soir peut attendre le lundi.",
      },
      {
        q: "Faut-il un cahier des charges ?",
        a: "Non. Les trente premières minutes sont là pour nommer le geste. Un document déjà écrit est utile s'il existe. Il n'est pas une condition pour écrire.",
      },
      {
        q: "Le premier échange est-il payant ?",
        a: "Non. Il dure trente minutes et il est gratuit. Le prix du travail se fixe ensuite, quand la note a décrit le périmètre. Ce prix n'est pas publié sur le site.",
      },
    ],
    links: [
      { href: "/contact", label: "Page contact" },
      { href: "/studio/ou-lon-travaille", label: "Où l'on travaille" },
      { href: "/studio/ce-que-vous-gardez", label: "Ce que vous gardez" },
      { href: "/audit", label: "Audit gratuit" },
    ],
  },
  {
    slug: "qui-le-dirige",
    title: "Qui le dirige",
    card: "Walid Moultamiss dirige le studio. Sa fiche est sur ce site, en français et en anglais, avec les deux CV. La preuve, ce sont les travaux en ligne.",
    h1: "Walid Moultamiss dirige le studio.",
    titleTag: "Walid Moultamiss dirige Byte Force",
    description:
      "Walid Moultamiss dirige Byte Force à Casablanca. Sa fiche est en français et en anglais, avec les deux CV et les travaux publiés.",
    lede: "Walid Moultamiss dirige Byte Force. La fiche est sur ce site, en français et en anglais, avec les deux CV. Il n'y a pas de photo d'équipe ni de témoignage inventé. La preuve publique, ce sont les travaux en ligne.",
    blocks: [
      {
        h: "La fiche, pas un portrait marketing",
        p: [
          "La page Walid Moultamiss reprend le parcours écrit dans le CV. Elle existe en français et en anglais. Les deux CV sont téléchargeables depuis cette fiche. Le LinkedIn est celui qui y est lié, pas un autre profil.",
          "Il n'y a pas de photo d'équipe sur le site, ni d'avis client rédigé pour la page. Quand un chiffre n'est pas dans le dossier ou dans le CV, il n'est pas ajouté. La fiche le dit elle-même.",
          "Diriger le studio, ici, veut dire lire la tâche, écrire ou faire écrire la note, et répondre depuis le bureau de Casablanca. Le téléphone du site et l'email aboutissent à ce bureau, aux heures publiées.",
        ],
      },
      {
        h: "Ce que le CV indique",
        p: [
          "Le CV indique la fondation et la direction de ByteForce SARL à Casablanca, de 2022 à janvier 2024, avec des projets web et logiciels menés jusqu'à la mise en ligne. La fiche précise que le CV parle de plus de vingt projets. Ce nombre est celui du CV, pas une nouvelle mesure.",
          "Ensuite le CV indique Cocoinbox, au Canada en télétravail, de janvier à décembre 2024 : une plateforme et un CRM. Puis YourSmile Run, au Maroc, de janvier à juillet 2025 : un CRM pour un parcours dentiste. Puis YourSoft Run, en France en télétravail, d'août 2025 à mars 2026 : maintenance de sites WordPress et d'hébergements. Puis ProcheDeMoi, en France en télétravail, depuis mars 2026.",
          "Ces lignes sont sur la fiche pour qu'on puisse les vérifier dans le CV. Cette page ne les allonge pas. Elle renvoie à la fiche et aux deux fichiers.",
        ],
      },
      {
        h: "La preuve, ce sont les travaux",
        p: [
          "Les réalisations publiées sur ce site sont la preuve qu'un travail a été mis en ligne. Chaque fiche porte un titre, une ville et une année. Certaines ont une capture. Les autres restent un index quand le dossier n'a pas d'image.",
          "On ne déplace pas un projet dans une ville pour illustrer une page. Un travail fait depuis Casablanca pour une entreprise ailleurs garde la ville du projet sur sa fiche, et le bureau reste à Casablanca.",
          "Le catalogue public est aussi en ligne, à l'adresse indiquée sur le site. Il ne remplace pas les fiches d'ici. Il est une autre porte sur les mêmes travaux, pas une liste de clients inventés.",
        ],
      },
      {
        h: "Lui écrire",
        p: [
          "Pour un projet, le chemin est le même que pour le studio : la page contact, l'email, ou WhatsApp au +212 666 650 696. Le message n'a pas à être adressé autrement. Il arrive au bureau qu'il dirige.",
          "Les heures sont celles du bureau : lundi au vendredi, de 9h à 19h, au Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca. La réponse part sous un jour ouvré. Le premier échange de trente minutes est gratuit.",
          "Si vous voulez le parcours avant d'écrire, lisez la fiche et les CV. Si vous voulez voir le travail, ouvrez les réalisations. Les deux suffisent. Un témoignage n'est pas nécessaire pour décider d'écrire.",
        ],
      },
    ],
    faqs: [
      {
        q: "Qui dirige Byte Force ?",
        a: "Walid Moultamiss. Il dirige le studio depuis Casablanca. La fiche du site reprend son CV, en français et en anglais.",
      },
      {
        q: "Où lire le parcours ?",
        a: "Sur la fiche Walid Moultamiss. Les deux CV, français et anglais, s'y téléchargent. Le texte de la fiche ne va pas au-delà de ces documents.",
      },
      {
        q: "Y a-t-il des témoignages clients ?",
        a: "Non. Le site n'en publie pas. La preuve montrée est le travail en ligne : une fiche, une ville, une année, et une capture quand le dossier en a une.",
      },
      {
        q: "Comment le joindre ?",
        a: "Par la page contact, par l'email du site, ou par WhatsApp au +212 666 650 696, du lundi au vendredi, de 9h à 19h. La réponse part sous un jour ouvré.",
      },
      {
        q: "Le studio a-t-il une équipe affichée ?",
        a: "Non. Il n'y a pas de photo d'équipe. Les rôles publics sont ceux du CV de Walid Moultamiss et les fiches de travaux déjà publiées.",
      },
    ],
    links: [
      { href: "/walid-moultamiss", label: "Fiche et CV" },
      { href: "/realisations", label: "Travaux en ligne" },
      { href: "/contact", label: "Écrire" },
      { href: "/studio", label: "Le studio" },
    ],
  },
];

function countWords(parts: string[]) {
  return parts.join(" ").split(/\s+/).filter(Boolean).length;
}

export function studioSectionWords(section: StudioSection) {
  return countWords([
    section.title,
    section.h1,
    section.lede,
    ...section.blocks.flatMap((block) => [block.h, ...block.p]),
    ...section.faqs.flatMap((item) => [item.q, item.a]),
  ]);
}

export function getStudioSection(slug: string) {
  return studioSections.find((section) => section.slug === slug);
}

for (const section of studioSections) {
  const words = studioSectionWords(section);
  if (words < 600) throw new Error(`${section.slug}: ${words} mots`);
}
