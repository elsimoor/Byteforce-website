const date = "2026-10-10";

type Copy = {
  title: string;
  description: string;
  h1: string;
  lede: string;
  sections: { heading: string; paragraphs: string[] }[];
};

function article(input: Copy & { slug: string; links: { href: string; label: string }[]; en: Copy }) {
  return { ...input, date };
}

const contact = { href: "/contact", label: "Écrire à Casablanca" };
const software = { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure" };
const hosting = { href: "/services/hebergement", label: "Hébergement" };
const mobile = { href: "/developpement-application-mobile-maroc", label: "Application mobile" };

export const stackArticles = [
  article({
    slug: "expo-pour-le-telephone",
    title: "Expo quand le geste est sur le téléphone",
    description:
      "Expo sert quand le geste est sur le téléphone. Aucune fiche ne dit qu'une application publiée l'utilise. Bureau à Casablanca.",
    h1: "Expo quand le geste est sur le téléphone",
    lede: "Le geste est dans la poche. Expo est le cadre React Native nommé sur la pile du studio. Tourispeak et Zainek sont des applications Android sur le Play Store. Leurs fiches ne disent pas Expo. [[/contact|Écrire à Casablanca]] si le prochain geste est sur le téléphone.",
    sections: [
      {
        heading: "Ce que les fiches disent déjà",
        paragraphs: [
          "Tourispeak, Montréal, 2024, a un site et une application Android. Zainek, Safi, a une application Android et le site zainek.com. Les captures viennent des fiches Play. Aucune de ces pages ne nomme Expo.",
          "Le CV cite React, Next.js et TypeScript pour les écrans. Expo n'est pas une ligne du CV. Il est sur la pile affichée, pour une application dont le geste ne tient pas dans le navigateur.",
        ],
      },
      {
        heading: "Le téléphone, pas les deux par défaut",
        paragraphs: [
          "On n'ajoute pas une application parce qu'un site existe. Le choix suit l'endroit du geste. Si la personne est au comptoir, le navigateur peut suffire. Si elle a les mains prises, ou si le store est déjà le canal, l'application se discute.",
          "Expo ne remplace pas le compte du store. À la remise, le dépôt et les comptes livrés reviennent à l'entreprise. Il n'y a pas de prix sur cette page.",
        ],
      },
      {
        heading: "Dire le geste",
        paragraphs: [
          "Le message dit ce que la personne fait sur le téléphone, et ce qui existe déjà : un site, un store, un compte. [[/developpement-application-mobile-maroc|L'application mobile]] est le cadre commercial.",
          "[[/contact|Écrire à Casablanca]]. Trente minutes, gratuites. Réponse sous un jour ouvré.",
        ],
      },
    ],
    links: [contact, mobile, software],
    en: {
      title: "Expo when the action is on the phone",
      description:
        "Expo for a React Native application, when the action is on the phone. No public page says a shipped app uses it. Casablanca.",
      h1: "Expo when the action is on the phone",
      lede: "The action is in the pocket. Expo is the React Native frame named on the studio stack. Tourispeak and Zainek are Android applications on the Play Store. Their pages do not say Expo. [[/contact|Write to Casablanca]] if the next action is on the phone.",
      sections: [
        {
          heading: "What the pages already say",
          paragraphs: [
            "Tourispeak, Montreal, 2024, has a site and an Android application. Zainek, Safi, has an Android application and zainek.com. The captures come from the Play listings. Neither page names Expo.",
            "The CV names React, Next.js and TypeScript for the screens. Expo is not a CV line. It is on the displayed stack, for an application whose action does not hold in the browser.",
          ],
        },
        {
          heading: "The phone, not both by default",
          paragraphs: [
            "An application is not added because a site exists. The choice follows where the action happens. If the person is at a counter, the browser can be enough. If their hands are busy, or the store is already the channel, the application is discussed.",
            "Expo does not replace the store account. At handover, the repository and the delivered accounts return to the company. There is no price on this page.",
          ],
        },
        {
          heading: "Name the action",
          paragraphs: [
            "The note says what the person does on the phone, and what already exists: a site, a store, an account. The mobile application is the commercial frame.",
            "[[/contact|Write to Casablanca]]. Thirty minutes, free. A reply within one business day.",
          ],
        },
      ],
    },
  }),
  article({
    slug: "power-bi-si-l-outil-est-la",
    title: "Power BI si l'entreprise l'a déjà",
    description:
      "Power BI est au CV, pour la maintenance des sites WordPress. S'il est déjà là, on l'alimente. Bureau à Casablanca. Rien d'autre.",
    h1: "Power BI si l'entreprise l'a déjà",
    lede: "Quelqu'un lit déjà un tableau. Power BI est l'outil nommé au CV, à côté de la maintenance des sites WordPress et des hébergements OVHcloud, d'août 2025 à mars 2026. [[/contact|Écrire à Casablanca]] si ce tableau existe et qu'une donnée doit y arriver.",
    sections: [
      {
        heading: "Où le CV le place",
        paragraphs: [
          "La fiche de Walid Moultamiss dit : extensions sur mesure, Stripe, Power BI, DNS, SSL, migrations, sur un parc de sites WordPress. Le nombre d'environnements est une phrase du CV. Il ne se recolle pas ici comme un palmarès.",
          "Aucune réalisation publique ne dit que son tableau est Power BI. Coco Inbox, Proche de moi, Dealkhir, YourSmile ont leurs pages. Elles ne nomment pas cet outil.",
        ],
      },
      {
        heading: "Alimenter, ou laisser",
        paragraphs: [
          "Si l'entreprise a déjà Power BI et quelqu'un qui s'en sert, le travail est d'y faire arriver la donnée. On n'écrit pas un deuxième tableau pour changer de logo.",
          "S'il n'y a personne pour le maintenir, ou s'il ne peut pas lire la base, on le dit. Le logiciel sur mesure n'est pas un synonyme de Power BI.",
        ],
      },
      {
        heading: "Dire quel tableau existe",
        paragraphs: [
          "Le message dit le nom de l'outil, la donnée qui doit y entrer, et qui le lit. [[/developpement-logiciel-sur-mesure-maroc|Le logiciel sur mesure]] est le cadre si la donnée ne sort pas toute seule.",
          "[[/contact|Écrire à Casablanca]]. Pas de prix public. Réponse sous un jour ouvré.",
        ],
      },
    ],
    links: [contact, software, { href: "/insights/ovhcloud-pour-l-hebergement", label: "OVHcloud" }],
    en: {
      title: "Power BI when the company already has it",
      description:
        "Power BI is named in the CV for WordPress maintenance. If it is already in place, it is fed. It is not rebuilt. Casablanca.",
      h1: "Power BI when the company already has it",
      lede: "Someone already reads a report. Power BI is the tool named in the CV, next to WordPress maintenance and OVHcloud hosting, from August 2025 to March 2026. [[/contact|Write to Casablanca]] if that report exists and a figure must reach it.",
      sections: [
        {
          heading: "Where the CV places it",
          paragraphs: [
            "Walid Moultamiss's profile says: custom extensions, Stripe, Power BI, DNS, SSL, migrations, on a park of WordPress sites. The count of environments is a CV sentence. It is not pasted here as a score.",
            "No public realisation says its report is Power BI. Coco Inbox, Proche de moi, Dealkhir and YourSmile have their pages. They do not name this tool.",
          ],
        },
        {
          heading: "Feed it, or leave it",
          paragraphs: [
            "If the company already has Power BI and someone who uses it, the work is to get the data there. A second report is not written to change the logo.",
            "If nobody maintains it, or it cannot read the database, that is said. Custom software is not a synonym for Power BI.",
          ],
        },
        {
          heading: "Name the report that exists",
          paragraphs: [
            "The note says the tool's name, the data that must enter it, and who reads it. Custom software is the frame when the data does not leave on its own.",
            "[[/contact|Write to Casablanca]]. No public price. A reply within one business day.",
          ],
        },
      ],
    },
  }),
  article({
    slug: "clarity-sur-une-page",
    title: "Microsoft Clarity sur une page déjà publique",
    description:
      "Clarity lit les sessions d'une page qui a déjà le script. Aucune réalisation ne le nomme. Ce n'est pas un classement ici.",
    h1: "Microsoft Clarity sur une page déjà publique",
    lede: "La page est déjà en ligne. Microsoft Clarity est l'outil de sessions nommé sur la pile du studio. Il ne classe pas un site, et aucune fiche de réalisation ne dit qu'il est installé. [[/contact|Écrire à Casablanca]] si une page publique doit être lue ainsi.",
    sections: [
      {
        heading: "Ce que l'outil lit",
        paragraphs: [
          "Clarity enregistre des sessions sur un site qui a reçu son script. Ce n'est pas une mesure de laboratoire, et ce n'est pas une position Google. Autoriser ce script n'est pas une recommandation pour tous les sites.",
          "byteforce.ma n'affiche pas Clarity. Le site du studio envoie d'autres événements, décrits sur la page PostHog. On ne mélange pas les deux.",
        ],
      },
      {
        heading: "Pas une preuve collée",
        paragraphs: [
          "Coller Clarity sur Infinitebridge, Palais Mehdi, YourSmile ou une boutique serait inventer le script. Leurs fiches disent l'adresse, la ville quand elle est publique, et l'année.",
          "Le script se discute quand le propriétaire du site veut voir les sessions, et quand le compte est au nom de l'entreprise. Le compte livré lui revient.",
        ],
      },
      {
        heading: "Dire la page",
        paragraphs: [
          "Le message donne l'adresse, et dit si un outil de sessions est déjà là. [[/developpement-logiciel-sur-mesure-maroc|Le logiciel sur mesure]] n'est pas le sujet si la demande est seulement de lire une page.",
          "[[/contact|Écrire à Casablanca]]. Pas de prix. Réponse sous un jour ouvré.",
        ],
      },
    ],
    links: [contact, software, { href: "/insights/posthog-pour-les-evenements", label: "PostHog" }],
    en: {
      title: "Microsoft Clarity on a page already public",
      description:
        "Clarity reads sessions on a page that already has the script. No realisation names it. It is not a ranking, in Casablanca.",
      h1: "Microsoft Clarity on a page already public",
      lede: "The page is already online. Microsoft Clarity is the session tool named on the studio stack. It does not rank a site, and no realisation page says it is installed. [[/contact|Write to Casablanca]] if a public page should be read that way.",
      sections: [
        {
          heading: "What the tool reads",
          paragraphs: [
            "Clarity records sessions on a site that has received its script. That is not a lab measurement, and it is not a Google position. Allowing the script is not a recommendation for every site.",
            "byteforce.ma does not show Clarity. The studio site sends other events, described on the PostHog page. The two are not mixed.",
          ],
        },
        {
          heading: "Not a pasted proof",
          paragraphs: [
            "Pinning Clarity on Infinitebridge, Palais Mehdi, YourSmile or a shop would invent the script. Their pages say the address, the city when it is public, and the year.",
            "The script is discussed when the site owner wants to see sessions, and when the account is in the company's name. The delivered account returns to them.",
          ],
        },
        {
          heading: "Name the page",
          paragraphs: [
            "The note gives the address, and says whether a session tool is already there. Custom software is not the subject if the request is only to read a page.",
            "[[/contact|Write to Casablanca]]. No price. A reply within one business day.",
          ],
        },
      ],
    },
  }),
  article({
    slug: "posthog-pour-les-evenements",
    title: "PostHog pour les événements du produit",
    description:
      "PostHog reçoit les événements du site : demande, checklist, audit. Ce n'est pas un classement, ni un produit à part ici.",
    h1: "PostHog pour les événements du produit",
    lede: "Un clic a eu lieu. PostHog est l'outil nommé pour les enregistrer. Sur byteforce.ma, les événements connus sont le choix du canal, l'envoi d'une demande, la checklist, et l'audit d'une page. [[/contact|Écrire à Casablanca]] si un produit doit nommer les siens.",
    sections: [
      {
        heading: "Ce que ce site envoie",
        paragraphs: [
          "Le site du studio envoie ces événements quand les variables sont en place. Ce n'est pas une mesure de trafic, ni une position, ni un revenu. Les jetons ne sont pas publiés.",
          "Aucune réalisation cliente ne dit que PostHog est installé chez elle. YourSmile, Coco Inbox, Proche de moi ont leurs pages. Elles ne nomment pas cet outil.",
        ],
      },
      {
        heading: "Nommer l'événement avant le script",
        paragraphs: [
          "L'événement utile a un nom et un moment : la demande est partie, la checklist est demandée, l'audit est fini. On n'ajoute pas un outil pour compter des visites sans dire ce qu'une visite décide.",
          "Le compte livré est au nom de l'entreprise. PostHog n'est pas un agent, et ce n'est pas une offre d'intelligence artificielle.",
        ],
      },
      {
        heading: "Dire l'événement",
        paragraphs: [
          "Le message dit quel clic compte, et qui doit le lire. [[/developpement-logiciel-sur-mesure-maroc|Le logiciel sur mesure]] reçoit le geste. L'outil de mesure vient après.",
          "[[/contact|Écrire à Casablanca]]. Pas de prix public. Réponse sous un jour ouvré.",
        ],
      },
    ],
    links: [contact, software, { href: "/audit", label: "Audit d'une page" }],
    en: {
      title: "PostHog for the product events",
      description:
        "PostHog receives site events: enquiry, checklist and audit. It is not a ranking, and not a separate product. Casablanca.",
      h1: "PostHog for the product events",
      lede: "A click happened. PostHog is the tool named to record it. On byteforce.ma, the known events are the channel choice, sending an enquiry, the checklist, and the page audit. [[/contact|Write to Casablanca]] if a product must name its own.",
      sections: [
        {
          heading: "What this site sends",
          paragraphs: [
            "The studio site sends these events when the variables are in place. That is not a traffic measurement, a position, or revenue. The tokens are not published.",
            "No client realisation says PostHog is installed there. YourSmile, Coco Inbox and Proche de moi have their pages. They do not name this tool.",
          ],
        },
        {
          heading: "Name the event before the script",
          paragraphs: [
            "A useful event has a name and a moment: the enquiry left, the checklist was requested, the audit finished. A tool is not added to count visits without saying what a visit decides.",
            "The delivered account is in the company's name. PostHog is not an agent, and it is not an artificial-intelligence offer.",
          ],
        },
        {
          heading: "Name the event",
          paragraphs: [
            "The note says which click counts, and who must read it. Custom software receives the action. The measurement tool comes after.",
            "[[/contact|Write to Casablanca]]. No public price. A reply within one business day.",
          ],
        },
      ],
    },
  }),
  article({
    slug: "mailgun-pour-l-envoi",
    title: "Mailgun pour envoyer un message",
    description:
      "Mailgun envoie le message une fois l'envoi décidé. Aucune réalisation ne dit qu'il porte son courrier. Bureau à Casablanca.",
    h1: "Mailgun pour envoyer un message",
    lede: "Le message doit partir. Mailgun est l'outil d'envoi nommé sur la pile du studio. Aucune fiche de réalisation ne dit que son courrier passe par là. [[/contact|Écrire à Casablanca]] si un produit doit envoyer un message, et si un outil d'envoi est déjà payé.",
    sections: [
      {
        heading: "L'envoi n'est pas le produit",
        paragraphs: [
          "Un email de confirmation, une relance, un lien. L'outil porte le message. Il ne décide pas qui le reçoit, ni ce que le message dit. Cette phrase reste dans le logiciel.",
          "On ne colle pas Mailgun sur Coco Inbox, le CRM Cocoinbox, ou YourSmile. Leurs pages disent le parcours. Elles ne disent pas le transporteur du courrier.",
        ],
      },
      {
        heading: "Garder l'outil déjà payé",
        paragraphs: [
          "Si l'entreprise envoie déjà par un autre service, on ne le remplace pas pour aligner un logo. Mailgun se discute quand l'envoi n'a pas d'outil, ou quand celui en place ne porte pas le message.",
          "Le compte livré revient à l'entreprise. Il n'y a pas de prix d'envoi sur cette page.",
        ],
      },
      {
        heading: "Dire le message",
        paragraphs: [
          "Le message utile dit qui écrit, qui reçoit, et à quel moment. [[/developpement-logiciel-sur-mesure-maroc|Le logiciel sur mesure]] porte la règle. Mailgun porte l'envoi.",
          "[[/contact|Écrire à Casablanca]]. Réponse sous un jour ouvré.",
        ],
      },
    ],
    links: [contact, software],
    en: {
      title: "Mailgun to send a message",
      description:
        "Mailgun sends a message from the product, once the sending is decided. No realisation says it carries that mail. Casablanca.",
      h1: "Mailgun to send a message",
      lede: "The message has to leave. Mailgun is the sending tool named on the studio stack. No realisation page says its mail goes through it. [[/contact|Write to Casablanca]] if a product must send a message, and if a sending tool is already paid for.",
      sections: [
        {
          heading: "Sending is not the product",
          paragraphs: [
            "A confirmation, a reminder, a link. The tool carries the message. It does not decide who receives it, or what the message says. That sentence stays in the software.",
            "Mailgun is not pinned on Coco Inbox, the Cocoinbox CRM, or YourSmile. Their pages say the path. They do not say the mail carrier.",
          ],
        },
        {
          heading: "Keep the tool already paid for",
          paragraphs: [
            "If the company already sends through another service, it is not replaced to match a logo. Mailgun is discussed when sending has no tool, or when the one in place cannot carry the message.",
            "The delivered account returns to the company. There is no sending price on this page.",
          ],
        },
        {
          heading: "Name the message",
          paragraphs: [
            "The useful note says who writes, who receives, and at which moment. Custom software carries the rule. Mailgun carries the sending.",
            "[[/contact|Write to Casablanca]]. A reply within one business day.",
          ],
        },
      ],
    },
  }),
  article({
    slug: "mailchimp-pour-la-liste",
    title: "Mailchimp si la liste existe déjà",
    description:
      "Mailchimp tient une liste déjà en place. On ne la recrée pas dans le logiciel pour changer d'écran. Bureau à Casablanca.",
    h1: "Mailchimp si la liste existe déjà",
    lede: "La liste a déjà un nom. Mailchimp est l'outil nommé sur la pile du studio pour une liste d'envois. Aucune réalisation ne dit que sa liste y est. [[/contact|Écrire à Casablanca]] si la liste existe, et si un message doit y être ajouté ou en partir.",
    sections: [
      {
        heading: "La liste n'est pas un logiciel",
        paragraphs: [
          "Une adresse, un consentement, un envoi. Si Mailchimp porte déjà cela, le logiciel peut y écrire un contact. Il ne devient pas la liste.",
          "On n'invente pas une liste pour Infinitebridge, Palais Mehdi ou une boutique. Leurs fiches ne parlent pas d'une newsletter.",
        ],
      },
      {
        heading: "Ne pas doubler l'outil",
        paragraphs: [
          "Recréer la liste dans le produit, alors que quelqu'un l'écrit déjà dans Mailchimp, fait deux vérités. On garde l'outil payé, sauf s'il ne peut pas recevoir le contact dont le logiciel a besoin.",
          "Le compte reste à l'entreprise. Pas de nombre d'abonnés publié ici.",
        ],
      },
      {
        heading: "Dire qui est sur la liste",
        paragraphs: [
          "Le message dit qui entre sur la liste, et qui a le droit d'envoyer. [[/developpement-logiciel-sur-mesure-maroc|Le logiciel sur mesure]] ne remplace pas la liste s'il suffit de la brancher.",
          "[[/contact|Écrire à Casablanca]]. Réponse sous un jour ouvré.",
        ],
      },
    ],
    links: [contact, software],
    en: {
      title: "Mailchimp when the list already exists",
      description:
        "Mailchimp holds a list the company already has. It is not rebuilt inside the software to change a screen. Casablanca. No price.",
      h1: "Mailchimp when the list already exists",
      lede: "The list already has a name. Mailchimp is the tool named on the studio stack for a sending list. No realisation says its list is there. [[/contact|Write to Casablanca]] if the list exists, and if a message must be added to it or leave from it.",
      sections: [
        {
          heading: "The list is not software",
          paragraphs: [
            "An address, a consent, a send. If Mailchimp already carries that, the software can write a contact into it. It does not become the list.",
            "A list is not invented for Infinitebridge, Palais Mehdi or a shop. Their pages do not mention a newsletter.",
          ],
        },
        {
          heading: "Do not double the tool",
          paragraphs: [
            "Rebuilding the list inside the product, while someone already writes it in Mailchimp, makes two truths. The paid tool stays, unless it cannot receive the contact the software needs.",
            "The account stays with the company. No subscriber count is published here.",
          ],
        },
        {
          heading: "Say who is on the list",
          paragraphs: [
            "The note says who enters the list, and who is allowed to send. Custom software does not replace the list if connecting it is enough.",
            "[[/contact|Write to Casablanca]]. A reply within one business day.",
          ],
        },
      ],
    },
  }),
  article({
    slug: "hostinger-pour-l-hebergement",
    title: "Hostinger parmi les hébergements",
    description:
      "Hostinger est un hébergement sur la pile, à côté d'OVHcloud. Aucune réalisation ne dit qu'elle y tourne. Casablanca, ici.",
    h1: "Hostinger parmi les hébergements",
    lede: "Le site a besoin d'un endroit où tourner. Hostinger est nommé sur la pile, avec OVHcloud, Nindohost et Namecheap. Aucune fiche ne dit qu'un produit publié est chez Hostinger. [[/contact|Écrire à Casablanca]] si un compte existe déjà, ou s'il doit être ouvert au nom du client.",
    sections: [
      {
        heading: "L'hébergeur n'est pas le logiciel",
        paragraphs: [
          "OVHcloud est l'hébergeur écrit au CV pour le parc WordPress de YourSoft Run. Hostinger est un autre nom sur la pile. On ne déplace pas un site pour changer ce nom.",
          "Infinitebridge, Palais Mehdi, YourSmile, les boutiques : leurs pages disent l'adresse et l'année. Elles ne disent pas l'hébergeur.",
        ],
      },
      {
        heading: "Le compte au nom du client",
        paragraphs: [
          "À la remise, le compte d'hébergement livré revient à l'entreprise. Le bureau est à Casablanca. La ville du serveur n'est pas un argument.",
          "[[/services/hebergement|L'hébergement]] couvre la mise en ligne, le certificat, les sauvegardes et le nom de domaine. Hostinger est un moyen, choisi pour le projet.",
        ],
      },
      {
        heading: "Dire où le site tourne",
        paragraphs: [
          "Le message dit le domaine, et où le site tourne aujourd'hui. On ne commence pas par le logo de l'hébergeur.",
          "[[/contact|Écrire à Casablanca]]. Pas de prix public. Réponse sous un jour ouvré.",
        ],
      },
    ],
    links: [contact, hosting, { href: "/insights/ovhcloud-pour-l-hebergement", label: "OVHcloud" }],
    en: {
      title: "Hostinger among the hosts",
      description:
        "Hostinger is a host on the stack, next to OVHcloud. No realisation says a product runs there. The account returns to them.",
      h1: "Hostinger among the hosts",
      lede: "The site needs a place to run. Hostinger is named on the stack, with OVHcloud, Nindohost and Namecheap. No page says a published product is at Hostinger. [[/contact|Write to Casablanca]] if an account already exists, or if it must be opened in the client's name.",
      sections: [
        {
          heading: "The host is not the software",
          paragraphs: [
            "OVHcloud is the host written in the CV for the YourSoft Run WordPress park. Hostinger is another name on the stack. A site is not moved to change that name.",
            "Infinitebridge, Palais Mehdi, YourSmile, the shops: their pages say the address and the year. They do not say the host.",
          ],
        },
        {
          heading: "The account in the client's name",
          paragraphs: [
            "At handover, the delivered hosting account returns to the company. The office is in Casablanca. The server's city is not an argument.",
            "Hosting covers go-live, the certificate, backups and the domain name. Hostinger is one means, chosen for the project.",
          ],
        },
        {
          heading: "Say where the site runs",
          paragraphs: [
            "The note says the domain, and where the site runs today. The work does not start from the host's logo.",
            "[[/contact|Write to Casablanca]]. No public price. A reply within one business day.",
          ],
        },
      ],
    },
  }),
  article({
    slug: "namecheap-pour-le-domaine",
    title: "Namecheap pour le nom de domaine",
    description:
      "Namecheap tient un nom de domaine. Le nom reste à l'entreprise. Aucune réalisation ne dit que son domaine y est. Casablanca.",
    h1: "Namecheap pour le nom de domaine",
    lede: "Le site a un nom. Namecheap est le registrar nommé sur la pile du studio. Aucune fiche ne dit qu'un domaine publié y est enregistré. [[/contact|Écrire à Casablanca]] si le nom doit être ouvert, transféré, ou laissé où il est.",
    sections: [
      {
        heading: "Le nom n'est pas l'hébergeur",
        paragraphs: [
          "Le domaine pointe vers l'endroit où le site tourne. Namecheap peut tenir le nom. L'hébergement peut être ailleurs : OVHcloud, Hostinger, Nindohost, Vercel. On ne les confond pas.",
          "Les adresses publiées, yoursmile.ma, infinitebridge.ma, booking.palais-mehdi.com, booking.prochedemoi.fr, crm.cocoinbox.com, ne disent pas leur registrar. On ne l'invente pas.",
        ],
      },
      {
        heading: "Le compte au nom du client",
        paragraphs: [
          "À la remise, le compte du domaine livré revient à l'entreprise. Un nom qu'elle possède déjà n'est pas déplacé pour la fiche.",
          "Le DNS et le certificat font partie de [[/services/hebergement|l'hébergement]]. Namecheap est un endroit possible pour le nom, pas une obligation.",
        ],
      },
      {
        heading: "Dire le nom",
        paragraphs: [
          "Le message donne le domaine, qui le possède aujourd'hui, et où le site tourne. On ne commence pas par le registrar.",
          "[[/contact|Écrire à Casablanca]]. Réponse sous un jour ouvré.",
        ],
      },
    ],
    links: [contact, hosting],
    en: {
      title: "Namecheap for the domain name",
      description:
        "Namecheap holds a domain name. The name stays with the company. No realisation says its domain is registered there. Casablanca.",
      h1: "Namecheap for the domain name",
      lede: "The site has a name. Namecheap is the registrar named on the studio stack. No page says a published domain is registered there. [[/contact|Write to Casablanca]] if the name must be opened, transferred, or left where it is.",
      sections: [
        {
          heading: "The name is not the host",
          paragraphs: [
            "The domain points to where the site runs. Namecheap can hold the name. Hosting can be elsewhere: OVHcloud, Hostinger, Nindohost, Vercel. They are not confused.",
            "The published addresses, yoursmile.ma, infinitebridge.ma, booking.palais-mehdi.com, booking.prochedemoi.fr, crm.cocoinbox.com, do not say their registrar. It is not invented.",
          ],
        },
        {
          heading: "The account in the client's name",
          paragraphs: [
            "At handover, the delivered domain account returns to the company. A name it already owns is not moved for the page.",
            "DNS and the certificate are part of hosting. Namecheap is one possible place for the name, not a requirement.",
          ],
        },
        {
          heading: "Name the name",
          paragraphs: [
            "The note gives the domain, who owns it today, and where the site runs. The work does not start from the registrar.",
            "[[/contact|Write to Casablanca]]. A reply within one business day.",
          ],
        },
      ],
    },
  }),
  article({
    slug: "nindohost-pour-l-hebergement",
    title: "Nindohost pour un hébergement au Maroc",
    description:
      "Nindohost est un hébergeur sur la pile. Le compte livré revient au client. Aucune réalisation ne dit qu'elle y est. Ici.",
    h1: "Nindohost pour un hébergement au Maroc",
    lede: "Le site peut tourner chez un hébergeur au Maroc. Nindohost est nommé sur la pile, avec OVHcloud et Hostinger. Aucune fiche ne dit qu'un produit publié y est. [[/contact|Écrire à Casablanca]] si le compte existe, ou s'il doit être au nom du client.",
    sections: [
      {
        heading: "Un nom de plus, pas une ville imposée",
        paragraphs: [
          "Le bureau de Byte Force est à Casablanca. Cela ne place pas les sites chez Nindohost. Infinitebridge est un site .ma. Sa fiche ne dit pas l'hébergeur. YourSmile cite Casablanca pour la fabrication des aligneurs, pas pour le serveur.",
          "OVHcloud reste l'hébergeur écrit au CV pour le parc WordPress. Nindohost ne le remplace pas dans cette phrase.",
        ],
      },
      {
        heading: "Le compte livré",
        paragraphs: [
          "À la remise, le compte livré revient à l'entreprise : hébergement, domaine, certificat. On ne garde pas la clé.",
          "[[/services/hebergement|L'hébergement]] se choisit pour le projet. Un site WordPress qui tourne déjà n'est pas déplacé pour changer d'écran.",
        ],
      },
      {
        heading: "Dire le compte actuel",
        paragraphs: [
          "Le message dit le domaine et l'endroit où le site tourne. Si Nindohost est déjà le compte, on part de là.",
          "[[/contact|Écrire à Casablanca]]. Pas de prix public. Réponse sous un jour ouvré.",
        ],
      },
    ],
    links: [contact, hosting, { href: "/insights/ovhcloud-pour-l-hebergement", label: "OVHcloud" }],
    en: {
      title: "Nindohost for hosting in Morocco",
      description:
        "Nindohost is a host on the stack. The delivered account returns to the client. No realisation says it is there. Casablanca.",
      h1: "Nindohost for hosting in Morocco",
      lede: "The site can run at a host in Morocco. Nindohost is named on the stack, with OVHcloud and Hostinger. No page says a published product is there. [[/contact|Write to Casablanca]] if the account exists, or if it must be in the client's name.",
      sections: [
        {
          heading: "One more name, not an imposed city",
          paragraphs: [
            "The Byte Force office is in Casablanca. That does not place the sites at Nindohost. Infinitebridge is a .ma site. Its page does not say the host. YourSmile names Casablanca for making the aligners, not for the server.",
            "OVHcloud remains the host written in the CV for the WordPress park. Nindohost does not replace it in that sentence.",
          ],
        },
        {
          heading: "The delivered account",
          paragraphs: [
            "At handover, the delivered account returns to the company: hosting, domain, certificate. The key is not kept.",
            "Hosting is chosen for the project. A WordPress site that already runs is not moved to change a screen.",
          ],
        },
        {
          heading: "Name the current account",
          paragraphs: [
            "The note says the domain and where the site runs. If Nindohost is already the account, that is the start.",
            "[[/contact|Write to Casablanca]]. No public price. A reply within one business day.",
          ],
        },
      ],
    },
  }),
];
