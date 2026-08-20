import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as club } from "./router-CJDMVHkU.mjs";
import { n as Section, r as SectionHeading, t as Reveal } from "./Section-DVbDmvsO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/join-C7p-CkwQ.js
var import_jsx_runtime = require_jsx_runtime();
("" + club.university, club.registrationFormUrl);
var joinBenefits = [
  {
    title: "A domain, not a mailing list",
    body: "You pick a technical domain on day one and get a mentor inside it. Weekly sessions, real project work, code review from seniors.",
  },
  {
    title: "Build things that ship",
    body: "Members leave with deployed projects and public repositories — the thing interviewers actually ask about.",
  },
  {
    title: "Lead University Mega-Events",
    body: "Organize Viveka 6.0, SIH hackathons, and Harmony events with real budgets and thousands of student participants.",
  },
  {
    title: "An alumni network that answers",
    body: "Former members across top tech companies provide referral help, mock interviews, and resume reviews for members.",
  },
];
var recruitmentSteps = [
  {
    step: "01",
    title: "Application",
    body: "Fill the join form with your branch, year, and domain of interest. Open for four weeks each semester.",
  },
  {
    step: "02",
    title: "Orientation session",
    body: "An open session covering how the club works, the domain structure, and what the time commitment actually is.",
  },
  {
    step: "03",
    title: "Domain task",
    body: "A small, beginner-friendly task in your chosen domain. Assessed on effort and reasoning, not prior experience.",
  },
  {
    step: "04",
    title: "Conversation & onboarding",
    body: "A short informal chat with the domain lead, then Git onboarding and your first team assignment.",
  },
];
var faqs = [
  {
    q: "Do I need prior coding experience to join?",
    a: "No. Roughly half of every intake starts with no experience beyond a first-semester programming course. The domain task is designed to be solvable by beginners — we assess how you approach it, not how polished it is.",
  },
  {
    q: "Is the club only for computer science students?",
    a: "No. Current members come from mechanical, civil, electronics and design backgrounds. If you are willing to learn and show up consistently, your branch is irrelevant to us.",
  },
  {
    q: "How much time does membership take?",
    a: "Expect one weekly domain session of about two hours, plus project work at your own pace. Event weeks are heavier, and we tell you well in advance.",
  },
  {
    q: "Is there a membership fee?",
    a: "There is no fee to join. Some external competitions have their own entry costs, and the club sponsors those for members wherever the budget allows.",
  },
  {
    q: "When does recruitment open?",
    a: "Twice a year, at the start of each semester. Applications submitted outside those windows are held and reviewed in the next cycle.",
  },
  {
    q: "Can final-year students join?",
    a: "Yes, though we will usually route you towards mentoring and project leadership rather than the full first-year learning track.",
  },
];
function Join() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
        className: "pb-8",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "eyebrow",
              children: "Join us",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
              className:
                "mt-4 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl",
              children: "No prior experience. Just consistency.",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground",
              children:
                "Pick a domain, get matched with a mentor, and ship something real in your first semester.",
            }),
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
        className: "pt-10",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
            eyebrow: "Why join",
            title: "What membership actually gets you",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
            className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
            children: joinBenefits.map((b, i) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                Reveal,
                {
                  as: "li",
                  delay: i * 50,
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "glass lift h-full rounded-2xl p-7",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                        className: "font-display text-lg font-bold",
                        children: b.title,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "mt-3 text-sm leading-relaxed text-muted-foreground",
                        children: b.body,
                      }),
                    ],
                  }),
                },
                b.title,
              ),
            ),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
            eyebrow: "Process",
            title: "Four steps, two weeks",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
            className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
            children: recruitmentSteps.map((s, i) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                Reveal,
                {
                  as: "li",
                  delay: i * 60,
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "glass h-full rounded-2xl p-7",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "font-mono text-xs text-primary-glow",
                        children: String(i + 1).padStart(2, "0"),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                        className: "mt-4 font-display text-lg font-bold",
                        children: s.title,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "mt-3 text-sm leading-relaxed text-muted-foreground",
                        children: s.body,
                      }),
                    ],
                  }),
                },
                s.title,
              ),
            ),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
        id: "apply",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "grid gap-10 lg:grid-cols-[1.1fr_1fr]",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
              className: "glass-strong rounded-[2rem] p-8 sm:p-10",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "eyebrow",
                  children: "Location",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                  className: "mt-4 font-display text-2xl font-bold sm:text-3xl",
                  children: "Find us on Campus",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "mt-8 rounded-2xl border border-primary/40 bg-primary/10 p-6",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "font-display text-lg font-bold",
                      children: "Directions to the Club",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                      className: "mt-2 text-sm leading-relaxed text-muted-foreground",
                      children: [
                        "SRMU me pahuchne ke baad ",
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "B1 Block",
                        }),
                        " me fir ",
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "3rd Floor",
                        }),
                        " fir ",
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                          children: "310-A room number",
                        }),
                        ".",
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "mt-8 overflow-hidden rounded-2xl",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
                    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.486870729398!2d81.0978324!3d26.952407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995f0b269e340f%3A0x3202aba43761750e!2sTech%20Fusion%20Club%20-%20Only%20Technical%20Club%20of%20SRMU!5e1!3m2!1sen!2sin!4v1787226040908!5m2!1sen!2sin",
                    width: "100%",
                    height: "450",
                    style: { border: 0 },
                    allowFullScreen: true,
                    loading: "lazy",
                    referrerPolicy: "strict-origin-when-cross-origin",
                    title: "Tech Fusion Club Location",
                  }),
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
              delay: 100,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "eyebrow",
                  children: "FAQ",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
                  className: "mt-6 space-y-3",
                  children: faqs.map((f) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "li",
                      {
                        className: "glass rounded-2xl p-6",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                            className: "font-display text-base font-bold",
                            children: f.q,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                            className: "mt-2 text-sm leading-relaxed text-muted-foreground",
                            children: f.a,
                          }),
                        ],
                      },
                      f.q,
                    ),
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "glass mt-6 rounded-2xl p-6",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "eyebrow",
                      children: "Prefer email?",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                      href: `mailto:${club.email}`,
                      className: "mt-3 inline-block font-mono text-sm text-primary-glow",
                      children: club.email,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
//#endregion
export { Join as component };
