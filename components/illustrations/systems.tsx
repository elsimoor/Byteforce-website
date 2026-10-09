"use client";

import { useState } from "react";
import { Flow, HitPath, Node, Stage, markKey, svgProps } from "@/components/illustrations/ui";

const stay = "M 70 80 H 220";
const ship = "M 360 150 C 450 150, 490 70, 560 70";

export function Hote({ lang = "fr" }: { lang?: "fr" | "en" }) {
  const [app, setApp] = useState(false);
  const en = lang === "en";
  return (
    <Stage
      note={en ? "An illustration. Not a measurement of this site." : undefined}
      caption={
        app
          ? en
            ? "An application can follow the repository to the domain. The server city is not an argument."
            : "Une application peut suivre le dépôt jusqu'au domaine. La ville du serveur n'est pas un argument."
          : en
            ? "A site that still holds on its hosting is not moved to change a settings screen."
            : "Un site qui tient sur son hébergement ne se déplace pas pour changer d'écran de réglage."
      }
      href="/services/hebergement"
      link={en ? "See hosting" : "Voir l'hébergement"}
    >
      <svg {...svgProps(en ? "A site already hosted, or an application published from the repository" : "Site déjà hébergé, ou application publiée depuis le dépôt")}>
        <g opacity={app ? 0.35 : 1}>
          <path d="M70 150 L120 110 H210 L260 150 Z" fill="var(--color-surface)" stroke="currentColor" />
          <rect x="140" y="150" width="50" height="40" fill="var(--color-surface)" stroke="currentColor" />
          <HitPath d={stay} active={!app} label={en ? "Leave the site where it is" : "Laisser le site en place"} onSelect={() => setApp(false)} />
          <text x="150" y="214" textAnchor="middle" fontSize="12" fill="currentColor">
            {en ? "Already there" : "Déjà en place"}
          </text>
        </g>
        <g opacity={app ? 1 : 0.35}>
          <rect x="340" y="120" width="56" height="40" fill="var(--color-surface)" stroke="currentColor" />
          <text x="368" y="144" textAnchor="middle" fontSize="11" fill="currentColor">
            {en ? "Repo" : "Dépôt"}
          </text>
          <HitPath d={ship} active={app} label={en ? "Publish the application" : "Publier l'application"} onSelect={() => setApp(true)} />
          <Flow d={ship} active={app} />
          <Node x={575} y={70} on={app} label={en ? "Domain" : "Domaine"} />
        </g>
      </svg>
    </Stage>
  );
}

export function Langue() {
  const [french, setFrench] = useState(true);
  return (
    <Stage caption="Deux textes peuvent partager une adresse, comme un article et sa version anglaise. Ce n'est pas une règle pour tous les sites.">
      <svg {...svgProps("Une adresse, le français et l'anglais sur le même article")}>
        <rect x="150" y="28" width="340" height="36" fill="var(--color-surface)" stroke="currentColor" />
        <text x="320" y="51" textAnchor="middle" fontSize="13" fill="currentColor">
          /insights/exemple
        </text>
        <path d="M320 64 V96 M180 96 H460" fill="none" stroke="currentColor" />
        <g
          role="button"
          tabIndex={0}
          aria-pressed={french}
          aria-label="Texte français"
          onClick={() => setFrench(true)}
          onKeyDown={(event) => markKey(event, () => setFrench(true))}
          className="cursor-pointer"
          opacity={french ? 1 : 0.4}
        >
          <rect x="70" y="110" width="200" height="70" fill={french ? "currentColor" : "var(--color-surface)"} stroke="currentColor" />
          <text x="170" y="150" textAnchor="middle" fontSize="14" fill={french ? "var(--color-surface)" : "currentColor"}>
            Français
          </text>
        </g>
        <g
          role="button"
          tabIndex={0}
          aria-pressed={!french}
          aria-label="English text"
          onClick={() => setFrench(false)}
          onKeyDown={(event) => markKey(event, () => setFrench(false))}
          className="cursor-pointer"
          opacity={french ? 0.4 : 1}
        >
          <rect x="370" y="110" width="200" height="70" fill={!french ? "currentColor" : "var(--color-surface)"} stroke="currentColor" />
          <text x="470" y="150" textAnchor="middle" fontSize="14" fill={!french ? "var(--color-surface)" : "currentColor"}>
            English
          </text>
        </g>
      </svg>
    </Stage>
  );
}

