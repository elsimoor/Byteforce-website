"use client";

import { useState } from "react";
import { Flow, HitPath, Node, Stage, svgProps } from "@/components/illustrations/ui";

const direct = "M 70 150 C 180 150, 280 52, 500 52";
const proxied = "M 70 150 C 160 150, 210 188, 300 188 C 400 188, 450 52, 500 52";

export function Chemin() {
  const [via, setVia] = useState(true);
  return (
    <Stage
      caption={
        via
          ? "La requête passe par le proxy, puis l'origine n'est appelée que si la réponse n'y est pas. Le proxy ne devient pas le produit. Scénario, pas un test du réseau."
          : "Le visiteur joint l'origine. Pas de cache ni de filtrage sur ce chemin. Scénario, pas un test du réseau."
      }
      href="/audit"
      link="Lire une page réelle"
    >
      <svg {...svgProps("Deux chemins : direct, ou à travers un proxy")}>
        <HitPath d={direct} active={!via} label="Connexion directe" onSelect={() => setVia(false)} />
        <HitPath d={proxied} active={via} label="À travers le proxy" onSelect={() => setVia(true)} />
        <Flow d={via ? proxied : direct} active />
        <Node x={56} y={150} label="Visiteur" />
        <Node x={300} y={188} on={via} label={via ? "Proxy" : "Hors chemin"} />
        <Node x={520} y={52} label="Origine" />
      </svg>
    </Stage>
  );
}

const branch = "M 80 150 C 180 150, 200 70, 320 70";
const main = "M 80 150 L 560 150";
const merge = "M 320 70 C 420 70, 460 150, 560 150";

export function Depot({ lang = "fr" }: { lang?: "fr" | "en" }) {
  const [live, setLive] = useState(false);
  const en = lang === "en";
  return (
    <Stage
      note={en ? "An illustration. Not a measurement of this site." : undefined}
      caption={
        live
          ? en
            ? "The agreed version is on the domain. Publishing opens that version. It is not the trade."
            : "La version convenue est sur le domaine. La publication ouvre cette version. Elle ne fait pas le métier."
          : en
            ? "The branch steps aside to be reread. This preview is not the name clients know."
            : "La branche s'écarte pour être relue. Cet aperçu n'est pas le nom que les clients connaissent."
      }
    >
      <svg {...svgProps(en ? "Preview branch, or the agreed version on the domain" : "Branche d'aperçu, ou domaine de la version convenue")}>
        <path d={main} fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity={live ? 1 : 0.35} />
        <HitPath d={branch} active={!live} label={en ? "Branch preview" : "Aperçu de branche"} onSelect={() => setLive(false)} />
        <HitPath d={merge} active={live} label={en ? "Version on the domain" : "Version sur le domaine"} onSelect={() => setLive(true)} />
        <Flow d={live ? merge : branch} active />
        <Node x={80} y={150} label={en ? "Repository" : "Dépôt"} />
        <Node x={320} y={70} on={!live} label={en ? "Preview" : "Aperçu"} />
        <Node x={560} y={150} on={live} label={en ? "Domain" : "Domaine"} />
      </svg>
    </Stage>
  );
}

