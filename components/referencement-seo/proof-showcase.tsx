"use client";

import { useEffect, useRef, useState } from "react";
import { BrowserFrame } from "./browser-frame";
import styles from "./landing.module.css";
import { generativeShot, performanceShot } from "@/lib/referencement-seo";

const shots = [performanceShot, generativeShot];

export function ProofShowcase() {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const shot = active === null ? null : shots[active];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active === null) {
      if (dialog.open) dialog.close();
      return;
    }
    if (!dialog.open) dialog.showModal();
  }, [active]);

  return (
    <section aria-labelledby="preuves" className="border-t border-line px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 id="preuves" className="display max-w-[18ch] text-4xl md:text-5xl">
          On pilote avec Search Console
        </h2>
        <p className="mt-6 max-w-[62ch] text-base leading-relaxed md:text-lg">
          Deux lectures du même compte : la performance classique, puis les réponses générées. Cliquez une capture pour l&apos;agrandir.
        </p>
        <div className="mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-8">
          {shots.map((item, index) => (
            <figure key={item.src} className="min-w-0">
              <button
                type="button"
                className="w-full text-left font-sans"
                onClick={() => setActive(index)}
                aria-haspopup="dialog"
              >
                <BrowserFrame src={item.src} alt={item.alt} width={item.width} height={item.height} label={item.label} />
                <span className={`${styles.draw} mt-3 inline-block text-sm text-primary`}>Agrandir la capture</span>
              </button>
              <figcaption className="mt-4 max-w-[62ch] text-base leading-relaxed text-mute">{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      <dialog
        ref={dialogRef}
        className={styles.lightbox}
        aria-labelledby="capture-title"
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setActive(null);
        }}
      >
        {shot ? (
          <div className="bg-white">
            <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
              <p id="capture-title" className="font-mono text-xs tracking-wide text-mute">
                {shot.label}
              </p>
              <button type="button" className="btn-line px-3 py-2" autoFocus onClick={() => setActive(null)}>
                Fermer
              </button>
            </div>
            <BrowserFrame
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              label={shot.label}
              sizes="(min-width: 1024px) 1080px, 100vw"
            />
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
