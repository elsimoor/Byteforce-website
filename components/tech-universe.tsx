"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./tech-universe.module.css";

export type TechLogo = {
  name: string;
  href: string;
  src: string;
};

const tones = ["cyan", "violet", "pink", "green", "gold"] as const;
const ringClass = [styles.r1, styles.r2, styles.r3, styles.r4];
const ringWeights = [2, 3, 4, 5];

const notes: Record<string, string> = {
  WordPress: "Un socle pour publier et faire évoluer un site quand le contenu existe déjà.",
  Vercel: "La publication des interfaces Next.js, reliée au dépôt.",
  "Power BI": "Les tableaux de bord quand l'entreprise a déjà ses chiffres dans cet outil.",
  MongoDB: "Une base documents, quand les enregistrements ne tiennent pas dans une table fixe.",
  Cloudflare: "Le réseau devant le site : cache, DNS et protection.",
  Firebase: "L'authentification et les données temps réel, quand ce service est déjà le bon choix.",
  TypeScript: "Le typage du code, pour qu'une modification ne casse pas l'écran d'à côté.",
  "Node.js": "Le serveur JavaScript pour les API et les tâches du produit.",
  GraphQL: "Une API où chaque écran demande les champs dont il a besoin.",
  "Next.js": "Le cadre React des produits web du studio, avec le rendu et le référencement.",
  React: "Les interfaces, composées écran par écran.",
  PostgreSQL: "Les enregistrements qui doivent rester exacts : clients, commandes, droits.",
  Redis: "Un état rapide pour la file, le cache ou la session.",
  OVHcloud: "L'hébergement, quand le serveur doit rester dans cette infrastructure.",
  "AI / LLM APIs": "Le modèle, appelé après la règle métier, jamais à sa place.",
  Expo: "L'application téléphone, à partir du même code d'interface.",
  "Microsoft Clarity": "La lecture d'une page réelle : où le curseur s'arrête, où le formulaire bloque.",
  PostHog: "Les événements du produit, pour voir ce que les gens font vraiment.",
  Mailgun: "L'envoi des messages transactionnels.",
  Mailchimp: "La liste, quand l'entreprise écrit déjà à ses contacts avec cet outil.",
  Hostinger: "L'hébergement d'un site qui doit rester simple.",
  Namecheap: "Le nom de domaine.",
  Nindohost: "L'hébergement, quand le site est déjà chez cet hébergeur.",
};

type Placed = TechLogo & {
  index: number;
  tone: (typeof tones)[number];
  left: string;
  top: string;
};

function place(logos: TechLogo[]) {
  const sum = ringWeights.reduce((total, weight) => total + weight, 0);
  const sizes = ringWeights.map((weight) => Math.floor((logos.length * weight) / sum));
  let leftover = logos.length - sizes.reduce((total, size) => total + size, 0);
  for (let i = sizes.length - 1; leftover > 0; i -= 1) {
    sizes[i] += 1;
    leftover -= 1;
    if (i === 0) i = sizes.length;
  }
  const rings: Placed[][] = [];
  let cursor = 0;
  sizes.forEach((size) => {
    if (size < 1) return;
    const slice: Placed[] = [];
    for (let position = 0; position < size; position += 1) {
      const index = cursor + position;
      const logo = logos[index];
      if (!logo) continue;
      const angle = (position / size) * Math.PI * 2 - Math.PI / 2;
      slice.push({
        ...logo,
        index,
        tone: tones[index % tones.length],
        left: `${50 + 50 * Math.sin(angle)}%`,
        top: `${50 - 50 * Math.cos(angle)}%`,
      });
    }
    cursor += size;
    rings.push(slice);
  });
  return rings;
}

function narrowScreen() {
  return window.matchMedia("(max-width: 1100px)").matches;
}

