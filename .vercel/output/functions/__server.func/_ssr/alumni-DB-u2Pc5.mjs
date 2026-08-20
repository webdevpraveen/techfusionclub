import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { S as Github, v as Linkedin } from "../_libs/lucide-react.mjs";
import { n as Section, t as Reveal } from "./Section-DVbDmvsO.mjs";
import { t as CTABanner } from "./CTABanner-ByIzD7-T.mjs";
import { t as GlowCard } from "./GlowCard-BSqra6Jb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/alumni-DB-u2Pc5.js
var import_jsx_runtime = require_jsx_runtime();
var alumniList = Array.from({ length: 50 }).map((_, i) => ({
  id: `member-${i + 1}`,
  name: `Member ${i + 1}`,
  course: [
    "B.Tech Computer Science",
    "B.Tech Information Technology",
    "B.Tech AI & Data Science",
    "B.Tech Computer Engineering",
  ][i % 4],
  tenure: ["2021-2025", "2020-2024", "2019-2023"][i % 3],
  post: ["General Secretary", "Technical Head", "Core Member", "Joint Secretary", "Media Head"][
    i % 5
  ],
  photo: `https://api.dicebear.com/9.x/notionists/svg?seed=member${i + 1}&backgroundColor=e2e8f0`,
  socials: {
    linkedin: "#",
    github: i % 2 === 0 ? "#" : void 0,
  },
}));
function AlumniCard({ alumnus, index }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlowCard, {
    className: "glass lift group flex h-full flex-col overflow-hidden rounded-2xl",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "relative aspect-square overflow-hidden bg-surface",
        children: [
          alumnus.photo
            ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                src: alumnus.photo,
                alt: alumnus.name,
                loading: index < 8 ? "eager" : "lazy",
                className:
                  "size-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0",
              })
            : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className:
                  "flex size-full items-center justify-center font-display text-4xl text-muted-foreground/30",
                children: alumnus.name.charAt(0),
              }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className:
              "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                  className: "font-display text-xl font-bold text-foreground",
                  children: alumnus.name,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "font-mono text-[10px] uppercase tracking-[0.15em] text-primary-glow",
                  children: alumnus.post,
                }),
              ],
            }),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex flex-1 flex-col justify-between p-5",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
            className: "space-y-1.5 font-mono text-xs text-muted-foreground",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "text-foreground/40",
                    children: "Course:",
                  }),
                  " ",
                  alumnus.course,
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "text-foreground/40",
                    children: "Tenure:",
                  }),
                  " ",
                  alumnus.tenure,
                ],
              }),
            ],
          }),
          alumnus.socials &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "mt-6 flex items-center gap-3",
              children: [
                alumnus.socials.linkedin &&
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                    href: alumnus.socials.linkedin,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-muted-foreground transition-colors hover:text-primary-glow",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, {
                        className: "size-4",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "sr-only",
                        children: "LinkedIn",
                      }),
                    ],
                  }),
                alumnus.socials.github &&
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                    href: alumnus.socials.github,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-muted-foreground transition-colors hover:text-foreground",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "size-4" }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "sr-only",
                        children: "GitHub",
                      }),
                    ],
                  }),
              ],
            }),
        ],
      }),
    ],
  });
}
function Alumni() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
        className: "pb-8",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "eyebrow",
              children: "TFC Alumni",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
              className:
                "mt-4 max-w-4xl text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl",
              children: "The foundation we stand on.",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground",
              children:
                "Meet the past members who paved the way. From general secretaries to core members, these are the individuals who shaped Tech Fusion Club.",
            }),
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
        className: "py-10 sm:py-12",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
          className: "mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
          children: alumniList.map((member, i) =>
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "li",
              {
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
                  delay: (i % 4) * 50,
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlumniCard, {
                    alumnus: member,
                    index: i,
                  }),
                }),
              },
              member.id,
            ),
          ),
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABanner, {
        eyebrow: "Continue the legacy",
        title: "Leave your mark on the club.",
        body: "Join us today and be part of the next generation of Tech Fusion leaders.",
      }),
    ],
  });
}
//#endregion
export { Alumni as component };
