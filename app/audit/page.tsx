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
      <p className="mt-8 max-w-md text-lg leading-relaxed">
        On lit la page d&apos;accueil, point par point. Gratuit, sans compte.
      </p>
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
        <p className="mt-16 max-w-md text-sm leading-relaxed text-mute">
          Le résultat porte sur cette page seulement. Corriger ce qui bloque la lecture se décide ensuite, à Casablanca.
        </p>
      )}
    </main>
  );
}
