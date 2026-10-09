import type { Metadata } from "next";
import Link from "next/link";
import { AuditForm } from "@/components/audit-form";
import { AuditRun } from "@/components/audit-run";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { openGraph } from "@/lib/open-graph";
import { parseAuditUrl } from "@/lib/site-audit";

const title = "Audit gratuit d'une page d'accueil";
const description =
  "Byte Force lit gratuitement la page d'accueil d'un site : titre, description, indexation, images, mobile. Sans compte.";

type Props = { searchParams: Promise<{ url?: string }> };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const query = await searchParams;
  const hasTarget = Boolean((query.url ?? "").trim());
  return {
    title,
    description,
    alternates: { canonical: "/audit" },
    openGraph: openGraph("/audit", `${title} · Byte Force`, description),
    robots: hasTarget ? { index: false, follow: true } : { index: true, follow: true },
  };
}

export default async function AuditPage({ searchParams }: Props) {
  const query = await searchParams;
  const raw = (query.url ?? "").trim();
  let target = "";
  let error = "";
  if (raw) {
    try {
      target = parseAuditUrl(raw).href;
    } catch (caught) {
      error = caught instanceof Error ? caught.message : "Adresse refusée.";
    }
  }

  return (
    <main className="px-6 py-16 md:px-12 md:py-24">
      <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }, { name: "Audit", path: "/audit" }]} />
      <p className="text-sm text-mute">
        <Link href="/">Accueil</Link>
      </p>
      <h1 className="display mt-6 max-w-[11ch] text-[clamp(3.2rem,8vw,6.8rem)]">Audit gratuit.</h1>
      <div className="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed">
        <p>
          On lit la page d&apos;accueil que vous indiquez : le titre, la description, l&apos;indexation, les images et le
          mobile. Le passage couvre aussi la technique, la performance, le référencement, l&apos;accessibilité, la
          lecture par une machine, et si la page mène à une demande. C&apos;est gratuit, et aucun compte n&apos;est
          demandé.
        </p>
        <p>
          La lecture s&apos;arrête à ce que la page montre. Elle n&apos;ouvre pas le compte DNS, ni le compte qui
          publie, et elle ne choisit pas un cadre. Un temps de réponse n&apos;est pas une mesure de laboratoire. Aucun
          chiffre de trafic n&apos;est promis.
        </p>
        <p>
          L&apos;accueil est lu en entier. Un échantillon du même site est ajouté quand les liens internes le
          permettent. Le résultat dit ce qui bloque, ce qui peut attendre, et ce qui n&apos;a pas été lu. Corriger se
          décide ensuite, à Casablanca, après avoir vu le geste réel.
        </p>
        <p>
          Écrire sert à dire l&apos;adresse, ce qui bloque, et depuis quand. La réponse part sous un jour ouvré, du
          lundi au vendredi, de 9 h à 19 h. Le premier échange de trente minutes est gratuit. Aucun prix n&apos;est
          affiché ici : le montant suit le périmètre, une fois qu&apos;il est nommé.
        </p>
        <p>
          La page collée doit être publique. Une adresse interne, un fichier, ou un écran derrière un mot de passe
          n&apos;est pas lu. Le passage ne se connecte pas à la place du visiteur. Il regarde ce qu&apos;un premier
          visiteur verrait, puis il s&apos;arrête.
        </p>
        <p>
          Le résultat reste une lecture, pas un devis. Il nomme ce qui empêche la page d&apos;être trouvée, lue, ou
          utilisée. Il ne promet pas une place dans un résultat de recherche, et il ne remplace pas le message qui
          décrit le projet.
        </p>
      </div>
      {target ? <AuditRun url={target} /> : <AuditForm initial={raw} />}
      {error ? (
        <p className="mt-6 max-w-md text-sm" role="alert">
          {error}
        </p>
      ) : null}
      {target ? (
        <div className="mt-20 border-t border-line pt-10">
          <AuditForm initial={target} />
        </div>
      ) : (
        <p className="mt-16 max-w-2xl text-sm leading-relaxed text-mute">
          Le champ ci-dessus lance la lecture. Il ne remplace pas un message : l&apos;adresse seule ne dit pas quel
          geste est cassé.
        </p>
      )}
    </main>
  );
}
