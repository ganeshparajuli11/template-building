Create this file in your project root:

```txt
BACKEND.md
```

Paste this inside:

````md
# BACKEND.md

## OPEDS Backend Engineering Standard

This document defines backend rules for the OPEDS platform.

OPEDS is planned as a secure business admin system for websites, leads, SEO, analytics, connectors, AI features, forms, messages, and future client management.

The backend must be:

- secure
- clean
- scalable
- easy to maintain
- database-safe
- API-safe
- tenant-aware
- optimized
- easy to move between hosting providers
- ready for future admin and super admin roles

This document works together with:

```txt
SECURITY.md
FRONTEND.md
UI_UX.md
````

---

# 1. Backend Mindset

Do not write backend code only to make the frontend work.

Backend is the trust layer of the system.

Every backend feature must answer:

```txt
Who is making this request?
Are they allowed to do this?
Is the input valid?
Which business/client owns this data?
Can this action be abused?
Should this action be logged?
Can this expose private data?
```

If these questions are not answered, the backend code is incomplete.

---

# 2. Backend Architecture

Use a modular backend structure.

Recommended structure:

```txt
app/
  api/
    leads/
      route.ts
    seo/
      route.ts
    analytics/
      route.ts
    connectors/
      route.ts
    ai/
      route.ts

lib/
  server/
    auth.ts
    db.ts
    rate-limit.ts
    response.ts
    logger.ts
    permissions.ts

  validators/
    lead.schema.ts
    seo.schema.ts
    connector.schema.ts
    analytics.schema.ts

  services/
    lead.service.ts
    seo.service.ts
    analytics.service.ts
    connector.service.ts
    ai.service.ts
    audit.service.ts

  storage/
    upload.service.ts

  database/
    types.ts
    queries.ts
```

Rules:

* API routes should stay thin.
* Business logic goes inside `services/`.
* Validation schemas go inside `validators/`.
* Database helpers go inside `database/`.
* Auth/permission logic goes inside `server/`.
* Do not mix everything in one API file.

---

# 3. API Route Standard

Every API route must follow this flow:

```txt
1. Check request method
2. Parse body safely
3. Validate input with Zod
4. Check authentication if needed
5. Check authorization/role
6. Check business_id/tenant ownership
7. Apply rate limit if needed
8. Call service layer
9. Write audit log if important
10. Return safe response
```

Example route pattern:

```ts
import { NextResponse } from "next/server";
import { LeadFormSchema } from "@/lib/validators/lead.schema";
import { createLead } from "@/lib/services/lead.service";
import { safeErrorResponse, successResponse } from "@/lib/server/response";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validated = LeadFormSchema.parse(body);

    const lead = await createLead(validated);

    return successResponse({
      message: "Lead submitted successfully.",
      data: lead,
    });
  } catch (error) {
    return safeErrorResponse(error);
  }
}
```

API routes must not expose raw errors.

---

# 4. Response Standard

Use consistent API responses.

Success response:

```json
{
  "success": true,
  "message": "Lead submitted successfully.",
  "data": {}
}
```

Error response:

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
  "message": "Please check the submitted information.",
  "errors": {}
}
```

Do not return:

* stack traces
* database error details
* API keys
* internal file paths
* full exception objects

Create helper:

```ts
export function successResponse(data: unknown, status = 200) {
  return NextResponse.json(
    {
      success: true,
      ...data,
    },
    { status }
  );
}

export function errorResponse(message = "Something went wrong.", status = 500) {
  return NextResponse.json(
    {
      success: false,
      message,
    },
    { status }
  );
}
```

---

# 5. Validation Rules

All backend input must be validated.

Use Zod.

Validate:

* contact forms
* quote forms
* SEO settings
* connector settings
* analytics events
* admin content updates
* file upload metadata
* AI prompts
* URL parameters
* search queries
* webhook payloads

Example:

```ts
import { z } from "zod";

export const LeadFormSchema = z.object({
  businessId: z.string().uuid(),
  name: z.string().min(2).max(80),
  email: z.string().email().max(120).optional(),
  phone: z.string().min(6).max(20),
  service: z.string().min(2).max(120),
  suburb: z.string().max(120).optional(),
  message: z.string().max(1000).optional(),
  source: z.enum(["website", "whatsapp", "phone", "quote_form"]).default("website"),
});
```

Rules:

* Validate on backend even if frontend already validates.
* Reject unknown fields where needed.
* Limit all string lengths.
* Use enums for fixed values.
* Validate IDs as UUIDs.
* Validate URLs before storing.
* Validate phone/email format where possible.

---

# 6. Database Design Rules

Use PostgreSQL/Supabase-compatible design.

Every tenant-owned table must include:

```txt
id
business_id
created_at
updated_at
created_by
```

