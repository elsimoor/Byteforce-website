"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

type Lang = "fr" | "en";
type Release = "preview" | "live";
type Host = "next" | "wordpress";
type Named = "catalogue" | "studio" | "client";

const copy = {
  fr: {
    flowKicker: "Schéma",
    flowTitle: "Branche, ou domaine",
    flowNote: "Illustration. Pas une mesure de ce site, et pas l'ouverture d'un compte.",
    preview: "Aperçu",
    live: "Version convenue",
    repo: "Dépôt",
    edge: "Vercel",
    address: "Domaine",
    aside: "Aperçu",
    previewBody:
      "Une branche s'ouvre pour être relue avant le nom public. Ce n'est pas l'adresse que les clients connaissent. L'aperçu suit le dépôt. Il ne remplace pas la version convenue.",
    liveBody:
      "La version convenue s'ouvre sur le domaine. Vercel ne fait pas le métier. Il ouvre cette version. À la remise, le compte qui publie est au client. Le studio ne garde pas la seule clé.",
    docs: "Comment Vercel décrit la publication",
    softLead: "Le schéma montre qui ouvre quoi. Le message utile donne le domaine, ou dit qu'il n'existe pas encore.",
    softCta: "Décrire la mise en ligne",
    hostKicker: "Hôte",
    hostTitle: "Quel hôte suit le dépôt",
    next: "Application Next.js",
    wordpress: "Site WordPress",
    nextBody:
      "Le produit est une application Next.js. La mise en ligne, l'aperçu d'une branche et le domaine peuvent suivre le dépôt. Vercel est un moyen de ce jour. La ville du serveur n'est pas un argument. Le bureau est à Casablanca.",
    wordpressBody:
      "Un site WordPress sur un hébergement mutualisé, comme le parc OVHcloud décrit au CV, ne se déplace pas pour changer d'écran de réglage. L'hébergement se choisit pour le projet.",
    namedKicker: "Public",
    namedTitle: "Ce que cette page peut nommer",
    namedNote: "Illustration. Elle n'ouvre aucun compte, et elle n'invente pas un hébergeur.",
    catalogue: "Le catalogue",
    studio: "Le site du studio",
    client: "Un produit client",
    catalogueBody:
      "catalogue-iota.vercel.app est un domaine vercel.app. Il montre les travaux. Ce n'est pas un produit client.",
    studioBody:
      "byteforce.ma est une application Next.js mise en ligne, de la même famille d'outil. Ce n'est pas un serveur décrit page par page.",
    clientBody:
      "Proche de moi, Coco Inbox, Dealkhir et Tourispeak ont leurs domaines. Leur page ne nomme pas l'hébergeur de production. Cette page ne l'invente pas.",
    ctaTitle: "Lire une page, ou décrire le domaine",
    ctaBody: "L'audit gratuit lit une page réelle : titre, indexation, images, mobile. Il n'ouvre pas le compte qui publie.",
    ctaNext: "Le domaine souhaité, ou le domaine déjà en place, se dit à Casablanca.",
    audit: "Audit gratuit",
    contact: "Écrire à Casablanca",
    groupFlow: "Aperçu ou version convenue",
    groupHost: "Hôte",
    groupNamed: "Ce qui est public",
  },
  en: {
    flowKicker: "Diagram",
    flowTitle: "Branch, or domain",
    flowNote: "An illustration. Not a measurement of this site, and not the opening of an account.",
    preview: "Preview",
    live: "Agreed version",
    repo: "Repository",
    edge: "Vercel",
    address: "Domain",
    aside: "Preview",
    previewBody:
      "A branch opens so it can be read before the public name. It is not the address clients know. The preview follows the repository. It does not replace the agreed version.",
    liveBody:
      "The agreed version opens on the domain. Vercel does not do the trade. It opens that version. At handover the account that publishes belongs to the client. The studio does not keep the only key.",
    docs: "How Vercel describes publishing",
    softLead: "The diagram shows who opens what. The useful note gives the domain, or says it does not exist yet.",
    softCta: "Describe the go-live",
    hostKicker: "Host",
    hostTitle: "Which host follows the repository",
    next: "Next.js application",
    wordpress: "WordPress site",
    nextBody:
      "The product is a Next.js application. Go-live, a branch preview and the domain can follow the repository. Vercel is one way to that day. The server's city is not an argument. The office is in Casablanca.",
    wordpressBody:
      "A WordPress site on shared hosting, like the OVHcloud park described in the CV, is not moved to change a settings screen. Hosting is chosen for the project.",
    namedKicker: "Public",
    namedTitle: "What this page can name",
    namedNote: "An illustration. It opens no account, and it does not invent a host.",
    catalogue: "The catalogue",
    studio: "The studio site",
    client: "A client product",
    catalogueBody: "catalogue-iota.vercel.app is a vercel.app domain. It shows the work. It is not a client product.",
    studioBody:
      "byteforce.ma is a Next.js application put online, in the same family of tool. It is not a server described page by page.",
    clientBody:
      "Proche de moi, Coco Inbox, Dealkhir and Tourispeak have their own domains. Their pages do not name the production host. This page does not invent it.",
    ctaTitle: "Read a page, or describe the domain",
    ctaBody: "The free check reads a real page: title, indexation, images, mobile. It does not open the account that publishes.",
    ctaNext: "The domain you want, or the domain already in place, is said in Casablanca.",
    audit: "Free check",
    contact: "Write to Casablanca",
    groupFlow: "Preview or agreed version",
    groupHost: "Host",
    groupNamed: "What is public",
  },
} as const;

