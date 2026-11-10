import type { Metadata } from "next";
import Link from "next/link";
import { AuditRun } from "@/components/audit-run";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { startAudit } from "@/lib/actions";
import { openGraph } from "@/lib/open-graph";
import { seoMeta } from "@/lib/seo-meta";
import { parseAuditUrl } from "@/lib/site-audit";

const { title, description } = seoMeta["/audit"];

type Props = { searchParams: Promise<{ url?: string }> };

const scope = [
  "Le titre",
  "La description",
  "L'indexation",
  "Les images",
  "Le mobile",
  "La technique",
  "La performance",
  "Le référencement",
  "L'accessibilité",
  "La lecture par une machine",
  "La page mène-t-elle à une demande ?",
];

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const query = await searchParams;
  const hasTarget = Boolean((query.url ?? "").trim());
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: "/audit" },
    openGraph: openGraph("/audit", title, description),
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

  if (target) {
    return (
      <article className="w-full bg-[#F4F6FC] text-[#14161F]">
        <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }, { name: "Audit", path: "/audit" }]} />
        <AuditRun url={target} />
      </article>
    );
  }

  return (
    <article className="w-full bg-surface text-[#0B0B1A]">
      <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }, { name: "Audit", path: "/audit" }]} />

      <div className="border-b border-[#D6DBF2] bg-white">
        <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-2.5 font-mono text-xs tracking-[0.04em] uppercase sm:px-8 lg:px-10">
          <p className="font-medium text-primary">ByteForce Free Audit · Audit Gratuit</p>
          <p className="text-[#4B5070]">Page d&apos;accueil · aucun compte</p>
        </div>
      </div>

      <section className="relative overflow-hidden border-b border-[#D6DBF2] bg-surface">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(#E3E7FA 1px, transparent 1px), linear-gradient(90deg, #E3E7FA 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-wrap items-center gap-12 px-5 py-12 sm:px-8 lg:gap-14 lg:px-10 lg:py-16">
          <div className="flex min-w-0 flex-[3_1_520px] flex-col gap-6">
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-2.5 font-mono text-[13px] text-[#4B5070]">
              <Link href="/" className="text-primary underline decoration-primary underline-offset-[3px]">
                Accueil
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#0B0B1A]">Audit gratuit</span>
            </nav>
            <h1 className="font-headline text-[clamp(3.25rem,8vw,7.25rem)] leading-[0.95] font-extrabold tracking-[-0.045em]">
              Audit gratuit<span className="text-primary">.</span>
            </h1>
            <p className="max-w-[620px] text-lg text-[#2A2E4A]">
              On lit la page d&apos;accueil que vous indiquez : le titre, la description, l&apos;indexation, les images et le mobile. Le passage couvre aussi la technique, la performance, le référencement, l&apos;accessibilité, la lecture par une machine, et si la page mène à une demande. C&apos;est gratuit, et aucun compte n&apos;est demandé.
            </p>
            <form action={startAudit} method="POST" className="flex max-w-[620px] flex-col gap-3.5 border border-[#0B0B1A] bg-white p-6 shadow-[8px_8px_0_var(--color-primary)]">
              <label htmlFor="audit-url" className="font-mono text-xs tracking-[0.05em] text-[#4B5070] uppercase">
                Adresse du site
              </label>
              <div className="flex flex-wrap gap-2.5">
                <input
                  id="audit-url"
                  name="url"
                  type="text"
                  required
                  defaultValue={target || raw}
                  placeholder="https://votre-site.ma"
                  autoComplete="url"
                  autoCapitalize="off"
                  spellCheck={false}
                  inputMode="url"
                  className="h-14 w-full min-w-0 border border-[#0B0B1A] bg-surface px-4 text-base text-[#0B0B1A] outline-none placeholder:text-[#6B7090] focus:border-primary sm:w-auto sm:flex-[1_1_240px]"
                />
                <button type="submit" className="inline-flex h-14 w-full items-center justify-between bg-primary px-7 text-[15px] font-semibold text-white sm:w-auto sm:justify-start sm:gap-2.5">
                  Auditer gratuitement
                  <Arrow />
                </button>
              </div>
              <p className="text-[13px] text-[#4B5070]">
                Le champ ci-dessus lance la lecture. Il ne remplace pas un message : l&apos;adresse seule ne dit pas quel geste est cassé.
              </p>
              {error ? (
                <p className="text-sm" role="alert">
                  {error}
                </p>
              ) : null}
            </form>
          </div>

          <div className="w-full min-w-0 max-w-[460px] flex-[2_1_340px] border border-[#0B0B1A] bg-white shadow-[10px_10px_0_#C9D0FF]" aria-hidden="true">
            <div className="flex items-center gap-2 border-b border-[#0B0B1A] px-4 py-3">
              <span className="h-2.5 w-2.5 bg-primary" />
              <span className="h-2.5 w-2.5 bg-[#0B0B1A]" />
              <span className="h-2.5 w-2.5 bg-[#0B0B1A] opacity-30" />
              <span className="ml-2.5 font-mono text-xs text-[#4B5070]">votre-site.ma</span>
            </div>
            <div className="flex flex-col gap-2.5 px-5 pt-5 pb-2 font-mono text-xs">
              {["Titre", "Description", "Indexation", "Images", "Mobile"].map((row) => (
                <div key={row} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 bg-primary" />
                  <span className="w-[100px] shrink-0">{row}</span>
                  <span className="h-1.5 flex-1 bg-[#DDE2F7]" />
                </div>
              ))}
            </div>
            <div className="mx-5 mt-3 border-t border-[#D6DBF2]" />
            <div className="flex flex-col gap-4 px-5 py-5">
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2.5 font-mono text-[11px] tracking-[0.05em] uppercase">
                  <span className="h-2.5 w-2.5 bg-[#0B0B1A]" />
                  Ce qui bloque
                </p>
                <span className="h-1.5 w-[86%] bg-[#0B0B1A] opacity-75" />
                <span className="h-1.5 w-[58%] bg-[#0B0B1A] opacity-75" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2.5 font-mono text-[11px] tracking-[0.05em] uppercase">
                  <span className="h-2.5 w-2.5 border-[1.5px] border-primary" />
                  Ce qui peut attendre
                </p>
                <span className="h-1.5 w-[72%] bg-primary opacity-55" />
                <span className="h-1.5 w-[40%] bg-primary opacity-55" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2.5 font-mono text-[11px] tracking-[0.05em] text-[#4B5070] uppercase">
                  <span className="h-2.5 w-2.5 border-[1.5px] border-dashed border-[#6B7090]" />
                  Ce qui n&apos;a pas été lu
                </p>
                <span className="h-1.5 w-[64%] bg-[#C9CDE6]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-[1200px] flex-col gap-9 px-5 pt-16 pb-6 sm:px-8 lg:px-10 lg:pt-20">
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-3">
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs tracking-[0.05em] text-primary uppercase">Périmètre</p>
            <h2 className="font-headline text-4xl leading-[1.05] font-extrabold tracking-[-0.035em] lg:text-[2.75rem]">Ce que la lecture couvre.</h2>
          </div>
          <p className="max-w-[420px] text-[15px] text-[#4B5070]">
            L&apos;accueil est lu en entier. Un échantillon du même site est ajouté quand les liens internes le permettent.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-px border border-[#0B0B1A] bg-[#0B0B1A]">
          {scope.map((item, index) => (
            <div key={item} className="flex min-h-[120px] flex-col justify-between bg-white p-6">
              <span className="font-mono text-xs text-primary">{String(index + 1).padStart(2, "0")}</span>
              <span className="font-headline text-[21px] font-bold tracking-[-0.02em]">{item}</span>
            </div>
          ))}
          <div className="flex min-h-[120px] flex-col justify-between bg-primary p-6 text-white">
            <span className="font-mono text-xs text-[#C9D0FF]">Free</span>
            <span className="font-headline text-[21px] font-bold tracking-[-0.02em]">Gratuit, et aucun compte n&apos;est demandé.</span>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-[1200px] flex-wrap gap-10 px-5 py-12 sm:px-8 lg:px-10">
        {[
          ["A", "Les limites", "La lecture s'arrête à ce que la page montre. Elle n'ouvre pas le compte DNS, ni le compte qui publie, et elle ne choisit pas un cadre. Un temps de réponse n'est pas une mesure de laboratoire. Aucun chiffre de trafic n'est promis."],
          ["B", "Le passage", "Le résultat dit ce qui bloque, ce qui peut attendre, et ce qui n'a pas été lu. Corriger se décide ensuite, à Casablanca, après avoir vu le geste réel."],
          ["C", "Le résultat", "Le résultat reste une lecture, pas un devis. Il nomme ce qui empêche la page d'être trouvée, lue, ou utilisée. Il ne promet pas une place dans un résultat de recherche, et il ne remplace pas le message qui décrit le projet."],
        ].map(([mark, heading, text]) => (
          <div key={mark} className="flex min-w-0 flex-[1_1_300px] flex-col gap-3.5 border-t-4 border-primary pt-5">
            <p className="font-mono text-xs text-primary">{mark}</p>
            <h3 className="font-headline text-[26px] font-extrabold tracking-[-0.03em]">{heading}</h3>
            <p className="text-[15px] text-[#2A2E4A]">{text}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-5 pt-6 pb-16 sm:px-8 lg:px-10 lg:pb-20">
        <div className="flex flex-wrap items-center gap-6 border border-[#0B0B1A] bg-white p-8 lg:gap-14 lg:p-10">
          <h2 className="min-w-0 flex-[1_1_320px] font-headline text-[2.125rem] leading-[1.08] font-extrabold tracking-[-0.035em]">
            La page collée doit être publique<span className="text-primary">.</span>
          </h2>
          <p className="min-w-0 flex-[1_1_380px] text-base text-[#2A2E4A]">
            Une adresse interne, un fichier, ou un écran derrière un mot de passe n&apos;est pas lu. Le passage ne se connecte pas à la place du visiteur. Il regarde ce qu&apos;un premier visiteur verrait, puis il s&apos;arrête.
          </p>
        </div>
      </section>

      <section className="bg-primary text-white">
        <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center gap-9 px-5 py-16 sm:px-8 lg:gap-14 lg:px-10 lg:py-18">
          <div className="flex min-w-0 flex-[2_1_460px] flex-col gap-4">
            <p className="font-mono text-xs tracking-[0.05em] text-[#C9D0FF] uppercase">Contact</p>
            <h2 className="font-headline text-4xl leading-[1.05] font-extrabold tracking-[-0.035em] lg:text-[2.75rem]">
              Écrire sert à dire l&apos;adresse, ce qui bloque, et depuis quand.
            </h2>
            <p className="max-w-[640px] text-base text-[#E4E8FF]">
              La réponse part sous un jour ouvré, du lundi au vendredi, de 9 h à 19 h. Le premier échange de trente minutes est gratuit. Aucun prix n&apos;est affiché ici : le montant suit le périmètre, une fois qu&apos;il est nommé.
            </p>
          </div>
          <div className="flex min-w-0 flex-[1_1_240px] flex-col gap-3">
            <Link href="/contact" className="flex min-h-11 items-center justify-between bg-white px-5 py-4 text-[15px] font-semibold text-primary">
              Parler d&apos;un projet
              <Arrow />
            </Link>
            <a href="https://wa.me/212666650696" className="flex min-h-11 items-center justify-center border border-white px-5 py-4 text-[15px] font-medium">
              WhatsApp direct
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
