# FLOW.md

## OPEDS AI Development Workflow

This document defines how AI assistants should work in this repository without losing context, breaking architecture, or hallucinating project state.

Read this file before any new coding task.

---

## 1. Required Reading Order

Before writing code, changing code, or proposing architecture, read these files in this order:

1. docs/PROJECTPLAN.md
2. docs/SECURITY.md
3. docs/UI_UX.md
4. docs/FRONTEND.md
5. docs/BACKEND.md
6. docs/SEO.md

Task-specific focus:

- UI/design tasks: docs/UI_UX.md, docs/FRONTEND.md
- API/database/backend tasks: docs/SECURITY.md, docs/BACKEND.md
- SEO/performance tasks: docs/SEO.md, docs/FRONTEND.md

---

## 2. Task Classification Before Coding

Before implementation, classify the task type:

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

Then read only the relevant standards in detail before editing.

---

## 3. Never Start Blindly

Do not:

- Create random folder structures
- Ignore existing files and patterns
- Put all logic in one file
- Skip project rules
- Add packages without clear reason
- Hard-code repeated content
- Ignore security, mobile UX, or SEO
- Break working code for large speculative rewrites

Always inspect current files before editing.

---

## 4. Context Preservation Rule

At the end of each major coding step, update docs/STATUS.md.

STATUS.md should include:

- Current phase
- Completed work
- Files changed
- Next task
- Known issues
- Commands run
- Important decisions

This allows cross-session continuity across Claude, ChatGPT, Gemini, Cursor, and Copilot.

---

## 5. STATUS.md Standard Format

Use this structure:

```md
# STATUS.md

## Current Phase
...

## Last Completed Work
- ...

## Files Changed
- ...

## Current Issue
- ...

## Next Step
- ...

## Commands Run
- ...

## Notes
...
```

Keep it current after meaningful progress.

---

## 6. Token Limit / Handover Rule

If context is near limit, stop and write a handover summary using this format:

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

---

## 7. Cross-AI Continuation Rule

Before continuing work from another AI session, read:

1. docs/FLOW.md
2. docs/STATUS.md
3. docs/PROJECTPLAN.md

Then read task-specific rule files.

Do not rely on memory-only continuation.

---

## 8. Commit Quality Rule

After each stable step:

1. Run checks:
   - npm run lint
   - npm run build
2. Fix failures before commit.
3. Commit only working code.

Suggested commit styles:

- feat: add hero section
- feat: add dashboard overview
- fix: improve mobile navigation
- docs: add backend standards
- refactor: move services data to data folder
- security: add validation schema
- seo: add metadata helper

---

## 9. Branch Rule

Use feature/fix branches for larger changes.

Examples:

- feature/public-homepage
- feature/admin-dashboard
- feature/lead-api
- feature/seo-engine
- fix/mobile-navbar

Avoid large risky changes directly on main.

---

## 10. Package Installation Rule

Before installing any package, explain:

- Package name
- Why it is needed
- Whether existing code can solve it
- Package weight and maintenance
- Security risk profile

Avoid heavy dependencies for small tasks.

---

## 11. Design Rule

When building UI:

- Keep text readable
- Maintain strong contrast
- Design mobile-first
- Keep older-user readability in mind
- Keep navigation simple
- Use clear CTA hierarchy
- Keep Melbourne PDS logo unchanged
- Use blue/green palette
- Use orange only for urgent CTA emphasis

---

## 12. Frontend Rule

Frontend implementation must prioritize:

- Reusable components
- Clean route pages
- Content from data/config files
- Global CSS variables
- Server components by default
- "use client" only when required
- Semantic HTML
- SEO metadata coverage
- Optimized assets
- Responsive layouts

---

## 13. Backend Rule

Backend implementation must prioritize:

- Thin API routes
- Service layer separation
- Zod validation
- Safe response shape
- No raw errors leaked
- No exposed secrets
- business_id isolation
- Rate-limit planning
- Audit logging planning
- Provider-agnostic connector design

---

## 14. Security Rule

Before forms, APIs, uploads, auth, or dashboard logic:

1. Review docs/SECURITY.md
2. Review docs/BACKEND.md

Security basics:

- Validate all input
- Never trust frontend checks
- No raw SQL concatenation
- No exposed API keys/secrets
- No unsafe HTML rendering
- No cross-tenant leakage
- No production stack trace exposure

---

## 15. SEO Rule

Every public page should include:

- One H1
- Meta title
- Meta description
- Canonical URL
- Open Graph metadata
- Internal links
- Alt text for images
- Fast loading
- Mobile responsiveness
- Schema where appropriate

Follow docs/SEO.md for implementation details.

---

## 16. Execution Pattern

For every task:

1. Read relevant docs
2. Inspect existing files
3. Plan small changes
4. Implement incrementally
5. Reuse existing components/data
6. Run lint/build when feasible
7. Update docs/STATUS.md
8. Summarize what changed

Do not jump into large unplanned rewrites.

---

## 17. Anti-Hallucination Rule

If uncertain, inspect the real file first.

Never invent:

- Functions
- Folders
- Tables
- API routes
- Packages

Always verify against the current repository state.

---

## 18. Recommended Session Prompt

Use this when starting a new AI session:

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

Continue the OPEDS Melbourne PDS project from current STATUS.md.
Do not hallucinate files. Inspect existing files first.
Follow architecture, security, frontend, backend, UI/UX, and SEO rules.
After finishing the task, update docs/STATUS.md.
```

---

## 19. Emergency Recovery Rule

If the project becomes messy:

1. Stop coding
2. Read docs/FLOW.md
3. Read docs/STATUS.md
4. Run npm run lint
5. Run npm run build
6. List broken files
7. Fix one issue at a time
8. Update docs/STATUS.md

Avoid full rewrites unless explicitly required.

---

## 20. Final Rule

Act like a senior engineer, not a random generator.

Every change should improve one or more of:

- Security
- Performance
- SEO
- UI/UX
- Maintainability
- Scalability
- Business value

If a change improves none of these, do not add it.
