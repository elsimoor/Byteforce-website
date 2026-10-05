import Link from "next/link";

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
              Casablanca, Morocco • 33.5731° N, 7.5898° W
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
                  href="mailto:studio@byteforce.io"
                  className="text-on-surface-variant transition-colors hover:text-on-surface"
                >
                  studio@byteforce.io
                </a>
              </li>
              <li className="leading-none">
                <Link href="/dashboard/login" className="text-on-surface-variant transition-colors hover:text-on-surface">
                  Client Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-outline-variant/20 pt-8 text-xs text-on-surface-variant sm:flex-row">
          <span>© 2025 ByteForce Studio SARL. All rights reserved.</span>
          <span>Engineered with precision.</span>
        </div>
      </div>
    </footer>
  );
}
