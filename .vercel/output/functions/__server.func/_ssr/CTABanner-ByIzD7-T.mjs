import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as Reveal } from "./Section-DVbDmvsO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CTABanner-ByIzD7-T.js
var import_jsx_runtime = require_jsx_runtime();
function CTABanner({
  eyebrow = "Recruitment",
  title = "The next intake is the best time to start.",
  body = "No prior experience required — just consistency. Pick a domain, get a mentor, and start shipping with people who care about the work.",
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
    className: "px-5 pb-24 sm:px-8",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
      className: "mx-auto w-full max-w-7xl",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className:
          "glass-strong hero-gradient border-animated relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-16 sm:py-20",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "circuit-lines pointer-events-none absolute inset-0 opacity-70",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "relative mx-auto max-w-2xl",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "eyebrow",
                children: eyebrow,
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                className:
                  "mt-4 text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl",
                children: title,
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className:
                  "mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg",
                children: body,
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
                    to: "/join",
                    className:
                      "group pulse-glow inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03] sm:w-auto",
                    children: [
                      "Apply to join",
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
                        className:
                          "size-4 transition-transform duration-300 group-hover:translate-x-1",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                    to: "/about",
                    className:
                      "glass inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 font-semibold text-foreground transition-colors hover:text-primary-glow sm:w-auto",
                    children: "Learn about us",
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
//#endregion
export { CTABanner as t };
