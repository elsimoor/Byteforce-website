const ticker = ["Sites", "Applications", "Logiciels sur mesure", "CRM", "Plateformes", "Casablanca"];

export function StudioStamp({ size = 132 }: { size?: number }) {
  const pathId = `bf-stamp-${size}`;
  return (
    <div className="bf-float relative" style={{ width: size, height: size }}>
      <div className="absolute inset-0 rounded-full bg-white" />
      <svg className="bf-spin absolute inset-0" viewBox="0 0 160 160" width={size} height={size} aria-hidden="true">
        <defs>
          <path id={pathId} d="M80,80 m-58,0 a58,58 0 1,1 116,0 a58,58 0 1,1 -116,0" />
        </defs>
        <text fontFamily="var(--font-mono), monospace" fontSize="11" letterSpacing="2.6" fill="#070A2B" fontWeight="500">
          <textPath href={`#${pathId}`}>BYTE FORCE · SUR MESURE · CASABLANCA · </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center font-headline text-[1.7rem] font-extrabold tracking-[-0.06em] text-primary" style={{ fontSize: size > 110 ? 36 : 26 }}>
        BF
      </div>
    </div>
  );
}

export function WorkTicker() {
  const row = [...ticker, ...ticker];
  return (
    <section aria-label="Ce que fait le studio" className="overflow-hidden border-y-2 border-[#070A2B] bg-primary text-white">
      <div className="bf-marquee flex w-max py-3.5 text-[2.75rem] leading-none font-extrabold tracking-[-0.04em] uppercase sm:py-5 sm:text-[4.75rem]">
        {row.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className={index % 2 === 1 ? "pr-7 text-transparent sm:pr-10" : "pr-7 sm:pr-10"}
            style={index % 2 === 1 ? { WebkitTextStroke: "2px #fff" } : undefined}
          >
            {word}
          </span>
        ))}
      </div>
    </section>
  );
}

export function ProjectCta({ siteUrl }: { siteUrl?: string }) {
  return (
    <section id="devis" className="bg-primary text-white">
      <div className="mx-auto flex w-full max-w-[1264px] flex-col gap-7 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <h2 className="max-w-[12em] font-headline text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.96] font-extrabold tracking-[-0.05em]">
          Vous vendez un service que le client doit comprendre avant de vous écrire ?
        </h2>
        <p className="max-w-[32em] text-lg text-[#E3E5FF] sm:text-xl">Décrivez-le-nous, nous revenons avec un devis sous 24 h.</p>
        <div className="flex flex-wrap gap-3.5">
          <a href="/contact" className="inline-flex min-h-12 items-center rounded-md bg-white px-7 text-[17px] font-bold text-[#0A0D2E]">
            Démarrer un projet →
          </a>
          {siteUrl ? (
            <a href={siteUrl} rel="noopener noreferrer" className="inline-flex min-h-12 items-center rounded-md border-[1.5px] border-white px-7 text-[17px] font-semibold">
              Voir le site
            </a>
          ) : (
            <a href="https://wa.me/212666650696" className="inline-flex min-h-12 items-center rounded-md border-[1.5px] border-white px-7 text-[17px] font-semibold">
              Écrire sur WhatsApp
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
