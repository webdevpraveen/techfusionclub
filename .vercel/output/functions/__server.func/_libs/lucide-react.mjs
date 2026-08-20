import { r as __toESM } from "../_runtime.mjs";
import { r as require_react } from "./react+tanstack__react-query.mjs";
//#region node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js
var import_react = /* @__PURE__ */ __toESM(require_react());
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var mergeClasses = (...classes) =>
  classes
    .filter((className, index, array) => {
      return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    })
    .join(" ")
    .trim();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var toCamelCase = (string) =>
  string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) =>
    p2 ? p2.toUpperCase() : p1.toLowerCase(),
  );
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
//#endregion
//#region node_modules/lucide-react/dist/esm/defaultAttributes.js
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var hasA11yProp = (props) => {
  for (const prop in props)
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
  return false;
};
//#endregion
//#region node_modules/lucide-react/dist/esm/Icon.js
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Icon = (0, import_react.forwardRef)(
  (
    {
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      iconNode,
      ...rest
    },
    ref,
  ) =>
    (0, import_react.createElement)(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? (Number(strokeWidth) * 24) / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...(!children && !hasA11yProp(rest) && { "aria-hidden": "true" }),
        ...rest,
      },
      [
        ...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)),
        ...(Array.isArray(children) ? children : [children]),
      ],
    ),
);
//#endregion
//#region node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var createLucideIcon = (iconName, iconNode) => {
  const Component = (0, import_react.forwardRef)(({ className, ...props }, ref) =>
    (0, import_react.createElement)(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className,
      ),
      ...props,
    }),
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ArrowRight = createLucideIcon("arrow-right", [
  [
    "path",
    {
      d: "M5 12h14",
      key: "1ays0h",
    },
  ],
  [
    "path",
    {
      d: "m12 5 7 7-7 7",
      key: "xquz4c",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ArrowUpRight = createLucideIcon("arrow-up-right", [
  [
    "path",
    {
      d: "M7 7h10v10",
      key: "1tivn9",
    },
  ],
  [
    "path",
    {
      d: "M7 17 17 7",
      key: "1vkiza",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Award = createLucideIcon("award", [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv",
    },
  ],
  [
    "circle",
    {
      cx: "12",
      cy: "8",
      r: "6",
      key: "1vp47v",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var BookOpen = createLucideIcon("book-open", [
  [
    "path",
    {
      d: "M12 7v14",
      key: "1akyts",
    },
  ],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Building2 = createLucideIcon("building-2", [
  [
    "path",
    {
      d: "M10 12h4",
      key: "a56b0p",
    },
  ],
  [
    "path",
    {
      d: "M10 8h4",
      key: "1sr2af",
    },
  ],
  [
    "path",
    {
      d: "M14 21v-3a2 2 0 0 0-4 0v3",
      key: "1rgiei",
    },
  ],
  [
    "path",
    {
      d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
      key: "secmi2",
    },
  ],
  [
    "path",
    {
      d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",
      key: "16ra0t",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var CalendarDays = createLucideIcon("calendar-days", [
  [
    "path",
    {
      d: "M8 2v4",
      key: "1cmpym",
    },
  ],
  [
    "path",
    {
      d: "M16 2v4",
      key: "4m81vk",
    },
  ],
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "4",
      rx: "2",
      key: "1hopcy",
    },
  ],
  [
    "path",
    {
      d: "M3 10h18",
      key: "8toen8",
    },
  ],
  [
    "path",
    {
      d: "M8 14h.01",
      key: "6423bh",
    },
  ],
  [
    "path",
    {
      d: "M12 14h.01",
      key: "1etili",
    },
  ],
  [
    "path",
    {
      d: "M16 14h.01",
      key: "1gbofw",
    },
  ],
  [
    "path",
    {
      d: "M8 18h.01",
      key: "lrp35t",
    },
  ],
  [
    "path",
    {
      d: "M12 18h.01",
      key: "mhygvu",
    },
  ],
  [
    "path",
    {
      d: "M16 18h.01",
      key: "kzsmim",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ChevronLeft = createLucideIcon("chevron-left", [
  [
    "path",
    {
      d: "m15 18-6-6 6-6",
      key: "1wnfg3",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ChevronRight = createLucideIcon("chevron-right", [
  [
    "path",
    {
      d: "m9 18 6-6-6-6",
      key: "mthhwq",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var CircleCheck = createLucideIcon("circle-check", [
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay",
    },
  ],
  [
    "path",
    {
      d: "m9 12 2 2 4-4",
      key: "dzmm74",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Cloud = createLucideIcon("cloud", [
  [
    "path",
    {
      d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
      key: "p7xjir",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var CodeXml = createLucideIcon("code-xml", [
  [
    "path",
    {
      d: "m18 16 4-4-4-4",
      key: "1inbqp",
    },
  ],
  [
    "path",
    {
      d: "m6 8-4 4 4 4",
      key: "15zrgr",
    },
  ],
  [
    "path",
    {
      d: "m14.5 4-5 16",
      key: "e7oirm",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Cpu = createLucideIcon("cpu", [
  [
    "path",
    {
      d: "M12 20v2",
      key: "1lh1kg",
    },
  ],
  [
    "path",
    {
      d: "M12 2v2",
      key: "tus03m",
    },
  ],
  [
    "path",
    {
      d: "M17 20v2",
      key: "1rnc9c",
    },
  ],
  [
    "path",
    {
      d: "M17 2v2",
      key: "11trls",
    },
  ],
  [
    "path",
    {
      d: "M2 12h2",
      key: "1t8f8n",
    },
  ],
  [
    "path",
    {
      d: "M2 17h2",
      key: "7oei6x",
    },
  ],
  [
    "path",
    {
      d: "M2 7h2",
      key: "asdhe0",
    },
  ],
  [
    "path",
    {
      d: "M20 12h2",
      key: "1q8mjw",
    },
  ],
  [
    "path",
    {
      d: "M20 17h2",
      key: "1fpfkl",
    },
  ],
  [
    "path",
    {
      d: "M20 7h2",
      key: "1o8tra",
    },
  ],
  [
    "path",
    {
      d: "M7 20v2",
      key: "4gnj0m",
    },
  ],
  [
    "path",
    {
      d: "M7 2v2",
      key: "1i4yhu",
    },
  ],
  [
    "rect",
    {
      x: "4",
      y: "4",
      width: "16",
      height: "16",
      rx: "2",
      key: "1vbyd7",
    },
  ],
  [
    "rect",
    {
      x: "8",
      y: "8",
      width: "8",
      height: "8",
      rx: "1",
      key: "z9xiuo",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ExternalLink = createLucideIcon("external-link", [
  [
    "path",
    {
      d: "M15 3h6v6",
      key: "1q9fwt",
    },
  ],
  [
    "path",
    {
      d: "M10 14 21 3",
      key: "gplh6r",
    },
  ],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var FileCheck = createLucideIcon("file-check", [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6",
    },
  ],
  [
    "path",
    {
      d: "M14 2v5a1 1 0 0 0 1 1h5",
      key: "wfsgrz",
    },
  ],
  [
    "path",
    {
      d: "m9 15 2 2 4-4",
      key: "1grp1n",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Github = createLucideIcon("github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef",
    },
  ],
  [
    "path",
    {
      d: "M9 18c-4.51 2-5-2-7-2",
      key: "9comsn",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var GraduationCap = createLucideIcon("graduation-cap", [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0",
    },
  ],
  [
    "path",
    {
      d: "M22 10v6",
      key: "1lu8f3",
    },
  ],
  [
    "path",
    {
      d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
      key: "1r8lef",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Instagram = createLucideIcon("instagram", [
  [
    "rect",
    {
      width: "20",
      height: "20",
      x: "2",
      y: "2",
      rx: "5",
      ry: "5",
      key: "2e1cvw",
    },
  ],
  [
    "path",
    {
      d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
      key: "9exkf1",
    },
  ],
  [
    "line",
    {
      x1: "17.5",
      x2: "17.51",
      y1: "6.5",
      y2: "6.5",
      key: "r4j83e",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Link2 = createLucideIcon("link-2", [
  [
    "path",
    {
      d: "M9 17H7A5 5 0 0 1 7 7h2",
      key: "8i5ue5",
    },
  ],
  [
    "path",
    {
      d: "M15 7h2a5 5 0 1 1 0 10h-2",
      key: "1b9ql8",
    },
  ],
  [
    "line",
    {
      x1: "8",
      x2: "16",
      y1: "12",
      y2: "12",
      key: "1jonct",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Linkedin = createLucideIcon("linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f",
    },
  ],
  [
    "rect",
    {
      width: "4",
      height: "12",
      x: "2",
      y: "9",
      key: "mk3on5",
    },
  ],
  [
    "circle",
    {
      cx: "4",
      cy: "4",
      r: "2",
      key: "bt5ra8",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Mail = createLucideIcon("mail", [
  [
    "path",
    {
      d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
      key: "132q7q",
    },
  ],
  [
    "rect",
    {
      x: "2",
      y: "4",
      width: "20",
      height: "16",
      rx: "2",
      key: "izxlao",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var MapPin = createLucideIcon("map-pin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  [
    "circle",
    {
      cx: "12",
      cy: "10",
      r: "3",
      key: "ilqhr7",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Menu = createLucideIcon("menu", [
  [
    "path",
    {
      d: "M4 5h16",
      key: "1tepv9",
    },
  ],
  [
    "path",
    {
      d: "M4 12h16",
      key: "1lakjw",
    },
  ],
  [
    "path",
    {
      d: "M4 19h16",
      key: "1djgab",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Moon = createLucideIcon("moon", [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Rocket = createLucideIcon("rocket", [
  [
    "path",
    {
      d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
      key: "qeys4",
    },
  ],
  [
    "path",
    {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
      key: "u4xsad",
    },
  ],
  [
    "path",
    {
      d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
      key: "676m9",
    },
  ],
  [
    "path",
    {
      d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",
      key: "92ym6u",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var RotateCcw = createLucideIcon("rotate-ccw", [
  [
    "path",
    {
      d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
      key: "1357e3",
    },
  ],
  [
    "path",
    {
      d: "M3 3v5h5",
      key: "1xhq8a",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ShieldCheck = createLucideIcon("shield-check", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
  [
    "path",
    {
      d: "m9 12 2 2 4-4",
      key: "dzmm74",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Shield = createLucideIcon("shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Smartphone = createLucideIcon("smartphone", [
  [
    "rect",
    {
      width: "14",
      height: "20",
      x: "5",
      y: "2",
      rx: "2",
      ry: "2",
      key: "1yt0o3",
    },
  ],
  [
    "path",
    {
      d: "M12 18h.01",
      key: "mhygvu",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Sparkles = createLucideIcon("sparkles", [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr",
    },
  ],
  [
    "path",
    {
      d: "M20 2v4",
      key: "1rf3ol",
    },
  ],
  [
    "path",
    {
      d: "M22 4h-4",
      key: "gwowj6",
    },
  ],
  [
    "circle",
    {
      cx: "4",
      cy: "20",
      r: "2",
      key: "6kqj1y",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Star = createLucideIcon("star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Sun = createLucideIcon("sun", [
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "4",
      key: "4exip2",
    },
  ],
  [
    "path",
    {
      d: "M12 2v2",
      key: "tus03m",
    },
  ],
  [
    "path",
    {
      d: "M12 20v2",
      key: "1lh1kg",
    },
  ],
  [
    "path",
    {
      d: "m4.93 4.93 1.41 1.41",
      key: "149t6j",
    },
  ],
  [
    "path",
    {
      d: "m17.66 17.66 1.41 1.41",
      key: "ptbguv",
    },
  ],
  [
    "path",
    {
      d: "M2 12h2",
      key: "1t8f8n",
    },
  ],
  [
    "path",
    {
      d: "M20 12h2",
      key: "1q8mjw",
    },
  ],
  [
    "path",
    {
      d: "m6.34 17.66-1.41 1.41",
      key: "1m8zz5",
    },
  ],
  [
    "path",
    {
      d: "m19.07 4.93-1.41 1.41",
      key: "1shlcs",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Terminal = createLucideIcon("terminal", [
  [
    "path",
    {
      d: "M12 19h8",
      key: "baeox8",
    },
  ],
  [
    "path",
    {
      d: "m4 17 6-6-6-6",
      key: "1yngyt",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var UserPlus = createLucideIcon("user-plus", [
  [
    "path",
    {
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
      key: "1yyitq",
    },
  ],
  [
    "circle",
    {
      cx: "9",
      cy: "7",
      r: "4",
      key: "nufk8",
    },
  ],
  [
    "line",
    {
      x1: "19",
      x2: "19",
      y1: "8",
      y2: "14",
      key: "1bvyxn",
    },
  ],
  [
    "line",
    {
      x1: "22",
      x2: "16",
      y1: "11",
      y2: "11",
      key: "1shjgl",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Users = createLucideIcon("users", [
  [
    "path",
    {
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
      key: "1yyitq",
    },
  ],
  [
    "path",
    {
      d: "M16 3.128a4 4 0 0 1 0 7.744",
      key: "16gr8j",
    },
  ],
  [
    "path",
    {
      d: "M22 21v-2a4 4 0 0 0-3-3.87",
      key: "kshegd",
    },
  ],
  [
    "circle",
    {
      cx: "9",
      cy: "7",
      r: "4",
      key: "nufk8",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var X = createLucideIcon("x", [
  [
    "path",
    {
      d: "M18 6 6 18",
      key: "1bl5f8",
    },
  ],
  [
    "path",
    {
      d: "m6 6 12 12",
      key: "d8bk6v",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Zap = createLucideIcon("zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db",
    },
  ],
]);
//#endregion
export {
  ChevronLeft as A,
  FileCheck as C,
  Cloud as D,
  CodeXml as E,
  ArrowUpRight as F,
  ArrowRight as I,
  Building2 as M,
  BookOpen as N,
  CircleCheck as O,
  Award as P,
  Github as S,
  Cpu as T,
  Mail as _,
  Terminal as a,
  Instagram as b,
  Sparkles as c,
  ShieldCheck as d,
  RotateCcw as f,
  MapPin as g,
  Menu as h,
  UserPlus as i,
  CalendarDays as j,
  ChevronRight as k,
  Smartphone as l,
  Moon as m,
  X as n,
  Sun as o,
  Rocket as p,
  Users as r,
  Star as s,
  Zap as t,
  Shield as u,
  Linkedin as v,
  ExternalLink as w,
  GraduationCap as x,
  Link2 as y,
};