export function Ecran({ lang = "fr" }: { lang?: "fr" | "en" }) {
  const [product, setProduct] = useState(true);
  const en = lang === "en";
  return (
    <Stage
      note={en ? "An illustration. Not a measurement of this site." : undefined}
      caption={
        product
          ? en
            ? "The screen, the logic and the record leave from the same repository. The frame makes the action openable. It does not replace it."
            : "L'écran, la logique et l'enregistrement partent du même dépôt. Le cadre rend le geste ouvrable. Il ne le remplace pas."
          : en
            ? "The page is read. The file, the booking or the message lives somewhere else."
            : "La page se lit. Le fichier, la réservation ou le message vit autre part."
      }
      href="/contact"
      link={en ? "Describe the product" : "Décrire le produit"}
    >
      <svg {...svgProps(en ? "A page alone, or a product tied to its records" : "Une page seule, ou un produit relié à ses enregistrements")}>
        <g
          role="button"
          tabIndex={0}
          aria-pressed={!product}
          aria-label={en ? "A page" : "Une page"}
          onClick={() => setProduct(false)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setProduct(false);
            }
          }}
          className="cursor-pointer"
        >
          <rect x="36" y="36" width="210" height="140" fill="var(--color-surface)" stroke="currentColor" />
          <path d="M36 58 H246" stroke="currentColor" />
          <circle cx="52" cy="47" r="3" fill="currentColor" />
          <circle cx="66" cy="47" r="3" fill="currentColor" />
          <path d="M52 84 H210 M52 104 H180 M52 124 H196" stroke="currentColor" strokeOpacity="0.7" />
          <text x="141" y="200" textAnchor="middle" fontSize="12" fill="currentColor">
            {en ? "Page" : "Page"}
          </text>
        </g>
        <path
          d="M246 90 C 300 90, 320 70, 360 70"
          fill="none"
          stroke="currentColor"
          strokeDasharray={product ? undefined : "4 6"}
          strokeOpacity={product ? 1 : 0.35}
        />
        <path
          d="M246 120 C 310 120, 330 160, 360 160"
          fill="none"
          stroke="currentColor"
          strokeDasharray={product ? undefined : "4 6"}
          strokeOpacity={product ? 1 : 0.35}
        />
        <g
          role="button"
          tabIndex={0}
          aria-pressed={product}
          aria-label={en ? "A product" : "Un produit"}
          onClick={() => setProduct(true)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setProduct(true);
            }
          }}
          className="cursor-pointer"
          opacity={product ? 1 : 0.4}
        >
          <rect x="360" y="40" width="120" height="56" fill={product ? "currentColor" : "var(--color-surface)"} stroke="currentColor" />
          <text x="420" y="73" textAnchor="middle" fontSize="12" fill={product ? "var(--color-surface)" : "currentColor"}>
            {en ? "Logic" : "Logique"}
          </text>
          <rect x="376" y="132" width="200" height="18" fill="var(--color-surface)" stroke="currentColor" />
          <rect x="388" y="154" width="188" height="18" fill="var(--color-surface)" stroke="currentColor" />
          <text x="470" y="198" textAnchor="middle" fontSize="12" fill="currentColor">
            {en ? "Records" : "Enregistrements"}
          </text>
        </g>
      </svg>
    </Stage>
  );
}

export function Cle() {
  const [client, setClient] = useState(true);
  return (
    <Stage
      caption={
        client
          ? "Le compte qui ouvre est au client. Le studio ne garde pas la seule clé."
          : "Une seule clé reste au studio. Le client ne peut pas ouvrir le compte. Ce n'est pas une remise."
      }
      href="/contact"
      link="Décrire la remise"
    >
      <svg {...svgProps("La clé du compte, côté studio ou côté client")}>
        <line x1="320" y1="24" x2="320" y2="190" stroke="currentColor" strokeDasharray="3 6" />
        <text x="160" y="36" textAnchor="middle" fontSize="12" fill="currentColor">
          Studio
        </text>
        <text x="480" y="36" textAnchor="middle" fontSize="12" fill="currentColor">
          Client
        </text>
        <rect
          x="40"
          y="50"
          width="250"
          height="130"
          fill="transparent"
          role="button"
          tabIndex={0}
          aria-pressed={!client}
          aria-label="La clé reste au studio"
          onClick={() => setClient(false)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setClient(false);
            }
          }}
          className="cursor-pointer"
        />
        <rect
          x="350"
          y="50"
          width="250"
          height="130"
          fill="transparent"
          role="button"
          tabIndex={0}
          aria-pressed={client}
          aria-label="La clé est au client"
          onClick={() => setClient(true)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setClient(true);
            }
          }}
          className="cursor-pointer"
        />
        <g transform={client ? "translate(430 96)" : "translate(110 96)"}>
          <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="16" cy="16" r="4" fill="currentColor" />
          <path d="M30 16 H68 M58 16 V26 M68 16 V28" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </g>
      </svg>
    </Stage>
  );
}

