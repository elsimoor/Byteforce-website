import { AuditForm } from "@/components/audit-form";
import { StepDrawing } from "@/components/step-drawing";
import { Icon } from "@/components/icon";
import { ResponsiveImg } from "@/components/responsive-img";
import { SelectedWork } from "@/components/selected-work";
import { projects } from "@/lib/content";
import { site } from "@/lib/site";
import { technologies } from "@/lib/tech-articles";

export function StudioHome() {
  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* 1. HERO SECTION */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-16 lg:pt-14 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (Span 7) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-surface-container-high w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono tracking-wider font-semibold uppercase text-on-surface-variant">
                STUDIO LOGICIEL / CASABLANCA
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-headline font-black tracking-tight leading-[1.05] text-on-surface">
              Développement logiciel sur mesure, à Casablanca.
            </h1>
            <p className="text-lg lg:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              Byte Force conçoit le logiciel, l&apos;application ou le site, le corrige quand il casse, et remet le code au client. Un humain et une machine doivent pouvoir trouver l&apos;offre, la comprendre, et écrire.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-primary text-on-primary text-sm font-medium hover:bg-primary-container shadow-md hover:shadow-lg transition-all"
                href="/contact"
              >
                <span>Parler d&apos;un projet</span>
                <Icon name="arrow_forward" className="text-base" />
              </a>
              <a
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface text-sm font-medium transition-colors"
                href="/realisations"
              >
                <span>Voir les travaux</span>
                <Icon name="south" className="text-base" />
              </a>
            </div>
            <div className="max-w-xl space-y-2">
              <p className="font-mono text-[11px] font-bold tracking-widest text-primary uppercase">Ou un site déjà en ligne</p>
              <AuditForm variant="studio" />
            </div>
            <p className="text-sm text-on-surface-variant">
              Réponse sous un jour ouvré. On peut aussi écrire sur{" "}
              <a href="https://wa.me/212666650696" className="font-semibold text-primary">
                WhatsApp
              </a>{" "}
              ou{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-primary">
                {site.email}
              </a>
              .
            </p>
          </div>
          <div className="lg:col-span-5 w-full">
            <a
              href="/realisations/coco-inbox"
              className="block overflow-hidden rounded-xl bg-surface-container-lowest shadow-xl"
            >
              <span className="relative block aspect-[16/10] w-full">
                <ResponsiveImg
                  src="/work/coco-inbox.jpg"
                  alt="Coco Inbox, produit en ligne pour l'email temporaire, les fichiers chiffrés et les notes."
                  width={400}
                  height={250}
                  priority
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </span>
              <span className="flex items-center justify-between gap-4 p-5">
                <span>
                  <span className="block font-mono text-[11px] font-bold tracking-widest text-primary uppercase">
                    Produit en ligne
                  </span>
                  <span className="block font-headline text-lg font-bold text-on-surface">Coco Inbox</span>
                  <span className="block text-sm text-on-surface-variant">Montréal · en ligne depuis 2024</span>
                </span>
                <span className="text-sm font-bold text-primary">La fiche</span>
              </span>
            </a>
          </div>
        </div>
        {/* Credibility Strip */}
        <div className="mt-14 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 bg-surface-container-low p-6 rounded-xl">
          <div className="flex flex-col">
            <span className="text-2xl lg:text-3xl font-headline font-bold text-primary">
              Logiciel
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-on-surface font-semibold mt-1">
              Outils métier
            </span>
            <span className="text-xs text-on-surface-variant">
              Parcours, opérations et données
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl lg:text-3xl font-headline font-bold text-primary">
              SaaS
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-on-surface font-semibold mt-1">
              Produits à plusieurs comptes
            </span>
            <span className="text-xs text-on-surface-variant">
              Tableaux, facturation, droits
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl lg:text-3xl font-headline font-bold text-primary">
              IA
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-on-surface font-semibold mt-1">
              Dans le produit
            </span>
            <span className="text-xs text-on-surface-variant">
              Une règle d&apos;abord, un modèle seulement si elle ne suffit pas
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl lg:text-3xl font-headline font-bold text-primary">
              Plateformes
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-on-surface font-semibold mt-1">
              Portails et places de marché
            </span>
            <span className="text-xs text-on-surface-variant">
              Clients, partenaires, équipes
            </span>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">Le studio</span>
            <h2 className="mt-2 font-headline text-3xl font-bold tracking-tight text-on-surface lg:text-4xl">
              Le travail d&apos;abord. L&apos;outil ensuite.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-on-surface-variant">
              Byte Force est un studio logiciel à Casablanca. On construit l&apos;outil qu&apos;une équipe utilise chaque
              jour : un site, une application, ou un logiciel écrit pour une entreprise.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded bg-primary px-6 py-3.5 text-sm font-medium text-on-primary"
            >
              Parler d&apos;un projet
              <Icon name="arrow_forward" className="text-base" />
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {[
              ["Où l'on travaille", "Technopark, Bd Dammam, Aïn Chock, 20001 Casablanca. Lundi au vendredi, 9h à 19h. Réponse sous un jour ouvré. Le premier échange dure trente minutes, et il est gratuit."],
              ["Ce que vous gardez", "Le code, le dépôt et les comptes d'hébergement vous reviennent. Pas de prix sur ce site. La première note dit ce qui existe, et ce qui doit changer."],
              ["Déjà en ligne", "Un formulaire qui n'envoie rien, une page périmée, ou un bug qui bloque une vente. Un correctif ponctuel n'a pas besoin d'un plan. Si une autre équipe a écrit le code, on le lit d'abord."],
              ["Après la mise en ligne", "Le suivi surveille le site, garde une copie, et corrige ce qui casse. Le même bureau répond sous un jour ouvré. Le prix se fixe quand la tâche est connue."],
              ["Comment commencer", "Écrire depuis la page contact, par email, ou sur WhatsApp. Votre nom, un moyen de répondre, et la tâche. Un lien, un fichier, ou une photo du formulaire qui échoue suffit."],
              ["Qui le dirige", "Walid Moultamiss dirige le studio. Sa fiche est sur ce site, en français et en anglais, avec les deux CV. La preuve, ce sont les travaux en ligne."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-xl bg-surface-container-lowest p-6 shadow-sm">
                <h3 className="font-headline text-lg font-bold text-on-surface">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 8. ABOUT BYTEFORCE & MOROCCO HUB */}
      <section id="about" className="w-full bg-surface-container py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
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
                  <div className="text-xs font-mono text-outline">
                    Technopark, Bd Dammam, Aïn Chock
                  </div>
                </div>
                <div className="h-8 w-px bg-outline-variant" />
                <div>
                  <div className="text-lg font-bold text-on-surface">
                    GMT / UTC+1
                  </div>
                  <div className="text-xs font-mono text-outline">
                    Chevauchement Europe et États-Unis
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Casablanca Tech Hub Card */}
            <div className="lg:col-span-5 bg-surface-container-lowest p-6 rounded-xl shadow-md">
              <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
                <span className="text-xs font-mono font-bold text-on-surface">
                  PÔLE TECH, CASABLANCA
                </span>
                <span className="text-[11px] font-mono text-primary font-semibold">
                  33.5731° N, 7.5898° W
                </span>
              </div>
              <div className="py-4 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-on-surface-variant font-mono">
                    Europe de l&apos;Ouest (CET)
                  </span>
                  <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    ±1 h de commun
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-on-surface-variant font-mono">
                    Royaume-Uni (GMT)
                  </span>
                  <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    Même fuseau
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-on-surface-variant font-mono">
                    Côte est des États-Unis
                  </span>
                  <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    4 à 5 h de commun
                  </span>
                </div>
              </div>
              <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between text-xs font-mono text-outline">
                <span>Livraison</span>
                <span className="text-on-surface font-semibold">
                  Français • anglais • arabe
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 4. SERVICES / CAPABILITIES (Engineering Matrix) */}
      <section id="capabilities" className="w-full bg-surface-container py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              CE QUE L&apos;ON CONSTRUIT
            </span>
            <h2 className="text-3xl lg:text-5xl font-headline font-black text-on-surface tracking-tight mt-1">
              Ce que l&apos;on construit
            </h2>
            <p className="text-on-surface-variant text-base lg:text-lg mt-2 max-w-2xl">
              Chaque offre dit à qui elle s&apos;adresse, et ce qu&apos;elle comprend. La pile livrée comprend React, Next.js et Node.js.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 01 Product Strategy */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">
                    01
                  </span>
                  <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <Icon name="strategy" />
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                  Logiciel métier
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Des plateformes autour des parcours, des opérations et des données de l&apos;entreprise.
                </p>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                Quand les outils ne collent pas au travail
              </div>
            </div>
            {/* 02 UX / UI Design */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">
                    02
                  </span>
                  <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <Icon name="dashboard" />
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                  Plateformes SaaS
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Produits à plusieurs comptes : abonnements, tableaux, droits et facturation.
                </p>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                Pour lancer un produit à plusieurs comptes
              </div>
            </div>
            {/* 03 Web Applications */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">
                    03
                  </span>
                  <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <Icon name="group" />
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                  CRM et gestion
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  CRM, clients, pipeline commercial, opérations et administration interne.
                </p>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                Quand le tableur ne suffit plus
              </div>
            </div>
            {/* 04 Mobile Applications */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">
                    04
                  </span>
                  <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <Icon name="smart_toy" />
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                  Automatisation dans le produit
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Une tâche répétée devient une règle stable. Un modèle n&apos;est ajouté que si la règle ne peut pas porter le geste.
                </p>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                Quand le produit doit retirer du travail manuel
              </div>
            </div>
            {/* 05 AI & Automation */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">
                    05
                  </span>
                  <div className="w-10 h-10 rounded bg-secondary-container flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <Icon name="devices" />
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                  Applications web et mobile
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Applications pour les clients, les employés, les partenaires ou l&apos;équipe interne.
                </p>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                Clients, employés ou partenaires
              </div>
            </div>
            {/* 06 Infrastructure & DevOps */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">
                    06
                  </span>
                  <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <Icon name="hub" />
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                  Plateformes et portails
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Places de marché, portails clients, réservation et annuaires.
                </p>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                Places de marché, portails, réservation
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">07</span>
                  <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
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
              <div className="mt-6 pt-4 text-xs font-mono text-outline">Pour un produit ou un site déjà en ligne</div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">08</span>
                  <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <Icon name="build" />
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">Maintenance et suivi</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Le produit reste en ligne, avec une copie, et peut encore changer après la mise en ligne.
                </p>
                <a href="/services/maintenance" className="mt-4 inline-flex text-sm font-bold text-primary">
                  Voir le suivi
                </a>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">Pour un produit déjà en production</div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">09</span>
                  <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <Icon name="extension" />
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">Plugins WordPress</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Un plugin écrit pour le site WordPress déjà en place, quand une extension du marché ne fait pas le geste.
                </p>
                <a href="/services/plugins-wordpress" className="mt-4 inline-flex text-sm font-bold text-primary">
                  Voir l&apos;offre
                </a>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">Pour un site WordPress qui a besoin d&apos;une fonction</div>
            </div>
          </div>
          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded bg-primary px-6 py-3.5 text-sm font-medium text-on-primary"
          >
            Parler d'un projet
          </a>
        </div>
      </section>
      {/* 6. METHODOLOGY (5-Step Engineering System) */}
      <section className="w-full bg-surface-container py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              COMMENT LE LOGICIEL COMMENCE
            </span>
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-on-surface tracking-tight mt-1">
              Du problème métier au logiciel qui tourne.
            </h2>
            <p className="text-on-surface-variant text-base mt-2 max-w-xl">
              Chaque projet part d&apos;un problème, pas d&apos;une technologie.
            </p>
            <p className="text-on-surface-variant text-sm mt-4 max-w-2xl">
              Au quotidien : l&apos;email {site.email} et WhatsApp, avec un point hebdomadaire sur un tableau partagé. Réponse sous un jour ouvré. Les bugs du périmètre convenu sont corrigés avec la livraison. Ensuite, un correctif chiffré ou un forfait mensuel les couvre. À la fin, le code, le dépôt et les comptes d&apos;hébergement vous reviennent.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
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
                className="flex flex-col justify-between rounded-lg bg-surface-container-lowest p-5 text-on-surface shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="text-primary">
                  <StepDrawing name={drawing} />
                </span>
                <span className="mt-4 text-2xl font-mono font-black text-primary">{index}</span>
                <h3 className="mb-2 mt-2 font-headline text-base font-bold">{title}</h3>
                <p className="text-xs leading-relaxed text-on-surface-variant">{text}</p>
                <span className={`mt-6 text-[10px] font-mono uppercase tracking-wider ${index === "04" ? "font-bold text-primary" : "text-outline"}`}>
                  {mark}
                </span>
              </a>
            ))}
          </div>
          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded bg-primary px-6 py-3.5 text-sm font-medium text-on-primary"
          >
            Parler d'un projet
          </a>
        </div>
      </section>
      <SelectedWork />
      {/* 5. FOUNDATIONAL STACK */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="mb-14">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
            TECHNOLOGIE
          </span>
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-on-surface tracking-tight mt-1">
            La technologie derrière le produit.
          </h2>
          <p className="text-on-surface-variant text-base mt-2 max-w-2xl">
            On choisit l&apos;outil selon le produit : tenue en charge, performance, sécurité et maintenance d&apos;abord.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
          {/* Category 1 */}
          <div className="bg-surface-container-low p-6 rounded-xl">
            <p className="text-xs font-mono font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-outline-variant/30">
              Interface du produit
            </p>
            <ul className="space-y-3">
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Next.js</span>
                <span className="text-[11px] font-mono text-outline">
                  Cadre
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>React</span>
                <span className="text-[11px] font-mono text-outline">
                  Interface
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>TypeScript</span>
                <span className="text-[11px] font-mono text-outline">
                  Code du produit
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>WordPress</span>
                <span className="text-[11px] font-mono text-outline">
                  Plugins
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Expo</span>
                <span className="text-[11px] font-mono text-outline">
                  Téléphone
                </span>
              </li>
            </ul>
          </div>
          {/* Category 2 */}
          <div className="bg-surface-container-low p-6 rounded-xl">
            <p className="text-xs font-mono font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-outline-variant/30">
              Application et données
            </p>
            <ul className="space-y-3">
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Node.js</span>
                <span className="text-[11px] font-mono text-outline">
                  Serveur
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>GraphQL</span>
                <span className="text-[11px] font-mono text-outline">
                  API
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>PostgreSQL</span>
                <span className="text-[11px] font-mono text-outline">
                  Enregistrements
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>MongoDB</span>
                <span className="text-[11px] font-mono text-outline">
                  Documents
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Power BI</span>
                <span className="text-[11px] font-mono text-outline">
                  Tableaux
                </span>
              </li>
            </ul>
          </div>
          {/* Category 3 */}
          <div className="bg-surface-container-low p-6 rounded-xl">
            <p className="text-xs font-mono font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-outline-variant/30">
              Livraison
            </p>
            <ul className="space-y-3">
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Redis</span>
                <span className="text-[11px] font-mono text-outline">
                  État rapide
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Firebase</span>
                <span className="text-[11px] font-mono text-outline">
                  Connexion
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Cloudflare</span>
                <span className="text-[11px] font-mono text-outline">
                  Devant le site
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Vercel</span>
                <span className="text-[11px] font-mono text-outline">
                  Mise en ligne
                </span>
              </li>
            </ul>
          </div>
          {/* Category 4 */}
          <div className="bg-surface-container-low p-6 rounded-xl">
            <p className="text-xs font-mono font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-outline-variant/30">
              Où ça tourne
            </p>
            <ul className="space-y-3">
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>OVHcloud</span>
                <span className="text-[11px] font-mono text-outline">
                  Hébergement
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>API de modèles</span>
                <span className="text-[11px] font-mono text-outline">
                  Dans le produit
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Hostinger</span>
                <span className="text-[11px] font-mono text-outline">
                  Hébergement
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Namecheap</span>
                <span className="text-[11px] font-mono text-outline">
                  Domaine
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Nindohost</span>
                <span className="text-[11px] font-mono text-outline">
                  Hébergement
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl">
            <p className="text-xs font-mono font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-outline-variant/30">
              Mesure et courrier
            </p>
            <ul className="space-y-3">
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Microsoft Clarity</span>
                <span className="text-[11px] font-mono text-outline">
                  Sessions
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>PostHog</span>
                <span className="text-[11px] font-mono text-outline">
                  Événements
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Mailgun</span>
                <span className="text-[11px] font-mono text-outline">
                  Envoi
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Mailchimp</span>
                <span className="text-[11px] font-mono text-outline">
                  Liste
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {technologies.map((tool) => (
            <a
              key={tool.slug}
              href={`/insights/${tool.slug}`}
              className="group flex flex-col items-center justify-center gap-3 rounded-xl bg-surface-container-low px-3 py-5"
            >
              <img
                src={`/tech/${tool.file}.svg`}
                alt=""
                width={40}
                height={40}
                loading="lazy"
                className="h-10 w-10 grayscale opacity-60 transition duration-200 group-hover:grayscale-0 group-hover:opacity-100"
              />
              <span className="text-center text-xs font-semibold text-on-surface">
                {tool.name}
              </span>
            </a>
          ))}
        </div>
      </section>
      {/* ENGINEERING */}
      <section id="engineering" className="w-full bg-surface-container py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              INGÉNIERIE
            </span>
            <h2 className="text-3xl lg:text-5xl font-headline font-black text-on-surface tracking-tight mt-1">
              Fait pour la production, pas seulement pour la démo.
            </h2>
            <p className="text-on-surface-variant text-base lg:text-lg mt-2 max-w-2xl">
              Une belle interface n&apos;est qu&apos;une partie d&apos;un bon logiciel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 01 Product Strategy */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">
                    01
                  </span>
                  <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <Icon name="strategy" />
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                  Architecture
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Des systèmes qui peuvent suivre le métier.
                </p>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                Des systèmes qui changent
              </div>
            </div>
            {/* 02 UX / UI Design */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">
                    02
                  </span>
                  <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <Icon name="palette" />
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                  Serveur et API
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Des API fiables, la logique métier et le traitement des données.
                </p>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                API • Logique • Données
              </div>
            </div>
            {/* 03 Web Applications */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">
                    03
                  </span>
                  <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <Icon name="terminal" />
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                  Base et fichiers
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Des modèles de données faits pour l&apos;usage réel.
                </p>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                Modèles • Dossiers • Usage
              </div>
            </div>
            {/* 04 Mobile Applications */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">
                    04
                  </span>
                  <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <Icon name="smartphone" />
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                  Infrastructure
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Hébergement, mise en ligne, sécurité et surveillance.
                </p>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                Hébergement • Mise en ligne • Surveillance
              </div>
            </div>
            {/* 05 AI & Automation */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">
                    05
                  </span>
                  <div className="w-10 h-10 rounded bg-secondary-container flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <Icon name="smart_toy" />
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                  Branchements
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Paiements, API, outils de communication et services externes.
                </p>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                Paiements • API • Outils
              </div>
            </div>
            {/* 06 Infrastructure & DevOps */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">
                    06
                  </span>
                  <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <Icon name="cloud_sync" />
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                  Sécurité et accès
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Authentification, droits, et données tenues.
                </p>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                Accès • Droits • Données
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 7. WHY BYTEFORCE & METRICS PROOF */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Philosophy (Left 6) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                POURQUOI BYTE FORCE
              </span>
              <h2 className="text-3xl lg:text-4xl font-headline font-black text-on-surface tracking-tight mt-1">
                Un partenaire logiciel, pas seulement une équipe qui code.
              </h2>
              <p className="text-on-surface-variant text-base mt-3 leading-relaxed">
                Le besoin, le produit et le système sont tenus ensemble.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-surface-container-low">
                <p className="font-headline font-bold text-sm text-on-surface mb-1">
                  Le métier d&apos;abord
                </p>
                <p className="text-xs text-on-surface-variant">
                  On comprend le métier avant l&apos;outil.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface-container-low">
                <p className="font-headline font-bold text-sm text-on-surface mb-1">
                  Produit et technique
                </p>
                <p className="text-xs text-on-surface-variant">
                  On dessine le produit et la technique ensemble.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface-container-low">
                <p className="font-headline font-bold text-sm text-on-surface mb-1">
                  Les vrais parcours
                </p>
                <p className="text-xs text-on-surface-variant">
                  On construit autour des parcours réels.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface-container-low">
                <p className="font-headline font-bold text-sm text-on-surface mb-1">
                  Avec qui décide
                </p>
                <p className="text-xs text-on-surface-variant">
                  On travaille directement avec les décideurs.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface-container-low">
                <p className="font-headline font-bold text-sm text-on-surface mb-1">
                  Fait pour évoluer
                </p>
                <p className="text-xs text-on-surface-variant">
                  Le logiciel peut suivre l&apos;entreprise.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface-container-low">
                <p className="font-headline font-bold text-sm text-on-surface mb-1">
                  Le résultat
                </p>
                <p className="text-xs text-on-surface-variant">
                  On vise ce que le logiciel permet, pas seulement la livraison.
                </p>
              </div>
            </div>
          </div>
          {/* Prominent Metrics Block (Right 6) */}
          <div className="lg:col-span-6 bg-inverse-surface text-inverse-on-surface rounded-2xl p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-inverse-primary uppercase">
                EFFET SUR LE MÉTIER
              </span>
              <h3 className="text-2xl font-headline font-bold text-white mt-1 mb-8">
                Un bon logiciel change la façon de travailler.
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-8 my-auto">
              <div>
                <span className="text-4xl lg:text-5xl font-mono font-black text-white tracking-tight">
                  Manuel
                </span>
                <p className="text-xs font-mono uppercase tracking-wider text-inverse-primary font-bold mt-1">
                  Automatisation
                </p>
                <p className="text-xs text-inverse-on-surface/70 mt-1">
                  Le travail manuel devient un parcours
                </p>
              </div>
              <div>
                <span className="text-4xl lg:text-5xl font-mono font-black text-white tracking-tight">
                  Épars
                </span>
                <p className="text-xs font-mono uppercase tracking-wider text-inverse-primary font-bold mt-1">
                  Un système
                </p>
                <p className="text-xs text-inverse-on-surface/70 mt-1">
                  Les données éparses au même endroit
                </p>
              </div>
              <div>
                <span className="text-4xl lg:text-5xl font-mono font-black text-white tracking-tight">
                  Tableurs
                </span>
                <p className="text-xs font-mono uppercase tracking-wider text-inverse-primary font-bold mt-1">
                  Tableaux
                </p>
                <p className="text-xs text-inverse-on-surface/70 mt-1">
                  Les tableurs deviennent des chiffres en ligne
                </p>
              </div>
              <div>
                <span className="text-4xl lg:text-5xl font-mono font-black text-white tracking-tight">
                  Plusieurs outils
                </span>
                <p className="text-xs font-mono uppercase tracking-wider text-inverse-primary font-bold mt-1">
                  Une plateforme
                </p>
                <p className="text-xs text-inverse-on-surface/70 mt-1">
                  Plusieurs outils deviennent un produit
                </p>
              </div>
              <div>
                <span className="text-4xl lg:text-5xl font-mono font-black text-white tracking-tight">
                  Répétition
                </span>
                <p className="text-xs font-mono uppercase tracking-wider text-inverse-primary font-bold mt-1">
                  Une règle stable
                </p>
                <p className="text-xs text-inverse-on-surface/70 mt-1">
                  Une tâche répétée devient une règle
                </p>
              </div>
              <div>
                <span className="text-4xl lg:text-5xl font-mono font-black text-white tracking-tight">
                  Séparé
                </span>
                <p className="text-xs font-mono uppercase tracking-wider text-inverse-primary font-bold mt-1">
                  Branché
                </p>
                <p className="text-xs text-inverse-on-surface/70 mt-1">
                  Des systèmes séparés dans un seul parcours
                </p>
              </div>
              <div>
                <span className="text-4xl lg:text-5xl font-mono font-black text-white tracking-tight">
                  Idée
                </span>
                <p className="text-xs font-mono uppercase tracking-wider text-inverse-primary font-bold mt-1">
                  Produit
                </p>
                <p className="text-xs text-inverse-on-surface/70 mt-1">
                  Une idée métier devient un logiciel utilisé
                </p>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-inverse-on-surface/10 flex items-center justify-between gap-6 text-xs font-mono text-inverse-on-surface/70">
              <span>On ne mesure pas le succès au nombre de lignes.</span>
              <span className="text-inverse-primary font-bold">
                On le mesure à ce que le logiciel permet de faire.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="maintenance" className="w-full bg-surface-container py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              APRÈS LA MISE EN LIGNE
            </span>
            <h2 className="text-3xl lg:text-5xl font-headline font-black text-on-surface tracking-tight mt-1">
              Maintenance et suivi.
            </h2>
            <p className="text-on-surface-variant text-base lg:text-lg mt-2 max-w-2xl">
              Suivi, Suivi plus et Priorité sont des forfaits mensuels. Un correctif seul peut être chiffré, sans forfait. Les délais sont en jours ouvrés, sauf mention contraire.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-headline font-bold text-on-surface">Suivi d&apos;un site en ligne</h3>
                <p className="mt-3 text-sm text-on-surface-variant">Surveillance, copies hebdomadaires, mises à jour de sécurité.</p>
              </div>
              <p className="mt-8 text-xs font-mono text-primary font-bold">Réponse sous 2 jours ouvrés</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-headline font-bold text-on-surface">Suivi plus</h3>
                <p className="mt-3 text-sm text-on-surface-variant">Le suivi, plus 5 heures par mois de correctifs et de modifications.</p>
              </div>
              <p className="mt-8 text-xs font-mono text-primary font-bold">Réponse sous 1 jour ouvré</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-headline font-bold text-on-surface">Priorité</h3>
                <p className="mt-3 text-sm text-on-surface-variant">Le suivi plus, plus le travail de performance et un rapport mensuel.</p>
              </div>
              <p className="mt-8 text-xs font-mono text-primary font-bold">4 heures pour une panne critique</p>
            </div>
          </div>
          <a
            href="https://wa.me/212666650696?text=Le%20site%20ne%20r%C3%A9pond%20plus"
            className="mt-10 inline-flex items-center gap-2 rounded bg-primary px-6 py-3.5 text-sm font-medium text-on-primary"
          >
            Le site ne répond plus ? WhatsApp
          </a>
        </div>
      </section>
      <section id="pricing" className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">PÉRIMÈTRE</span>
        <h2 className="text-3xl lg:text-4xl font-headline font-black text-on-surface tracking-tight mt-1">
          Ce qui change le prix.
        </h2>
        <p className="text-on-surface-variant text-base mt-4 max-w-2xl">
          Pas de prix public. Le travail suit le périmètre, les branchements, et le nombre de rôles. Un premier échange de 30 minutes est gratuit. Une lecture prend souvent quelques jours. Une première version prend souvent plusieurs semaines.
        </p>
        <div className="mt-8">
          <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-primary text-on-primary text-sm font-medium">
            Réserver l&apos;échange gratuit
          </a>
        </div>
      </section>
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-surface-container-low">
            <h3 className="font-headline font-bold text-sm">Accord de confidentialité sur demande</h3>
            <p className="mt-1 text-xs text-on-surface-variant">Le besoin peut rester privé avant tout travail.</p>
          </div>
          <div className="p-4 rounded-lg bg-surface-container-low">
            <h3 className="font-headline font-bold text-sm">Essai avant la mise en ligne</h3>
            <p className="mt-1 text-xs text-on-surface-variant">Vous voyez le produit sur un environnement d&apos;essai avant qu&apos;il soit public.</p>
          </div>
          <div className="p-4 rounded-lg bg-surface-container-low">
            <h3 className="font-headline font-bold text-sm">Le code vous appartient</h3>
            <p className="mt-1 text-xs text-on-surface-variant">Le dépôt et les comptes d&apos;hébergement vous reviennent. Les changements se relisent avant la mise en ligne. Les copies sont dans les forfaits de suivi.</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-on-surface-variant">
          Google listing:{" "}
          <a href="https://share.google/L12w0TmJ9kkUcVBg7" className="font-semibold text-primary">
            Byte Force Maroc
          </a>
          .
        </p>
      </section>
      <section id="faq" className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">AVANT L&apos;ÉCHANGE</span>
        <h2 className="text-3xl lg:text-4xl font-headline font-black text-on-surface tracking-tight mt-1">
          Les questions qui reviennent d&apos;abord.
        </h2>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                ["Et si quelqu'un d'autre a déjà écrit le code ?", "On peut le lire, corriger ce qui bloque, ou continuer dessus. On le dit si une réécriture est le chemin honnête."],
                ["Pouvez-vous travailler avec la pile déjà en place ?", "Oui, quand elle convient au produit. Sinon, on le dit avant de construire."],
                ["Restez-vous après la mise en ligne ?", "Oui. Suivi, Suivi plus et Priorité couvrent la surveillance, les copies, les correctifs et, sur les forfaits plus hauts, une réponse plus rapide."],
                ["Comment se passent les paiements ?", "Un acompte lance le travail. Le reste suit des étapes liées à ce qui a été livré."],
                ["Et si le périmètre change ?", "Le changement est écrit et accepté avant d'être construit."],
              ].map(([name, text]) => ({
                "@type": "Question",
                name,
                acceptedAnswer: { "@type": "Answer", text },
              })),
            }),
          }}
        />
        <dl className="mt-10 max-w-3xl divide-y divide-outline-variant/40">
          <div className="py-6">
            <dt className="font-headline font-bold">Et si quelqu&apos;un d&apos;autre a déjà écrit le code ?</dt>
            <dd className="mt-2 text-sm text-on-surface-variant">On peut le lire, corriger ce qui bloque, ou continuer dessus. On le dit si une réécriture est le chemin honnête.</dd>
          </div>
          <div className="py-6">
            <dt className="font-headline font-bold">Pouvez-vous travailler avec la pile déjà en place ?</dt>
            <dd className="mt-2 text-sm text-on-surface-variant">Oui, quand elle convient au produit. Sinon, on le dit avant de construire.</dd>
          </div>
          <div className="py-6">
            <dt className="font-headline font-bold">Restez-vous après la mise en ligne ?</dt>
            <dd className="mt-2 text-sm text-on-surface-variant">Oui. Suivi, Suivi plus et Priorité couvrent la surveillance, les copies, les correctifs et, sur les forfaits plus hauts, une réponse plus rapide.</dd>
          </div>
          <div className="py-6">
            <dt className="font-headline font-bold">Comment se passent les paiements ?</dt>
            <dd className="mt-2 text-sm text-on-surface-variant">Un acompte lance le travail. Le reste suit des étapes liées à ce qui a été livré.</dd>
          </div>
          <div className="py-6">
            <dt className="font-headline font-bold">Et si le périmètre change ?</dt>
            <dd className="mt-2 text-sm text-on-surface-variant">Le changement est écrit et accepté avant d&apos;être construit.</dd>
          </div>
          <div className="py-6">
            <dt className="font-headline font-bold">À qui appartient le résultat ?</dt>
            <dd className="mt-2 text-sm text-on-surface-variant">Le code, le dépôt et les comptes d&apos;hébergement vous reviennent à la remise.</dd>
          </div>
          <div className="py-6">
            <dt className="font-headline font-bold">En combien de temps répondez-vous ?</dt>
            <dd className="mt-2 text-sm text-on-surface-variant">Sous un jour ouvré. Une panne critique en Priorité est traitée en 4 heures.</dd>
          </div>
          <div className="py-6">
            <dt className="font-headline font-bold">Le premier échange est-il gratuit ?</dt>
            <dd className="mt-2 text-sm text-on-surface-variant">Oui. Trente minutes, pour voir si le problème est un que l&apos;on doit prendre.</dd>
          </div>
        </dl>
      </section>
      {/* 10. FINAL CTA / CONVERSION SECTION */}
      <section className="w-full bg-surface-container-high py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-6 shadow-sm">
            <Icon name="rocket_launch" className="text-2xl" />
          </div>
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-2">
            PARLER D'UN PROJET
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-black text-on-surface tracking-tight leading-tight max-w-2xl">
            Un problème métier qu&apos;un logiciel pourrait résoudre ?
          </h2>
          <p className="text-on-surface-variant text-base lg:text-lg mt-4 max-w-xl">
            Dites ce que vous voulez construire, améliorer ou automatiser. On aide à en faire un produit. Réponse sous un jour ouvré.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              className="inline-flex items-center gap-2 px-8 py-4 rounded bg-primary text-on-primary text-base font-semibold hover:bg-primary-container shadow-md hover:shadow-lg transition-all"
              href="/contact"
            >
              <span>Parler d'un projet</span>
              <Icon name="arrow_forward" className="text-base" />
            </a>
            <a
              className="inline-flex items-center gap-2 px-6 py-4 rounded bg-surface text-on-surface text-base font-medium hover:bg-surface-container-highest transition-colors"
              href="https://wa.me/212666650696"
            >
              <span>WhatsApp</span>
            </a>
            <a
              className="inline-flex items-center gap-2 px-6 py-4 rounded bg-surface text-on-surface text-base font-medium hover:bg-surface-container-highest transition-colors"
              href={`mailto:${site.email}`}
            >
              <Icon name="mail" className="text-base text-primary" />
              <span>Écrire à Byte Force</span>
            </a>
          </div>
          <div className="mt-12 flex items-center gap-3 text-xs font-mono text-outline">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>
              Web · Mobile · SaaS · IA · Logiciel métier
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
