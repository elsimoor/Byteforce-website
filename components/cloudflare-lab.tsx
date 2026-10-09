"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

type Lang = "fr" | "en";
type Mode = "direct" | "proxy";
type RecordId = "a" | "cname" | "mx" | "txt";
type SceneId = "hit" | "miss" | "521" | "522" | "525" | "526";

const records: { id: RecordId; type: string; host: string; value: string; canProxy: boolean }[] = [
  { id: "a", type: "A", host: "exemple.ma", value: "203.0.113.10", canProxy: true },
  { id: "cname", type: "CNAME", host: "www", value: "exemple.ma", canProxy: true },
  { id: "mx", type: "MX", host: "exemple.ma", value: "10 mail.exemple.ma", canProxy: false },
  { id: "txt", type: "TXT", host: "exemple.ma", value: "v=spf1 include:_spf.exemple.ma -all", canProxy: false },
];

const scenes: SceneId[] = ["hit", "miss", "521", "522", "525", "526"];

const copy = {
  fr: {
    flowKicker: "Schéma",
    flowTitle: "Le chemin d'une requête",
    flowNote: "Illustration. Pas un test du réseau, et pas une mesure de ce site.",
    direct: "Connexion directe",
    proxy: "À travers Cloudflare",
    visitor: "Visiteur",
    edge: "Cloudflare",
    origin: "Origine",
    aside: "Hors chemin",
    directBody:
      "Le visiteur joint l'origine. Le DNS public peut publier l'adresse du serveur. Sur ce chemin, pas de cache, pas de filtrage, et le certificat est celui de l'origine.",
    proxyBody:
      "La requête s'arrête d'abord au proxy. L'origine n'est appelée que si la réponse n'est pas déjà en cache. Pour un enregistrement proxifié, le DNS public répond avec les adresses de Cloudflare, pas avec l'origine. Le certificat vu par le visiteur peut être celui du proxy. Cela ne garantit pas que l'origine reste introuvable : un sous-domaine laissé en DNS seulement, un ancien enregistrement, ou un autre service peuvent encore la montrer.",
    docs: "Comment Cloudflare décrit le proxy",
    softLead: "Le schéma montre le choix. Le message utile donne le domaine et l'endroit où le site tourne.",
    softCta: "Décrire le domaine",
    dnsKicker: "DNS",
    dnsTitle: "Un enregistrement, deux choix",
    dnsNote:
      "Zone d'exemple, exemple.ma. L'adresse 203.0.113.10 est réservée à la documentation. Ce n'est pas la zone de byteforce.ma.",
    proxied: "Proxifié",
    dnsOnly: "DNS seulement",
    locked: "Cet enregistrement reste en DNS seulement.",
    probeKicker: "Scénario",
    probeTitle: "Ce que le code HTTP raconte",
    probeNote: "Réponses possibles du proxy. Aucune n'est une mesure de byteforce.ma.",
    code: "Code",
    cache: "cf-cache-status",
    originWord: "Origine",
    readings: "Les six lectures",
    codesDocs: "Codes 5xx de Cloudflare",
    ctaTitle: "Lire une page, ou décrire le domaine",
    ctaBody:
      "L'audit gratuit lit une page réelle : titre, indexation, images, mobile. Il n'ouvre pas le compte DNS.",
    ctaNext: "Le domaine, l'endroit où le site tourne, et ce qui bloque se disent à Casablanca.",
    audit: "Audit gratuit",
    contact: "Écrire à Casablanca",
    groupFlow: "Chemin de la requête",
    groupDns: "Enregistrements d'exemple",
    groupProxy: "Mode de l'enregistrement",
    groupScene: "Scénarios",
  },
  en: {
    flowKicker: "Diagram",
    flowTitle: "The path of a request",
    flowNote: "An illustration. Not a network test, and not a measurement of this site.",
    direct: "Direct connection",
    proxy: "Through Cloudflare",
    visitor: "Visitor",
    edge: "Cloudflare",
    origin: "Origin",
    aside: "Off the path",
    directBody:
      "The visitor reaches the origin. Public DNS can publish the server address. On this path there is no cache, no filtering, and the certificate is the origin's.",
    proxyBody:
      "The request stops at the proxy first. The origin is called only when the response is not already cached. For a proxied record, public DNS answers with Cloudflare addresses, not the origin. The certificate the visitor sees can be the proxy's. That does not guarantee the origin stays undiscoverable: a subdomain left DNS-only, an old record, or another service can still show it.",
    docs: "How Cloudflare describes the proxy",
    softLead: "The diagram shows the choice. The useful note gives the domain and where the site runs.",
    softCta: "Describe the domain",
    dnsKicker: "DNS",
    dnsTitle: "One record, two choices",
    dnsNote: "Example zone, exemple.ma. The address 203.0.113.10 is reserved for documentation. This is not the byteforce.ma zone.",
    proxied: "Proxied",
    dnsOnly: "DNS only",
    locked: "This record stays DNS only.",
    probeKicker: "Scenario",
    probeTitle: "What the HTTP code says",
    probeNote: "Possible proxy responses. None of them is a measurement of byteforce.ma.",
    code: "Code",
    cache: "cf-cache-status",
    originWord: "Origin",
    readings: "The six readings",
    codesDocs: "Cloudflare 5xx codes",
    ctaTitle: "Read a page, or describe the domain",
    ctaBody: "The free check reads a real page: title, indexation, images, mobile. It does not open the DNS account.",
    ctaNext: "The domain, where the site runs, and what is blocked are said in Casablanca.",
    audit: "Free check",
    contact: "Write to Casablanca",
    groupFlow: "Request path",
    groupDns: "Example records",
    groupProxy: "Record mode",
    groupScene: "Scenarios",
  },
} as const;

