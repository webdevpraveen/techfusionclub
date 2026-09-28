# Update log — events rebuild, motion layer, in-page calendar

**Range:** `e1d94a6` (state before this work) → `46e5068` (`main`, pushed) → `refactor/events-drop-rail-and-hero`
**Commits:** `c585ab8` events rebuild + motion layer · `6fc8cb3` nav overflow fix · `69e4fb4` scroll text-loading · `46e5068` in-page calendar + navbar revert · `2df342c` scroll-rail + hero removal (§8, §9) · the boot-splash removal (§10)
**Date:** 2026-09-25

Line numbers below refer to the files **as committed in `46e5068`**, not to the old file. Three changes sit on top of that commit and are committed on the branch above — the scroll-progress bar removal (§8), the events hero removal (§9) and the boot-splash removal (§10); the §2 line numbers account for §8, the `events.index.tsx` citations account for §8 and §9, and §10 lists its own deletions.

---

## 1. File inventory

| File | Status | What happened |
| --- | --- | --- |
| `src/components/site/EventCalendar.tsx` | **new** (432 lines) | In-page month grid, Google-Calendar-style |
| `src/components/site/RiseText.tsx` | **new** | Word-by-word scroll rise |
| `src/components/site/FloatButton.tsx` | **new** | CTA with cursor glow + lift-off sparks |
| `src/components/site/EventSpotlight.tsx` | **new** (167) | Next-event hero card, corner frame, click → brief |
| `src/components/site/PageIntro.tsx` | **new** (72) → deleted (§10) | Boot-sequence intro (progress bar + caret) |
| `src/components/site/ScrollWords.tsx` | **new** (71) | Words that light up with scroll position |
| `src/components/site/SmartImage.tsx` | **new** (66) | Lazy/aspect-safe image |
| `src/components/site/Countdown.tsx` | **new** (63) | Live `D/H/M/S` countdown |
| `src/components/site/SplitText.tsx` | **new** (47) | Masked split-in title |
| `src/components/site/Marquee.tsx` | **new** (37) | Infinite ticker (needs two identical children) |
| `src/styles.css` | modified | 560 added / 11 removed — the motion layer (§2) |
| `src/lib/motion.ts` | modified | `useTiltGlow` (147), `useParallax` (209) |
| `src/routes/events.index.tsx` | modified | Rebuilt; calendar section at 445–454 (hero since removed, §9) |
| `src/components/site/EventModal.tsx` | modified | Full brief dialog + focus contract (§4) |
| `src/components/site/EventCard.tsx` | modified | Hover float, cursor glow, click → modal |
| `src/components/site/Section.tsx` | modified | `SectionHeading` animates site-wide (6–59) |
| `src/components/site/CTABanner.tsx` | modified | `RiseText` title (4, 23) |
| `src/routes/__root.tsx` | modified | Font-loading fix (§5) |
| `src/data/events.ts` | modified | Derived exports (244–298) |
| `src/components/site/Nav.tsx` | modified → **reverted** | Net zero; identical to `e1d94a6` |

> Correction to what I said earlier in chat: `Countdown`, `EventSpotlight`, `FloatButton`, `Marquee`, `PageIntro`, `RiseText`, `ScrollWords`, `SmartImage` and `SplitText` are all **new files**, not edits of pre-existing components. Only `EventCard`, `EventModal`, `Section`, `CTABanner`, `Nav`, `styles.css`, `motion.ts`, `events.ts`, `__root.tsx` and `events.index.tsx` were modified. A tenth new file, `ScrollRail.tsx`, was created and then deleted again (§8), and `PageIntro.tsx` was deleted too (§10).

---

## 2. `src/styles.css` — shared motion layer

This is the file with the most cross-page effect, so it gets line-level detail.

