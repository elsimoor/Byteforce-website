"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode, type SVGProps } from "react";

export function Stage({
  children,
  caption,
  href,
  link,
  note = "Illustration. Pas une mesure de ce site.",
}: {
  children: ReactNode;
  caption: string;
  href?: string;
  link?: string;
  note?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => setPaused(!entry.isIntersecting), { rootMargin: "120px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <figure ref={ref} className={paused ? "illus is-paused mt-8 max-w-3xl" : "illus mt-8 max-w-3xl"}>
      {children}
      <figcaption className="mt-4 max-w-xl text-sm leading-relaxed" aria-live="polite">
        {caption}
      </figcaption>
      <p className="mt-2 font-mono text-xs text-mute">{note}</p>
      {href && link ? (
        <p className="mt-3 text-sm">
          <Link href={href} className="border-b border-ink">
            {link}
          </Link>
        </p>
      ) : null}
    </figure>
  );
}

export function markKey(event: KeyboardEvent, run: () => void) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    run();
  }
}

export function HitPath({
  d,
  active,
  label,
  onSelect,
}: {
  d: string;
  active: boolean;
  label: string;
  onSelect: () => void;
}) {
  return (
    <g>
      <path d={d} fill="none" stroke="currentColor" strokeWidth={active ? 1.6 : 1} strokeOpacity={active ? 1 : 0.28} />
      <path
        d={d}
        role="button"
        tabIndex={0}
        aria-pressed={active}
        aria-label={label}
        onClick={onSelect}
        onKeyDown={(event) => markKey(event, onSelect)}
        fill="none"
        stroke="transparent"
        strokeWidth="18"
        className="cursor-pointer"
      />
    </g>
  );
}

export function Flow({ d, active }: { d: string; active: boolean }) {
  if (!active) return null;
  return (
    <>
      <path d={d} fill="none" stroke="currentColor" strokeWidth="1.25" className="flow" />
      <circle r="4.5" fill="var(--color-surface)" stroke="currentColor" strokeWidth="1.5" className="travel" style={{ offsetPath: `path('${d}')` }} />
    </>
  );
}

export function Node({ x, y, on, label }: { x: number; y: number; on?: boolean; label: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r="15" fill={on ? "currentColor" : "var(--color-surface)"} stroke="currentColor" />
      <text x={x} y={y + 32} textAnchor="middle" fontSize="12" fill="currentColor">
        {label}
      </text>
    </g>
  );
}

export function svgProps(label: string): SVGProps<SVGSVGElement> {
  return { viewBox: "0 0 640 230", role: "img", "aria-label": label, className: "w-full text-ink" };
}
