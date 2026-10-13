import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { moneyPages } from "@/lib/money";
import { openGraph } from "@/lib/open-graph";

const title = "Solutions · Logiciel d'entreprise";
const description =
  "Pages Byte Force pour un problème précis : Excel, un SaaS trop rigide, l'automatisation, une application à reprendre, une PME, une entreprise.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/solutions" },
  openGraph: openGraph("/solutions", title, description),
};

export default function SolutionsPage() {
  const pages = moneyPages.filter((page) => page.path.startsWith("solutions/"));
  return (
    <main>
      <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }, { name: "Solutions", path: "/solutions" }]} />
      <header className="px-6 pb-12 pt-16 md:px-12 md:pt-24">
        <nav aria-label="Fil d'Ariane" className="text-sm text-mute">
          <Link href="/">Accueil</Link>
          {" · "}
          Solutions
        </nav>
        <h1 className="display mt-6 max-w-[14ch] text-[clamp(2.8rem,6vw,5.4rem)]">Un problème, une page.</h1>
        <div className="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed">
          <p>
            Chaque page nomme un blocage. Excel qui est devenu le dossier. Un SaaS qui force l&apos;équipe à changer
            son geste. Une application déjà en ligne qu&apos;il faut reprendre. Une PME qui veut un outil simple. Une
            entreprise qui veut le même logiciel pour plusieurs services.
          </p>
          <p>
            Le bureau est au Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca. Il n&apos;y a pas de bureau en
            France. Les projets français se font depuis Casablanca. La réponse part sous un jour ouvré, du lundi au
            vendredi, de 9h à 19h.
          </p>
          <p>
            Aucun prix n&apos;est affiché. Le montant suit le périmètre : les écrans, les rôles, les branchements. Le
            premier échange de trente minutes est gratuit. Le code, le dépôt et les comptes d&apos;hébergement
            reviennent au client.
          </p>
          <p>
            Avant d&apos;écrire, la liste utile est{" "}
            <Link href="/checklists/comprendre-le-travail">comprendre le travail</Link>. Elle dit qui fait l&apos;action,
            avec quel fichier, et où ça s&apos;arrête. Ensuite viennent le dessin, la construction, la mise en ligne et
            le suivi.
          </p>
          <p>
            Les offres du studio sont sur <Link href="/services">Services</Link>. Le cadre national est le{" "}
            <Link href="/developpement-logiciel-maroc">développement logiciel au Maroc</Link>. Pour une entreprise en
            France, la page est le <Link href="/developpement-logiciel-france">développement logiciel pour la France</Link>.
            Pour écrire, la page est le <Link href="/contact">contact</Link>.
          </p>
          <p>
            Une page de solution ne remplace pas un devis. Elle dit le problème, le geste à reprendre, et ce qui ne sera
            pas inventé ici : pas de témoignage, pas de pourcentage, pas de délai promis avant le périmètre.
          </p>
        </div>
      </header>
      <ul className="border-t border-line">
        {pages.map((page) => (
          <li key={page.path} className="border-b border-line">
            <Link href={`/${page.path}`} className="grid gap-2 px-6 py-8 md:px-12">
              <span className="text-2xl">{page.h1}</span>
              <span className="text-sm text-mute">{page.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
