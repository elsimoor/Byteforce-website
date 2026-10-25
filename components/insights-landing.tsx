"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import type { Article } from "@/lib/articles";
import type { InsightCategory } from "@/lib/insight-categories";
import type { MoneyPage } from "@/lib/money";

export function InsightsLanding({
  articles,
  categories,
  moneyPages,
}: {
  articles: Article[];
  categories: InsightCategory[];
  moneyPages: MoneyPage[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [featuredIndex, setFeaturedIndex] = useState<number>(0);

  const cardImages = [
    "/tech-bg-1.jpg",
    "/services-hero-torus.jpg",
    "/services-bento-ribbon.jpg",
    "/studio/technopark.png",
    "/work/coco-inbox.jpg",
    "/work/proche.jpg",
    "/work/nu-lille.jpg",
    "/work/tourispeak.jpg",
    "/work/dealkhir.jpg",
  ];

  // Top 3 featured articles for the big banner carousel
  const featuredArticles = useMemo(() => {
    return articles.slice(0, 3);
  }, [articles]);

  const activeFeatured = featuredArticles[featuredIndex] ?? articles[0];

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        searchQuery === "" ||
        article.h1.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;
      if (selectedCategory === "all") return true;

      const cat = categories.find((c) => c.slug === selectedCategory);
      if (cat) {
        return cat.slugs.includes(article.slug);
      }
      return true;
    });
  }, [articles, categories, selectedCategory, searchQuery]);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    setCurrentPage(1);
  };

  return (
    <div className="w-full bg-[#f8fafc] text-slate-900 selection:bg-[#000dbf] selection:text-white">
      {/* 1. CINEMATIC FEATURED HERO (Horizone style top banner) */}
      <section className="px-4 pt-6 md:px-8 md:pt-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="relative min-h-[460px] overflow-hidden rounded-3xl bg-slate-950 p-8 shadow-2xl md:min-h-[520px] md:p-14 lg:p-16">
            {/* Background Image */}
            <Image
              src={cardImages[featuredIndex % cardImages.length]}
              alt={activeFeatured.h1}
              fill
              priority
              className="object-cover opacity-50 transition-all duration-700 ease-out"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-black/30" />

            {/* Content Container */}
            <div className="relative z-10 flex h-full flex-col justify-end">
              {/* Category Pill */}
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-white/20 px-4 py-1 font-mono text-xs font-bold text-white backdrop-blur-md">
                  À la Une · Décisions Studio
                </span>
                <span className="hidden rounded-full bg-blue-600/80 px-3 py-1 font-mono text-xs font-semibold text-white backdrop-blur-md sm:inline-block">
                  Technopark Casablanca
                </span>
              </div>

              {/* Title & Excerpt */}
              <Link href={`/insights/${activeFeatured.slug}`} className="group mt-4 block max-w-3xl">
                <h1 className="text-3xl font-extrabold tracking-tight text-white transition-colors duration-200 group-hover:text-blue-300 sm:text-4xl md:text-5xl lg:text-[3.2rem] lg:leading-[1.1]">
                  {activeFeatured.h1}
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                  {activeFeatured.description}
                </p>
              </Link>

              {/* Author Footer & Carousel Indicators */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6">
                <div className="flex items-center gap-3">
                  <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/20">
                    <Image
                      src="/walid-moultamiss-byte-force-maroc.png"
                      alt="Walid Moultamiss"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Walid Moultamiss</div>
                    <div className="text-xs text-slate-400">
                      {activeFeatured.date || "Octobre 2026"} · 6 min de lecture
                    </div>
                  </div>
                </div>

                {/* Carousel indicator dots */}
                <div className="flex items-center gap-2">
                  {featuredArticles.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      aria-label={`Article vedette ${idx + 1}`}
                      onClick={() => setFeaturedIndex(idx)}
                      className={`h-2.5 rounded-full transition-all ${
                        featuredIndex === idx ? "w-8 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN BLOG SECTION */}
      <section className="px-4 py-16 md:px-8 md:py-24 lg:px-12" id="blog">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
                Blog & Décisions
              </h2>
              <p className="mt-3 max-w-xl text-base text-slate-600">
                Analyses de terrain, retours d&apos;expérience et repères d&apos;ingénierie pour décider avant de construire
                votre logiciel.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder="Rechercher un sujet..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full rounded-full border border-slate-200 bg-white px-4 py-2.5 pl-10 text-xs text-slate-900 shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
              />
              <svg
                className="absolute top-3 left-3.5 h-4 w-4 text-slate-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Filter Category Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-slate-200 pb-6">
            <button
              type="button"
              onClick={() => handleCategoryChange("all")}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                selectedCategory === "all"
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              Tous les articles ({articles.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => handleCategoryChange(cat.slug)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  selectedCategory === cat.slug
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat.h1.replace("Décisions sur ", "").replace("Décisions ", "")}
              </button>
            ))}
          </div>

          {/* 3-Column Articles Grid (Horizone Style) */}
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedArticles.map((article, idx) => {
              const bgImg = cardImages[(idx + (currentPage - 1) * 3) % cardImages.length];

              return (
                <article
                  key={article.slug}
                  className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
                >
                  <Link href={`/insights/${article.slug}`} className="block">
                    {/* Card Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                      <Image
                        src={bgImg}
                        alt={article.h1}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                      {/* Category Badge on Image */}
                      <div className="absolute top-3 left-3">
                        <span className="rounded-full bg-slate-950/70 px-3 py-1 font-mono text-[10px] font-bold text-white backdrop-blur-md">
                          Ingénierie
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <span>{article.date || "2026"}</span>
                        <span>•</span>
                        <span>5 min read</span>
                      </div>

                      <h3 className="mt-2 text-lg font-bold tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-primary">
                        {article.h1}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3">
                        {article.description}
                      </p>
                    </div>
                  </Link>

                  {/* Card Author Footer */}
                  <div className="flex items-center gap-2.5 border-t border-slate-100 px-6 py-4">
                    <div className="relative h-7 w-7 overflow-hidden rounded-full border border-slate-200">
                      <Image
                        src="/walid-moultamiss-byte-force-maroc.png"
                        alt="Walid Moultamiss"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs font-semibold text-slate-700">Walid Moultamiss</span>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-14 flex items-center justify-center gap-2">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-bold text-slate-700 transition-colors hover:bg-slate-100 disabled:opacity-40"
              >
                ‹
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold transition-all ${
                    currentPage === page
                      ? "bg-slate-900 text-white shadow"
                      : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-bold text-slate-700 transition-colors hover:bg-slate-100 disabled:opacity-40"
              >
                ›
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. SECTION "Quelle page lire" (Preserving 100% of original studio guidance) */}
      <section className="border-t border-slate-200/80 bg-white px-4 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold tracking-wider text-primary uppercase">
              Orientation & Diagnostic
            </span>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Quelle page lire selon votre situation
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Chaque article répond à une question précise. Les pages qui suivent traitent un cas réel pour décider sans
              illusion.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200/90 bg-slate-50 p-6">
              <span className="font-mono text-xs font-bold text-primary">01 · Le Fichier Excel</span>
              <h3 className="mt-2 text-base font-bold text-slate-900">Quand sortir du tableur</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Se lit quand plusieurs personnes écrivent dans la même feuille sans savoir qui a la dernière version. La
                page dit aussi quand garder Excel sans le remplacer à tout prix.
              </p>
              <Link href="/solutions/remplacer-excel" className="mt-4 inline-block text-xs font-bold text-primary hover:underline">
                Lire le guide →
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-slate-50 p-6">
              <span className="font-mono text-xs font-bold text-primary">02 · L&apos;Abonnement SaaS</span>
              <h3 className="mt-2 text-base font-bold text-slate-900">Quand l&apos;outil dicte le métier</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Se lit quand l&apos;outil du marché force l&apos;équipe à contourner. Parfois la réponse est de renégocier,
                pas d&apos;écrire.
              </p>
              <Link href="/solutions/remplacer-saas" className="mt-4 inline-block text-xs font-bold text-primary hover:underline">
                Lire le guide →
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-slate-50 p-6">
              <span className="font-mono text-xs font-bold text-primary">03 · L&apos;Automatisation</span>
              <h3 className="mt-2 text-base font-bold text-slate-900">Un geste, pas tout le chaos</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Se lit quand le circuit passe encore par un message et une feuille : on commence par un processus cible,
                pas par toute l&apos;entreprise d&apos;un coup.
              </p>
              <Link href="/solutions/automatisation-entreprise" className="mt-4 inline-block text-xs font-bold text-primary hover:underline">
                Lire le guide →
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-slate-50 p-6">
              <span className="font-mono text-xs font-bold text-primary">04 · Modernisation</span>
              <h3 className="mt-2 text-base font-bold text-slate-900">Reprendre un code existant</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Se lit quand une application existe déjà et que plus personne n&apos;ose la toucher. Le but est de
                continuer dessus avec méthode, pas de refaire pour le plaisir.
              </p>
              <Link href="/solutions/moderniser-application" className="mt-4 inline-block text-xs font-bold text-primary hover:underline">
                Lire le guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM BENTO PROMOTION BANNER (Matching Horizone Screenshot exactly) */}
      <section className="px-4 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Left Stack (5 cols) */}
            <div className="flex flex-col gap-6 lg:col-span-5">
              {/* Card 1: Explore more to get your software zone */}
              <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-8 text-white shadow-xl">
                <div className="relative z-10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-white md:text-3xl">
                    Décrivez votre cas sans engagement
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    Un premier échange de trente minutes pour voir si le problème nécessite un développement sur mesure.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-slate-950 shadow-md transition-colors hover:bg-slate-100"
                    >
                      <span>Décrire le cas</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2: Article Available Counter with Photo */}
              <div className="relative min-h-[160px] overflow-hidden rounded-3xl bg-slate-900 p-6 text-white shadow-xl">
                <Image
                  src="/studio/technopark.png"
                  alt="Articles disponibles"
                  fill
                  className="object-cover opacity-35"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end">
                  <span className="font-mono text-xs font-semibold text-slate-300">Articles disponibles</span>
                  <div className="mt-1 text-4xl font-black text-white">{articles.length}+</div>
                </div>
              </div>
            </div>

            {/* Right Wide Panoramic Card (7 cols) */}
            <div className="relative min-h-[380px] overflow-hidden rounded-3xl bg-slate-950 p-8 text-white shadow-xl lg:col-span-7 lg:p-14">
              <Image
                src="/services-bento-ribbon.jpg"
                alt="Beyond code, creating software that endures"
                fill
                className="object-cover opacity-60"
                sizes="(max-width: 1024px) 100vw, 700px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

              <div className="relative z-10 flex h-full flex-col justify-end">
                <span className="font-mono text-xs font-bold tracking-widest text-blue-300 uppercase">
                  Philosophie Studio
                </span>
                <blockquote className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
                  &ldquo;L&apos;ingénierie logicielle au service de la rentabilité : décider avant de construire.&rdquo;
                </blockquote>
                <p className="mt-4 max-w-xl text-xs leading-relaxed text-slate-300">
                  Chaque écran et chaque règle de code doivent répondre à une réalité d&apos;exploitation. Le code, le
                  dépôt et les accès d&apos;hébergement remis reviennent intégralement au client.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Link
                    href="/studio"
                    className="inline-flex items-center gap-2 text-xs font-bold text-blue-300 hover:text-white"
                  >
                    <span>Découvrir le studio</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