| Lines | Added | Used by |
| --- | --- | --- |
| 182–186 | `html { scrollbar-gutter: stable }` with the why-comment | Stops the fixed nav jumping 15px when a modal locks scroll |
| 390, 397 | `marquee-track`, `mask-fade-x` | `Marquee` |
| 403, 407 | `tilt-scene`, `tilt-card` | `useTiltGlow` |
| 417, 422 | `ken-burns`, `shimmer` | Spotlight image, skeleton text |
| 437, 445, 455 | `split-word-mask`, `split-word`, `lit-word` (+ `.lit-word.is-lit`) | `SplitText`, `ScrollWords` |
| 470, 474, 478 | `animate-pop-in`, `animate-fade-in`, `sheen-hover` | Dialog, calendar day panel, CTAs |
| 498–618 | `@keyframes fusion-marquee` 498 · `-kenburns` 507 · `-shimmer` 516 · `-pop-in` 522 · `-fade-in` 533 · `-drift` 542 · `-scrub-rise` 557 · `-scrub-line` 568 · `-boot-bar` 577 · `-caret` 586 · `-tick` 601, plus utilities `animate-boot-bar` 597, `animate-tick` 612, `animate-caret` 616 | `PageIntro`, `Countdown`, scroll reveals — the `-boot-bar` / `-caret` pair and their utilities went again in §10 |
| 777, 781 | `animate-drift`, `animate-float-slow` | Empty state, decorative orbs |
| 787, 793, 800 | `@property --aurora-angle`, `fusion-aurora-spin`, `aurora-sweep` | Events hero backdrop (registered angle so the conic gradient can rotate) |
| 816, 823 | `fusion-grid-move`, `grid-scroll` | Events hero grid |
| 841, 856, 872, 877 | `fusion-mote-drift`, `mote-field`, `grain-overlay`, `hero-fade-b` | Hero backdrop depth |
| 883 | `rise-word` (+ `.rise.is-visible .rise-word`) | `RiseText` |
| 904, 914, 926 | `float-motes`, `float-mote`, `fusion-mote-lift` (scoped under `.group:hover`) | `FloatButton` sparks — CSS-only, hover-gated, so nothing animates on touch |
| 951, 978 | `corner-frame`, `corner-bracket` | Spotlight in-box moving corner line |
| 987, 994 | `hover-float` + `@media (hover: hover) and (pointer: fine)` wrapper | Cards, filter chips |
| 1003, 1016 | `fusion-scrub-fade`, `fusion-scrub-out` | Scroll-driven reveals |
| 1024–1051 | `@supports (animation-timeline: view())` block → `.scrub-rise` 1026, `.scrub-line` 1032, `.scrub-fade` 1039, `.scrub-out` 1045 | Native scroll-driven animation as progressive enhancement — no library, no JS state |
| 1053–1112 | Additions inside `@media (prefers-reduced-motion: reduce)`: `.reveal`/`.lit-word`, `.split-word`, `.rise-word`, `.scrub-rise/.scrub-line/.scrub-fade/.scrub-out` (1085–1088), `.aurora-sweep`/`.grid-scroll`/`.mote-field`, `.float-mote`/`.corner-frame::before`, `.hover-float:hover` | Mandatory neutralisation of every new effect |

Also in this file, **cosmetic only** — no value changed: the Prettier reflow of `--gradient-hero` (113–115) and `--shadow-accent-glow` (133–135), and three stray blank-line removals (12, 218, 368).

Two rules the layer follows, both already project conventions: **no hardcoded colors** (every token comes from `--color-*`, using `color-mix(in oklab, …)` where a tint is needed) and **no animation libraries** (keyframes + IntersectionObserver + rAF writing CSS custom properties).

---

## 3. `src/components/site/EventCalendar.tsx` (new)

- **Date handling:** event dates are plain `YYYY-MM-DD`, so they are sliced (`partsOf`, line 28) rather than read back through `new Date(iso)` — that lands on the previous day west of UTC.
- **Multi-day events** expand to every day they touch (`byCalendarDay`, 43), so a 3-day fest appears on all three dates and still counts once in the month tally (`countInMonth`, 61).
- **Whole-week grid** (line 125): the grid starts on the Sunday before the 1st and fills the neighbouring month's edges, so September 2026 renders Aug 30–31 and Oct 1–3 at `opacity-55` instead of blanks.
- **Filter re-sync** (105–122): gated on a signature of the filtered slug set, *not* on `events` identity. The parent re-renders on every countdown tick with a fresh array; depending on identity snapped the grid back whenever you paged into a quiet month or pressed *Today*.
- **Interaction:** a chip click opens that event's brief; a day holding exactly one event opens it directly from the day number; more than one reveals the day list under the grid (`pick`, line 152).
- Cells use `bg-primary/12`, `bg-accent/15`, `text-primary-glow` tokens — nothing hardcoded.

