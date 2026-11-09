"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ProjectCta, StudioStamp, WorkTicker } from "@/components/realisation-chrome";
import type { Project } from "@/lib/content";
import { hostOf, landPath, workGroup, workKind, type WorkGroup } from "@/lib/realisation-present";
import { site } from "@/lib/site";

const filters: { id: "all" | WorkGroup; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "sites", label: "Sites" },
  { id: "apps", label: "Applications" },
  { id: "logiciels", label: "Logiciels" },
];

export function RealisationsLanding({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof filters)[number]["id"]>("all");
  const cards = projects.filter((project) => active === "all" || workGroup(project) === active);

  return (
    <div className="bg-surface text-[#0A0D2E]">
      <section className="relative min-h-[520px] overflow-hidden bg-[#070A2B] text-[#EEF0FF] lg:min-h-[600px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(238,240,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(238,240,255,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <svg aria-hidden="true" viewBox="0 0 1020 348" preserveAspectRatio="xMidYMax meet" className="pointer-events-none absolute inset-x-0 bottom-0 h-full w-full">
          <defs>
            <pattern id="bfdots" width="9" height="9" patternUnits="userSpaceOnUse">
              <circle cx="4.5" cy="4.5" r="1.6" fill="#8C93FF" fillOpacity="0.5" />
            </pattern>
          </defs>
          <path d={landPath} fill="url(#bfdots)" stroke="#8C93FF" strokeOpacity="0.4" strokeWidth="0.8" strokeLinejoin="round" />
          <path className="bf-dash" d="M724,305 Q790,200 823.5,152" fill="none" stroke="#8C93FF" strokeOpacity="0.85" strokeWidth="1.2" strokeDasharray="4 6" />
          <path className="bf-dash" d="M724,305 Q380,40 64,186" fill="none" stroke="#8C93FF" strokeOpacity="0.85" strokeWidth="1.2" strokeDasharray="4 6" />
          <circle className="bf-ring" cx="64" cy="186" r="5" fill="none" stroke="#8C93FF" strokeWidth="1.2" />
          <circle cx="64" cy="186" r="3.5" fill="#8C93FF" />
          <text x="76" y="190" fontFamily="var(--font-mono), monospace" fontSize="10" letterSpacing="1" fill="#EEF0FF" fillOpacity="0.9">MONTRÉAL</text>
          <circle className="bf-ring" cx="823.5" cy="152" r="5" fill="none" stroke="#8C93FF" strokeWidth="1.2" />
          <circle cx="823.5" cy="152" r="3.5" fill="#8C93FF" />
          <text x="812" y="148" textAnchor="end" fontFamily="var(--font-mono), monospace" fontSize="10" letterSpacing="1" fill="#EEF0FF" fillOpacity="0.9">PARIS</text>
          <circle cx="708" cy="318" r="3" fill="#8C93FF" />
          <text x="698" y="322" textAnchor="end" fontFamily="var(--font-mono), monospace" fontSize="10" letterSpacing="1" fill="#EEF0FF" fillOpacity="0.9">SAFI</text>
          <circle className="bf-ring" cx="724" cy="305" r="6" fill="none" stroke="#FFFFFF" strokeWidth="1.4" />
          <circle cx="724" cy="305" r="4.5" fill="#FFFFFF" />
          <text x="736" y="309" fontFamily="var(--font-mono), monospace" fontSize="10" letterSpacing="1" fill="#FFFFFF">CASABLANCA · STUDIO</text>
        </svg>
        <div className="relative mx-auto flex w-full max-w-[1264px] flex-col gap-5 px-5 pt-8 pb-14 sm:px-8 lg:px-12 lg:pt-9 lg:pb-18">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <nav aria-label="Fil d'Ariane" className="flex flex-wrap gap-x-2.5 gap-y-1 text-sm text-[#B4BAF2]">
              <Link href="/">Byte Force</Link>
              <span>·</span>
              <span className="text-white">Réalisations</span>
            </nav>
            <p className="font-mono text-xs tracking-[0.1em] text-[#B4BAF2] uppercase">
              Casablanca · {site.geo.latitude}° N, {Math.abs(site.geo.longitude)}° O
            </p>
          </div>
          <h1 className="font-headline text-[clamp(3.4rem,11vw,8.5rem)] leading-[0.84] font-extrabold tracking-[-0.07em] text-white">
            Réalisations<span className="text-[#8C93FF]">.</span>
          </h1>
          <div className="mt-2 flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-[32em] text-lg leading-snug text-[#D5D9FF] sm:text-[22px] sm:leading-[1.45]">
              Sites, applications et logiciels livrés par le studio. Chaque fiche montre ce qui est public et dit ce qui ne l&apos;est pas.
            </p>
            <span className="self-end sm:translate-y-6"><StudioStamp /></span>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-full max-w-[1264px] flex-col gap-8 px-5 py-12 sm:px-8 lg:px-12 lg:py-14">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => {
                const on = filter.id === active;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActive(filter.id)}
                    className={`min-h-11 cursor-pointer rounded-full border-2 border-[#0A0D2E] px-5 text-[15px] font-bold ${on ? "bg-[#0A0D2E] text-white" : "bg-white text-[#0A0D2E]"}`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
            <p className="font-mono text-xs tracking-[0.08em] text-[#555B80] uppercase">
              {cards.length} projet{cards.length > 1 ? "s" : ""} affiché{cards.length > 1 ? "s" : ""}
            </p>
          </div>

          <div className="grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]">
            {cards.map((project) => (
              <Link
                key={project.slug}
                href={`/realisations/${project.slug}`}
                className="flex min-w-0 flex-col overflow-hidden rounded-[22px] border border-[#DADFF5] bg-white no-underline shadow-none transition duration-200 hover:-translate-y-2 hover:no-underline hover:shadow-[0_24px_48px_rgba(7,10,43,0.12)]"
              >
                <div className="relative aspect-[4/3] bg-[repeating-linear-gradient(135deg,#FFF4E0,#FFF4E0_14px,#FFEBCB_14px,#FFEBCB_28px)]">
                  {project.shot ? (
                    <Image
                      src={project.shot}
                      alt={`${project.title}, capture du site en ligne`}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover object-top"
                    />
                  ) : (
                    <p className="flex h-full items-center justify-center px-5 text-center font-mono text-xs tracking-[0.08em] text-[#7A4300] uppercase">
                      Capture · {hostOf(project.url)}
                    </p>
                  )}
                  <span className="absolute top-4 left-4 rounded-full bg-[#070A2B] px-2.5 py-1 font-mono text-[11px] tracking-[0.08em] text-white uppercase">
                    {project.category}
                  </span>
                </div>
                <div className="flex flex-col gap-3 p-7">
                  <p className="font-mono text-xs tracking-[0.08em] text-[#555B80] uppercase">
                    {project.city} · {project.year} · {workKind(project)}
                  </p>
                  <p className="font-headline text-4xl leading-[0.98] font-extrabold tracking-[-0.045em] sm:text-5xl">{project.title}</p>
                  <p className="text-base leading-normal text-[#2A2E55]">{project.description}</p>
                  <p className="mt-2 text-[15px] font-bold text-primary">Lire la fiche →</p>
                </div>
              </Link>
            ))}
            <Link
              href="/realisations/votre-projet"
              className="flex min-h-[420px] min-w-0 flex-col justify-between gap-5 rounded-[22px] border-2 border-dashed border-[#8E94BE] p-9 no-underline transition duration-200 hover:-translate-y-2 hover:no-underline hover:shadow-[0_24px_48px_rgba(7,10,43,0.08)]"
            >
              <p className="font-mono text-xs tracking-[0.1em] text-[#555B80] uppercase">Prochaine fiche</p>
              <p className="font-headline text-5xl leading-[0.95] font-extrabold tracking-[-0.05em] text-primary sm:text-[3.5rem]">Votre projet.</p>
              <p className="text-base leading-normal text-[#2A2E55]">
                Décrivez-nous ce que le visiteur doit comprendre avant d&apos;écrire. Nous revenons avec un devis sous 24 h.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <WorkTicker />

      <section>
        <div className="mx-auto flex w-full max-w-[1264px] flex-col gap-9 px-5 py-16 sm:px-8 lg:px-12 lg:pt-24 lg:pb-18">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-headline text-4xl leading-none font-extrabold tracking-[-0.04em] sm:text-[3.5rem]">Une fiche, quatre blocs</h2>
            <p className="max-w-[28em] text-[17px] text-[#555B80]">Toutes les réalisations suivent le même ordre, pour qu&apos;on puisse les comparer.</p>
          </div>
          <div className="flex flex-wrap">
            {[
              ["Le problème", "Ce qui bloquait le client avant le projet."],
              ["La solution", "Ce que Byte Force a livré, et le service lié."],
              ["Le résultat", "Ce qui est en ligne, avec un chiffre quand le client l'autorise."],
            ].map(([title, text]) => (
              <div key={title} className="flex min-w-[220px] flex-1 flex-col gap-3 pr-6">
                <div className="flex items-center">
                  <span className="h-3.5 w-3.5 shrink-0 rounded-full bg-[#0A0D2E]" />
                  <span className="h-0.5 flex-1 bg-[#C9CEEF]" />
                </div>
                <p className="font-headline text-3xl font-extrabold tracking-[-0.03em]">{title}</p>
                <p className="text-base text-[#2A2E55]">{text}</p>
              </div>
            ))}
            <div className="flex min-w-[220px] flex-1 flex-col gap-3">
              <div className="flex items-center">
                <span className="h-3.5 w-3.5 shrink-0 rounded-full bg-primary" />
              </div>
              <p className="font-headline text-3xl font-extrabold tracking-[-0.03em] text-primary">Ce qui est public</p>
              <p className="text-base text-[#2A2E55]">Ce qu&apos;on peut vérifier, et ce qui n&apos;est pas publié.</p>
            </div>
          </div>
        </div>
      </section>

      <ProjectCta />
    </div>
  );
}