export function Theme({ lang = "fr" }: { lang?: "fr" | "en" }) {
  const [holds, setHolds] = useState(true);
  const en = lang === "en";
  return (
    <Stage
      note={en ? "An illustration. Not a measurement of this site." : undefined}
      caption={
        holds
          ? en
            ? "The site explains and receives a message. It is not rewritten for a new name."
            : "Le site explique et reçoit un message. On ne le réécrit pas pour changer de nom."
          : en
            ? "Accounts, roles, or a path no longer fit the page. The page did not fail. It has a limit."
            : "Des comptes, des rôles, ou un parcours ne tiennent plus dans la page. La page n'a pas échoué. Elle a une limite."
      }
      href={holds ? undefined : "/developpement-logiciel-sur-mesure-maroc/automatisation"}
      link={holds ? undefined : en ? "See the automation" : "Voir l'automatisation"}
    >
      <svg {...svgProps(en ? "A content site, or a path that no longer fits the page" : "Un site de contenu, ou un parcours qui ne tient plus dans la page")}>
        <g
          role="button"
          tabIndex={0}
          aria-pressed={holds}
          aria-label={en ? "The site still holds" : "Le site tient"}
          opacity={holds ? 1 : 0.35}
          onClick={() => setHolds(true)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setHolds(true);
            }
          }}
          className="cursor-pointer"
        >
          <rect x="28" y="28" width="200" height="160" fill="var(--color-surface)" stroke="currentColor" />
          <path d="M48 64 H190 M48 88 H160 M48 112 H176 M48 136 H140" stroke="currentColor" />
          <text x="128" y="214" textAnchor="middle" fontSize="12" fill="currentColor">
            {en ? "Site" : "Site"}
          </text>
        </g>
        <g
          role="button"
          tabIndex={0}
          aria-pressed={!holds}
          aria-label={en ? "The path no longer fits" : "Le parcours déborde"}
          opacity={holds ? 0.35 : 1}
          onClick={() => setHolds(false)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setHolds(false);
            }
          }}
          className="cursor-pointer"
        >
          <path d="M300 70 H390 M390 70 V130 H470 M470 130 H560" fill="none" stroke="currentColor" />
          <rect x="280" y="48" width="70" height="36" fill={!holds ? "currentColor" : "var(--color-surface)"} stroke="currentColor" />
          <rect x="360" y="112" width="70" height="36" fill="var(--color-surface)" stroke="currentColor" />
          <rect x="500" y="112" width="70" height="36" fill="var(--color-surface)" stroke="currentColor" />
          <text x="430" y="214" textAnchor="middle" fontSize="12" fill="currentColor">
            {en ? "Path" : "Parcours"}
          </text>
        </g>
      </svg>
    </Stage>
  );
}

const toEdge = "M 90 120 C 180 120, 220 80, 280 80";
const toOrigin = "M 340 80 C 420 80, 470 140, 540 140";

export function Certificat() {
  const [edge, setEdge] = useState(true);
  return (
    <Stage
      caption={
        edge
          ? "Le visiteur peut voir le certificat du bord. L'origine garde le sien pour parler au bord. L'un ne remplace pas l'autre."
          : "Le visiteur parle à l'origine. Le certificat est celui du serveur."
      }
      href="/audit"
      link="Lire une page réelle"
    >
      <svg {...svgProps("Certificat vu par le visiteur : bord, ou origine")}>
        <HitPath d={toEdge} active={edge} label="Certificat du bord" onSelect={() => setEdge(true)} />
        <HitPath d={toOrigin} active={!edge} label="Certificat de l'origine" onSelect={() => setEdge(false)} />
        <Flow d={edge ? toEdge : toOrigin} active />
        <Node x={70} y={120} label="Visiteur" />
        <Node x={310} y={80} on={edge} label="Bord" />
        <Node x={560} y={140} on={!edge} label="Origine" />
        <g transform={edge ? "translate(168 78)" : "translate(430 96)"}>
          <rect x="0" y="8" width="16" height="12" fill="var(--color-surface)" stroke="currentColor" />
          <path d="M3 8 V5 a5 5 0 0 1 10 0 V8" fill="none" stroke="currentColor" />
        </g>
      </svg>
    </Stage>
  );
}

const hitBack = "M 250 110 C 180 110, 140 70, 90 70";
const missOut = "M 300 120 C 380 120, 430 150, 520 150";

export function Cache() {
  const [hit, setHit] = useState(true);
  return (
    <Stage
      caption={
        hit
          ? "La ressource est en cache. Cette réponse n'appelle pas l'origine. Une page différente pour chaque visiteur reste souvent dynamique. Scénario, pas une mesure."
          : "Rien de frais en cache. L'origine est appelée. La réponse n'est gardée que si ses en-têtes l'autorisent. Scénario, pas une mesure."
      }
    >
      <svg {...svgProps("Réponse servie par le cache, ou cherchée à l'origine")}>
        <ellipse cx="270" cy="96" rx="54" ry="16" fill="var(--color-surface)" stroke="currentColor" />
        <path d="M216 96 V150 A54 16 0 0 0 324 150 V96" fill="var(--color-surface)" stroke="currentColor" />
        <ellipse cx="270" cy="150" rx="54" ry="16" fill="none" stroke="currentColor" />
        <text x="270" y="188" textAnchor="middle" fontSize="12" fill="currentColor">
          Cache
        </text>
        <HitPath d={hitBack} active={hit} label="Cache hit" onSelect={() => setHit(true)} />
        <HitPath d={missOut} active={!hit} label="Cache miss" onSelect={() => setHit(false)} />
        <Flow d={hit ? hitBack : missOut} active />
        <Node x={70} y={70} label="Visiteur" />
        <Node x={540} y={150} on={!hit} label="Origine" />
        <text x="150" y="48" fontSize="12" fill="currentColor">
          {hit ? "HIT" : "MISS"}
        </text>
      </svg>
    </Stage>
  );
}
