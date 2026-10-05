import type { Metadata } from "next";
import { cities } from "@/lib/catalog";
import { projects } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Byte Force est une société de logiciels à Casablanca. Sites, applications et outils sur mesure, depuis le Technopark.",
  alternates: { canonical: "/a-propos" },
};

const countries = new Set(projects.map((project) => project.country)).size;

export default function AboutPage() {
  return (
    <main>
      <header className="px-6 pb-16 pt-16 md:px-12 md:pt-28">
        <h1 className="display max-w-[14ch] text-[clamp(3.2rem,8vw,7.2rem)]">
          Un studio logiciel à Casablanca.
        </h1>
      </header>
      <section className="grid gap-12 bg-ink px-6 py-20 text-paper md:grid-cols-3 md:px-12 md:py-28">
        <div>
          <p className="display text-7xl md:text-8xl">{projects.length}</p>
          <p className="mt-3 text-sm text-paper/60">projets publiés</p>
        </div>
        <div>
          <p className="display text-7xl md:text-8xl">{countries}</p>
          <p className="mt-3 text-sm text-paper/60">pays</p>
        </div>
        <div>
          <p className="display text-7xl md:text-8xl">{cities().length}</p>
          <p className="mt-3 text-sm text-paper/60">villes</p>
        </div>
      </section>
      <section className="grid gap-10 px-6 py-20 md:grid-cols-12 md:px-12 md:py-28">
        <p className="text-2xl leading-snug md:col-span-7">
          Sites, applications et logiciels sur mesure. Le bureau est au Technopark, boulevard Dammam, Aïn Chock.
        </p>
        <p className="text-sm leading-relaxed text-mute md:col-span-4 md:col-start-9">
          {site.street}
          <br />
          {site.locality}, {site.postal} {site.city}
          <br />
          {site.phoneDisplay}
          <br />
          {site.email}
          <br />
          {site.hoursLabel}
        </p>
      </section>
    </main>
  );
}