---

## 4. `src/components/site/EventModal.tsx` — the focus contract

Three effects replaced one that was doing too much:

1. **Scroll lock + opener capture** keyed on open/closed only. Capturing `document.activeElement` here, above the focus effect, is what makes restore work; keying it on `isOpen` alone stops a countdown re-render from yanking focus back.
2. **Reset on slug change** — screenshot index, panel scroll to top, focus the close button.
3. **Keyboard handler** — Escape closes, ←/→ step between events, and Tab is trapped explicitly. The dialog renders inside `<main>`, so the background cannot be made `inert` without inerting the dialog itself; `aria-modal` alone does not cage Tab.

---

## 5. `src/routes/__root.tsx` — font loading

`<link rel="stylesheet" media="print" onLoad="this.media='all'">` (with a `// @ts-ignore`) plus a `<noscript>` fallback replaced by one plain stylesheet `<link>` at line 154. The trick cannot work in JSX: `onLoad="this.media='all'"` passes a **string** where React expects a function, so React warns and never invokes it, the `media` attribute stays `print`, and the sheet never applies on screen — Space Grotesk / DM Sans / JetBrains Mono only ever arrived through the `<noscript>` copy, i.e. for users with JavaScript off. The `// @ts-ignore` was suppressing exactly the type error that would have caught this. Confirmed fixed by computed style: `body` now resolves to `"DM Sans", ui-sans-serif, system-ui` and `document.fonts.check()` is true for all three families.

The diff in this file is now **3 added / 12 removed lines and nothing else** — every SEO `meta`, `og:` and JSON-LD line is byte-identical to upstream. An earlier version of this branch also carried Prettier's re-wrapping of those long strings; that was reverted, because reflowing the maintainer's SEO block inside an events PR is churn with no benefit and makes the file look like it touches SEO when it does not. The `<main>` offset is `pt-16 sm:pt-20` (line 184), matching upstream.

One thing I did **not** change, though it is redundant: the page ends up requesting the Google Fonts sheet twice — once from the route's `links` head config and once from the JSX `<link>`. That duplication is present upstream as well, so it is theirs to decide on, not something to slip into this PR.

---

## 6. Navbar: added, then fully rolled back

`6fc8cb3` made the header a floating pill, but the condensed pill needed ~1041px of link row in a 952px header at 1024px, so labels wrapped out of the bar on scroll. Per your call to undo **all** navbar changes, `46e5068` restores `Nav.tsx` byte-for-byte to `e1d94a6`, brings back `pt-16 sm:pt-20` on `<main>`, and moves the sticky filter bar to `top-16 sm:top-20` so it sits flush under the header. Net effect on the navbar: zero. The `scrollbar-gutter: stable` rule (§2) stays — it fixes a modal bug, not a nav one.

---

## 7. Verification

Typecheck: only the 6 pre-existing baseline errors (`Nav.tsx` 65/68/134/137, `data/alumni.ts` 14, `routes/index.tsx` 114). Four of them sitting at the original `Nav.tsx` line numbers is itself evidence the revert was exact. Build: passes (`✓ built in 851ms`).

Verified against `http://localhost:3000/events` through CSSOM/DOM: calendar renders in-page at `#calendar` with no view toggle; 35 day cells + 7 weekday headers for September 2026; 2 busy days with 2 chips; 5 muted edge cells; today's number gets a filled circle; chip click → dialog "Smart India Hackathon (SIH) …"; day-number click on a one-event day → same dialog with no intermediate list; close restores focus to the exact day button and unlocks scroll; Next → October 2026 "0 events this month" and it stays; *Today* → back to September 2026; Grid/Timeline toggles both still work (timeline: 6 rows under 3 year headers).

