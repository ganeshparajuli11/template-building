Create this file in your project root:

```txt
FRONTEND.md
```

Paste this inside:

````md
# FRONTEND.md

## OPEDS Frontend Engineering Standard

This document defines how frontend code must be written for the OPEDS platform.

OPEDS is not just a normal website project. It is planned as a professional, lightweight, secure, SEO-ready, mobile-first business admin and client website system.

Every frontend file must be written with these goals:

- Fast loading
- Mobile responsive
- Clean design
- Reusable components
- SEO optimized
- Easy to maintain
- Easy to update for new clients
- Lightweight code
- Accessible UI
- Secure frontend rendering
- Scalable folder structure

The goal is to build a system that looks premium, works smoothly on phone/laptop/tablet, and can be reused for many service businesses.

---

# 1. Frontend Mindset

Do not write random one-time code.

Every section should be built like it may be reused for another client later.

Before creating any component, ask:

- Can this be reused?
- Can the text come from a data/config file?
- Can colors come from global CSS variables?
- Is this mobile friendly?
- Is this SEO friendly?
- Is this lightweight?
- Is this easy to edit later?
- Is this component doing too many things?
- Can this work for another business with small changes?

If the answer is no, improve the structure before continuing.

---

# 2. Main Frontend Goals

The frontend must support:

1. Public client website
2. Admin dashboard
3. Super admin dashboard later
4. Reusable components
5. Centralized content
6. Global theme control
7. SEO from code level
8. Responsive design
9. Fast performance
10. Clean animations
11. Easy future backend integration

---

# 3. Recommended Folder Structure

Use this structure:

```txt
app/
  page.tsx
  layout.tsx
  globals.css

  services/
    page.tsx

  locations/
    page.tsx

  about/
    page.tsx

  contact/
    page.tsx

  dashboard/
    page.tsx

components/
  layout/
    Navbar.tsx
    Footer.tsx
    MobileNav.tsx

  sections/
    Hero.tsx
    TrustBar.tsx
    ServicesGrid.tsx
    CallbackForm.tsx
    QuoteEstimator.tsx
    Reviews.tsx
    Locations.tsx
    FAQ.tsx
    CTA.tsx

  dashboard/
    DashboardOverview.tsx
    SEOScoreCard.tsx
    AnalyticsCards.tsx
    LeadsTable.tsx
    ConnectorStatus.tsx

  ui/
    Button.tsx
    Card.tsx
    Badge.tsx
    Input.tsx
    Textarea.tsx
    SectionHeading.tsx

config/
  site.ts
  theme.ts
  navigation.ts

data/
  services.ts
  locations.ts
  reviews.ts
  faqs.ts

lib/
  utils.ts
  seo.ts
  format.ts

types/
  index.ts
````

Rules:

* `app/` contains routes and pages.
* `components/sections/` contains website sections.
* `components/ui/` contains small reusable UI components.
* `components/dashboard/` contains admin dashboard components.
* `config/` stores global settings.
* `data/` stores reusable content.
* `lib/` stores helper functions.
* `types/` stores TypeScript types.

---

# 4. Page Rule

Pages should stay clean.

Bad example:

```tsx
export default function HomePage() {
  return (
    <main>
      <section>
        <h1>...</h1>
        <p>...</p>
        <button>...</button>
      </section>
      <section>
        ...
      </section>
    </main>
  );
}
```

Good example:

```tsx
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Reviews } from "@/components/sections/Reviews";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <Reviews />
      <CTA />
    </main>
  );
}
```

A page should only arrange sections.
It should not contain too much design logic.

---

# 5. Component Rules

Each component must:

* have one clear purpose
* be easy to read
* accept props if reusable
* avoid repeated code
* avoid hard-coded content where possible
* use TypeScript types
* be mobile responsive
* use semantic HTML

Example:

```tsx
type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-[var(--muted-foreground)]">
          {description}
        </p>
      )}
    </div>
  );
}
```

---

# 6. Reusable UI Components

Create small UI components instead of repeating Tailwind classes everywhere.

Recommended UI components:

```txt
Button.tsx
Card.tsx
Badge.tsx
Input.tsx
Textarea.tsx
SectionHeading.tsx
Container.tsx
```

Example `Button.tsx`:

```tsx
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]",
    secondary: "bg-[var(--secondary)] text-white hover:opacity-90",
    outline:
      "border border-[var(--border)] bg-transparent text-[var(--foreground)] hover:bg-[var(--muted)]",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
