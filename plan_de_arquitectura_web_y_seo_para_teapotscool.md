# Project Plan: TeapotsCool.com (Automated Niche Authority & Curated Gallery)

## 1. Project Overview & Objective
* **Domain:** `teapotscool.com`
* **Target Market & Language:** United States / UK (English - `en-US`).
* **Business Model:** Hybrid Affiliate + Display Ads Niche Site. Combines a high-converting curated product gallery ("Cool & Unique Teapots") with an SEO-driven informational blog ("Tea Brewing, Care & Culture") designed for programmatic/automated content scaling and low maintenance.
* **Monetization Strategy:**
  * Amazon Associates (`tag=teapotscool-20` placeholder) & Etsy/Specialized Tea Store affiliate links.
  * Display Ad network ready slots (AdSense initially -> Journey by Mediavine at 1k–10k sessions).
  * Amazon Compliance: Mandatory FTC affiliate disclosure on all pages + dynamic price/availability disclaimer (no hardcoded static prices that violate Amazon TOS unless fetched via PA-API).

---

## 2. Recommended Tech Stack (Zero/Low Cost & High Speed)
* **Framework:** **Astro** (Static Site Generation - SSG) or **Next.js (App Router - Static Export)** with **Tailwind CSS**. *(Astro is preferred for 100/100 Core Web Vitals, native Markdown/MDX content collections, and zero-JS default footprint).*
* **Content Storage:** Local Markdown/MDX files (`src/content/blog/*.mdx` & `src/content/teapots/*.json` or `.mdx`) so an AI agent or GitHub Action can easily commit new posts automatically.
* **Hosting:** Cloudflare Pages (connects directly to `teapotscool.com` DNS already on Cloudflare, $0/month hosting, global CDN).
* **Search & Filtering:** Lightweight client-side filtering (Alpine.js, Preact, or vanilla JS) for the Curated Gallery by Material, Capacity, Style, and Price Tier.

---

## 3. Site Architecture & URL Structure
Clean, flat, SEO-friendly hierarchy:

```text
/                                   -> Homepage (Hero + Featured Cool Teapots + Latest Guides + Interactive Tea Timer Widget)
/gallery/                           -> Curated Directory ("The Coolest & Most Unique Teapots") with faceted filters
/gallery/[slug]/                    -> Individual Curated Teapot Review / Showcase Page (Schema: Product/Review)
/guides/                            -> Blog Hub categorized by Topic Clusters
/guides/[cluster]/[slug]/           -> Informational & Buying Guide Articles (Schema: Article + FAQPage)
/tools/tea-steeping-timer/          -> Interactive Micro-Tool (Link-bait & high dwell-time utility)
/about/                             -> Editorial Standards, Author Persona ("Clara Vance - Tea Enthusiast & Product Curator")
/affiliate-disclosure/              -> Legal FTC & Amazon Associates Disclosure
/privacy-policy/                    -> Standard GDPR/CCPA Privacy Policy
```

---

## 4. Initial SEO Topic Clusters (Silo Architecture)

### Cluster 1: Curated & Novelty Teapots (Commercial / Transactional Intent)
*Target Audience: Gift buyers, design lovers, collectors.*
* **Pillar Page:** `/guides/buying-guides/coolest-unique-teapots/` — *"25 Coolest & Most Unique Teapots That Actually Pour Well"*
* **Spoke 1:** `/guides/buying-guides/best-glass-flowering-teapots/` — *"Best Borosilicate Glass Teapots for Blooming Tea (Heat-Resistant Picks)"*
* **Spoke 2:** `/guides/buying-guides/japanese-kyusu-teapots-guide/` — *"Authentic Japanese Kyusu Teapots: Side-Handle vs. Back-Handle Picks"*
* **Spoke 3:** `/guides/buying-guides/quirky-novelty-teapots-gifts/` — *"15 Quirky & Whimsical Novelty Teapots for Tea Lovers & Collectors"*
* **Spoke 4:** `/guides/buying-guides/best-cast-iron-tetsubin-teapots/` — *"Best Japanese Cast Iron Teapots (Tetsubin) That Won't Rust"*

### Cluster 2: Care, Cleaning & Troubleshooting (Informational / Low KD)
*Target Audience: Existing teapot owners searching for immediate solutions (high CTR, easy to rank).*
* **Pillar Page:** `/guides/care-maintenance/complete-teapot-care-guide/` — *"How to Clean, Descale, and Maintain Every Type of Teapot"*
* **Spoke 1:** `/guides/care-maintenance/how-to-season-cast-iron-teapot/` — *"How to Season a Cast Iron Teapot (And Prevent Inside Rust)"*
* **Spoke 2:** `/guides/care-maintenance/remove-tea-stains-glass-ceramic/` — *"How to Remove Stubborn Tea Stains from Glass & Porcelain Teapots Naturally"*
* **Spoke 3:** `/guides/care-maintenance/why-does-my-teapot-drip/` — *"Why Does My Teapot Drip When Pouring? (The Physics & How to Fix It)"*
* **Spoke 4:** `/guides/care-maintenance/can-you-put-glass-teapot-on-stove/` — *"Can You Put a Glass Teapot on an Electric or Gas Stove Safely?"*

