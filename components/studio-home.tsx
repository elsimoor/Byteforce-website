import { SelectedWork } from "@/components/selected-work";
import { projects } from "@/lib/content";
import { site } from "@/lib/site";

const capabilities = [
  { kicker: "Access", title: "Authentication and permissions", text: "Who can see and do what" },
  { kicker: "Visibility", title: "Dashboards and analytics", text: "What is happening in the business" },
  { kicker: "Customers", title: "CRM and customer management", text: "Accounts, pipelines, history" },
  { kicker: "Revenue", title: "Payments and subscriptions", text: "Billing inside the product" },
  { kicker: "Intelligence", title: "AI and automation", text: "Work removed from the team" },
  { kicker: "Connections", title: "APIs and integrations", text: "The product talks to other systems" },
  { kicker: "Messages", title: "Notifications", text: "Email, alerts, in-product messages" },
  { kicker: "Files", title: "Documents", text: "Files attached to the work" },
  { kicker: "Finding", title: "Search", text: "Find records, not folders" },
  { kicker: "Operations", title: "Admin and back office", text: "The team’s side of the product" },
  { kicker: "Running", title: "Cloud infrastructure", text: "Hosting, deploy, monitoring" },
  { kicker: "Scale", title: "Multi-user and multi-company", text: "Teams and tenants in one product" },
];

