import { a as e, n as t, r as n } from "./utils-Bu-ICgPr.js";
import { t as r } from "./CTABanner-DVwM-bl3.js";
import { n as i, r as a, t as o } from "./code-xml-C-7GT58U.js";
import { t as s } from "./building-2-bBqB05oK.js";
import { a as c, l, n as u, o as d, r as f, t as p } from "./index-BKzPGBcY.js";
import { n as m, r as h, t as g } from "./Section-Bzy8-56x.js";
var _ = e(n()),
  v = t();
function y() {
  let [e, t] = (0, _.useState)(`club`);
  return (0, v.jsxs)(v.Fragment, {
    children: [
      (0, v.jsx)(g, {
        className: `pb-6`,
        children: (0, v.jsxs)(h, {
          children: [
            (0, v.jsxs)(`div`, {
              className: `flex flex-col items-start gap-4`,
              children: [
                (0, v.jsx)(`span`, { className: `eyebrow`, children: `Institutional Profile` }),
                (0, v.jsx)(`h1`, {
                  className: `text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl`,
                  children:
                    e === `club`
                      ? `Where Ideas Fuse Into Technology.`
                      : `Shri Ramswaroop Memorial University`,
                }),
                (0, v.jsx)(`p`, {
                  className: `max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground`,
                  children:
                    e === `club`
                      ? `Founded in ${p.foundedYear}, Tech Fusion Club is the flagship student-run technical collective at SRMU — bridging classroom theory with real-world engineering across six domain tracks.`
                      : `Established under UP State Act 1, SRMU is a premier university dedicated to transformative education, research excellence, and holistic student development since 1999.`,
                }),
              ],
            }),
            (0, v.jsxs)(`div`, {
              className: `mt-8 flex flex-wrap gap-3 border-b border-border/80 pb-4`,
              children: [
                (0, v.jsxs)(`button`, {
                  onClick: () => t(`club`),
                  className: `flex items-center gap-2 rounded-xl px-5 py-2.5 font-display text-sm font-bold transition-all ${e === `club` ? `bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]` : `glass text-muted-foreground hover:text-foreground`}`,
                  children: [
                    (0, v.jsx)(o, { className: `size-4` }),
                    (0, v.jsx)(`span`, { children: `About Tech Fusion Club` }),
                  ],
                }),
                (0, v.jsxs)(`button`, {
                  onClick: () => t(`srmu`),
                  className: `flex items-center gap-2 rounded-xl px-5 py-2.5 font-display text-sm font-bold transition-all ${e === `srmu` ? `bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]` : `glass text-muted-foreground hover:text-foreground`}`,
                  children: [
                    (0, v.jsx)(s, { className: `size-4` }),
                    (0, v.jsx)(`span`, { children: `About SRMU (University Profile)` }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      e === `club` &&
        (0, v.jsxs)(v.Fragment, {
          children: [
            (0, v.jsx)(g, {
              className: `pt-4`,
              children: (0, v.jsxs)(`div`, {
                className: `grid gap-6 lg:grid-cols-2`,
                children: [
                  (0, v.jsxs)(h, {
                    className: `glass rounded-[1.75rem] p-8 sm:p-10 border border-primary/20 shadow-lg`,
                    children: [
                      (0, v.jsx)(`p`, {
                        className: `eyebrow text-primary-glow`,
                        children: `Our Mission`,
                      }),
                      (0, v.jsx)(`p`, {
                        className: `mt-4 text-pretty text-lg leading-relaxed text-foreground`,
                        children: p.mission,
                      }),
                    ],
                  }),
                  (0, v.jsxs)(h, {
                    delay: 100,
                    className: `glass rounded-[1.75rem] p-8 sm:p-10 border border-accent/20 shadow-lg`,
                    children: [
                      (0, v.jsx)(`p`, { className: `eyebrow text-accent`, children: `Our Vision` }),
                      (0, v.jsx)(`p`, {
                        className: `mt-4 text-pretty text-lg leading-relaxed text-foreground`,
                        children: p.vision,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, v.jsxs)(g, {
              children: [
                (0, v.jsx)(m, { eyebrow: `Club History`, title: `How we grew since 2019` }),
                (0, v.jsx)(`ol`, {
                  className: `mt-12 space-y-4`,
                  children: c.map((e, t) =>
                    (0, v.jsx)(
                      h,
                      {
                        as: `li`,
                        delay: t * 60,
                        children: (0, v.jsxs)(`div`, {
                          className: `glass lift grid gap-4 rounded-2xl p-6 sm:grid-cols-[7rem_1fr] sm:p-8`,
                          children: [
                            (0, v.jsx)(`span`, {
                              className: `font-display text-2xl font-bold text-primary-glow`,
                              children: e.year,
                            }),
                            (0, v.jsxs)(`div`, {
                              children: [
                                (0, v.jsx)(`h3`, {
                                  className: `font-display text-lg font-bold`,
                                  children: e.title,
                                }),
                                (0, v.jsx)(`p`, {
                                  className: `mt-2 text-sm leading-relaxed text-muted-foreground`,
                                  children: e.body,
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      e.year,
                    ),
                  ),
                }),
              ],
            }),
            (0, v.jsxs)(g, {
              children: [
                (0, v.jsx)(m, {
                  eyebrow: `Technical Domains`,
                  title: `Six specialized learning ladders`,
                  body: `Each domain runs its own weekly build session, open-source projects, and peer mentorship.`,
                }),
                (0, v.jsx)(`ul`, {
                  className: `mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3`,
                  children: u.map((e, t) =>
                    (0, v.jsx)(
                      h,
                      {
                        as: `li`,
                        delay: t * 50,
                        children: (0, v.jsxs)(`div`, {
                          className: `glass lift h-full rounded-2xl p-7 border border-border/70`,
                          children: [
                            (0, v.jsx)(`h3`, {
                              className: `font-display text-lg font-bold`,
                              children: e.name,
                            }),
                            (0, v.jsx)(`p`, {
                              className: `mt-3 text-sm leading-relaxed text-muted-foreground`,
                              children: e.blurb,
                            }),
                            (0, v.jsx)(`ul`, {
                              className: `mt-5 flex flex-wrap gap-1.5`,
                              children: e.stack.map((e) =>
                                (0, v.jsx)(
                                  `li`,
                                  {
                                    className: `rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground font-medium`,
                                    children: e,
                                  },
                                  e,
                                ),
                              ),
                            }),
                          ],
                        }),
                      },
                      e.slug,
                    ),
                  ),
                }),
              ],
            }),
            (0, v.jsx)(g, {
              children: (0, v.jsxs)(h, {
                className: `glass-strong grid overflow-hidden rounded-[2rem] lg:grid-cols-[0.8fr_1.2fr] border border-primary/30 shadow-2xl`,
                children: [
                  (0, v.jsx)(`img`, {
                    src: f.photo,
                    alt: `${f.name}, ${f.designation}`,
                    loading: `lazy`,
                    className: `h-full min-h-[20rem] w-full object-cover`,
                  }),
                  (0, v.jsxs)(`div`, {
                    className: `p-8 sm:p-12`,
                    children: [
                      (0, v.jsx)(`p`, { className: `eyebrow`, children: `Faculty Mentorship` }),
                      (0, v.jsx)(`h2`, {
                        className: `mt-4 font-display text-2xl font-bold sm:text-3xl`,
                        children: f.name,
                      }),
                      (0, v.jsx)(`p`, {
                        className: `mt-2 text-sm text-muted-foreground font-semibold`,
                        children: f.designation,
                      }),
                      (0, v.jsxs)(`blockquote`, {
                        className: `mt-6 border-l-2 border-primary/50 pl-5 text-pretty leading-relaxed text-foreground/90 italic`,
                        children: [`"`, f.message, `"`],
                      }),
                      (0, v.jsxs)(`a`, {
                        href: `mailto:${f.email}`,
                        className: `mt-6 inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-primary-glow font-bold`,
                        children: [`✉ `, f.email],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, v.jsxs)(g, {
              children: [
                (0, v.jsx)(m, {
                  eyebrow: `Pillars`,
                  title: `What we hold ourselves to`,
                  align: `center`,
                }),
                (0, v.jsx)(`ul`, {
                  className: `mt-12 grid gap-5 sm:grid-cols-2`,
                  children: d.map((e, t) =>
                    (0, v.jsx)(
                      h,
                      {
                        as: `li`,
                        delay: t * 60,
                        children: (0, v.jsxs)(`div`, {
                          className: `glass lift h-full rounded-2xl p-7`,
                          children: [
                            (0, v.jsx)(`h3`, {
                              className: `font-display text-lg font-bold text-primary-glow`,
                              children: e.title,
                            }),
                            (0, v.jsx)(`p`, {
                              className: `mt-3 text-sm leading-relaxed text-muted-foreground`,
                              children: e.body,
                            }),
                          ],
                        }),
                      },
                      e.title,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
      e === `srmu` &&
        (0, v.jsxs)(v.Fragment, {
          children: [
            (0, v.jsx)(g, {
              className: `pt-4`,
              children: (0, v.jsxs)(h, {
                className: `glass-strong rounded-[2rem] p-8 sm:p-12 border border-primary/30 shadow-2xl`,
                children: [
                  (0, v.jsxs)(`div`, {
                    className: `flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-border/80 pb-8`,
                    children: [
                      (0, v.jsxs)(`div`, {
                        children: [
                          (0, v.jsx)(`span`, {
                            className: `rounded-full bg-primary/10 border border-primary/30 px-3.5 py-1 font-mono text-xs font-bold text-primary-glow`,
                            children: `Est. 2012 · UP State Act 1`,
                          }),
                          (0, v.jsx)(`h2`, {
                            className: `mt-4 font-display text-3xl font-bold sm:text-4xl text-foreground`,
                            children: `Shri Ramswaroop Memorial University`,
                          }),
                          (0, v.jsx)(`p`, {
                            className: `mt-2 text-sm text-muted-foreground font-mono`,
                            children: `Lucknow-Deva Road, Barabanki, Uttar Pradesh - 225003`,
                          }),
                        ],
                      }),
                      (0, v.jsxs)(`a`, {
                        href: `https://srmu.ac.in/about-us`,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors w-fit`,
                        children: [
                          (0, v.jsx)(`span`, { children: `Official SRMU Website` }),
                          (0, v.jsx)(l, { className: `size-4` }),
                        ],
                      }),
                    ],
                  }),
                  (0, v.jsxs)(`div`, {
                    className: `mt-8 space-y-6 text-base leading-relaxed text-muted-foreground`,
                    children: [
                      (0, v.jsxs)(`p`, {
                        children: [
                          `Our journey began in `,
                          (0, v.jsx)(`strong`, { className: `text-foreground`, children: `1999` }),
                          `, with just 22 students and an unwavering commitment to quality education. Conceived by two visionary IIT Kanpur alumni — `,
                          (0, v.jsx)(`strong`, {
                            className: `text-foreground`,
                            children: `Er. Pankaj Agarwal`,
                          }),
                          ` and `,
                          (0, v.jsx)(`strong`, {
                            className: `text-foreground`,
                            children: `Er. Pooja Agarwal`,
                          }),
                          ` — Shri Ramswaroop Memorial University (SRMU) has grown into a premier seat of learning in North India.`,
                        ],
                      }),
                      (0, v.jsx)(`p`, {
                        children: `SRMU offers over 100+ undergraduate, postgraduate, and doctoral programs across Engineering, Computer Applications, Management, Biotechnology, Media, Law, Pharmacy, and Agricultural Sciences.`,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, v.jsx)(g, {
              children: (0, v.jsxs)(`div`, {
                className: `grid gap-6 lg:grid-cols-2`,
                children: [
                  (0, v.jsxs)(h, {
                    className: `glass rounded-[1.75rem] p-8 sm:p-10 border border-primary/20`,
                    children: [
                      (0, v.jsxs)(`div`, {
                        className: `flex items-center gap-3`,
                        children: [
                          (0, v.jsx)(i, { className: `size-6 text-primary-glow` }),
                          (0, v.jsx)(`h3`, {
                            className: `font-display text-xl font-bold text-foreground`,
                            children: `SRMU Vision`,
                          }),
                        ],
                      }),
                      (0, v.jsx)(`p`, {
                        className: `mt-4 text-sm leading-relaxed text-muted-foreground`,
                        children: `To be an internationally recognized center of excellence in higher education, fostering innovation, scientific temper, ethical leadership, and holistic societal development.`,
                      }),
                    ],
                  }),
                  (0, v.jsxs)(h, {
                    delay: 100,
                    className: `glass rounded-[1.75rem] p-8 sm:p-10 border border-accent/20`,
                    children: [
                      (0, v.jsxs)(`div`, {
                        className: `flex items-center gap-3`,
                        children: [
                          (0, v.jsx)(a, { className: `size-6 text-accent` }),
                          (0, v.jsx)(`h3`, {
                            className: `font-display text-xl font-bold text-foreground`,
                            children: `SRMU Mission`,
                          }),
                        ],
                      }),
                      (0, v.jsx)(`p`, {
                        className: `mt-4 text-sm leading-relaxed text-muted-foreground`,
                        children: `To provide transformative learning experiences through outcome-based education, state-of-the-art research laboratories, industry partnerships (L&T, IBM, etc.), and continuous student mentorship.`,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, v.jsxs)(g, {
              children: [
                (0, v.jsx)(m, {
                  eyebrow: `Key Highlights`,
                  title: `Why SRMU stands out`,
                  body: `A glimpse into university accreditations, industry honors, and campus eco-system.`,
                }),
                (0, v.jsxs)(`div`, {
                  className: `mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4`,
                  children: [
                    (0, v.jsxs)(h, {
                      delay: 50,
                      className: `glass lift rounded-2xl p-6 border border-border/80`,
                      children: [
                        (0, v.jsx)(`p`, {
                          className: `font-mono text-3xl font-bold text-primary-glow`,
                          children: `100+`,
                        }),
                        (0, v.jsx)(`h4`, {
                          className: `mt-2 font-display text-base font-bold text-foreground`,
                          children: `UG & PG Programs`,
                        }),
                        (0, v.jsx)(`p`, {
                          className: `mt-2 text-xs text-muted-foreground leading-relaxed`,
                          children: `Covering cutting-edge fields like AI/ML, Cyber Security, Cloud, FinTech, and IoT.`,
                        }),
                      ],
                    }),
                    (0, v.jsxs)(h, {
                      delay: 100,
                      className: `glass lift rounded-2xl p-6 border border-border/80`,
                      children: [
                        (0, v.jsx)(`p`, {
                          className: `font-mono text-3xl font-bold text-accent`,
                          children: `L&T`,
                        }),
                        (0, v.jsx)(`h4`, {
                          className: `mt-2 font-display text-base font-bold text-foreground`,
                          children: `Industry Honors`,
                        }),
                        (0, v.jsx)(`p`, {
                          className: `mt-2 text-xs text-muted-foreground leading-relaxed`,
                          children: `Joint degree programs with Larsen & Toubro for practical industrial mastery.`,
                        }),
                      ],
                    }),
                    (0, v.jsxs)(h, {
                      delay: 150,
                      className: `glass lift rounded-2xl p-6 border border-border/80`,
                      children: [
                        (0, v.jsx)(`p`, {
                          className: `font-mono text-3xl font-bold text-emerald-400`,
                          children: `100 Acre`,
                        }),
                        (0, v.jsx)(`h4`, {
                          className: `mt-2 font-display text-base font-bold text-foreground`,
                          children: `Lush Campus`,
                        }),
                        (0, v.jsx)(`p`, {
                          className: `mt-2 text-xs text-muted-foreground leading-relaxed`,
                          children: `State-of-the-art computer labs, high-speed WiFi, innovation cells, and sports arenas.`,
                        }),
                      ],
                    }),
                    (0, v.jsxs)(h, {
                      delay: 200,
                      className: `glass lift rounded-2xl p-6 border border-border/80`,
                      children: [
                        (0, v.jsx)(`p`, {
                          className: `font-mono text-3xl font-bold text-amber-400`,
                          children: `1999`,
                        }),
                        (0, v.jsx)(`h4`, {
                          className: `mt-2 font-display text-base font-bold text-foreground`,
                          children: `Legacy of Trust`,
                        }),
                        (0, v.jsx)(`p`, {
                          className: `mt-2 text-xs text-muted-foreground leading-relaxed`,
                          children: `Over two decades of educational excellence empowering thousands of successful alumni globally.`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      (0, v.jsx)(r, {}),
    ],
  });
}
export { y as component };