**Not verified:** no screenshots were possible — the in-app browser surface reported `visibilityState: hidden` / `NATIVE_BROWSER_VIEWPORT_UNAVAILABLE` all session, and IntersectionObserver never fires there, so the reveals are proven by cascade inspection only, never observed playing. No day in the current dataset holds two events, so the "+n more" day-list path is dormant. Key visual checks still owed by a human: the calendar box's appearance, dark mode, and narrow viewports.

**Not committed by choice:** `.vercel/` build output, `package-lock.json` churn, and `src/routeTree.gen.ts` (auto-generated; line-ending diff only).

---

## 8. Removed after `46e5068` — the scroll-progress bar

Uncommitted as of writing. Four things taken out, in the order a browser would meet them:

| Where | Removed |
| --- | --- |
| `src/routes/events.index.tsx` | `<ScrollRail />` from the page root (was 213) and its import (was 43) |
| `src/components/site/ScrollRail.tsx` | file deleted — nothing else referenced it |
| `src/lib/motion.ts` | `useScrollProgress`, which wrote `--scroll-progress` on `<html>` via rAF |
| `src/styles.css` | `@utility scroll-rail` and `@utility scroll-rail-fill`, plus the comment above them (19 lines) |

**Not touched here:** the `PageIntro` boot overlay outlived this deletion by one more commit — it and the progress bar inside it are removed in §10, not §8. `grep` confirms zero remaining references to `ScrollRail`, `scroll-rail` or `--scroll-progress`.

All §2 line numbers already account for this deletion: the `@supports` block ends at 1051 rather than 1070, and the reduced-motion block starts at 1053 rather than 1072.

---

## 9. Removed after `46e5068` — the events hero

The whole hero `<section>` (was 213–295 in `src/routes/events.index.tsx`) is gone: the backdrop stack, the eyebrow row, the `SplitText` headline, both `RiseText` paragraphs, the Browse/Register CTA row with the `Countdown`, and the four-`StatCounter` strip. `/events` now opens on the domain ticker, then Headlining → Catalogue → Calendar → Runbook → CTA.

- Five imports became unused and were removed: `SplitText`, `StatCounter`, `Countdown`, and the `ArrowDown` + `Sparkles` icons.
- The hero held the page's **only `<h1>`**, so the catalogue heading was promoted `h2` → `h1` (identical classes, Tailwind preflight means no visual change). Quirk left behind: the spotlight's event title is still an `h2` and appears *before* that `h1` in the DOM. Say so if you want it demoted to `h3`.
- `#catalogue` still carries `scroll-mt-24` even though the hero CTA that targeted it is gone; harmless for deep links.

**Now defined but referenced nowhere** — not deleted, pending your call: `aurora-sweep`, `grid-scroll`, `mote-field`, `grain-overlay`, `hero-fade-b`, `animate-float-slow` and `scrub-out` in `styles.css` (each also still listed in the reduced-motion / `@supports` blocks), and the `src/components/site/SplitText.tsx` component itself. `StatCounter` and `Countdown` stay live — the home page and the spotlight still use them.

---

## 10. Removed after `2df342c` — the boot splash

`/events` no longer paints a full-screen "initialising" overlay before the page. First paint is now the nav and the domain ticker; nothing gates the page on a timer, and the reduced-motion branch of that component is moot since the component is gone.

| Where | Removed |
| --- | --- |
| `src/routes/events.index.tsx` | `<PageIntro />` from the page root (was 206) and its import (was 37) |
| `src/components/site/PageIntro.tsx` | file deleted (72 lines) — `BOOT_LINES`, the 900 ms hold / 520 ms fade timers, the logo, the boot bar and the status caret |
| `src/styles.css` | `@keyframes fusion-boot-bar` + `@keyframes fusion-caret` and the `animate-boot-bar` + `animate-caret` utilities (28 lines) |

