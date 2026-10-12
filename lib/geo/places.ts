export type GeoPlace = {
  prep: string;
  label: string;
  paragraphs: string[];
};

export const geoPlaces: Record<string, GeoPlace> = {
  "Maroc|Casablanca": {
    prep: "à Casablanca",
    label: "Casablanca",
    paragraphs: [
      "Le bureau de Byte Force est à Casablanca : Technopark, boulevard Dammam, Aïn Chock, 20001. Une entreprise de la ville peut se voir en semaine, de 9 h à 19 h, autour du fichier ou de l'écran, pas seulement en partage d'écran. Il n'y a pas de second bureau dans un autre quartier. Le déplacement dans la ville se décide quand le geste ne se comprend pas autrement.",
      "Le catalogue public a des mises en ligne casablancaises : Dealkhir, plateforme pour des organisations, depuis 2024 ; UAS, site e-commerce pour l'aéronautique ; YourSmile, site public qui cite Casablanca, en ligne depuis 2025. Ces fiches ne couvrent pas tous les métiers de la ville. Elles montrent ce qui est publié, avec la ville écrite sur la fiche.",
      "Pour une équipe déjà à Casablanca, il n'y a pas de décalage horaire. Le premier échange de trente minutes peut se faire au Technopark sur rendez-vous, ou en visio. Le téléphone est le +212 666 650 696. La devise du devis, quand le client est au Maroc, est le dirham.",
    ],
  },
  "Maroc|Rabat": {
    prep: "à Rabat",
    label: "Rabat",
    paragraphs: [
      "Rabat est à une heure de train environ de Casablanca. Byte Force n'y a pas de bureau. Une rencontre se fait au Technopark, ou à Rabat si le dossier doit être vu sur place : ce déplacement se décide dans le cadrage, il n'est pas un aller-retour automatique chaque semaine. L'heure est la même que celle du bureau.",
      "Beaucoup de décisions administratives et de sièges sont à Rabat, alors que l'opération est parfois à Casablanca ou ailleurs. Le cadrage sert à savoir qui utilise vraiment l'outil, pas seulement qui signe. On demande le fichier ou l'accès avant la visio, pour ne pas décrire un processus de capitale alors que le geste est dans un service.",
      "Aucun projet du catalogue n'est étiqueté Rabat. On n'en invente pas un. Le travail pour une entreprise de Rabat part de Casablanca, en français, avec un devis en dirhams quand la société est au Maroc. Réponse sous un jour ouvré, du lundi au vendredi, de 9 h à 19 h.",
    ],
  },
  "Maroc|Marrakech": {
    prep: "à Marrakech",
    label: "Marrakech",
    paragraphs: [
      "Marrakech concentre l'hospitalité, les riads, la production visuelle et des entreprises qui vendent à des clients de passage autant qu'à des habitants. Byte Force n'y a pas de bureau. Le studio est à Casablanca. Un déplacement se décide si le métier ne se comprend pas en visio, par exemple une réservation liée à un lieu physique. Ce n'est pas le rythme par défaut.",
      "Deux fiches du catalogue portent Marrakech. Agency Wonderland est le site d'un studio visuel, en ligne depuis 2024. Palais Mehdi est une réservation : dates, adultes, enfants, puis les disponibilités, en ligne en 2026. Ce sont des mises en ligne, pas une agence installée dans la médina.",
      "L'heure est celle du Maroc. La langue de cadrage est le français, sauf demande contraire. Le devis d'une société marocaine se discute en dirhams. Le premier échange dure trente minutes, au téléphone +212 666 650 696 ou par le formulaire.",
    ],
  },
  "Maroc|Tanger": {
    prep: "à Tanger",
    label: "Tanger",
    paragraphs: [
      "Tanger mêle le port, l'industrie et des équipes qui travaillent avec l'Europe. Byte Force n'y a pas de bureau. Le cadrage se fait en visio depuis Casablanca. Un déplacement vers Tanger n'est pas inclus par défaut : il se décide si le geste est sur un quai, un atelier ou un comptoir qu'un écran ne montre pas.",
      "Snapchat Collect est dans le catalogue : une collecte et une redirection de campagnes, décrite comme opérant entre Marseille et Tanger. C'est un projet publié, pas un local commercial à Tanger. On ne le présente pas comme une équipe sur place.",
      "Même fuseau que le bureau, français pour le cadrage, dirham pour une société au Maroc. Les points tiennent dans les heures du studio, 9 h–19 h, lundi au vendredi. Trente minutes pour dire si le sujet est un site, un logiciel, ou un branchement.",
    ],
  },
  "Maroc|Agadir": {
    prep: "à Agadir",
    label: "Agadir",
    paragraphs: [
      "Agadir et le Souss mêlent tourisme, pêche, agriculture et des PME qui vendent au-delà de la ville. Byte Force n'a pas de bureau à Agadir. Tout le travail part du Technopark, à Casablanca. La visio est le mode normal. Un voyage se justifie seulement si le métier doit être vu sur place, et il est alors écrit dans le périmètre, pas supposé.",
      "Aucun projet du catalogue n'est étiqueté Agadir. On ne rapproche pas une fiche de Marrakech ou de Casablanca pour combler le vide. L'absence est dite. La page décrit l'offre, pas une preuve locale qui n'existe pas.",
      "L'heure est celle du Maroc. Le français sert au cadrage. Le devis d'une entreprise marocaine se fait en dirhams. On répond sous un jour ouvré, de 9 h à 19 h, au +212 666 650 696.",
    ],
  },
  "Maroc|Fès": {
    prep: "à Fès",
    label: "Fès",
    paragraphs: [
      "Fès mêle artisanat, industrie et des entreprises dont le savoir est dans des personnes plus que dans un logiciel. Byte Force n'y a pas de bureau. Le studio est à Casablanca. On cadre en visio, avec le fichier ou les photos du geste envoyés avant l'appel. Un déplacement se décide seulement si la visio ne suffit pas à comprendre le métier.",
      "Le catalogue public ne contient pas de projet étiqueté Fès. On n'en fabrique pas. Cette page ne prétend pas qu'un client fassi est déjà en ligne. Elle dit comment l'offre se discute depuis Casablanca.",
      "Même heure que le bureau, cadrage en français, devis en dirhams pour une société au Maroc. Premier échange de trente minutes. Réponse sous un jour ouvré, lundi au vendredi, 9 h–19 h.",
    ],
  },
  "Maroc|Maroc": {
    prep: "au Maroc",
    label: "Maroc",
    paragraphs: [
      "Byte Force est une société au Maroc, avec un seul bureau : Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca. Les pages par ville disent comment se passe une rencontre. Cette page-ci est le cadre du pays. Le téléphone, les heures et l'adresse ne changent pas selon la ville écrite dans la recherche.",
      "Des projets du catalogue sont au Maroc : Dealkhir, UAS et YourSmile à Casablanca, Agency Wonderland et Palais Mehdi à Marrakech, Snapchat Collect décrit entre Marseille et Tanger, Zainek pour des salons avec une ville de fiche à Safi. Infinitebridge est un site public d'une société informatique au Maroc, en ligne depuis 2023. Cette liste n'est pas une couverture de toutes les villes.",
      "La langue de cadrage est le français, sauf demande contraire. Les devis pour une société marocaine se discutent en dirhams. On ne publie pas de grille. Le premier échange dure trente minutes, la réponse part sous un jour ouvré.",
    ],
  },
  "France|Paris": {
    prep: "à Paris",
    label: "Paris",
    paragraphs: [
      "Paris est souvent l'endroit où une décision se signe, même quand l'opération est ailleurs en France. Byte Force n'y a pas de bureau. Le studio est à Casablanca. Les points se font en visio. Un déplacement vers Paris n'est pas le cadre habituel : il se décide seulement si le métier doit être vu, et il figure alors dans le périmètre.",
      "Aucun projet du catalogue n'est étiqueté Paris. Les mises en ligne françaises publiques sont surtout dans le Nord et à Lille : Proche de moi, Escapade Florale, Nu Lille, Meubles de Septentrion à Marcq-en-Barœul, Ambulances Valcq à Roubaix, Les Hauts Paysages dans le Nord. On ne les déplace pas à Paris pour cette page.",
      "Le décalage avec l'Europe est d'une heure une partie de l'année, nul le reste. Les heures du bureau, 9 h–19 h à Casablanca, couvrent donc la journée française. Le cadrage est en français. Une société en France se discute en euros. Trente minutes pour le premier échange, réponse sous un jour ouvré.",
    ],
  },
  "France|Lille": {
    prep: "à Lille",
    label: "Lille",
    paragraphs: [
      "Lille est la ville de France la plus présente dans le catalogue public. Byte Force n'y a pas de bureau : le studio reste à Casablanca. Le travail avec une équipe lilloise se fait en visio, avec le fichier partagé avant l'appel. Un déplacement se décide au cas par cas, il n'est pas une permanence sur place.",
      "Les fiches lilloises sont publiées : Escapade Florale, boutique florale, 2024 ; Nu Lille, site d'une expérience gastronomique, 2023 ; Proche de moi, recherche, carte et fiches, 2024 ; Réservation Proche de moi, connexion de l'établissement, en ligne en 2026. D'autres fiches du Nord sont à Marcq-en-Barœul et à Roubaix, pas dans Lille même. On garde la ville écrite sur chaque fiche.",
      "Le décalage avec Casablanca est d'une heure une partie de l'année, nul le reste. Français, euros, réponse sous un jour ouvré, de 9 h à 19 h heure du bureau. Le téléphone est le +212 666 650 696.",
    ],
  },
  "France|Marseille": {
    prep: "à Marseille",
    label: "Marseille",
    paragraphs: [
      "Marseille est citée dans une fiche, pas comme un bureau. Snapchat Collect est décrit comme une collecte de campagnes opérant entre Marseille et Tanger. Byte Force est à Casablanca. Il n'y a pas d'équipe installée à Marseille. Les échanges sont en visio, sauf si un déplacement est écrit dans le périmètre.",
      "On ne généralise pas cette fiche à tout le tissu économique de la ville. Un site, un logiciel ou une API pour une entreprise marseillaise se cadre comme les autres : le geste, la première version, les comptes au nom de l'entreprise. La ville dans la recherche ne change pas le contrat.",
      "Décalage d'une heure avec Casablanca une partie de l'année, aucun le reste. Cadrage en français, devis en euros pour une société en France. Premier échange de trente minutes. Réponse sous un jour ouvré.",
    ],
  },
  "France|Lyon": {
    prep: "à Lyon",
    label: "Lyon",
    paragraphs: [
      "Lyon mêle industrie, services et des sièges qui pilotent des sites ailleurs. Byte Force n'y a pas de bureau. Le studio est à Casablanca. On travaille en visio. Un déplacement à Lyon se décide seulement si le geste doit être vu dans l'atelier ou l'agence, et il est chiffré à part du code.",
      "Le catalogue public ne contient pas de projet étiqueté Lyon. Les réalisations françaises nommées sont à Lille, dans le Nord, à Marcq-en-Barœul et à Roubaix. On ne les attribue pas à Lyon.",
      "Le décalage horaire avec l'Europe est d'une heure une partie de l'année, nul le reste. Les points tiennent dans la journée française. Langue de cadrage : français. Devise : l'euro pour une société en France. Téléphone +212 666 650 696, lundi au vendredi, 9 h–19 h.",
    ],
  },
  "France|Bordeaux": {
    prep: "à Bordeaux",
    label: "Bordeaux",
    paragraphs: [
      "Bordeaux et la Gironde ont des maisons, des propriétés et des PME dont le suivi tient encore souvent dans un fichier ou dans la tête d'une personne. Byte Force n'a pas de bureau à Bordeaux. Le cadrage se fait en visio depuis Casablanca. On demande le fichier avant l'appel. Un voyage n'est pas inclus, sauf besoin écrit de voir le lieu.",
      "Aucune fiche du catalogue n'est à Bordeaux. On ne rapproche pas les projets du Nord pour le suggérer. La page décrit l'offre et la façon de travailler, pas une référence locale absente.",
      "Même règle horaire que pour le reste de la France : une heure de décalage une partie de l'année, aucune le reste. Français, euros, trente minutes pour le premier échange, réponse sous un jour ouvré.",
    ],
  },
  "France|Nantes": {
    prep: "à Nantes",
    label: "Nantes",
    paragraphs: [
      "Nantes est traité depuis Casablanca, en visio. Il n'y a pas de bureau sur place, ni de permanence. Un déplacement dans l'Ouest se décide si le métier ne passe pas l'écran, et seulement après l'avoir écrit. Le reste du travail, le code et les points, se fait dans les heures du studio.",
      "Le catalogue ne nomme pas Nantes. On n'emprunte pas une fiche lilloise pour cette page. Si un projet nantais est publié plus tard, il sera ajouté avec sa ville réelle. En attendant, la page ne fabrique pas de preuve.",
      "Décalage d'une heure avec Casablanca une partie de l'année, nul le reste. Cadrage en français. Devis en euros pour une société française. Contact au +212 666 650 696 ou par le formulaire. Réponse sous un jour ouvré.",
    ],
  },
  "France|Toulouse": {
    prep: "à Toulouse",
    label: "Toulouse",
    paragraphs: [
      "Toulouse a de l'industrie, de la sous-traitance et des outils internes qui ne tiennent pas dans un site vitrine. Byte Force n'y a pas de bureau. On cadre en visio depuis Casablanca. Si le geste est dans un atelier ou sur un dossier qui ne peut pas sortir, on le dit avant de promettre un écran. Un déplacement n'est pas le point de départ.",
      "Aucune réalisation du catalogue n'est étiquetée Toulouse. On ne le laisse pas entendre. Les projets français publics restent ceux du Nord et de Lille, avec leur ville écrite sur la fiche.",
      "L'heure suit la règle déjà publiée pour l'Europe : une heure de décalage une partie de l'année, aucun le reste. Français à l'oral du cadrage, euros pour une société en France, premier échange de trente minutes.",
    ],
  },
  "France|France": {
    prep: "en France",
    label: "France",
    paragraphs: [
      "Byte Force travaille avec des entreprises en France depuis Casablanca. Il n'y a pas de bureau en France. Le décalage est d'une heure une partie de l'année, nul le reste, donc les points tiennent dans la journée française. Les heures du studio sont 9 h–19 h, lundi au vendredi, heure de Casablanca.",
      "Les projets français du catalogue sont localisés : Lille (Escapade Florale, Nu Lille, Proche de moi, Réservation Proche de moi), Marcq-en-Barœul (Meubles de Septentrion), Roubaix (Ambulances Valcq), le Nord (Les Hauts Paysages). Snapchat Collect mentionne Marseille. Cette liste n'est pas la France entière. Les pages de ville ne doivent pas être lues comme des agences.",
      "Le cadrage est en français. Une société en France se discute en euros. Aucun prix n'est publié : le montant suit le périmètre. Trente minutes pour commencer, réponse sous un jour ouvré, au +212 666 650 696.",
    ],
  },
  "Canada|Montréal": {
    prep: "à Montréal",
    label: "Montréal",
    paragraphs: [
      "Montréal est la ville canadienne du catalogue. Byte Force n'y a pas de bureau : l'équipe est à Casablanca. Les échanges sont en visio. Le décalage est de plusieurs heures. On cale les points le matin à Montréal et l'après-midi au Maroc, dans les heures du studio, 9 h–19 h heure de Casablanca. Un déplacement vers Montréal n'est pas le cadre habituel.",
      "Trois fiches portent Montréal. Coco Inbox, produit pour l'email temporaire, les fichiers chiffrés et les notes, en ligne depuis 2024. Tourispeak, site et application Android de visites audio, depuis 2024. CRM Cocoinbox, page publique du CRM, en ligne en 2026. Les montants dessinés sur la capture du CRM ne sont pas un chiffre du studio. Ces produits ne sont pas une succursale.",
      "Le cadrage de ces pages est en français, ce qui correspond à une recherche francophone. L'interface d'un produit peut être en anglais si l'équipe le demande. Une société au Canada se discute en dollars canadiens. Premier échange de trente minutes, réponse sous un jour ouvré.",
    ],
  },
  "Canada|Québec": {
    prep: "à Québec",
    label: "Québec",
    paragraphs: [
      "Québec, la ville, se cadre en français depuis Casablanca. Il n'y a pas de bureau sur place. La visio est le mode de travail. Le décalage est de plusieurs heures, du même ordre que Montréal : matin à Québec, après-midi au Maroc. On ne promet pas une présence locale.",
      "Le catalogue ne distingue pas un projet « ville de Québec ». Les fiches canadiennes publiques sont à Montréal : Coco Inbox, Tourispeak, CRM Cocoinbox. On ne les reclasse pas à Québec. Si le sujet est le produit déjà en ligne à Montréal, la fiche reste à Montréal.",
      "Dollars canadiens pour une société au Canada. Trente minutes pour le premier échange. Téléphone +212 666 650 696, réponse sous un jour ouvré, lundi au vendredi. L'interface peut être en français, puisque la recherche l'est.",
    ],
  },
  "Canada|Ottawa": {
    prep: "à Ottawa",
    label: "Ottawa",
    paragraphs: [
      "Ottawa travaille souvent dans les deux langues. Ces pages répondent à une recherche en français. Byte Force n'a pas de bureau à Ottawa. Le studio est à Casablanca. Les points se prennent en visio, le matin à Ottawa et l'après-midi au Maroc, à cause du décalage de plusieurs heures. La fenêtre est la même que pour Montréal ou Toronto, plus large que pour Calgary ou Vancouver.",
      "Aucune fiche du catalogue n'est à Ottawa. Les projets canadiens publiés sont à Montréal. On les cite comme des produits en ligne au Canada, pas comme des références ottaviennes.",
      "Le devis d'une société canadienne se discute en dollars canadiens. Le cadrage de cette page est en français. Une interface en anglais se décide dans le périmètre, elle n'est pas refusée. Premier échange de trente minutes, réponse sous un jour ouvré.",
    ],
  },
  "Canada|Toronto": {
    prep: "à Toronto",
    label: "Toronto",
    paragraphs: [
      "Toronto est en grande partie anglophone. Cette page existe parce que la recherche est en français : elle s'adresse à une équipe qui cherche dans cette langue, pas à toute la ville. Byte Force n'y a pas de bureau. Les rendez-vous sont en visio. Le matin à Toronto correspond à l'après-midi à Casablanca. On reste dans les heures du studio, 9 h–19 h.",
      "Le catalogue ne nomme pas Toronto. Coco Inbox, Tourispeak et CRM Cocoinbox sont à Montréal. On ne les transporte pas en Ontario. Un logiciel pour une équipe de Toronto peut avoir une interface en anglais : on l'écrit au cadrage, puisque le français de cette page est la langue de la recherche, pas forcément celle des écrans.",
      "Devise : le dollar canadien pour une société au Canada. Pas de grille de prix. Trente minutes, puis un périmètre. Réponse sous un jour ouvré au +212 666 650 696 ou par le formulaire.",
    ],
  },
  "Canada|Calgary": {
    prep: "à Calgary",
    label: "Calgary",
    paragraphs: [
      "Calgary est loin du bureau, en heures comme en distance. Byte Force est à Casablanca, pas en Alberta. Il n'y a pas d'équipe sur place, ni de salle à Calgary. Le travail se fait en visio. Le décalage est plus grand qu'avec Montréal ou Toronto : la fenêtre commune est plus courte. On la dit au premier échange, pour ne pas caler des points impossibles.",
      "Aucune réalisation du catalogue n'est à Calgary. Les fiches canadiennes sont à Montréal. On ne les présente pas comme une preuve albertaine. La page décrit l'offre et la façon de la cadrer depuis le Maroc.",
      "La recherche est en français. L'équipe à Calgary peut vouloir des écrans en anglais : c'est un choix de périmètre, pas une contradiction. Le devis d'une société canadienne se discute en dollars canadiens. Trente minutes pour commencer. Réponse sous un jour ouvré, lundi au vendredi, 9 h–19 h heure de Casablanca.",
    ],
  },
  "Canada|Vancouver": {
    prep: "à Vancouver",
    label: "Vancouver",
    paragraphs: [
      "Vancouver a le décalage le plus large des villes de cette liste avec Casablanca. Byte Force n'y a pas de bureau. Les points en visio tiennent dans une fenêtre courte : fin de matinée côté Pacifique, fin de journée au Maroc, et encore seulement quand les heures se croisent. On le vérifie avant de promettre un rythme de réunions. Le code, lui, n'a pas besoin de cette fenêtre.",
      "Le catalogue ne contient pas de projet à Vancouver. Montréal porte les fiches canadiennes publiques. On ne les déplace pas sur la côte Ouest. Il n'y a pas de client inventé pour remplir la page.",
      "La recherche est en français. L'interface peut être en anglais si l'équipe le demande : on l'écrit, on ne le devine pas. Devise : dollar canadien. Contact +212 666 650 696. Premier échange de trente minutes, réponse sous un jour ouvré.",
    ],
  },
  "Canada|Canada": {
    prep: "au Canada",
    label: "Canada",
    paragraphs: [
      "Byte Force n'a pas de bureau au Canada. Le studio est au Technopark, à Casablanca. Les projets canadiens du catalogue sont à Montréal : Coco Inbox et Tourispeak depuis 2024, CRM Cocoinbox en ligne en 2026. Ce n'est pas une présence dans chaque province. Les pages de Calgary, Vancouver, Toronto, Ottawa ou Québec le redisent.",
      "Le décalage est de plusieurs heures. Montréal, Québec, Ottawa et Toronto laissent une matinée canadienne face à l'après-midi marocaine. Calgary et Vancouver laissent moins de temps commun. Les heures du studio restent 9 h–19 h, lundi au vendredi, heure de Casablanca. On ne promet pas de répondre à minuit.",
      "Ces pages sont en français. Un produit peut être en anglais si l'équipe au Canada le demande. Les devis pour une société canadienne se discutent en dollars canadiens. Aucun montant n'est affiché. Trente minutes pour voir le geste, réponse sous un jour ouvré.",
    ],
  },
};
