import { AuditForm } from "@/components/audit-form";
import { HeroSlices } from "@/components/hero-slices";
import { EmailText, MailLink } from "@/components/mail-link";
import { StepDrawing } from "@/components/step-drawing";
import { Icon } from "@/components/icon";
import { ResponsiveImg } from "@/components/responsive-img";
import { SelectedWork } from "@/components/selected-work";
import { projects } from "@/lib/content";
import { studioSections } from "@/lib/studio-sections";
import Link from "next/link";
import { site } from "@/lib/site";
import { technologies } from "@/lib/tech-articles";
import { BuildMark, HalfMark, OfferFlows, OfferMark } from "@/components/offer-drawings";
import { TechnologyCard } from "@/globe component/TechnologyCard";
import { WorldClocks } from "@/components/world-clocks";

const homeFaqs: [string, string][] = [
  ["Qu'est-ce qu'un logiciel sur mesure ?", "Un logiciel écrit pour les rôles et les règles d'une entreprise, plutôt qu'un produit du marché que l'équipe doit contourner."],
  ["Combien coûte un logiciel sur mesure au Maroc ?", "Il n'y a pas de grille publique. Le montant suit les écrans, les rôles et les branchements. Le premier échange de trente minutes est gratuit."],
  ["Combien de temps prend le développement ?", "Un audit tient en quelques jours. Une première version tient souvent en plusieurs semaines. La date se pose quand le périmètre est écrit."],
  ["Et si quelqu'un d'autre a déjà écrit le code ?", "On peut le lire, corriger ce qui bloque, ou continuer dessus. On le dit si une réécriture est le chemin honnête."],
  ["Pouvez-vous travailler avec la pile déjà en place ?", "Oui, quand elle convient au produit. Sinon, on le dit avant de construire."],
  ["Restez-vous après la mise en ligne ?", "Oui. Suivi, Suivi plus et Priorité couvrent la surveillance, les copies, les correctifs et, sur les forfaits plus hauts, une réponse plus rapide."],
  ["Comment se passent les paiements ?", "Un acompte lance le travail. Le reste suit des étapes liées à ce qui a été livré."],
  ["Et si le périmètre change ?", "Le changement est écrit et accepté avant d'être construit."],
  ["À qui appartient le résultat ?", "Le code, le dépôt et les comptes d'hébergement vous reviennent à la remise."],
  ["En combien de temps répondez-vous ?", "Sous un jour ouvré. Une panne critique en Priorité est traitée en 4 heures."],
  ["Le premier échange est-il gratuit ?", "Oui. Trente minutes, pour voir si le problème est un que l'on doit prendre."],
];

const offers = [
  {
    href: "/developpement-logiciel-sur-mesure-maroc",
    title: "Logiciel",
    kicker: "Outils métier",
    text: "Parcours, opérations et données",
    mark: "logiciel",
  },
  {
    href: "/developpement-saas-maroc",
    title: "SaaS",
    kicker: "Produits à plusieurs comptes",
    text: "Tableaux, facturation, droits",
    mark: "saas",
  },
  {
    href: "/insights/intelligence-artificielle-entreprise-maroc",
    title: "IA",
    kicker: "Dans le produit",
    text: "Une règle d'abord, un modèle seulement si elle ne suffit pas",
    mark: "ia",
  },
  {
    href: "/application-web-sur-mesure-maroc",
    title: "Plateformes",
    kicker: "Portails et places de marché",
    text: "Clients, partenaires, équipes",
    mark: "plateforme",
  },
] as const;

const built = [
  {
    href: "/developpement-logiciel-sur-mesure-maroc/logiciel-metier",
    icon: "strategy",
    title: "Logiciel métier",
    text: "Des plateformes autour des parcours, des opérations et des données de l'entreprise.",
    note: "Quand les outils ne collent pas au travail",
  },
  {
    href: "/developpement-saas-maroc",
    icon: "dashboard",
    title: "Plateformes SaaS",
    text: "Produits à plusieurs comptes : abonnements, tableaux, droits et facturation.",
    note: "Pour lancer un produit à plusieurs comptes",
  },
  {
    href: "/developpement-logiciel-sur-mesure-maroc/crm",
    icon: "group",
    title: "CRM et gestion",
    text: "CRM, clients, pipeline commercial, opérations et administration interne.",
    note: "Quand le tableur ne suffit plus",
  },
  {
    href: "/developpement-logiciel-sur-mesure-maroc/automatisation",
    icon: "smart_toy",
    title: "Automatisation dans le produit",
    text: "Une tâche répétée devient une règle stable. Un modèle n'est ajouté que si la règle ne peut pas porter le geste.",
    note: "Quand le produit doit retirer du travail manuel",
  },
  {
    href: "/application-web-sur-mesure-maroc",
    icon: "devices",
    title: "Applications web et mobile",
    text: "Applications pour les clients, les employés, les partenaires ou l'équipe interne.",
    note: "Clients, employés ou partenaires",
  },
  {
    href: "/application-web-sur-mesure-maroc",
    icon: "hub",
    title: "Plateformes et portails",
    text: "Places de marché, portails clients, réservation et annuaires.",
    note: "Places de marché, portails, réservation",
  },
] as const;

