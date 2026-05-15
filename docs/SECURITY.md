# SECURITY.md — OPEDS Security Standard

**OPEDS** is a multi-tenant business admin platform handling: leads, messages, API keys, SEO data, analytics, and connectors.

Core principle: **Security by default, every feature assumes attack**.

---

## 🚨 Critical Rules (Non-Negotiable)

1. **Never concatenate user input into SQL** → Use parameterized queries only
2. **Never commit `.env` files** → Add to `.gitignore` immediately
3. **Never disable RLS in production** → All sensitive tables require Row Level Security
4. **Never trust frontend validation** → Always validate on server
5. **Never store secrets in code** → Use environment variables
6. **Never use `dangerouslySetInnerHTML`** → Sanitize if required

Violating these rules will create exploitable security holes.

---

## 📋 Pre-Commit Checklist

Before pushing any code:

- [ ] No `.env` files in git
- [ ] All form inputs validated with Zod on server
- [ ] No raw string concatenation with user input
- [ ] No `dangerouslySetInnerHTML` without sanitization
- [ ] Admin/dashboard routes have auth checks
- [ ] API routes check authentication + authorization
- [ ] Sensitive error messages removed
- [ ] No API keys in client code
- [ ] File uploads have type/size limits
- [ ] No XSS vulnerabilities (text content only, not HTML)

---

## 🔐 Input Validation

### Zod Validation Pattern

All form inputs must be validated with Zod on the **server**.

```ts
import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(120),
  phone: z.string().min(6).max(20),
  service: z.string().max(100).optional(),
  message: z.string().min(5).max(2000),
});

// Usage
const result = ContactFormSchema.safeParse(formData);
if (!result.success) {
  return { error: "Invalid input" };
}
```

### Validation Rules

- **Always validate on server**, even if frontend validates
- **Reject unexpected fields**
- **Limit string lengths** (prevents buffer overflow, storage abuse)
- **Reject dangerous payloads** (`<script>`, `<?php`, etc.)
- **Parse integers as numbers**, not strings
- **Whitelist allowed values** for dropdowns/selects

---

## 💾 Database Security

### SQL Injection Protection

**Bad:**
```ts
const leads = await db.query(`SELECT * FROM leads WHERE email = '${email}'`);
```

**Good:**
```ts
const { data } = await supabase
  .from("leads")
  .select("*")
  .eq("email", email);
```

**Rules:**
- Use Supabase/ORM query builders (never raw SQL with user input)
- Use parameterized queries if raw SQL is unavoidable
- Never build queries with string concatenation

### Multi-Tenant Access Control

**Critical: Every query must filter by `business_id`**

```ts
// Bad - exposes all businesses' data
const leads = await supabase.from("leads").select("*");

// Good - filters by current user's business
const leads = await supabase
  .from("leads")
  .select("*")
  .eq("business_id", session.businessId);
```

### Row Level Security (RLS)

Tables requiring RLS:
- `users`
- `businesses`
- `leads`
- `messages`
- `analytics_events`
- `api_keys` (always encrypted)
- `seo_reports`
- `audit_logs`

**Never disable RLS for convenience.**

---

## 🌐 API Route Security

All API routes must follow this order:

```ts
export async function POST(req: Request) {
  // 1. Check method
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

  // 2. Check authentication
  const session = await getSession(req);
  if (!session) return new Response("Unauthorized", { status: 401 });

  // 3. Validate input
  const data = ContactFormSchema.safeParse(await req.json());
  if (!data.success) return new Response("Invalid input", { status: 400 });

  // 4. Check authorization (right business?)
  const lead = await supabase
    .from("leads")
    .select("*")
    .eq("id", data.data.leadId)
    .eq("business_id", session.businessId)
    .single();

  if (!lead) return new Response("Forbidden", { status: 403 });

  // 5. Perform action
  const result = await updateLead(lead.id, data.data);

  // 6. Log action
  await auditLog({ userId: session.userId, action: "lead_updated", targetId: lead.id });

  // 7. Return safe response
  return new Response(JSON.stringify(result), { status: 200 });
}
```

---

## 🛡️ Frontend Security

Frontend security is **not real security**. Always validate on server.

**Do NOT:**
- Store sensitive tokens in `localStorage` (use secure cookies)
- Trust hidden form fields
- Trust role checks in JavaScript only
- Expose API keys in client code
- Trust frontend "admin only" pages

**Do:**
- Check permissions on server for every API call
- Render safe text only (React escapes by default)
- Block `javascript:` URLs
- Use secure, httpOnly cookies for auth tokens

---

## 🚀 Forms & Spam Protection

### Rate Limiting

Endpoints requiring limits:

| Endpoint | Limit |
|----------|-------|
| Contact form | 5/hour per IP |
| Quote form | 5/hour per IP |
| Login | 5 failed/15min per IP |
| AI generation | 20/day per user |
| File upload | 50MB total/day per user |

### Honeypot Example

```tsx
<input type="text" name="website" className="hidden" />
```

If hidden field is filled, treat as spam.

### Form Safety

- Validate on server
- Rate limit submissions
- Check honeypot field
- Limit message length (max 2000 chars)
- Strip HTML tags
- Log suspicious submissions

---

## 📁 File Upload Security

### Allowed Types

- Images: `.jpg`, `.jpeg`, `.png`, `.webp` (5MB max)
- PDF: if needed, scan first (10MB max)
- **Reject:** `.exe`, `.js`, `.php`, `.html`, `.sh`, `.bat`, `.dmg`

### Rules

