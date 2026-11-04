import { referencementFaqs } from "@/lib/referencement-seo";

export function Faq() {
  return (
    <section aria-labelledby="faq-titre" className="border-t border-line px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 id="faq-titre" className="display text-4xl md:text-5xl">
          Questions fréquentes
        </h2>
        <div className="mt-10 border-b border-line">
          {referencementFaqs.map((item) => (
            <details key={item.q} className="group border-t border-line">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-lg leading-snug [&::-webkit-details-marker]:hidden">
                {item.q}
                <span aria-hidden="true" className="mt-1 font-mono text-primary transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none">
                  +
                </span>
              </summary>
              <p className="max-w-[70ch] pb-6 text-base leading-relaxed text-mute">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