**Still here, and still called "loaders":** the `shimmer` skeleton `SmartImage` shows while a cover fetches, and the TanStack `loader:` functions that fetch event data — both invisible-by-design and untouched. `hero-gradient`, `circuit-lines`, `animate-float` and `eyebrow` all survived because other components still reference them; `animate-caret-blink` in `src/components/ui/input-otp.tsx` is an unrelated shadcn leftover that was never defined in this repo's CSS.

**Verified:** served HTML for `/events` contains zero `boot-bar` / `resolving calendar records` strings and one `scrub-rise` ticker; a headless capture at 2.5 s shows the nav + ticker + spotlight with no overlay; `npx tsc --noEmit` is unchanged at the same 6 pre-existing errors; `npm run build` passes.

---

## 11. Removed after `5b2ca07` — ticker, Headlining label, cover pills and meta lines

Pointed out from phone screenshots: five small elements were either noise or clipped outright at narrow widths. All five are gone, and `/events` now opens directly on the spotlight card.

| Where | Removed |
| --- | --- |
| `src/routes/events.index.tsx` | The domain ticker block (the `Marquee` of `allEventDomains` + `eventCategories`) and the `Reveal` row holding the `Flame` icon + "Headlining" eyebrow; `Marquee` and `allEventDomains` imports dropped |
| `src/components/site/EventSpotlight.tsx` | The `Next up` + category pill row on the cover, the `relativeEventLabel` eyebrow above the title, and the `{attendees} seats` span in the meta row; `Sparkles` / `Users` / `relativeEventLabel` imports dropped |
| `src/components/site/Marquee.tsx` | File deleted — the ticker was its only consumer |
| `src/styles.css` | `@utility marquee-track`, `@utility mask-fade-x` and `@keyframes fusion-marquee` (23 lines), all unreferenced once the ticker went |

`relativeEventLabel` itself stays in `src/data/events.ts` — `EventCard` and `EventModal` still call it. `Flame` and `Users` stay imported in `events.index.tsx`; both are still used by the closing stat row.

**Verified:** DOM assertions on `/events` confirm no `.marquee-track`, no "Headlining" text, no "Next up" pill, no "weeks" or "seats" string inside the spotlight, one `<h1>`, and `#catalogue` + `#calendar` intact; `scrollWidth === clientWidth` at 1107 px. `tsc` still at the 6-error baseline and `npm run build` passes.

**Header:** the overflow note that used to sit here was wrong on both counts — see §12.

---

## 12. `src/components/site/Nav.tsx` — narrow viewports, fixed

**The earlier claim was wrong twice over.** It said the header needed ~440 px at 390 px and scrolled sideways, because logo + theme toggle + "Join the Club" + hamburger could not fit. Neither part holds. "Join the Club" is `hidden … sm:inline-flex`, so below 640 px it is not in the row at all, and the 390 px capture that motivated the claim came from a DPI-scaled headless window — roughly 312 CSS px, not 390. `documentElement.scrollWidth` was never the right instrument either: the header is `fixed`, and a fixed box overflowing its own width does not extend document scroll.

**What is actually broken:** below 360 px the "TECH FUSION" wordmark wraps onto two lines. Measured at a 280 px viewport (265 px after the scrollbar) the wordmark box was 56 px tall across 2 lines, so the logo link stood 66 px inside the 64 px `h-16` bar and poked past it. Row edges still fit — logo group 161 px, right group ending at 285 of 305 at 320 px — so this is a vertical burst, not a horizontal scroll.

**Change:** the nav row goes `px-5` → `px-4 sm:px-8` and `gap-4` → `gap-2 sm:gap-4`, and four `max-[360px]:` guards are added — `h-9` on the logo mark, `text-base tracking-wide whitespace-nowrap` on the wordmark, `tracking-[0.25em]` on "CLUB", `gap-2` on the logo link. `whitespace-nowrap` is what kills the two-line burst; the size guards buy back the width it costs.

**Verified** in a same-origin iframe at the real CSS widths — the only reliable path here, since the in-app browser cannot resize and headless captures lie about DPI:

