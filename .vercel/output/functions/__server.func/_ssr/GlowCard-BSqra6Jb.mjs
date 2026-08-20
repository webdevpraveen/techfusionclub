import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as useCursorGlow } from "./Section-DVbDmvsO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/GlowCard-BSqra6Jb.js
var import_jsx_runtime = require_jsx_runtime();
/**
 * Card shell with a soft radial glow that follows the cursor (desktop pointers
 * only — the hook no-ops on touch devices and under prefers-reduced-motion).
 */
function GlowCard({ children, className, as: As = "div" }) {
  const ref = useCursorGlow();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(As, {
    ref,
    className: cn("cursor-glow", className),
    children,
  });
}
//#endregion
export { GlowCard as t };