const doors = [
  { id: "create", label: "Crée", text: "Cette personne ajoute un enregistrement. La porte est ouverte pour écrire." },
  { id: "read", label: "Lit", text: "Cette personne voit l'enregistrement. Elle ne le change pas." },
  { id: "stop", label: "N'entre pas", text: "Pas de porte. L'écran ne décide pas du droit. Il montre un refus déjà décidé." },
] as const;

export function Roles() {
  const [id, setId] = useState<(typeof doors)[number]["id"]>("create");
  const text = doors.find((door) => door.id === id)?.text ?? doors[0].text;
  return (
    <Stage caption={text}>
      <svg {...svgProps("Trois portes : créer, lire, refuser")}>
        {doors.map((door, index) => {
          const x = 70 + index * 190;
          const open = door.id === id;
          const swing = door.id === "create" ? 58 : door.id === "read" ? 28 : 0;
          return (
            <g
              key={door.id}
              role="button"
              tabIndex={0}
              aria-pressed={open}
              aria-label={door.label}
              onClick={() => setId(door.id)}
              onKeyDown={(event) => markKey(event, () => setId(door.id))}
              className="cursor-pointer"
            >
              <rect x={x} y="40" width="120" height="130" fill="var(--color-surface)" stroke="currentColor" />
              {door.id === "stop" ? (
                <path d={`M${x + 16} 70 H${x + 104} M${x + 16} 110 H${x + 104}`} stroke="currentColor" />
              ) : (
                <path d={`M${x + 8} 48 A${swing} ${swing} 0 0 1 ${x + 8 + swing} ${48 + swing}`} fill="none" stroke="currentColor" />
              )}
              <circle cx={x + 96} cy="108" r="3" fill="currentColor" />
              <text x={x + 60} y="196" textAnchor="middle" fontSize="12" fill="currentColor" opacity={open ? 1 : 0.4}>
                {door.label}
              </text>
            </g>
          );
        })}
      </svg>
    </Stage>
  );
}

const codes = [
  { id: "200", label: "200", text: "L'origine a répondu. Ce schéma ne donne aucun temps." },
  { id: "521", label: "521", text: "Le bord a joint l'origine, et rien n'a accepté la connexion." },
  { id: "522", label: "522", text: "La connexion vers l'origine a dépassé le délai." },
  { id: "525", label: "525", text: "La poignée TLS avec l'origine a échoué." },
  { id: "526", label: "526", text: "Le certificat de l'origine a été refusé." },
] as const;

export function Reponse() {
  const [id, setId] = useState<(typeof codes)[number]["id"]>("200");
  const current = codes.find((item) => item.id === id) ?? codes[0];
  return (
    <Stage caption={`${current.label}. ${current.text} Scénario, pas une mesure.`} href="/audit" link="Lire une page réelle">
      <svg {...svgProps("Codes HTTP 200, 521, 522, 525 et 526")}>
        <rect x="180" y="36" width="420" height="160" fill="var(--color-surface)" stroke="currentColor" />
        <text x="210" y="78" fontSize="13" fill="currentColor">
          GET /exemple
        </text>
        <text x="210" y="130" fontSize="42" fill="currentColor">
          {current.label}
        </text>
        {codes.map((item, index) => (
          <text
            key={item.id}
            x="48"
            y={58 + index * 28}
            fontSize="14"
            fill="currentColor"
            opacity={item.id === id ? 1 : 0.35}
            role="button"
            tabIndex={0}
            aria-pressed={item.id === id}
            aria-label={`Code ${item.label}`}
            onClick={() => setId(item.id)}
            onKeyDown={(event) => markKey(event, () => setId(item.id))}
            className="cursor-pointer"
          >
            {item.label}
          </text>
        ))}
      </svg>
    </Stage>
  );
}

