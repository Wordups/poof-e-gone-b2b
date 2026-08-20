# GTM & Lead-Gen Plan V1

Condensed plan, sized for a solo operator. Not a funded-SaaS growth plan — no ARR/funding-stage
machinery, no paid-ads-first assumptions. Everything below is executable by Brian alone with
near-zero mandatory spend.

## 1. Where things stand

**Already built (don't duplicate):**
- V1 cold-outbound operator (`lead_outreach_operator_v1.md`) — audited, scored, human-approved
  outreach targeting dental practices, law firms, office move-outs, and IT partners in
  Baltimore/Towson/Howard County. Real-signals-only policy, no invented urgency.
- Site (`index.html`, mid-redesign per `docs/superpowers/specs/2026-08-19-index-redesign-design.md`)
  advertises **6** verticals: dental, law, medical offices, property managers, CPA firms, IT
  departments.

**Gap this plan addresses:**
- V1 outbound only covers **4 of the 6** verticals the site pitches. Medical offices and property
  managers currently get zero outbound. *(Open decision — see §7. Not expanding V1 scope
  unilaterally; that operator's own rules require Brian's explicit go-ahead.)*
- Nothing inbound exists yet. Every lead source right now is either outbound-initiated or
  organic/word-of-mouth with no structured capture.
- No mechanism to turn a narrow inbound ask ("I just need these drives destroyed") into the
  bundled visit the business is actually built to sell (data destruction + AI setup + MDM + PC
  cleaning in one trip — this is already the value prop on the site, just not operationalized in
  the sales conversation). Separate doc: `inbound_upsell_operator_v1.md`.

**Open item to confirm with Brian before Week 1 starts:** does a Google Business Profile or Yelp
listing already exist for Poof E Gone? If yes, this plan starts at "optimize," not "claim." If
unconfirmed, treat as unclaimed and verify first (claiming a listing someone else already created
under a slightly different business name is a common local-business trap).

## 2. Channels — inbound

Ranked by fit for a Baltimore B2B compliance/mobile-IT service, not by what's trendy.

| Channel | Priority | Cost | Why |
|---|---|---|---|
| Google Business Profile | **P0** | Free | Highest-leverage single local-search asset. Shows in Maps + "near me" search for every vertical the site targets. |
| Yelp (organic listing) | **P0** | Free | This is the channel that prompted this plan — proven to work for local service categories (your own tinting-shop experience). Claim, complete, respond to every review. |
| Nextdoor Business Page | **P1** | Free | Neighbor-to-neighbor trust fits a compliance/data-security pitch better than generic ad platforms. Free to set up. |
| NAID AAA Certification | **P1** | Paid (verify current cert status/cost with Brian) | This is the actual credibility marker in the data-destruction industry — more valuable to your ICP (dental/law/medical compliance buyers) than any generic directory. If not already certified, this outranks every other line item here for trust-building. |
| BBB Accreditation | **P2** | ~$400–600/yr (verify current pricing) | Compliance-minded B2B buyers (law, medical, CPA) check this. Lower priority than NAID for this specific ICP, but cheap enough to be worth it once NAID is settled. |
| Local Chamber of Commerce (Baltimore/Towson/Howard Co) | **P2** | Membership fee varies | Direct access to the exact business-owner audience the outbound operator already targets — a warm-intro channel outbound can't replicate. |
| Angi / Thumbtack / HomeAdvisor | **Skip for now** | — | These platforms skew residential/homeowner. Your ICP is B2B compliance buyers, not homeowners booking handyman work. Revisit only if PC-repair/consumer-side jobs become a real revenue line. |
| Yelp Ads (paid) | **Not yet** | ~$150–300/mo if tested | Only after the organic Yelp listing has real reviews and is converting. Paying to promote an empty, unreviewed listing wastes the spend. |

## 3. The review/referral loop

Every completed job, ask once for a Google review, once for a Yelp review — same ask, sent right
after the Certificate of Destruction is delivered (that's the natural high-trust moment in the
process, per the existing `how-it-works` step 4 on the site). One follow-up after 5 days if no
response, then stop. Don't ask twice per platform per customer — it reads as pressure and damages
the relationship you're trying to build with compliance-conscious clients.

Track: reviews requested / reviews received / average rating, per platform, monthly.

## 4. Activation — the "make it a project" motion

See `inbound_upsell_operator_v1.md` for the full script. Summary: every inbound lead — Yelp,
Google, text, or the Square quote form — gets 2–3 discovery questions before a price is quoted on
the narrow original ask, matching what the window-tinting shop did on your Yelp inquiry. This is
the single highest-leverage lever in this plan because it doesn't require a single new lead — it
raises average job value on leads you're already getting.

## 5. Outbound — closing the vertical gap

The site pitches medical offices and property managers as served verticals; V1 outbound doesn't
touch either. Per the V1 operator's own non-negotiable rules ("stay in V1 scope... do not expand
geography or lanes unless Brian explicitly instructs"), **this plan does not expand outbound scope
on its own.** Flagging as an open decision:

- Option A: extend the outbound operator to a V2 lane set (add medical offices, property
  managers) — same audit/score/approve discipline, same geography lock.
- Option B: leave outbound at 4 lanes, let inbound (§2) + the site itself carry medical/property
  manager acquisition for now, revisit V2 once inbound is proven.

## 6. 90-day roadmap

**Weeks 1–2 — Foundation**
- Confirm/claim Google Business Profile. Complete every field: categories (data destruction,
  IT services, computer repair), service area (Baltimore/Towson/Howard Co, matching outbound
  geography lock), hours, photos, the 6 verticals as services.
- Confirm/claim Yelp listing. Same completeness pass.
- Set up Nextdoor Business Page.
- Start the review-ask habit on every job closing out this period (§3).
- Put the upsell script (`inbound_upsell_operator_v1.md`) into live use — every inbound lead from
  this point forward gets the discovery questions.

**Weeks 3–4 — Credibility layer**
- Verify NAID AAA certification status; if not certified, get pricing/timeline from Brian.
- Apply for BBB accreditation.
- Look up Baltimore/Towson/Howard Co Chamber of Commerce membership options.
- Add a "How did you hear about us?" field to whatever intake the business already uses (matches
  the `lead_outreach_intake_template_v1.json` field-tracking discipline already established) so
  channel attribution starts from Week 3, not retroactively guessed later.

**Weeks 5–8 — Read the data**
- First real read on lead source mix (outbound vs. Yelp vs. Google vs. Nextdoor vs. referral).
- First real read on upsell-script hit rate: % of inbound leads where a bundled service was
  accepted vs. the single original ask.
- Decide, with real numbers, whether Yelp Ads is worth testing.

**Weeks 9–12 — Decide on scope**
- Revisit the V1→V2 outbound decision (§5) with 8 weeks of inbound data informing whether
  medical/property-manager coverage is worth adding to outbound or whether inbound is already
  reaching them.

## 7. Budget

No mandatory spend. Everything in Weeks 1–2 is free (GBP, Yelp, Nextdoor). Optional spend, in
priority order once cash flow supports it: NAID certification (verify cost with Brian) → BBB
accreditation (~$400–600/yr) → Chamber membership (varies) → Yelp Ads test (~$150–300/mo, only
after organic Yelp is proven). No recommendation to spend on paid search, social ads, or SaaS-style
directory/PR tactics (Product Hunt, G2, etc.) — wrong category entirely for a local compliance
service business.

## 8. Metrics to track (weekly)

- Leads/week by source (outbound, Yelp, Google, Nextdoor, referral, other)
- Quote-to-booked conversion rate
- **% of bookings with an upsell/bundle accepted** (the number that proves §4 is working)
- Review count + average rating, Google + Yelp
- Average job value, bundled vs. single-service

## 9. Explicitly not doing right now (and why)

- **Paid search / content SEO grind** — no bandwidth for a solo operator to sustain a content
  cadence; revisit once inbound channels are proven and there's a case for hiring it out.
- **Product Hunt / SaaS directories / G2 / dev-community tactics** — this is a local service
  business, not a software product. Wrong category, would waste effort.
- **Angi / Thumbtack / HomeAdvisor** — residential-skewed, doesn't match the B2B compliance ICP.
- **Broad social media content push** — deferred until the cheaper, higher-intent channels above
  are proven; social is a longer-cycle trust-building play that competes for the same limited time.

## 10. Open decisions for Brian

1. Does a Google Business Profile or Yelp listing already exist? (Determines claim vs. optimize.)
2. NAID AAA certification — current status, and is the cost/timeline worth pursuing now?
3. V1 → V2 outbound scope: add medical offices + property managers, or hold at 4 lanes?
4. BBB accreditation and Chamber membership — approve the spend, or skip for now?
