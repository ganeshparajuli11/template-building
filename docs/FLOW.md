Create this file:

```txt
docs/FLOW.md
```

Paste this inside:

````md
# FLOW.md

## OPEDS AI Development Workflow

This file tells any AI coding assistant how to work on this project without losing context, breaking architecture, or hallucinating.

Before starting any new task, the AI must read the project rule files first.

---

# 1. Required Reading Order

Before writing code, changing code, or suggesting architecture, read these files in this order:

```txt
1. docs/PROJECTPLAN.md
2. docs/SECURITY.md
3. docs/UI_UX.md
4. docs/FRONTEND.md
5. docs/BACKEND.md
6. docs/SEO.md
````

If the task is design/UI related, pay extra attention to:

```txt
docs/UI_UX.md
docs/FRONTEND.md
```

If the task is API/database/backend related, pay extra attention to:

```txt
docs/SECURITY.md
docs/BACKEND.md
```

If the task is SEO/performance related, pay extra attention to:

```txt
docs/SEO.md
docs/FRONTEND.md
```

---

# 2. Start Every New Task Like This

Before coding, the AI must identify:

```txt
Task type:
- Frontend
- Backend
- Security
- SEO
- UI/UX
- Database
- Dashboard
- Content
- Refactor
- Bug fix
```

Then check the related rule files.

Example:

```txt
Task: Build hero section
Type: Frontend + UI/UX + SEO
Read:
- UI_UX.md
- FRONTEND.md
- SEO.md
```

Example:

```txt
Task: Create contact form API
Type: Backend + Security
Read:
- BACKEND.md
- SECURITY.md
```

---

# 3. Never Start Blindly

The AI must not:

```txt
[ ] Create random folder structure
[ ] Ignore existing files
[ ] Put all code in one file
[ ] Skip project rules
[ ] Add packages without reason
[ ] Hard-code repeated content
[ ] Ignore security
[ ] Ignore mobile UX
[ ] Ignore SEO
[ ] Break existing working code
```

The AI must first inspect current files before editing.

---

# 4. Context Preservation Rule

At the end of every major coding step, update or create:

```txt
docs/STATUS.md
```

This file should contain:

```txt
Current phase
Completed work
Files changed
Next task
Known issues
Commands run
Important decisions
```

This helps continue work when Claude, GPT, Cursor, or any AI hits token/context limit.

---

# 5. STATUS.md Format

Use this format:

```md
# STATUS.md

## Current Phase
Phase 1 — Public Website MVP

## Last Completed Work
- Created Navbar
- Created Hero section
- Added global theme variables

## Files Changed
- components/layout/Navbar.tsx
- components/sections/Hero.tsx
- app/page.tsx
- app/globals.css

## Current Issue
- Mobile menu needs improvement

## Next Step
- Build TrustBar and ServicesGrid

## Commands Run
npm run dev

## Notes
Keep Melbourne PDS logo unchanged.
Follow UI_UX.md for older user readability.
```

Always keep this file updated.

---

# 6. If AI Token Limit Is Close

If the AI is running out of context/token, it must stop and write a handover summary.

Use this format:

```md
# HANDOVER

## What I was doing
...

## What is completed
...

## What files were changed
...

## What still needs to be done
...

## Important rules to continue
...

