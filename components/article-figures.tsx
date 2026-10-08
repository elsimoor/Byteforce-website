"use client";

import { useEffect, useState } from "react";

type Figure = { src: string; alt: string; caption: string };

export function ArticleFigures({ figures }: { figures: Figure[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const [scale, setScale] = useState(1);
  const figure = open === null ? null : figures[open];

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  function show(index: number) {
    setScale(1);
    setOpen(index);
  }

  return (
    <>
      <div className="mt-10 grid max-w-3xl gap-8">
        {figures.map((item, index) => (
          <figure key={item.src}>
            <button
              type="button"
              onClick={() => show(index)}
              className="block w-full cursor-zoom-in text-left"
              aria-label={`Agrandir : ${item.alt}`}
            >
              <img src={item.src} alt={item.alt} className="w-full border border-line" />
            </button>
            <figcaption className="mt-3 text-sm text-mute">
              {item.caption} Cliquer pour agrandir.
            </figcaption>
          </figure>
        ))}
      </div>
      {figure ? (
        <div
          className="fixed inset-0 z-[80] flex flex-col bg-ink/90"
          role="dialog"
          aria-modal="true"
          aria-label={figure.alt}
        >
          <div className="flex items-center justify-end gap-2 px-4 py-3">
            <button
              type="button"
              onClick={() => setScale((value) => Math.max(1, Number((value - 0.25).toFixed(2))))}
              className="border border-paper px-3 py-2 text-sm text-paper"
            >
              Réduire
            </button>
            <button
              type="button"
              onClick={() => setScale((value) => Math.min(4, Number((value + 0.25).toFixed(2))))}
              className="border border-paper px-3 py-2 text-sm text-paper"
            >
              Agrandir
            </button>
            <span className="px-2 text-sm text-paper">{Math.round(scale * 100)}%</span>
            <button
              type="button"
              onClick={() => setOpen(null)}
              className="bg-paper px-3 py-2 text-sm text-ink"
              autoFocus
            >
              Fermer
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-auto px-4 pb-6">
            <img
              src={figure.src}
              alt={figure.alt}
              style={{ width: `${scale * 100}%`, maxWidth: "none" }}
              className="mx-auto border border-line bg-paper"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
