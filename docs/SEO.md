# SEO.md

## OPEDS SEO Engineering Standard

This document defines how SEO must be implemented in the OPEDS platform.

The goal is:

- strong SEO foundation
- lightweight implementation
- free-first approach
- provider-agnostic architecture
- high Lighthouse score
- local SEO optimization
- technical SEO built into the codebase
- future-ready connector system

Version 1 focuses on:
- free SEO tools
- technical SEO
- content structure
- metadata
- performance
- local SEO
- internal SEO scoring

Premium SEO connectors will be added later.

---

# 1. SEO Philosophy

SEO is not only keywords.

SEO includes:

```txt
Technical SEO
Performance
Mobile UX
Accessibility
Content structure
Internal linking
Schema
Metadata
Image optimization
Local SEO
Page speed

2. SEO Goals

The website must:

load fast
be mobile-first
have strong Lighthouse score
have proper metadata
have proper heading structure
use clean URLs
support local SEO
support structured data
use optimized images
support internal linking
support future AI SEO tools
support future Google connector integration
3. SEO Architecture

Current architecture:

Website
  ↓
Technical SEO Layer
  ↓
Metadata + Schema + Performance
  ↓
SEO Dashboard
  ↓
Future Premium Connectors

Version 1 should work without paid SEO tools.

4. Free SEO Stack
Core Free Stack
Lighthouse

Used for:

performance
SEO score
accessibility
best practices
Google Search Console

Used for:

indexing
search performance
impressions
clicks
page visibility
robots.txt

Used for:

crawler control
sitemap.xml

Used for:

page indexing
schema.org JSON-LD

Used for:

local business schema
FAQ schema
service schema
Internal SEO Audit Engine

Custom lightweight scoring system.

Next.js Metadata API

Used for:

title
meta description
Open Graph
canonical URLs
5. Installations

Recommended packages:

npm install next-sitemap
npm install schema-dts
npm install reading-time

Optional later:

npm install @t3-oss/env-nextjs

Do NOT install heavy SEO libraries unless needed.

6. next-sitemap Setup

Create:

next-sitemap.config.js

Example:

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ["/dashboard/*", "/super-admin/*"],
};

Add package.json script:

{
  "scripts": {
    "postbuild": "next-sitemap"
  }
}

This auto-generates:

sitemap.xml
robots.txt
7. Metadata System

Create:

lib/seo.ts

Example:

import type { Metadata } from "next";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function createMetadata({
  title,
  description,
  path = "",
  image = "/og-image.jpg",
}: MetadataInput): Metadata {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}${path}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      images: [image],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

Every page must use metadata.

8. Local SEO Strategy

Melbourne PDS is a local plumbing service.

Local SEO is critical.

Important local SEO structure:

/services/emergency-plumbing
/services/blocked-drains
/locations/melbourne
/locations/richmond
/locations/southbank

Each page should contain:

suburb/city keywords
service keywords
CTA
map/location mention
FAQ
internal links
9. Heading Structure

Each page must have:

1 H1 only
Multiple H2
Optional H3

Correct example:

H1 → Emergency Plumbing Melbourne
H2 → Common Emergency Plumbing Problems
H2 → Why Choose Melbourne PDS
H3 → Burst Pipes
H3 → Blocked Drains
10. Image SEO

Rules:

use .webp
compress images
descriptive file names
alt text required
use next/image
lazy load below fold

Good:

emergency-plumber-melbourne.webp

Bad:

IMG_3432.png

Good alt text:

Melbourne PDS plumber repairing blocked drain in Melbourne
11. Internal Linking

Pages should link naturally.

Examples:

Service → Contact
Service → Location
FAQ → Service
Homepage → Emergency Service

This improves:

crawlability
SEO
UX
12. Technical SEO Rules

Must include:

HTTPS
Fast loading
Mobile responsive
Canonical URLs
robots.txt
sitemap.xml
Schema
Semantic HTML
Strong heading structure
Optimized images
Clean URLs
13. URL Structure

Good URLs:

/services/blocked-drains
/services/emergency-plumbing
/locations/richmond
/contact

Avoid:

/page?id=32
/service-page-v2

URLs should:

be readable
keyword relevant
lowercase
hyphen separated
14. Schema Implementation

Use JSON-LD schema.

Recommended schemas:

LocalBusiness
Plumber
Service
FAQPage
BreadcrumbList
Review

Example LocalBusiness schema:

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Plumber",
      name: "Melbourne PDS",
      areaServed: "Melbourne",
      telephone: "0431234185",
    }),
  }}
/>
15. Lighthouse Target

Target scores:

Performance: 90+
SEO: 95+
Accessibility: 90+
Best Practices: 90+

Important:

fast mobile loading
optimized images
low JS bundle size
avoid layout shift
16. Performance SEO Rules

SEO is heavily affected by performance.

Rules:

avoid huge packages
avoid unnecessary client components
optimize images
lazy load below fold
minimize third-party scripts
reduce bundle size
avoid heavy animation
use server components by default
17. Mobile SEO

Google prioritizes mobile.

Mobile requirements:

Readable text
Fast load
No horizontal scroll
Clear CTA
Fast interaction
Responsive images

Mobile UX directly affects SEO.

18. Content SEO Rules

Content should:

answer user intent
use natural keywords
avoid keyword stuffing
include FAQs
include local references
use readable paragraphs
use bullet points
use internal links

Good:

Need emergency plumbing in Melbourne? Melbourne PDS provides fast plumbing support for blocked drains, burst pipes, leaks, and urgent repairs across Melbourne suburbs.

Bad:

Best plumber Melbourne plumber cheap plumbing Melbourne emergency plumber Melbourne best service Melbourne.
19. SEO Dashboard

Version 1 dashboard should show:

SEO score
Missing metadata
Missing alt text
Page speed score
Indexing checklist
Mobile readiness
Internal link count

This will be internally calculated first.

20. Free SEO Monitoring

Free tools to use:

Google Search Console
Google PageSpeed Insights
Lighthouse
Umami Analytics
Schema Validator
robots.txt validator

Premium integrations come later.

21. Future Premium Connectors

Later connectors:

Ahrefs
SEMrush
Google Analytics
Google Business Profile
Google Search Console API
Hotjar
Microsoft Clarity

These should remain optional.

22. AI SEO Features Later

Future AI SEO:

Meta description generation
SEO title suggestions
FAQ generation
Keyword suggestions
Internal linking suggestions
SEO health insights

AI should assist, not fully automate.

23. SEO Checklist Per Page
[ ] One H1
[ ] Metadata added
[ ] Meta description added
[ ] Canonical URL
[ ] Open Graph image
[ ] Internal links
[ ] Alt text
[ ] Mobile responsive
[ ] Fast loading
[ ] Schema added if needed
[ ] CTA visible
[ ] Service/location keywords
24. SEO MVP Scope

Version 1 SEO includes:

[ ] Technical SEO
[ ] Metadata system
[ ] Sitemap
[ ] robots.txt
[ ] Schema
[ ] Local SEO structure
[ ] SEO dashboard mock
[ ] Lighthouse optimization
[ ] Internal SEO scoring

No premium APIs yet.

25. Final SEO Rule

SEO should be built into the system architecture.

Not added later as a plugin.

Performance + UX + clean structure + local relevance + metadata together create strong SEO.


Now create another file:

```txt
PROJECTPLAN.md

Paste this inside:

# PROJECTPLAN.md

# OPEDS Development Roadmap

## Vision

Build OPEDS as a modern AI-powered business admin operating system for service businesses.

The system should:
- support websites
- support analytics
- support SEO
- support connectors
- support lead management
- support AI tools
- remain lightweight
- remain secure
- support future scaling

The project will be built subsystem by subsystem.

Do not build everything at once.

---

# Phase 0 — Foundation Setup

## Goal

Create strong architecture before feature development.

## Tasks

```txt
[ ] Setup Next.js App Router
[ ] Setup TypeScript
[ ] Setup Tailwind
[ ] Setup folder structure
[ ] Create FRONTEND.md
[ ] Create BACKEND.md
[ ] Create SECURITY.md
[ ] Create UI_UX.md
[ ] Create SEO.md
[ ] Create PROJECTPLAN.md
[ ] Setup global theme variables
[ ] Setup reusable UI system
[ ] Setup metadata system