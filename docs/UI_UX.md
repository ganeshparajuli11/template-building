# UI_UX.md

## OPEDS UI/UX Standard for Melbourne PDS

This document defines the UI/UX direction for the Melbourne Plumbing and Drainage Solutions website and admin system.

Melbourne PDS is a plumbing service business. The website will be used by people from around age 20 to 70+. Some users may be young and mobile-first. Some may be older, stressed, or dealing with emergency plumbing problems. Because of this, the website must be modern, but it must not become confusing, tiny, or over-designed.

The goal is simple:

> Make it easy for any customer to trust the business, understand the services, and contact Melbourne PDS quickly.

---

# 1. UI/UX Mindset

This website is not only for looking beautiful.

It must help users:

- call quickly
- request a callback
- find the right service
- understand emergency availability
- check service areas
- trust the business
- read clearly on mobile
- use the site without confusion

A plumbing customer may be stressed because of a leak, blocked drain, burst pipe, or urgent repair. The design should reduce stress, not add more steps.

---

# 2. Target Users

The design must work for:

```txt
Young users: 20–35
Middle-age home owners: 35–60
Older users: 60–80+
Business/property managers
Emergency plumbing customers
Mobile phone users
Desktop users
````

Important UX point:

Older users may struggle with:

* small text
* low contrast
* hidden buttons
* complicated forms
* too many animations
* unclear navigation

So the website must be simple and readable.

---

# 3. Brand Constraint

The existing Melbourne PDS logo must not be changed.

The design must work around the existing logo colours:

```txt
Primary logo blue
Secondary logo green
Dark text
White background
```

We can improve the overall website design, spacing, layout, and visual hierarchy, but the logo itself should stay the same.

---

# 4. Design Direction

The website should feel:

* clean
* trustworthy
* modern
* local
* professional
* fast
* easy to use
* emergency-service ready

It should not feel:

* too dark
* too fancy
* too technical
* too crowded
* too animation-heavy
* too small
* too corporate with no personality

For plumbing services, trust and clarity matter more than fancy effects.

---

# 5. Colour Palette

The current brand already uses blue and green. We should build around that.

Recommended colour system:

```css
:root {
  --background: #ffffff;
  --foreground: #172033;

  --primary: #05aeea;
  --primary-dark: #0284c7;

  --secondary: #08c878;
  --secondary-dark: #059669;

  --accent: #f97316;
  --accent-dark: #ea580c;

  --muted: #f5f8fb;
  --muted-foreground: #5b6472;

  --border: #dbe4ee;
  --card: #ffffff;

  --danger: #dc2626;
  --success: #16a34a;
}
```

## Colour usage

### Blue

Use for:

* main CTAs
* navbar highlights
* phone buttons
* links
* dashboard primary actions

### Green

Use for:

* trust highlights
* positive messages
* plumbing/drainage brand accent
* success states

### Orange

Use only for urgent/emergency CTAs.

Example:

```txt
Emergency Plumbing 24/7
Urgent Call Now
Request Emergency Help
```

Do not overuse orange or it will feel noisy.

### White and light grey

Use for:

* background
* clean sections
* readability
* cards

### Dark navy

Use for:

* main headings
* body text
* footer
* contrast

---

# 6. Text Visibility Rules

Text must be readable for older users.

Minimum text rules:

```txt
Body text: 16px minimum
Important body text: 18px
Main heading mobile: 38–44px
Main heading desktop: 56–72px
Button text: 16–18px
Navbar text: 16px
Form input text: 16px minimum
```

Avoid very thin fonts.

Use:

```txt
font-weight: 400 for normal text
font-weight: 600 for important text
font-weight: 700/800 for headings
```

Do not use low contrast grey text for important content.

Bad:

```txt
light grey small text on white background
```

Good:

```txt
dark navy readable text on white background
```

---

# 7. Typography

Recommended font style:

* clean sans-serif
* easy to read
* not too decorative
* not too compressed

Good choices:

```txt
Inter
Poppins
Nunito Sans
DM Sans
```

For Melbourne PDS, Poppins or Inter works well because the current website already has a friendly modern look.

Rules:

* use maximum 2 font families
* avoid very thin font weights
* keep line height comfortable
* avoid long paragraphs
* use bullets/cards for service information
* break content into sections

Recommended line height:

```txt
Headings: 1.05–1.15
Body: 1.55–1.7
```

---

# 8. Layout Principles

Every page should follow this order:

```txt
1. Clear headline
2. Main CTA
3. Trust proof
4. Services
5. Why choose us
6. Reviews/testimonials
7. Service areas
8. FAQ
9. Final CTA
```

Emergency users should not need to scroll too far to contact.

Above the fold must include:

* logo
* phone button
* emergency message
* service headline
* callback/quote CTA
* trust signal

---

# 9. Header UX

The header must be simple and sticky.

Desktop header:

```txt
Logo | Home | Services | About | Locations | Contact | Call Button
```

Mobile header:

```txt
Logo | Call Button | Menu Icon
```

Mobile should also have a sticky bottom action bar:

```txt
Call Now | WhatsApp | Request Callback
```

This is important for emergency service users.

---

# 10. CTA Rules

Primary CTAs:

```txt
Call 0431 234 185
Request a Callback
Get a Plumbing Quote
```

Emergency CTA:

```txt
Emergency Plumbing 24/7
Call Now
```

CTA design rules:

* large enough to tap
* clear label
* high contrast
* visible above fold
* repeated after major sections
* not too many different CTA styles

Minimum button height:

```txt
44px mobile
48px preferred
```

Do not use tiny buttons for important actions.

---

# 11. Homepage Hero UX

The hero is the most important section.

It should answer quickly:

```txt
Who are they?
What do they do?
Where do they serve?
How do I contact them?
Can I trust them?
```

Hero should include:

* strong headline
* Melbourne plumbing/drainage keyword
* emergency availability
* phone CTA
* callback CTA
* trust badges
* clean image or background
* form visible but not too heavy

Recommended headline:

```txt
Melbourne Plumbing and Drainage You Can Count On
```

Keep the brand message, but make it cleaner.

Avoid:

* too much text
* dark overlay blocking image
* form that feels too heavy
* tiny form fields
* unclear CTA

---

# 12. Form UX

Forms must be simple.

Recommended callback form fields:

```txt
First name
Phone number
Service needed
Suburb
Message optional
```

Do not make the first form too long.

Rules:

* large input fields
* clear labels
* readable placeholders
* error messages below fields
* mobile full-width inputs
* success confirmation
* loading state
* privacy note

Example privacy note:

```txt
We only use your details to respond to your plumbing request.
```

Older users should clearly understand what happens after submitting.

---

# 13. Service Cards

Service cards should be easy to scan.

Each card should include:

* icon
* service name
* 1–2 line description
* link to learn more
* emergency badge if relevant

Examples:

```txt
Emergency Plumbing
Blocked Drains
Hot Water Repairs
Leak Detection
Toilet Repairs
Gas Plumbing
Drainage Solutions
Commercial Plumbing
```

Cards should not have too much text.

---

# 14. Location UX

Plumbing is local-service based, so locations matter.

The website should show:

* Melbourne-wide service
* suburb/service area list
* map section
* location pages later

Location section should be simple:

```txt
Servicing Melbourne and surrounding suburbs
```

Then show popular areas in clean chips/cards.

---

# 15. Reviews and Trust UX

Trust is very important.

Use:

* Google review style cards
* star rating
* real customer names only if available
* short review highlights
* licensed/insured badge if true
* emergency availability
* years of experience if true

Do not create fake reviews.

Trust elements should appear:

* near hero
* near form
* before final CTA

---

# 16. Visual Style

Recommended style:

```txt
Rounded cards
Soft shadows
Clean spacing
White/light sections
Blue-green gradient accents
Large CTA buttons
Readable headings
Minimal icon use
Professional service images
```

Avoid:

```txt
too many gradients
tiny icons
busy backgrounds
overlapping text
low contrast
too many animations
dark grey overlays blocking readability
```

---

# 17. Image Rules

Images should support trust.

Use images like:

* plumber working
* service van
* pipe/drain repair
* friendly technician
* clean tools
* Melbourne local feel

Rules:

* use optimized `.webp`
* use Next.js Image
* always add alt text
* do not stretch logo
* do not place important text over busy image
* use overlays only when text stays readable

Logo rules:

* keep aspect ratio
* do not recolour logo
* do not distort logo
* keep enough whitespace around logo

---

# 18. Accessibility UX

The website must be usable by older users and people with accessibility needs.

Rules:

* strong contrast
* readable font size
* keyboard focus states
* visible links
* labelled form fields
* clear error messages
* no text hidden only in images
* avoid flashing animation
* avoid motion that affects reading
* buttons must look clickable

Minimum contrast:

```txt
Normal text should be dark on light background
CTA text should be white on strong blue/dark background
```

---

# 19. Mobile UX

Mobile is the most important device.

Mobile must include:

* fast load
* visible call button
* sticky bottom CTA
* readable text
* simple nav
* easy form
* no horizontal scroll
* clear service cards
* spacing between tap targets

Mobile page order:

```txt
Hero
Call/Callback CTA
Trust badges
Services
Emergency message
Reviews
Locations
FAQ
Final CTA
```

Do not hide important contact actions inside menus.

---

# 20. Desktop UX

Desktop should feel more premium.

Use:

* wide layout
* strong hero
* callback form card
* service grid
* trust bar
* dashboard-style sections if needed
* clean spacing

Desktop should not waste space, but it can feel more visual.

---

# 21. Animation UX

Animations should be light.

Allowed:

* fade in
* small slide up
* button hover
* card hover
* smooth section reveal
* soft parallax background

Avoid:

* spinning
* shaking
* heavy parallax everywhere
* animations delaying CTA
* animated text that hurts reading
* too many moving items

For plumbing customers, speed and clarity are more important than entertainment.

---

# 22. Dashboard UI/UX

The admin dashboard must be simple for non-technical business owners.

Dashboard should show:

```txt
Today’s Leads
Missed Calls / Call Clicks
WhatsApp Clicks
SEO Score
Website Visits
Top Services
Recent Enquiries
Website Health
Connector Status
```

Dashboard design should use:

* clear cards
* plain labels
* simple charts
* green for good
* orange for warning
* red for issues
* short improvement suggestions

Avoid technical language like:

```txt
CTR anomaly
canonical metadata issue
schema validation failure
```

Use simple language:

```txt
Your contact page needs a better description for Google.
```

---

# 23. SEO UX

SEO should not only be hidden in code. It should guide the business owner.

Dashboard should show:

```txt
SEO Score: 82/100
Good:
- Page title added
- Mobile layout good
- Services listed clearly