const dnsBody: Record<Lang, Record<RecordId, { on: string; off: string }>> = {
  fr: {
    a: {
      on: "Proxifié : le DNS public ne publie plus 203.0.113.10. Il publie des adresses du proxy. L'origine reste celle que le compte connaît. Masquer l'adresse dans la réponse DNS ne promet pas qu'aucun autre chemin ne la montre.",
      off: "DNS seulement : le DNS public publie 203.0.113.10. Le visiteur peut joindre cette adresse sans le proxy. Cet enregistrement n'a ni le cache ni le filtrage de Cloudflare.",
    },
    cname: {
      on: "www est proxifié. Sa réponse DNS ne donne pas l'adresse d'origine. Le visiteur de www passe par le proxy.",
      off: "www n'est pas proxifié. Le résolveur suit le CNAME. Si la cible publie l'adresse d'origine, www la publie aussi.",
    },
    mx: {
      on: "Le courrier ne passe pas par le proxy web. Un MX reste en DNS seulement, ici vers mail.exemple.ma. Cloudflare ne proxifie pas ce type : le courrier doit joindre le serveur de mail.",
      off: "Le courrier ne passe pas par le proxy web. Un MX reste en DNS seulement, ici vers mail.exemple.ma. Cloudflare ne proxifie pas ce type : le courrier doit joindre le serveur de mail.",
    },
    txt: {
      on: "Ce TXT est un SPF d'exemple. Il reste en DNS seulement. Le proxy web ne répond pas à la place d'un enregistrement TXT.",
      off: "Ce TXT est un SPF d'exemple. Il reste en DNS seulement. Le proxy web ne répond pas à la place d'un enregistrement TXT.",
    },
  },
  en: {
    a: {
      on: "Proxied: public DNS no longer publishes 203.0.113.10. It publishes proxy addresses. The origin stays the one the account knows. Hiding the address in the DNS answer does not promise that no other path can show it.",
      off: "DNS only: public DNS publishes 203.0.113.10. A visitor can reach that address without the proxy. This record has neither Cloudflare's cache nor its filtering.",
    },
    cname: {
      on: "www is proxied. Its DNS answer does not give the origin address. A visitor to www goes through the proxy.",
      off: "www is not proxied. The resolver follows the CNAME. If the target publishes the origin address, www publishes it too.",
    },
    mx: {
      on: "Mail does not go through the web proxy. An MX stays DNS only, here toward mail.exemple.ma. Cloudflare does not proxy this type: mail has to reach the mail server.",
      off: "Mail does not go through the web proxy. An MX stays DNS only, here toward mail.exemple.ma. Cloudflare does not proxy this type: mail has to reach the mail server.",
    },
    txt: {
      on: "This TXT is an example SPF. It stays DNS only. The web proxy does not answer in place of a TXT record.",
      off: "This TXT is an example SPF. It stays DNS only. The web proxy does not answer in place of a TXT record.",
    },
  },
};

const sceneCopy: Record<
  Lang,
  Record<SceneId, { label: string; status: string; cache: string; origin: string; body: string }>
