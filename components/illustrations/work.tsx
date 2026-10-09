"use client";

import { useState } from "react";
import { Stage, markKey, svgProps } from "@/components/illustrations/ui";

const steps = [
  { label: "Découvrir", text: "On dit le geste, et ce qui existe déjà." },
  { label: "Dessiner", text: "L'écran suit le geste. Il ne le précède pas." },
  { label: "Construire", text: "Le dépôt porte l'écran et l'enregistrement." },
  { label: "Mettre en ligne", text: "Quelqu'un d'autre que l'auteur ouvre la version convenue." },
  { label: "Reprendre", text: "On corrige ce qui bloque après l'ouverture. Pas un pourcentage inventé." },
] as const;

export function Etapes() {
  const [index, setIndex] = useState(2);
  return (
    <Stage caption={`${steps[index].label}. ${steps[index].text}`}>
      <svg {...svgProps("Cinq temps : découvrir, dessiner, construire, mettre en ligne, reprendre")}>
        <line x1="48" y1="36" x2="48" y2="196" stroke="currentColor" strokeWidth="1" />
        <line x1="48" y1="36" x2="48" y2={36 + index * 40} stroke="currentColor" strokeWidth="3" />
        {steps.map((step, stepIndex) => (
          <g
            key={step.label}
            role="button"
            tabIndex={0}
            aria-pressed={stepIndex === index}
            aria-label={step.label}
            onClick={() => setIndex(stepIndex)}
            onKeyDown={(event) => markKey(event, () => setIndex(stepIndex))}
            className="cursor-pointer"
          >
            <circle cx="48" cy={36 + stepIndex * 40} r="7" fill={stepIndex <= index ? "currentColor" : "var(--color-surface)"} stroke="currentColor" />
            <text x="72" y={40 + stepIndex * 40} fontSize="14" fill="currentColor" opacity={stepIndex === index ? 1 : 0.4}>
              {step.label}
            </text>
          </g>
        ))}
      </svg>
    </Stage>
  );
}

const handed = [
  { id: "repo", label: "Dépôt", text: "Le dépôt remis est au client." },
  { id: "domain", label: "Domaine", text: "Le domaine remis s'ouvre au nom du client." },
  { id: "accounts", label: "Comptes", text: "Les comptes livrés reviennent au client." },
  { id: "note", label: "Note", text: "La note dit ce qui a été livré. Elle revient avec le reste." },
] as const;

export function Remise() {
  const [on, setOn] = useState<Record<string, boolean>>({ repo: true, domain: false, accounts: false, note: false });
  const caption = handed
    .filter((item) => on[item.id])
    .map((item) => item.text)
    .join(" ");
  return (
    <Stage caption={caption || "Rien n'a encore traversé. Cliquez un objet pour le remettre."} href="/contact" link="Décrire la remise">
      <svg {...svgProps("Remise du dépôt, du domaine, des comptes et de la note")}>
        <line x1="320" y1="20" x2="320" y2="200" stroke="currentColor" strokeDasharray="3 6" />
        <text x="160" y="28" textAnchor="middle" fontSize="12" fill="currentColor">
          Studio
        </text>
        <text x="480" y="28" textAnchor="middle" fontSize="12" fill="currentColor">
          Client
        </text>
        {handed.map((item, index) => {
          const given = on[item.id];
          const y = 52 + index * 36;
          return (
            <g
              key={item.id}
              role="button"
              tabIndex={0}
              aria-pressed={given}
              aria-label={`${given ? "Reprendre" : "Remettre"} ${item.label}`}
              onClick={() => setOn((current) => ({ ...current, [item.id]: !current[item.id] }))}
              onKeyDown={(event) => markKey(event, () => setOn((current) => ({ ...current, [item.id]: !current[item.id] })))}
              className="cursor-pointer"
              transform={`translate(${given ? 420 : 80} ${y})`}
            >
              <rect width="120" height="26" fill={given ? "currentColor" : "var(--color-surface)"} stroke="currentColor" />
              <text x="60" y="17" textAnchor="middle" fontSize="12" fill={given ? "var(--color-surface)" : "currentColor"}>
                {item.label}
              </text>
            </g>
          );
        })}
      </svg>
    </Stage>
  );
}