export function TechUniverse({ logos }: { logos: TechLogo[] }) {
  const rootRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lock = useRef(false);
  const rings = useMemo(() => place(logos), [logos]);
  const [selected, setSelected] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [transform, setTransform] = useState<string>();
  const logo = selected === null ? null : logos[selected];

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = rootRef.current;
    if (!canvas || !host) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stars = Array.from({ length: 90 }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
      s: Math.random() * 1.7 + 0.3,
    }));
    let frame = 0;
    let raf = 0;

    function draw() {
      if (!canvas || !host || !context) return;
      const rect = host.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.clearRect(0, 0, rect.width, rect.height);
      const cx = rect.width / 2;
      const cy = rect.height * 0.46;
      for (const star of stars) {
        const depth = reduced ? star.z : (star.z + frame * 0.0012) % 1;
        context.globalAlpha = 0.18 + depth * 0.65;
        context.fillStyle = "#f5f7ff";
        context.beginPath();
        context.arc(
          cx + (star.x - 0.5) * rect.width * (0.25 + depth),
          cy + (star.y - 0.5) * rect.height * (0.18 + depth * 0.7),
          star.s * depth,
          0,
          Math.PI * 2,
        );
        context.fill();
      }
      context.globalAlpha = 1;
      if (!reduced) {
        frame += 1;
        raf = requestAnimationFrame(draw);
      }
    }

    draw();
    const onResize = () => {
      if (reduced) draw();
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (selected === null) return;
    const timer = window.setTimeout(() => setPaused(true), 1350);
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 700);
    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(focusTimer);
    };
  }, [selected]);

  useEffect(() => {
    if (selected === null) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  function open(index: number) {
    if (lock.current || selected !== null) return;
    lock.current = true;
    const zoom = narrowScreen()
      ? "scale(1.05) rotateX(12deg) rotateZ(-4deg) translateY(-10px)"
      : "scale(1.18) rotateX(12deg) rotateZ(-4deg) translateY(-18px)";
    setTransform(zoom);
    setSelected(index);
    window.setTimeout(() => {
      lock.current = false;
    }, 900);
  }

  function close() {
    lock.current = false;
    setPaused(false);
    setTransform(undefined);
    setSelected(null);
  }

  function onPointerMove(event: React.PointerEvent<HTMLElement>) {
    if (selected !== null || window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const scale = narrowScreen() ? "scale(0.78) " : "";
    setTransform(
      `${scale}rotateX(${58 - y * 10}deg) rotateZ(${-16 + x * 12}deg) translate3d(${x * 18}px, ${y * 10}px, 0)`,
    );
  }

  return (
    <section
      ref={rootRef}
      className={`${styles.universe}${selected !== null ? ` ${styles.focused}` : ""}${paused ? ` ${styles.paused}` : ""}`}
      aria-label="Univers des outils"
      onPointerMove={onPointerMove}
      onPointerLeave={() => {
        if (selected === null) setTransform(undefined);
      }}
    >
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.copy}>
        <p className={styles.kicker}>La pile du studio</p>
        <p className={styles.title}>Un univers. Des possibilités infinies.</p>
      </div>
      <div className={styles.scene}>
        <div className={styles.art} style={transform ? { transform } : undefined}>
          {rings.map((ring, ringIndex) => (
            <div
              key={ringClass[ringIndex]}
              className={`${styles.ring} ${ringClass[ringIndex]}${
                selected === null ? "" : ring.some((item) => item.index === selected) ? ` ${styles.selectedRing}` : ` ${styles.dim}`
              }`}
            >
              {ring.map((item) => (
                <div key={item.href} className={styles.planet} style={{ left: item.left, top: item.top }}>
                  <button
                    type="button"
                    className={`${styles.node}${item.index === selected ? ` ${styles.selectedNode}` : ""}`}
                    data-tone={item.tone}
                    aria-label={item.name}
                    aria-pressed={item.index === selected}
                    onClick={() => open(item.index)}
                  >
                    <span className={styles.plate}>
                      <img className={styles.logo} src={item.src} alt="" width={18} height={18} />
                    </span>
                    <span className={styles.label}>{item.name}</span>
                  </button>
                </div>
              ))}
            </div>
          ))}
          <div className={styles.core} aria-hidden="true" />
        </div>
      </div>
      <p className={`${styles.annotations} ${styles.a1}`}>Des outils, pas une liste de modes.</p>
      <p className={`${styles.annotations} ${styles.a2}`}>Chaque logo ouvre sa page.</p>
      <p className={`${styles.annotations} ${styles.a3}`}>Cliquez un outil pour le lire.</p>
      <div className={`${styles.panel}${logo ? ` ${styles.open}` : ""}`} aria-hidden={logo ? undefined : true}>
        {logo ? (
          <>
            <p className={styles.kicker}>Outil sélectionné</p>
            <h3>{logo.name}</h3>
            <p>{notes[logo.name] ?? "Un outil du studio, choisi quand il sert le produit."}</p>
            <div className={styles.actions}>
              <Link className={styles.primary} href={logo.href}>
                Lire la page
              </Link>
              <button ref={closeRef} type="button" className={styles.ghost} onClick={close}>
                Retour à l'univers
              </button>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
