# BACKEND.md

## OPEDS Backend Engineering Standard

This document defines backend standards for OPEDS.

Backend priorities:

- Security by default
- Tenant isolation
- Predictable API contracts
- Clear service boundaries
- Scalable architecture

This document complements:

- docs/SECURITY.md
- docs/FRONTEND.md
- docs/UI_UX.md

---

## 1. Backend Mindset

Backend is the trust boundary, not just a data passthrough.

Every backend feature should answer:

- Who is requesting?
- Is input valid?
- Is action authorized?
- Which business owns the data?
- Should this action be rate-limited?
- Should this action be audited?

---

## 2. Architecture Pattern

Use modular separation:

```txt
app/api/...            // thin route handlers
lib/validators/...     // zod schemas
lib/services/...       // business logic
lib/server/...         // auth, response, permissions, rate limiting
lib/database/...       // db helpers and typed queries
```

Rules:

- Keep route handlers thin
- Keep business logic in services
- Keep validation schemas centralized
- Keep auth/permission checks consistent

---

## 3. API Route Flow

Each API route should follow this order:

1. Validate HTTP method
2. Parse request safely
3. Validate input with Zod
4. Authenticate user/session if required
5. Authorize role and tenant scope
6. Apply rate limit where needed
7. Call service layer
8. Write audit log for critical actions
9. Return safe response shape

---

## 4. Response Contract

Use consistent response shapes.

Success:

```json
{
  "success": true,
  "message": "...",
  "data": {}
}
```

Error:

```json
{
  "success": false,
  "message": "Something went wrong."
}
```

Validation error:

```json
{
  "success": false,
  "message": "Please check submitted fields.",
  "errors": {}
}
```

Never expose stack traces, DB internals, keys, or private file paths.

---

## 5. Validation Rules

Validate all external input using Zod:

- Body payloads
- Query parameters
- Route params
- Webhook payloads
- Connector settings
- Analytics events

Validation expectations:

- Enforce max lengths
- Use enums for fixed values
- Validate identifiers and URLs
- Reject malformed payloads early

---

## 6. Data Access and SQL Safety

Rules:

- Never concatenate user input into SQL
- Use query builders/parameterized APIs
- Keep DB writes in service/database layers
- Filter tenant-owned data by business_id

Do not bypass tenant filters for convenience.

---

## 7. Multi-Tenant Isolation

Critical rule:

- One business must never read or mutate another business data.

Requirements:

- Every tenant-owned table includes business_id
- Every read/write checks tenant ownership
- Role checks applied before service execution

---

## 8. Row Level Security

When using Supabase/Postgres, enforce RLS on sensitive tables.

Typical protected tables include:

- businesses
- business_users
- leads
- analytics_events
- connectors
- uploads
- seo pages/audits
- audit logs

Do not disable RLS in production.

---

## 9. Service Layer Standard

Service functions should handle:

- Business rules
- Data transformations
- Database interaction orchestration
- Audit hook invocation
- Safe return payloads

Routes should not contain heavy business logic.

---

## 10. Secrets and Environment Safety

Rules:

- Never commit .env files
- Never expose server secrets to client bundles
- Use NEXT_PUBLIC_ only for truly public values
- Rotate leaked keys immediately

---

## 11. Logging and Audit

Audit critical actions:

- Lead status changes
- Sensitive setting changes
- Connector configuration changes
- Permission/role updates

Audit records should include actor, action, target, and timestamp.

---

## 12. Rate Limiting and Abuse Controls

Protect sensitive endpoints:

- Contact/callback submit endpoints
- Login/auth endpoints
- AI generation endpoints
- Upload endpoints

Rate limits should be explicit and configurable.

---

## 13. File Upload Safety

If uploads are added:

- Allow-list MIME types
- Enforce size limits
- Randomize storage names
- Reject executable/script content
- Keep private uploads outside public web root

---

## 14. Backend Quality Gate

Before merging backend work:

1. Run npm run lint
2. Run npm run build
3. Validate response shape consistency
4. Verify tenant isolation paths
5. Verify sensitive errors are masked

---

## 15. Implementation Principle

Prefer small, verifiable backend changes over large speculative rewrites.

Each backend change should improve at least one of:

- Security
- Reliability
- Maintainability
- Scalability
- Operational visibility