export function StudioHome() {
  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* 1. HERO SECTION */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-16 lg:pt-14 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (Span 7) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-surface-container-high w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono tracking-wider font-semibold uppercase text-on-surface-variant">
                PRODUCT ENGINEERING STUDIO / CASABLANCA &amp; GLOBAL
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-headline font-black tracking-tight leading-[1.05] text-on-surface">
              We build software for businesses that want to move faster.
            </h1>
            <p className="text-lg lg:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              You get a product you can launch, a fix when something breaks, and the code in your name when the work is done.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-primary text-on-primary text-sm font-medium hover:bg-primary-container shadow-md hover:shadow-lg transition-all"
                href="/contact"
              >
                <span>Start a project</span>
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </a>
              <a
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface text-sm font-medium transition-colors"
                href="#selected-work"
              >
                <span>Explore our work</span>
                <span className="material-symbols-outlined text-base">
                  south
                </span>
              </a>
            </div>
            <p className="text-sm text-on-surface-variant">
              We reply within one business day. You can also write on{" "}
              <a href="https://wa.me/212666650696" className="font-semibold text-primary">
                WhatsApp
              </a>{" "}
              or{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-primary">
                {site.email}
              </a>
              .
            </p>
          </div>
          <div className="lg:col-span-5 w-full">
            <a
              href="/realisations/coco-inbox"
              className="block overflow-hidden rounded-xl bg-surface-container-lowest shadow-xl"
            >
              <img
                src="/work/coco-inbox.jpg"
                alt="Coco Inbox, a live product for temporary email, encrypted files and secure notes."
                className="aspect-[16/10] w-full object-cover object-top"
              />
              <div className="flex items-center justify-between gap-4 p-5">
                <div>
                  <p className="font-mono text-[11px] font-bold tracking-widest text-primary uppercase">
                    Live product
                  </p>
                  <p className="font-headline text-lg font-bold text-on-surface">Coco Inbox</p>
                  <p className="text-sm text-on-surface-variant">Montréal · online since 2024</p>
                </div>
                <span className="text-sm font-bold text-primary">Case study</span>
              </div>
            </a>
          </div>
        </div>
        {/* Credibility Strip */}
        <div className="mt-14 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 bg-surface-container-low p-6 rounded-xl">
          <div className="flex flex-col">
            <span className="text-2xl lg:text-3xl font-headline font-bold text-primary">
              Software
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-on-surface font-semibold mt-1">
              Custom business systems
            </span>
            <span className="text-xs text-on-surface-variant">
              Workflows, operations and data
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl lg:text-3xl font-headline font-bold text-primary">
              SaaS
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-on-surface font-semibold mt-1">
              Multi-user products
            </span>
            <span className="text-xs text-on-surface-variant">
              Dashboards, billing, permissions
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl lg:text-3xl font-headline font-bold text-primary">
              AI
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-on-surface font-semibold mt-1">
              Inside the product
            </span>
            <span className="text-xs text-on-surface-variant">
              Assistants, agents, automation
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl lg:text-3xl font-headline font-bold text-primary">
              Platforms
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-on-surface font-semibold mt-1">
              Portals and marketplaces
            </span>
            <span className="text-xs text-on-surface-variant">
              Customers, partners, internal teams
            </span>
          </div>
        </div>
      </section>
      {/* 8. ABOUT BYTEFORCE & MOROCCO HUB */}
      <section id="about" className="w-full bg-surface-container py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                THE STARTING POINT
              </span>
              <h2 className="text-3xl lg:text-4xl font-headline font-black text-on-surface tracking-tight">
                Your business is unique. Your software should be too.
              </h2>
              <p className="text-base text-on-surface-variant leading-relaxed">
                Off-the-shelf tools often force businesses to adapt their workflows around the software. ByteForce does the opposite. We build software around the way your business actually works.
              </p>
              <p className="text-base text-on-surface-variant leading-relaxed">
                From internal tools and CRM systems to complete SaaS platforms and AI-powered products, we turn complex business requirements into simple, reliable software.
              </p>
              <p className="text-base text-on-surface-variant leading-relaxed">
                {projects.length} published projects. The office is at Technopark, Bd Dammam, Aïn Chock, 20001 Casablanca.{" "}
                <a href="/a-propos" className="font-semibold text-primary">
                  About the studio
                </a>
                .
              </p>
              <div className="pt-4 flex items-center gap-6">
                <div>
                  <div className="text-lg font-bold text-on-surface">
                    Casablanca
                  </div>
                  <div className="text-xs font-mono text-outline">
                    Technopark, Bd Dammam, Aïn Chock
                  </div>
                </div>
                <div className="h-8 w-px bg-outline-variant" />
                <div>
                  <div className="text-lg font-bold text-on-surface">
                    GMT / UTC+1
                  </div>
                  <div className="text-xs font-mono text-outline">
                    Seamless EU/US Cross-Overlap
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Casablanca Tech Hub Card */}
            <div className="lg:col-span-5 bg-surface-container-lowest p-6 rounded-xl shadow-md">
              <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
                <span className="text-xs font-mono font-bold text-on-surface">
                  CASABLANCA TECH HUB
                </span>
                <span className="text-[11px] font-mono text-primary font-semibold">
                  33.5731° N, 7.5898° W
                </span>
              </div>
              <div className="py-4 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-on-surface-variant font-mono">
                    Western Europe (CET)
                  </span>
                  <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    ±1 hr overlap
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-on-surface-variant font-mono">
                    United Kingdom (GMT)
                  </span>
                  <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    Exact timezone match
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-on-surface-variant font-mono">
                    US East Coast (EST)
                  </span>
                  <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    4-5 hrs overlap
                  </span>
                </div>
              </div>
              <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between text-xs font-mono text-outline">
                <span>Bilingual delivery</span>
                <span className="text-on-surface font-semibold">
                  English • French • Arabic
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 4. SERVICES / CAPABILITIES (Engineering Matrix) */}
      <section id="capabilities" className="w-full bg-surface-container py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              WHAT WE BUILD
            </span>
            <h2 className="text-3xl lg:text-5xl font-headline font-black text-on-surface tracking-tight mt-1">
              What we build
            </h2>
            <p className="text-on-surface-variant text-base lg:text-lg mt-2 max-w-2xl">
              Each offer says who it is for and what is included. The stack we ship with includes React, Next.js and Node.js.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 01 Product Strategy */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">
                    01
                  </span>
                  <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined">strategy</span>
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                  Custom Business Software
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Platforms built around your company&apos;s workflows, operations and data.
                </p>
                <ul className="mt-4 space-y-1 text-sm text-on-surface-variant">
                  <li>The workflow, the roles and the data the team already uses</li>
                  <li>An interface for the people who do the work</li>
                  <li>The repository handed over at the end</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                For teams whose tools do not match the work
              </div>
            </div>
            {/* 02 UX / UI Design */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">
                    02
                  </span>
                  <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined">dashboard</span>
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                  SaaS Platforms
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Multi-user products with subscriptions, dashboards, permissions, billing and scalable infrastructure.
                </p>
                <ul className="mt-4 space-y-1 text-sm text-on-surface-variant">
                  <li>Accounts, permissions and billing</li>
                  <li>A dashboard the team can run</li>
                  <li>A first version you can put in front of users</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                For founders launching a multi-user product
              </div>
            </div>
            {/* 03 Web Applications */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">
                    03
                  </span>
                  <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined">group</span>
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                  CRM &amp; Management Systems
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Custom CRM, customer management, sales pipelines, operations and internal administration.
                </p>
                <ul className="mt-4 space-y-1 text-sm text-on-surface-variant">
                  <li>Pipeline, history and follow-up</li>
                  <li>Roles for the team</li>
                  <li>Room to connect the tools you already use</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                For a business that has outgrown a spreadsheet
              </div>
            </div>
            {/* 04 Mobile Applications */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">
                    04
                  </span>
                  <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined">smart_toy</span>
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                  AI-Powered Software
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  AI assistants, agents, intelligent search, automation and AI features integrated directly into business products.
                </p>
                <ul className="mt-4 space-y-1 text-sm text-on-surface-variant">
                  <li>An assistant or agent inside the product</li>
                  <li>One repeated task taken off the team</li>
                  <li>A person still able to review the result</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                For a product that should remove manual work
              </div>
            </div>
            {/* 05 AI & Automation */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">
                    05
                  </span>
                  <div className="w-10 h-10 rounded bg-secondary-container flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined">devices</span>
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                  Web &amp; Mobile Applications
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Modern applications designed for customers, employees, partners or internal teams.
                </p>
                <ul className="mt-4 space-y-1 text-sm text-on-surface-variant">
                  <li>A path for the customer, the employee or the partner</li>
                  <li>Web, and iOS or Android when the use needs a phone</li>
                  <li>The same data as the rest of the product</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                For customers, employees or partners
              </div>
            </div>
            {/* 06 Infrastructure & DevOps */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">
                    06
                  </span>
                  <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined">hub</span>
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                  Digital Platforms &amp; Portals
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Marketplaces, customer portals, booking platforms, directories and complex multi-sided systems.
                </p>
                <ul className="mt-4 space-y-1 text-sm text-on-surface-variant">
                  <li>Customer, partner and admin sides</li>
                  <li>Search, profiles or booking</li>
                  <li>A published platform</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                For marketplaces, portals and booking
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">07</span>
                  <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined">bug_report</span>
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">Audit &amp; bug fixing</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  A read of an existing product: what blocks people, what is broken, and what to fix first.
                </p>
                <ul className="mt-4 space-y-1 text-sm text-on-surface-variant">
                  <li>Review of the current product and code</li>
                  <li>Bugs and risks, ordered by what blocks use</li>
                  <li>Fixes on the points that stop the work</li>
                </ul>
                <a href="/contact" className="mt-4 inline-flex text-sm font-bold text-primary">
                  Get an audit
                </a>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">For a product or site that already exists</div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">08</span>
                  <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined">build</span>
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">Maintenance &amp; support</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  The product stays up, backed up, and able to change after launch.
                </p>
                <ul className="mt-4 space-y-1 text-sm text-on-surface-variant">
                  <li>Uptime checks, backups and security updates</li>
                  <li>Fixes and small content edits</li>
                  <li>A direct path when the site is down</li>
                </ul>
                <a href="#maintenance" className="mt-4 inline-flex text-sm font-bold text-primary">
                  See support
                </a>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">For a product already in production</div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">09</span>
                  <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined">extension</span>
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">WordPress plugins</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  A plugin written for the WordPress site you already have, when a marketplace extension does not do the job.
                </p>
                <ul className="mt-4 space-y-1 text-sm text-on-surface-variant">
                  <li>A read of the current site and its plugins</li>
                  <li>Custom PHP, including WooCommerce when the site uses it</li>
                  <li>Settings the team can change without editing code</li>
                </ul>
                <a href="/services/plugins-wordpress" className="mt-4 inline-flex text-sm font-bold text-primary">
                  See the offer
                </a>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">For a WordPress site that needs a specific function</div>
            </div>
          </div>
          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded bg-primary px-6 py-3.5 text-sm font-medium text-on-primary"
          >
            Start a project
          </a>
        </div>
      </section>
      {/* 6. METHODOLOGY (5-Step Engineering System) */}
      <section className="w-full bg-surface-container py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              HOW SOFTWARE STARTS
            </span>
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-on-surface tracking-tight mt-1">
              From business problem to working software.
            </h2>
            <p className="text-on-surface-variant text-base mt-2 max-w-xl">
              Every project starts with a problem, not a technology.
            </p>
            <p className="text-on-surface-variant text-sm mt-4 max-w-2xl">
              Day to day is email at {site.email} and WhatsApp, with a weekly update on a shared board. We reply within one business day. Bugs in the agreed scope are fixed with the delivery. After that, a quoted fix or a monthly plan covers them. At the end, you own the code, the repository and the hosting accounts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Step 1 */}
            <div className="bg-surface-container-lowest p-5 rounded-lg flex flex-col justify-between h-64 shadow-sm">
              <div>
                <span className="text-2xl font-mono font-black text-primary/40 block mb-3">
                  01
                </span>
                <h3 className="text-base font-headline font-bold text-on-surface mb-2">
                  Understand
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  We understand your business, users, workflows and constraints.
                </p>
              </div>
              <span className="text-[10px] font-mono text-outline uppercase tracking-wider">
                BUSINESS • USERS
              </span>
            </div>
            {/* Step 2 */}
            <div className="bg-surface-container-lowest p-5 rounded-lg flex flex-col justify-between h-64 shadow-sm">
              <div>
                <span className="text-2xl font-mono font-black text-primary/40 block mb-3">
                  02
                </span>
                <h3 className="text-base font-headline font-bold text-on-surface mb-2">
                  Design
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  We turn the requirements into a clear product experience and technical architecture.
                </p>
              </div>
              <span className="text-[10px] font-mono text-outline uppercase tracking-wider">
                PRODUCT • ARCHITECTURE
              </span>
            </div>
            {/* Step 3 */}
            <div className="bg-surface-container-lowest p-5 rounded-lg flex flex-col justify-between h-64 shadow-sm">
              <div>
                <span className="text-2xl font-mono font-black text-primary/40 block mb-3">
                  03
                </span>
                <h3 className="text-base font-headline font-bold text-on-surface mb-2">
                  Build
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  We engineer the application, backend, database, integrations and infrastructure.
                </p>
              </div>
              <span className="text-[10px] font-mono text-outline uppercase tracking-wider">
                APPLICATION • DATA
              </span>
            </div>
            {/* Step 4 */}
            <div className="bg-surface-container-lowest p-5 rounded-lg flex flex-col justify-between h-64 shadow-sm">
              <div>
                <span className="text-2xl font-mono font-black text-primary block mb-3">
                  04
                </span>
                <h3 className="text-base font-headline font-bold text-on-surface mb-2">
                  Launch
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  We deploy the software into a real production environment.
                </p>
              </div>
              <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider">
                PRODUCTION
              </span>
            </div>
            {/* Step 5 */}
            <div className="bg-surface-container-lowest p-5 rounded-lg flex flex-col justify-between h-64 shadow-sm">
              <div>
                <span className="text-2xl font-mono font-black text-primary/40 block mb-3">
                  05
                </span>
                <h3 className="text-base font-headline font-bold text-on-surface mb-2">
                  Improve
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  We continue improving the product as your business grows.
                </p>
              </div>
              <span className="text-[10px] font-mono text-outline uppercase tracking-wider">
                AFTER LAUNCH
              </span>
            </div>
          </div>
          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded bg-primary px-6 py-3.5 text-sm font-medium text-on-primary"
          >
            Start a project
          </a>
        </div>
      </section>
      <SelectedWork />
      {/* 2. CLIENT & ENTERPRISE TRUST SECTION */}
      <section className="w-full bg-surface-container py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                INSIDE THE PRODUCT
              </span>
              <h2 className="text-2xl lg:text-3xl font-headline font-bold text-on-surface mt-1">
                Everything your software needs.
              </h2>
            </div>
            <p className="text-xs font-mono text-on-surface-variant">
              CAPABILITIES BUILT INTO THE SYSTEM
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item.title} className="rounded-xl bg-surface-container-lowest p-6">
                <p className="font-mono text-[11px] font-bold tracking-widest text-primary uppercase">{item.kicker}</p>
                <h3 className="mt-2 font-headline text-xl font-bold leading-snug text-on-surface">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 9. INSIGHTS / THOUGHT LEADERSHIP */}
      <section id="insights" className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              AI &amp; AUTOMATION
            </span>
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-on-surface tracking-tight mt-1">
              Make your software work harder.
            </h2>
            <p className="text-on-surface-variant text-base mt-2 max-w-2xl">
              AI shouldn&apos;t be a feature added for the sake of AI. It should remove work, improve decisions and make your product more useful.
            </p>
          </div>
          <a
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-container transition-colors"
            href="/contact"
          >
            <span>Build an AI-powered product</span>
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Article 1 */}
          <a
            className="bg-surface-container-low p-6 rounded-xl hover:shadow-md transition-shadow flex flex-col justify-between group"
            href="/contact"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-outline mb-3">
                <span>IN THE PRODUCT</span>
                <span>ASSIST</span>
              </div>
              <h3 className="text-lg font-headline font-bold text-on-surface group-hover:text-primary transition-colors leading-snug mb-2">
                Assistants and agents
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                AI assistants, AI agents and internal copilots inside the software people already use.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-bold text-primary">
              <span>Start a project</span>
              <span className="material-symbols-outlined text-sm">
                north_east
              </span>
            </div>
          </a>
          {/* Article 2 */}
          <a
            className="bg-surface-container-low p-6 rounded-xl hover:shadow-md transition-shadow flex flex-col justify-between group"
            href="/contact"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-outline mb-3">
                <span>IN THE PRODUCT</span>
                <span>CUSTOMERS</span>
              </div>
              <h3 className="text-lg font-headline font-bold text-on-surface group-hover:text-primary transition-colors leading-snug mb-2">
                Customer work
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Lead qualification, automated customer responses and workflow automation.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-bold text-primary">
              <span>Start a project</span>
              <span className="material-symbols-outlined text-sm">
                north_east
              </span>
            </div>
          </a>
          {/* Article 3 */}
          <a
            className="bg-surface-container-low p-6 rounded-xl hover:shadow-md transition-shadow flex flex-col justify-between group"
            href="/contact"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-outline mb-3">
                <span>IN THE PRODUCT</span>
                <span>INFORMATION</span>
              </div>
              <h3 className="text-lg font-headline font-bold text-on-surface group-hover:text-primary transition-colors leading-snug mb-2">
                Information and documents
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Intelligent search, document processing, data analysis and content generation.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-bold text-primary">
              <span>Start a project</span>
              <span className="material-symbols-outlined text-sm">
                north_east
              </span>
            </div>
          </a>
        </div>
      </section>
      {/* 5. FOUNDATIONAL STACK */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="mb-14">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
            TECHNOLOGY
          </span>
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-on-surface tracking-tight mt-1">
            The technology behind the product.
          </h2>
          <p className="text-on-surface-variant text-base mt-2 max-w-2xl">
            We choose technology based on what the product needs — scalability, performance, security and maintainability come first.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Category 1 */}
          <div className="bg-surface-container-low p-6 rounded-xl">
            <h4 className="text-xs font-mono font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-outline-variant/30">
              Product interface
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Next.js</span>
                <span className="text-[11px] font-mono text-outline">
                  App shell
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>React</span>
                <span className="text-[11px] font-mono text-outline">
                  Interface
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>TypeScript</span>
                <span className="text-[11px] font-mono text-outline">
                  Product code
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>WordPress</span>
                <span className="text-[11px] font-mono text-outline">
                  Plugins
                </span>
              </li>
            </ul>
          </div>
          {/* Category 2 */}
          <div className="bg-surface-container-low p-6 rounded-xl">
            <h4 className="text-xs font-mono font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-outline-variant/30">
              Application and data
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Node.js</span>
                <span className="text-[11px] font-mono text-outline">
                  Server
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>GraphQL</span>
                <span className="text-[11px] font-mono text-outline">
                  API
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>PostgreSQL</span>
                <span className="text-[11px] font-mono text-outline">
                  Records
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>MongoDB</span>
                <span className="text-[11px] font-mono text-outline">
                  Documents
                </span>
              </li>
            </ul>
          </div>
          {/* Category 3 */}
          <div className="bg-surface-container-low p-6 rounded-xl">
            <h4 className="text-xs font-mono font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-outline-variant/30">
              Delivery
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Redis</span>
                <span className="text-[11px] font-mono text-outline">
                  Fast state
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Firebase</span>
                <span className="text-[11px] font-mono text-outline">
                  Auth
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Cloudflare</span>
                <span className="text-[11px] font-mono text-outline">
                  Delivery
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Vercel</span>
                <span className="text-[11px] font-mono text-outline">
                  Deploy
                </span>
              </li>
            </ul>
          </div>
          {/* Category 4 */}
          <div className="bg-surface-container-low p-6 rounded-xl">
            <h4 className="text-xs font-mono font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-outline-variant/30">
              Where it runs
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>OVHcloud</span>
                <span className="text-[11px] font-mono text-outline">
                  Hosting
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>AI / LLM APIs</span>
                <span className="text-[11px] font-mono text-outline">
                  In the product
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* ENGINEERING */}
      <section id="engineering" className="w-full bg-surface-container py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              ENGINEERING
            </span>
            <h2 className="text-3xl lg:text-5xl font-headline font-black text-on-surface tracking-tight mt-1">
              Built for production, not just the demo.
            </h2>
            <p className="text-on-surface-variant text-base lg:text-lg mt-2 max-w-2xl">
              A beautiful interface is only one part of good software.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 01 Product Strategy */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">
                    01
                  </span>
                  <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined">strategy</span>
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                  Architecture
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Design systems that can evolve with the business.
                </p>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                Systems that can change
              </div>
            </div>
            {/* 02 UX / UI Design */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">
                    02
                  </span>
                  <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined">palette</span>
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                  Backend
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Reliable APIs, business logic and data processing.
                </p>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                APIs • Logic • Data
              </div>
            </div>
            {/* 03 Web Applications */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">
                    03
                  </span>
                  <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined">terminal</span>
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                  Database
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Structured data models designed for real-world usage.
                </p>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                Models • Records • Usage
              </div>
            </div>
            {/* 04 Mobile Applications */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">
                    04
                  </span>
                  <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined">
                      smartphone
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                  Infrastructure
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Cloud hosting, deployment, security and monitoring.
                </p>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                Hosting • Deploy • Monitoring
              </div>
            </div>
            {/* 05 AI & Automation */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">
                    05
                  </span>
                  <div className="w-10 h-10 rounded bg-secondary-container flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined">smart_toy</span>
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                  Integrations
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Payments, APIs, communication tools, analytics and external services.
                </p>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                Payments • APIs • Tools
              </div>
            </div>
            {/* 06 Infrastructure & DevOps */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-primary">
                    06
                  </span>
                  <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined">
                      cloud_sync
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                  Security
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Authentication, permissions and secure data handling.
                </p>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                Access • Permissions • Data
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 7. WHY BYTEFORCE & METRICS PROOF */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Philosophy (Left 6) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                WHY BYTEFORCE
              </span>
              <h2 className="text-3xl lg:text-4xl font-headline font-black text-on-surface tracking-tight mt-1">
                A software partner, not just a development team.
              </h2>
              <p className="text-on-surface-variant text-base mt-3 leading-relaxed">
                The brief, the product and the system are handled together.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-surface-container-low">
                <h4 className="font-headline font-bold text-sm text-on-surface mb-1">
                  Business first
                </h4>
                <p className="text-xs text-on-surface-variant">
                  We understand the business first.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface-container-low">
                <h4 className="font-headline font-bold text-sm text-on-surface mb-1">
                  Product and technology
                </h4>
                <p className="text-xs text-on-surface-variant">
                  We design the product and the technology together.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface-container-low">
                <h4 className="font-headline font-bold text-sm text-on-surface mb-1">
                  Actual workflows
                </h4>
                <p className="text-xs text-on-surface-variant">
                  We build around your actual workflows.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface-container-low">
                <h4 className="font-headline font-bold text-sm text-on-surface mb-1">
                  Decision-makers
                </h4>
                <p className="text-xs text-on-surface-variant">
                  We work directly with decision-makers.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface-container-low">
                <h4 className="font-headline font-bold text-sm text-on-surface mb-1">
                  Built to evolve
                </h4>
                <p className="text-xs text-on-surface-variant">
                  We build software that can evolve with the company.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface-container-low">
                <h4 className="font-headline font-bold text-sm text-on-surface mb-1">
                  The outcome
                </h4>
                <p className="text-xs text-on-surface-variant">
                  We stay focused on the outcome, not just the deliverables.
                </p>
              </div>
            </div>
          </div>
          {/* Prominent Metrics Block (Right 6) */}
          <div className="lg:col-span-6 bg-inverse-surface text-inverse-on-surface rounded-2xl p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-inverse-primary uppercase">
                BUSINESS IMPACT
              </span>
              <h3 className="text-2xl font-headline font-bold text-white mt-1 mb-8">
                Good software changes how a business works.
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-8 my-auto">
              <div>
                <span className="text-4xl lg:text-5xl font-mono font-black text-white tracking-tight">
                  Manual
                </span>
                <p className="text-xs font-mono uppercase tracking-wider text-inverse-primary font-bold mt-1">
                  Automation
                </p>
                <p className="text-xs text-inverse-on-surface/70 mt-1">
                  Manual work becomes a workflow
                </p>
              </div>
              <div>
                <span className="text-4xl lg:text-5xl font-mono font-black text-white tracking-tight">
                  Scattered
                </span>
                <p className="text-xs font-mono uppercase tracking-wider text-inverse-primary font-bold mt-1">
                  One system
                </p>
                <p className="text-xs text-inverse-on-surface/70 mt-1">
                  Scattered data in one place
                </p>
              </div>
              <div>
                <span className="text-4xl lg:text-5xl font-mono font-black text-white tracking-tight">
                  Sheets
                </span>
                <p className="text-xs font-mono uppercase tracking-wider text-inverse-primary font-bold mt-1">
                  Dashboards
                </p>
                <p className="text-xs text-inverse-on-surface/70 mt-1">
                  Spreadsheets become live numbers
                </p>
              </div>
              <div>
                <span className="text-4xl lg:text-5xl font-mono font-black text-white tracking-tight">
                  Many tools
                </span>
                <p className="text-xs font-mono uppercase tracking-wider text-inverse-primary font-bold mt-1">
                  One platform
                </p>
                <p className="text-xs text-inverse-on-surface/70 mt-1">
                  Multiple tools become one product
                </p>
              </div>
              <div>
                <span className="text-4xl lg:text-5xl font-mono font-black text-white tracking-tight">
                  Repeat
                </span>
                <p className="text-xs font-mono uppercase tracking-wider text-inverse-primary font-bold mt-1">
                  AI agents
                </p>
                <p className="text-xs text-inverse-on-surface/70 mt-1">
                  Repetitive tasks handed to agents
                </p>
              </div>
              <div>
                <span className="text-4xl lg:text-5xl font-mono font-black text-white tracking-tight">
                  Separate
                </span>
                <p className="text-xs font-mono uppercase tracking-wider text-inverse-primary font-bold mt-1">
                  Integrated
                </p>
                <p className="text-xs text-inverse-on-surface/70 mt-1">
                  Disconnected systems in one workflow
                </p>
              </div>
              <div>
                <span className="text-4xl lg:text-5xl font-mono font-black text-white tracking-tight">
                  Idea
                </span>
                <p className="text-xs font-mono uppercase tracking-wider text-inverse-primary font-bold mt-1">
                  Product
                </p>
                <p className="text-xs text-inverse-on-surface/70 mt-1">
                  A business idea becomes software in use
                </p>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-inverse-on-surface/10 flex items-center justify-between gap-6 text-xs font-mono text-inverse-on-surface/70">
              <span>We don&apos;t measure success by lines of code.</span>
              <span className="text-inverse-primary font-bold">
                We measure it by what the software enables your business to do.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="maintenance" className="w-full bg-surface-container py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              AFTER LAUNCH
            </span>
            <h2 className="text-3xl lg:text-5xl font-headline font-black text-on-surface tracking-tight mt-1">
              Maintenance and support.
            </h2>
            <p className="text-on-surface-variant text-base lg:text-lg mt-2 max-w-2xl">
              Care, Care Plus and Priority are monthly retainers. A single fix can be quoted on its own, with no retainer. Response times are business days unless a tier says otherwise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-headline font-bold text-on-surface">Care</h3>
                <p className="mt-3 text-sm text-on-surface-variant">Uptime monitoring, weekly backups, security updates.</p>
              </div>
              <p className="mt-8 text-xs font-mono text-primary font-bold">Reply in 2 business days</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-headline font-bold text-on-surface">Care Plus</h3>
                <p className="mt-3 text-sm text-on-surface-variant">Care, plus 5 hours a month of fixes and content edits.</p>
              </div>
              <p className="mt-8 text-xs font-mono text-primary font-bold">Reply in 1 business day</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-headline font-bold text-on-surface">Priority</h3>
                <p className="mt-3 text-sm text-on-surface-variant">Care Plus, plus performance work and a monthly report.</p>
              </div>
              <p className="mt-8 text-xs font-mono text-primary font-bold">4 hours for a critical outage</p>
            </div>
          </div>
          <a
            href="https://wa.me/212666650696?text=The%20site%20is%20down"
            className="mt-10 inline-flex items-center gap-2 rounded bg-primary px-6 py-3.5 text-sm font-medium text-on-primary"
          >
            Site is down? WhatsApp
          </a>
        </div>
      </section>
      <section id="pricing" className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">SCOPE</span>
        <h2 className="text-3xl lg:text-4xl font-headline font-black text-on-surface tracking-tight mt-1">
          What changes the price.
        </h2>
        <p className="text-on-surface-variant text-base mt-4 max-w-2xl">
          There is no flat public price. The work moves with the scope, the integrations, and the number of user roles. A first 30-minute call is free. An audit is usually a few days. A first version is usually several weeks.
        </p>
        <div className="mt-8">
          <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-primary text-on-primary text-sm font-medium">
            Book the free call
          </a>
        </div>
      </section>
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-surface-container-low">
            <h3 className="font-headline font-bold text-sm">NDA on request</h3>
            <p className="mt-1 text-xs text-on-surface-variant">The brief can stay private before any work starts.</p>
          </div>
          <div className="p-4 rounded-lg bg-surface-container-low">
            <h3 className="font-headline font-bold text-sm">Staging before release</h3>
            <p className="mt-1 text-xs text-on-surface-variant">You see the product on a staging environment before it goes live.</p>
          </div>
          <div className="p-4 rounded-lg bg-surface-container-low">
            <h3 className="font-headline font-bold text-sm">You own the code</h3>
            <p className="mt-1 text-xs text-on-surface-variant">Repository and hosting accounts are yours at the end. Changes are reviewed on staging before release. Backups sit with the support plans.</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-on-surface-variant">
          Google listing:{" "}
          <a href="https://share.google/L12w0TmJ9kkUcVBg7" className="font-semibold text-primary">
            Byte Force Maroc
          </a>
          .
        </p>
      </section>
      <section id="faq" className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">BEFORE THE CALL</span>
        <h2 className="text-3xl lg:text-4xl font-headline font-black text-on-surface tracking-tight mt-1">
          Questions we get first.
        </h2>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                ["What if someone else already wrote the code?", "We can audit it, fix what blocks use, or continue from it. We say so if a rewrite is the honest path."],
                ["Can you work with the stack we already have?", "Yes, when it fits the product. If it does not, we say that before building."],
                ["Do you stay after launch?", "Yes. Care, Care Plus and Priority cover monitoring, backups, fixes and, on the higher tiers, a faster reply."],
                ["How do payments work?", "A deposit starts the work. The rest follows milestones tied to what has been delivered."],
                ["What if the scope changes?", "The change is written down and agreed before it is built."],
              ].map(([name, text]) => ({
                "@type": "Question",
                name,
                acceptedAnswer: { "@type": "Answer", text },
              })),
            }),
          }}
        />
        <dl className="mt-10 max-w-3xl divide-y divide-outline-variant/40">
          <div className="py-6">
            <dt className="font-headline font-bold">What if someone else already wrote the code?</dt>
            <dd className="mt-2 text-sm text-on-surface-variant">We can audit it, fix what blocks use, or continue from it. We say so if a rewrite is the honest path.</dd>
          </div>
          <div className="py-6">
            <dt className="font-headline font-bold">Can you work with the stack we already have?</dt>
            <dd className="mt-2 text-sm text-on-surface-variant">Yes, when it fits the product. If it does not, we say that before building.</dd>
          </div>
          <div className="py-6">
            <dt className="font-headline font-bold">Do you stay after launch?</dt>
            <dd className="mt-2 text-sm text-on-surface-variant">Yes. Care, Care Plus and Priority cover monitoring, backups, fixes and, on the higher tiers, a faster reply.</dd>
          </div>
          <div className="py-6">
            <dt className="font-headline font-bold">How do payments work?</dt>
            <dd className="mt-2 text-sm text-on-surface-variant">A deposit starts the work. The rest follows milestones tied to what has been delivered.</dd>
          </div>
          <div className="py-6">
            <dt className="font-headline font-bold">What if the scope changes?</dt>
            <dd className="mt-2 text-sm text-on-surface-variant">The change is written down and agreed before it is built.</dd>
          </div>
          <div className="py-6">
            <dt className="font-headline font-bold">Who owns the result?</dt>
            <dd className="mt-2 text-sm text-on-surface-variant">You own the code, the repository and the hosting accounts when the work is handed over.</dd>
          </div>
          <div className="py-6">
            <dt className="font-headline font-bold">How fast do you reply?</dt>
            <dd className="mt-2 text-sm text-on-surface-variant">Within one business day. A critical outage on Priority is treated in 4 hours.</dd>
          </div>
          <div className="py-6">
            <dt className="font-headline font-bold">Is the first conversation free?</dt>
            <dd className="mt-2 text-sm text-on-surface-variant">Yes. Thirty minutes, to see if the problem is one we should take.</dd>
          </div>
        </dl>
      </section>
      {/* 10. FINAL CTA / CONVERSION SECTION */}
      <section className="w-full bg-surface-container-high py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-6 shadow-sm">
            <span className="material-symbols-outlined text-2xl">
              rocket_launch
            </span>
          </div>
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-2">
            START A PROJECT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-black text-on-surface tracking-tight leading-tight max-w-2xl">
            Have a business problem that software could solve?
          </h2>
          <p className="text-on-surface-variant text-base lg:text-lg mt-4 max-w-xl">
            Tell us what you&apos;re trying to build, improve or automate. We&apos;ll help turn it into a real digital product. Reply within one business day.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              className="inline-flex items-center gap-2 px-8 py-4 rounded bg-primary text-on-primary text-base font-semibold hover:bg-primary-container shadow-md hover:shadow-lg transition-all"
              href="/contact"
            >
              <span>Start a project</span>
              <span className="material-symbols-outlined text-base">
                arrow_forward
              </span>
            </a>
            <a
              className="inline-flex items-center gap-2 px-6 py-4 rounded bg-surface text-on-surface text-base font-medium hover:bg-surface-container-highest transition-colors"
              href="https://wa.me/212666650696"
            >
              <span>WhatsApp</span>
            </a>
            <a
              className="inline-flex items-center gap-2 px-6 py-4 rounded bg-surface text-on-surface text-base font-medium hover:bg-surface-container-highest transition-colors"
              href={`mailto:${site.email}`}
            >
              <span className="material-symbols-outlined text-base text-primary">
                mail
              </span>
              <span>Talk to ByteForce</span>
            </a>
          </div>
          <div className="mt-12 flex items-center gap-3 text-xs font-mono text-outline">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>
              Web · Mobile · SaaS · AI · Business Software
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