const records = [
  { id: "a", type: "A", name: "exemple.ma", value: "203.0.113.10", can: true },
  { id: "cname", type: "CNAME", name: "www", value: "exemple.ma", can: true },
  { id: "mx", type: "MX", name: "exemple.ma", value: "10 mail.exemple.ma", can: false },
  { id: "txt", type: "TXT", name: "exemple.ma", value: "v=spf1 -all", can: false },
] as const;

export function Dns() {
  const [id, setId] = useState<(typeof records)[number]["id"]>("a");
  const [proxied, setProxied] = useState(true);
  const record = records.find((item) => item.id === id) ?? records[0];
  const on = record.can && proxied;
  const caption = !record.can
    ? record.id === "mx"
      ? "Le courrier ne passe pas par le proxy web. Un MX reste en DNS seulement."
      : "Un TXT reste en DNS seulement. Le proxy web ne répond pas à sa place."
    : on
      ? "Proxifié : le DNS public ne publie plus l'adresse d'origine. Un autre chemin peut encore la montrer."
      : "DNS seulement : le DNS public publie l'adresse. Le visiteur peut la joindre sans le proxy.";
  return (
    <Stage caption={`${caption} Zone d'exemple. 203.0.113.10 est réservée à la documentation.`} href="/contact" link="Décrire le domaine">
      <div className="max-w-xl border border-line">
        <p className="border-b border-line px-4 py-2 font-mono text-xs">$ORIGIN exemple.ma.</p>
        <ul>
          {records.map((item) => {
            const selected = item.id === id;
            return (
              <li key={item.id} className="grid grid-cols-[4.5rem_1fr_auto] items-center gap-3 border-b border-line px-4 py-3 last:border-b-0">
                <button
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setId(item.id)}
                  className={`text-left font-mono text-xs ${selected ? "" : "text-mute"}`}
                >
                  {item.type}
                  <span className="mt-1 block">{item.name}</span>
                </button>
                <span className={`break-all font-mono text-xs ${selected ? "" : "text-mute"}`}>
                  {item.can && on && selected ? "adresses du proxy" : item.value}
                </span>
                {item.can ? (
                  <button
                    type="button"
                    aria-pressed={selected && on}
                    aria-label={on && selected ? "Passer en DNS seulement" : "Proxifier"}
                    onClick={() => {
                      setId(item.id);
                      setProxied(selected ? !proxied : true);
                    }}
                    className="h-4 w-4 border border-ink"
                    style={{ background: selected && on ? "var(--color-ink)" : "transparent" }}
                  />
                ) : (
                  <span className="text-xs text-mute">DNS</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </Stage>
  );
}

const layerCopy = {
  fr: {
    screen: { label: "Écran", text: "L'écran montre le geste. Il ne décide ni du droit, ni du lieu de l'enregistrement." },
    server: { label: "Serveur", text: "Le serveur accepte ou refuse. L'écran affiche ensuite cette décision." },
    data: { label: "Données", text: "Les données sont l'enregistrement. Elles ne sont pas le nom du cadre." },
    title: "Trois couches : écran, serveur, données",
  },
  en: {
    screen: { label: "Screen", text: "The screen shows the action. It decides neither the right nor where the record lives." },
    server: { label: "Server", text: "The server accepts or refuses. The screen then shows that decision." },
    data: { label: "Data", text: "The data is the record. It is not the name of the frame." },
    title: "Three layers: screen, server, data",
  },
} as const;

export function Couches({ lang = "fr" }: { lang?: "fr" | "en" }) {
  const copy = layerCopy[lang];
  const layers = (["screen", "server", "data"] as const).map((id) => ({ id, ...copy[id] }));
  const [id, setId] = useState<(typeof layers)[number]["id"]>("screen");
  const text = layers.find((layer) => layer.id === id)?.text ?? layers[0].text;
  return (
    <Stage caption={text} note={lang === "en" ? "An illustration. Not a measurement of this site." : undefined}>
      <svg {...svgProps(copy.title)}>
        {layers.map((layer, index) => {
          const y = 36 + index * 48;
          const on = layer.id === id;
          return (
            <g
              key={layer.id}
              role="button"
              tabIndex={0}
              aria-pressed={on}
              aria-label={layer.label}
              onClick={() => setId(layer.id)}
              onKeyDown={(event) => markKey(event, () => setId(layer.id))}
              className="cursor-pointer"
              transform={`translate(80 ${y})`}
            >
              <path
                d="M40 28 L220 8 L520 8 L340 28 Z"
                fill={on ? "currentColor" : "var(--color-surface)"}
                stroke="currentColor"
                opacity={on ? 1 : 0.55}
              />
              <text x="270" y="22" textAnchor="middle" fontSize="13" fill={on ? "var(--color-surface)" : "currentColor"}>
                {layer.label}
              </text>
            </g>
          );
        })}
      </svg>
    </Stage>
  );
}

const befores = [
  { id: "hand", label: "Manuel", text: "Le geste est refait à la main. Rien n'est encore un produit." },
  { id: "many", label: "Outils séparés", text: "Le même geste traverse plusieurs outils. Chacun garde un morceau." },
  { id: "one", label: "Un produit", text: "Le geste a un écran et un enregistrement. Les outils d'avant ne sont plus le circuit." },
] as const;

export function Avant() {
  const [id, setId] = useState<(typeof befores)[number]["id"]>("many");
  const text = befores.find((item) => item.id === id)?.text ?? befores[0].text;
  return (
    <Stage caption={text} href="/developpement-logiciel-sur-mesure-maroc/automatisation" link="Voir l'automatisation">
      <svg {...svgProps("Travail manuel, outils séparés, ou un seul produit")}>
        {id === "hand" ? (
          <g>
            <path d="M80 70 C140 40, 160 110, 230 80" fill="none" stroke="currentColor" />
            <path d="M280 120 C340 70, 390 150, 460 100" fill="none" stroke="currentColor" />
            <path d="M120 150 C180 170, 200 140, 260 160" fill="none" stroke="currentColor" />
          </g>
        ) : null}
        {id === "many" ? (
          <g fill="var(--color-surface)" stroke="currentColor">
            <rect x="60" y="50" width="90" height="50" />
            <rect x="250" y="120" width="90" height="50" />
            <rect x="450" y="60" width="90" height="50" />
          </g>
        ) : null}
        {id === "one" ? (
          <g>
            <rect x="70" y="80" width="100" height="48" fill="currentColor" stroke="currentColor" />
            <path d="M170 104 H250" stroke="currentColor" className="flow" />
            <rect x="250" y="80" width="100" height="48" fill="var(--color-surface)" stroke="currentColor" />
            <path d="M350 104 H430" stroke="currentColor" className="flow" />
            <rect x="430" y="80" width="100" height="48" fill="var(--color-surface)" stroke="currentColor" />
          </g>
        ) : null}
        {befores.map((item, index) => (
          <text
            key={item.id}
            x={110 + index * 190}
            y="210"
            textAnchor="middle"
            fontSize="12"
            fill="currentColor"
            opacity={item.id === id ? 1 : 0.4}
            role="button"
            tabIndex={0}
            aria-pressed={item.id === id}
            aria-label={item.label}
            onClick={() => setId(item.id)}
            onKeyDown={(event) => markKey(event, () => setId(item.id))}
            className="cursor-pointer"
          >
            {item.label}
          </text>
        ))}
      </svg>
    </Stage>
  );
}
