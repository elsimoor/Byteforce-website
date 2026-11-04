const services = [
  {
    title: "Audit SEO",
    body: "Lecture du site, de l'indexation et de Search Console. On classe ce qui bloque une demande : technique, pages absentes, requêtes déjà prises par une autre URL du même domaine.",
  },
  {
    title: "SEO technique",
    body: "Indexation, canoniques, maillage, données structurées et vitesse. Le correctif sert la page qui doit recevoir le contact, pas un score affiché pour lui-même.",
  },
  {
    title: "Contenu et sémantique",
    body: "Une URL par intention commerciale. Le titre, la meta et le texte répondent à la requête, puis mènent au formulaire. Deux pages sur le même mot sont fusionnées.",
  },
  {
    title: "Netlinking",
    body: "Des liens depuis des pages qui ont un sujet réel, vers la page qui doit être trouvée. Pas de volume promis, et pas de liste achetée présentée comme une stratégie.",
  },
  {
    title: "SEO local Casablanca",
    body: "Fiche Google Business Profile, nom, adresse et téléphone alignés avec le site, pour une activité vraiment locale à Casablanca ou dans une ville où vous opérez.",
  },
  {
    title: "SEO pour l'IA",
    body: "Des passages qu'une réponse générée peut citer, et un suivi des impressions d'IA générative dans Search Console quand la propriété les affiche. C'est le volet GEO.",
  },
];

export function ServicesGrid() {
  return (
    <section aria-labelledby="prestations" className="px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 id="prestations" className="display max-w-[16ch] text-4xl md:text-5xl">
          Ce que le référencement couvre
        </h2>
        <p className="mt-6 max-w-[62ch] text-base leading-relaxed md:text-lg">
          Six chantiers, un seul interlocuteur à Casablanca. On n&apos;ouvre pas un chantier de liens si la page qui doit prendre la demande n&apos;existe pas encore.
        </p>
        <ul className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.title}
              className="min-w-0 border border-line bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-mute">{service.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
