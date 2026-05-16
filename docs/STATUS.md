# STATUS.md

## Current Phase
Phase 1 - Public Website MVP + DevOps automation baseline

## Project
OPEDS Melbourne PDS demo

## Completed Work
- Added GitHub Actions CI for lint and production build
- Added security workflow (Dependency Review, npm audit, CodeQL)
- Added issue triage workflow with auto-labeling and first-response checklist
- Added stale issue and PR cleanup workflow
- Added label sync workflow for consistent repo labels
- Added PR labeler based on changed paths
- Added project automation workflow to auto-add issues and PRs to GitHub Project
- Added uptime monitor workflow with auto open/close incident issue
- Added Dependabot weekly npm updates
- Added Dependabot auto-merge workflow for safe npm patch/minor updates
- Added issue templates and PR template
- Fixed FAQ build blocker by extending Card component props for onClick support
- Cleaned Navbar unused import warning
- Normalized docs/FLOW.md into production-ready AI workflow reference
- Normalized docs/FRONTEND.md into production-ready frontend standard
- Normalized docs/BACKEND.md into production-ready backend standard
- Aligned public copy to Melbourne PDS branding and service language
- Aligned data/locations and data/reviews to Melbourne-only geography consistency
- Verified all changes with successful lint and production build
- Renovated navbar to a client-side responsive header inspired by melbournepds.com.au
- Added top utility strip with call/email/emergency CTA for desktop
- Integrated logo image asset into public path for Next.js image rendering
- Added mobile menu and sticky bottom mobile actions (Call, WhatsApp, Callback)
- Added mobile bottom-safe padding to prevent content overlap with sticky CTA bar
- Re-validated navbar changes with successful lint and production build
- Fixed hero image delivery by copying real JPG asset to public/images for Next.js static serving
- Rebuilt homepage hero with stronger 80vh+ visual presence, emergency-first messaging, larger CTAs, trust pills, and quick stats
- Added premium hero visual treatment with subtle gradient atmosphere and branded image composition
- Slimmed top utility strip and navbar vertical spacing so hero content appears earlier above the fold
- Re-validated homepage updates with successful lint and production build
- Reworked homepage hero to MPDS-style full-width background image with dominant van/plumber visual
- Added left readability overlay, large branded headline, and strong emergency CTA hierarchy in hero
- Added right-side callback form overlay in hero with required fields and prominent green submit action
- Updated header top strip to blue contact bar style and increased logo size for stronger brand presence
- Re-validated hero/header redesign with successful lint and production build
- Replaced previous hero with a fresh modern asymmetric design (not MPDS layout copy), keeping a large dominant van/plumber visual
- Implemented 90vh full-screen hero direction with layered gradients, glow shapes, and subtle line pattern background
- Added updated brand-focused hero copy, dual CTA buttons, trust badges, and quick stats row
- Added floating service tags around hero image for depth and service emphasis
- Refined header spacing/cleanliness while preserving blue top contact bar, white navbar, and visible phone CTA
- Optimized hero image rendering with Next.js Image for performance and clean lint output
- Re-validated with successful lint and production build
- Implemented desktop first-screen fit for homepage hero using viewport-calculated layout under compact header
- Set desktop header sizing to approximately 110px total (34px top bar + 76px navbar)
- Updated hero to use calc(100vh - header height) behavior on desktop to avoid first-view overflow
- Removed hero stats row and tightened vertical spacing to keep only primary conversion content above the fold
- Reworked hero image treatment to wide landscape object-contain presentation with soft shadow and reduced boxing
- Re-validated viewport-fit hero changes with successful lint and production build
- Simplified hero information hierarchy to reduce cognitive load for general users
- Replaced multi-card hero clutter with a concise 3-point key-features bullet list
- Kept hero focused on product intro, short value statement, and clear dual CTA actions
- Refined image composition to a cleaner wide visual with softer glow/shadow and less decorative clutter
- Re-validated hero simplification with successful lint and production build
- Updated top bar 'Emergency Plumbing 24/7' button size and styling to be pill-shaped with more padding to match design requirements
- Adjusted main navbar call-to-action buttons to have pill shapes (rounded-full) matching the hero and top bar aesthetics
- Increased top bar height to 48px and button min-height to 40px with proper focus styles to meet UI_UX.md accessibility standards
- Completely redesigned the TrustBar component with a modern, divided grid layout using Lucide React icons, building immediate credibility right below the fold.
- Expanded `data/services.ts` to include 8 core real-world plumbing services matching the reference site, mapped to photographic image URLs.
- Completely revamped the ServicesGrid component into a premium 4-column card layout using real generated photography instead of abstract icons to ensure clarity across all age demographics, with hover zoom interactions.
- Transformed the `QuoteEstimator` from static text into an interactive, state-driven React component allowing users to dynamically calculate pricing based on service type and urgency level.
- Redesigned the `CallbackForm` into a premium two-column layout, combining contact information and trust signals (left) with large, accessible form inputs (right) to drive conversions.
- Rebuilt the `Reviews` component to mimic an authentic Google Business reviews layout, complete with SVG Google logos, dynamic colourful avatars, and a 5.0 overall rating header to strongly reinforce social proof.

## Files Changed
- .github/dependabot.yml
- .github/labeler.yml
- .github/pull_request_template.md
- .github/ISSUE_TEMPLATE/bug_report.yml
- .github/ISSUE_TEMPLATE/feature_request.yml
- .github/ISSUE_TEMPLATE/task.yml
- .github/ISSUE_TEMPLATE/config.yml
- .github/workflows/ci.yml
- .github/workflows/security.yml
- .github/workflows/dependabot-auto-merge.yml
- .github/workflows/pr-labeler.yml
- .github/workflows/issue-triage.yml
- .github/workflows/stale.yml
- .github/workflows/labels.yml
- .github/workflows/project-automation.yml
- .github/workflows/uptime-monitor.yml
- components/layout/Navbar.tsx
- components/sections/Hero.tsx
- components/layout/Navbar.tsx
- components/ui/Card.tsx
- docs/FLOW.md
- docs/FRONTEND.md
- docs/BACKEND.md
- config/site.ts
- data/locations.ts
- data/reviews.ts
- components/layout/Footer.tsx
- components/sections/Hero.tsx
- components/sections/CTA.tsx
- components/sections/QuoteEstimator.tsx
- components/sections/CallbackForm.tsx
- components/sections/TrustBar.tsx
- app/about/page.tsx
- app/locations/page.tsx
- public/logo.png
- components/layout/Navbar.tsx
- app/globals.css
- public/images/person-with-van.jpg
- components/sections/Hero.tsx
- components/layout/Navbar.tsx

## Current Focus
Stabilize project standards and keep public website content consistent with Melbourne PDS positioning.

## Next Step
- Add page-level metadata for /about, /contact, /services, and /locations
- Tune navbar visuals and spacing to final brand polish based on design feedback
- Polish Phase 1 public sections (Hero, TrustBar, ServicesGrid, CallbackForm, Footer)
- Keep workflows setup tasks tracked but separate from public website iteration

## Known Issues
- project-automation.yml is intentionally gated until vars and secret are configured
- uptime-monitor.yml is intentionally gated until PRODUCTION_URL is configured
- Public route metadata is currently centralized and should be extended per route for stronger SEO

## Commands Run
- npm run lint
- npm run build

## Important Decisions
- Keep all automations free-tier friendly using native GitHub Actions and official actions
- Fail fast on lint/build/security checks for safer main branch
- Use issue forms and templates to speed triage and reduce context loss
