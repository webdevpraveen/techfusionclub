import { a as e, n as t, r as n } from "./utils-Bu-ICgPr.js";
import { t as r } from "./CTABanner-DVwM-bl3.js";
import { n as i, r as a, t as o } from "./events-8DByy2WG.js";
import { r as s, t as c } from "./Section-Bzy8-56x.js";
import { n as l, t as u } from "./EventCard-CWdJmYUD.js";
var d = e(n()),
  f = t(),
  p = [2027];
function m() {
  let [e, t] = (0, d.useState)(`all`),
    [n, m] = (0, d.useState)(`all`),
    h = (0, d.useMemo)(
      () =>
        a
          .filter((t) => e === `all` || t.year === e)
          .filter((e) => n === `all` || e.category === n)
          .sort((e, t) => new Date(t.date) - +new Date(e.date)),
      [e, n],
    ),
    g = e !== `all` && p.includes(e);
  return (0, f.jsxs)(f.Fragment, {
    children: [
      (0, f.jsx)(c, {
        className: `pb-8`,
        children: (0, f.jsxs)(s, {
          children: [
            (0, f.jsx)(`p`, { className: `eyebrow`, children: `Events` }),
            (0, f.jsx)(`h1`, {
              className: `mt-4 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl`,
              children: `Everything we've run, and what's next.`,
            }),
            (0, f.jsxs)(`p`, {
              className: `mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground`,
              children: [
                a.length,
                ` events across `,
                i.length,
                ` years — all open to students from any department, most of them free.`,
              ],
            }),
          ],
        }),
      }),
      (0, f.jsxs)(c, {
        className: `pt-6`,
        children: [
          (0, f.jsxs)(s, {
            className: `glass flex flex-col gap-5 rounded-2xl p-5 sm:p-6`,
            children: [
              (0, f.jsxs)(`div`, {
                children: [
                  (0, f.jsx)(`p`, {
                    className: `mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground`,
                    children: `Year`,
                  }),
                  (0, f.jsxs)(`div`, {
                    className: `flex flex-wrap gap-2`,
                    children: [
                      (0, f.jsx)(l, {
                        active: e === `all`,
                        onClick: () => t(`all`),
                        children: `All years`,
                      }),
                      Array.from(new Set([...p, ...i])).map((n) =>
                        (0, f.jsx)(l, { active: e === n, onClick: () => t(n), children: n }, n),
                      ),
                    ],
                  }),
                ],
              }),
              (0, f.jsxs)(`div`, {
                children: [
                  (0, f.jsx)(`p`, {
                    className: `mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground`,
                    children: `Category`,
                  }),
                  (0, f.jsxs)(`div`, {
                    className: `flex flex-wrap gap-2`,
                    children: [
                      (0, f.jsx)(l, {
                        active: n === `all`,
                        onClick: () => m(`all`),
                        children: `All types`,
                      }),
                      o.map((e) =>
                        (0, f.jsx)(l, { active: n === e, onClick: () => m(e), children: e }, e),
                      ),
                    ],
                  }),
                ],
              }),
            ],
          }),
          h.length > 0
            ? (0, f.jsx)(`ul`, {
                className: `mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3`,
                children: h.map((e, t) =>
                  (0, f.jsx)(
                    s,
                    {
                      as: `li`,
                      delay: (t % 3) * 70,
                      children: (0, f.jsx)(u, { event: e, index: t }),
                    },
                    e.slug,
                  ),
                ),
              })
            : (0, f.jsxs)(s, {
                className: `glass-strong hero-gradient mt-10 rounded-[2rem] p-10 text-center sm:p-16`,
                children: [
                  (0, f.jsx)(`p`, {
                    className: `eyebrow`,
                    children: g ? `${e} calendar` : `No matches`,
                  }),
                  (0, f.jsx)(`h2`, {
                    className: `mt-4 font-display text-2xl font-bold sm:text-3xl`,
                    children: g ? `Coming soon` : `Nothing here yet`,
                  }),
                  (0, f.jsx)(`p`, {
                    className: `mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground`,
                    children: g
                      ? `The calendar for this year is still being planned. Announcements go out on our socials and to members first.`
                      : `Try a different year or category — or clear the filters to see everything.`,
                  }),
                ],
              }),
        ],
      }),
      (0, f.jsx)(r, {
        eyebrow: `Stay in the loop`,
        title: `Members hear about events first.`,
        body: `Applications open twice a year. Join to get event invites, mentor access, and project teams.`,
      }),
    ],
  });
}
export { m as component };
