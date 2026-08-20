import { r as __toESM } from "../_runtime.mjs";
import {
  n as require_jsx_runtime,
  r as require_react,
} from "../_libs/react+tanstack__react-query.mjs";
import {
  E as CodeXml,
  M as Building2,
  N as BookOpen,
  P as Award,
  w as ExternalLink,
} from "../_libs/lucide-react.mjs";
import {
  i as faculty,
  n as club,
  o as timeline,
  r as domains,
  s as values,
} from "./router-CJDMVHkU.mjs";
import { n as Section, r as SectionHeading, t as Reveal } from "./Section-DVbDmvsO.mjs";
import { t as CTABanner } from "./CTABanner-ByIzD7-T.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DVvFRD4t.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function About() {
  const [activeTab, setActiveTab] = (0, import_react.useState)("club");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
        className: "pb-6",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "flex flex-col items-start gap-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "eyebrow",
                  children: "Institutional Profile",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                  className:
                    "text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl",
                  children:
                    activeTab === "club"
                      ? "Where Ideas Fuse Into Technology."
                      : "Shri Ramswaroop Memorial University",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground",
                  children:
                    activeTab === "club"
                      ? `Founded in ${club.foundedYear}, Tech Fusion Club is the flagship student-run technical collective at SRMU — bridging classroom theory with real-world engineering across six domain tracks.`
                      : "Established under UP State Act 1, SRMU is a premier university dedicated to transformative education, research excellence, and holistic student development since 1999.",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "mt-8 flex flex-wrap gap-3 border-b border-border/80 pb-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                  onClick: () => setActiveTab("club"),
                  className: `flex items-center gap-2 rounded-xl px-5 py-2.5 font-display text-sm font-bold transition-all ${activeTab === "club" ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]" : "glass text-muted-foreground hover:text-foreground"}`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "size-4" }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      children: "About Tech Fusion Club",
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                  onClick: () => setActiveTab("srmu"),
                  className: `flex items-center gap-2 rounded-xl px-5 py-2.5 font-display text-sm font-bold transition-all ${activeTab === "srmu" ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]" : "glass text-muted-foreground hover:text-foreground"}`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-4" }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      children: "About SRMU (University Profile)",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      activeTab === "club" &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
              className: "pt-4",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "grid gap-6 lg:grid-cols-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
                    className:
                      "glass rounded-[1.75rem] p-8 sm:p-10 border border-primary/20 shadow-lg",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "eyebrow text-primary-glow",
                        children: "Our Mission",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "mt-4 text-pretty text-lg leading-relaxed text-foreground",
                        children: club.mission,
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
                    delay: 100,
                    className:
                      "glass rounded-[1.75rem] p-8 sm:p-10 border border-accent/20 shadow-lg",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "eyebrow text-accent",
                        children: "Our Vision",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "mt-4 text-pretty text-lg leading-relaxed text-foreground",
                        children: club.vision,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
                  eyebrow: "Club History",
                  title: "How we grew since 2019",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
                  className: "mt-12 space-y-4",
                  children: timeline.map((t, i) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      Reveal,
                      {
                        as: "li",
                        delay: i * 60,
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className:
                            "glass lift grid gap-4 rounded-2xl p-6 sm:grid-cols-[7rem_1fr] sm:p-8",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                              className: "font-display text-2xl font-bold text-primary-glow",
                              children: t.year,
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                                  className: "font-display text-lg font-bold",
                                  children: t.title,
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                  className: "mt-2 text-sm leading-relaxed text-muted-foreground",
                                  children: t.body,
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      t.year,
                    ),
                  ),
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
                  eyebrow: "Technical Domains",
                  title: "Six specialized learning ladders",
                  body: "Each domain runs its own weekly build session, open-source projects, and peer mentorship.",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
                  className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
                  children: domains.map((d, i) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      Reveal,
                      {
                        as: "li",
                        delay: i * 50,
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "glass lift h-full rounded-2xl p-7 border border-border/70",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                              className: "font-display text-lg font-bold",
                              children: d.name,
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "mt-3 text-sm leading-relaxed text-muted-foreground",
                              children: d.blurb,
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
                              className: "mt-5 flex flex-wrap gap-1.5",
                              children: d.stack.map((s) =>
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  "li",
                                  {
                                    className:
                                      "rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground font-medium",
                                    children: s,
                                  },
                                  s,
                                ),
                              ),
                            }),
                          ],
                        }),
                      },
                      d.slug,
                    ),
                  ),
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
                className:
                  "glass-strong grid overflow-hidden rounded-[2rem] lg:grid-cols-[0.8fr_1.2fr] border border-primary/30 shadow-2xl",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                    src: faculty.photo,
                    alt: `${faculty.name}, ${faculty.designation}`,
                    loading: "lazy",
                    className: "h-full min-h-[20rem] w-full object-cover",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "p-8 sm:p-12",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "eyebrow",
                        children: "Faculty Mentorship",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                        className: "mt-4 font-display text-2xl font-bold sm:text-3xl",
                        children: faculty.name,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "mt-2 text-sm text-muted-foreground font-semibold",
                        children: faculty.designation,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
                        className:
                          "mt-6 border-l-2 border-primary/50 pl-5 text-pretty leading-relaxed text-foreground/90 italic",
                        children: ['"', faculty.message, '"'],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                        href: `mailto:${faculty.email}`,
                        className:
                          "mt-6 inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-primary-glow font-bold",
                        children: ["✉ ", faculty.email],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
                  eyebrow: "Pillars",
                  title: "What we hold ourselves to",
                  align: "center",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
                  className: "mt-12 grid gap-5 sm:grid-cols-2",
                  children: values.map((v, i) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      Reveal,
                      {
                        as: "li",
                        delay: i * 60,
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "glass lift h-full rounded-2xl p-7",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                              className: "font-display text-lg font-bold text-primary-glow",
                              children: v.title,
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "mt-3 text-sm leading-relaxed text-muted-foreground",
                              children: v.body,
                            }),
                          ],
                        }),
                      },
                      v.title,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
      activeTab === "srmu" &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
              className: "pt-4",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
                className:
                  "glass-strong rounded-[2rem] p-8 sm:p-12 border border-primary/30 shadow-2xl",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className:
                      "flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-border/80 pb-8",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className:
                              "rounded-full bg-primary/10 border border-primary/30 px-3.5 py-1 font-mono text-xs font-bold text-primary-glow",
                            children: "Est. 2012 · UP State Act 1",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                            className:
                              "mt-4 font-display text-3xl font-bold sm:text-4xl text-foreground",
                            children: "Shri Ramswaroop Memorial University",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                            className: "mt-2 text-sm text-muted-foreground font-mono",
                            children: "Lucknow-Deva Road, Barabanki, Uttar Pradesh - 225003",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                        href: "https://srmu.ac.in/about-us",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors w-fit",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            children: "Official SRMU Website",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
                            className: "size-4",
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "mt-8 space-y-6 text-base leading-relaxed text-muted-foreground",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                        children: [
                          "Our journey began in ",
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                            className: "text-foreground",
                            children: "1999",
                          }),
                          ", with just 22 students and an unwavering commitment to quality education. Conceived by two visionary IIT Kanpur alumni — ",
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                            className: "text-foreground",
                            children: "Er. Pankaj Agarwal",
                          }),
                          " and ",
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                            className: "text-foreground",
                            children: "Er. Pooja Agarwal",
                          }),
                          " — Shri Ramswaroop Memorial University (SRMU) has grown into a premier seat of learning in North India.",
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        children:
                          "SRMU offers over 100+ undergraduate, postgraduate, and doctoral programs across Engineering, Computer Applications, Management, Biotechnology, Media, Law, Pharmacy, and Agricultural Sciences.",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "grid gap-6 lg:grid-cols-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
                    className: "glass rounded-[1.75rem] p-8 sm:p-10 border border-primary/20",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
                            className: "size-6 text-primary-glow",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                            className: "font-display text-xl font-bold text-foreground",
                            children: "SRMU Vision",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "mt-4 text-sm leading-relaxed text-muted-foreground",
                        children:
                          "To be an internationally recognized center of excellence in higher education, fostering innovation, scientific temper, ethical leadership, and holistic societal development.",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
                    delay: 100,
                    className: "glass rounded-[1.75rem] p-8 sm:p-10 border border-accent/20",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, {
                            className: "size-6 text-accent",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                            className: "font-display text-xl font-bold text-foreground",
                            children: "SRMU Mission",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "mt-4 text-sm leading-relaxed text-muted-foreground",
                        children:
                          "To provide transformative learning experiences through outcome-based education, state-of-the-art research laboratories, industry partnerships (L&T, IBM, etc.), and continuous student mentorship.",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
                  eyebrow: "Key Highlights",
                  title: "Why SRMU stands out",
                  body: "A glimpse into university accreditations, industry honors, and campus eco-system.",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
                      delay: 50,
                      className: "glass lift rounded-2xl p-6 border border-border/80",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "font-mono text-3xl font-bold text-primary-glow",
                          children: "100+",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                          className: "mt-2 font-display text-base font-bold text-foreground",
                          children: "UG & PG Programs",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "mt-2 text-xs text-muted-foreground leading-relaxed",
                          children:
                            "Covering cutting-edge fields like AI/ML, Cyber Security, Cloud, FinTech, and IoT.",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
                      delay: 100,
                      className: "glass lift rounded-2xl p-6 border border-border/80",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "font-mono text-3xl font-bold text-accent",
                          children: "L&T",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                          className: "mt-2 font-display text-base font-bold text-foreground",
                          children: "Industry Honors",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "mt-2 text-xs text-muted-foreground leading-relaxed",
                          children:
                            "Joint degree programs with Larsen & Toubro for practical industrial mastery.",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
                      delay: 150,
                      className: "glass lift rounded-2xl p-6 border border-border/80",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "font-mono text-3xl font-bold text-emerald-400",
                          children: "100 Acre",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                          className: "mt-2 font-display text-base font-bold text-foreground",
                          children: "Lush Campus",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "mt-2 text-xs text-muted-foreground leading-relaxed",
                          children:
                            "State-of-the-art computer labs, high-speed WiFi, innovation cells, and sports arenas.",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
                      delay: 200,
                      className: "glass lift rounded-2xl p-6 border border-border/80",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "font-mono text-3xl font-bold text-amber-400",
                          children: "1999",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                          className: "mt-2 font-display text-base font-bold text-foreground",
                          children: "Legacy of Trust",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "mt-2 text-xs text-muted-foreground leading-relaxed",
                          children:
                            "Over two decades of educational excellence empowering thousands of successful alumni globally.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABanner, {}),
    ],
  });
}
//#endregion
export { About as component };
