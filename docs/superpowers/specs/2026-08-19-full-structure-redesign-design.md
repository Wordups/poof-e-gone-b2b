# Full Structural Redesign — Design

## Context

After the dark-palette repaint shipped, Brian tested the "Schedule Secure Pickup" CTA and found it
jarring: it link-outs from `poofegone.us` to `poof-e-gone.square.site` — a plain, unstyled page with
different branding, breaking the experience. That reaction escalated to wanting the site itself
restructured closer to the aivoicephone.com reference beyond just its color palette.

Three rounds of clarification landed on:

1. Booking should live on `poofegone.us/booking` (same domain, own URL) — not link out to Square,
   and not an inline embed buried mid-homepage either.
2. The redesign should adopt aivoicephone's actual section types — pill-shaped nav/buttons, a
   live-demo-style hero visual, a consolidated pricing table, an FAQ accordion.
3. For the two aivoicephone sections with no honest equivalent yet (testimonials, client-logo
   strip) — Brian explicitly chose placeholder/lorem content over skipping them, reversing the
   earlier "no fabricated trust signals" call from the GTM plan. This is a conscious, confirmed
   choice for this pass, not an oversight — placeholder content must be obviously fake (e.g.
   "Jane D., Placeholder Client" not a name that could pass as real) so it can't be mistaken for
   real testimonials if seen before being swapped out.

## Design

### 1. Nav + buttons → pill-shaped
`nav`, `.nav-cta`, `.btn-primary`, `.btn-secondary`, `.btn-ghost`, `#sticky-cta a.btn-primary` gain
large `border-radius` (999px / full pill). `.hero-vertical-pill` already reads as a pill — unchanged.

### 2. Hero demo mockup
A new card element in the hero, positioned alongside the headline on desktop (stacks below on
mobile), showing an animated sequence of status badges: "Pickup Confirmed" → "Device Logged" →
"Certificate Issued" — same interaction pattern as aivoicephone's call-transcript demo, but honest
to what Poof E Gone actually delivers. CSS-only animation (staggered fade/slide-in on a loop or on
scroll-into-view), no JS framework.

### 3. `/booking` page
New file `booking/index.html` (clean URL via GitHub Pages directory-index serving). Same nav/footer
chrome as `index.html`, dark theme, embeds the Square quote form via `<iframe>` pointing at
`https://poof-e-gone.square.site/get-my-quote#AriDHc`. Every CTA in `index.html` that currently
links to the Square URL directly is updated to link to `/booking/` instead (nav-cta, hero primary
button, AI-section button, compliance-box button, sticky-cta button).

### 4. Pricing table section
New section consolidating currently-scattered inline prices (PC Cleaning $75, Hardware Upgrades,
Virus Removal $99, AI Setup tiers, MDM retainer) into plan-card format, matching aivoicephone's
plan-card visual pattern. Placed after the AI section, before "Who We Serve".

### 5. FAQ accordion
New section reusing the existing `.expandable`/`.step-body` accordion CSS/JS pattern already proven
in "How It Works". Real questions only: service area, minimum device count, turnaround time, what's
included in a Certificate of Destruction, whether remote-only AI setup is available.

### 6. Testimonials + client-logo strip
Two new sections with obviously-placeholder content (fake names labeled as placeholder, generic
company-name placeholders for the logo strip) — confirmed choice, see Context above. Positioned
after the pricing table.

## Not changing
dental.html, law.html (still out of scope), the underlying dark/purple/cyan palette, the services
grid, clients grid, how-it-works steps, compliance/proof-card section — all keep their current
content, just adjusted where the pill-button style cascades in.