## Next exact command/task
...
```

Then the next AI can continue without guessing.

---

# 7. Cross-AI Continuation Rule

This project may be continued across:

```txt
Claude
ChatGPT
Gemini
Cursor
GitHub Copilot
```

So every AI must rely on project documents, not memory.

Before continuing, read:

```txt
docs/FLOW.md
docs/STATUS.md
docs/PROJECTPLAN.md
```

Then read the specific rule files based on task.

---

# 8. Git Commit Rule

After each stable step, commit changes.

Suggested commit style:

```txt
feat: add hero section
feat: add dashboard overview
fix: improve mobile navigation
docs: add backend standards
refactor: move services data to data folder
security: add validation schema
seo: add metadata helper
```

Do not commit broken code.

Before commit:

```bash
npm run lint
npm run build
```

If build fails, fix before committing.

---

# 9. Branch Rule

Use branches for bigger work.

Examples:

```txt
feature/public-homepage
feature/admin-dashboard
feature/lead-api
feature/seo-engine
fix/mobile-navbar
```

Do not do large risky changes directly on main.

---

# 10. Package Installation Rule

Before installing any package, AI must explain:

```txt
Package name
Why it is needed
Can we do without it?
Is it lightweight?
Is it maintained?
Security risk?
```

Avoid installing heavy packages for small tasks.

---

# 11. Design Rule

When building UI, always follow:

```txt
Readable text
Strong contrast
Mobile-first
Older user friendly
Clear CTA
Simple navigation
Existing Melbourne PDS logo unchanged
Blue/green brand palette
Orange only for emergency CTA
```

Do not create tiny text or low-contrast design.

---

# 12. Frontend Rule

Frontend must follow:

```txt
Reusable components
Clean pages
Content from data/config files
Global CSS variables
Server components by default
"use client" only when needed
Semantic HTML
SEO metadata
Optimized images
Responsive layout
```

---

# 13. Backend Rule

Backend must follow:

```txt
Thin API routes
Service layer
Zod validation
Safe response format
No raw errors
No exposed secrets
business_id isolation
Rate limit planning
Audit logging planning
Provider-agnostic connectors
```

---

# 14. Security Rule

Before creating forms, APIs, uploads, auth, or dashboard logic, check:

```txt
SECURITY.md
BACKEND.md
```

Security rules:

```txt
Validate input
Never trust frontend
No raw SQL
No exposed API keys
No unsafe HTML
No cross-tenant data leakage
No secrets in GitHub
No stack traces in production
```

---

# 15. SEO Rule

Every public page must include:

```txt
One H1
Meta title
Meta description
Canonical URL
Open Graph metadata
Internal links
Alt text
Fast loading
Mobile responsive layout
Schema if needed
```

Follow:

```txt
docs/SEO.md
```

---

# 16. Task Execution Pattern

For every task, follow this pattern:

```txt
1. Read relevant docs
2. Inspect existing files
3. Plan changes
4. Make small changes
5. Reuse existing components/data
6. Run lint/build if possible
7. Update STATUS.md
8. Explain what changed
```

Do not jump directly into huge changes.

---

# 17. Anti-Hallucination Rule

If unsure, the AI must say:

```txt
I need to inspect the current file first.
```

The AI must not invent:

```txt
existing functions
existing folders
existing database tables
existing API routes
existing packages
```

Always check the actual project structure.

---

# 18. Recommended Continuation Prompt

When starting a new AI session, paste this:

```txt
Read docs/FLOW.md first.

Then read:
- docs/STATUS.md
- docs/PROJECTPLAN.md
- docs/SECURITY.md
- docs/UI_UX.md
- docs/FRONTEND.md
- docs/BACKEND.md
- docs/SEO.md

Continue the OPEDS Melbourne PDS project from the current STATUS.md.
Do not hallucinate files. Inspect existing files first.
Follow the architecture, security, frontend, backend, UI/UX, and SEO rules.
After finishing the task, update docs/STATUS.md.
```

---

# 19. Emergency Recovery Rule

If the project becomes messy:

```txt
1. Stop coding
2. Read FLOW.md
3. Read STATUS.md
4. Run npm run lint
5. Run npm run build
6. List broken files
7. Fix one issue at a time
8. Update STATUS.md
```

Do not rewrite the whole project unless required.

---

# 20. Final Rule

The AI must act like a senior engineer, not a random code generator.

Every change must improve:

```txt
Security
Performance
SEO
UI/UX
Maintainability
Scalability
Business value
```

If a change does not improve these, do not add it.

````

Also create:

```txt
docs/STATUS.md
````

Paste this starting version:

```md
# STATUS.md

## Current Phase
Phase 1 — Public Website MVP

## Project
OPEDS Melbourne PDS demo

## Completed Work
- Next.js project created
- Documentation folder created
- Security rules created
- Frontend rules created
- Backend rules created
- UI/UX rules created
- SEO rules created
- Project plan created
- Basic data folder created
- Melbourne PDS logo added

## Current Focus
Build the public website first using clean reusable components.

## Next Step
Create or improve:
- Navbar
- Hero section
- TrustBar
- ServicesGrid
- CallbackForm
- Footer

## Important Rules
- Keep Melbourne PDS logo unchanged
- Use blue/green brand palette
- Use orange only for emergency CTAs
- Mobile-first design
- Large readable text for users aged 20–80+
- Follow docs/UI_UX.md and docs/FRONTEND.md
- Do not add backend yet
- Do not add random packages
- Keep content in data/config files

## Known Issues
- Need to confirm current component structure before editing
- Need to ensure build runs cleanly

## Commands To Run
npm run dev
npm run lint
npm run build
```

This will let Claude/GPT/Gemini continue from same place without losing context.