```

Do not create 20 different button styles manually in different files.

---

# 7. Content Management Rule

Business content should not be hard-coded inside components.

Put content in:

```txt
data/
config/
```

Example `config/site.ts`:

```ts
export const siteConfig = {
  name: "Melbourne PDS",
  title: "Melbourne Plumbing and Drainage Solutions",
  description:
    "Professional plumbing, drainage, and emergency plumbing services across Melbourne.",
  phone: "1300 000 000",
  email: "info@example.com",
  whatsapp: "61400000000",
  address: "Melbourne, VIC",
};
```

Example `data/services.ts`:

```ts
export const services = [
  {
    title: "Emergency Plumbing",
    description:
      "Fast plumbing support for urgent leaks, burst pipes, blocked drains, and emergency repairs.",
    icon: "Wrench",
    href: "/services/emergency-plumbing",
  },
  {
    title: "Blocked Drains",
    description:
      "Drain inspection, cleaning, and repair support for homes and businesses.",
    icon: "Droplets",
    href: "/services/blocked-drains",
  },
];
```

Then components should map over data:

```tsx
import { services } from "@/data/services";

export function ServicesGrid() {
  return (
    <section>
      {services.map((service) => (
        <article key={service.title}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </article>
      ))}
    </section>
  );
}
```

This makes the website easier to clone for another client.

---

# 8. Global CSS and Theme Rule

Use `app/globals.css` for design tokens.

Example:

```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #111827;

  --primary: #2563eb;
  --primary-dark: #1d4ed8;
  --secondary: #0f172a;
  --accent: #f97316;

  --muted: #f3f4f6;
  --muted-foreground: #6b7280;
  --border: #e5e7eb;

  --radius: 1rem;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--background);
  color: var(--foreground);
}
```

Use variables in components:

```tsx
<div className="bg-[var(--primary)] text-white">
```

Do not hard-code brand colors everywhere.

Bad:

```tsx
<div className="bg-blue-600">
```

Better:

```tsx
<div className="bg-[var(--primary)]">
```

This allows quick theme changes for each client.

---

# 9. Responsive Design Rules

Every page must be mobile-first.

Start with mobile layout, then improve for larger screens.

Example:

```tsx
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
```

Rules:

* Use readable text size on mobile.
* Use enough spacing.
* Avoid horizontal scrolling.
* Test at 360px width.
* Buttons should be easy to tap.
* Forms should be simple on mobile.
* Navbar must work on phone.
* Phone and WhatsApp CTA should be easy to access.

Recommended tap target:

```txt
Minimum 44px height
```

Example:

```tsx
<a className="inline-flex min-h-11 items-center justify-center rounded-xl px-5">
  Call Now
</a>
```

---

# 10. Performance Rules

The frontend must be lightweight.

Rules:

* Do not install large packages unless needed.
* Use Next.js Image component for images.
* Compress images before adding them.
* Prefer `.webp` where possible.
* Lazy load non-critical images.
* Avoid heavy animation libraries except light Framer Motion use.
* Keep components small.
* Avoid unnecessary client components.
* Use server components by default.
* Use `"use client"` only when required.
* Avoid large background videos.
* Avoid too many third-party scripts.
* Avoid autoplay media.
* Avoid unused CSS/classes.

Good:

```tsx
import Image from "next/image";

<Image
  src="/images/plumbing-van.webp"
  alt="Melbourne plumbing service van"
  width={1200}
  height={800}
  priority
