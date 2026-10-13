import Link from "next/link";
import { MailLink } from "@/components/mail-link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/30 bg-surface-container-low py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-3 md:col-span-2">
            <Link href="/" className="font-headline text-base font-bold tracking-tight text-on-surface">
              Byte Force
            </Link>
            <p className="max-w-sm text-sm text-on-surface-variant">
              Studio logiciel à Casablanca. Sites, applications et logiciels sur mesure.
            </p>
            <address className="pt-2 font-mono text-xs tracking-wide text-outline not-italic">
              Technopark, Bd Dammam, Aïn Chock
              <br />
              20001 Casablanca, Maroc
            </address>
          </div>
          <div>
            <h2 className="mb-4 font-headline text-xs font-bold tracking-wider text-on-surface uppercase">Pages du studio</h2>
            <ul className="space-y-2.5 text-sm">
              <li className="leading-none">
                <Link href="/realisations" className="inline-flex min-h-11 items-center text-on-surface-variant transition-colors hover:text-on-surface">
                  Travaux
                </Link>
              </li>
              <li className="leading-none">
                <Link href="/services" className="inline-flex min-h-11 items-center text-on-surface-variant transition-colors hover:text-on-surface">
                  Services
                </Link>
              </li>
              <li className="leading-none">
                <Link href="/solutions" className="inline-flex min-h-11 items-center text-on-surface-variant transition-colors hover:text-on-surface">
                  Solutions
                </Link>
              </li>
              <li className="leading-none">
                <Link href="/geo-location" className="inline-flex min-h-11 items-center text-on-surface-variant transition-colors hover:text-on-surface">
                  Lieux
                </Link>
              </li>
              <li className="leading-none">
                <Link href="/checklists/comprendre-le-travail" className="inline-flex min-h-11 items-center text-on-surface-variant transition-colors hover:text-on-surface">
                  Comprendre le travail
                </Link>
              </li>
              <li className="leading-none">
                <Link href="/plan-du-site" className="inline-flex min-h-11 items-center text-on-surface-variant transition-colors hover:text-on-surface">
                  Plan du site
                </Link>
              </li>
              <li className="leading-none">
                <Link href="/studio" className="inline-flex min-h-11 items-center text-on-surface-variant transition-colors hover:text-on-surface">
                  Qui sommes-nous
                </Link>
              </li>
              <li className="leading-none">
                <Link href="/insights" className="inline-flex min-h-11 items-center text-on-surface-variant transition-colors hover:text-on-surface">
                  Décisions
                </Link>
              </li>
              <li className="leading-none">
                <Link href="/developpement-logiciel-maroc" className="inline-flex min-h-11 items-center text-on-surface-variant transition-colors hover:text-on-surface">
                  Maroc
                </Link>
              </li>
              <li className="leading-none">
                <Link href="/developpement-logiciel-france" className="inline-flex min-h-11 items-center text-on-surface-variant transition-colors hover:text-on-surface">
                  France
                </Link>
              </li>
              <li className="leading-none">
                <Link href="/audit" className="inline-flex min-h-11 items-center text-on-surface-variant transition-colors hover:text-on-surface">
                  Audit gratuit
                </Link>
              </li>
              <li className="leading-none">
                <Link href="/ai" className="inline-flex min-h-11 items-center text-on-surface-variant transition-colors hover:text-on-surface">
                  Pour les agents
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-headline text-xs font-bold tracking-wider text-on-surface uppercase">Écrire au studio</h2>
            <ul className="space-y-2.5 text-sm">
              <li className="leading-none">
                <Link href="/contact" className="inline-flex min-h-11 items-center text-on-surface-variant transition-colors hover:text-on-surface">
                  Parler d&apos;un projet
                </Link>
              </li>
              <li className="leading-none">
                <MailLink className="inline-flex min-h-11 items-center text-on-surface-variant transition-colors hover:text-on-surface" />
              </li>
              <li className="leading-none">
                <a
                  href="https://wa.me/212666650696"
                  className="inline-flex min-h-11 items-center text-on-surface-variant transition-colors hover:text-on-surface"
                >
                  WhatsApp
                </a>
              </li>
              <li className="leading-none">
                <a href={site.instagram} rel="me" className="inline-flex min-h-11 items-center text-on-surface-variant transition-colors hover:text-on-surface">
                  Instagram
                </a>
              </li>
              <li className="leading-none">
                <a href={site.linkedin} rel="me" className="inline-flex min-h-11 items-center text-on-surface-variant transition-colors hover:text-on-surface">
                  LinkedIn
                </a>
              </li>
              {process.env.NODE_ENV === "development" ? (
                <li className="leading-none">
                  <Link href="/dashboard/login" className="inline-flex min-h-11 items-center text-on-surface-variant transition-colors hover:text-on-surface">
                    Client Portal
                  </Link>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
        <div className="mt-12 grid gap-10 border-t border-outline-variant/20 pt-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 font-headline text-xs font-bold tracking-wider text-on-surface uppercase">Villes au Maroc</h2>
            <ul className="space-y-2.5 text-sm">
              {[
                ["/villes/casablanca", "Casablanca"],
                ["/villes/rabat", "Rabat"],
                ["/villes/marrakech", "Marrakech"],
                ["/villes/tanger", "Tanger"],
                ["/villes/fes", "Fès"],
                ["/villes/safi", "Safi"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="inline-flex min-h-11 items-center text-on-surface-variant hover:text-on-surface">
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/developpement-logiciel-maroc" className="inline-flex min-h-11 items-center text-on-surface hover:text-primary">
                  Voir tout le Maroc
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-headline text-xs font-bold tracking-wider text-on-surface uppercase">Villes en France</h2>
            <ul className="space-y-2.5 text-sm">
              {[
                ["/villes/lille", "Lille"],
                ["/villes/roubaix", "Roubaix"],
                ["/villes/nord", "Nord"],
                ["/villes/marcq-en-baroeul", "Marcq-en-Barœul"],
                ["/villes/montreal", "Montréal"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="inline-flex min-h-11 items-center text-on-surface-variant hover:text-on-surface">
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/developpement-logiciel-france" className="inline-flex min-h-11 items-center text-on-surface hover:text-primary">
                  Voir la France
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-on-surface-variant">
          {site.description} Le bureau est au Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca. On répond du
          lundi au vendredi, de 9h à 19h.
        </p>
        <p className="author mt-8 max-w-3xl text-sm leading-relaxed text-on-surface-variant">
          <Link href="/walid-moultamiss" className="font-semibold text-on-surface">
            Walid Moultamiss
          </Link>
          , fondateur de Byte Force à Casablanca. Full-Stack Software Engineer with 4+ years of experience. Master&apos;s
          studies in computer science at Heriot-Watt University. Lead of the studio.{" "}
          <a href="https://www.linkedin.com/in/walid-moultamiss-56142b1aa">LinkedIn de Walid Moultamiss</a>.
        </p>
        <p className="financial-disclaimer mt-4 max-w-3xl text-xs text-on-surface-variant">
          This page is not financial advice. Aucun prix n&apos;est publié sur ce site.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-sm">
          <Link href="/how-we-write" className="inline-flex min-h-11 items-center">
            Comment les pages sont écrites
          </Link>
          <a href="https://schema.org/">schema.org</a>
          <a href="https://wordpress.org/">wordpress.org</a>
          <a href="https://www.w3.org/TR/html/">W3C HTML</a>
          <time dateTime="2026-10-09">Mis à jour le 9 octobre 2026</time>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-outline-variant/20 pt-8 text-xs text-on-surface-variant sm:flex-row">
          <span>© {new Date().getFullYear()} Byte Force. Tous droits réservés.</span>
          <span className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-on-surface">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-on-surface">
              Politique de confidentialité
            </Link>
            <Link href="/llms.txt" className="hover:text-on-surface">
              llms.txt
            </Link>
            <Link href="/conditions" className="hover:text-on-surface">
              Conditions
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
