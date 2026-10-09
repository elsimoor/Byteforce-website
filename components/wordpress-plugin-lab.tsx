"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

type Lang = "fr" | "en";
type Hold = "theme" | "gesture";
type FileId = "downloader" | "connect" | "shop" | "media";
type Source = "market" | "written";

const copy = {
  fr: {
    flowKicker: "Schéma",
    flowTitle: "Le thème, ou le geste",
    flowNote: "Illustration. Pas une lecture de votre administration, et pas une mesure de ce site.",
    theme: "Le thème tient",
    gesture: "Le geste manque",
    visitor: "Visiteur",
    themeNode: "Thème",
    pluginNode: "Plugin",
    themeBody:
      "Le site explique et reçoit un message. On n'écrit pas un plugin pour changer de nom. WordPress reste.",
    gestureBody:
      "Le plugin est du PHP branché au thème, ou à WooCommerce si la boutique est déjà là. Il ajoute le geste. Il ne remplace pas WordPress.",
    docs: "Comment WordPress décrit un hook",
    softLead: "Le schéma montre le choix. Le message utile dit le geste, et ce qui est déjà installé.",
    softCta: "Décrire le geste",
    shelfKicker: "Fichiers",
    shelfTitle: "Les quatre plugins déjà écrits",
    shelfNote: "Illustration des quatre fichiers de cette page. Ce n'est pas l'écran Extensions de votre site.",
    downloader: "Downloader",
    connect: "Connect",
    shop: "Ecommerce",
    media: "Médias",
    downloaderBody:
      "Depuis l'administration, on cherche un plugin sur le répertoire officiel WordPress.org, on télécharge le zip officiel, on l'installe ou on l'active. Les données viennent de l'API WordPress.org. Le plugin n'accepte pas une adresse quelconque. Il faut le droit d'installer des plugins. WordPress 6.0 et PHP 7.4.",
    connectBody:
      "Le fichier s'appelle NextJS Page Sync. À l'enregistrement d'une page ou d'un article, il envoie la structure des blocs Gutenberg vers une API Next.js dont l'adresse est dans les réglages.",
    shopBody:
      "Une API pour une boutique WooCommerce déjà en place. L'accès passe par une clé publique et une clé secrète. Les routes publiées couvrent les catégories, les produits, la recherche et le panier.",
    mediaBody:
      "Il compresse les images de la médiathèque sans changer leur adresse. La conversion WebP est possible. Si le fichier optimisé est plus lourd, il n'est pas gardé. Il faut GD ou Imagick. WordPress 5.8 et PHP 7.4.",
    fifth: "Si le geste n'est dans aucun de ces quatre fichiers, un cinquième s'écrit. Il ne se télécharge pas sur cette page.",
    breakKicker: "Limite",
    breakTitle: "L'extension du marché, ou le plugin écrit",
    breakNote: "Illustration. Elle ne dit pas qu'une extension du marché a échoué sur votre site.",
    market: "L'extension du marché",
    written: "Le plugin écrit",
    marketBody:
      "Souvent, elle suffit. Le plugin sur mesure commence quand l'extension force le site à changer de parcours, ou casse à chaque mise à jour.",
    writtenBody:
      "Le plugin écrit est du PHP, avec des réglages que l'équipe utilise sans ouvrir le code. La correction après la mise en ligne en fait partie. Il ne remplace pas WordPress.",
    groupFlow: "Thème ou geste",
    groupFiles: "Quatre plugins",
    groupSource: "Extension ou plugin écrit",
  },
  en: {
    flowKicker: "Diagram",
    flowTitle: "The theme, or the action",
    flowNote: "An illustration. Not a reading of your admin, and not a measurement of this site.",
    theme: "The theme holds",
    gesture: "The action is missing",
    visitor: "Visitor",
    themeNode: "Theme",
    pluginNode: "Plugin",
    themeBody: "The site explains and receives a message. A plugin is not written to change a name. WordPress stays.",
    gestureBody:
      "The plugin is PHP hooked to the theme, or to WooCommerce if the shop is already there. It adds the action. It does not replace WordPress.",
    docs: "How WordPress describes a hook",
    softLead: "The diagram shows the choice. The useful note says the action, and what is already installed.",
    softCta: "Describe the action",
    shelfKicker: "Files",
    shelfTitle: "The four plugins already written",
    shelfNote: "An illustration of the four files on this page. It is not the Plugins screen of your site.",
    downloader: "Downloader",
    connect: "Connect",
    shop: "Ecommerce",
    media: "Media",
    downloaderBody:
      "From the admin, search the official WordPress.org directory, download the official zip, and install or activate it. The data comes from the WordPress.org API. The plugin does not accept an arbitrary address. The right to install plugins is required. WordPress 6.0 and PHP 7.4.",
    connectBody:
      "The file is named NextJS Page Sync. On saving a page or a post, it sends the Gutenberg block structure to a Next.js API whose address is in the settings.",
    shopBody:
      "An API for a WooCommerce shop already in place. Access uses a public key and a secret key. The published routes cover categories, products, search, and the cart.",
    mediaBody:
      "It compresses media library images without changing their address. WebP conversion is possible. If the optimized file is heavier, it is not kept. GD or Imagick is required. WordPress 5.8 and PHP 7.4.",
    fifth: "If the action is in none of these four files, a fifth is written. It is not a download on this page.",
    breakKicker: "Limit",
    breakTitle: "The market plugin, or the written one",
    breakNote: "An illustration. It does not say a market plugin failed on your site.",
    market: "The market plugin",
    written: "The written plugin",
    marketBody:
      "Often, it is enough. The custom plugin starts when the extension forces the site to change path, or breaks on every update.",
    writtenBody:
      "The written plugin is PHP, with settings the team uses without opening the code. A correction after go-live is part of it. It does not replace WordPress.",
    groupFlow: "Theme or action",
    groupFiles: "Four plugins",
    groupSource: "Market plugin or written plugin",
  },
} as const;

