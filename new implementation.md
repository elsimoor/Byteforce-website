## PHASE 0.5 — DISCOVER, INSTALL, AND CONFIGURE DESIGN SKILLS

Before implementing any redesign, inspect the Cursor Agent Skills available in the project and user environment.

### Required skills

Prioritize these skills:

1. `good-taste` — aesthetic judgment, art direction, and avoiding generic AI-generated designs.
2. `design-critique` — evaluate the existing interface and identify visual weaknesses before coding.
3. `ui-ux-design` — composition, hierarchy, usability, and user journeys.
4. `design-system` — consistent typography, spacing, colors, tokens, and reusable components.
5. `frontend-design-implementation` — production-quality React and Next.js interface implementation.
6. `responsive-design` — intentional desktop, tablet, and mobile layouts.
7. `web-interactions-motion` — purposeful interactions and accessible animations.
8. `conversion-design` — clear calls to action and effective lead-generation journeys.
9. `redesign-quality-audit` — rendered-page inspection, responsive checks, and regression verification.

### Discovery and installation rules

- Inspect existing project-level and user-level Cursor skills before doing anything else.
- Reuse existing skills when they already provide the required capabilities.
- If a suitable skill is missing, search for a reputable, maintained source before proposing installation.
- Prefer official or trusted sources and inspect skill instructions before adopting them.
- Never install arbitrary skills from unknown sources without reviewing their contents.
- Avoid duplicate or overlapping skills that conflict with one another.
- If installation requires a separate tool, permission, or manual action, explain exactly what is required instead of pretending the installation succeeded.
- If no suitable external skill exists, create a project-specific skill in the appropriate Cursor skills directory.

### ByteForce-specific skill

Create or refine a project-specific `good-taste` skill if one is not already available.

Its instructions must explicitly require the agent to:

- Preserve ByteForce's existing brand and valuable website sections.
- Use AltCreative as visual inspiration rather than a template to copy.
- Avoid generic AI-generated design patterns.
- Prioritize composition, typography, whitespace, real product visuals, and meaningful interactions.
- Preserve existing SEO content, routes, internal links, and conversion flows.
- Inspect rendered screenshots and iterate before declaring the redesign complete.

Store project-specific skills in the supported project-level Cursor Agent Skills location, normally `.cursor/skills/<skill-name>/SKILL.md`, using valid skill metadata and instructions.

### Report before implementation

Provide a short inventory showing:
- Skills found and their locations.
- Skills reused.
- Skills missing.
- Skills created or installed.
- Any installation that requires my approval.

Do not claim that a skill was installed, created, or activated unless that operation was actually completed.

Once the skill setup is ready, continue with the ByteForce redesign brief.

Do not let skill installation become an excuse to delay the work indefinitely. If external installation is unavailable, use the available instructions and create the missing project-specific skills where appropriate.


# BYTEFORCE — Premium Website Visual Refinement
## Reference: AltCreative on Behance
Reference URL: https://www.behance.net/gallery/231822283/SaaS-Landing-Page-Design-Website-UXUI-in-Figma
Website: https://byteforce.ma/

## 1. MISSION

Improve the visual quality, design consistency, perceived credibility, and conversion performance of the existing ByteForce website by drawing inspiration from the AltCreative Behance reference.

This is a visual refinement and selective redesign of an existing production website, NOT a complete rebuild.

ByteForce is a custom software development company based in Casablanca, Morocco. Its services include custom software, SaaS platforms, CRM/ERP systems, web and mobile applications, integrations, AI, automation, and ongoing technical support.

The website's primary business objective is to generate qualified project inquiries through /contact. The free website audit is another important acquisition channel.

The final website should feel like a sophisticated, technically credible software engineering studio with strong art direction, not a generic web agency template.

### The fundamental rule

Preserve what works. Improve what does not. Never delete valuable content or functionality merely to imitate a reference design.

AltCreative should influence the quality of the composition, typography, visual rhythm, imagery, and interactions. It must not replace ByteForce's identity or business strategy.

---

## 2. PHASE ZERO — INSPECT THE REPOSITORY

Before writing or modifying code, inspect the actual project.

Identify:

- The Next.js version, routing structure, rendering strategy, and application architecture.
- The homepage and contact page implementations.
- Existing service pages and their internal-link hierarchy.
- Existing products, portfolio items, and case studies.
- The free website audit and its complete user journey.
- Existing forms, email functionality, WhatsApp links, and CTAs.
- Current fonts, colors, spacing tokens, component library, and global styles.
- Existing animations, illustrations, screenshots, and other visual assets.
- Metadata, canonical URLs, JSON-LD, sitemap generation, robots directives, and analytics.
- Existing reusable components and any project-specific design conventions.

