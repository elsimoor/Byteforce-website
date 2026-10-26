"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useReducedMotion,
  useSpring,
  AnimatePresence,
} from "motion/react";

/* -------------------------------------------------------------------------- */
/* 1. HERO HEADLINE MASK REVEAL                                               */
/* cubic-bezier(0.22, 1, 0.36, 1) · ~600ms per line                          */
/* -------------------------------------------------------------------------- */
const EASE = [0.22, 1, 0.36, 1] as const;

export function StudioHeroHeadline({
  line1,
  line2,
  accentWord,
}: {
  line1: string;
  line2: string;
  accentWord?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const lineVariants = {
    hidden: { y: shouldReduceMotion ? 0 : "110%", opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.65,
        ease: EASE,
      },
    },
  };

  return (
    <motion.h1
      className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-[1.12]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <span className="block overflow-hidden py-0.5">
        <motion.span className="block" variants={lineVariants}>
          {line1}
        </motion.span>
      </span>
      <span className="block overflow-hidden py-0.5">
        <motion.span className="block" variants={lineVariants}>
          {line2}{" "}
          {accentWord && (
            <span className="font-serif italic font-normal text-amber-400">
              {accentWord}
            </span>
          )}
        </motion.span>
      </span>
    </motion.h1>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. STATS COUNT-UP                                                          */
/* Counts up once when scrolled into view                                     */
/* -------------------------------------------------------------------------- */
export function StudioStatCount({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) {
      setCount(target);
      return;
    }

    const duration = 1200;
    const start = performance.now();

    function update(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    const frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target, shouldReduceMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. SUBTLE PARALLAX CONTAINER (Max 5 to 8%)                                */
/* -------------------------------------------------------------------------- */
export function StudioParallaxContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["-4%", "4%"]
  );

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 4. PROJECT CATALOGUE WITH CURSOR-FOLLOWING PREVIEW (Desktop only)          */
/* -------------------------------------------------------------------------- */
export type CatalogueItem = {
  slug: string;
  title: string;
  city: string;
  year: string;
  category: string;
  shot?: string;
};

export function StudioCatalogueList({ items }: { items: CatalogueItem[] }) {
  const [activeShot, setActiveShot] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>("");
  const [isPointerFine, setIsPointerFine] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useSpring(0, { stiffness: 350, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 350, damping: 30 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setIsPointerFine(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsPointerFine(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isPointerFine || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left + 24);
    mouseY.set(e.clientY - rect.top - 80);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative"
    >
      {isPointerFine && (
        <AnimatePresence>
          {activeShot && (
            <motion.div
              style={{ x: mouseX, y: mouseY }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="pointer-events-none absolute z-50 hidden md:block"
            >
              <div className="w-[280px] overflow-hidden rounded-xl border border-stone-300/80 bg-stone-900 p-1.5 shadow-2xl">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-stone-800">
                  <Image
                    src={activeShot}
                    alt={activeTitle}
                    fill
                    sizes="280px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="px-2 py-1 text-center font-mono text-[10px] text-stone-300 truncate">
                  {activeTitle}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      <ul className="divide-y divide-stone-800/80">
        {items.map((project, idx) => (
          <li
            key={project.slug}
            onMouseEnter={() => {
              if (project.shot) {
                setActiveShot(project.shot);
                setActiveTitle(project.title);
              }
            }}
            onMouseLeave={() => {
              setActiveShot(null);
            }}
            className="group py-3.5 transition-colors duration-150 hover:bg-stone-900/40"
          >
            <Link
              href={`/realisations/${project.slug}`}
              className="flex items-baseline justify-between gap-4 text-sm text-stone-300 group-hover:text-amber-300 transition-colors"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] text-stone-600 group-hover:text-amber-500/80 transition-colors">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="font-medium text-white group-hover:translate-x-1 transition-transform duration-200">
                  {project.title}
                </span>
                <span className="hidden sm:inline font-mono text-[11px] text-stone-500">
                  · {project.category}
                </span>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="font-mono text-xs text-stone-500">
                  {project.city} · {project.year}
                </span>
                <span className="font-mono text-xs text-amber-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-200">
                  →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
