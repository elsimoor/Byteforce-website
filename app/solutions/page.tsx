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
        <p className="mt-8 max-w-2xl text-lg leading-relaxed">
          Chaque page nomme un blocage. Le logiciel sur mesure, le SaaS et les applications ont leurs propres adresses.
          Pour écrire : le contact, à Casablanca.
        </p>
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