const offerFrame = [
  "border-outline-variant py-5 sm:pr-6 lg:border-r",
  "border-t border-outline-variant py-5 sm:border-t-0 sm:pl-6 lg:border-r lg:pr-6",
  "border-t border-outline-variant py-5 lg:border-t-0 lg:border-r lg:px-6",
  "border-t border-outline-variant py-5 sm:pl-6 lg:border-t-0 lg:pl-6",
];

export function StudioHome() {
  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* 1. HERO SECTION */}
      <header className="studio-hero home-hero">
        <HeroSlices src="/studio/technopark.png" />
        <div className="home-hero-copy">
        <p className="font-mono text-[15px] font-bold uppercase tracking-[0.14em] text-white sm:text-sm">
          Studio logiciel · Casablanca
        </p>
        <h1 className="mt-4 max-w-[12ch] font-headline text-[clamp(3.1rem,7vw,6.25rem)] font-black leading-[0.92] tracking-[-0.03em] text-white">
          Développement logiciel sur mesure, à Casablanca.
        </h1>
        <div className="mt-10 grid items-start gap-10 border-t border-outline-variant pt-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="max-w-xl text-xl leading-relaxed text-white/80">
              Byte Force conçoit le logiciel, l&apos;application ou le site, le corrige quand il casse, et remet le code au client. Un humain et une machine doivent pouvoir trouver l&apos;offre, la comprendre, et écrire.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                className="inline-flex min-h-11 items-center gap-2 bg-primary px-6 py-3.5 text-[15px] font-medium text-on-primary hover:bg-primary-container active:bg-on-primary-fixed"
                href="/contact"
              >
                <span>Parler d&apos;un projet</span>
                <Icon name="arrow_forward" className="text-base" />
              </a>
              <a
                className="inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
                href="/realisations"
              >
                Voir les travaux
              </a>
            </div>
            <p className="mt-5 text-sm text-white/80">
              Réponse sous un jour ouvré. On peut aussi écrire sur{" "}
              <a href="https://wa.me/212666650696" className="font-semibold text-white">
                WhatsApp
              </a>{" "}
              ou <MailLink className="font-semibold text-white" />.
            </p>
          </div>
          <div className="lg:col-span-5 lg:border-l lg:border-white/25 lg:pl-10">
            <p className="font-mono text-[15px] font-bold uppercase tracking-[0.12em] text-white sm:text-sm">Ou un site déjà en ligne</p>
            <AuditForm variant="studio" />
          </div>
        </div>
        </div>
      </header>
      <section className="mx-auto w-full max-w-7xl px-6 pb-16 pt-12 lg:px-12 lg:pb-20">
        <ul className="grid grid-cols-1 gap-px border border-outline-variant bg-outline-variant sm:grid-cols-3">
          {(
            [
              {
                href: "/realisations/crm-cocoinbox",
                src: "/work/crm.cocoinbox.webp",
                alt: "CRM Cocoinbox : la boîte, les fiches, et les colonnes du pipeline.",
                title: "CRM Cocoinbox",
                place: "Montréal · 2026",
                position: "object-left-top",
              },
              {
                href: "/realisations/booking-proche-de-moi",
                src: "/work/booking.prochedemoi.webp",
                alt: "Tableau de réservation Proche de moi, à Lille.",
                title: "Réservation Proche de moi",
                place: "Lille · 2026",
                position: "object-left-top",
              },
              {
                href: "/realisations/tourispeak",
                src: "/work/tourispeak-app-1.webp",
                alt: "Application Tourispeak : les visites, sur le téléphone.",
                title: "Tourispeak",
                place: "Montréal · 2024",
                position: "object-top",
              },
            ] as const
          ).map((work) => (
            <li key={work.href} className="bg-surface">
              <a href={work.href} className="group block">
                <span className="relative block h-44 overflow-hidden bg-surface-container-lowest sm:h-52">
                  <ResponsiveImg
                    src={work.src}
                    alt={work.alt}
                    width={640}
                    height={400}
                    priority={work.href.endsWith("crm-cocoinbox")}
                    fetchPriority={work.href.endsWith("crm-cocoinbox") ? "high" : "auto"}
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className={`absolute inset-0 h-full w-full object-cover ${work.position}`}
                  />
                </span>
                <span className="flex items-end justify-between gap-3 border-t border-outline-variant px-4 py-3">
                  <span>
                    <span className="block font-headline text-base font-bold text-on-surface underline decoration-transparent underline-offset-4 group-hover:decoration-current">
                      {work.title}
                    </span>
                    <span className="block text-sm text-on-surface-variant">{work.place}</span>
                  </span>
                  <span className="text-sm font-bold text-primary">La fiche</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-16 grid grid-cols-1 border-t border-outline-variant sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer, index) => (
            <Link
              key={offer.href}
              href={offer.href}
              className={`group flex flex-col text-on-surface ${offerFrame[index]}`}
            >
              <OfferMark name={offer.mark} />
              <span className="text-2xl font-headline font-bold underline decoration-transparent underline-offset-4 group-hover:decoration-current lg:text-3xl">
                {offer.title}
              </span>
              <span className="mt-1 text-[15px] font-mono font-semibold uppercase tracking-wider sm:text-sm">
                {offer.kicker}
              </span>
              <span className="text-[15px] text-on-surface-variant sm:text-sm">{offer.text}</span>
            </Link>
          ))}
        </div>
        {/* <OfferFlows /> */}
      </section>
      <section className="w-full bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <WorldClocks />
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 items-start gap-12 px-6 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-5">
            <span className="font-mono text-[15px] font-bold uppercase tracking-[0.12em] text-on-surface sm:text-sm">Le studio</span>
            <h2 className="mt-2 font-headline text-3xl font-bold tracking-tight text-on-surface lg:text-4xl">
              Le travail d&apos;abord. L&apos;outil ensuite.
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-on-surface-variant">
              Byte Force est un studio logiciel à Casablanca. On construit l&apos;outil qu&apos;une équipe utilise chaque
              jour : un site, une application, ou un logiciel écrit pour une entreprise.
            </p>
            <Link
              href="/ou-en-est-le-projet"
              className="mt-8 inline-flex items-center gap-2 min-h-11 bg-primary px-6 py-3.5 text-[15px] font-medium text-on-primary hover:bg-primary-container active:bg-on-primary-fixed"
            >
              Où en est le travail
              <Icon name="arrow_forward" className="text-base" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:col-span-7 lg:border-l lg:border-outline-variant lg:pl-10">
            {studioSections.map((section) => (
              <Link key={section.slug} href={`/studio/${section.slug}`} className="block border-t border-outline-variant py-5 sm:px-4">
                <h3 className="font-headline text-lg font-bold text-primary">{section.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-on-surface-variant sm:text-base">{section.card}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* 8. ABOUT BYTEFORCE & MOROCCO HUB */}
      <section id="about" className="w-full bg-surface-container py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col space-y-4">
              <span className="font-mono text-[15px] font-bold tracking-[0.12em] text-on-surface uppercase sm:text-sm">
                LE POINT DE DÉPART
              </span>
              <h2 className="text-3xl lg:text-4xl font-headline font-black text-on-surface tracking-tight">
                Le logiciel suit le métier. Pas l&apos;inverse.
              </h2>
              <p className="text-base text-on-surface-variant leading-relaxed">
                Un outil du marché force souvent l&apos;équipe à changer sa façon de travailler. Byte Force fait l&apos;inverse : le logiciel reprend qui saisit, qui valide, qui relance.
              </p>
              <p className="text-base text-on-surface-variant leading-relaxed">
                Le travail couvre l&apos;outil interne, le CRM, l&apos;application web, le SaaS et le site quand le projet en a besoin. Ce n&apos;est pas une agence de sites au forfait.
              </p>
              <p className="text-base text-on-surface-variant leading-relaxed">
                {projects.length} projets publiés. Le bureau est au Technopark, Bd Dammam, Aïn Chock, 20001 Casablanca.{" "}
                <a href="/studio" className="font-semibold text-primary">
                  À propos du studio
                </a>
                .
              </p>
              <div className="pt-4 flex items-center gap-6">
                <div>
                  <div className="text-lg font-bold text-on-surface">
                    Casablanca
                  </div>
                  <div className="text-[15px] sm:text-sm font-mono text-outline">
                    Technopark, Bd Dammam, Aïn Chock
                  </div>
                </div>
                <div className="h-8 w-px bg-outline-variant" />
                <div>
                  <div className="text-lg font-bold text-on-surface">
                    GMT / UTC+1
                  </div>
                  <div className="text-[15px] sm:text-sm font-mono text-outline">
                    Chevauchement Europe et États-Unis
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Casablanca Tech Hub Card */}
            <div className="lg:col-span-5 border border-outline-variant bg-surface-container-lowest p-6">
              <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
                <span className="text-[15px] sm:text-sm font-mono font-bold text-on-surface">
                  PÔLE TECH, CASABLANCA
                </span>
                <span className="text-[15px] sm:text-sm font-mono text-on-surface font-semibold">
                  33.5731° N, 7.5898° W
                </span>
              </div>
              <div className="py-4 space-y-3">
                <div className="flex items-center justify-between text-[15px] sm:text-sm">
                  <span className="text-on-surface-variant font-mono">
                    Europe de l&apos;Ouest (CET)
                  </span>
                  <span className="font-mono font-bold text-on-surface">
                    ±1 h de commun
                  </span>
                </div>
                <div className="flex items-center justify-between text-[15px] sm:text-sm">
                  <span className="text-on-surface-variant font-mono">
                    Royaume-Uni (GMT)
                  </span>
                  <span className="font-mono font-bold text-on-surface">
                    Même fuseau
                  </span>
                </div>
                <div className="flex items-center justify-between text-[15px] sm:text-sm">
                  <span className="text-on-surface-variant font-mono">
                    Côte est des États-Unis
                  </span>
                  <span className="font-mono font-bold text-on-surface">
                    4 à 5 h de commun
                  </span>
                </div>
              </div>
              <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between text-[15px] sm:text-sm font-mono text-outline">
                <span>Livraison</span>
                <span className="text-on-surface font-semibold">
                  Français • anglais • arabe
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-5">
            <span className="font-mono text-[15px] font-bold uppercase tracking-[0.12em] text-on-surface sm:text-sm">Vibe coding</span>
            <h2 className="mt-2 font-headline text-3xl font-bold tracking-tight text-on-surface lg:text-4xl">
              La moitié est faite. C&apos;est déjà bien.
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-on-surface-variant">
              Un écran qui tourne chez vous, c&apos;est la moitié du travail. Byte Force prend l&apos;autre moitié : comptes,
              données, cas qui cassent, mise en ligne, page qu&apos;on trouve, et dépôt qui vous revient.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 min-h-11 bg-primary px-6 py-3.5 text-[15px] font-medium text-on-primary hover:bg-primary-container active:bg-on-primary-fixed"
            >
              Finir le projet
              <Icon name="arrow_forward" className="text-base" />
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-on-surface-variant">
              Un lien, un dépôt ou une capture suffit. Réponse sous un jour ouvré. Pas de prix sur cette page.
            </p>
          </div>
          <ol className="grid sm:grid-cols-2 lg:col-span-7 lg:border-l lg:border-outline-variant lg:pl-10">
            {(
              [
                ["comptes", "Comptes et droits", "Qui entre, qui voit un dossier, et qui ne doit pas le voir."],
                ["donnees", "Données", "Ce qui est saisi reste après la fermeture de l'onglet, avec une copie."],
                ["cassent", "Cas qui cassent", "Le champ vide, le double envoi, le rôle sans le droit."],
                ["ligne", "Mise en ligne", "Le nom de domaine, l'hébergement, et une adresse qui répond."],
                ["depot", "Le dépôt", "Le code et les comptes livrés reviennent à l'entreprise."],
                ["page", "Page et formulaire", "L'offre se trouve, et le message part vraiment."],
              ] as const
            ).map(([mark, title, text], index) => (
              <li key={title} className="border-t border-outline-variant py-5 sm:px-4">
                <HalfMark name={mark} />
                <span className="font-mono text-[15px] font-bold text-primary sm:text-sm">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-headline text-lg font-bold text-on-surface">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      {/* 4. SERVICES / CAPABILITIES (Engineering Matrix) */}
      <section id="capabilities" className="w-full bg-surface-container py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <span className="font-mono text-[15px] font-bold tracking-[0.12em] text-on-surface uppercase sm:text-sm">
              CE QUE L&apos;ON CONSTRUIT
            </span>
            <h2 className="text-3xl lg:text-5xl font-headline font-black text-on-surface tracking-tight mt-1">
              Ce que l&apos;on construit
            </h2>
            <p className="text-on-surface-variant text-lg lg:text-lg mt-2 max-w-2xl">
              Chaque offre dit à qui elle s&apos;adresse, et ce qu&apos;elle comprend. La pile livrée comprend React, Next.js et Node.js.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {built.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex min-w-0 flex-col justify-between border-t border-outline-variant pt-6 text-on-surface"
              >
                <span>
                  <span className="mb-6 flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-primary">{String(index + 1).padStart(2, "0")}</span>
                    <Icon name={item.icon} />
                  </span>
                  <span className="mb-2 block text-xl font-headline font-bold underline decoration-transparent underline-offset-4 group-hover:decoration-current">
                    {item.title}
                  </span>
                  <span className="block text-sm leading-relaxed text-on-surface-variant">{item.text}</span>
                </span>
                <span className="mt-6 pt-4 font-mono text-[15px] text-outline sm:text-sm">{item.note}</span>
              </Link>
            ))}
            <div className="flex min-w-0 flex-col justify-between border-t border-outline-variant pt-6">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">07</span>
                  <div className="text-on-surface">
                    <Icon name="bug_report" />
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">Audit et correctifs</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Une lecture d&apos;un produit déjà là : ce qui bloque, ce qui est cassé, et quoi corriger d&apos;abord.
                </p>
                <a href="/contact" className="mt-4 inline-flex text-sm font-bold text-primary">
                  Demander une lecture
                </a>
              </div>
              <div className="mt-6 pt-4 text-[15px] sm:text-sm font-mono text-outline">Pour un produit ou un site déjà en ligne</div>
            </div>
            <div className="flex min-w-0 flex-col justify-between border-t border-outline-variant pt-6">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">08</span>
                  <div className="text-on-surface">
                    <Icon name="build" />
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">Maintenance et suivi</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Le produit reste en ligne, avec une copie, et peut encore changer après la mise en ligne.
                </p>
                <a href="/services" className="mt-4 inline-flex text-sm font-bold text-primary">
                  Voir le suivi
                </a>
              </div>
              <div className="mt-6 pt-4 text-[15px] sm:text-sm font-mono text-outline">Pour un produit déjà en production</div>
            </div>
            <div className="flex min-w-0 flex-col justify-between border-t border-outline-variant pt-6">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">09</span>
                  <div className="text-on-surface">
                    <Icon name="extension" />
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">Plugins WordPress</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Un plugin écrit pour le site WordPress déjà en place, quand une extension du marché ne fait pas le geste.
                </p>
                <a href="/services" className="mt-4 inline-flex text-sm font-bold text-primary">
                  Voir l&apos;offre
                </a>
              </div>
              <div className="mt-6 pt-4 text-[15px] sm:text-sm font-mono text-outline">Pour un site WordPress qui a besoin d&apos;une fonction</div>
            </div>
          </div>
          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 min-h-11 bg-primary px-6 py-3.5 text-[15px] font-medium text-on-primary hover:bg-primary-container active:bg-on-primary-fixed"
          >
            Parler d'un projet
          </a>
        </div>
      </section>
      {/* 6. METHODOLOGY (5-Step Engineering System) */}
      <section className="w-full bg-surface-container py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <span className="font-mono text-[15px] font-bold tracking-[0.12em] text-on-surface uppercase sm:text-sm">
              COMMENT LE LOGICIEL COMMENCE
            </span>
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-on-surface tracking-tight mt-1">
              Du problème métier au logiciel qui tourne.
            </h2>
            <p className="text-on-surface-variant text-lg mt-2 max-w-xl">
              Chaque projet part d&apos;un problème, pas d&apos;une technologie.
            </p>
            <p className="text-on-surface-variant text-sm mt-4 max-w-2xl">
              Au quotidien : l&apos;email <EmailText /> et WhatsApp, avec un point hebdomadaire sur un tableau partagé. Réponse sous un jour ouvré. Les bugs du périmètre convenu sont corrigés avec la livraison. Ensuite, un correctif chiffré ou un forfait mensuel les couvre. À la fin, le code, le dépôt et les comptes d&apos;hébergement vous reviennent.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
            {(
              [
                ["01", "understand", "Comprendre le travail", "On comprend le métier, les personnes, les parcours et les contraintes.", "MÉTIER • PERSONNES", "/checklists/comprendre-le-travail"],
                ["02", "design", "Dessiner le produit", "On transforme le besoin en parcours clair et en architecture.", "PRODUIT • ARCHITECTURE", "/checklists/dessiner-le-produit"],
                ["03", "build", "Construire le produit", "On écrit l'application, le serveur, les données et les branchements.", "APPLICATION • DONNÉES", "/checklists/construire-le-produit"],
                ["04", "launch", "Mettre en ligne", "On ouvre le logiciel dans un environnement réel.", "PRODUCTION", "/checklists/lancer-le-produit"],
                ["05", "improve", "Améliorer le produit", "On continue après la mise en ligne, quand le métier change.", "APRÈS LA MISE EN LIGNE", "/checklists/ameliorer-le-produit"],
              ] as const
            ).map(([index, drawing, title, text, mark, href]) => (
              <a
                key={href}
                href={href}
                className="flex flex-col justify-between border-t border-outline-variant pt-5 text-on-surface"
              >
                <span className="text-on-surface">
                  <StepDrawing name={drawing} />
                </span>
                <span className="mt-4 text-2xl font-mono font-black text-primary">{index}</span>
                <h3 className="mb-2 mt-2 font-headline text-base font-bold">{title}</h3>
                <p className="text-[15px] sm:text-sm leading-relaxed text-on-surface-variant">{text}</p>
                <span className={`mt-6 text-[15px] sm:text-sm font-mono uppercase tracking-wider ${index === "04" ? "font-bold text-primary" : "text-outline"}`}>
                  {mark}
                </span>
              </a>
            ))}
          </div>
          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 min-h-11 bg-primary px-6 py-3.5 text-[15px] font-medium text-on-primary hover:bg-primary-container active:bg-on-primary-fixed"
          >
            Parler d'un projet
          </a>
        </div>
      </section>
      <SelectedWork />
      {/* 5. FOUNDATIONAL STACK */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <TechnologyCard />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {technologies.map((tool) => (
            <a
              key={tool.slug}
              href={`/insights/${tool.slug}`}
              className="group flex flex-col items-center justify-center gap-3 border-t border-outline-variant px-3 py-5 text-on-surface"
            >
              <img
                src={`/tech/${tool.file}.svg`}
                alt=""
                width={40}
                height={40}
                loading="lazy"
                className="h-10 w-10 grayscale opacity-60 transition duration-200 group-hover:grayscale-0 group-hover:opacity-100"
              />
              <span className="text-center text-[15px] sm:text-sm font-semibold text-on-surface">
                {tool.name}
              </span>
            </a>
          ))}
        </div>
        <p className="mt-8 text-sm">
          <a href="/insights" className="inline-flex min-h-11 items-center font-semibold text-primary">
            Les outils, expliqués
          </a>
        </p>
      </section>
      {/* ENGINEERING */}
      <section id="engineering" className="w-full bg-surface-container py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <span className="font-mono text-[15px] font-bold tracking-[0.12em] text-on-surface uppercase sm:text-sm">
              INGÉNIERIE
            </span>
            <h2 className="text-3xl lg:text-5xl font-headline font-black text-on-surface tracking-tight mt-1">
              Fait pour la production, pas seulement pour la démo.
            </h2>
            <p className="text-on-surface-variant text-lg lg:text-lg mt-2 max-w-2xl">
              Une belle interface n&apos;est qu&apos;une partie d&apos;un bon logiciel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(
              [
                ["architecture", "01", "Architecture", "Des systèmes qui peuvent suivre le métier.", "Des systèmes qui changent"],
                ["serveur", "02", "Serveur et API", "Des API fiables, la logique métier et le traitement des données.", "API • Logique • Données"],
                ["base", "03", "Base et fichiers", "Des modèles de données faits pour l'usage réel.", "Modèles • Dossiers • Usage"],
                ["infra", "04", "Infrastructure", "Hébergement, mise en ligne, sécurité et surveillance.", "Hébergement • Mise en ligne • Surveillance"],
                ["branchements", "05", "Branchements", "Paiements, API, outils de communication et services externes.", "Paiements • API • Outils"],
                ["securite", "06", "Sécurité et accès", "Authentification, droits, et données tenues.", "Accès • Droits • Données"],
              ] as const
            ).map(([mark, num, title, text, foot]) => (
              <div key={mark} className="flex min-w-0 flex-col justify-between border-t border-outline-variant pt-6">
                <div>
                  <BuildMark name={mark} />
                  <span className="font-mono text-sm font-bold text-primary">{num}</span>
                  <h3 className="mb-2 mt-2 font-headline text-xl font-bold text-on-surface">{title}</h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant">{text}</p>
                </div>
                <div className="mt-6 pt-4 font-mono text-[15px] text-outline sm:text-sm">{foot}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 7. WHY BYTEFORCE & METRICS PROOF */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Philosophy (Left 6) */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            <div>
              <span className="font-mono text-[15px] font-bold tracking-[0.12em] text-on-surface uppercase sm:text-sm">
                POURQUOI BYTE FORCE
              </span>
              <h2 className="text-3xl lg:text-4xl font-headline font-black text-on-surface tracking-tight mt-1">
                Un partenaire logiciel, pas seulement une équipe qui code.
              </h2>
              <p className="text-on-surface-variant text-lg mt-3 leading-relaxed">
                Le besoin, le produit et le système sont tenus ensemble.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="border-t border-outline-variant py-4 sm:pr-4">
                <p className="font-headline font-bold text-sm text-on-surface mb-1">
                  Le métier d&apos;abord
                </p>
                <p className="text-[15px] sm:text-sm text-on-surface-variant">
                  On comprend le métier avant l&apos;outil.
                </p>
              </div>
              <div className="border-t border-outline-variant py-4 sm:pl-4">
                <p className="font-headline font-bold text-sm text-on-surface mb-1">
                  Produit et technique
                </p>
                <p className="text-[15px] sm:text-sm text-on-surface-variant">
                  On dessine le produit et la technique ensemble.
                </p>
              </div>
              <div className="border-t border-outline-variant py-4 sm:pr-4">
                <p className="font-headline font-bold text-sm text-on-surface mb-1">
                  Les vrais parcours
                </p>
                <p className="text-[15px] sm:text-sm text-on-surface-variant">
                  On construit autour des parcours réels.
                </p>
              </div>
              <div className="border-t border-outline-variant py-4 sm:pl-4">
                <p className="font-headline font-bold text-sm text-on-surface mb-1">
                  Avec qui décide
                </p>
                <p className="text-[15px] sm:text-sm text-on-surface-variant">
                  On travaille directement avec les décideurs.
                </p>
              </div>
              <div className="border-t border-outline-variant py-4 sm:pr-4">
                <p className="font-headline font-bold text-sm text-on-surface mb-1">
                  Fait pour évoluer
                </p>
                <p className="text-[15px] sm:text-sm text-on-surface-variant">
                  Le logiciel peut suivre l&apos;entreprise.
                </p>
              </div>
              <div className="border-t border-outline-variant py-4 sm:pl-4">
                <p className="font-headline font-bold text-sm text-on-surface mb-1">
                  Le résultat
                </p>
                <p className="text-[15px] sm:text-sm text-on-surface-variant">
                  On vise ce que le logiciel permet, pas seulement la livraison.
                </p>
              </div>
            </div>
          </div>
          {/* Prominent Metrics Block (Right 6) */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-inverse-surface p-8 text-inverse-on-surface lg:p-12">
            <div>
              <span className="text-[15px] sm:text-sm font-mono font-bold tracking-widest text-inverse-primary uppercase">
                EFFET SUR LE MÉTIER
              </span>
              <h3 className="text-2xl font-headline font-bold text-white mt-1 mb-8">
                Un bon logiciel change la façon de travailler.
              </h3>
            </div>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              {[
                ["Manuel", "Automatisation", "Le travail manuel devient un parcours"],
                ["Épars", "Un système", "Les données éparses au même endroit"],
                ["Tableurs", "Tableaux", "Les tableurs deviennent des chiffres en ligne"],
                ["Plusieurs outils", "Une plateforme", "Plusieurs outils deviennent un produit"],
                ["Répétition", "Une règle stable", "Une tâche répétée devient une règle"],
                ["Séparé", "Branché", "Des systèmes séparés dans un seul parcours"],
                ["Idée", "Produit", "Une idée métier devient un logiciel utilisé"],
              ].map(([from, to, text]) => (
                <li key={from} className="min-w-0 border-t border-inverse-on-surface/15 pt-4">
                  <p className="text-xl font-headline font-bold leading-tight text-white">{from}</p>
                  <p className="mt-1 text-[15px] sm:text-sm font-mono font-bold uppercase tracking-wider text-inverse-primary">{to}</p>
                  <p className="mt-1 text-sm leading-relaxed text-inverse-on-surface/70">{text}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-start justify-between gap-3 border-t border-inverse-on-surface/10 pt-6 text-[15px] sm:text-sm font-mono leading-relaxed text-inverse-on-surface/70">
              <span>On ne mesure pas le succès au nombre de lignes.</span>
              <span className="font-bold text-inverse-primary">
                On le mesure à ce que le logiciel permet de faire.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="maintenance" className="w-full bg-surface-container py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <span className="font-mono text-[15px] font-bold tracking-[0.12em] text-on-surface uppercase sm:text-sm">
              APRÈS LA MISE EN LIGNE
            </span>
            <h2 className="text-3xl lg:text-5xl font-headline font-black text-on-surface tracking-tight mt-1">
              Maintenance et suivi.
            </h2>
            <p className="text-on-surface-variant text-lg lg:text-lg mt-2 max-w-2xl">
              Suivi, Suivi plus et Priorité sont des forfaits mensuels. Un correctif seul peut être chiffré, sans forfait. Les délais sont en jours ouvrés, sauf mention contraire.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col justify-between border-t border-outline-variant pt-6">
              <div>
                <h3 className="text-xl font-headline font-bold text-on-surface">Suivi d&apos;un site en ligne</h3>
                <p className="mt-3 text-sm text-on-surface-variant">Surveillance, copies hebdomadaires, mises à jour de sécurité.</p>
              </div>
              <p className="mt-8 text-[15px] sm:text-sm font-mono text-on-surface font-bold">Réponse sous 2 jours ouvrés</p>
            </div>
            <div className="flex flex-col justify-between border-t border-outline-variant pt-6">
              <div>
                <h3 className="text-xl font-headline font-bold text-on-surface">Forfait Suivi plus</h3>
                <p className="mt-3 text-sm text-on-surface-variant">Le suivi, plus 5 heures par mois de correctifs et de modifications.</p>
              </div>
              <p className="mt-8 text-[15px] sm:text-sm font-mono text-on-surface font-bold">Réponse sous 1 jour ouvré</p>
            </div>
            <div className="flex flex-col justify-between border-t border-outline-variant pt-6">
              <div>
                <h3 className="text-xl font-headline font-bold text-on-surface">Priorité sur le suivi</h3>
                <p className="mt-3 text-sm text-on-surface-variant">Le suivi plus, plus le travail de performance et un rapport mensuel.</p>
              </div>
              <p className="mt-8 text-[15px] sm:text-sm font-mono text-on-surface font-bold">4 heures pour une panne critique</p>
            </div>
          </div>
          <a
            href="https://wa.me/212666650696?text=Le%20site%20ne%20r%C3%A9pond%20plus"
            className="mt-10 inline-flex items-center gap-2 min-h-11 bg-primary px-6 py-3.5 text-[15px] font-medium text-on-primary hover:bg-primary-container active:bg-on-primary-fixed"
          >
            Le site ne répond plus ? WhatsApp
          </a>
        </div>
      </section>
      <section id="pricing" className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <span className="font-mono text-[15px] font-bold tracking-[0.12em] text-on-surface uppercase sm:text-sm">PÉRIMÈTRE</span>
        <h2 className="text-3xl lg:text-4xl font-headline font-black text-on-surface tracking-tight mt-1">
          Ce qui change le prix.
        </h2>
        <p className="text-on-surface-variant text-lg mt-4 max-w-2xl">
          Pas de prix public. Le travail suit le périmètre, les branchements, et le nombre de rôles. Un premier échange de 30 minutes est gratuit. Une lecture prend souvent quelques jours. Une première version prend souvent plusieurs semaines.
        </p>
        <div className="mt-8">
          <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-on-primary text-sm font-medium">
            Réserver l&apos;échange gratuit
          </a>
        </div>
      </section>
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
          <div className="border-t border-outline-variant py-4">
            <h3 className="font-headline font-bold text-sm">Accord de confidentialité sur demande</h3>
            <p className="mt-1 text-[15px] sm:text-sm text-on-surface-variant">Le besoin peut rester privé avant tout travail.</p>
          </div>
          <div className="border-t border-outline-variant py-4">
            <h3 className="font-headline font-bold text-sm">Essai avant la mise en ligne</h3>
            <p className="mt-1 text-[15px] sm:text-sm text-on-surface-variant">Vous voyez le produit sur un environnement d&apos;essai avant qu&apos;il soit public.</p>
          </div>
          <div className="border-t border-outline-variant py-4">
            <h3 className="font-headline font-bold text-sm">Le code vous appartient</h3>
            <p className="mt-1 text-[15px] sm:text-sm text-on-surface-variant">Le dépôt et les comptes d&apos;hébergement vous reviennent. Les changements se relisent avant la mise en ligne. Les copies sont dans les forfaits de suivi.</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-on-surface-variant">
          Fiche du studio :{" "}
          <a href={site.linkedin} rel="me" className="font-semibold text-primary">
            Byte Force sur LinkedIn
          </a>
          .
        </p>
      </section>
      <section id="faq" className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <span className="font-mono text-[15px] font-bold tracking-[0.12em] text-on-surface uppercase sm:text-sm">AVANT L&apos;ÉCHANGE</span>
        <h2 className="text-3xl lg:text-4xl font-headline font-black text-on-surface tracking-tight mt-1">
          Les questions qui reviennent d&apos;abord.
        </h2>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: homeFaqs.map(([name, text]) => ({
                "@type": "Question",
                name,
                acceptedAnswer: { "@type": "Answer", text },
              })),
            }),
          }}
        />
        <dl className="mt-10 max-w-3xl divide-y divide-outline-variant/40">
          {homeFaqs.map(([question, answer]) => (
            <div key={question} className="py-6">
              <dt className="font-headline font-bold">{question}</dt>
              <dd className="mt-2 text-sm text-on-surface-variant">{answer}</dd>
            </div>
          ))}
        </dl>
      </section>
      {/* 10. FINAL CTA / CONVERSION SECTION */}
      <section className="w-full bg-surface-container-high py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <span className="font-mono text-[15px] font-bold tracking-[0.12em] text-on-surface uppercase sm:text-sm mb-2">
            PARLER D'UN PROJET
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-black text-on-surface tracking-tight leading-tight max-w-2xl">
            Un problème métier qu&apos;un logiciel pourrait résoudre ?
          </h2>
          <p className="text-on-surface-variant text-lg lg:text-lg mt-4 max-w-xl">
            Dites ce que vous voulez construire, améliorer ou automatiser. On aide à en faire un produit. Réponse sous un jour ouvré.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              className="inline-flex items-center gap-2 bg-primary px-8 py-4 text-base font-semibold text-on-primary hover:bg-primary-container"
              href="/contact"
            >
              <span>Parler d'un projet</span>
              <Icon name="arrow_forward" className="text-base" />
            </a>
            <a
              className="inline-flex items-center gap-2 border border-outline-variant bg-surface px-6 py-4 text-base font-medium text-on-surface hover:bg-surface-container-highest"
              href="https://wa.me/212666650696"
            >
              <span>WhatsApp</span>
            </a>
            <MailLink
              className="inline-flex min-h-11 items-center gap-2 border border-outline-variant bg-surface px-6 py-4 text-base font-medium text-on-surface hover:bg-surface-container-highest"
              label="Écrire à Byte Force"
            />
          </div>
          <p className="mt-12 font-mono text-[15px] sm:text-sm text-outline">
            Web · Mobile · SaaS · IA · Logiciel métier
          </p>
        </div>
      </section>
    </div>
  );
}
