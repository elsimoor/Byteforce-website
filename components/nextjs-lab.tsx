"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

type Lang = "fr" | "en";
type Frame = "page" | "product";
type Theme = "holds" | "overflow";
type Product = "proche" | "coco" | "studio";

const copy = {
  fr: {
    flowKicker: "Schéma",
    flowTitle: "Page, ou produit",
    flowNote: "Illustration. Pas une mesure de ce site.",
    page: "Une page",
    product: "Un produit",
    visitor: "Visiteur",
    screen: "Écran",
    record: "Enregistrement",
    aside: "Ailleurs",
    pageBody:
      "La personne lit une page. Le travail — le fichier, la réservation, le message — vit autre part. Deux chantiers. Next.js n'est pas requis pour ça.",
    productBody:
      "L'écran et l'enregistrement partent du même dépôt. Une fiche, une recherche, une réservation, un message. C'est le cas nommé pour Proche de moi et pour Coco Inbox. Le cadre rend le métier ouvrable. Il ne le remplace pas.",
    docs: "Comment Next.js décrit le cadre",
    softLead: "Le schéma montre le choix. Le message utile dit le geste, et ce qui existe déjà.",
    softCta: "Décrire le produit",
    themeKicker: "Choix",
    themeTitle: "Le thème, ou le parcours",
    holds: "Le thème tient",
    overflow: "Le parcours déborde",
    holdsBody:
      "Le site explique et reçoit un message. On ne le réécrit pas pour changer de nom. Un plugin couvre le geste qui manque sur un site déjà en ligne.",
    overflowBody:
      "Des comptes, des rôles, ou un parcours ne tiennent plus dans le thème. Là, le cadre peut devenir Next.js. Le thème n'a pas échoué. Il a une limite.",
    besideKicker: "À côté",
    besideTitle: "Ce que Next.js ne porte pas",
    besideNote: "Exemples publics du studio. Pas un relevé de votre dépôt.",
    proche: "Proche de moi",
    coco: "Coco Inbox",
    studio: "Le site du studio",
    procheBody:
      "Next.js porte les écrans : fiches, recherche, réservation. Strapi porte le contenu. TypeScript est le code. Lille, en ligne depuis 2024. Aucun chiffre de trafic n'est promis.",
    cocoBody:
      "Next.js porte l'interface. Node.js, GraphQL et MongoDB sont nommés à part : email temporaire, fichiers chiffrés, notes. Montréal, depuis 2024.",
    studioBody:
      "Les pages, les articles et le formulaire sont dans le même cadre. Ce n'est pas un produit client. C'est le studio qui publie avec l'outil qu'il propose.",
    ctaTitle: "Lire une page, ou décrire le parcours",
    ctaBody: "L'audit gratuit lit une page réelle : titre, indexation, images, mobile. Il ne choisit pas le cadre.",
    ctaNext: "Le geste, et ce qui existe déjà, se disent à Casablanca.",
    audit: "Audit gratuit",
    contact: "Écrire à Casablanca",
    groupFlow: "Page ou produit",
    groupTheme: "Thème ou parcours",
    groupProduct: "Exemples publics",
  },
  en: {
    flowKicker: "Diagram",
    flowTitle: "Page, or product",
    flowNote: "An illustration. Not a measurement of this site.",
    page: "A page",
    product: "A product",
    visitor: "Visitor",
    screen: "Screen",
    record: "Record",
    aside: "Elsewhere",
    pageBody:
      "The person reads a page. The work — the file, the booking, the message — lives somewhere else. Two jobs. Next.js is not required for that.",
    productBody:
      "The screen and the record leave from the same repository. A listing, a search, a booking, a message. That is the case named for Proche de moi and for Coco Inbox. The frame makes the work openable. It does not replace it.",
    docs: "How Next.js describes the frame",
    softLead: "The diagram shows the choice. The useful note says the action, and what already exists.",
    softCta: "Describe the product",
    themeKicker: "Choice",
    themeTitle: "The theme, or the path",
    holds: "The theme holds",
    overflow: "The path spills",
    holdsBody:
      "The site explains and receives a message. It is not rewritten for a new name. A plugin covers the missing action on a site that is already online.",
    overflowBody:
      "Accounts, roles, or a path no longer fit the theme. There, the frame can become Next.js. The theme did not fail. It has a limit.",
    besideKicker: "Beside it",
    besideTitle: "What Next.js does not carry",
    besideNote: "Public examples from the studio. Not a reading of your repository.",
    proche: "Proche de moi",
    coco: "Coco Inbox",
    studio: "The studio site",
    procheBody:
      "Next.js carries the screens: listings, search, booking. Strapi carries the content. TypeScript is the code. Lille, online since 2024. No traffic figure is promised.",
    cocoBody:
      "Next.js carries the interface. Node.js, GraphQL and MongoDB are named apart: temporary email, encrypted files, notes. Montreal, since 2024.",
    studioBody:
      "The pages, the articles and the form are in the same frame. This is not a client product. It is the studio publishing with the tool it offers.",
    ctaTitle: "Read a page, or describe the path",
    ctaBody: "The free check reads a real page: title, indexation, images, mobile. It does not choose the frame.",
    ctaNext: "The action, and what already exists, are said in Casablanca.",
    audit: "Free check",
    contact: "Write to Casablanca",
    groupFlow: "Page or product",
    groupTheme: "Theme or path",
    groupProduct: "Public examples",
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

function Path({ on, left, mid, right }: { on: boolean; left: string; mid: string; right: string }) {
  return (
    <>
      <svg viewBox="0 0 640 100" className="mt-8 w-full text-ink" aria-hidden="true">
        <line x1="96" y1="50" x2="304" y2="50" stroke="currentColor" strokeWidth="1" />
        <line
          x1="336"
          y1="50"
          x2="544"
          y2="50"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray={on ? undefined : "5 6"}
          opacity={on ? 1 : 0.45}
        />
        <circle cx="80" cy="50" r="16" fill="var(--color-surface)" stroke="currentColor" />
        <circle cx="320" cy="50" r="16" fill="var(--color-surface)" stroke="currentColor" />
        <circle cx="560" cy="50" r="16" fill={on ? "currentColor" : "var(--color-surface)"} stroke="currentColor" opacity={on ? 1 : 0.45} />
        <circle
          r="5"
          cy="50"
          cx="96"
          fill="var(--color-surface)"
          stroke="currentColor"
          strokeWidth="2"
          className={on ? "lab-packet-full" : "lab-packet-stop"}
        />
      </svg>
      <div className="grid grid-cols-3 text-center text-sm">
        <span>{left}</span>
        <span>{mid}</span>
        <span className={on ? "" : "text-mute"}>{right}</span>
      </div>
    </>
  );
}

export function NextFlow({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [frame, setFrame] = useState<Frame>("product");
  const on = frame === "product";

  return (
    <div className="mt-10 max-w-3xl border border-line p-5 md:p-8">
      <p className="text-sm text-mute">{t.flowKicker}</p>
      <h3 className="display mt-3 max-w-[16ch] text-3xl">{t.flowTitle}</h3>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">{t.flowNote}</p>
      <div className="mt-6 flex flex-wrap gap-3" role="group" aria-label={t.groupFlow}>
        <Choice pressed={!on} onClick={() => setFrame("page")}>
          {t.page}
        </Choice>
        <Choice pressed={on} onClick={() => setFrame("product")}>
          {t.product}
        </Choice>
      </div>
      <Path on={on} left={t.visitor} mid={t.screen} right={on ? t.record : t.aside} />
      <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed" aria-live="polite">
        <p className={on ? "text-mute" : ""}>{t.pageBody}</p>
        <p className={on ? "" : "text-mute"}>{t.productBody}</p>
      </div>
      <p className="mt-6 text-sm">
        <a href="https://nextjs.org/docs" className="border-b border-ink">
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

export function NextBench({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [theme, setTheme] = useState<Theme>("holds");
  const [product, setProduct] = useState<Product>("proche");
  const holds = theme === "holds";
  const bodies: Record<Product, string> = { proche: t.procheBody, coco: t.cocoBody, studio: t.studioBody };

  return (
    <div className="mt-10 max-w-3xl">
      <div className="border border-line p-5 md:p-8">
        <p className="text-sm text-mute">{t.themeKicker}</p>
        <h3 className="display mt-3 max-w-[16ch] text-3xl">{t.themeTitle}</h3>
        <div className="mt-6 flex flex-wrap gap-3" role="group" aria-label={t.groupTheme}>
          <Choice pressed={holds} onClick={() => setTheme("holds")}>
            {t.holds}
          </Choice>
          <Choice pressed={!holds} onClick={() => setTheme("overflow")}>
            {t.overflow}
          </Choice>
        </div>
        <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed" aria-live="polite">
          <p className={holds ? "" : "text-mute"}>{t.holdsBody}</p>
          <p className={holds ? "text-mute" : ""}>{t.overflowBody}</p>
        </div>
      </div>
      <div className="mt-6 border border-line p-5 md:p-8">
        <p className="text-sm text-mute">{t.besideKicker}</p>
        <h3 className="display mt-3 max-w-[16ch] text-3xl">{t.besideTitle}</h3>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">{t.besideNote}</p>
        <div className="mt-6 flex flex-wrap gap-3" role="group" aria-label={t.groupProduct}>
          <Choice pressed={product === "proche"} onClick={() => setProduct("proche")}>
            {t.proche}
          </Choice>
          <Choice pressed={product === "coco"} onClick={() => setProduct("coco")}>
            {t.coco}
          </Choice>
          <Choice pressed={product === "studio"} onClick={() => setProduct("studio")}>
            {t.studio}
          </Choice>
        </div>
        <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed" aria-live="polite">
          {(["proche", "coco", "studio"] as const).map((id) => (
            <p key={id} className={product === id ? "" : "text-mute"}>
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
