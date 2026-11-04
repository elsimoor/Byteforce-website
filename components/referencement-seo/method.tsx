import styles from "./landing.module.css";

const steps = [
  {
    title: "Audit",
    body: "On lit le site, l'indexation et Search Console. La sortie est une liste de priorités : ce qui empêche une page d'être trouvée, et ce qui empêche le visiteur d'écrire.",
  },
  {
    title: "Stratégie",
    body: "Une requête commerciale, une URL. On écarte les mots qui n'amènent pas une demande, et les villes où vous n'avez pas d'activité.",
  },
  {
    title: "Optimisation",
    body: "Technique d'abord : pages indexables, canoniques justes, maillage vers le formulaire, données structurées qui décrivent l'offre réelle.",
  },
  {
    title: "Contenu et liens",
    body: "Les pages manquantes sont écrites. Les liens viennent ensuite, vers ces pages, depuis des sources qui parlent du même sujet.",
  },
  {
    title: "Suivi mensuel",
    body: "Chaque mois : impressions, clics, CTR, position, et les impressions d'IA générative si Search Console les montre. On corrige d'après ces relevés.",
  },
];

export function Method() {
  return (
    <section id="methode" aria-labelledby="methode-titre" className="scroll-mt-28 border-t border-line px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 id="methode-titre" className="display max-w-[14ch] text-4xl md:text-5xl">
          La méthode
        </h2>
        <p className="mt-6 max-w-[62ch] text-base leading-relaxed md:text-lg">
          Cinq temps, dans cet ordre. On ne commence pas par les liens si l&apos;audit n&apos;a pas encore dit quelle page doit recevoir la demande.
        </p>
        <ol className="mt-12 max-w-3xl border-l border-line">
          {steps.map((step, index) => (
            <li key={step.title} className={`${styles.rise} relative pb-10 pl-8`}>
              <span className="absolute top-0 -left-3 flex h-6 w-6 items-center justify-center bg-primary font-mono text-xs text-on-primary">
                {index + 1}
              </span>
              <h3 className="text-2xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-3 max-w-[62ch] text-base leading-relaxed md:text-lg">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
