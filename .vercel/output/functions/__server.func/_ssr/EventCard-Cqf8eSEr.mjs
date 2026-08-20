import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as MapPin, j as CalendarDays, r as Users } from "../_libs/lucide-react.mjs";
import { a as useCursorGlow } from "./Section-DVbDmvsO.mjs";
import { a as formatEventDate } from "./events-DwZD37OF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/EventCard-Cqf8eSEr.js
var import_jsx_runtime = require_jsx_runtime();
function EventCard({ event, index = 0 }) {
  const glowRef = useCursorGlow();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
    ref: glowRef,
    className: "glass lift cursor-glow group relative overflow-hidden rounded-3xl",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "relative z-10 block outline-none",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "relative aspect-[16/10] overflow-hidden",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
              src: event.cover,
              alt: event.title,
              loading: index < 3 ? "eager" : "lazy",
              decoding: "async",
              className:
                "size-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "absolute inset-0 bg-gradient-to-t from-card via-card/25 to-transparent",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "absolute left-4 top-4 flex flex-wrap gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className:
                    "rounded-full border border-primary/40 bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-glow backdrop-blur",
                  children: event.category,
                }),
                event.status === "upcoming"
                  ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className:
                        "rounded-full border border-accent/40 bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-accent backdrop-blur",
                      children: "Upcoming",
                    })
                  : null,
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "p-6",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
              className: "text-balance font-display text-xl font-bold leading-snug text-foreground",
              children: event.title,
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground",
              children: event.summary,
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
              className:
                "mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground pt-4 border-t border-border/50",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "inline-flex items-center gap-1.5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
                      className: "size-3.5 text-primary-glow",
                    }),
                    formatEventDate(event),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                  className: "inline-flex items-center gap-1.5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
                      className: "size-3.5 text-primary-glow",
                    }),
                    event.venue,
                  ],
                }),
                event.attendees
                  ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                      className: "inline-flex items-center gap-1.5",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
                          className: "size-3.5 text-primary-glow",
                        }),
                        event.attendees,
                        " attended",
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
function FilterPill({ active, children, onClick }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
    type: "button",
    onClick,
    "aria-pressed": active,
    className: cn(
      "rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-all duration-300",
      active
        ? "border-primary/60 bg-primary/15 text-primary-glow"
        : "border-border bg-surface text-muted-foreground hover:text-foreground",
    ),
    children,
  });
}
//#endregion
export { FilterPill as n, EventCard as t };