Recommended tables:

```txt
businesses
business_users
leads
lead_events
services
locations
reviews
faqs
seo_pages
seo_audits
analytics_events
connectors
connector_logs
messages
uploads
audit_logs
settings
```

## Example businesses table

```sql
create table businesses (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  phone text,
  email text,
  website_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

## Example leads table

```sql
create table leads (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references businesses(id) on delete cascade,
  name text not null,
  email text,
  phone text,
  service text,
  suburb text,
  message text,
  source text not null default 'website',
  status text not null default 'new',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

---

# 7. Multi-Tenant Rules

OPEDS must be designed as a multi-client system from the beginning.

Critical rule:

```txt
One business must never access another business data.
```

Every sensitive query must filter by:

```txt
business_id
```

Bad:

```ts
const leads = await db.leads.findMany();
```

Good:

```ts
const leads = await getLeadsByBusinessId(session.businessId);
```

Admin users should only access businesses assigned to them.

Super admin can access multiple businesses, but this must be role-checked.

---

# 8. Row Level Security

If Supabase is used, enable RLS on sensitive tables.

Enable RLS for:

```txt
businesses
business_users
leads
messages
analytics_events
connectors
uploads
seo_pages
seo_audits
audit_logs
```

Policy idea:

```txt
client_admin can select/insert/update rows only where business_id matches their assigned business.
super_admin can access all rows.
public users can only insert limited lead/form data.
```

Never disable RLS in production because it is inconvenient.

---

# 9. Service Layer Rules

API routes should call service functions.

Bad:

```ts
export async function POST(req: Request) {
  const body = await req.json();
  const result = await supabase.from("leads").insert(body);
  return NextResponse.json(result);
}
```

Good:

```ts
export async function POST(req: Request) {
  const body = await req.json();
  const validated = LeadFormSchema.parse(body);
  const lead = await leadService.create(validated);
  return successResponse({ data: lead }, 201);
}
```

Service files should handle:

* database logic
* business rules
* audit logging trigger
* data transformation
* safe return object

---

# 10. Data Return Rules

Never return full database objects blindly.

Bad:

```ts
return NextResponse.json(user);
```

Good:

```ts
return NextResponse.json({
  id: user.id,
  name: user.name,
  email: user.email,
  role: user.role,
});
```

Remove before returning:

* password hashes
* API keys
* refresh tokens
* internal notes
* secret configs
* private metadata
* deleted records

---

# 11. Lead Management Backend

Lead system must support:

```txt
new
contacted
quoted
won
lost
spam
archived
```

Lead events should be tracked separately.

Example `lead_events`:

```txt
id
lead_id
business_id
event_type
note
created_by
created_at
```

Examples:

```txt
lead_created
status_changed
note_added
called_customer
whatsapp_clicked
quote_sent
```

This creates a useful business timeline.

---

# 12. Analytics Backend

Analytics should track events like:

```txt
page_view
call_click
whatsapp_click
form_submit
quote_start
quote_complete
service_card_click
location_page_view
```

Recommended event fields:

```txt
id
business_id
event_name
page_path
referrer
device_type
browser
country
metadata
created_at
```

Rules:

* Do not collect unnecessary personal data.
* Avoid storing full IP unless needed.
* Anonymize where possible.
* Keep analytics lightweight.
* Batch events later if traffic grows.

---

# 13. SEO Backend

SEO backend should support:

```txt
SEO page records
SEO audit results
metadata status
image alt checks
schema checks
Lighthouse score storage
Search Console data later
```

Example `seo_pages`:

```txt
id
business_id
page_path
title
description
canonical_url
focus_keyword
status
created_at
updated_at
```

Example `seo_audits`:

```txt
id
business_id
page_path
score
issues
recommendations
created_at
```

SEO audit result should be stored as JSON:

```json
{
  "missingTitle": false,
  "missingDescription": true,
  "missingAltText": 3,
  "hasH1": true,
  "hasSchema": true,
  "recommendations": [
    "Add a stronger meta description.",
    "Add alt text to 3 images."
  ]
}
```

---

# 14. Connector Backend

Connector system must be provider-agnostic.

Do not hard-code one provider.

Use structure:

```txt
connectors/
  google/
  whatsapp/
  analytics/
  ai/
  email/
```

Connector table:

```txt
id
business_id
provider
type
status
config
encrypted_secret
created_at
updated_at
```

Connector types:

```txt
google_search_console
google_business_profile
google_analytics
whatsapp_basic
whatsapp_business_api
email_smtp
ai_openrouter
ai_gemini
ai_openai
umami
```

Rules:

* Store secrets encrypted.
* Never expose secrets to frontend.
* Show connection status only.
* Allow disconnect.
* Log connector actions.
* Use least permission.

---

# 15. AI Backend Rules

AI features must be backend-only.

Frontend must never call AI provider directly with API keys.

AI features:

```txt
SEO title generation
Meta description generation
FAQ generation
Service description improvement
Blog idea generation
Lead insight summary
```

Rules:

* AI API key stays server-side.
* Rate limit AI requests.
* Keep AI optional.
* Do not send secrets to AI.
* Do not send private leads unless needed.
* Validate AI output before saving.
* Client must approve AI content before publishing.

AI service should use provider abstraction:

```ts
type AIProvider = "openrouter" | "gemini" | "openai" | "local";

export async function generateText({
  provider,
  prompt,
}: {
  provider: AIProvider;
  prompt: string;
}) {
  // provider-specific logic here
}
```

---

# 16. Storage Rules

Storage may be used for:

* logos
* service images
* gallery images
* review screenshots if allowed
* documents later

Recommended storage providers:

```txt
Supabase Storage
S3-compatible storage
Cloudflare R2 later
```

Rules:

* Validate file type.
* Validate file size.
* Rename files.
* Store by business ID.
* Use public bucket only for public website images.
* Use private bucket for sensitive files.
* Use signed URLs for private files.
* Do not allow executable files.

Suggested path:

```txt
/businesses/{business_id}/images/{file_id}.webp
/businesses/{business_id}/logos/{file_id}.webp
/businesses/{business_id}/documents/{file_id}.pdf
```

---

# 17. Authentication Backend

Planned auth roles:

```txt
public
client_admin
super_admin
```

Rules:

* Protect `/dashboard`.
* Protect `/super-admin` later.
* Protect admin API routes.
* Check role server-side.
* Do not trust frontend role flags.
* Session must be verified before sensitive actions.
* Add MFA later for super admin.

Example permission helper:

```ts
export function canManageBusiness(user: User, businessId: string) {
  return (
    user.role === "super_admin" ||
    user.businessIds.includes(businessId)
  );
}
```

---

# 18. Authorization Backend

Every admin action must check permission.

Examples:

```txt
Can this user view this lead?
Can this user update this service?
Can this user change SEO settings?
Can this user connect Google?
Can this user view analytics?
```

Do not only check if user is logged in.
Check if they own the business/project.

---

# 19. Rate Limiting Rules

Rate limit:

```txt
contact forms
quote forms
login attempts
AI generation
analytics event endpoint
file upload
webhooks
connector callbacks
```

Suggested limits:

```txt
Contact form: 5 per IP per hour
Quote form: 5 per IP per hour
AI: 20 per admin per day for MVP
Analytics events: 100 per visitor per hour
Upload: 10 per admin per hour
Login: 5 failed attempts per 15 minutes
```

---

# 20. Logging Rules

Log backend events such as:

```txt
lead_created
lead_status_changed
admin_login
admin_login_failed
seo_audit_run
connector_added
connector_removed
api_key_updated
file_uploaded
file_deleted
permission_denied
rate_limit_triggered
```

Do not log:

```txt
passwords
API keys
full tokens
private secrets
payment card data
```

Mask secrets:

```txt
sk-123456abcdef → sk-1234********
```

---

# 21. Audit Log Rules

Important admin actions must go into `audit_logs`.

Audit log fields:

```txt
id
business_id
user_id
action
target_type
target_id
ip_address
user_agent
metadata
created_at
```

Audit logs should be append-only.

Do not allow normal admins to delete audit logs.

---

# 22. Error Handling

Backend errors must be safe.

Rules:

* Use try/catch in API routes.
* Return friendly errors.
* Log technical details server-side.
* Do not expose stack traces.
* Do not expose SQL errors.
* Do not expose provider token errors.
* Do not expose file paths.

Example safe message:

```txt
We could not process this request. Please try again.
```

---

# 23. Environment Variables

Use environment variables for all secrets.

Example:

```env
NEXT_PUBLIC_SITE_URL=
DATABASE_URL=
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
AI_PROVIDER=
AI_API_KEY=
EMAIL_PROVIDER=
EMAIL_API_KEY=
STORAGE_PROVIDER=
WEBHOOK_SECRET=
```

Rules:

* Never commit `.env`.
* Never expose private keys with `NEXT_PUBLIC_`.
* Use different keys for dev and production.
* Rotate leaked keys.

---

# 24. Backend Performance Rules

Backend should stay fast.

Rules:

* Query only needed columns.
* Add indexes on common filters.
* Paginate list endpoints.
* Avoid loading all records.
* Cache stable data where possible.
* Avoid repeated external API calls.
* Use background jobs later for slow tasks.
* Keep API responses small.
* Do not run heavy SEO audits on every page load.

Pagination example:

```txt
GET /api/leads?page=1&limit=20
```

Database indexes:

```sql
create index leads_business_id_idx on leads(business_id);
create index leads_created_at_idx on leads(created_at desc);
create index analytics_business_event_idx on analytics_events(business_id, event_name);
```

---

# 25. Background Jobs

Some tasks should not run inside normal user requests.

Move these to background jobs later:

```txt
SEO audit
Lighthouse scan
AI blog generation
bulk image optimization
Search Console sync
analytics aggregation
email reports
backup jobs
```

For MVP, run manually or scheduled lightly.

Later tools:

```txt
Vercel Cron
Supabase Edge Functions
Node cron
BullMQ
Cloudflare Workers
```

---

# 26. Webhook Rules

Webhook endpoints must:

* verify signature
* validate payload
* rate limit
* handle duplicate events
* use idempotency keys
* log important activity
* return quickly

Do not trust webhook payloads blindly.

---

# 27. Email Backend

Email may be used for:

```txt
lead notification
callback confirmation
admin alert
SEO report later
```

Rules:

* Send emails from backend only.
* Validate email addresses.
* Do not expose SMTP credentials.
* Rate limit email sending.
* Avoid sending private data unnecessarily.
* Use templates later.

---

# 28. Backup and Recovery

Even MVP should plan for backup.

Important data:

```txt
businesses
leads
messages
settings
seo_pages
connectors
audit_logs
uploads metadata
```

Rules:

* Use database backups.
* Export important data if needed.
* Do not rely only on local files.
* Keep migration history.
* Test restore process later.

---

# 29. Deployment Flexibility

The backend must not be locked to only Vercel.

It should support:

```txt
Vercel
Netlify
AWS
Azure
DigitalOcean
Hostinger VPS
Docker server
```

Rules:

* Use environment variables.
* Avoid provider-specific logic in core services.
* Keep storage provider abstracted.
* Keep AI provider abstracted.
* Keep email provider abstracted.
* Add Docker support later.

---

# 30. MVP Backend Scope

For first MVP, backend should include:

```txt
[ ] Contact/lead form API
[ ] Lead storage
[ ] Basic dashboard data API
[ ] Basic analytics event API
[ ] SEO score calculation logic
[ ] Safe validation
[ ] Safe error responses
[ ] Environment variable setup
[ ] Future-ready business_id structure
```

Do not add all connectors at once.

---

# 31. What Not To Build Yet

Do not build these in version 1:

```txt
Full payment system
Complex CRM
Full WhatsApp Business API
Full Google Business API
Multi-tenant billing
Drag-and-drop website builder
Advanced AI agents
Auto deployment engine
Complex permission UI
```

Build clean backend foundation first.

---

# 32. Backend Checklist Before Merge

```txt
[ ] Input validated with Zod
[ ] API response format is consistent
[ ] No raw database errors returned
[ ] No secrets exposed
[ ] business_id / tenant ownership checked
[ ] Auth checked if endpoint is private
[ ] Authorization checked if action is sensitive
[ ] Rate limit considered
[ ] Audit log considered
[ ] Database query is optimized
[ ] Sensitive data removed from response
[ ] Error handling added
[ ] No unnecessary dependency added
```

---

# 33. AI Coding Assistant Rules

When AI writes backend code, it must:

* follow BACKEND.md
* follow SECURITY.md
* keep API routes thin
* use service layer
* use validators
* never expose secrets
* never skip server-side validation
* never trust frontend data
* never return raw database objects
* always think about business_id isolation
* avoid provider lock-in
* keep future hosting flexibility

AI must not:

* hard-code API keys
* create unsafe SQL
* skip auth for admin routes
* store secrets in frontend
* expose stack traces
* install random backend packages
* create one huge route file
* mix UI logic with backend logic

````

Also create this shorter file:

```txt
BACKEND_CODING_PROMPT.md
````

Paste this:

```md
# BACKEND_CODING_PROMPT.md

Before writing backend code, read BACKEND.md and SECURITY.md.

Rules:
- Use Next.js API routes/server actions carefully.
- Keep API routes thin.
- Put business logic in lib/services.
- Put validation in lib/validators using Zod.
- Use consistent success/error responses.
- Never trust frontend input.
- Validate all body, query, params, and webhook data.
- Check authentication and authorization for private endpoints.
- Always enforce business_id/tenant isolation.
- Never expose secrets, stack traces, SQL errors, or raw database objects.
- Use environment variables for all secrets.
- Do not call AI providers from frontend.
- Do not hard-code provider-specific logic into core services.
- Keep database, storage, AI, email, and analytics provider-agnostic where possible.
- Add rate limit planning for forms, AI, uploads, analytics, and login.
- Write clean, optimized, secure backend code that can later run on Vercel, VPS, AWS, Azure, or Docker.
```

This will keep your backend clean before vibe coding creates messy API files.