const nameCopy = {
  fr: {
    catalogue: { label: "Catalogue", aria: "Catalogue", text: "Un catalogue déjà en ligne peut être nommé, avec son adresse." },
    studio: { label: "Studio", aria: "Site du studio", text: "Le site du studio peut servir d'exemple de publication. Ce n'est pas un produit client." },
    client: { label: "Client", aria: "Produit client", text: "Un produit client a son domaine. Si sa page ne nomme pas l'hébergeur, on ne l'invente pas." },
    domain: "domaine",
    host: "hôte non nommé",
    title: "Ce qui peut être nommé : catalogue, site du studio, produit client",
  },
  en: {
    catalogue: { label: "Catalogue", aria: "Catalogue", text: "A catalogue already online can be named, with its address." },
    studio: { label: "Studio", aria: "Studio site", text: "The studio site can be an example of publishing. It is not a client product." },
    client: { label: "Client", aria: "Client product", text: "A client product has its domain. If its page does not name the host, the host is not invented." },
    domain: "domain",
    host: "host not named",
    title: "What can be named: catalogue, studio site, client product",
  },
} as const;

export function Nom({ lang = "fr" }: { lang?: "fr" | "en" }) {
  const copy = nameCopy[lang];
  const names = (["catalogue", "studio", "client"] as const).map((id) => ({ id, ...copy[id] }));
  const [id, setId] = useState<(typeof names)[number]["id"]>("client");
  const text = names.find((item) => item.id === id)?.text ?? names[0].text;
  return (
    <Stage caption={text} note={lang === "en" ? "An illustration. Not a measurement of this site." : undefined}>
      <svg {...svgProps(copy.title)}>
        <g
          role="button"
          tabIndex={0}
          aria-pressed={id === "catalogue"}
          aria-label={copy.catalogue.aria}
          opacity={id === "catalogue" ? 1 : 0.4}
          onClick={() => setId("catalogue")}
          onKeyDown={(event) => markKey(event, () => setId("catalogue"))}
          className="cursor-pointer"
        >
          {[0, 1, 2, 3].map((n) => (
            <rect key={n} x={40 + (n % 2) * 58} y={40 + Math.floor(n / 2) * 48} width="48" height="36" fill="var(--color-surface)" stroke="currentColor" />
          ))}
          <text x="98" y="160" textAnchor="middle" fontSize="12" fill="currentColor">
            {copy.catalogue.label}
          </text>
        </g>
        <g
          role="button"
          tabIndex={0}
          aria-pressed={id === "studio"}
          aria-label={copy.studio.aria}
          opacity={id === "studio" ? 1 : 0.4}
          onClick={() => setId("studio")}
          onKeyDown={(event) => markKey(event, () => setId("studio"))}
          className="cursor-pointer"
        >
          <rect x="230" y="40" width="160" height="100" fill="var(--color-surface)" stroke="currentColor" />
          <path d="M230 62 H390" stroke="currentColor" />
          <text x="310" y="160" textAnchor="middle" fontSize="12" fill="currentColor">
            {copy.studio.label}
          </text>
        </g>
        <g
          role="button"
          tabIndex={0}
          aria-pressed={id === "client"}
          aria-label={copy.client.aria}
          opacity={id === "client" ? 1 : 0.4}
          onClick={() => setId("client")}
          onKeyDown={(event) => markKey(event, () => setId("client"))}
          className="cursor-pointer"
        >
          <rect x="450" y="40" width="150" height="100" fill="var(--color-surface)" stroke="currentColor" />
          <text x="525" y="78" textAnchor="middle" fontSize="12" fill="currentColor">
            {copy.domain}
          </text>
          <path d="M475 96 H575" stroke="currentColor" />
          <text x="525" y="116" textAnchor="middle" fontSize="12" fill="currentColor">
            {copy.host}
          </text>
          <text x="525" y="160" textAnchor="middle" fontSize="12" fill="currentColor">
            {copy.client.label}
          </text>
        </g>
      </svg>
    </Stage>
  );
}