/>
```

Use `priority` only for important above-the-fold images.

---

# 11. Client Component Rule

In Next.js App Router, components are server components by default.

Only add:

```tsx
"use client";
```

when using:

* useState
* useEffect
* browser APIs
* form interactivity
* Framer Motion
* click handlers
* dynamic UI state

Do not mark everything as client component.

Bad:

```tsx
"use client";

export function StaticTextSection() {
  return <section>...</section>;
}
```

Better:

```tsx
export function StaticTextSection() {
  return <section>...</section>;
}
```

This improves performance.

---

# 12. Animation Rules

Animations should feel premium, not heavy.

Use animations for:

* fade-in
* slight slide-up
* hover effects
* smooth section reveal
* dashboard cards

Do not overuse:

* spinning effects
* too many parallax layers
* heavy 3D animations
* motion on every element
* animations that delay content

Animation should support trust and clarity.

Example:

```tsx
"use client";

import { motion } from "framer-motion";

export function FadeInCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
```

---

# 13. SEO From Code Level

SEO must be built into the frontend from the start.

Every page should have:

* title
* meta description
* canonical URL
* Open Graph data
* proper headings
* clean URLs
* alt text
* internal links
* schema where needed
* fast loading
* mobile responsive layout

---

## 13.1 Metadata

Use `lib/seo.ts`.

Example:

```ts
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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

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
```

Use on pages:

```tsx
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Emergency Plumber Melbourne | Melbourne PDS",
  description:
    "Fast emergency plumbing support across Melbourne for leaks, blocked drains, burst pipes, and urgent plumbing repairs.",
  path: "/services/emergency-plumbing",
});
```

---

## 13.2 Heading Structure

Each page must have only one main `h1`.

Correct structure:

```txt
h1 - Main page topic
h2 - Major sections
h3 - Cards/subsections
```

Bad:

```tsx
<h1>Services</h1>
<h1>Emergency Plumbing</h1>
```

Good:

```tsx
<h1>Emergency Plumbing Services in Melbourne</h1>
<h2>Common Emergency Plumbing Problems</h2>
<h3>Burst Pipes</h3>
```

---

## 13.3 Image SEO

Every image must have useful alt text.

Bad:

```tsx
<Image src="/truck.webp" alt="image" />
```

Good:

```tsx
<Image
  src="/truck.webp"
  alt="Melbourne PDS plumbing service vehicle parked outside a home"
/>
```

Rules:

* Describe the image clearly.
* Do not keyword stuff.
* Do not leave alt empty unless decorative.
* Use meaningful file names.

Good file name:

```txt
emergency-plumber-melbourne.webp
```

Bad file name:

```txt
IMG_4567.png
```

---

## 13.4 Internal Linking

Pages should link to related pages.

Example:

```tsx
<Link href="/services/blocked-drains">Blocked Drain Services</Link>
<Link href="/locations">Areas We Service</Link>
<Link href="/contact">Request a Callback</Link>
```

Internal links help users and SEO.

---

## 13.5 Local SEO

For service businesses, local SEO is very important.

Include:

* service area
* city/suburb names
* phone number
* address/service area
* Google Maps embed
* reviews
* FAQs
* LocalBusiness schema
* service pages
* location pages

Example pages:

```txt
/services/emergency-plumbing
/services/blocked-drains
/locations/melbourne-cbd
/locations/richmond
/locations/southbank
```

---

# 14. Structured Data / Schema

Add schema for:

* LocalBusiness
* Service
* FAQPage
* BreadcrumbList
* Review if valid and genuine

Example helper:

```ts
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: "Melbourne PDS",
    areaServed: "Melbourne, VIC",
    telephone: "1300 000 000",
    url: "https://example.com",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
