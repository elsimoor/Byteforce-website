import { projects } from "@/lib/content";

const order = ["coco-inbox", "re-proche-de-moi", "dealkhir", "tourispeak"];

const english: Record<string, { problem: string; solution: string; result: string }> = {
  "coco-inbox": {
    problem: "Email, files and notes were shared with no clear limit on who could see them, or for how long.",
    solution: "A published product for temporary email, encrypted files and secure notes.",
    result: "The product is online, from Montréal, since 2024.",
  },
  "re-proche-de-moi": {
    problem: "Nearby shops were hard to find in one place.",
    solution: "A published platform with search, a map and business profiles.",
    result: "The site is online in Lille, since 2024.",
  },
  dealkhir: {
    problem: "Donations and organisations had no shared place.",
    solution: "A published platform for organisations and donations.",
    result: "The site is online in Casablanca, since 2024.",
  },
  tourispeak: {
    problem: "The tourism network had no public site for the visits.",
    solution: "A published site for audio tours and the network.",
    result: "The site is online, from Montréal, since 2024.",
  },
};

export function SelectedWork() {
  const cases = order
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] & { shot: string } => Boolean(project?.shot));

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-12 lg:py-28" id="selected-work">
      <div className="mb-14">
        <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">Selected software</span>
        <h2 className="mt-1 font-headline text-3xl font-black tracking-tight text-on-surface lg:text-5xl">
          Software we&apos;ve shipped.
        </h2>
        <p className="mt-2 max-w-xl text-base text-on-surface-variant lg:text-lg">
          Four published products. Each card is the live site, with the problem, what was built, and where it is online.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {cases.map((project) => (
          <article key={project.slug} className="overflow-hidden rounded-xl bg-surface-container-low shadow-sm">
            <a href={project.url} rel="noopener noreferrer">
              <img
                src={project.shot}
                alt={`${project.title}, the live site`}
                className="aspect-[16/10] w-full object-cover object-top"
              />
            </a>
            <div className="space-y-3 p-6 lg:p-8">
              <p className="font-mono text-xs font-bold tracking-wider text-primary uppercase">
                {project.city} · {project.year}
              </p>
              <h3 className="font-headline text-2xl font-bold text-on-surface">{project.title}</h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                <span className="font-semibold text-on-surface">Problem. </span>
                {english[project.slug].problem}
              </p>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                <span className="font-semibold text-on-surface">Solution. </span>
                {english[project.slug].solution}
              </p>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                <span className="font-semibold text-on-surface">Result. </span>
                {english[project.slug].result}
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-sm font-bold text-primary">
                <a href={`/realisations/${project.slug}`}>Case study</a>
                <a href={project.url} rel="noopener noreferrer">
                  Live site
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <a
        href="/contact"
        className="mt-10 inline-flex items-center gap-2 rounded bg-primary px-6 py-3.5 text-sm font-medium text-on-primary"
      >
        Start a project
      </a>
    </section>
  );
}
