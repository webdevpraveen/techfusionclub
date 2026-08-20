import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import {
  n as require_jsx_runtime,
  r as require_react,
} from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Section-DVbDmvsO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function usePrefersReducedMotion() {
  const [reduced, setReduced] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}
/** Adds `is-visible` to the element once it scrolls into view. */
function useReveal() {
  const ref = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}
function useCountUp(target, duration = 1600) {
  const [value, setValue] = (0, import_react.useState)(0);
  const [settled, setSettled] = (0, import_react.useState)(false);
  const ref = (0, import_react.useRef)(null);
  const reduced = usePrefersReducedMotion();
  (0, import_react.useEffect)(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced || typeof IntersectionObserver === "undefined") {
      setValue(target);
      setSettled(false);
      return;
    }
    let frame = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(Math.round(target * eased));
          if (p < 1) frame = requestAnimationFrame(tick);
          else setSettled(true);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration, reduced]);
  return {
    ref,
    value,
    settled,
  };
}
/**
 * Cursor-reactive radial glow. Writes --mx/--my on the element so the
 * `cursor-glow` utility can position its highlight. Desktop pointers only.
 */
function useCursorGlow() {
  const ref = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window === "undefined" ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);
  return ref;
}
function Reveal({ children, className, delay = 0, as: As = "div" }) {
  const ref = useReveal();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(As, {
    ref,
    className: cn("reveal", className),
    style: delay ? { transitionDelay: `${delay}ms` } : void 0,
    children,
  });
}
function SectionHeading({ eyebrow, title, body, align = "left", action, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
    className: cn(
      "flex flex-col gap-6",
      align === "center"
        ? "items-center text-center"
        : "md:flex-row md:items-end md:justify-between",
      className,
    ),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: cn("max-w-2xl", align === "center" && "mx-auto"),
        children: [
          eyebrow
            ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "eyebrow mb-4",
                children: eyebrow,
              })
            : null,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
            className:
              "text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]",
            children: title,
          }),
          body
            ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className:
                  "mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg",
                children: body,
              })
            : null,
        ],
      }),
      action
        ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "shrink-0",
            children: action,
          })
        : null,
    ],
  });
}
function Section({ children, className, id }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
    id,
    className: cn("px-5 py-20 sm:px-8 sm:py-24 lg:py-28", className),
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      className: "mx-auto w-full max-w-7xl",
      children,
    }),
  });
}
//#endregion
export { useCursorGlow as a, useCountUp as i, Section as n, SectionHeading as r, Reveal as t };
