# Graph Report - Byteforce-website  (2026-10-05)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 252 nodes · 464 edges · 15 communities (12 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `74791704`
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

## God Nodes (most connected - your core abstractions)
1. `next` - 23 edges
2. `cities()` - 16 edges
3. `compilerOptions` - 16 edges
4. `getDb()` - 15 edges
5. `site` - 12 edges
6. `text()` - 9 edges
7. `categories()` - 8 edges
8. `requireAuth()` - 8 edges
9. `isAuthed()` - 8 edges
10. `projects` - 8 edges

## Surprising Connections (you probably didn't know these)
- `AboutPage()` --calls--> `cities()`  [EXTRACTED]
  app/a-propos/page.tsx → lib/catalog.ts
- `GET()` --calls--> `cities()`  [EXTRACTED]
  app/llms.txt/route.ts → lib/catalog.ts
- `generateMetadata()` --calls--> `getCity()`  [EXTRACTED]
  app/villes/[slug]/page.tsx → lib/catalog.ts
- `generateStaticParams()` --calls--> `cities()`  [EXTRACTED]
  app/villes/[slug]/page.tsx → lib/catalog.ts
- `DashboardLayout()` --calls--> `isAuthed()`  [EXTRACTED]
  app/dashboard/(app)/layout.tsx → lib/auth.ts

## Import Cycles
- None detected.

## Communities (15 total, 2 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.12
Nodes (26): AboutPage(), metadata, GET(), metadata, WorkPage(), sitemap(), CityPage(), generateMetadata() (+18 more)

### Community 1 - "Community 1"
Cohesion: 0.10
Nodes (28): DashboardPage(), dynamic, metadata, dynamic, groups, metadata, PageMetaAdmin(), Props (+20 more)

### Community 2 - "Community 2"
Cohesion: 0.10
Nodes (26): categories, Ecosystem(), engineeringNotes, impact, journey, practice, statements, technology (+18 more)

### Community 3 - "Community 3"
Cohesion: 0.20
Nodes (22): DashboardLayout(), metadata, LoginPage(), metadata, Props, addAction(), addKeyword(), createLead() (+14 more)

### Community 4 - "Community 4"
Cohesion: 0.08
Nodes (25): dependencies, next, react, react-dom, devDependencies, tailwindcss, @tailwindcss/postcss, @types/node (+17 more)

### Community 5 - "Community 5"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 6 - "Community 6"
Cohesion: 0.16
Nodes (10): metadata, Props, metadata, generateMetadata(), Props, ServicePage(), LeadForm(), getService() (+2 more)

### Community 7 - "Community 7"
Cohesion: 0.12
Nodes (7): metadata, metadata, metadata, links, metadata, nextConfig, next

### Community 8 - "Community 8"
Cohesion: 0.20
Nodes (13): CategoryPage(), dynamic, generateMetadata(), Props, countryMark, dynamic, generateMetadata(), ProjectPage() (+5 more)

### Community 9 - "Community 9"
Cohesion: 0.21
Nodes (7): jetbrains, metadata, publicSans, Footer(), Header(), links, OrganizationJsonLd()

### Community 10 - "Community 10"
Cohesion: 0.24
Nodes (6): metadata, english, order, SelectedWork(), capabilities, StudioHome()

### Community 11 - "Community 11"
Cohesion: 0.40
Nodes (3): alt, contentType, size

## Knowledge Gaps
- **98 isolated node(s):** `Props`, `CatalogEntry`, `PageKind`, `Service`, `Props` (+93 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 116 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Community 7` to `Community 0`, `Community 1`, `Community 3`, `Community 4`, `Community 6`, `Community 8`, `Community 9`, `Community 10`?**
  _High betweenness centrality (0.490) - this node is a cross-community bridge._
- **Why does `react` connect `Community 4` to `Community 2`?**
  _High betweenness centrality (0.194) - this node is a cross-community bridge._
- **What connects `Props`, `CatalogEntry`, `PageKind` to the rest of the system?**
  _98 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.11711711711711711 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.10080645161290322 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.10483870967741936 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._