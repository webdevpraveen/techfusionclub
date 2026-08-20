import { n as e } from "./utils-Bu-ICgPr.js";
import { d as t, u as n } from "./index-BKzPGBcY.js";
import { r } from "./Section-Bzy8-56x.js";
var i = n(`arrow-right`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `m12 5 7 7-7 7`, key: `xquz4c` }],
  ]),
  a = e();
function o({
  eyebrow: e = `Recruitment`,
  title: n = `The next intake is the best time to start.`,
  body: o = `No prior experience required — just consistency. Pick a domain, get a mentor, and start shipping with people who care about the work.`,
}) {
  return (0, a.jsx)(`section`, {
    className: `px-5 pb-24 sm:px-8`,
    children: (0, a.jsx)(r, {
      className: `mx-auto w-full max-w-7xl`,
      children: (0, a.jsxs)(`div`, {
        className: `glass-strong hero-gradient border-animated relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-16 sm:py-20`,
        children: [
          (0, a.jsx)(`div`, {
            className: `circuit-lines pointer-events-none absolute inset-0 opacity-70`,
          }),
          (0, a.jsxs)(`div`, {
            className: `relative mx-auto max-w-2xl`,
            children: [
              (0, a.jsx)(`p`, { className: `eyebrow`, children: e }),
              (0, a.jsx)(`h2`, {
                className: `mt-4 text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl`,
                children: n,
              }),
              (0, a.jsx)(`p`, {
                className: `mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg`,
                children: o,
              }),
              (0, a.jsxs)(`div`, {
                className: `mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row`,
                children: [
                  (0, a.jsxs)(t, {
                    to: `/join`,
                    className: `group pulse-glow inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03] sm:w-auto`,
                    children: [
                      `Apply to join`,
                      (0, a.jsx)(i, {
                        className: `size-4 transition-transform duration-300 group-hover:translate-x-1`,
                      }),
                    ],
                  }),
                  (0, a.jsx)(t, {
                    to: `/about`,
                    className: `glass inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 font-semibold text-foreground transition-colors hover:text-primary-glow sm:w-auto`,
                    children: `Learn about us`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
export { i as n, o as t };