Use the actual repository as the source of truth. Do not assume that the live website and local implementation are identical.

Run the application using the project's existing scripts and inspect the rendered website at desktop and mobile sizes. Use available browser, screenshot, or visual-inspection tooling where possible.

Do not start by replacing the homepage.

### Deliverable before implementation

Create a concise inventory of the existing sections and classify each one:

- KEEP — valuable content and presentation that should remain substantially intact.
- IMPROVE — useful content that needs better visual execution.
- REORGANIZE — useful content whose position or relationship could be improved.
- PROPOSE REMOVAL — genuinely redundant or ineffective content that requires explicit justification.

Record the reason for every proposed removal.

Do not remove sections simply because they are absent from AltCreative.

---

## 3. PHASE ONE — DEFINE THE ART DIRECTION

Read and apply the project's available design skills, especially:

- good-taste
- design-critique
- ui-ux-design
- design-system
- frontend-design-implementation
- responsive-design
- conversion-design
- redesign-quality-audit

If any of these skills are not installed, do not invent or claim to have read them. Follow the principles defined in this brief.

### Desired aesthetic

Aim for a polished, confident, contemporary digital studio.

The design should combine:

1. Clear, expressive typography.
2. Strong visual hierarchy and deliberate composition.
3. Sophisticated spacing and proportion.
4. Meaningful product visuals and software interfaces.
5. Restrained use of color and decorative effects.
6. Purposeful visual contrast between sections.
7. Subtle, functional motion.
8. A consistent design language across the website.
9. Credible technical detail without visual clutter.
10. Clear paths toward contacting ByteForce.

Study the AltCreative reference for its visual principles. Do not blindly reproduce individual sections, colors, or layouts that conflict with ByteForce's brand or content.

If the reference cannot be accessed, continue using this brief and the available local assets. Do not claim to have inspected unavailable screens.

### Preserve ByteForce's brand

Inspect the existing brand colors, logo, typography, imagery, and components before proposing changes.

Retain recognizable brand elements unless there is a concrete reason to improve them. Do not introduce a new logo, arbitrary palette, or unrelated visual identity.

Do not automatically turn the whole website dark, add gradients everywhere, or replace a working light theme simply because a reference uses a different aesthetic.

### Reject generic AI-generated design

Avoid:

- Repeating three-card grids throughout the entire page.
- Centered headings followed by identical cards in every section.
- Excessive rounded rectangles, pills, shadows, and borders.
- Purple gradients and generic glowing blue backgrounds.
- Floating abstract shapes without informational purpose.
- Decorative icons that add no meaning.
- Large empty hero sections with weak visual content.
- Repetitive text-and-image sections with no variation.
- Arbitrary animations, parallax effects, and cursor-following decorations.
- Fake dashboard screenshots or invented product metrics.
- Overdesigned components that reduce readability.

These patterns are not universally forbidden, but every use must serve a clear design purpose.

---

## 4. PHASE TWO — IMPROVE THE EXISTING HOMEPAGE

Use the current homepage as the baseline. Preserve its valuable sections and improve them in place wherever possible.

### A. Hero section

The hero must quickly communicate what ByteForce builds, whom it helps, and why a business should care.

Keep the primary French-language positioning around custom software development in Morocco, including the existing relevant SEO keyword.

Improve:

- Headline typography and line breaks.
- Headline and supporting-text hierarchy.
- Composition and whitespace.
- CTA visibility.
- Visual balance between copy and visual content.
- Responsive behavior.

Create a distinctive visual focal point using real product imagery, an existing application interface, or a meaningful software workflow.

Do not invent customer logos, performance numbers, or product capabilities.

Keep the primary CTA directed toward /contact and preserve other useful existing actions.

### B. Business problems and value proposition

Where the current content discusses operational problems, disconnected tools, manual processes, or business inefficiencies, improve its presentation.

Use appropriate visual storytelling to explain how custom software can connect workflows, centralize information, or automate repetitive work.

A useful diagram is better than another decorative card grid.

Preserve substantive existing content and its relevant internal links.

### C. Services

Retain the existing service categories and useful descriptions.

Where relevant, distinguish between:

