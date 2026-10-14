import type { CSSProperties } from "react";

const SLICES = 12;

export function HeroSlices({ src, slices = SLICES }: { src: string; slices?: number }) {
  const n = Math.max(1, slices);
  return (
    <div
      className="hero-slices"
      style={
        {
          "--hero": `url("${src}")`,
          "--n": n,
          gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`,
        } as CSSProperties
      }
      aria-hidden="true"
    >
      <link rel="preload" as="image" href={src} />
      {Array.from({ length: n }, (_, i) => (
        <div key={i} className="hero-slice" style={{ "--i": i } as CSSProperties}>
          <span />
        </div>
      ))}
    </div>
  );
}