```

Important:

* Only use real business data.
* Do not create fake reviews.
* Do not add misleading schema.
* Keep schema updated from config.

---

# 15. Accessibility Rules

A good website must be usable by everyone.

Rules:

* Use semantic HTML.
* Buttons must be buttons.
* Links must be links.
* Inputs must have labels.
* Use readable contrast.
* Do not rely only on color.
* Add focus styles.
* Add alt text.
* Avoid tiny text.
* Avoid click-only hidden actions.

Good form field:

```tsx
<label htmlFor="phone">Phone number</label>
<input id="phone" name="phone" type="tel" />
```

Bad:

```tsx
<input placeholder="Phone number" />
```

Placeholder is not a proper label.

---

# 16. Forms Frontend Rules

Forms must be simple and safe.

Frontend rules:

* Use clear labels.
* Show validation messages.
* Use correct input types.
* Keep fields minimal.
* Do not ask unnecessary details.
* Add loading state.
* Add success/error message.
* Do not expose hidden admin fields.
* Do not trust frontend validation only.

Example fields:

```txt
Name
Phone
Email
Service required
Suburb
Message
Preferred contact method
```

Use Zod schema shared with backend later.

---

# 17. Dashboard UI Rules

Dashboard must be clean and useful.

Dashboard should show:

* SEO score
* website visits
* leads
* WhatsApp clicks
* call clicks
* form submissions
* top pages
* connector status
* recent enquiries
* improvement suggestions

Do not overload dashboard with too much data.

Use cards:

```txt
SEO Score
Total Leads
Website Visitors
WhatsApp Clicks
```

Use tables for:

```txt
Recent enquiries
Recent form submissions
SEO issues
```

---

# 18. Design Balance

The website should be:

* modern but not confusing
* premium but not heavy
* animated but not slow
* colorful but not messy
* simple but not boring

For service businesses, trust is more important than fancy design.

Focus on:

* clear headline
* phone CTA
* WhatsApp CTA
* proof/reviews
* services
* locations
* fast contact form
* mobile layout

---

# 19. Navigation Rules

Navbar should include:

```txt
Home
Services
Locations
About
Contact
Call Now
```

Mobile navbar should be:

* simple
* fast
* easy to tap
* not overcrowded

CTA should be visible:

```txt
Call Now
Request Callback
WhatsApp
```

---

# 20. Code Style Rules

Use:

* TypeScript
* named exports
* clear prop types
* simple functions
* readable names
* small components
* consistent formatting

Avoid:

* huge files
* unclear variable names
* copied code blocks
* magic values everywhere
* inline repeated styles
* random package imports
* unnecessary state

Good:

```tsx
export function ServicesGrid() {}
```

Avoid default exports for components unless needed.

---

# 21. Naming Rules

Use clear names.

Good:

```txt
ServicesGrid.tsx
CallbackForm.tsx
SEOScoreCard.tsx
ConnectorStatus.tsx
```

Bad:

```txt
Box1.tsx
NewComp.tsx
Section2.tsx
Test.tsx
```

Variables should explain purpose.

Good:

```ts
const emergencyServices = services.filter((service) => service.isEmergency);
```

Bad:

```ts
const data2 = data.filter((x) => x.ok);
```

---

# 22. Data Reuse Rule

If content appears more than once, move it to config/data.

Examples:

* phone number
* email
* service list
* suburbs
* business name
* CTA text
* social links
* SEO keywords

Do not repeat phone number in 10 files.

Use:

```ts
siteConfig.phone
```

This avoids future mistakes.

---

# 23. Environment Variables

Public frontend-safe variables:

```env
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_UMAMI_WEBSITE_ID=
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=
```

Never expose private keys using `NEXT_PUBLIC_`.

Bad:

```env
NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_OPENAI_API_KEY=
```

Private keys must stay server side only.

---

# 24. Third-Party Script Rules

Third-party scripts can slow the website.

Before adding any script, ask:

* Is it needed?
* Does it slow loading?
* Does it affect privacy?
* Can it load after main content?
* Can we replace it with lighter option?

Examples:

* analytics script
* chat widget
* tracking pixel
* map iframe
* review widget

Use lazy loading where possible.

---

# 25. Image and Asset Rules

Use:

```txt
public/images/
```

Suggested structure:

```txt
public/
  images/
    hero/
    services/
    reviews/
    logos/
    icons/