const fileOrder: FileId[] = ["downloader", "connect", "shop", "media"];

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

export function PluginFlow({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [hold, setHold] = useState<Hold>("gesture");
  const missing = hold === "gesture";

  return (
    <div className="mt-10 max-w-3xl border border-line p-5 md:p-8">
      <p className="text-sm text-mute">{t.flowKicker}</p>
      <h3 className="display mt-3 max-w-[16ch] text-3xl">{t.flowTitle}</h3>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">{t.flowNote}</p>
      <div className="mt-6 flex flex-wrap gap-3" role="group" aria-label={t.groupFlow}>
        <Choice pressed={!missing} onClick={() => setHold("theme")}>
          {t.theme}
        </Choice>
        <Choice pressed={missing} onClick={() => setHold("gesture")}>
          {t.gesture}
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
          strokeDasharray={missing ? undefined : "5 6"}
          opacity={missing ? 1 : 0.45}
        />
        <circle cx="80" cy="50" r="16" fill="var(--color-surface)" stroke="currentColor" />
        <circle cx="320" cy="50" r="16" fill="currentColor" stroke="currentColor" />
        <circle
          cx="560"
          cy="50"
          r="16"
          fill={missing ? "currentColor" : "var(--color-surface)"}
          stroke="currentColor"
          opacity={missing ? 1 : 0.45}
        />
        <circle
          r="5"
          cy="50"
          cx="96"
          fill="var(--color-surface)"
          stroke="currentColor"
          strokeWidth="2"
          className={missing ? "lab-packet-full" : "lab-packet-stop"}
        />
      </svg>
      <div className="grid grid-cols-3 text-center text-sm">
        <span>{t.visitor}</span>
        <span>{t.themeNode}</span>
        <span className={missing ? "" : "text-mute"}>{t.pluginNode}</span>
      </div>
      <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed" aria-live="polite">
        <p className={missing ? "text-mute" : ""}>{t.themeBody}</p>
        <p className={missing ? "" : "text-mute"}>{t.gestureBody}</p>
      </div>
      <p className="mt-6 text-sm">
        <a href="https://developer.wordpress.org/plugins/hooks/" className="border-b border-ink">
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

export function PluginShelf({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [id, setId] = useState<FileId>("downloader");
  const bodies: Record<FileId, string> = {
    downloader: t.downloaderBody,
    connect: t.connectBody,
    shop: t.shopBody,
    media: t.mediaBody,
  };
  const labels: Record<FileId, string> = {
    downloader: t.downloader,
    connect: t.connect,
    shop: t.shop,
    media: t.media,
  };

  return (
    <div className="mt-10 max-w-3xl border border-line p-5 md:p-8">
      <p className="text-sm text-mute">{t.shelfKicker}</p>
      <h3 className="display mt-3 max-w-[18ch] text-3xl">{t.shelfTitle}</h3>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">{t.shelfNote}</p>
      <div className="mt-6 flex flex-wrap gap-3" role="group" aria-label={t.groupFiles}>
        {fileOrder.map((file) => (
          <Choice key={file} pressed={id === file} onClick={() => setId(file)}>
            {labels[file]}
          </Choice>
        ))}
      </div>
      <svg viewBox="0 0 640 120" className="mt-8 w-full text-ink" aria-hidden="true">
        {fileOrder.map((file, index) => {
          const x = 36 + index * 152;
          const on = id === file;
          return (
            <g key={file} opacity={on ? 1 : 0.4}>
              <rect x={x} y="24" width="120" height="52" fill={on ? "currentColor" : "var(--color-surface)"} stroke="currentColor" />
              <text x={x + 60} y="54" textAnchor="middle" fontSize="13" fill={on ? "var(--color-surface)" : "currentColor"}>
                {labels[file]}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="max-w-2xl space-y-4 text-base leading-relaxed" aria-live="polite">
        {fileOrder.map((file) => (
          <p key={file} className={id === file ? "" : "text-mute"}>
            {bodies[file]}
          </p>
        ))}
      </div>
      <p className="mt-6 max-w-2xl text-base leading-relaxed">{t.fifth}</p>
    </div>
  );
}

export function PluginBreak({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [source, setSource] = useState<Source>("market");
  const market = source === "market";

  return (
    <div className="mt-10 max-w-3xl border border-line p-5 md:p-8">
      <p className="text-sm text-mute">{t.breakKicker}</p>
      <h3 className="display mt-3 max-w-[18ch] text-3xl">{t.breakTitle}</h3>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">{t.breakNote}</p>
      <div className="mt-6 flex flex-wrap gap-3" role="group" aria-label={t.groupSource}>
        <Choice pressed={market} onClick={() => setSource("market")}>
          {t.market}
        </Choice>
        <Choice pressed={!market} onClick={() => setSource("written")}>
          {t.written}
        </Choice>
      </div>
      <svg viewBox="0 0 640 100" className="mt-8 w-full text-ink" aria-hidden="true">
        <rect x="36" y="28" width="200" height="44" fill={market ? "currentColor" : "var(--color-surface)"} stroke="currentColor" opacity={market ? 1 : 0.4} />
        <path d="M250 50 H300" stroke="currentColor" strokeDasharray={market ? "4 5" : undefined} opacity={market ? 1 : 0.35} />
        <path d="M300 36 L332 50 L300 64" fill="none" stroke="currentColor" opacity={market ? 1 : 0.35} />
        <rect x="360" y="28" width="220" height="44" fill={market ? "var(--color-surface)" : "currentColor"} stroke="currentColor" opacity={market ? 0.4 : 1} />
      </svg>
      <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed" aria-live="polite">
        <p className={market ? "" : "text-mute"}>{t.marketBody}</p>
        <p className={market ? "text-mute" : ""}>{t.writtenBody}</p>
      </div>
    </div>
  );
}
