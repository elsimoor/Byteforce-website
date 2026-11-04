import Link from "next/link";
import { BrowserFrame } from "./browser-frame";
import styles from "./landing.module.css";
import { performanceShot, referencementH1 } from "@/lib/referencement-seo";

const chips = ["Casablanca", "SEO + GEO", "Reporting Search Console"];

const badges = [
  { label: "Impressions", place: "lg:left-0 lg:top-8" },
  { label: "Clics", place: "lg:right-0 lg:top-20" },
  { label: "CTR", place: "lg:bottom-16 lg:left-1" },
  { label: "Position", place: "lg:right-1 lg:bottom-8" },
];

const points = [
  { figure: "[X]", label: "Pages commerciales suivies. Le nombre n'est écrit qu'après l'audit de votre propriété." },
  { figure: "Search Console", label: "Impressions, clics, CTR et position, lus chaque mois sur votre compte." },
  { figure: "Casablanca", label: "Bureau au Technopark, boulevard Dammam, Aïn Chock." },
  { figure: "Sans garantie", label: "Aucune promesse de première place. Le suivi montre ce que Google enregistre." },
];

export function Hero() {
  return (
    <>
      <section className={`${styles.hero} px-6 pt-12 pb-16 md:px-12 md:pt-16 md:pb-20`}>
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <nav aria-label="Fil d'Ariane" className="font-mono text-xs tracking-wide text-mute">
              <Link href="/" className={styles.draw}>
                Accueil
              </Link>
              <span aria-hidden="true"> / </span>
              <Link href="/services" className={styles.draw}>
                Services
              </Link>
              <span aria-hidden="true"> / </span>
              <span className="text-ink">Agence SEO</span>
            </nav>
            <h1 className="display mt-6 max-w-[16em] text-[clamp(2.35rem,4.4vw,3.7rem)]">{referencementH1}</h1>
            <p className="mt-6 max-w-[62ch] text-base leading-relaxed md:text-lg">
              Byte Force est une agence SEO Casablanca. Depuis le Technopark, nous prenons le référencement web des entreprises qui veulent des demandes depuis Google, au Maroc.
            </p>
            <p className="mt-3 max-w-[62ch] text-base leading-relaxed text-mute md:text-lg">
              Le suivi se lit dans Search Console : impressions, clics, CTR et position. La visibilité dans les réponses des IA se mesure au même endroit, quand la propriété l&apos;affiche.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/contact" className="btn">
                Demander un audit SEO gratuit
              </Link>
              <a href="#methode" className="btn-line">
                Voir la méthode
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <li key={chip} className="border border-line bg-white px-3 py-1.5 font-mono text-[11px] tracking-[0.12em] text-ink uppercase">
                  {chip}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-w-0 lg:px-6 lg:py-8">
            <div className={styles.glow} aria-hidden="true" />
            <div className={styles.frame}>
              <BrowserFrame {...performanceShot} priority />
            </div>
            <ul className="mt-4 flex flex-wrap gap-2 lg:pointer-events-none lg:absolute lg:inset-0 lg:mt-0">
              {badges.map((badge) => (
                <li
                  key={badge.label}
                  className={`border border-line bg-white px-3 py-1.5 font-mono text-[11px] tracking-wide text-ink shadow-[0_8px_24px_-16px_rgba(7,11,51,0.8)] lg:absolute ${badge.place}`}
                >
                  {badge.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section aria-labelledby="reperes" className="border-y border-line px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 id="reperes" className="display max-w-[16ch] text-3xl md:text-4xl">
            Ce que l&apos;on peut affirmer
          </h2>
          <div className="mt-10 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => (
            <p key={point.figure}>
              <span className="display block text-2xl text-primary">{point.figure}</span>
              <span className="mt-2 block max-w-[36ch] text-sm leading-relaxed text-mute">{point.label}</span>
            </p>
          ))}
          </div>
        </div>
      </section>
    </>
  );
}
