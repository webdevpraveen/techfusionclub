import { r as __toESM } from "../_runtime.mjs";
import {
  n as require_jsx_runtime,
  r as require_react,
} from "../_libs/react+tanstack__react-query.mjs";
import { A as ChevronLeft, k as ChevronRight, n as X } from "../_libs/lucide-react.mjs";
import { n as Section, t as Reveal } from "./Section-DVbDmvsO.mjs";
import { n as FilterPill } from "./EventCard-Cqf8eSEr.mjs";
import { n as galleryYears, t as galleryPhotos } from "./gallery-DXVzHa-j.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-D0ZrNleS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Lightbox({ items, index, onClose, onIndexChange }) {
  const open = index !== null;
  const step = (0, import_react.useCallback)(
    (delta) => {
      if (index === null) return;
      onIndexChange((index + delta + items.length) % items.length);
    },
    [index, items.length, onIndexChange],
  );
  (0, import_react.useEffect)(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, step]);
  if (!open || index === null) return null;
  const item = items[index];
  if (!item) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": `Image viewer: ${item.alt}`,
    className: "fixed inset-0 z-[80] flex flex-col bg-background/95 backdrop-blur-xl",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex items-center justify-between gap-4 px-5 py-4 sm:px-8",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
            className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
            children: [index + 1, " / ", items.length],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
            type: "button",
            onClick: onClose,
            autoFocus: true,
            "aria-label": "Close image viewer",
            className:
              "glass grid size-10 place-items-center rounded-full text-foreground transition-colors hover:text-primary-glow",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "relative flex min-h-0 flex-1 items-center justify-center px-4 pb-4 sm:px-16",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
            type: "button",
            onClick: () => step(-1),
            "aria-label": "Previous image",
            className:
              "glass absolute left-2 z-10 grid size-11 place-items-center rounded-full text-foreground transition-colors hover:text-primary-glow sm:left-5",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
              className: "size-5",
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "img",
            {
              src: item.src,
              alt: item.alt,
              className:
                "max-h-full max-w-full rounded-2xl border border-border object-contain animate-rise",
            },
            item.src,
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
            type: "button",
            onClick: () => step(1),
            "aria-label": "Next image",
            className:
              "glass absolute right-2 z-10 grid size-11 place-items-center rounded-full text-foreground transition-colors hover:text-primary-glow sm:right-5",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
              className: "size-5",
            }),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "px-5 pb-8 text-center sm:px-8",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className: "text-sm text-foreground",
            children: item.alt,
          }),
          item.caption
            ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className:
                  "mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground",
                children: item.caption,
              })
            : null,
        ],
      }),
    ],
  });
}
function Gallery() {
  const [year, setYear] = (0, import_react.useState)("all");
  const [index, setIndex] = (0, import_react.useState)(null);
  const photos = year === "all" ? galleryPhotos : galleryPhotos.filter((p) => p.year === year);
  const items = photos.map((p) => ({
    src: p.src,
    alt: p.alt,
    caption: `${p.event} · ${p.year}`,
  }));
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
        className: "pb-8",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "eyebrow",
                children: "Gallery",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
                className:
                  "mt-4 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl",
                children: [galleryPhotos.length, " frames from the floor."],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
            delay: 80,
            className: "mt-8 flex flex-wrap gap-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterPill, {
                active: year === "all",
                onClick: () => setYear("all"),
                children: "All years",
              }),
              galleryYears.map((y) =>
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
        className: "pt-0",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
          className: "columns-2 gap-4 sm:columns-3 lg:columns-4 [&>li]:mb-4",
          children: photos.map((p, i) =>
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "li",
              {
                className: "break-inside-avoid",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                  type: "button",
                  onClick: () => setIndex(i),
                  "data-cursor": "view",
                  className:
                    "group relative block w-full overflow-hidden rounded-2xl border border-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                      src: p.src,
                      alt: p.alt,
                      loading: "lazy",
                      decoding: "async",
                      className:
                        "w-full object-cover opacity-85 transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-100",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      className:
                        "absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 to-transparent p-3 text-left font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground",
                      children: [p.event, " · ", p.year],
                    }),
                  ],
                }),
              },
              p.src,
            ),
          ),
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
        items,
        index,
        onClose: () => setIndex(null),
        onIndexChange: setIndex,
      }),
    ],
  });
}
//#endregion
export { Gallery as component };