Needs work:
- Add alt text to 3 images
- Add more suburb keywords
- Add FAQ section to blocked drains page
```

This makes SEO understandable.

---

# 24. Tone of Website Copy

Website copy should be:

* clear
* friendly
* confident
* local
* not too corporate
* not too childish

Good:

```txt
Need a plumber fast? Melbourne PDS can help with urgent plumbing and drainage problems across Melbourne.
```

Avoid:

```txt
We leverage innovative plumbing solutions to optimize your residential infrastructure.
```

Customers need simple language.

---

# 25. Error and Empty State UX

Forms and dashboard should handle errors clearly.

Bad:

```txt
Error 500
```

Good:

```txt
Something went wrong. Please try again or call us directly.
```

Dashboard empty state:

```txt
No leads yet. Once customers submit the callback form, they will appear here.
```

---

# 26. UX Checklist Before Building

Before designing a section, check:

```txt
[ ] Is the main action clear?
[ ] Can an older user read this easily?
[ ] Is the text large enough?
[ ] Is the colour contrast strong?
[ ] Does this work on mobile?
[ ] Is the form simple?
[ ] Is the phone CTA easy to find?
[ ] Is this section useful or just decorative?
[ ] Does it build trust?
[ ] Does it help the user contact Melbourne PDS?
```

---

# 27. UI Checklist Before Page Is Done

```txt
[ ] Logo is clear and not distorted
[ ] Main phone CTA visible
[ ] Mobile call button visible
[ ] Text readable on phone
[ ] One clear H1
[ ] Buttons have strong contrast
[ ] Forms are easy to use
[ ] Service cards are scannable
[ ] Reviews/trust section present
[ ] Locations section present
[ ] Emergency availability visible
[ ] No clutter above fold
[ ] No tiny grey text for key content
[ ] No horizontal scroll
[ ] Page feels modern but simple
```

---

# 28. Final UI/UX Rule

If there is a choice between:

```txt
modern but confusing
```

and

```txt
simple but clear
```

choose clear.

If there is a choice between:

```txt
beautiful but hard to read
```

and

```txt
clean and readable
```

choose readable.

For Melbourne PDS, the best UI is the one that helps a stressed customer call or request help quickly.

````

Also create this short file:

```txt
UI_UX_CODING_PROMPT.md
````

Paste this:

```md
# UI_UX_CODING_PROMPT.md

Before creating UI for Melbourne PDS, read UI_UX.md.

Rules:
- Keep the existing Melbourne PDS logo unchanged.
- Use the brand blue and green as the main palette.
- Use orange only for emergency/urgent actions.
- Design for users aged 20 to 80+.
- Use large readable text.
- Avoid tiny low-contrast grey text.
- Make phone, WhatsApp, and callback actions very easy to find.
- Use mobile-first layout.
- Add sticky mobile CTA for Call, WhatsApp, and Callback.
- Keep forms short and simple.
- Use clean white/light backgrounds with strong contrast.
- Use modern cards, spacing, and soft shadows.
- Keep animations subtle and lightweight.
- Do not make the page too fancy or confusing.
- Trust, speed, readability, and contact flow are more important than decoration.
```
