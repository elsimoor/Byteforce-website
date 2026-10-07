import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/30 bg-surface-container-low py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-3 md:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <img alt="" className="h-6 w-auto object-contain" src="/mark.png" />
              <span className="font-headline text-base font-bold tracking-tight text-on-surface">ByteForce</span>
            </Link>
            <p className="max-w-sm text-sm text-on-surface-variant">Software engineering studio.</p>
            <p className="pt-2 font-mono text-xs tracking-wide text-outline">
              Technopark, Bd Dammam, Aïn Chock
              <br />
              20001 Casablanca
            </p>
          </div>
          <div>
            <h2 className="mb-4 font-headline text-xs font-bold tracking-wider text-on-surface uppercase">Studio</h2>
            <ul className="space-y-2.5 text-sm">
              <li className="leading-none">
                <Link href="/#selected-work" className="text-on-surface-variant transition-colors hover:text-on-surface">
                  Work
                </Link>
              </li>
              <li className="leading-none">
                <Link href="/#capabilities" className="text-on-surface-variant transition-colors hover:text-on-surface">
                  Services
                </Link>
              </li>
              <li className="leading-none">
                <Link href="/#about" className="text-on-surface-variant transition-colors hover:text-on-surface">
                  About
                </Link>
              </li>
              <li className="leading-none">
                <Link href="/#insights" className="text-on-surface-variant transition-colors hover:text-on-surface">
                  Insights
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-headline text-xs font-bold tracking-wider text-on-surface uppercase">Connect</h2>
            <ul className="space-y-2.5 text-sm">
              <li className="leading-none">
                <Link href="/contact" className="text-on-surface-variant transition-colors hover:text-on-surface">
                  Start a project
                </Link>
              </li>
              <li className="leading-none">
                <a
                  href={`mailto:${site.email}`}
                  className="text-on-surface-variant transition-colors hover:text-on-surface"
                >
                  {site.email}
                </a>
              </li>
              <li className="leading-none">
                <a
                  href="https://wa.me/212666650696"
                  className="text-on-surface-variant transition-colors hover:text-on-surface"
                >
                  WhatsApp
                </a>
              </li>
              {process.env.NODE_ENV === "development" ? (
                <li className="leading-none">
                  <Link href="/dashboard/login" className="text-on-surface-variant transition-colors hover:text-on-surface">
                    Client Portal
                  </Link>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-outline-variant/20 pt-8 text-xs text-on-surface-variant sm:flex-row">
          <span>© {new Date().getFullYear()} ByteForce. All rights reserved.</span>
          <span className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-on-surface">
              Legal
            </Link>
            <Link href="/confidentialite" className="hover:text-on-surface">
              Privacy
            </Link>
            <Link href="/conditions" className="hover:text-on-surface">
              Terms
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