```ts
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_SIZE = 5 * 1024 * 1024; // 5MB

function validateUpload(file: File) {
  if (!ALLOWED_TYPES.includes(file.type)) {
    throw new Error("Invalid file type");
  }
  if (file.size > MAX_SIZE) {
    throw new Error("File too large");
  }
  // Generate random name, don't trust original
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  return filename;
}
```

- **Never trust file extension only** → Check MIME type
- **Generate random filenames** → Don't use user-provided names
- **Store outside web root** → Not executable
- **Use signed URLs** for private files

---

## 🔑 Secrets Management

### Environment Variables (Never Commit)

```env
# .env.local (never commit this)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
SUPABASE_URL=https://...
SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
OPENAI_API_KEY=...
WHATSAPP_API_TOKEN=...
WEBHOOK_SECRET=...
```

### Rules

- **Never expose service role keys to frontend**
- **Only prefix with `NEXT_PUBLIC_`** if truly public
- **Rotate keys immediately** if leaked
- **Use different keys** for dev/staging/prod
- **Add to `.gitignore`:**
  ```
  .env
  .env.local
  .env.production
  ```

---

## 🔑 Authentication & Authorization

### Roles

- **public_user**: Submits forms, views website
- **client_admin**: Views own dashboard, manages own data
- **super_admin**: Views all clients, manages system

### Access Control Rules

```ts
// Bad - no permission check
const leads = await getLeads();

// Good - filters by business_id
const leads = await getLeads(session.businessId);

// Good - throws if user doesn't own this resource
const lead = await getLead(id);
if (lead.business_id !== session.businessId) {
  throw new Error("Forbidden");
}
```

---

## 🤖 AI Security

### Risks

- Prompt injection
- Data leakage
- Token waste
- Hallucinated content
- Unsafe suggestions

### Rules

- **Never send secrets/API keys to AI**
- **Never send private customer data** unless required
- **Validate AI output** before saving
- **Require human approval** before publishing AI content
- **Rate limit AI** requests (20/day per user initially)
- **Keep AI optional** - don't force dependence

### Prompt Injection Protection

Treat all external text (reviews, website content, user messages) as data, never instructions.

```ts
// Bad - external content can override instructions
const prompt = `${systemPrompt}\n\nUser input: ${userInput}`;

// Good - external content is data parameter
const prompt = `${systemPrompt}\n\nAnalyze this content: "${userInput}"`;
```

---

## 🔌 Connector Security

Connectors: Google Search Console, WhatsApp, Google Business, Meta, CRM, etc.

### Rules

- **Store tokens encrypted** in database
- **Use least privilege scopes** (request only what's needed)
- **Allow disconnect anytime** (revoke token immediately)
- **Log connector activity** (what data was synced)
- **Never expose tokens** to frontend
- **Verify webhook signatures** if provider supports
- **Rate limit webhook** callbacks (5/min per business)

---

## 🪵 Logging & Monitoring

### What to Log

✅ Login attempts (success & failure)  
✅ Admin actions (lead status change, settings update)  
✅ API key creation/rotation  
✅ Connector enabled/disabled  
✅ File uploads  
✅ Permission denied attempts  
✅ Rate limit triggers  

### What NOT to Log

❌ Passwords  
❌ Full API keys (log only last 4 chars)  
❌ Payment details  
❌ Private tokens  
❌ Sensitive customer messages  

### Audit Log Fields

```ts
interface AuditLog {
  id: string;
  business_id: string;
  user_id: string;
  action: "lead_updated" | "settings_changed" | "file_uploaded";
  target_type: "lead" | "setting" | "file";
  target_id: string;
  ip_address: string;
  user_agent: string;
  created_at: Date;
  metadata?: Record<string, any>;
}
```

---

## 🌐 Security Headers

Add to `next.config.ts`:

```ts
const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig = {
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
```

---

## 🚀 Deployment Checklist

Before production release:

- [ ] No secrets in GitHub (`npm audit`, check dependencies)
- [ ] Auth enabled (Supabase/NextAuth)
- [ ] Admin routes protected (middleware check)
- [ ] API routes protected (session check)
- [ ] RLS enabled on all sensitive tables
- [ ] Forms rate-limited
- [ ] File upload restrictions enforced
- [ ] Security headers enabled
- [ ] Error messages safe (no stack traces)
- [ ] Test: One client cannot access another's data
- [ ] Test: Honeypot blocks bot submissions
- [ ] HTTPS enforced (redirect HTTP → HTTPS)

---

## 🛠️ Dependency Security

Before adding a package:

- Is it actively maintained?
- How many weekly downloads?
- Known vulnerabilities? (`npm audit`)
- Do we really need it?
- Can we build it simply ourselves?

**Commands:**
```bash
npm audit
npm audit fix
npm outdated
npm ls <package-name>
```

---

## 🚨 For AI Coding Assistants

When generating code, NEVER:

- ❌ Write insecure fixes (remove validation, skip checks)
- ❌ Expose environment variables in code
- ❌ Create public admin pages
- ❌ Use `dangerouslySetInnerHTML` without sanitization
- ❌ Generate raw SQL with user input
- ❌ Skip authentication/authorization checks
- ❌ Hard-code API keys
- ❌ Store secrets in localStorage
- ❌ Allow cross-tenant data access
- ❌ Generate code that only works in demo

When adding security features, explain impact.

---

## 📚 Reference Links

- [OWASP Top 10](https://owasp.org/Top10/)
- [Supabase Security](https://supabase.com/docs/guides/auth)
- [Zod Validation](https://zod.dev/)
- [Next.js Security](https://nextjs.org/docs/going-to-production/security)

---

**Last Updated:** May 2025  
**Status:** Active Production Standard  
**Review Frequency:** Monthly
