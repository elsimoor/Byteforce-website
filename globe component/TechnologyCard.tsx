"use client";

import { useId, type ReactNode } from "react";
import { EarthGlobe, type EarthGlobeProps } from "./EarthGlobe";
import styles from "./TechnologyCard.module.css";

export interface TechnologyItem {
  label: string;
  href?: string;
  icon: ReactNode;
}

export interface TechnologyCardProps {
  eyebrow?: string;
  titleLead?: string;
  titleAccent?: string;
  description?: string;
  items?: TechnologyItem[];
  /** Overrides forwarded to the globe (texture URL, speed, start longitude…). */
  globe?: Omit<EarthGlobeProps, "className">;
  className?: string;
}

/* ---------- Icons (inline SVG, inherit color via currentColor) ---------- */
const CodeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
  </svg>
);

const DatabaseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <ellipse cx="12" cy="6" rx="8" ry="3" />
    <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
  </svg>
);

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 18a4.5 4.5 0 01-.5-8.97A6 6 0 0118 10.5 3.75 3.75 0 0117.5 18H7z" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3l8 3v6c0 4.5-3.2 7.6-8 9-4.8-1.4-8-4.5-8-9V6l8-3z" />
    <path d="M8.5 12l2.5 2.5 4.5-5" />
  </svg>
);

const GaugeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3.5 18a9 9 0 1117 0" />
    <path d="M12 18l4-6" />
    <path d="M6.5 12.5h.01M9 8.5h.01M15 8.5h.01M17.5 12.5h.01" />
  </svg>
);

const ArrowIcon = () => (
  <svg className={styles.arrow} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);

const GLOBE_CONTACT = `/contact?${new URLSearchParams({
  message: "Le globe 3D sur la page m'a plu. Je voudrais en parler.",
}).toString()}`;

const DEFAULT_ITEMS: TechnologyItem[] = [
  { label: "Interface du produit", href: "/insights/react-pour-l-interface", icon: <CodeIcon /> },
  { label: "Application et données", href: "/insights/postgresql-pour-les-enregistrements", icon: <DatabaseIcon /> },
  { label: "Livraison", href: "/insights/vercel-pour-publier", icon: <CloudIcon /> },
  { label: "Où ça tourne", href: "/insights/ovhcloud-pour-l-hebergement", icon: <ShieldIcon /> },
  { label: "Mesure et courrier", href: "/insights/posthog-pour-les-evenements", icon: <GaugeIcon /> },
];

export function TechnologyCard({
  eyebrow = "Technologie",
  titleLead = "La technologie",
  titleAccent = "derrière le produit.",
  description = "On choisit l'outil selon le produit : tenue en charge, performance, sécurité et maintenance d'abord.",
  items = DEFAULT_ITEMS,
  globe,
  className,
}: TechnologyCardProps) {
  const headingId = useId();

  return (
    <section
      className={[styles.card, className].filter(Boolean).join(" ")}
      aria-labelledby={headingId}
    >
      <div className={styles.content}>
        <p className={`${styles.eyebrow} font-mono text-[15px] font-bold uppercase tracking-[0.12em] text-on-surface sm:text-sm`}>
          {eyebrow}
        </p>
        <h2 id={headingId} className={`${styles.title} font-headline text-3xl font-bold tracking-tight text-on-surface lg:text-4xl`}>
          {titleLead} {titleAccent}
        </h2>
        <p className={`${styles.description} text-lg leading-relaxed text-on-surface-variant`}>{description}</p>

        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.label}>
              <a className={styles.link} href={item.href ?? "#"}>
                <span className={styles.iconBox}>{item.icon}</span>
                <span className={`${styles.label} font-headline text-base font-bold tracking-tight text-on-surface`}>{item.label}</span>
                <ArrowIcon />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.globeHit}>
        <EarthGlobe className={styles.globe} {...globe} />
      </div>
      <a className={styles.globeTip} href={GLOBE_CONTACT}>
        <span className={styles.globeAsk}>Impressionné par la 3D ?</span>
        <span className={styles.globeCta}>Contactez-nous</span>
      </a>
    </section>
  );
}

export default TechnologyCard;