### Cluster 3: Materials & Brewing Comparisons (Mid-Funnel / High AI Overview Potential)
*Target Audience: Tea enthusiasts comparing gear before buying.*
* **Pillar Page:** `/guides/materials/teapot-materials-comparison/` — *"Cast Iron vs. Glass vs. Clay vs. Ceramic: Which Teapot Material Is Best?"*
* **Spoke 1:** `/guides/materials/kyusu-vs-gaiwan/` — *"Kyusu vs. Gaiwan: Which Traditional Brewing Vessel Should You Choose?"*
* **Spoke 2:** `/guides/materials/yixing-clay-vs-porcelain/` — *"Yixing Zisha Clay vs. Porcelain Teapots: How Material Changes Tea Flavor"*
* **Spoke 3:** `/guides/materials/enamel-lined-vs-unlined-cast-iron/` — *"Enamel-Lined Cast Iron Teapot vs. Raw Tetsubin: Critical Differences"*

---

## 5. UI/UX & Visual Design Guidelines
* **Aesthetic:** "Modern Japandi & Editorial Craft" — Warm, tactile, clean, trustworthy (avoids cheap spammy affiliate look).
* **Color Palette:**
  * Background Primary: `#FAF8F5` (Warm Rice Paper / Off-White)
  * Background Secondary / Cards: `#F2EFE9` (Stone / Sand)
  * Text Primary: `#1F2421` (Charcoal / Matcha Dark)
  * Accent Primary: `#2D5A27` (Deep Matcha Green — CTAs, badges)
  * Accent Secondary: `#C86D51` (Terracotta Clay — highlights, hover states)
* **Typography:**
  * Headings: *Fraunces* or *Playfair Display* (Editorial serif for warmth and craft).
  * Body & UI: *Plus Jakarta Sans* or *Inter* (Clean readability).
* **Conversion Components (Reusable UI Blocks):**
  1. **Quick Verdict / Top Pick Box:** Placed above the fold on buying guides (Product image, "Best For" badge, 3 bullet pros, "Check Current Price on Amazon" button).
  2. **Pour & Heat Rating Badge:** Custom visual rating on product cards (`Pour Precision: 9/10`, `Heat Retention: 8/10`, `Material: Borosilicate Glass`).
  3. **Interactive Tea Timer Mini-Widget:** Embedded in sidebar/homepage allowing users to pick tea type (Green 80°C/2m, Oolong 90°C/3m, Black 100°C/4m) with audio chime.

---

## 6. Technical SEO & Automation Readiness
1. **Frontmatter Schema (MDX):**
   Every article must include standardized frontmatter so automated scripts/LLMs can generate valid posts without breaking builds:
   ```yaml
   title: ""
   description: ""
   pubDate: "2026-11-17"
   updatedDate: "2026-11-17"
   cluster: "care-maintenance" # buying-guides | care-maintenance | materials
   featuredImage: "/images/guides/placeholder.webp"
   featuredImageAlt: ""
   isPillar: false
   affiliateProducts:
     - name: ""
       asin: ""
       affiliateUrl: ""
       badge: "Best Overall"
       material: "Cast Iron"
       capacity: "800ml"
       pourScore: 9
   faqs:
     - question: ""
       answer: ""
   ```
2. **Structured Data (JSON-LD):**
   * Auto-inject `Article` + `BreadcrumbList` schema on all `/guides/` pages.
   * Auto-inject `FAQPage` schema whenever the `faqs` array is populated in frontmatter.
   * Auto-inject `WebApplication` schema on `/tools/tea-steeping-timer/`.
3. **Internal Linking Automation:**
   * Automatically display "Related Guides in This Cluster" at the bottom of each post based on the `cluster` frontmatter tag.
   * Automatically link to the cluster's `isPillar: true` page inside a callout box.
4. **Sitemaps & Robots:**
   * Auto-generated `sitemap-index.xml` and `robots.txt` allowing all search engines and AI crawlers (`GPTBot`, `PerplexityBot`, `Google-Extended`) to maximize citations in AI search answers.

---

## 7. Step-by-Step Build Instructions for Agent (Antigravity)
1. **Initialize Project:** Scaffold an Astro project with Tailwind CSS, MDX integration, and `@astrojs/sitemap`.
2. **Build Core Layouts & Design System:** Implement `BaseLayout.astro`, `GuideLayout.astro`, and `GalleryLayout.astro` using the Japandi color palette and typography.
3. **Create Content Collections:** Set up Zod schemas in `src/content/config.ts` for `guides` and `teapots` (curated items).
4. **Develop Key Components:**
   * `AffiliateCard.astro` (with `rel="nofollow sponsored noopener"`, custom Pour/Heat badges, and Amazon/Etsy CTA).
   * `FaqAccordion.astro` (renders visual accordion + JSON-LD `FAQPage` schema).
   * `TeaTimer.jsx` / `.astro` (interactive steeping timer tool).
   * `GalleryFilter.astro` (client-side filter by Material, Style, and Capacity).
5. **Seed Initial Content:**
   * Populate `/gallery/` with 8–12 curated placeholder/real teapot entries across Glass, Cast Iron, Kyusu, and Novelty categories.
   * Generate the 3 Pillar Articles + 3 initial Spoke Articles (1 per cluster) using comprehensive, well-structured MDX with FAQs and internal links.
6. **Verify Build & SEO Audit:** Ensure zero TypeScript/build errors, valid JSON-LD schemas, responsive mobile layout, and proper affiliate disclosures in the footer and above product links.