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
- components/ui/Card.tsx

## Current Focus
Stabilize automated workflows and reduce manual dependency maintenance effort.

## Next Step
- Add repository variable PRODUCTION_URL
- Add repository variable GITHUB_PROJECT_URL
- Add repository secret PROJECT_AUTOMATION_TOKEN
- Enable repository setting: Allow auto-merge
- Run "Sync Labels" workflow once manually
- Protect main branch with required checks (CI + Security)

## Known Issues
- project-automation.yml is intentionally gated until vars and secret are configured
- uptime-monitor.yml is intentionally gated until PRODUCTION_URL is configured

## Commands Run
- npm run lint
- npm run build

## Important Decisions
- Keep all automations free-tier friendly using native GitHub Actions and official actions
- Fail fast on lint/build/security checks for safer main branch
- Use issue forms and templates to speed triage and reduce context loss
