# OPEDS Portfolio

OPEDS is a Next.js application for the Melbourne PDS demo, focused on a clean public website, reusable UI components, and a lightweight dashboard preview.

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion
- React Hook Form + Zod

## Project Structure

- app: route pages
- components: reusable UI, sections, and dashboard widgets
- config: site and theme configuration
- data: static content and mock data
- docs: project rules and workflow documentation
- lib: shared utilities

## Main Routes

- /: public homepage
- /about
- /contact
- /services
- /locations
- /dashboard

## Local Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Quality checks:

```bash
npm run lint
npm run build
```

## GitHub Automation

This repo includes GitHub Actions for:

- CI lint and build checks
- Security scanning and dependency review
- Dependabot updates
- PR labeling and issue triage
- Stale issue/PR cleanup
- Manual branch sync helper for merge conflict guidance
- Optional project board automation and uptime monitoring
