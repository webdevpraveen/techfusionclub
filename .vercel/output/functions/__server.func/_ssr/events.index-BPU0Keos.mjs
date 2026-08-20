import { r as __toESM } from "../_runtime.mjs";
import {
  n as require_jsx_runtime,
  r as require_react,
} from "../_libs/react+tanstack__react-query.mjs";
import { n as Section, t as Reveal } from "./Section-DVbDmvsO.mjs";
import { t as CTABanner } from "./CTABanner-ByIzD7-T.mjs";
import { n as eventYears, r as events, t as eventCategories } from "./events-DwZD37OF.mjs";
import { n as FilterPill, t as EventCard } from "./EventCard-Cqf8eSEr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events.index-BPU0Keos.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var upcomingYears = [2027];
function Events() {
  const [year, setYear] = (0, import_react.useState)("all");
  const [category, setCategory] = (0, import_react.useState)("all");
  const filtered = (0, import_react.useMemo)(
    () =>
      events
        .filter((e) => (year === "all" ? true : e.year === year))
        .filter((e) => (category === "all" ? true : e.category === category))
        .sort((a, b) => +new Date(b.date) - +new Date(a.date)),
    [year, category],
  );
  const isFutureYear = year !== "all" && upcomingYears.includes(year);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
        className: "pb-8",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "eyebrow",
              children: "Events",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
              className:
                "mt-4 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl",
              children: "Everything we've run, and what's next.",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
              className: "mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground",
              children: [
                events.length,
                " events across ",
                eventYears.length,
                " years — all open to students from any department, most of them free.",
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
        className: "pt-6",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
            className: "glass flex flex-col gap-5 rounded-2xl p-5 sm:p-6",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className:
                      "mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
                    children: "Year",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "flex flex-wrap gap-2",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterPill, {
                        active: year === "all",
                        onClick: () => setYear("all"),
                        children: "All years",
                      }),
                      Array.from(/* @__PURE__ */ new Set([...upcomingYears, ...eventYears])).map(
                        (y) =>
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            FilterPill,
                            {
                              active: year === y,
                              onClick: () => setYear(y),
                              children: y,
                            },
                            y,
                          ),
                      ),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className:
                      "mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
                    children: "Category",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "flex flex-wrap gap-2",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterPill, {
                        active: category === "all",
                        onClick: () => setCategory("all"),
                        children: "All types",
                      }),
                      eventCategories.map((c) =>
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          FilterPill,
                          {
                            active: category === c,
                            onClick: () => setCategory(c),
                            children: c,
                          },
                          c,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
            ],
          }),
          filtered.length > 0
            ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
                className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                children: filtered.map((e, i) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    Reveal,
                    {
                      as: "li",
                      delay: (i % 3) * 70,
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, {
                        event: e,
                        index: i,
                      }),
                    },
                    e.slug,
                  ),
                ),
              })
            : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
                className:
                  "glass-strong hero-gradient mt-10 rounded-[2rem] p-10 text-center sm:p-16",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "eyebrow",
                    children: isFutureYear ? `${year} calendar` : "No matches",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                    className: "mt-4 font-display text-2xl font-bold sm:text-3xl",
                    children: isFutureYear ? "Coming soon" : "Nothing here yet",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className:
                      "mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground",
                    children: isFutureYear
                      ? "The calendar for this year is still being planned. Announcements go out on our socials and to members first."
                      : "Try a different year or category — or clear the filters to see everything.",
                  }),
                ],
              }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABanner, {
        eyebrow: "Stay in the loop",
        title: "Members hear about events first.",
        body: "Applications open twice a year. Join to get event invites, mentor access, and project teams.",
      }),
    ],
  });
}
//#endregion
export { Events as component };
