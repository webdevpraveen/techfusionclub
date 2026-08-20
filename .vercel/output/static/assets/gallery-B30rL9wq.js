import { a as e, n as t, r as n } from "./utils-Bu-ICgPr.js";
import { c as r, u as i } from "./index-BKzPGBcY.js";
import { r as a, t as o } from "./Section-Bzy8-56x.js";
import { n as s } from "./EventCard-CWdJmYUD.js";
import { n as c, t as l } from "./gallery-Dkh1h4rB.js";
var u = i(`chevron-left`, [[`path`, { d: `m15 18-6-6 6-6`, key: `1wnfg3` }]]),
  d = i(`chevron-right`, [[`path`, { d: `m9 18 6-6-6-6`, key: `mthhwq` }]]),
  f = e(n()),
  p = t();
function m({ items: e, index: t, onClose: n, onIndexChange: i }) {
  let a = t !== null,
    o = (0, f.useCallback)(
      (n) => {
        t !== null && i((t + n + e.length) % e.length);
      },
      [t, e.length, i],
    );
  if (
    ((0, f.useEffect)(() => {
      if (!a) return;
      let e = (e) => {
        (e.key === `Escape` && n(), e.key === `ArrowRight` && o(1), e.key === `ArrowLeft` && o(-1));
      };
      return (
        window.addEventListener(`keydown`, e),
        (document.body.style.overflow = `hidden`),
        () => {
          (window.removeEventListener(`keydown`, e), (document.body.style.overflow = ``));
        }
      );
    }, [a, n, o]),
    !a || t === null)
  )
    return null;
  let s = e[t];
  return s
    ? (0, p.jsxs)(`div`, {
        role: `dialog`,
        "aria-modal": `true`,
        "aria-label": `Image viewer: ${s.alt}`,
        className: `fixed inset-0 z-[80] flex flex-col bg-background/95 backdrop-blur-xl`,
        children: [
          (0, p.jsxs)(`div`, {
            className: `flex items-center justify-between gap-4 px-5 py-4 sm:px-8`,
            children: [
              (0, p.jsxs)(`p`, {
                className: `font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground`,
                children: [t + 1, ` / `, e.length],
              }),
              (0, p.jsx)(`button`, {
                type: `button`,
                onClick: n,
                autoFocus: !0,
                "aria-label": `Close image viewer`,
                className: `glass grid size-10 place-items-center rounded-full text-foreground transition-colors hover:text-primary-glow`,
                children: (0, p.jsx)(r, { className: `size-5` }),
              }),
            ],
          }),
          (0, p.jsxs)(`div`, {
            className: `relative flex min-h-0 flex-1 items-center justify-center px-4 pb-4 sm:px-16`,
            children: [
              (0, p.jsx)(`button`, {
                type: `button`,
                onClick: () => o(-1),
                "aria-label": `Previous image`,
                className: `glass absolute left-2 z-10 grid size-11 place-items-center rounded-full text-foreground transition-colors hover:text-primary-glow sm:left-5`,
                children: (0, p.jsx)(u, { className: `size-5` }),
              }),
              (0, p.jsx)(
                `img`,
                {
                  src: s.src,
                  alt: s.alt,
                  className: `max-h-full max-w-full rounded-2xl border border-border object-contain animate-rise`,
                },
                s.src,
              ),
              (0, p.jsx)(`button`, {
                type: `button`,
                onClick: () => o(1),
                "aria-label": `Next image`,
                className: `glass absolute right-2 z-10 grid size-11 place-items-center rounded-full text-foreground transition-colors hover:text-primary-glow sm:right-5`,
                children: (0, p.jsx)(d, { className: `size-5` }),
              }),
            ],
          }),
          (0, p.jsxs)(`div`, {
            className: `px-5 pb-8 text-center sm:px-8`,
            children: [
              (0, p.jsx)(`p`, { className: `text-sm text-foreground`, children: s.alt }),
              s.caption
                ? (0, p.jsx)(`p`, {
                    className: `mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground`,
                    children: s.caption,
                  })
                : null,
            ],
          }),
        ],
      })
    : null;
}
function h() {
  let [e, t] = (0, f.useState)(`all`),
    [n, r] = (0, f.useState)(null),
    i = e === `all` ? l : l.filter((t) => t.year === e),
    u = i.map((e) => ({ src: e.src, alt: e.alt, caption: `${e.event} · ${e.year}` }));
  return (0, p.jsxs)(p.Fragment, {
    children: [
      (0, p.jsxs)(o, {
        className: `pb-8`,
        children: [
          (0, p.jsxs)(a, {
            children: [
              (0, p.jsx)(`p`, { className: `eyebrow`, children: `Gallery` }),
              (0, p.jsxs)(`h1`, {
                className: `mt-4 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl`,
                children: [l.length, ` frames from the floor.`],
              }),
            ],
          }),
          (0, p.jsxs)(a, {
            delay: 80,
            className: `mt-8 flex flex-wrap gap-2`,
            children: [
              (0, p.jsx)(s, {
                active: e === `all`,
                onClick: () => t(`all`),
                children: `All years`,
              }),
              c.map((n) => (0, p.jsx)(s, { active: e === n, onClick: () => t(n), children: n }, n)),
            ],
          }),
        ],
      }),
      (0, p.jsx)(o, {
        className: `pt-0`,
        children: (0, p.jsx)(`ul`, {
          className: `columns-2 gap-4 sm:columns-3 lg:columns-4 [&>li]:mb-4`,
          children: i.map((e, t) =>
            (0, p.jsx)(
              `li`,
              {
                className: `break-inside-avoid`,
                children: (0, p.jsxs)(`button`, {
                  type: `button`,
                  onClick: () => r(t),
                  "data-cursor": `view`,
                  className: `group relative block w-full overflow-hidden rounded-2xl border border-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`,
                  children: [
                    (0, p.jsx)(`img`, {
                      src: e.src,
                      alt: e.alt,
                      loading: `lazy`,
                      decoding: `async`,
                      className: `w-full object-cover opacity-85 transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-100`,
                    }),
                    (0, p.jsxs)(`span`, {
                      className: `absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 to-transparent p-3 text-left font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground`,
                      children: [e.event, ` · `, e.year],
                    }),
                  ],
                }),
              },
              e.src,
            ),
          ),
        }),
      }),
      (0, p.jsx)(m, { items: u, index: n, onClose: () => r(null), onIndexChange: r }),
    ],
  });
}
export { h as component };