```

Rules:

* compress images
* use `.webp`
* use descriptive file names
* avoid huge image files
* use `next/image`
* set width and height
* use priority only for hero image

---

# 26. SEO Checklist Before Page Is Done

Every page must pass this checklist:

```txt
[ ] One H1 only
[ ] SEO title added
[ ] Meta description added
[ ] Canonical URL added
[ ] Open Graph data added
[ ] Mobile responsive
[ ] Internal links added
[ ] Images have alt text
[ ] Page loads fast
[ ] CTA visible
[ ] Content matches search intent
[ ] Schema added if needed
[ ] No fake or misleading content
```

---

# 27. Performance Checklist Before Page Is Done

```txt
[ ] No unnecessary client components
[ ] No huge images
[ ] No unused packages
[ ] No layout shift
[ ] Buttons respond fast
[ ] Images optimized
[ ] Font loading is clean
[ ] Mobile spacing checked
[ ] Lighthouse score checked
[ ] No console errors
```

---

# 28. Frontend Security Checklist

```txt
[ ] No raw HTML rendering unless sanitized
[ ] No exposed API keys
[ ] No sensitive data in frontend
[ ] Form input has validation
[ ] Links are safe
[ ] External links use rel="noopener noreferrer"
[ ] No hidden admin logic trusted on frontend only
[ ] No private data stored in localStorage
```

External links:

```tsx
<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Visit
</a>
```

---

# 29. AI Coding Assistant Rules

When using AI to generate frontend code, the AI must follow this file.

The AI must:

* use existing folder structure
* create reusable components
* use data/config files
* use global theme variables
* keep pages clean
* avoid unnecessary packages
* optimize for mobile
* add SEO metadata
* use semantic HTML
* avoid exposing secrets
* avoid unsafe HTML
* avoid heavy animations
* explain major architectural changes

The AI must not:

* put all code in one page
* hard-code repeated content
* create random folder structure
* install large UI libraries without reason
* create unresponsive layouts
* ignore SEO
* ignore accessibility
* use fake reviews as real reviews
* expose private keys
* make every component `"use client"`

---

# 30. MVP Frontend Standard

For the first MVP, frontend must include:

```txt
[ ] Landing page
[ ] Services section
[ ] Location section
[ ] Contact/callback form UI
[ ] WhatsApp CTA
[ ] Call CTA
[ ] Reviews/testimonials section
[ ] FAQ section
[ ] Admin dashboard mockup
[ ] SEO score card
[ ] Analytics card
[ ] Leads table
[ ] Connector status
[ ] Mobile navigation
[ ] SEO metadata
[ ] Global theme system
```

Do not add complex features before these are solid.

---

# 31. Final Rule

If there is a choice between:

```txt
fancy but slow
```

and

```txt
simple but fast
```

choose fast.

If there is a choice between:

```txt
quick hard-coded section
```

and

```txt
reusable component with clean data
```

choose reusable.

OPEDS frontend must feel like a professional product system, not just one random website.

````

Also create a shorter AI instruction file:

```txt
FRONTEND_CODING_PROMPT.md
````

Paste this:

```md
# FRONTEND_CODING_PROMPT.md

Before writing frontend code, read and follow FRONTEND.md.

Rules:
- Use Next.js App Router, TypeScript, and Tailwind CSS.
- Keep pages clean and compose them from reusable components.
- Store repeated content in config/ or data/.
- Use global CSS variables from app/globals.css for colors and theme.
- Use server components by default.
- Use "use client" only when interactivity is needed.
- Use semantic HTML.
- Make every layout mobile-first and responsive.
- Optimize images with next/image.
- Add SEO metadata for every page.
- Use proper heading structure with one H1 per page.
- Avoid heavy packages and unnecessary animations.
- Do not expose secrets or private API keys.
- Do not use dangerouslySetInnerHTML unless sanitized and clearly required.
- Keep the design premium, fast, and easy to reuse for future clients.
```

This will guide vibe coding properly before the AI starts making messy files.
