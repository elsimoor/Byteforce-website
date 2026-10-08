import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CommercialView } from "@/components/commercial-view";
import { getMoneyPage, moneyPages } from "@/lib/money";
import { openGraph } from "@/lib/open-graph";

type Props = { params: Promise<{ slug: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return moneyPages.map((page) => ({ slug: page.path.split("/") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getMoneyPage(slug.join("/"));
  if (!page) return {};
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: `/${page.path}` },
    openGraph: openGraph(`/${page.path}`, page.title, page.description),
    robots: { index: true, follow: true },
  };
}

export default async function MoneyRoute({ params }: Props) {
  const { slug } = await params;
  const page = getMoneyPage(slug.join("/"));
  if (!page) notFound();
  return <CommercialView page={page} />;
}