- Custom software development.
- SaaS product development.
- CRM and ERP solutions.
- Web platforms and integrations.
- Mobile application development.
- AI and automation.
- Maintenance and ongoing technical support.

Use the categories that already exist in the actual implementation rather than forcing this exact list onto the website.

Introduce visual variety based on the information being presented:

- Product screenshots for software and SaaS.
- Workflow diagrams for automation and integrations.
- Device compositions for mobile applications.
- Structured process visuals for consulting and delivery.
- Clear editorial layouts for explanatory content.

Keep relevant links to existing service landing pages. Do not collapse detailed SEO content into a generic paragraph or remove internal links to simplify the design.

### D. Portfolio and product proof

Inspect all existing portfolio items, products, and case studies.

Preserve their links and factual content.

Where suitable assets are available, improve their presentation through:

- Genuine product screenshots.
- Clear project titles and descriptions.
- The business problem addressed.
- The solution delivered.
- Relevant technologies or integrations.
- Links to the actual product or case study.

Do not fabricate case studies, testimonials, client relationships, or numerical results.

If screenshots are unavailable, use existing assets or restrained visual compositions based on verified information.

### E. Engineering capabilities and technology

Keep useful information that demonstrates ByteForce's technical expertise.

Present technology stacks and engineering capabilities selectively. Do not turn the page into a wall of technology logos.

Prioritize business relevance, implementation quality, architecture, integrations, maintainability, and delivery.

Preserve useful existing technical content and links.

### F. Development process

Retain the existing development process and any useful explanation of how projects progress from discovery through implementation, delivery, and support.

Improve readability and visual storytelling.

Use a timeline, connected stages, or another appropriate layout if it improves comprehension.

Do not add extra steps just to make the section more visually elaborate.

### G. Free website audit

Preserve the existing free audit feature and its complete functional journey.

Do not replace a working audit tool with a decorative mockup.

Improve the visual presentation of the existing input, supporting explanation, submission states, validation, results, and next steps without changing backend behavior.

Keep claims about the audit accurate. Make it clear what visitors receive and direct interested users toward the relevant existing action.

### H. Trust, maintenance, FAQs, and other existing sections

Inspect and preserve valuable supporting sections, including testimonials, client references, maintenance offerings, FAQs, and other credibility elements where they exist.

Improve hierarchy and readability without inventing evidence or hiding important information.

If a section is long, consider better grouping, progressive disclosure, or a dedicated page rather than silently deleting it.

### I. Final conversion section

Keep /contact as the principal destination for visitors ready to discuss a project.

Use concise, credible French copy and a clear CTA.

Avoid aggressive sales language, fake urgency, or unnecessary friction.

Preserve the free audit as an alternative for visitors who want to explore ByteForce before starting a conversation.

---

## 5. PHASE THREE — BUILD A COHERENT DESIGN SYSTEM

Improve consistency without unnecessarily replacing existing components.

Inspect the current implementation and refine, where needed:

- Font families and typographic scale.
- Heading sizes and line heights.
- Body text readability and line lengths.
- Spacing scale and section padding.
- Content container widths.
- Grid behavior and responsive breakpoints.
- Colors and semantic color roles.
- Borders, shadows, and corner radii.
- Buttons, links, forms, and interactive states.
- Icon sizes and stroke consistency.
- Image ratios and cropping.
- Focus indicators and accessibility states.

Use the project's existing Tailwind CSS and shadcn/ui implementation where appropriate.

Do not introduce MUI or an unnecessary UI framework.

Do not create a new component abstraction for every visual variation. Reuse shared components when they support consistency, but allow sections to have different compositions when the content calls for them.

Avoid broad global CSS changes that unintentionally affect unrelated routes.

---

## 6. PHASE FOUR — MOTION AND INTERACTIONS

Use motion to improve comprehension and perceived quality, not to compensate for weak composition.

Appropriate enhancements may include:

- Subtle hover states on links and buttons.
- Clear form validation and submission feedback.
- Small transitions between interface states.
- Purposeful reveal animations.
- Interactive workflow demonstrations where relevant.
- Responsive navigation interactions.

Requirements:

- Respect prefers-reduced-motion.
- Avoid unnecessary animation dependencies.
- Avoid layout shifts and performance-heavy effects.
- Keep interactions usable with keyboards and touch.
- Preserve existing functionality.
- Do not add interactions that look functional but do nothing.

Prefer CSS and existing project utilities when sufficient.

---

## 7. PHASE FIVE — SEO AND CONTENT PROTECTION

