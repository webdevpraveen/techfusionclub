import { n as e, t } from "./utils-Bu-ICgPr.js";
import { a as n, o as r, s as i } from "./events-8DByy2WG.js";
import { t as a } from "./users-BuH1laL9.js";
import { a as o } from "./Section-Bzy8-56x.js";
var s = e();
function c({ event: e, index: t = 0 }) {
  let c = o();
  return (0, s.jsx)(`article`, {
    ref: c,
    className: `glass lift cursor-glow group relative overflow-hidden rounded-3xl`,
    children: (0, s.jsxs)(`div`, {
      className: `relative z-10 block outline-none`,
      children: [
        (0, s.jsxs)(`div`, {
          className: `relative aspect-[16/10] overflow-hidden`,
          children: [
            (0, s.jsx)(`img`, {
              src: e.cover,
              alt: e.title,
              loading: t < 3 ? `eager` : `lazy`,
              decoding: `async`,
              className: `size-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105`,
            }),
            (0, s.jsx)(`div`, {
              className: `absolute inset-0 bg-gradient-to-t from-card via-card/25 to-transparent`,
            }),
            (0, s.jsxs)(`div`, {
              className: `absolute left-4 top-4 flex flex-wrap gap-2`,
              children: [
                (0, s.jsx)(`span`, {
                  className: `rounded-full border border-primary/40 bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-glow backdrop-blur`,
                  children: e.category,
                }),
                e.status === `upcoming`
                  ? (0, s.jsx)(`span`, {
                      className: `rounded-full border border-accent/40 bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-accent backdrop-blur`,
                      children: `Upcoming`,
                    })
                  : null,
              ],
            }),
          ],
        }),
        (0, s.jsxs)(`div`, {
          className: `p-6`,
          children: [
            (0, s.jsx)(`h3`, {
              className: `text-balance font-display text-xl font-bold leading-snug text-foreground`,
              children: e.title,
            }),
            (0, s.jsx)(`p`, {
              className: `mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground`,
              children: e.summary,
            }),
            (0, s.jsxs)(`ul`, {
              className: `mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground pt-4 border-t border-border/50`,
              children: [
                (0, s.jsxs)(`li`, {
                  className: `inline-flex items-center gap-1.5`,
                  children: [(0, s.jsx)(i, { className: `size-3.5 text-primary-glow` }), n(e)],
                }),
                (0, s.jsxs)(`li`, {
                  className: `inline-flex items-center gap-1.5`,
                  children: [(0, s.jsx)(r, { className: `size-3.5 text-primary-glow` }), e.venue],
                }),
                e.attendees
                  ? (0, s.jsxs)(`li`, {
                      className: `inline-flex items-center gap-1.5`,
                      children: [
                        (0, s.jsx)(a, { className: `size-3.5 text-primary-glow` }),
                        e.attendees,
                        ` attended`,
                      ],
                    })
                  : null,
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function l({ active: e, children: n, onClick: r }) {
  return (0, s.jsx)(`button`, {
    type: `button`,
    onClick: r,
    "aria-pressed": e,
    className: t(
      `rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-all duration-300`,
      e
        ? `border-primary/60 bg-primary/15 text-primary-glow`
        : `border-border bg-surface text-muted-foreground hover:text-foreground`,
    ),
    children: n,
  });
}
export { l as n, c as t };
