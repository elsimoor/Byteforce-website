import type { Metadata } from "next";
import Link from "next/link";
import { AuditTabs } from "@/components/audit-tabs";

export const metadata: Metadata = {
  title: "Pages choisies",
  robots: { index: false, follow: false },
  alternates: { canonical: "/audit" },
};

type Props = { searchParams: Promise<{ id?: string }> };

export default async function AuditLotPage({ searchParams }: Props) {
  const query = await searchParams;
  const id = (query.id ?? "").trim();

  return (
    <main className="px-6 py-16 md:px-12 md:py-24">
      <p className="text-sm text-mute">
        <Link href="/audit">Audit</Link>
      </p>
      <h1 className="display mt-6 max-w-[14ch] text-[clamp(2.8rem,6vw,5rem)]">Les pages choisies.</h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed">
        Chaque onglet est une page du sitemap. La lecture part en même temps, et le résultat reste dans ce navigateur.
      </p>
      <AuditTabs lotId={id} />
    </main>
  );
}