function Choice({ pressed, onClick, children }: { pressed: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={pressed ? "bg-ink px-3 py-2 text-sm text-paper" : "border border-line px-3 py-2 text-sm"}
    >
      {children}
    </button>
  );
}

export function VercelFlow({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [release, setRelease] = useState<Release>("live");
  const live = release === "live";

  return (
    <div className="mt-10 max-w-3xl border border-line p-5 md:p-8">
      <p className="text-sm text-mute">{t.flowKicker}</p>
      <h3 className="display mt-3 max-w-[16ch] text-3xl">{t.flowTitle}</h3>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">{t.flowNote}</p>
      <div className="mt-6 flex flex-wrap gap-3" role="group" aria-label={t.groupFlow}>
        <Choice pressed={!live} onClick={() => setRelease("preview")}>
          {t.preview}
        </Choice>
        <Choice pressed={live} onClick={() => setRelease("live")}>
          {t.live}
        </Choice>
      </div>
      <svg viewBox="0 0 640 100" className="mt-8 w-full text-ink" aria-hidden="true">
        <line x1="96" y1="50" x2="304" y2="50" stroke="currentColor" strokeWidth="1" />
        <line
          x1="336"
          y1="50"
          x2="544"
          y2="50"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray={live ? undefined : "5 6"}
          opacity={live ? 1 : 0.45}
        />
        <circle cx="80" cy="50" r="16" fill="var(--color-surface)" stroke="currentColor" />
        <circle cx="320" cy="50" r="16" fill="currentColor" stroke="currentColor" />
        <circle
          cx="560"
          cy="50"
          r="16"
          fill={live ? "currentColor" : "var(--color-surface)"}
          stroke="currentColor"
          opacity={live ? 1 : 0.45}
        />
        <circle
          r="5"
          cy="50"
          cx="96"
          fill="var(--color-surface)"
          stroke="currentColor"
          strokeWidth="2"
          className={live ? "lab-packet-full" : "lab-packet-stop"}
        />
      </svg>
      <div className="grid grid-cols-3 text-center text-sm">
        <span>{t.repo}</span>
        <span>{t.edge}</span>
        <span className={live ? "" : "text-mute"}>{live ? t.address : t.aside}</span>
      </div>
      <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed" aria-live="polite">
        <p className={live ? "text-mute" : ""}>{t.previewBody}</p>
        <p className={live ? "" : "text-mute"}>{t.liveBody}</p>
      </div>
      <p className="mt-6 text-sm">
        <a href="https://vercel.com/docs" className="border-b border-ink">
          {t.docs}
        </a>
      </p>
      <p className="mt-8 max-w-2xl text-base leading-relaxed">{t.softLead}</p>
      <p className="mt-4">
        <Link href="/contact" className="border-b border-ink pb-1">
          {t.softCta}
        </Link>
      </p>
    </div>
  );
}

export function VercelBench({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [host, setHost] = useState<Host>("next");
  const [named, setNamed] = useState<Named>("catalogue");
  const next = host === "next";
  const bodies: Record<Named, string> = {
    catalogue: t.catalogueBody,
    studio: t.studioBody,
    client: t.clientBody,
  };

  return (
    <div className="mt-10 max-w-3xl">
      <div className="border border-line p-5 md:p-8">
        <p className="text-sm text-mute">{t.hostKicker}</p>
        <h3 className="display mt-3 max-w-[18ch] text-3xl">{t.hostTitle}</h3>
        <div className="mt-6 flex flex-wrap gap-3" role="group" aria-label={t.groupHost}>
          <Choice pressed={next} onClick={() => setHost("next")}>
            {t.next}
          </Choice>
          <Choice pressed={!next} onClick={() => setHost("wordpress")}>
            {t.wordpress}
          </Choice>
        </div>
        <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed" aria-live="polite">
          <p className={next ? "" : "text-mute"}>{t.nextBody}</p>
          <p className={next ? "text-mute" : ""}>{t.wordpressBody}</p>
        </div>
      </div>
      <div className="mt-6 border border-line p-5 md:p-8">
        <p className="text-sm text-mute">{t.namedKicker}</p>
        <h3 className="display mt-3 max-w-[16ch] text-3xl">{t.namedTitle}</h3>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">{t.namedNote}</p>
        <div className="mt-6 flex flex-wrap gap-3" role="group" aria-label={t.groupNamed}>
          <Choice pressed={named === "catalogue"} onClick={() => setNamed("catalogue")}>
            {t.catalogue}
          </Choice>
          <Choice pressed={named === "studio"} onClick={() => setNamed("studio")}>
            {t.studio}
          </Choice>
          <Choice pressed={named === "client"} onClick={() => setNamed("client")}>
            {t.client}
          </Choice>
        </div>
        <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed" aria-live="polite">
          {(["catalogue", "studio", "client"] as const).map((id) => (
            <p key={id} className={named === id ? "" : "text-mute"}>
              {bodies[id]}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-6 border border-line p-5 md:p-8">
        <h3 className="display max-w-[18ch] text-3xl">{t.ctaTitle}</h3>
        <p className="mt-6 max-w-2xl text-base leading-relaxed">{t.ctaBody}</p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed">{t.ctaNext}</p>
        <p className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          <Link href="/audit" className="border-b border-ink pb-1">
            {t.audit}
          </Link>
          <Link href="/contact" className="border-b border-ink pb-1">
            {t.contact}
          </Link>
        </p>
      </div>
    </div>
  );
}
