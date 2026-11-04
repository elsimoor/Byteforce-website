import Link from "next/link";
import styles from "./landing.module.css";

const related = [
  { href: "/services/creation-site-web", label: "Création de site web au Maroc" },
  { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure au Maroc" },
  { href: "/developpement-application-mobile-maroc", label: "Application mobile au Maroc" },
  { href: "/services", label: "Toutes les offres du studio" },
  { href: "/", label: "Page d'accueil Byte Force" },
];

const offers = [
  {
    title: "Audit",
    body: "Lecture du site et de Search Console, puis une liste de priorités. Pas de grille publique : le périmètre se chiffre après cette lecture.",
    cta: "Demander un audit SEO gratuit",
  },
  {
    title: "Accompagnement mensuel",
    body: "Technique, contenu, netlinking et rapport. Le rythme se fixe une fois l'audit écrit, pas avant.",
    cta: "Parler de l'accompagnement",
  },
  {
    title: "Sur mesure",
    body: "Site à créer, marché local, ou reprise d'un existant. On écrit le périmètre avec vous, puis seulement le devis.",
    cta: "Décrire le besoin",
  },
];

export function LocalSection() {
  return (
    <>
      <section aria-labelledby="local-titre" className="border-t border-line px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 id="local-titre" className="display max-w-[16em] text-4xl md:text-5xl">
            Pourquoi une agence de référencement Maroc
          </h2>
          <p className="mt-6 max-w-[70ch] text-base leading-relaxed md:text-lg">
            Le bureau est au Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca. Les recherches se font en français, souvent en arabe, et la comparaison se fait avec des acteurs locaux autant qu&apos;avec un cabinet à distance.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
            <article>
              <h3 className="text-2xl font-semibold tracking-tight">Un consultant SEO Maroc, et une équipe</h3>
              <p className="mt-4 max-w-[62ch] text-base leading-relaxed">
                Un consultant suit souvent le dossier seul. Ici, la technique, l&apos;écriture et les liens passent par le même studio. Si la page n&apos;existe pas, la création du site ou le logiciel peuvent partir du même échange.
              </p>
            </article>
            <article>
              <h3 className="text-2xl font-semibold tracking-tight">Ce qu&apos;un prestataire SEO livre</h3>
              <p className="mt-4 max-w-[62ch] text-base leading-relaxed">
                Un audit, des corrections, des pages, des liens utiles, et un relevé mensuel. Le livrable se juge dans Search Console. Il ne se juge pas à une capture de position promise à l&apos;avance.
              </p>
            </article>
            <article>
              <h3 className="text-2xl font-semibold tracking-tight">L&apos;agence référencement web commence par la page</h3>
              <p className="mt-4 max-w-[62ch] text-base leading-relaxed">
                Être trouvé ne sert à rien si la page ne peut pas prendre une demande. Quand le site manque, on le construit. Quand l&apos;outil métier est le sujet, le logiciel vient avec. Le référencement ne remplace pas l&apos;offre.
              </p>
            </article>
            <article>
              <h3 className="text-2xl font-semibold tracking-tight">Le SEO Casablanca et le marché bilingue</h3>
              <p className="mt-4 max-w-[62ch] text-base leading-relaxed">
                Une requête locale attend un lieu réel et une fiche Google Business Profile alignée avec le site, pour une activité qui est vraiment ici. On n&apos;ouvre pas une page ville pour une ville sans bureau ni clients à servir.
              </p>
            </article>
          </div>
          <p className="mt-12">
            <Link href="/contact" className="btn">
              Contacter l&apos;agence SEO Casablanca
            </Link>
          </p>
          <nav aria-label="Pages liées" className="mt-10 flex flex-col gap-3 text-base">
            {related.map((item) => (
              <Link key={item.href} href={item.href} className={`${styles.draw} w-fit`}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>
      <section aria-labelledby="engagements" className="border-t border-line px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 id="engagements" className="display max-w-[14ch] text-4xl md:text-5xl">
            Trois façons de commencer
          </h2>
          <p className="mt-6 max-w-[62ch] text-base leading-relaxed md:text-lg">
            Aucun montant sur cette page. Le devis suit le périmètre, pas une grille.
          </p>
          <ul className="mt-12 grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
            {offers.map((offer) => (
              <li key={offer.title} className="flex flex-col border border-line bg-white p-6">
                <h3 className="text-2xl font-semibold tracking-tight">{offer.title}</h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-mute">{offer.body}</p>
                <Link href="/contact" className="btn mt-8">
                  {offer.cta}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
