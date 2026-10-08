import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/json-ld";

const links = [
  { href: "/ai", label: "L'entreprise" },
  { href: "/ai/services", label: "Services" },
  { href: "/ai/work", label: "Travaux" },
  { href: "/ai/contact", label: "Contact" },
  { href: "/ai/faq", label: "Questions" },
];

export function AiDoc({
  path,
  title,
  lede,
  children,
}: {
  path: string;
  title: string;
  lede: string;
  children: React.ReactNode;
}) {
  return (
    <main className="px-6 py-16 md:px-12 md:py-24">
      <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }, { name: "Agents", path: "/ai" }, ...(path === "/ai" ? [] : [{ name: title, path }])]} />
      <p className="text-sm text-mute">
        <Link href="/">Accueil</Link>
        {" · "}
        <Link href="/llms.txt">llms.txt</Link>
      </p>
      <h1 className="display mt-6 max-w-[16ch] text-[clamp(2.8rem,6vw,5.4rem)]">{title}</h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed">{lede}</p>
      <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Fiche agent">
        {links.map((link) => (
          <Link key={link.href} href={link.href} aria-current={link.href === path ? "page" : undefined} className={link.href === path ? "border-b border-ink" : "text-mute"}>
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="mt-14 max-w-3xl space-y-12">{children}</div>
    </main>
  );
}
