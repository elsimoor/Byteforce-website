import type { Metadata } from "next";
import Link from "next/link";
import { AiDoc } from "@/components/ai-doc";
import { projects } from "@/lib/content";
import { openGraph } from "@/lib/open-graph";

const title = "Travaux de Byte Force, pour les agents";
const description = "Projets publiés, avec le lieu, l'année affichée, le problème et la solution quand ils sont écrits. Pas de métrique inventée.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ai/work" },
  openGraph: openGraph("/ai/work", title, description),
};

export default function AiWorkPage() {
  return (
    <AiDoc path="/ai/work" title="Les preuves publiées." lede={description}>
      <ul className="space-y-8">
        {projects.map((project) => (
          <li key={project.slug} className="border-t border-line pt-6">
            <h2 className="text-2xl">
              <Link href={`/realisations/${project.slug}`}>{project.title}</Link>
            </h2>
            <p className="mt-2 font-mono text-xs text-mute">
              {project.city}, {project.country} · {project.year} · {project.category}
            </p>
            <p className="mt-3 leading-relaxed">{project.description}</p>
            {project.problem ? <p className="mt-3 leading-relaxed">Problème : {project.problem}</p> : null}
            {project.solution ? <p className="mt-3 leading-relaxed">Solution : {project.solution}</p> : null}
            <p className="mt-3 text-sm">
              <a href={project.url}>{project.url.replace(/^https?:\/\//, "")}</a>
            </p>
          </li>
        ))}
      </ul>
    </AiDoc>
  );
}
