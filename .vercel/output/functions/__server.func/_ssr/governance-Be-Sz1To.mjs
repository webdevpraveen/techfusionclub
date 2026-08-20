import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import {
  C as FileCheck,
  M as Building2,
  c as Sparkles,
  d as ShieldCheck,
  r as Users,
  v as Linkedin,
  x as GraduationCap,
} from "../_libs/lucide-react.mjs";
import { n as Section, t as Reveal } from "./Section-DVbDmvsO.mjs";
import { t as CTABanner } from "./CTABanner-ByIzD7-T.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/governance-Be-Sz1To.js
var import_jsx_runtime = require_jsx_runtime();
var governanceData = [
  {
    title: "Chief Patrons",
    subtitle:
      "Visionary institutional leadership guiding the university and student technical ecosystem.",
    members: [
      {
        name: "Er. Pankaj Agarwal",
        role: "Chancellor, SRMU",
        badge: "Chief Patron",
        description:
          "IIT Kanpur alumnus and visionary social entrepreneur driving SRMU towards global academic benchmarks, cutting-edge research, and student-led innovation.",
        image: "https://srmu.ac.in/assets/pankaj-DsE5rnwQ.webp",
        linkedin: "https://www.linkedin.com/in/pankaj-agarwal-b72ab321/",
      },
      {
        name: "Er. Pooja Agarwal",
        role: "Pro Chancellor, SRMU",
        badge: "Chief Patron",
        description:
          "Co-founder of SRMU empowering students through holistic skill development, interdisciplinary technical research, and women-in-technology initiatives.",
        image: "https://srmu.ac.in/assets/pooja-B1uI8fBS.webp",
      },
    ],
  },
  {
    title: "Patrons",
    subtitle:
      "Executive university officers providing strategic academic and administrative direction.",
    members: [
      {
        name: "Prof. (Dr.) Vijay Tiwari",
        role: "Vice Chancellor, SRMU",
        badge: "Patron",
        description:
          "Distinguished academician advancing university research infrastructure, outcome-based pedagogy, and industry integration across technical domains.",
        image: "https://srmu.ac.in/assets/vijaytiwari-DtLhXa4L.webp",
        linkedin: "https://www.linkedin.com/in/dr-vijay-kumar-tiwari/",
      },
      {
        name: "Prof. (Dr.) Hemendra Sharma",
        role: "Registrar, SRMU",
        badge: "Patron",
        description:
          "Head of University Administration ensuring seamless academic governance, student welfare, regulatory compliance, and institutional efficiency.",
        image: "https://srmu.ac.in/assets/Hemendra-NSaxOOgS.webp",
        linkedin: "https://www.linkedin.com/school/shri-ramswaroop-memorial-university/",
      },
    ],
  },
  {
    title: "Faculty Coordinators",
    subtitle:
      "Dedicated faculty mentors supervising technical societies, hackathons, and student growth.",
    members: [
      {
        name: "Dr. Veena Singh",
        role: "HoD, Professor IMCE & University Club Coordinator, SRMU",
        badge: "Faculty Advisor",
        description:
          "Chief Faculty Mentor guiding university student technical societies, annual tech fests, inter-departmental logistics, and leadership development.",
        image: "https://srmu.ac.in/assets/dr-veena-singh-CKCbgSAF.webp",
        linkedin: "https://www.linkedin.com/in/prof-dr-veena-singh-26a48b196/",
      },
      {
        name: "Er. Abhishek Kumar Saxena",
        role: "Assistant Director, IQAC & Head Technical Society, SRMU",
        badge: "Faculty Convener",
        description:
          "Convener driving student technical projects, hackathons, open-source build nights, and university digital media initiatives.",
        image: "https://www.vivekatheintelligence.in/abhishek.jpg",
        linkedin: "https://www.linkedin.com/in/abhishek-kumar-saxena-80a51111a/",
      },
      {
        name: "Dr. Mrityunjay Rai",
        role: "Assistant Director IQAC & Coordinator Technical Society",
        badge: "Faculty Coordinator",
        description:
          "Coordinating inter-departmental technical competitions, hardware/software mentorship ladders, and engineering research labs.",
        image:
          "https://th.bing.com/th/id/OIP.90nfazrcFSf6EtqDH9jVzgHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        linkedin: "https://www.linkedin.com/in/dr-mritunjay-rai-36b85118/",
      },
      {
        name: "Er. Sunny Kumar",
        role: "Assistant Professor DCSE & Coordinator Technical Society",
        badge: "Faculty Coordinator",
        description:
          "Mentoring web & mobile app development bootcamps, competitive coding tracks, and student project showcases.",
        image: "https://srmu.ac.in/storage/teams/11zon-cropped-5-11zon-23022411165423.jpeg",
        linkedin: "https://www.linkedin.com/in/sunny-kumar-a7910b234/",
      },
      {
        name: "Er. Neeta Bhusal Sharma",
        role: "Assistant Professor DCSE & Coordinator Technical Society",
        badge: "Faculty Coordinator",
        description:
          "Guiding AI/ML workshops, cybersecurity hackathons, UI/UX design sprints, and student team development.",
        image: "https://srmu.ac.in/storage/teams/11zon-cropped-2-11zon-23022410512735.jpeg",
      },
    ],
  },
];
var governancePillars = [
  {
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
      className: "size-6 text-primary-glow",
    }),
    title: "Institutional Transparency",
    description:
      "100% audited event budgets, student grants, and university club operations under faculty supervision.",
  },
  {
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
      className: "size-6 text-primary-glow",
    }),
    title: "Student Empowerment",
    description:
      "Merit-based student leadership council driving domain workshops, open-source projects, and peer ladders.",
  },
  {
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, {
      className: "size-6 text-primary-glow",
    }),
    title: "Academic & Industry Alignment",
    description:
      "Continuous mentorship bridging academic curriculum with modern tech stack practices.",
  },
  {
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheck, {
      className: "size-6 text-primary-glow",
    }),
    title: "Ethics & Open Source Charter",
    description:
      "Strict enforcement of academic integrity, inclusive open mentorship, and anti-harassment standards.",
  },
];
function LeaderCard({ member }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className:
      "glass lift group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/70 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 w-full sm:w-[21rem]",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex items-center justify-between gap-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className:
                  "rounded-full bg-primary/10 border border-primary/30 px-3 py-0.5 font-mono text-[10px] font-bold text-primary-glow uppercase tracking-wider",
                children: member.badge || "Leadership",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
                className: "size-4 text-muted-foreground/60",
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
            className:
              "mt-4 font-display text-xl font-bold text-foreground group-hover:text-primary-glow transition-colors",
            children: member.name,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className:
              "mt-1 font-mono text-xs font-semibold uppercase tracking-wider text-primary-glow",
            children: member.role,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "mt-4 relative h-64 w-full overflow-hidden rounded-xl bg-surface/50 border border-border/50",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                src: member.image,
                alt: member.name,
                loading: "lazy",
                className:
                  "h-full w-full object-cover object-top rounded-xl transition-transform duration-500 group-hover:scale-105",
                onError: (e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600";
                },
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className:
                  "absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-50",
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className: "mt-4 text-xs leading-relaxed text-muted-foreground font-normal",
            children: member.description,
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "mt-6 flex items-center justify-between border-t border-border/60 pt-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "font-mono text-[11px] text-muted-foreground font-medium",
            children: "SRMU Governance",
          }),
          member.linkedin
            ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                href: member.linkedin,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": `${member.name}'s LinkedIn profile`,
                className:
                  "inline-flex size-8 items-center justify-center rounded-full bg-surface border border-border/80 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, {
                  className: "size-4",
                }),
              })
            : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-8" }),
        ],
      }),
    ],
  });
}
function Governance() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
        className: "pb-10 text-center",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className:
                "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs font-bold text-primary-glow",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
                  className: "size-3.5 animate-pulse",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  children: "Institutional Governance & Leadership",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
              className:
                "mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl",
              children: [
                "Leadership & ",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "text-gradient",
                  children: "Governance",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "mt-4 text-pretty text-lg text-muted-foreground max-w-2xl mx-auto",
              children:
                "The visionary university patrons, registrar, and faculty coordinators behind Shri Ramswaroop Memorial University and Tech Fusion Club.",
            }),
          ],
        }),
      }),
      governanceData.map((sec, secIdx) =>
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          Section,
          {
            className: "py-8",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
              delay: secIdx * 50,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "text-center mb-10 max-w-2xl mx-auto",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                      className:
                        "inline-block border-b-2 border-primary/40 pb-2 font-mono text-xl font-bold uppercase tracking-widest text-foreground sm:text-2xl",
                      children: sec.title,
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "mt-3 text-xs text-muted-foreground leading-relaxed",
                      children: sec.subtitle,
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "flex flex-wrap justify-center gap-8",
                  children: sec.members.map((m) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeaderCard, { member: m }, m.name),
                  ),
                }),
              ],
            }),
          },
          sec.title,
        ),
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
        className: "py-12",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "text-center mb-12",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "eyebrow",
                  children: "Operating Principles",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                  className: "mt-3 font-display text-3xl font-bold text-foreground",
                  children: "Governance & Integrity Charter",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "mt-2 text-sm text-muted-foreground max-w-xl mx-auto",
                  children:
                    "Core institutional standards governing Tech Fusion Club operations, student elections, and event execution.",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
              children: governancePillars.map((p, i) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  Reveal,
                  {
                    delay: i * 60,
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "glass lift h-full rounded-2xl p-6 border border-border/70",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className:
                            "flex size-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/30 mb-4",
                          children: p.icon,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                          className: "font-display text-base font-bold text-foreground",
                          children: p.title,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "mt-2 text-xs leading-relaxed text-muted-foreground",
                          children: p.description,
                        }),
                      ],
                    }),
                  },
                  p.title,
                ),
              ),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABanner, {}),
    ],
  });
}
//#endregion
export { Governance as component };
