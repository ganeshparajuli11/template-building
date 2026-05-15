Client Website + Admin Dashboard + Super Admin-ready structure

Their current site already has phone, email, many services, locations, callback form, reviews, quote tool, and emergency plumbing focus. So our system should keep those business parts but make them cleaner, faster, more trackable, and admin-controlled.

1. First architecture
Public Website
  - Homepage
  - Services
  - Service Detail Pages
  - Locations
  - About
  - Reviews
  - Contact
  - Instant Quote

Admin Dashboard
  - Overview
  - Leads / Forms
  - Services Manager
  - Location Pages
  - Reviews
  - SEO Health
  - Analytics
  - Settings

Super Admin later
  - Clients
  - Templates
  - Deployments
  - Security Logs
  - Connector Settings
2. Create folders now

Run this in terminal:

mkdir components components/layout components/sections components/ui components/dashboard config lib types data
mkdir app/dashboard app/services app/locations app/contact app/about
3. Recommended structure
app/
  page.tsx
  layout.tsx
  globals.css
  services/
    page.tsx
  locations/
    page.tsx
  contact/
    page.tsx
  about/
    page.tsx
  dashboard/
    page.tsx

components/
  layout/
    Navbar.tsx
    Footer.tsx

  sections/
    Hero.tsx
    TrustBar.tsx
    CallbackForm.tsx
    ServicesGrid.tsx
    QuoteEstimator.tsx
    Reviews.tsx
    Locations.tsx
    CTA.tsx

  dashboard/
    DashboardOverview.tsx
    LeadsTable.tsx
    SEOScoreCard.tsx
    AnalyticsCards.tsx
    ConnectorStatus.tsx

  ui/
    Button.tsx
    Card.tsx
    Badge.tsx

config/
  site.ts
  theme.ts

data/
  services.ts
  locations.ts
  reviews.ts

lib/
  seo.ts
  utils.ts
  lead-tracking.ts
  seo-checker.ts

types/
  index.ts
4. Install packages
npm install lucide-react framer-motion clsx tailwind-merge react-hook-form zod

Later:

npm install @supabase/supabase-js
5. First files to create

Start with these only:

config/site.ts
data/services.ts
data/locations.ts
components/layout/Navbar.tsx
components/sections/Hero.tsx
components/sections/CallbackForm.tsx
components/sections/ServicesGrid.tsx
components/sections/QuoteEstimator.tsx
components/dashboard/DashboardOverview.tsx
app/page.tsx
app/dashboard/page.tsx
6. First build goal

For now, build:

Homepage
Dashboard mockup
SEO score card
Leads card
WhatsApp/call click card
Quote request card

Do not add database yet. First make the UI and structure strong. Then we connect Supabase.