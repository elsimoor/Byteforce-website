"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

type Lang = "fr" | "en";
type Hold = "contract" | "drift";
type Loop = "closed" | "open";
type Look = "default" | "anchored";

const copy = {
  fr: {
    flowKicker: "Schéma",
    flowTitle: "Le contrat, ou la dérive",
    flowNote: "Illustration. Pas un logiciel livré, et pas une mesure de ce site.",
    contract: "Le contrat tient",
    drift: "Les invites dérivent",
    gesture: "Geste",
    page: "Contrat",
    dead: "Impasse",
    contractBody:
      "Une page nomme le geste, ce qui est lu, ce qui est écrit, et ce qui reste dehors. Le modèle s'arrête à cette page. L'écran en plus n'est pas généré.",
    driftBody:
      "Chaque invite ajoute un écran. Le geste se dédouble, un état casse, et un bouton ne ramène nulle part. L'impasse est dans le dessin.",
    softLead: "Le schéma montre le choix. Le message utile tient sur une page : le geste, et ce qui reste dehors.",
    softCta: "Décrire le geste",
    loopKicker: "Boucle",
    loopTitle: "Revenir à l'écoute",
    loopNote: "Exemple de plan de repas. Les quatre états sont dessinés. Ce n'est pas une application de Byte Force.",
    closed: "La boucle revient",
    open: "L'écran reste ouvert",
    listen: "Écoute",
    pick: "Choix",
    cook: "Plat",
    reset: "Retour",
    closedBody:
      "La voix note le frigo. Le tri propose les plats du stock. L'étape qui dure porte son minuteur. Terminer retire les aliments essentiels et revient à l'écoute.",
    openBody:
      "Sans retour, le plat s'ouvre et le stock ne bouge pas. La livraison, dessinée à côté, reste dehors : elle n'est pas dans la boucle.",
    lookKicker: "Tokens",
    lookTitle: "La largeur suit la marque",
    lookNote: "Deux plats d'exemple. Ce n'est pas la charte de byteforce.ma.",
    defaultLook: "Le premier jet",
    anchored: "La marque en tête",
    defaultBody:
      "La carte prend la largeur du titre. Le plat court et le plat long n'ont plus la même marge. Les pastilles se serrent.",
    anchoredBody:
      "La carte prend toute la largeur. Le titre s'aligne sur la marque, pas sur le nombre de lettres. Le filet reste fin.",
    docs: "Comment Apple décrit une interface",
    ctaTitle: "Décrire le geste",
    ctaBody:
      "Le message dit ce qui est lu, ce qui est écrit, et ce qui reste dehors. Pas de prix sur cette page. La réponse part sous un jour ouvré.",
    contact: "Écrire à Casablanca",
    groupFlow: "Contrat ou dérive",
    groupLoop: "Boucle ou écran ouvert",
    groupLook: "Premier jet ou marque",
  },
  en: {
    flowKicker: "Diagram",
    flowTitle: "The contract, or the drift",
    flowNote: "An illustration. Not delivered software, and not a measurement of this site.",
    contract: "The contract holds",
    drift: "The prompts drift",
    gesture: "Action",
    page: "Contract",
    dead: "Dead end",
    contractBody:
      "One page names the action, what is read, what is written, and what stays out. The model stops at that page. The extra screen is not generated.",
    driftBody:
      "Each prompt adds a screen. The action is duplicated, a state breaks, and a button leads nowhere. The dead end is in the drawing.",
    softLead: "The diagram shows the choice. The useful note fits on one page: the action, and what stays out.",
    softCta: "Describe the action",
    loopKicker: "Loop",
    loopTitle: "Back to listening",
    loopNote: "A meal-plan example. The four states are drawn. This is not a Byte Force application.",
    closed: "The loop returns",
    open: "The screen stays open",
    listen: "Listen",
    pick: "Choice",
    cook: "Dish",
    reset: "Return",
    closedBody:
      "Voice notes the fridge. The sort offers dishes from that stock. The step that takes time carries its timer. Finish removes the essential items and returns to listening.",
    openBody:
      "Without a return, the dish opens and the stock does not move. Delivery, drawn to the side, stays out: it is not in the loop.",
    lookKicker: "Tokens",
    lookTitle: "Width follows the mark",
    lookNote: "Two example dishes. This is not the byteforce.ma palette.",
    defaultLook: "The first draft",
    anchored: "The leading mark",
    defaultBody:
      "The card takes the width of the title. The short dish and the long dish no longer share a margin. The pills crowd.",
    anchoredBody:
      "The card takes the full width. The title aligns to the mark, not to the letter count. The divider stays thin.",
    docs: "How Apple describes an interface",
    ctaTitle: "Describe the action",
    ctaBody:
      "The note says what is read, what is written, and what stays out. No price on this page. A reply goes out within one business day.",
    contact: "Write to Casablanca",
    groupFlow: "Contract or drift",
    groupLoop: "Loop or open screen",
    groupLook: "First draft or mark",
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

export function ContratFlow({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [hold, setHold] = useState<Hold>("contract");
  const held = hold === "contract";

  return (
    <div className="mt-10 max-w-3xl border border-line p-5 md:p-8">
      <p className="text-sm text-mute">{t.flowKicker}</p>
      <h3 className="display mt-3 max-w-[16ch] text-3xl">{t.flowTitle}</h3>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">{t.flowNote}</p>
      <div className="mt-6 flex flex-wrap gap-3" role="group" aria-label={t.groupFlow}>
        <Choice pressed={held} onClick={() => setHold("contract")}>
          {t.contract}
        </Choice>
        <Choice pressed={!held} onClick={() => setHold("drift")}>
          {t.drift}
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
          strokeDasharray={held ? "5 6" : undefined}
          opacity={held ? 0.45 : 1}
        />
        <circle cx="80" cy="50" r="16" fill="var(--color-surface)" stroke="currentColor" />
        <circle cx="320" cy="50" r="16" fill="currentColor" stroke="currentColor" />
        <circle
          cx="560"
          cy="50"
          r="16"
          fill={held ? "var(--color-surface)" : "currentColor"}
          stroke="currentColor"
          opacity={held ? 0.45 : 1}
        />
        <circle
          r="5"
          cy="50"
          cx="96"
          fill="var(--color-surface)"
          stroke="currentColor"
          strokeWidth="2"
          className={held ? "lab-packet-stop" : "lab-packet-full"}
        />
      </svg>
      <div className="grid grid-cols-3 text-center text-sm">
        <span>{t.gesture}</span>
        <span>{t.page}</span>
        <span className={held ? "text-mute" : ""}>{t.dead}</span>
      </div>
      <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed" aria-live="polite">
        <p className={held ? "" : "text-mute"}>{t.contractBody}</p>
        <p className={held ? "text-mute" : ""}>{t.driftBody}</p>
      </div>
      <p className="mt-8 max-w-2xl text-base leading-relaxed">{t.softLead}</p>
      <p className="mt-4">
        <Link href="/contact" className="border-b border-ink pb-1">
          {t.softCta}
        </Link>
      </p>
    </div>
  );
}

export function ContratLoop({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [loop, setLoop] = useState<Loop>("closed");
  const closed = loop === "closed";

  return (
    <div className="mt-10 max-w-3xl border border-line p-5 md:p-8">
      <p className="text-sm text-mute">{t.loopKicker}</p>
      <h3 className="display mt-3 max-w-[16ch] text-3xl">{t.loopTitle}</h3>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">{t.loopNote}</p>
      <div className="mt-6 flex flex-wrap gap-3" role="group" aria-label={t.groupLoop}>
        <Choice pressed={closed} onClick={() => setLoop("closed")}>
          {t.closed}
        </Choice>
        <Choice pressed={!closed} onClick={() => setLoop("open")}>
          {t.open}
        </Choice>
      </div>
      <svg viewBox="0 0 640 120" className="mt-8 w-full text-ink" aria-hidden="true">
        <line x1="88" y1="36" x2="232" y2="36" stroke="currentColor" />
        <line x1="248" y1="36" x2="392" y2="36" stroke="currentColor" />
        <line
          x1="408"
          y1="36"
          x2="552"
          y2="36"
          stroke="currentColor"
          strokeDasharray={closed ? undefined : "5 6"}
          opacity={closed ? 1 : 0.45}
        />
        <path
          d="M560 52 C560 96 80 96 80 52"
          fill="none"
          stroke="currentColor"
          strokeDasharray={closed ? undefined : "5 6"}
          opacity={closed ? 1 : 0.35}
        />
        <circle cx="80" cy="36" r="14" fill="var(--color-surface)" stroke="currentColor" />
        <circle cx="240" cy="36" r="14" fill="var(--color-surface)" stroke="currentColor" />
        <circle cx="400" cy="36" r="14" fill={closed ? "currentColor" : "var(--color-surface)"} stroke="currentColor" />
        <circle
          cx="560"
          cy="36"
          r="14"
          fill={closed ? "currentColor" : "var(--color-surface)"}
          stroke="currentColor"
          opacity={closed ? 1 : 0.45}
        />
      </svg>
      <div className="grid grid-cols-4 text-center text-sm">
        <span>{t.listen}</span>
        <span>{t.pick}</span>
        <span>{t.cook}</span>
        <span className={closed ? "" : "text-mute"}>{t.reset}</span>
      </div>
      <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed" aria-live="polite">
        <p className={closed ? "" : "text-mute"}>{t.closedBody}</p>
        <p className={closed ? "text-mute" : ""}>{t.openBody}</p>
      </div>
    </div>
  );
}

export function ContratLook({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [look, setLook] = useState<Look>("anchored");
  const anchored = look === "anchored";

  return (
    <div className="mt-10 max-w-3xl border border-line p-5 md:p-8">
      <p className="text-sm text-mute">{t.lookKicker}</p>
      <h3 className="display mt-3 max-w-[16ch] text-3xl">{t.lookTitle}</h3>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">{t.lookNote}</p>
      <div className="mt-6 flex flex-wrap gap-3" role="group" aria-label={t.groupLook}>
        <Choice pressed={!anchored} onClick={() => setLook("default")}>
          {t.defaultLook}
        </Choice>
        <Choice pressed={anchored} onClick={() => setLook("anchored")}>
          {t.anchored}
        </Choice>
      </div>
      <svg viewBox="0 0 640 150" className="mt-8 w-full text-ink" aria-hidden="true">
        <rect
          x="24"
          y="16"
          width={anchored ? 592 : 220}
          height="52"
          fill={anchored ? "currentColor" : "var(--color-surface)"}
          stroke="currentColor"
        />
        <rect x="36" y="32" width="16" height="16" fill={anchored ? "var(--color-surface)" : "currentColor"} />
        <rect
          x="24"
          y="84"
          width={anchored ? 592 : 460}
          height="52"
          fill="var(--color-surface)"
          stroke="currentColor"
          opacity={anchored ? 1 : 0.85}
        />
        <rect x="36" y="100" width="16" height="16" fill="currentColor" />
      </svg>
      <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed" aria-live="polite">
        <p className={anchored ? "text-mute" : ""}>{t.defaultBody}</p>
        <p className={anchored ? "" : "text-mute"}>{t.anchoredBody}</p>
      </div>
      <p className="mt-6 text-sm">
        <a href="https://developer.apple.com/design/human-interface-guidelines/" className="border-b border-ink">
          {t.docs}
        </a>
      </p>
      <h3 className="display mt-10 max-w-[18ch] text-3xl">{t.ctaTitle}</h3>
      <p className="mt-4 max-w-2xl text-base leading-relaxed">{t.ctaBody}</p>
      <p className="mt-4">
        <Link href="/contact" className="border-b border-ink pb-1">
          {t.contact}
        </Link>
      </p>
    </div>
  );
}

export function ContratSlot({ heading, lang }: { heading: string; lang: Lang }) {
  if (heading === "Quand les invites remplacent le contrat" || heading === "When prompts replace the contract") {
    return <ContratFlow lang={lang} />;
  }
  if (heading === "La boucle qui revient au calme" || heading === "The loop that returns to the start") {
    return <ContratLoop lang={lang} />;
  }
  if (heading === "Les tokens avant les cartes" || heading === "Tokens before the cards") {
    return <ContratLook lang={lang} />;
  }
  return null;
}
