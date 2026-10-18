"use client";

import React, { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import styles from "./CaseStudy.module.css";
import type {
  Block,
  Body,
  CaseStudyProps,
  ImageSrc,
  Label,
} from "./types";

const cx = (...c: (string | false | null | undefined)[]) =>
  c.filter(Boolean).join(" ");

/** Pick black or white text for a given background color (hex only). */
function readableOn(hex: string): string {
  const m = /^#?([\da-f]{3}|[\da-f]{6})$/i.exec(hex.trim());
  if (!m) return "#fff";
  let h = m[1];
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 150 ? "#0b0b0f" : "#ffffff";
}

function Reveal({
  children,
  enabled,
  className,
}: {
  children: ReactNode;
  enabled: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(!enabled);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [enabled]);

  return (
    <div
      ref={ref}
      className={cx(styles.reveal, shown && styles.revealed, className)}
    >
      {children}
    </div>
  );
}

function Paragraphs({ body }: { body?: Body }) {
  if (!body) return null;
  const items = Array.isArray(body) ? body : [body];
  return (
    <>
      {items.map((p, i) => (
        <p className={styles.p} key={i}>
          {p}
        </p>
      ))}
    </>
  );
}

function LabelRow({ label }: { label?: Label }) {
  if (!label) return null;
  const parts = Array.isArray(label) ? label : [label];
  return (
    <div className={styles.label}>
      {parts.map((p, i) => (
        <span key={i}>{p}</span>
      ))}
    </div>
  );
}

export function CaseStudy({
  data,
  theme = "dark",
  accent = "#7C5CFF",
  maxWidth = 1200,
  animate = true,
  renderImage,
  renderLink,
  className,
}: CaseStudyProps) {
  const rootStyle = {
    "--cs-accent": accent,
    "--cs-max": `${maxWidth}px`,
  } as CSSProperties;

  const Img = ({ image, cls }: { image: ImageSrc; cls?: string }) =>
    renderImage ? (
      <>{renderImage(image, cls)}</>
    ) : (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className={cls}
        src={image.src}
        alt={image.alt ?? ""}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
      />
    );

  const A = ({
    href,
    cls,
    children,
  }: {
    href: string;
    cls?: string;
    children: ReactNode;
  }) =>
    renderLink ? (
      <>{renderLink({ href, className: cls, children })}</>
    ) : (
      <a className={cls} href={href}>
        {children}
      </a>
    );

  const renderBlock = (b: Block, i: number) => {
    switch (b.type) {
      case "text":
        return (
          <section
            className={cx(
              styles.section,
              styles.text,
              b.align === "right" && styles.alignRight,
              b.align === "center" && styles.alignCenter
            )}
          >
            <div className={styles.container}>
              <LabelRow label={b.label} />
              <div className={styles.textInner}>
                {b.title && <h2 className={styles.h2}>{b.title}</h2>}
                <Paragraphs body={b.body} />
                {b.bullets && (
                  <ul className={styles.bullets}>
                    {b.bullets.map((x, k) => (
                      <li key={k}>{x}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </section>
        );

      case "image":
        return (
          <section className={styles.section}>
            <div className={b.bleed ? styles.bleed : styles.container}>
              <figure className={styles.figure}>
                <Img image={b.image} cls={styles.img} />
                {b.caption && (
                  <figcaption className={styles.caption}>{b.caption}</figcaption>
                )}
              </figure>
            </div>
          </section>
        );

      case "gallery": {
        const cols = b.columns ?? Math.min(b.images.length, 4);
        const variant = b.variant ?? "card";
        return (
          <section className={styles.section}>
            <div className={styles.container}>
              <div
                className={cx(
                  styles.gallery,
                  variant === "phones" && styles.galleryPhones,
                  variant === "card" && styles.galleryCard
                )}
                style={{ "--cs-cols": cols } as CSSProperties}
              >
                {b.images.map((im, k) => (
                  <div className={styles.galleryItem} key={k}>
                    <Img image={im} cls={styles.img} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      }

      case "split":
        return (
          <section className={styles.section}>
            <div className={styles.container}>
              <LabelRow label={b.label} />
              <div className={cx(styles.split, b.reverse && styles.splitReverse)}>
                <div className={styles.splitText}>
                  {b.title && <h2 className={styles.h2}>{b.title}</h2>}
                  <Paragraphs body={b.body} />
                  {b.bullets && (
                    <ul className={styles.bullets}>
                      {b.bullets.map((x, k) => (
                        <li key={k}>{x}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className={styles.splitMedia}>
                  <Img image={b.image} cls={styles.img} />
                </div>
              </div>
            </div>
          </section>
        );

      case "palette":
        return (
          <section className={styles.section}>
            <div className={styles.container}>
              <LabelRow label={b.label} />
              <div className={styles.textInner}>
                {b.title && <h2 className={styles.h2}>{b.title}</h2>}
                <Paragraphs body={b.body} />
              </div>
              <div className={styles.swatches}>
                {b.colors.map((c, k) => (
                  <div
                    className={styles.swatch}
                    key={k}
                    style={{ background: c.hex, color: readableOn(c.hex) }}
                  >
                    <strong>{c.name}</strong>
                    <span>{c.hex.toUpperCase()}</span>
                    {c.usage && <em>{c.usage}</em>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case "typography":
        return (
          <section className={styles.section}>
            <div className={styles.container}>
              <LabelRow label={b.label} />
              <div className={styles.textInner}>
                {b.title && <h2 className={styles.h2}>{b.title}</h2>}
                <Paragraphs body={b.body} />
              </div>
              <div className={styles.fonts}>
                {b.fonts.map((f, k) => (
                  <div className={styles.font} key={k}>
                    <div
                      className={styles.fontSample}
                      style={{ fontFamily: f.family }}
                    >
                      {f.sample ?? "Aa Bb Cc 0123"}
                    </div>
                    <div className={styles.fontMeta}>
                      <strong>{f.name}</strong>
                      {f.weights && <span>{f.weights.join(" · ")}</span>}
                      {f.usage && <em>{f.usage}</em>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case "stats":
        return (
          <section className={styles.section}>
            <div className={styles.container}>
              <LabelRow label={b.label} />
              <div className={styles.stats}>
                {b.items.map((s, k) => (
                  <div className={styles.stat} key={k}>
                    <div className={styles.statValue}>{s.value}</div>
                    <div className={styles.statLabel}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case "custom":
        return (
          <section className={styles.section}>
            <div className={styles.container}>{b.render}</div>
          </section>
        );

      default:
        return null;
    }
  };

  const { hero, scope, meta, tags, nextCase, cta } = data;

  return (
    <article
      className={cx(
        styles.root,
        theme === "light" ? styles.light : styles.dark,
        className
      )}
      style={rootStyle}
    >
      <header className={cx(styles.section, styles.header)}>
        <div className={styles.container}>
          <h1 className={styles.h1}>{data.title}</h1>
          {data.tagline && <p className={styles.tagline}>{data.tagline}</p>}
          {meta && meta.length > 0 && (
            <dl className={styles.meta}>
              {meta.map((m, i) => (
                <div key={i}>
                  <dt>{m.label}</dt>
                  <dd>{m.value}</dd>
                </div>
              ))}
            </dl>
          )}
          {tags && tags.length > 0 && (
            <ul className={styles.tags}>
              {tags.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          )}
        </div>
      </header>

      {hero && (
        <Reveal enabled={animate}>
          <div className={styles.bleed}>
            <Img image={hero} cls={cx(styles.img, styles.hero)} />
          </div>
        </Reveal>
      )}

      {scope && (
        <Reveal enabled={animate}>
          <section className={cx(styles.section, styles.text)}>
            <div className={styles.container}>
              <div className={styles.textInner}>
                <h2 className={styles.h2}>{scope.title ?? "The Scope"}</h2>
                <Paragraphs body={scope.body} />
              </div>
            </div>
          </section>
        </Reveal>
      )}

      {data.blocks.map((b, i) => (
        <Reveal enabled={animate} key={i}>
          {renderBlock(b, i)}
        </Reveal>
      ))}

      {nextCase && (
        <section className={cx(styles.section, styles.next)}>
          <div className={styles.container}>
            <A href={nextCase.href} cls={styles.nextLink}>
              <span className={styles.nextLabel}>
                {nextCase.label ?? "Next case"}
              </span>
              <span className={styles.nextTitle}>{nextCase.title} →</span>
            </A>
          </div>
        </section>
      )}

      {cta && (
        <footer className={cx(styles.section, styles.cta)}>
          <div className={styles.container}>
            <h2 className={styles.ctaTitle}>
              {cta.title ?? "We would love to hear from you."}
            </h2>
            {cta.text && <p className={styles.p}>{cta.text}</p>}
            <div className={styles.ctaRow}>
              <A href={cta.href} cls={styles.button}>
                {cta.buttonLabel}
              </A>
              {cta.secondary && (
                <A href={cta.secondary.href} cls={styles.link}>
                  {cta.secondary.label}
                </A>
              )}
            </div>
          </div>
        </footer>
      )}
    </article>
  );
}

export default CaseStudy;