> = {
  fr: {
    hit: {
      label: "Cache hit",
      status: "200",
      cache: "HIT",
      origin: "Pas appelée pour cette réponse.",
      body: "La ressource est en cache au proxy. Cette réponse n'a pas besoin de l'origine. Tout ne se cache pas : une page différente pour chaque visiteur reste souvent dynamique.",
    },
    miss: {
      label: "Cache miss",
      status: "200",
      cache: "MISS",
      origin: "Appelée. La réponse peut être gardée si les en-têtes d'origine l'autorisent.",
      body: "Rien de frais en cache. Le proxy va chercher la réponse à l'origine, puis ne la garde que si les en-têtes d'origine le permettent.",
    },
    "521": {
      label: "521",
      status: "521",
      cache: "—",
      origin: "Connexion refusée.",
      body: "Le proxy a joint l'adresse d'origine, et rien n'a accepté la connexion. Le serveur web est arrêté, ou il n'écoute pas le port attendu.",
    },
    "522": {
      label: "522",
      status: "522",
      cache: "—",
      origin: "Délai de connexion dépassé.",
      body: "La connexion vers l'origine n'a pas abouti dans le délai. Le serveur met trop longtemps à accepter, ou un pare-feu laisse tomber les paquets du proxy.",
    },
    "525": {
      label: "525",
      status: "525",
      cache: "—",
      origin: "Poignée TLS échouée.",
      body: "Le proxy n'a pas pu négocier TLS avec l'origine. Le mode SSL du compte et le certificat du serveur ne s'accordent pas.",
    },
    "526": {
      label: "526",
      status: "526",
      cache: "—",
      origin: "Certificat d'origine refusé.",
      body: "Le proxy a refusé le certificat de l'origine : mauvais nom, certificat expiré, ou autorité non reconnue. Cela arrive quand le compte exige un certificat valide sur l'origine.",
    },
  },
  en: {
    hit: {
      label: "Cache hit",
      status: "200",
      cache: "HIT",
      origin: "Not called for this response.",
      body: "The resource is in the proxy cache. This response does not need the origin. Not everything is cached: a page that differs per visitor often stays dynamic.",
    },
    miss: {
      label: "Cache miss",
      status: "200",
      cache: "MISS",
      origin: "Called. The response can be kept if the origin headers allow it.",
      body: "Nothing fresh is in cache. The proxy fetches the response from the origin, then keeps it only if the origin headers allow it.",
    },
    "521": {
      label: "521",
      status: "521",
      cache: "—",
      origin: "Connection refused.",
      body: "The proxy reached the origin address, and nothing accepted the connection. The web server is down, or it is not listening on the expected port.",
    },
    "522": {
      label: "522",
      status: "522",
      cache: "—",
      origin: "Connection timed out.",
      body: "The connection to the origin did not complete in time. The server is too slow to accept, or a firewall drops the proxy's packets.",
    },
    "525": {
      label: "525",
      status: "525",
      cache: "—",
      origin: "TLS handshake failed.",
      body: "The proxy could not negotiate TLS with the origin. The account's SSL mode and the server certificate do not agree.",
    },
    "526": {
      label: "526",
      status: "526",
      cache: "—",
      origin: "Origin certificate refused.",
      body: "The proxy refused the origin certificate: wrong name, expired certificate, or an unrecognized authority. This happens when the account requires a valid certificate on the origin.",
    },
  },
};

