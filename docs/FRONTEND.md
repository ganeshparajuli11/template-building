# FRONTEND.md

## OPEDS Frontend Engineering Standard

This document defines frontend coding standards for the OPEDS project.

The frontend must remain:

- Fast
- Mobile responsive
- Accessible
- SEO friendly
- Reusable
- Maintainable
- Lightweight
- Easy to evolve

---

## 1. Frontend Mindset

Do not write one-off page code when reusable patterns are possible.

Before creating components, check:

- Can this be reused?
- Can content come from data/config?
- Can colors come from global tokens?
- Is this mobile friendly?
- Is this SEO friendly?
- Is this easy to maintain?

If not, refactor before expanding.

---

## 2. Primary Frontend Goals

The frontend should support:

1. Public website experience
2. Dashboard UI experience
3. Future super-admin expansion
4. Centralized content management
5. Global theme control
6. Fast performance and clean UX
7. Safe backend integration points

---

## 3. Expected Project Structure

Use and preserve this structure:

```txt
app/
components/
  layout/
  sections/
  dashboard/
  ui/
config/
data/
lib/
types/
```

Guidance:

- app/: route pages/layouts only
- components/sections/: page sections
- components/ui/: primitives
- components/dashboard/: dashboard-specific UI
- config/: site/theme/settings
- data/: content collections
- lib/: helpers/utilities
- types/: shared TypeScript models

---

## 4. Page Composition Rule

Pages should compose section components, not hold dense UI logic.

Preferred:

- page file imports sections
- page file arranges sections
- section file holds local presentation logic

Avoid large pages with repeated markup and repeated style classes.

---

## 5. Component Rules

Each component should:

- Have one clear purpose
- Use explicit props/types when reused
- Avoid hard-coded business content where possible
- Use semantic HTML
- Preserve responsive behavior
- Keep implementation readable

When behavior is interactive, keep local state minimal and predictable.

---

## 6. UI Primitive Rule

Reuse primitives instead of duplicating utility class sets.

Common primitives:

- Button
- Card
- Badge
- Input
- Textarea
- SectionHeading

Do not create many incompatible variants in random files.

---

## 7. Content Source Rule

Business content should live in:

- config/
- data/

Components should map/render this content rather than duplicating literal strings.

Benefits:

- Easier content updates
- Better consistency across pages
- Cleaner localization/client customization path

---

## 8. Styling and Theme Tokens

Use CSS variables in app/globals.css for design tokens.

Rules:

- Avoid hard-coding brand colors repeatedly
- Prefer token-based classes (for example, bg-[var(--primary)])
- Keep contrast strong for readability
- Keep typography clear for ages 20-80+

---

## 9. Responsive and Accessibility Rules

Build mobile-first.

Minimum expectations:

- No horizontal scroll at mobile widths
- Clear touch targets (44px min height where applicable)
- Readable body text (16px minimum)
- Keyboard-accessible interactive controls
- Clear headings and landmarks

---

## 10. Performance Rules

Keep frontend lightweight:

- Use server components by default
- Add "use client" only when required
- Keep animation usage purposeful
- Avoid large third-party scripts
- Optimize images and prefer modern formats
- Avoid unused UI libraries

---

## 11. SEO Implementation Rules

Public pages should include:

- One H1
- Structured H2/H3 hierarchy
- Metadata (title/description/canonical)
- Internal links where natural
- Descriptive copy aligned to Melbourne service intent

Use centralized metadata helpers where possible.

---

## 12. Forms and Frontend Security

Frontend validation improves UX, but security is server-side.

Do:

- Validate fields on client for user feedback
- Keep form payload minimal
- Use safe defaults and clear error states

Do not:

- Trust client-only validation
- Expose secrets in client code
- Assume hidden inputs are trusted

---

## 13. Code Quality Rules

Before merging frontend work:

1. Run npm run lint
2. Run npm run build
3. Verify key pages on mobile and desktop

Keep refactors incremental and avoid unrelated formatting churn.

---

## 14. Future-Proofing Rule

Frontend code should support:

- Dashboard expansion
- Connector UI growth
- API-driven content replacement
- Additional service/location pages

Build with reuse and clarity first.
