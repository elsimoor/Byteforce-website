import type { Metadata } from "next";
import Link from "next/link";
import { moneyPages } from "@/lib/money";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Notes from Byte Force on replacing Excel, leaving a SaaS, automating a company, and modernising an application.",
  alternates: { canonical: "/insights" },
};

const groups = ["Problème", "Audience"];

export default function InsightsPage() {
  return (
    <main>
      <header className="px-6 pb-8 pt-16 md:px-12 md:pt-24">
        <h1 className="display max-w-[14ch] text-[clamp(3.2rem,8vw,7rem)]">Insights.</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed">
          Writing for someone who already has the problem: a spreadsheet, a stack of subscriptions, a manual process, or
          an application nobody wants to touch.
        </p>
      </header>
      {groups.map((group) => (
        <section key={group} className="border-t border-line">
          <h2 className="px-6 pt-10 text-sm text-mute md:px-12">{group === "Problème" ? "Problems" : "Who it is for"}</h2>
          <ul>
            {moneyPages
              .filter((page) => page.group === group)
              .map((page) => (
                <li key={page.path} className="border-t border-line">
                  <Link href={`/${page.path}`} className="block px-6 py-6 md:px-12">
                    <span className="text-xl">{page.h1}</span>
                    <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-mute">{page.description}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