function Choice({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
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

export function CloudflareFlow({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [mode, setMode] = useState<Mode>("proxy");
  const proxied = mode === "proxy";

  return (
    <div className="mt-10 max-w-3xl border border-line p-5 md:p-8">
      <p className="text-sm text-mute">{t.flowKicker}</p>
      <h3 className="display mt-3 max-w-[16ch] text-3xl">{t.flowTitle}</h3>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">{t.flowNote}</p>
      <div className="mt-6 flex flex-wrap gap-3" role="group" aria-label={t.groupFlow}>
        <Choice pressed={mode === "direct"} onClick={() => setMode("direct")}>
          {t.direct}
        </Choice>
        <Choice pressed={proxied} onClick={() => setMode("proxy")}>
          {t.proxy}
        </Choice>
      </div>
      <svg viewBox="0 0 640 100" className="mt-8 w-full text-ink" aria-hidden="true">
        <line
          x1="80"
          y1="50"
          x2="560"
          y2="50"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray={proxied ? undefined : "5 6"}
          opacity={proxied ? 1 : 0.45}
        />
        <circle cx="80" cy="50" r="16" fill="var(--color-surface)" stroke="currentColor" />
        <circle cx="320" cy="50" r="16" fill={proxied ? "currentColor" : "var(--color-surface)"} stroke="currentColor" opacity={proxied ? 1 : 0.45} />
        <circle cx="560" cy="50" r="16" fill="var(--color-surface)" stroke="currentColor" />
        <circle
          r="5"
          cy="50"
          cx="96"
          fill="var(--color-surface)"
          stroke="currentColor"
          strokeWidth="2"
          className={proxied ? "cf-packet-proxy" : "cf-packet-direct"}
        />
      </svg>
      <div className="grid grid-cols-3 text-center text-sm">
        <span>{t.visitor}</span>
        <span className={proxied ? "" : "text-mute"}>
          {t.edge}
          {proxied ? null : <span className="mt-1 block text-xs">{t.aside}</span>}
        </span>
        <span>{t.origin}</span>
      </div>
      <p className={`mt-6 max-w-2xl text-base leading-relaxed ${mode === "direct" ? "" : "text-mute"}`}>{t.directBody}</p>
      <p className={`mt-4 max-w-2xl text-base leading-relaxed ${proxied ? "" : "text-mute"}`}>{t.proxyBody}</p>
      <p className="mt-6 text-sm">
        <a
          href="https://developers.cloudflare.com/fundamentals/concepts/how-cloudflare-works/"
          className="border-b border-ink"
        >
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

export function CloudflareBench({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [recordId, setRecordId] = useState<RecordId>("a");
  const [proxiedIds, setProxiedIds] = useState<Record<"a" | "cname", boolean>>({ a: true, cname: true });
  const [scene, setScene] = useState<SceneId>("hit");
  const record = records.find((item) => item.id === recordId) ?? records[0];
  const proxied = record.canProxy ? proxiedIds[record.id as "a" | "cname"] : false;
  const reading = sceneCopy[lang][scene];
  const detail = dnsBody[lang][record.id][proxied ? "on" : "off"];

  return (
    <div className="mt-10 max-w-3xl">
      <div className="border border-line p-5 md:p-8">
        <p className="text-sm text-mute">{t.dnsKicker}</p>
        <h3 className="display mt-3 max-w-[16ch] text-3xl">{t.dnsTitle}</h3>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">{t.dnsNote}</p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div role="group" aria-label={t.groupDns} className="flex flex-col">
            {records.map((item) => {
              const on = item.id === recordId;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setRecordId(item.id)}
                  className={`border-b border-line py-3 text-left ${on ? "" : "text-mute"}`}
                >
                  <span className="font-mono text-xs">{item.type}</span>
                  <span className="mt-1 block text-sm">
                    {item.host} → {item.value}
                  </span>
                </button>
              );
            })}
          </div>
          <div>
            {record.canProxy ? (
              <div className="flex flex-wrap gap-3" role="group" aria-label={t.groupProxy}>
                <Choice
                  pressed={proxied}
                  onClick={() => setProxiedIds((current) => ({ ...current, [record.id]: true }))}
                >
                  {t.proxied}
                </Choice>
                <Choice
                  pressed={!proxied}
                  onClick={() => setProxiedIds((current) => ({ ...current, [record.id]: false }))}
                >
                  {t.dnsOnly}
                </Choice>
              </div>
            ) : (
              <p className="text-sm text-mute">{t.locked}</p>
            )}
            <p className="mt-6 text-base leading-relaxed" aria-live="polite">
              {detail}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 border border-line p-5 md:p-8">
        <p className="text-sm text-mute">{t.probeKicker}</p>
        <h3 className="display mt-3 max-w-[18ch] text-3xl">{t.probeTitle}</h3>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">{t.probeNote}</p>
        <div className="mt-6 flex flex-wrap gap-3" role="group" aria-label={t.groupScene}>
          {scenes.map((id) => (
            <Choice key={id} pressed={scene === id} onClick={() => setScene(id)}>
              {sceneCopy[lang][id].label}
            </Choice>
          ))}
        </div>
        <dl className="mt-8 grid gap-6 border-t border-line pt-6 sm:grid-cols-3" aria-live="polite">
          <div>
            <dt className="text-sm text-mute">{t.code}</dt>
            <dd className="mt-1 font-mono text-lg">{reading.status}</dd>
          </div>
          <div>
            <dt className="text-sm text-mute">{t.cache}</dt>
            <dd className="mt-1 font-mono text-lg">{reading.cache}</dd>
          </div>
          <div>
            <dt className="text-sm text-mute">{t.originWord}</dt>
            <dd className="mt-1 text-sm leading-relaxed">{reading.origin}</dd>
          </div>
        </dl>
        <div className="mt-8">
          <h4 className="text-sm text-mute">{t.readings}</h4>
          <ul className="mt-3 max-w-2xl space-y-4 text-base leading-relaxed">
            {scenes.map((id) => (
              <li key={id} className={scene === id ? "" : "text-mute"}>
                <span className="font-mono text-sm">{sceneCopy[lang][id].status}. </span>
                {sceneCopy[lang][id].body}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6 text-sm">
          <a
            href="https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/"
            className="border-b border-ink"
          >
            {t.codesDocs}
          </a>
        </p>
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
