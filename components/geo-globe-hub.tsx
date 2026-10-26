"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Icon } from "@/components/icon";

// Dynamically import EarthGlobe to ensure client-only WebGL execution with zero SSR issues
const EarthGlobe = dynamic(
  () => import("@/globe component/EarthGlobe").then((mod) => mod.EarthGlobe),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-[#070b33]">
        <div className="h-28 w-28 rounded-full border-2 border-blue-500/30 border-t-blue-400 animate-spin" />
      </div>
    ),
  }
);

export type GeoPlace = {
  city: string;
  pages: { href: string; label: string }[];
};

export type GeoCountry = {
  country: string;
  places: GeoPlace[];
};

export type GeoGroup = {
  name: string;
  parent: { href: string; label: string };
  countries: GeoCountry[];
};

export function GeoGlobeHub({ groups }: { groups: GeoGroup[] }) {
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedGroup, setExpandedGroup] = useState<string | null>(groups[0]?.name || null);

  // Extract unique countries
  const allCountries = useMemo(() => {
    const set = new Set<string>();
    groups.forEach((g) => g.countries.forEach((c) => set.add(c.country)));
    return Array.from(set);
  }, [groups]);

  // Compute total places and pages
  const totalStats = useMemo(() => {
    let placesCount = 0;
    let pagesCount = 0;
    const placesSet = new Set<string>();
    groups.forEach((g) => {
      g.countries.forEach((c) => {
        c.places.forEach((p) => {
          placesSet.add(p.city);
          pagesCount += p.pages.length;
        });
      });
    });
    placesCount = placesSet.size;
    return { placesCount, pagesCount };
  }, [groups]);

  // Filter groups according to country & search term
  const filteredGroups = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return groups
      .map((group) => {
        const filteredCountries = group.countries
          .filter((c) => selectedCountry === "all" || c.country === selectedCountry)
          .map((c) => {
            const filteredPlaces = c.places
              .map((p) => {
                const matchCity = p.city.toLowerCase().includes(q);
                const matchingPages = p.pages.filter(
                  (pg) => matchCity || pg.label.toLowerCase().includes(q)
                );
                return {
                  ...p,
                  pages: q ? matchingPages : p.pages,
                };
              })
              .filter((p) => (q ? p.pages.length > 0 : true));

            return {
              ...c,
              places: filteredPlaces,
            };
          })
          .filter((c) => c.places.length > 0);

        return {
          ...group,
          countries: filteredCountries,
        };
      })
      .filter((group) => group.countries.length > 0);
  }, [groups, selectedCountry, searchQuery]);

  return (
    <div className="w-full text-slate-100">
      
      {/* 01. 3D THREE.JS WORLD HERO VIEWPORT (Root-page blueish theme) */}
      <div className="relative overflow-hidden rounded-3xl border border-blue-900/40 bg-[#070b33] shadow-2xl">
        
        {/* Glow ambient background behind the globe */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-blue-600/20 blur-[130px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-indigo-600/25 blur-[110px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 min-h-[580px] items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-blue-300">
                <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="uppercase tracking-widest font-bold">
                  Présence Géographique & Déploiements
                </span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Ingénierie logicielle opérée depuis <span className="text-blue-400 font-serif italic font-normal">Casablanca</span> pour le monde entier.
              </h1>

              <p className="mt-5 max-w-xl text-base sm:text-lg text-slate-200 leading-relaxed font-sans">
                Chaque page correspond à une couverture locale précise. Tous nos développements, 
                architectures cloud et applications métier sont directement pilotés depuis notre siège au 
                Technopark de Casablanca.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-8 pt-6 border-t border-blue-900/60 grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="rounded-xl bg-[#0d1245]/90 border border-blue-900/50 p-3">
                <span className="text-slate-400 block uppercase">Siège Central</span>
                <span className="font-bold text-white text-sm mt-0.5 block">Casablanca (MA)</span>
                <span className="text-[11px] text-blue-300">Technopark · 20001</span>
              </div>
              <div className="rounded-xl bg-[#0d1245]/90 border border-blue-900/50 p-3">
                <span className="text-slate-400 block uppercase">Villes Couvertes</span>
                <span className="font-bold text-white text-sm mt-0.5 block">{totalStats.placesCount} territoires</span>
                <span className="text-[11px] text-emerald-400">{allCountries.join(" · ")}</span>
              </div>
              <div className="col-span-2 sm:col-span-1 rounded-xl bg-[#0d1245]/90 border border-blue-900/50 p-3">
                <span className="text-slate-400 block uppercase">Pages Métier</span>
                <span className="font-bold text-white text-sm mt-0.5 block">{totalStats.pagesCount} URLs</span>
                <span className="text-[11px] text-blue-200">Indexées & qualifiées</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/50 hover:bg-blue-500 active:scale-[0.98] transition"
              >
                <span>Démarrer un projet</span>
                <span>↗</span>
              </Link>
              <Link
                href="/studio"
                className="inline-flex items-center gap-2 rounded-full border border-blue-800 bg-[#070b33]/80 px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-blue-950 transition"
              >
                <span>Découvrir le studio</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right 3D Three.js Globe Display */}
          <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[480px] lg:h-[580px] flex items-center justify-center p-4">
            <div className="relative w-full h-full max-w-[480px] max-h-[480px]">
              {/* Three.js Globe Canvas Container */}
              <EarthGlobe
                textureUrl="/textures/earth-blue-marble.jpg"
                speed={0.08}
                startLongitude={-7.58} // Center on Casablanca/Morocco longitude
                tiltNorth={0.35}
                tiltRoll={0.12}
                className="w-full h-full"
              />

              {/* Floating coordinates badge */}
              <div className="absolute top-4 right-4 rounded-xl border border-blue-800/80 bg-[#070b33]/85 px-3 py-2 text-[11px] font-mono backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-white font-bold">Casablanca HQ</span>
                </div>
                <div className="text-blue-300 mt-0.5">33.5731° N, 7.5898° W</div>
              </div>

              {/* Floating deployment node badges */}
              <div className="absolute bottom-6 left-4 rounded-xl border border-blue-800/80 bg-[#070b33]/85 px-3 py-2 text-[11px] font-mono backdrop-blur-md">
                <div className="text-slate-300">Pôles d&apos;intervention :</div>
                <div className="text-blue-300 font-semibold mt-0.5">
                  Maroc · France · Canada
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 02. INTERACTIVE FILTER & SEARCH CONTROLS (Blueish themed) */}
      <div className="mt-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 rounded-2xl border border-blue-900/40 bg-[#0d1245] p-4 sm:p-5">
        
        {/* Country Filter Chips */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedCountry("all")}
            className={`rounded-full px-4 py-2 text-xs font-mono font-bold transition ${
              selectedCountry === "all"
                ? "bg-blue-600 text-white shadow-md shadow-blue-900/40"
                : "bg-[#070b33] text-blue-200 border border-blue-900/60 hover:border-blue-500 hover:text-white"
            }`}
          >
            Tous les pays ({totalStats.placesCount})
          </button>
          {allCountries.map((country) => (
            <button
              key={country}
              onClick={() => setSelectedCountry(country)}
              className={`rounded-full px-4 py-2 text-xs font-mono font-bold transition ${
                selectedCountry === country
                  ? "bg-blue-600 text-white shadow-md shadow-blue-900/40"
                  : "bg-[#070b33] text-blue-200 border border-blue-900/60 hover:border-blue-500 hover:text-white"
              }`}
            >
              {country === "Maroc" && "🇲🇦 "}
              {country === "France" && "🇫🇷 "}
              {country === "Canada" && "🇨🇦 "}
              {country}
            </button>
          ))}
        </div>

        {/* Real-time Search Box */}
        <div className="relative min-w-[260px] sm:min-w-[320px]">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher une ville, un service..."
            className="w-full rounded-full border border-blue-800 bg-[#070b33] px-4 py-2.5 pl-10 text-xs text-white placeholder-blue-300/40 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-300 pointer-events-none">
            <Icon name="search" />
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-blue-300 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>

      </div>

      {/* 03. SERVICE & GEOGRAPHIC SECTIONS */}
      <div className="mt-8 space-y-6">
        {filteredGroups.length === 0 ? (
          <div className="rounded-2xl border border-blue-900/40 bg-[#0d1245] p-12 text-center">
            <p className="text-base text-slate-300 font-mono">
              Aucun lieu ni service ne correspond à &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCountry("all");
              }}
              className="mt-4 rounded-full bg-blue-600 px-5 py-2 text-xs font-bold text-white hover:bg-blue-500 transition"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          filteredGroups.map((group) => {
            const isExpanded = expandedGroup === group.name || searchQuery.length > 0;
            return (
              <div
                key={group.name}
                className="overflow-hidden rounded-2xl border border-blue-900/40 bg-[#0d1245] transition-colors"
              >
                {/* Header Row */}
                <div
                  onClick={() => setExpandedGroup(isExpanded ? null : group.name)}
                  className="flex cursor-pointer items-center justify-between p-6 hover:bg-[#0f1754]/50 transition select-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400">
                      <Icon name="language" />
                    </span>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {group.name}
                      </h2>
                      <div className="flex items-center gap-3 mt-1 text-xs font-mono text-slate-400">
                        <Link
                          href={group.parent.href}
                          onClick={(e) => e.stopPropagation()}
                          className="text-blue-300 hover:underline"
                        >
                          Fiche service ({group.parent.label}) ↗
                        </Link>
                        <span>·</span>
                        <span>
                          {group.countries.reduce((acc, c) => acc + c.places.length, 0)} villes
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-slate-400 hidden sm:inline">
                      {isExpanded ? "Replier" : "Développer"}
                    </span>
                    <span
                      className={`text-blue-300 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    >
                      <Icon name="expand_more" />
                    </span>
                  </div>
                </div>

                {/* Expanded City Grid */}
                {isExpanded && (
                  <div className="border-t border-blue-900/50 p-6 pt-5 bg-[#070b33]/60 space-y-6">
                    {group.countries.map((countryObj) => (
                      <div key={countryObj.country} className="space-y-3">
                        <div className="flex items-center gap-2 font-mono text-xs font-bold text-blue-300 uppercase tracking-wider">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                          <span>{countryObj.country}</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                          {countryObj.places.map((place) => (
                            <div
                              key={place.city}
                              className="rounded-xl border border-blue-900/60 bg-[#070b33]/90 p-3 hover:border-blue-500/60 transition-colors"
                            >
                              <div className="flex items-center justify-between pb-2 border-b border-blue-900/50 text-xs">
                                <span className="font-bold text-white">{place.city}</span>
                                <span className="font-mono text-[11px] text-blue-400">
                                  {place.pages.length} {place.pages.length > 1 ? "pages" : "page"}
                                </span>
                              </div>

                              <ul className="mt-2 space-y-1.5">
                                {place.pages.map((item) => (
                                  <li key={item.href}>
                                    <Link
                                      href={item.href}
                                      className="group flex items-baseline justify-between text-xs text-slate-300 hover:text-blue-300 transition-colors"
                                    >
                                      <span className="truncate">{item.label}</span>
                                      <span className="font-mono text-[11px] text-blue-500 group-hover:text-blue-300 group-hover:translate-x-0.5 transition shrink-0 ml-1">
                                        →
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

    </div>
  );
}