This is a production website with existing SEO work. SEO preservation is mandatory.

Do not change or remove existing routes unless explicitly authorized.

Preserve:

- Page URLs and slugs.
- Page titles and meta descriptions.
- Canonical URLs.
- Structured data and JSON-LD.
- Heading hierarchy where it supports the existing content strategy.
- Internal links and service-page hierarchy.
- Sitemap and robots behavior.
- Indexing directives.
- Relevant descriptive content.
- Language and locale behavior.
- Analytics and conversion tracking.

Do not remove paragraphs, FAQs, service explanations, or links merely to reduce page length.

Improve readability without weakening the meaning or relevance of existing SEO content.

If a content or structural change could affect search visibility, explain the reason and propose it rather than silently implementing a risky change.

Do not create keyword-stuffed copy or duplicate landing-page content.

Preserve existing multilingual behavior.

---

## 8. PHASE SIX — RESPONSIVE IMPLEMENTATION

Inspect and refine the design at representative viewport widths:

- Mobile: approximately 375–430 px.
- Tablet: approximately 768–1024 px.
- Desktop: approximately 1280–1440 px.
- Wide desktop: approximately 1600 px and above.

Check:

- Navigation and menus.
- Headline wrapping.
- Text and image proportions.
- Grid transitions.
- Section spacing.
- Buttons and forms.
- Image cropping.
- Overflow and horizontal scrolling.
- Interactive elements and touch targets.
- Footer and conversion sections.

Do not simply shrink the desktop layout.

Create intentional mobile compositions. A split hero, large screenshot, or complex diagram may need a different arrangement on mobile.

---

## 9. PHASE SEVEN — IMPLEMENTATION STRATEGY

Work incrementally and avoid unnecessary scope expansion.

### Step 1: Establish a baseline

Record the current sections, routes, components, functionality, and visual weaknesses.

### Step 2: Define the direction

Choose the specific design principles to borrow from AltCreative and how they fit ByteForce.

Identify which existing components and tokens should be preserved.

### Step 3: Implement the homepage

Improve the homepage first, including its visual hierarchy, imagery, service presentation, proof, and conversion paths.

Do not redesign all service pages at once.

### Step 4: Inspect the actual rendering

Run the application and inspect the updated homepage at desktop and mobile sizes.

Capture screenshots using available tools if possible.

### Step 5: Iterate

Correct the most significant issues revealed by the screenshots.

Prioritize composition, typography, visual rhythm, product imagery, and conversion clarity before minor decorative details.

### Step 6: Verify

Test important links, forms, audit behavior, responsive navigation, and other affected functionality.

Run the existing relevant lint, type-check, build, and test commands when available.

### Step 7: Extend selectively

Only after the homepage is coherent should shared design improvements be applied to other routes, and only where the changes fit their purpose.

Do not refactor unrelated application features.

---

## 10. NON-NEGOTIABLE CONTENT PRESERVATION RULE

Before removing or substantially rewriting any existing section, ask:

1. Does it contain useful business information?
2. Does it contribute to SEO or internal linking?
3. Does it establish credibility?
4. Does it support a conversion path?
5. Is it referenced elsewhere in the application?

If the answer to any of these is yes, preserve its value.

When a section has weak presentation but valuable content, redesign the presentation rather than deleting the section.

Do not silently remove sections. If a section appears genuinely redundant, document the evidence and propose its removal for review.

Do not replace substantive content with generic marketing copy.

Do not claim to have tested or visually inspected something unless you actually did so.

---

## 11. DEFINITION OF DONE

The work is complete only when:

- The website retains ByteForce's recognizable brand identity.
- The visual result is more sophisticated and coherent.
- The influence of AltCreative is visible in design quality, not in copied branding.
- Valuable existing sections and content are preserved.
- Service pages and internal links remain intact.
- The free audit and contact flows continue to work.
- The layout works across desktop, tablet, and mobile.
- Accessibility and performance have not been needlessly compromised.
- SEO metadata, routes, structured data, and indexing behavior remain intact.
- The rendered interface has been inspected and obvious visual problems corrected.

At completion, provide a concise report containing:

1. The main design improvements.
2. The sections preserved and improved.
3. The files changed.
4. The functional and SEO checks performed.
5. Any tests that could not be run.
6. Any proposed removals or structural changes awaiting approval.

The desired outcome is a more distinctive, polished, trustworthy, and conversion-focused ByteForce website that builds on the existing work rather than replacing it.