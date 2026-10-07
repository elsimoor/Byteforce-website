# Graph Report - Byteforce-website  (2026-10-07)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 292 nodes · 537 edges · 18 communities (14 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c8f640d2`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8
- Community 9
- Community 10
- Community 11
- Community 12
- Community 13
- Community 15
- Community 16

## God Nodes (most connected - your core abstractions)
1. `next` - 25 edges
2. `cities()` - 16 edges
3. `site` - 16 edges
4. `compilerOptions` - 16 edges
5. `getDb()` - 14 edges
6. `text()` - 9 edges
7. `categories()` - 8 edges
8. `isAuthed()` - 8 edges
9. `requireAuth()` - 8 edges
10. `LeadForm()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `generateStaticParams()` --calls--> `cities()`  [EXTRACTED]
  app/villes/[slug]/page.tsx → lib/catalog.ts
- `AboutPage()` --calls--> `cities()`  [EXTRACTED]
  app/a-propos/page.tsx → lib/catalog.ts
- `generateMetadata()` --calls--> `getService()`  [EXTRACTED]
  app/services/[slug]/page.tsx → lib/content.ts
- `generateMetadata()` --calls--> `getPageMeta()`  [EXTRACTED]
  app/realisations/[slug]/page.tsx → lib/db.ts
- `GET()` --calls--> `cities()`  [EXTRACTED]
  app/llms.txt/route.ts → lib/catalog.ts

## Import Cycles
- None detected.

## Communities (18 total, 2 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.09
Nodes (34): AboutPage(), metadata, GET(), metadata, WorkPage(), countryMark, dynamic, generateMetadata() (+26 more)

### Community 1 - "Community 1"
Cohesion: 0.08
Nodes (17): metadata, metadata, metadata, Props, jetbrains, metadata, publicSans, metadata (+9 more)

### Community 2 - "Community 2"
Cohesion: 0.09
Nodes (29): DashboardPage(), dynamic, metadata, dynamic, groups, metadata, PageMetaAdmin(), Props (+21 more)

### Community 3 - "Community 3"
Cohesion: 0.10
Nodes (26): categories, Ecosystem(), engineeringNotes, impact, journey, practice, statements, technology (+18 more)

### Community 4 - "Community 4"
Cohesion: 0.17
Nodes (25): DashboardLayout(), metadata, LoginPage(), metadata, Props, addAction(), addKeyword(), createLead() (+17 more)

### Community 5 - "Community 5"
Cohesion: 0.08
Nodes (25): dependencies, next, react, react-dom, devDependencies, tailwindcss, @tailwindcss/postcss, @types/node (+17 more)

### Community 6 - "Community 6"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 7 - "Community 7"
Cohesion: 0.17
Nodes (16): CityPage(), generateMetadata(), generateStaticParams(), joinNames(), offers, Props, Draft, LeadForm() (+8 more)

### Community 8 - "Community 8"
Cohesion: 0.24
Nodes (8): CommercialRoute(), dynamicParams, generateMetadata(), Props, CommercialView(), steps, CommercialPage, getCommercialPage()

### Community 9 - "Community 9"
Cohesion: 0.24
Nodes (6): metadata, english, order, SelectedWork(), capabilities, StudioHome()

### Community 10 - "Community 10"
Cohesion: 0.43
Nodes (6): CategoryPage(), dynamic, generateMetadata(), Props, getCategory(), getPageMeta()

### Community 11 - "Community 11"
Cohesion: 0.40
Nodes (3): alt, contentType, size

### Community 12 - "Community 12"
Cohesion: 0.40
Nodes (3): articles, metadata, setup

### Community 13 - "Community 13"
Cohesion: 0.40
Nodes (4): money, services, taches, want

## Knowledge Gaps
- **111 isolated node(s):** `Props`, `Props`, `CatalogEntry`, `PageKind`, `Service` (+106 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 134 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Community 1` to `Community 0`, `Community 2`, `Community 4`, `Community 5`, `Community 7`, `Community 8`, `Community 9`, `Community 10`, `Community 12`?**
  _High betweenness centrality (0.341) - this node is a cross-community bridge._
- **Why does `react` connect `Community 5` to `Community 3`, `Community 7`?**
  _High betweenness centrality (0.176) - this node is a cross-community bridge._
- **What connects `Props`, `Props`, `CatalogEntry` to the rest of the system?**
  _111 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.08880666049953746 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.08412698412698413 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.0944741532976827 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.10483870967741936 - nodes in this community are weakly interconnected._