export function Envoi() {
  const [ready, setReady] = useState(false);
  return (
    <Stage caption={ready ? "La vérification est passée. L'envoi peut partir. Cet essai n'enregistre rien." : "Tant que la vérification n'est pas passée, l'envoi reste inactif. Essai local, pas le contrôle du site."}>
      <div className="max-w-sm">
        <p className="border-b border-line py-3 font-mono text-sm text-mute">nom@exemple.ma</p>
        <button
          type="button"
          aria-pressed={ready}
          onClick={() => setReady((value) => !value)}
          className="mt-6 flex items-center gap-3 text-left text-sm"
        >
          <svg viewBox="0 0 64 28" className="h-7 w-16 text-ink" aria-hidden="true">
            <rect x="1" y="1" width="62" height="26" fill="var(--color-surface)" stroke="currentColor" />
            <rect x={ready ? 34 : 4} y="4" width="26" height="20" fill="currentColor" />
          </svg>
          {ready ? "Vérification passée" : "Vérification fermée"}
        </button>
        <p className="mt-6">
          <button type="button" disabled={!ready} className="border-b border-ink pb-1 text-sm disabled:opacity-40">
            Envoyer
          </button>
        </p>
      </div>
    </Stage>
  );
}

const times = [
  { id: "in", label: "Reçu", text: "Le message est arrivé. Il contient le geste, et ce qui existe déjà." },
  { id: "note", label: "Noté", text: "La demande est dans le suivi. Elle n'est pas encore une réponse." },
  { id: "out", label: "Répondu", text: "La réponse part sous un jour ouvré, du lundi au vendredi, de 9h à 19h." },
] as const;

export function Delai() {
  const [id, setId] = useState<(typeof times)[number]["id"]>("in");
  const index = times.findIndex((item) => item.id === id);
  const text = times[index]?.text ?? times[0].text;
  return (
    <Stage caption={text}>
      <svg {...svgProps("Message reçu, noté, puis répondu")}>
        <path d="M80 120 H560" fill="none" stroke="currentColor" />
        {times.map((item, itemIndex) => {
          const x = 100 + itemIndex * 200;
          const on = itemIndex <= index;
          return (
            <g
              key={item.id}
              role="button"
              tabIndex={0}
              aria-pressed={item.id === id}
              aria-label={item.label}
              onClick={() => setId(item.id)}
              onKeyDown={(event) => markKey(event, () => setId(item.id))}
              className="cursor-pointer"
            >
              <rect x={x} y="64" width="88" height="52" fill={item.id === id ? "currentColor" : "var(--color-surface)"} stroke="currentColor" />
              <path d={`M${x} 64 L${x + 44} 90 L${x + 88} 64`} fill="none" stroke={item.id === id ? "var(--color-surface)" : "currentColor"} opacity={on ? 1 : 0.35} />
              <text x={x + 44} y="132" textAnchor="middle" fontSize="12" fill="currentColor" opacity={item.id === id ? 1 : 0.4}>
                {item.label}
              </text>
            </g>
          );
        })}
      </svg>
    </Stage>
  );
}

const scopes = [
  { id: "screens", label: "Écrans", count: 4, text: "Le travail change avec les écrans que l'équipe ouvre." },
  { id: "roles", label: "Rôles", count: 3, text: "Le travail change avec qui crée, qui lit, qui n'entre pas." },
  { id: "live", label: "Mise en ligne", count: 1, text: "Le travail change avec le jour où quelqu'un d'autre ouvre le produit." },
] as const;

export function Perimetre() {
  const [id, setId] = useState<(typeof scopes)[number]["id"]>("screens");
  const text = scopes.find((item) => item.id === id)?.text ?? scopes[0].text;
  return (
    <Stage caption={`${text} Pas de montant sur ce schéma.`} href="/contact" link="Décrire le projet">
      <svg {...svgProps("Le périmètre : écrans, rôles, mise en ligne")}>
        {scopes.map((item, index) => {
          const x = 50 + index * 200;
          const on = item.id === id;
          return (
            <g
              key={item.id}
              role="button"
              tabIndex={0}
              aria-pressed={on}
              aria-label={item.label}
              onClick={() => setId(item.id)}
              onKeyDown={(event) => markKey(event, () => setId(item.id))}
              className="cursor-pointer"
            >
              {Array.from({ length: item.count }, (_, mark) => (
                <rect
                  key={mark}
                  x={x + mark * 8}
                  y={150 - (on ? 28 + mark * 22 : 18)}
                  width={on ? 70 : 36}
                  height={on ? 22 : 14}
                  fill={on ? "currentColor" : "var(--color-surface)"}
                  stroke="currentColor"
                />
              ))}
              <text x={x + 40} y="186" textAnchor="middle" fontSize="12" fill="currentColor" opacity={on ? 1 : 0.4}>
                {item.label}
              </text>
            </g>
          );
        })}
      </svg>
    </Stage>
  );
}