| Viewport | Wordmark | Logo link | Right edge vs client width |
| --- | --- | --- | --- |
| 280 px | 102 × 24, one line | 36 px | 249 of 265 |
| 320 px | 102 × 24, one line | 36 px | 289 of 305 |
| 390 px | 133 × 28, one line | 40 px | 359 of 375 |

At 390 px the numbers match the pre-change ones exactly (wordmark 133 px wide, group 185 px). Tailwind v4 compiles `max-[360px]:` as a strict `width < 360px`, so phones at 360 px and up are untouched, which is the point: nothing about the current design changes where anyone actually looks at it. `tsc` is still at the 6-error baseline — the four `Nav.tsx` errors moved to 69/72/138/141 purely because the `<Link>` opening tag spans more lines now, and they are the same pre-existing `link.href` ones. Build passes.

**Scope:** this file is deliberately **not** in `pr/events-page-refresh`. That branch stays page-scoped so it reads as an events-only change; the header fix is a separate concern and can be its own one-file PR if you want it upstream.

---

## 13. Dead-code sweep before the PR went up for review

Removing the hero, the splash, the scroll rail and the ticker (§§8–11) orphaned code that nothing referenced any more. It was still shipping in the PR diff, so a reviewer would have been reading ~200 lines of CSS with no consumer.

**Deleted:**

| What | Why it was dead |
| --- | --- |
| `src/components/site/SplitText.tsx` (47 lines) | Its only consumer was the events hero headline, removed in `2df342c`. Nothing imported it afterwards |
| `@utility split-word-mask`, `@utility split-word`, `.split.is-visible .split-word`, and the `.split-word` reduced-motion entry | SplitText was the sole user of all four |
| The whole "Hero backdrop layers" section: `@property --aurora-angle`, `@keyframes fusion-aurora-spin`, `aurora-sweep`, `fusion-grid-move`, `grid-scroll`, `fusion-mote-drift`, `mote-field`, `grain-overlay`, `hero-fade-b` | Built for the hero's aurora wash, scrolling grid and speck field — all removed with it |
| `@utility animate-float-slow` | Only the hero orbs used it |
| `.scrub-out` (both the `@supports` rule and its reduced-motion entry) and `@keyframes fusion-scrub-out` | The scroll-exit effect had no element left to apply it to |

`src/styles.css` went from 1062 to 911 lines. `RiseText.tsx` also lost a doc comment that explained itself by contrasting with `SplitText` — a reference to a file that no longer exists.

**Deliberately kept**, because the names are close enough to the deleted ones to be worth stating explicitly: `@keyframes fusion-float` (still used by `animate-float` in `HeroBackground`, `HeroShowcase` and `events.index.tsx` — only the *`-slow`* wrapper went); `animate-drift` (`EventSpotlight`); `float-motes`, `float-mote` and `fusion-mote-lift` (`FloatButton` — unrelated to the deleted `mote-field` / `fusion-mote-drift` pair despite the shared word); `scrub-rise`, `scrub-line`, `scrub-fade` (`Section.tsx`, `events.index.tsx`); `lit-word` (`ScrollWords`); `rise-word` (`RiseText`); `text-gradient` (upstream's own, used by `governance.tsx` and `index.tsx`).

**How the deletion was verified:** every removed name was grepped across all of `src` for full *and* partial matches (`hero-fade`, `aurora`, `mote`, `grid-scroll`, `grain`, `float-slow`, `scrub-out`, `split-word`) — the only hits left are the `float-mote*` names above and the word "remote" in a `club.ts` string. `tsc` still reports exactly the 6 pre-existing baseline errors, `npm run build` passes, and a same-origin iframe probe on `/events` measured `scrollWidth === clientWidth` with zero unclipped offenders at 320 px, 375 px and 1280 px; `/` also renders clean at 1280 px. The iframe is not a workaround for convenience here — the in-app browser surface reports `clientWidth: 0`, so any overflow number read from it directly is meaningless (it showed a bogus 220 px of overflow on a page that has none).
