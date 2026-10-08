import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content";

const countryMark: Record<string, string> = {
  France: "FR",
  Maroc: "MA",
  Canada: "CA",
};

const categoryMark: Record<Project["category"], string> = {
  "E-Commerce": "EC",
  Vitrine: "VI",
  "Plate-forme": "PF",
};

export function ProjectStage({ project, variant }: { project: Project; variant: 0 | 1 | 2 }) {
  const country = countryMark[project.country] ?? project.country;
  const mark = variant === 0 ? project.year : variant === 2 ? categoryMark[project.category] : country;
  const meta = `${project.category} · ${project.city} · ${project.year}`;

  if (project.shot) {
    return (
      <Link
        href={`/realisations/${project.slug}`}
        className="group grid min-h-[78svh] border-t border-line bg-paper text-ink md:grid-cols-12"
      >
        <div className="flex min-w-0 flex-col justify-end px-6 py-12 md:col-span-5 md:px-12 md:py-16">
          <p className="text-sm text-mute">{meta}</p>
          <h2 className="stage-title display mt-4 text-[clamp(2.6rem,4.6vw,5rem)]">{project.title}</h2>
          <p className="mt-6 max-w-sm text-mute">{project.description}</p>
        </div>
        <div className="relative min-h-[52svh] overflow-hidden bg-ink md:col-span-7 md:min-h-full">
          <Image
            src={project.shot}
            alt={`${project.title}, capture du site en ligne`}
            fill
            sizes="(min-width: 768px) 58vw, 100vw"
            className={project.screens?.[0]?.src === project.shot ? "object-contain object-center" : "object-cover object-top"}
          />
        </div>
      </Link>
    );
  }

  if (variant === 1) {
    return (
      <Link
        href={`/realisations/${project.slug}`}
        className="group grid min-h-[78svh] bg-paper text-ink md:grid-cols-12"
      >
        <div className="flex flex-col justify-end px-6 py-12 md:col-span-5 md:px-12 md:py-16">
          <p className="text-sm text-mute">{meta}</p>
          <h2 className="stage-title display mt-4 text-[clamp(3rem,6vw,6.5rem)]">{project.title}</h2>
          <p className="mt-6 max-w-sm text-mute">{project.description}</p>
        </div>
        <div className="relative min-h-[52svh] overflow-hidden bg-ink text-paper md:col-span-7 md:min-h-full">
          <span className="plate-mark" aria-hidden="true">
            {mark}
          </span>
          <span className="absolute bottom-8 left-8 text-sm">Voir le projet</span>
        </div>
      </Link>
    );
  }

  const dark = variant === 0;

  return (
    <Link
      href={`/realisations/${project.slug}`}
      className={`group relative block min-h-[86svh] overflow-hidden ${dark ? "bg-ink text-paper" : "border-t border-line bg-paper text-ink"}`}
    >
      <span className={`plate-mark ${dark ? "" : "plate-mark--top"}`} aria-hidden="true">
        {mark}
      </span>
      <div className="relative flex min-h-[86svh] flex-col justify-between px-6 py-10 md:px-12 md:py-14">
        <p className="text-sm">{meta}</p>
        <div className="max-w-4xl">
          <h2 className="stage-title display text-[clamp(3.4rem,8.5vw,8rem)]">{project.title}</h2>
          <p className={`mt-6 max-w-md ${dark ? "text-paper/70" : "text-mute"}`}>{project.description}</p>
        </div>
      </div>
    </Link>
  );
}
