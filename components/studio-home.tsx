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
              We build software that moves businesses forward.
            </h1>
            <p className="text-lg lg:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              ByteForce is a software engineering studio building custom web
              platforms, mobile applications, AI-powered products, and digital
              systems for ambitious companies.
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
          </div>
          {/* Right Column: Interactive Active Mesh Topology Card (Span 5) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative bg-surface-container-lowest rounded-xl p-6 shadow-xl overflow-hidden">
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              {/* Card Header */}
              <div className="flex items-center justify-between pb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono font-bold tracking-widest uppercase text-on-surface">
                    ACTIVE MESH TOPOLOGY
                  </span>
                </div>
                <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-surface-container text-primary">
                  99.98% UPTIME
                </span>
              </div>
              {/* Network Diagram SVG Canvas */}
              <div className="relative w-full h-64 bg-surface-container-low rounded-lg p-4 flex flex-col justify-between overflow-hidden">
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="meshGrad"
                      x1="0%"
                      x2="100%"
                      y1="0%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor="#4f378a"
                        stopOpacity="0.35"
                      />
                      <stop
                        offset="100%"
                        stopColor="#765b00"
                        stopOpacity="0.2"
                      />
                    </linearGradient>
                  </defs>
                  <line
                    stroke="url(#meshGrad)"
                    strokeDasharray="3,3"
                    strokeWidth={2}
                    x1="20%"
                    x2="50%"
                    y1="35%"
                    y2="20%"
                  />
                  <line
                    stroke="url(#meshGrad)"
                    strokeWidth={2}
                    x1="50%"
                    x2="80%"
                    y1="20%"
                    y2="35%"
                  />
                  <line
                    stroke="url(#meshGrad)"
                    strokeWidth={2}
                    x1="20%"
                    x2="35%"
                    y1="35%"
                    y2="75%"
                  />
                  <line
                    className="text-primary/40"
                    stroke="currentColor"
                    strokeWidth={2}
                    x1="50%"
                    x2="50%"
                    y1="20%"
                    y2="55%"
                  />
                  <line
                    stroke="url(#meshGrad)"
                    strokeWidth={2}
                    x1="50%"
                    x2="35%"
                    y1="55%"
                    y2="75%"
                  />
                  <line
                    stroke="url(#meshGrad)"
                    strokeWidth={2}
                    x1="50%"
                    x2="68%"
                    y1="55%"
                    y2="75%"
                  />
                  <line
                    stroke="url(#meshGrad)"
                    strokeDasharray="3,3"
                    strokeWidth={2}
                    x1="80%"
                    x2="68%"
                    y1="35%"
                    y2="75%"
                  />
                  {/* Data flow dots */}
                  <circle cx="35%" cy="27%" fill="#4f378a" r={3}>
                    <animate
                      attributeName="opacity"
                      dur="2s"
                      repeatCount="indefinite"
                      values="0.2;1;0.2"
                    />
                  </circle>
                  <circle cx="65%" cy="27%" fill="#6750a4" r={3}>
                    <animate
                      attributeName="opacity"
                      dur="2.4s"
                      repeatCount="indefinite"
                      values="1;0.2;1"
                    />
                  </circle>
                  <circle cx="50%" cy="65%" fill="#4f378a" r={3}>
                    <animate
                      attributeName="opacity"
                      dur="1.8s"
                      repeatCount="indefinite"
                      values="0.3;1;0.3"
                    />
                  </circle>
                </svg>
                {/* Topology Nodes */}
                <div className="relative z-10 flex justify-between items-center px-4 pt-2">
                  <div className="px-2.5 py-1 rounded bg-surface shadow-sm text-xs font-mono font-medium flex items-center gap-1.5 text-on-surface">
                    <span className="material-symbols-outlined text-[14px] text-primary">
                      devices
                    </span>{" "}
                    Edge Client
                  </div>
                  <div className="px-3 py-1.5 rounded bg-primary text-on-primary shadow-sm text-xs font-mono font-semibold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px]">
                      alt_route
                    </span>{" "}
                    API Gateway
                  </div>
                  <div className="px-2.5 py-1 rounded bg-surface shadow-sm text-xs font-mono font-medium flex items-center gap-1.5 text-on-surface">
                    <span className="material-symbols-outlined text-[14px] text-tertiary">
                      memory
                    </span>{" "}
                    AI Core
                  </div>
                </div>
                <div className="relative z-10 flex justify-center py-2">
                  <div className="px-3 py-1 rounded bg-surface-container-high shadow-sm text-[11px] font-mono text-on-surface-variant flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[13px] text-primary">
                      swap_calls
                    </span>
                    <span>gRPC / FastEvent Bus</span>
                  </div>
                </div>
                <div className="relative z-10 flex justify-around items-center px-6 pb-2">
                  <div className="px-2.5 py-1 rounded bg-surface shadow-sm text-xs font-mono font-medium flex items-center gap-1.5 text-on-surface">
                    <span className="material-symbols-outlined text-[14px] text-primary">
                      database
                    </span>{" "}
                    PostgreSQL
                  </div>
                  <div className="px-2.5 py-1 rounded bg-surface shadow-sm text-xs font-mono font-medium flex items-center gap-1.5 text-on-surface">
                    <span className="material-symbols-outlined text-[14px] text-secondary">
                      share
                    </span>{" "}
                    Vector Store
                  </div>
                </div>
              </div>
              {/* Telemetry Strip */}
              <div className="mt-4 pt-4 bg-surface-container-low rounded-lg p-3 grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-[10px] font-mono text-on-surface-variant uppercase">
                    LATENCY
                  </div>
                  <div className="text-xs font-mono font-bold text-on-surface mt-0.5">
                    12ms avg
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-on-surface-variant uppercase">
                    SECURITY
                  </div>
                  <div className="text-xs font-mono font-bold text-on-surface mt-0.5">
                    TLS 1.3 MESH
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-on-surface-variant uppercase">
                    ZONE
                  </div>
                  <div className="text-xs font-mono font-bold text-primary mt-0.5">
                    CMN → EU-W
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Credibility Strip */}
        <div className="mt-14 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 bg-surface-container-low p-6 rounded-xl">
          <div className="flex flex-col">
            <span className="text-2xl lg:text-3xl font-headline font-bold text-primary">
              20+
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-on-surface font-semibold mt-1">
              Projects Shipped
            </span>
            <span className="text-xs text-on-surface-variant">
              Live in production environments
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl lg:text-3xl font-headline font-bold text-primary">
              4+ Years
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-on-surface font-semibold mt-1">
              Engineering Rigor
            </span>
            <span className="text-xs text-on-surface-variant">
              Continuous technical reliability
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl lg:text-3xl font-headline font-bold text-primary">
              Global Reach
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-on-surface font-semibold mt-1">
              Europe • US • MENA
            </span>
            <span className="text-xs text-on-surface-variant">
              Multi-region distributed systems
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl lg:text-3xl font-headline font-bold text-primary">
              Full-Stack
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-on-surface font-semibold mt-1">
              Web • Mobile • AI
            </span>
            <span className="text-xs text-on-surface-variant">
              Architected for hyper-scale
            </span>
          </div>
        </div>
      </section>
      {/* 2. CLIENT & ENTERPRISE TRUST SECTION */}
      <section className="w-full bg-surface-container py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                PARTNERS &amp; ENTERPRISE ECOSYSTEM
              </span>
              <h2 className="text-2xl lg:text-3xl font-headline font-bold text-on-surface mt-1">
                Trusted by teams building what comes next
              </h2>
            </div>
            <p className="text-xs font-mono text-on-surface-variant">
              ENTERPRISE IMPLEMENTATIONS • STRATEGIC PARTNERSHIPS
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            <div className="bg-surface-container-lowest p-5 rounded-lg flex flex-col justify-between h-28 shadow-sm hover:shadow-md transition-shadow group">
              <span className="text-[10px] font-mono text-outline tracking-wider uppercase">
                GLOBAL BRAND
              </span>
              <span className="font-headline font-bold text-lg text-on-surface group-hover:text-primary transition-colors">
                Jack Daniel's
              </span>
              <span className="text-[11px] text-on-surface-variant">
                Enterprise Web • Campaign
              </span>
            </div>
            <div className="bg-surface-container-lowest p-5 rounded-lg flex flex-col justify-between h-28 shadow-sm hover:shadow-md transition-shadow group">
              <span className="text-[10px] font-mono text-outline tracking-wider uppercase">
                AUTOMOTIVE
              </span>
              <span className="font-headline font-bold text-lg text-on-surface group-hover:text-primary transition-colors">
                Smeia
              </span>
              <span className="text-[11px] text-on-surface-variant">
                BMW / Mini Importer Portal
              </span>
            </div>
            <div className="bg-surface-container-lowest p-5 rounded-lg flex flex-col justify-between h-28 shadow-sm hover:shadow-md transition-shadow group">
              <span className="text-[10px] font-mono text-outline tracking-wider uppercase">
                INDUSTRY
              </span>
              <span className="font-headline font-bold text-lg text-on-surface group-hover:text-primary transition-colors">
                OCP Group
              </span>
              <span className="text-[11px] text-on-surface-variant">
                Industrial Process Digitals
              </span>
            </div>
            <div className="bg-surface-container-lowest p-5 rounded-lg flex flex-col justify-between h-28 shadow-sm hover:shadow-md transition-shadow group">
              <span className="text-[10px] font-mono text-outline tracking-wider uppercase">
                FMCG
              </span>
              <span className="font-headline font-bold text-lg text-on-surface group-hover:text-primary transition-colors">
                Les Eaux Minérales d'Oulmès
              </span>
              <span className="text-[11px] text-on-surface-variant">
                Commercial Fleet Platform
              </span>
            </div>
            <div className="bg-surface-container-lowest p-5 rounded-lg flex flex-col justify-between h-28 shadow-sm hover:shadow-md transition-shadow group">
              <span className="text-[10px] font-mono text-outline tracking-wider uppercase">
                EDUCATION &amp; RESEARCH
              </span>
              <span className="font-headline font-bold text-lg text-on-surface group-hover:text-primary transition-colors">
                UM6P
              </span>
              <span className="text-[11px] text-on-surface-variant">
                Polytechnic Research Apps
              </span>
            </div>
            <div className="bg-surface-container-lowest p-5 rounded-lg flex flex-col justify-between h-28 shadow-sm hover:shadow-md transition-shadow group">
              <span className="text-[10px] font-mono text-outline tracking-wider uppercase">
                COMMERCIAL
              </span>
              <span className="font-headline font-bold text-lg text-on-surface group-hover:text-primary transition-colors">
                MyCig Group
              </span>
              <span className="text-[11px] text-on-surface-variant">
                High-Volume Retail &amp; POS
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* 3. SELECTED WORK (Desktop Editorial Portfolio) */}
      <section
        className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28"
        id="selected-work"
      >
        <div className="mb-14">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
            CASE STUDIES / PRODUCTION RUNS
          </span>
          <h2 className="text-3xl lg:text-5xl font-headline font-black text-on-surface tracking-tight mt-1">
            Selected work.
          </h2>
          <p className="text-on-surface-variant text-base lg:text-lg mt-2 max-w-xl">
            Software built around real business problems, high availability, and
            deliberate user craft.
          </p>
        </div>
        <div className="space-y-16">
          {/* Project 1: Cocoinbox (Split 7 / 5 Layout) */}
          <div className="bg-surface-container-low rounded-xl p-6 lg:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Visual (Span 7) */}
              <div className="lg:col-span-7 bg-surface-container-lowest rounded-lg p-5 shadow-inner overflow-hidden">
                <div className="flex items-center justify-between pb-3 text-xs text-on-surface-variant font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-error/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-tertiary-container" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    <span className="ml-2 font-mono text-[11px] text-outline">
                      app.cocoinbox.io/workspace
                    </span>
                  </div>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[10px] font-bold">
                    LIVE SOCKET
                  </span>
                </div>
                {/* UI Mockup Inside */}
                <div className="bg-surface-container-high rounded-md p-4 grid grid-cols-12 gap-3">
                  <div className="col-span-4 bg-surface rounded p-3 flex flex-col justify-between space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-outline font-headline">
                      Channels
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="p-1.5 rounded bg-primary-fixed text-on-primary-fixed font-semibold flex items-center justify-between">
                        <span># vip-support</span>
                        <span className="text-[10px] px-1 bg-primary text-on-primary rounded">
                          3
                        </span>
                      </div>
                      <div className="p-1.5 rounded text-on-surface-variant flex items-center justify-between">
                        <span># enterprise-crm</span>
                        <span className="text-[10px] text-outline">12m</span>
                      </div>
                      <div className="p-1.5 rounded text-on-surface-variant flex items-center justify-between">
                        <span># triage-desk</span>
                      </div>
                    </div>
                    <div className="pt-2 text-[10px] text-outline font-mono">
                      ENCRYPTED TLS 1.3
                    </div>
                  </div>
                  <div className="col-span-8 bg-surface rounded p-3 flex flex-col justify-between space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-xs font-bold text-on-surface">
                          Client: Meridian Capital SA
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-outline">
                        E2E KEY: 0x9AF4
                      </span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="p-2 rounded bg-surface-container-low max-w-[85%] text-on-surface-variant">
                        Invoice batch #4819 cleared through Moroccan
                        clearinghouse API.
                      </div>
                      <div className="p-2 rounded bg-primary text-on-primary ml-auto max-w-[85%]">
                        Confirmed. Real-time reconciliation active on webhook
                        listener.
                      </div>
                    </div>
                    <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-outline">
                      <span>Throughput: 8,420 msgs/sec</span>
                      <span className="text-primary font-bold">
                        LATENCY 4ms
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Description (Span 5) */}
              <div className="lg:col-span-5 flex flex-col space-y-4">
                <span className="text-xs font-mono font-bold tracking-wider text-primary uppercase">
                  SECURE COMMUNICATION &amp; CRM
                </span>
                <h3 className="text-2xl lg:text-3xl font-headline font-bold text-on-surface">
                  Cocoinbox <span className="text-primary">→</span>
                </h3>
                <p className="text-sm lg:text-base text-on-surface-variant leading-relaxed">
                  High-throughput encrypted communication infrastructure and
                  bespoke CRM designed for real-time customer workflows,
                  compliant regulatory compliance, and mission-critical
                  reliability.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded bg-surface text-xs font-mono text-on-surface-variant">
                    Next.js
                  </span>
                  <span className="px-2.5 py-1 rounded bg-surface text-xs font-mono text-on-surface-variant">
                    Node.js
                  </span>
                  <span className="px-2.5 py-1 rounded bg-surface text-xs font-mono text-on-surface-variant">
                    WebSockets
                  </span>
                  <span className="px-2.5 py-1 rounded bg-surface text-xs font-mono text-on-surface-variant">
                    PostgreSQL
                  </span>
                </div>
                <div className="p-4 rounded-lg bg-primary-fixed/40 mt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block mb-1">
                    MEASURABLE IMPACT
                  </span>
                  <p className="text-sm font-bold text-on-primary-fixed">
                    +340% daily active workflow volume • Zero recorded downtime
                    during peak loads.
                  </p>
                </div>
                <a
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-container transition-colors pt-2"
                  href="/realisations/coco-inbox"
                >
                  <span>View full case study</span>
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* Project 2: YourSmile (Split 5 / 7 Reversed Layout) */}
          <div className="bg-surface-container-low rounded-xl p-6 lg:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Description (Span 5) */}
              <div className="lg:col-span-5 flex flex-col space-y-4 order-2 lg:order-1">
                <span className="text-xs font-mono font-bold tracking-wider text-primary uppercase">
                  ORTHODONTIC MANAGEMENT &amp; CLINICAL WORKFLOW
                </span>
                <h3 className="text-2xl lg:text-3xl font-headline font-bold text-on-surface">
                  YourSmile <span className="text-primary">→</span>
                </h3>
                <p className="text-sm lg:text-base text-on-surface-variant leading-relaxed">
                  End-to-end clinical management portal, interactive 3D dental
                  scan pipeline, and patient treatment tracking system for
                  multi-clinic dental networks across Europe and North Africa.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded bg-surface text-xs font-mono text-on-surface-variant">
                    React
                  </span>
                  <span className="px-2.5 py-1 rounded bg-surface text-xs font-mono text-on-surface-variant">
                    TypeScript
                  </span>
                  <span className="px-2.5 py-1 rounded bg-surface text-xs font-mono text-on-surface-variant">
                    Three.js
                  </span>
                  <span className="px-2.5 py-1 rounded bg-surface text-xs font-mono text-on-surface-variant">
                    Cloudflare
                  </span>
                </div>
                <div className="p-4 rounded-lg bg-tertiary-fixed/40 mt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-tertiary font-bold block mb-1">
                    CLINICAL EFFICIENCY
                  </span>
                  <p className="text-sm font-bold text-on-tertiary-fixed">
                    62% reduction in patient onboarding time • Sub-second 3D
                    viewport rendering.
                  </p>
                </div>
                <a
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-container transition-colors pt-2"
                  href="#selected-work"
                >
                  <span>View full case study</span>
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </a>
              </div>
              {/* Visual (Span 7) */}
              <div className="lg:col-span-7 bg-surface-container-lowest rounded-lg p-5 shadow-inner overflow-hidden order-1 lg:order-2">
                <div className="flex items-center justify-between pb-3 text-xs text-on-surface-variant font-mono">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-primary">
                      view_in_ar
                    </span>
                    <span className="font-bold text-on-surface">
                      3D Mesh Inspector • Plan #9084
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                    WebGL 2.0 / 60 FPS
                  </span>
                </div>
                {/* Simulated 3D viewport */}
                <div className="relative bg-surface-container rounded-lg h-56 w-full flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#4f378a_1px,transparent_1px)] [background-size:16px_16px]" />
                  {/* 3D Dental Arch Graphic representation */}
                  <svg
                    className="w-64 h-36 relative z-10"
                    fill="none"
                    viewBox="0 0 240 140"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 30 110 C 30 40, 210 40, 210 110"
                      fill="none"
                      stroke="#6750a4"
                      strokeLinecap="round"
                      strokeWidth={4}
                    />
                    <path
                      d="M 45 105 C 45 55, 195 55, 195 105"
                      fill="none"
                      stroke="#cbc4d2"
                      strokeDasharray="2 2"
                      strokeWidth="1.5"
                    />
                    {/* Teeth anchor dots */}
                    <circle cx={36} cy={100} fill="#4f378a" r={5} />
                    <circle cx={50} cy={80} fill="#4f378a" r={5} />
                    <circle cx={70} cy={62} fill="#4f378a" r={5} />
                    <circle cx={95} cy={50} fill="#4f378a" r={5} />
                    <circle cx={120} cy={46} fill="#c9a74d" r={6} />
                    <circle cx={145} cy={50} fill="#4f378a" r={5} />
                    <circle cx={170} cy={62} fill="#4f378a" r={5} />
                    <circle cx={190} cy={80} fill="#4f378a" r={5} />
                    <circle cx={204} cy={100} fill="#4f378a" r={5} />
                  </svg>
                  {/* Floating overlay specs */}
                  <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-sm px-2.5 py-1.5 rounded text-[10px] font-mono text-on-surface shadow">
                    <span>ALIGNMENT DELTA: 0.12mm (TARGET SPEC)</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-surface/90 backdrop-blur-sm px-2.5 py-1.5 rounded text-[10px] font-mono text-emerald-700 font-bold shadow">
                    <span>SIMULATION PASS • 14 STAGES</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Projects 3 & 4 (2-Column Balanced Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 3: ProcheDeMoi (Darker themed container for visual rhythm) */}
            <div className="bg-inverse-surface text-inverse-on-surface rounded-xl p-8 shadow-lg flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-inverse-primary/10 rounded-full blur-2xl" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold tracking-widest text-inverse-primary uppercase">
                    LOCAL DISCOVERY PLATFORM &amp; AI
                  </span>
                  <span className="text-[10px] font-mono text-inverse-on-surface/60 uppercase">
                    CASABLANCA HQ
                  </span>
                </div>
                <h3 className="text-2xl font-headline font-bold text-white mb-3">
                  ProcheDeMoi <span className="text-inverse-primary">→</span>
                </h3>
                <p className="text-sm text-inverse-on-surface/80 leading-relaxed mb-6">
                  Hyperlocal geospatial discovery engine powered by automated
                  structured data ingestion and AI recommendation agents for
                  urban commercial districts.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-0.5 rounded bg-surface/10 text-xs font-mono text-inverse-on-surface">
                    React Native
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface/10 text-xs font-mono text-inverse-on-surface">
                    Next.js
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface/10 text-xs font-mono text-inverse-on-surface">
                    AI / LLM APIs
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface/10 text-xs font-mono text-inverse-on-surface">
                    MongoDB
                  </span>
                </div>
              </div>
              <div className="pt-4 border-t border-inverse-on-surface/10 flex items-center justify-between">
                <span className="text-xs font-mono text-inverse-primary font-semibold">
                  180K+ monthly active users across Morocco
                </span>
                <span className="material-symbols-outlined text-inverse-primary">
                  arrow_forward
                </span>
              </div>
            </div>
            {/* Project 4: Enterprise AI Orchestrator */}
            <div className="bg-surface-container-low rounded-xl p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                    INTELLIGENT ENTERPRISE WORKFLOWS
                  </span>
                  <span className="text-[10px] font-mono text-outline uppercase">
                    SAAS PRODUCT
                  </span>
                </div>
                <h3 className="text-2xl font-headline font-bold text-on-surface mb-3">
                  Enterprise AI Orchestrator{" "}
                  <span className="text-primary">→</span>
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  Intelligent CRM marrying human agent productivity with LLM
                  orchestrated task dispatch, automated lead qualification, and
                  automated multilingual knowledge base routing.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-0.5 rounded bg-surface text-xs font-mono text-on-surface-variant">
                    Python
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface text-xs font-mono text-on-surface-variant">
                    Next.js
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface text-xs font-mono text-on-surface-variant">
                    OpenAI APIs
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface text-xs font-mono text-on-surface-variant">
                    PostgreSQL
                  </span>
                </div>
              </div>
              <div className="pt-4 bg-surface-container rounded-lg p-3 flex items-center justify-between">
                <span className="text-xs font-mono text-primary font-bold">
                  4.5x faster lead turnaround time
                </span>
                <span className="material-symbols-outlined text-primary text-sm">
                  trending_up
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
              CAPABILITIES / ENGINEERING MATRIX
            </span>
            <h2 className="text-3xl lg:text-5xl font-headline font-black text-on-surface tracking-tight mt-1">
              From idea to production.
            </h2>
            <p className="text-on-surface-variant text-base lg:text-lg mt-2 max-w-2xl">
              We act as your dedicated technical partner, embedding engineering
              rigor and deliberate product intuition into every phase.
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
                  Product Strategy
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Turn business requirements into a clear product and technical
                  roadmap with architecture blueprints and scoped deliverables.
                </p>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                Roadmaps • Architecture Spec
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
                  UX / UI Design
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Design interfaces that are simple, useful, and built around
                  real user behavior with strict multi-device design systems.
                </p>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                Design Tokens • Micro-Interactions
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
                  Web Applications
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Build scalable web platforms using modern full-stack
                  technologies with sub-second page performance and zero drift
                  state management.
                </p>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                Next.js • High Concurrency
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
                  Mobile Applications
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Create polished mobile experiences connected to reliable
                  backend systems with offline sync, biometric security, and
                  push telemetry.
                </p>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                iOS • Android • React Native
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
                  AI &amp; Automation
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Integrate AI agents, intelligent workflows, APIs, and
                  automation into existing or new products to create tangible
                  operational leverage.
                </p>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                LLM Pipelines • Vector Search
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
                  Infrastructure &amp; DevOps
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Build reliable cloud infrastructure, automated deployment
                  pipelines, and scalable fail-safe multi-region systems.
                </p>
              </div>
              <div className="mt-6 pt-4 text-xs font-mono text-outline">
                CI/CD • Edge • Observability
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 5. FOUNDATIONAL STACK */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="mb-14">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
            FOUNDATIONAL STACK
          </span>
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-on-surface tracking-tight mt-1">
            Built with technology that lasts.
          </h2>
          <p className="text-on-surface-variant text-base mt-2 max-w-2xl">
            A curated modern stack optimized for developer speed, security, and
            enterprise durability.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Category 1 */}
          <div className="bg-surface-container-low p-6 rounded-xl">
            <h4 className="text-xs font-mono font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-outline-variant/30">
              Frontend Engineering
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Next.js</span>
                <span className="text-[11px] font-mono text-outline">
                  SSR / RSC
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>React</span>
                <span className="text-[11px] font-mono text-outline">
                  v19 Core
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>TypeScript</span>
                <span className="text-[11px] font-mono text-outline">
                  Strict Type
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Tailwind CSS</span>
                <span className="text-[11px] font-mono text-outline">
                  Design Tokens
                </span>
              </li>
            </ul>
          </div>
          {/* Category 2 */}
          <div className="bg-surface-container-low p-6 rounded-xl">
            <h4 className="text-xs font-mono font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-outline-variant/30">
              Backend &amp; Database
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Node.js / Bun</span>
                <span className="text-[11px] font-mono text-outline">
                  Microservices
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>GraphQL / REST</span>
                <span className="text-[11px] font-mono text-outline">
                  Federation
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>PostgreSQL</span>
                <span className="text-[11px] font-mono text-outline">
                  ACID Storage
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>MongoDB / Redis</span>
                <span className="text-[11px] font-mono text-outline">
                  In-Memory Sync
                </span>
              </li>
            </ul>
          </div>
          {/* Category 3 */}
          <div className="bg-surface-container-low p-6 rounded-xl">
            <h4 className="text-xs font-mono font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-outline-variant/30">
              Cloud &amp; Infrastructure
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Cloudflare Edge</span>
                <span className="text-[11px] font-mono text-outline">
                  Global Anycast
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Vercel Enterprise</span>
                <span className="text-[11px] font-mono text-outline">
                  CD/CI Fast
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>OVHcloud</span>
                <span className="text-[11px] font-mono text-outline">
                  Bare Metal
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Docker &amp; K8s</span>
                <span className="text-[11px] font-mono text-outline">
                  Containers
                </span>
              </li>
            </ul>
          </div>
          {/* Category 4 */}
          <div className="bg-surface-container-low p-6 rounded-xl">
            <h4 className="text-xs font-mono font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-outline-variant/30">
              Intelligence &amp; AI
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>AI / LLM APIs</span>
                <span className="text-[11px] font-mono text-outline">
                  Anthropic/OpenAI
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Vector Stores</span>
                <span className="text-[11px] font-mono text-outline">
                  Pinecone / pgvector
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Autonomous Workflows</span>
                <span className="text-[11px] font-mono text-outline">
                  Agents
                </span>
              </li>
              <li className="flex items-center justify-between text-sm font-semibold text-on-surface">
                <span>Embeddings</span>
                <span className="text-[11px] font-mono text-outline">
                  Semantic Search
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* 6. METHODOLOGY (5-Step Engineering System) */}
      <section className="w-full bg-surface-container py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              METHODOLOGY
            </span>
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-on-surface tracking-tight mt-1">
              5-Step Engineering System
            </h2>
            <p className="text-on-surface-variant text-base mt-2 max-w-xl">
              Structured for predictable velocity and measurable software
              quality without endless review loops.
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
                  Discover
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Understand business, users, existing codebases, and technical
                  constraints thoroughly.
                </p>
              </div>
              <span className="text-[10px] font-mono text-outline uppercase tracking-wider">
                ALIGNMENT • AUDIT
              </span>
            </div>
            {/* Step 2 */}
            <div className="bg-surface-container-lowest p-5 rounded-lg flex flex-col justify-between h-64 shadow-sm">
              <div>
                <span className="text-2xl font-mono font-black text-primary/40 block mb-3">
                  02
                </span>
                <h3 className="text-base font-headline font-bold text-on-surface mb-2">
                  Define
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Turn complexity into a focused product strategy and clear
                  architectural specification.
                </p>
              </div>
              <span className="text-[10px] font-mono text-outline uppercase tracking-wider">
                SPEC • ARCHITECTURE
              </span>
            </div>
            {/* Step 3 */}
            <div className="bg-surface-container-lowest p-5 rounded-lg flex flex-col justify-between h-64 shadow-sm">
              <div>
                <span className="text-2xl font-mono font-black text-primary/40 block mb-3">
                  03
                </span>
                <h3 className="text-base font-headline font-bold text-on-surface mb-2">
                  Design
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Create user flows, component libraries, and scalable design
                  tokens matching brand goals.
                </p>
              </div>
              <span className="text-[10px] font-mono text-outline uppercase tracking-wider">
                SYSTEMS • PROTOTYPES
              </span>
            </div>
            {/* Step 4 */}
            <div className="bg-surface-container-lowest p-5 rounded-lg flex flex-col justify-between h-64 shadow-sm">
              <div>
                <span className="text-2xl font-mono font-black text-primary block mb-3">
                  04
                </span>
                <h3 className="text-base font-headline font-bold text-on-surface mb-2">
                  Build
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Engineer the product with quality, speed, automated test
                  coverage, and high scalability.
                </p>
              </div>
              <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider">
                CONTINUOUS DEPLOY
              </span>
            </div>
            {/* Step 5 */}
            <div className="bg-surface-container-lowest p-5 rounded-lg flex flex-col justify-between h-64 shadow-sm">
              <div>
                <span className="text-2xl font-mono font-black text-primary/40 block mb-3">
                  05
                </span>
                <h3 className="text-base font-headline font-bold text-on-surface mb-2">
                  Launch &amp; Evolve
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Deploy, monitor real telemetry, improve workflows, and
                  iteratively continue building.
                </p>
              </div>
              <span className="text-[10px] font-mono text-outline uppercase tracking-wider">
                OBSERVABILITY • SCALE
              </span>
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
                OUR PHILOSOPHY
              </span>
              <h2 className="text-3xl lg:text-4xl font-headline font-black text-on-surface tracking-tight mt-1">
                Not just another development agency.
              </h2>
              <p className="text-on-surface-variant text-base mt-3 leading-relaxed">
                We don't outsource to junior contractors. We operate as embedded
                engineering partners with skin in the game.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-surface-container-low">
                <h4 className="font-headline font-bold text-sm text-on-surface mb-1">
                  Business-First Engineering
                </h4>
                <p className="text-xs text-on-surface-variant">
                  We align every pull request with your company's revenue and
                  operation metrics.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface-container-low">
                <h4 className="font-headline font-bold text-sm text-on-surface mb-1">
                  Senior Execution
                </h4>
                <p className="text-xs text-on-surface-variant">
                  Direct work with seasoned engineers who have shipped systems
                  handling real scale.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface-container-low">
                <h4 className="font-headline font-bold text-sm text-on-surface mb-1">
                  Built for the Long Term
                </h4>
                <p className="text-xs text-on-surface-variant">
                  Clean codebases, zero technical debt shortcuts, and clear
                  documentation.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface-container-low">
                <h4 className="font-headline font-bold text-sm text-on-surface mb-1">
                  AI-Native Thinking
                </h4>
                <p className="text-xs text-on-surface-variant">
                  Modern machine intelligence woven naturally into workflows and
                  architectures.
                </p>
              </div>
            </div>
          </div>
          {/* Prominent Metrics Block (Right 6) */}
          <div className="lg:col-span-6 bg-inverse-surface text-inverse-on-surface rounded-2xl p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-inverse-primary uppercase">
                MEASURABLE TRACK RECORD
              </span>
              <h3 className="text-2xl font-headline font-bold text-white mt-1 mb-8">
                Production metrics that speak for themselves.
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-8 my-auto">
              <div>
                <span className="text-4xl lg:text-5xl font-mono font-black text-white tracking-tight">
                  20+
                </span>
                <p className="text-xs font-mono uppercase tracking-wider text-inverse-primary font-bold mt-1">
                  Projects Delivered
                </p>
                <p className="text-xs text-inverse-on-surface/70 mt-1">
                  Cross-industry zero-drift deployments
                </p>
              </div>
              <div>
                <span className="text-4xl lg:text-5xl font-mono font-black text-white tracking-tight">
                  4+
                </span>
                <p className="text-xs font-mono uppercase tracking-wider text-inverse-primary font-bold mt-1">
                  Years Building
                </p>
                <p className="text-xs text-inverse-on-surface/70 mt-1">
                  Refined operational software standards
                </p>
              </div>
              <div>
                <span className="text-4xl lg:text-5xl font-mono font-black text-white tracking-tight">
                  30+
                </span>
                <p className="text-xs font-mono uppercase tracking-wider text-inverse-primary font-bold mt-1">
                  Websites in Prod
                </p>
                <p className="text-xs text-inverse-on-surface/70 mt-1">
                  High-traffic active customer portals
                </p>
              </div>
              <div>
                <span className="text-4xl lg:text-5xl font-mono font-black text-white tracking-tight">
                  5+
                </span>
                <p className="text-xs font-mono uppercase tracking-wider text-inverse-primary font-bold mt-1">
                  Sites per Client
                </p>
                <p className="text-xs text-inverse-on-surface/70 mt-1">
                  Long-term ongoing client retention
                </p>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-inverse-on-surface/10 flex items-center justify-between text-xs font-mono text-inverse-on-surface/70">
              <span>ZERO RECORDED CRITICAL LEAKS</span>
              <span className="text-inverse-primary font-bold">
                100% IP ASSIGNMENT
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* 8. ABOUT BYTEFORCE & MOROCCO HUB */}
      <section id="about" className="w-full bg-surface-container py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                ETHOS / IDENTITY
              </span>
              <h2 className="text-3xl lg:text-4xl font-headline font-black text-on-surface tracking-tight">
                Engineering from Morocco. Building globally.
              </h2>
              <p className="text-base text-on-surface-variant leading-relaxed">
                Founded in Morocco and partnering with high-growth businesses
                internationally, ByteForce bridges world-class product
                engineering talent with global delivery standards. Small enough
                to care. Technical enough to build anything.
              </p>
              <div className="pt-4 flex items-center gap-6">
                <div>
                  <div className="text-lg font-bold text-on-surface">
                    Casablanca
                  </div>
                  <div className="text-xs font-mono text-outline">
                    HQ &amp; Engineering Lab
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
      {/* 9. INSIGHTS / THOUGHT LEADERSHIP */}
      <section id="insights" className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              PUBLICATIONS
            </span>
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-on-surface tracking-tight mt-1">
              Thinking beyond the code.
            </h2>
          </div>
          <a
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-container transition-colors"
            href="/#insights"
          >
            <span>Read all essays</span>
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Article 1 */}
          <a
            className="bg-surface-container-low p-6 rounded-xl hover:shadow-md transition-shadow flex flex-col justify-between group"
            href="#insights"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-outline mb-3">
                <span>2026 EDITION</span>
                <span>5 MIN READ</span>
              </div>
              <h3 className="text-lg font-headline font-bold text-on-surface group-hover:text-primary transition-colors leading-snug mb-2">
                AI and the future of business software
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Why isolated generative prompts will give way to unified agentic
                orchestration inside transactional systems.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-bold text-primary">
              <span>Read essay</span>
              <span className="material-symbols-outlined text-sm">
                north_east
              </span>
            </div>
          </a>
          {/* Article 2 */}
          <a
            className="bg-surface-container-low p-6 rounded-xl hover:shadow-md transition-shadow flex flex-col justify-between group"
            href="#insights"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-outline mb-3">
                <span>ARCHITECTURE</span>
                <span>8 MIN READ</span>
              </div>
              <h3 className="text-lg font-headline font-bold text-on-surface group-hover:text-primary transition-colors leading-snug mb-2">
                How to build a scalable web platform
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                A deep-dive technical blueprint for multi-tenant Postgres
                partitioning, edge cache purging, and sub-10ms queries.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-bold text-primary">
              <span>Read essay</span>
              <span className="material-symbols-outlined text-sm">
                north_east
              </span>
            </div>
          </a>
          {/* Article 3 */}
          <a
            className="bg-surface-container-low p-6 rounded-xl hover:shadow-md transition-shadow flex flex-col justify-between group"
            href="#insights"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-outline mb-3">
                <span>SYSTEMS STRATEGY</span>
                <span>6 MIN READ</span>
              </div>
              <h3 className="text-lg font-headline font-bold text-on-surface group-hover:text-primary transition-colors leading-snug mb-2">
                What businesses should automate in 2026
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Distinguishing high-leverage business automation from frivolous
                tool sprawl with concrete case analysis.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-bold text-primary">
              <span>Read essay</span>
              <span className="material-symbols-outlined text-sm">
                north_east
              </span>
            </div>
          </a>
        </div>
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
            Have a complex problem? Let's build the right solution.
          </h2>
          <p className="text-on-surface-variant text-base lg:text-lg mt-4 max-w-xl">
            Tell us about your product roadmap, engineering bottleneck, or new
            venture. We respond within 24 hours.
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
              href="mailto:hello@byteforce.ma"
            >
              <span className="material-symbols-outlined text-base text-primary">
                mail
              </span>
              <span>hello@byteforce.ma</span>
            </a>
          </div>
          <div className="mt-12 flex items-center gap-3 text-xs font-mono text-outline">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>
              ACCEPTING NEW CLIENTS FOR Q2 / Q3 2026 • CASABLANCA • GLOBAL
              DELIVERY
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
