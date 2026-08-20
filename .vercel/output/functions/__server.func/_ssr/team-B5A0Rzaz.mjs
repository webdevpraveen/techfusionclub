import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import {
  n as require_jsx_runtime,
  r as require_react,
} from "../_libs/react+tanstack__react-query.mjs";
import {
  S as Github,
  b as Instagram,
  f as RotateCcw,
  v as Linkedin,
  y as Link2,
} from "../_libs/lucide-react.mjs";
import { n as club } from "./router-CJDMVHkU.mjs";
import { a as useCursorGlow, n as Section, t as Reveal } from "./Section-DVbDmvsO.mjs";
import { t as CTABanner } from "./CTABanner-ByIzD7-T.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/team-B5A0Rzaz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tierMeta = {
  faculty: {
    label: "Faculty Coordinators",
    description: "Departmental oversight, institutional support, and university guidance.",
  },
  gsec: {
    label: "General Secretaries",
    description:
      "Overall leadership accountable for the club's direction, vision, and campus operations.",
  },
  jsec: {
    label: "Joint Secretaries",
    description: "Coordinating inter-departmental logistics, outreach, and internal mentorship.",
  },
  head: {
    label: "Department Heads",
    description:
      "Heads leading Technical, Documentation, Media, Creative, Management, and Treasury.",
  },
  core: {
    label: "Core Teams",
    description:
      "Core members driving Technical, Documentation, Media, Creative, and Management execution.",
  },
};
var members = [
  {
    id: "veena-singh",
    name: "Dr. Veena Singh",
    fullName: "Dr. Veena Singh",
    designation: "Faculty Coordinator",
    tier: "faculty",
    domain: "University Club Coordinator",
    branch: "IMCE",
    bio: "Chief Faculty Mentor guiding university student technical societies, annual tech fests, inter-departmental logistics, and leadership development.",
    photo: "https://srmu.ac.in/assets/dr-veena-singh-CKCbgSAF.webp",
    accessCode: "TF-FAC-0001",
    socials: { linkedin: "https://www.linkedin.com/in/prof-dr-veena-singh-26a48b196/" },
  },
  {
    id: "abhishek-saxena",
    name: "Er. Abhishek Kumar Saxena",
    fullName: "Er. Abhishek Kumar Saxena",
    designation: "Faculty Coordinator",
    tier: "faculty",
    domain: "Technical Society",
    branch: "IQAC",
    bio: "Convener driving student technical projects, hackathons, open-source build nights, and university digital media initiatives.",
    photo: "https://www.vivekatheintelligence.in/abhishek.jpg",
    accessCode: "TF-FAC-0002",
    socials: { linkedin: "https://www.linkedin.com/in/abhishek-kumar-saxena-80a51111a/" },
  },
  {
    id: "mrityunjay-rai",
    name: "Dr. Mrityunjay Rai",
    fullName: "Dr. Mrityunjay Rai",
    designation: "Faculty Coordinator",
    tier: "faculty",
    domain: "Technical Society",
    branch: "IQAC",
    bio: "Coordinating inter-departmental technical competitions, hardware/software mentorship ladders, and engineering research labs.",
    photo:
      "https://th.bing.com/th/id/OIP.90nfazrcFSf6EtqDH9jVzgHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    accessCode: "TF-FAC-0003",
    socials: { linkedin: "https://www.linkedin.com/in/dr-mritunjay-rai-36b85118/" },
  },
  {
    id: "sunny-kumar",
    name: "Er. Sunny Kumar",
    fullName: "Er. Sunny Kumar",
    designation: "Faculty Coordinator",
    tier: "faculty",
    domain: "Technical Society",
    branch: "DCSE",
    bio: "Mentoring web & mobile app development bootcamps, competitive coding tracks, and student project showcases.",
    photo: "https://srmu.ac.in/storage/teams/11zon-cropped-5-11zon-23022411165423.jpeg",
    accessCode: "TF-FAC-0004",
    socials: { linkedin: "https://www.linkedin.com/in/sunny-kumar-a7910b234/" },
  },
  {
    id: "neeta-bhusal-sharma",
    name: "Er. Neeta Bhusal Sharma",
    fullName: "Er. Neeta Bhusal Sharma",
    designation: "Faculty Coordinator",
    tier: "faculty",
    domain: "Technical Society",
    branch: "DCSE",
    bio: "Guiding AI/ML workshops, cybersecurity hackathons, UI/UX design sprints, and student team development.",
    photo: "https://srmu.ac.in/storage/teams/11zon-cropped-2-11zon-23022410512735.jpeg",
    accessCode: "TF-FAC-0005",
    socials: {},
  },
  {
    id: "rashi-malik",
    name: "Rashi Malik",
    fullName: "Rashi Malik",
    designation: "General Secretary",
    tier: "gsec",
    domain: "Tech Fusion Club",
    branch: "B.TECH CS (DS+AI)",
    bio: "General Secretary of Tech Fusion Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Rashi&backgroundColor=e2e8f0",
    accessCode: "TF-GSEC-01",
    socials: {},
  },
  {
    id: "anshuma-yadav",
    name: "Anshuma Yadav",
    fullName: "Anshuma Yadav",
    designation: "General Secretary",
    tier: "gsec",
    domain: "Tech Fusion Club",
    branch: "B.TECH CS(CC+AI)",
    bio: "General Secretary of Tech Fusion Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Anshuma&backgroundColor=e2e8f0",
    accessCode: "TF-GSEC-02",
    socials: {},
  },
  {
    id: "divyanshi-pandey",
    name: "Divyanshi Pandey",
    fullName: "Divyanshi Pandey",
    designation: "General Secretary",
    tier: "gsec",
    domain: "Tech Fusion Club",
    branch: "B.TECH CS(CC+AI)",
    bio: "General Secretary of Tech Fusion Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Divyanshi&backgroundColor=e2e8f0",
    accessCode: "TF-GSEC-03",
    socials: {},
  },
  {
    id: "raunak-srivastava",
    name: "Raunak Srivastava",
    fullName: "Raunak Srivastava",
    designation: "General Secretary",
    tier: "gsec",
    domain: "Tech Fusion Club",
    branch: "B.TECH ECE",
    bio: "General Secretary of Tech Fusion Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Raunak&backgroundColor=e2e8f0",
    accessCode: "TF-GSEC-04",
    socials: {},
  },
  {
    id: "anshu-kasaudhan",
    name: "Anshu Kasaudhan",
    fullName: "Anshu Kasaudhan",
    designation: "General Secretary",
    tier: "gsec",
    domain: "E-sports Club",
    branch: "B.Tech CSE",
    bio: "General Secretary of E-sports Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Anshu&backgroundColor=e2e8f0",
    accessCode: "ES-GSEC-01",
    socials: {},
  },
  {
    id: "sanskar-dixit",
    name: "Sanskar Dixit",
    fullName: "Sanskar Dixit",
    designation: "General Secretary",
    tier: "gsec",
    domain: "E-sports Club",
    branch: "B.Tech CSE",
    bio: "General Secretary of E-sports Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Sanskar&backgroundColor=e2e8f0",
    accessCode: "ES-GSEC-02",
    socials: {},
  },
  {
    id: "aakarsh-mishra",
    name: "Aakarsh Mishra",
    fullName: "Aakarsh Mishra",
    designation: "General Secretary",
    tier: "gsec",
    domain: "E-sports Club",
    branch: "B.Tech CSE",
    bio: "General Secretary of E-sports Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Aakarsh&backgroundColor=e2e8f0",
    accessCode: "ES-GSEC-03",
    socials: {},
  },
  {
    id: "aviral-mishra-gsec",
    name: "Aviral Mishra",
    fullName: "Aviral Mishra",
    designation: "General Secretary",
    tier: "gsec",
    domain: "E-sports Club",
    branch: "B.Tech",
    bio: "General Secretary of E-sports Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=AviralG&backgroundColor=e2e8f0",
    accessCode: "ES-GSEC-04",
    socials: {},
  },
  {
    id: "prateek-singh",
    name: "Prateek Singh",
    fullName: "Prateek Singh",
    designation: "Joint Secretary",
    tier: "jsec",
    domain: "Tech Fusion Club",
    branch: "BBA",
    bio: "Joint Secretary of Tech Fusion Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Prateek&backgroundColor=e2e8f0",
    accessCode: "TF-JSEC-01",
    socials: {},
  },
  {
    id: "jahnvi-pandey",
    name: "Jahnvi Pandey",
    fullName: "Jahnvi Pandey",
    designation: "Joint Secretary",
    tier: "jsec",
    domain: "Tech Fusion Club",
    branch: "BCA(DS+AI)",
    bio: "Joint Secretary of Tech Fusion Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Jahnvi&backgroundColor=e2e8f0",
    accessCode: "TF-JSEC-02",
    socials: {},
  },
  {
    id: "kushagra-dev",
    name: "Kushagra Dev",
    fullName: "Kushagra Dev",
    designation: "Joint Secretary",
    tier: "jsec",
    domain: "Tech Fusion Club",
    branch: "B.TECH CSE",
    bio: "Joint Secretary of Tech Fusion Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Kushagra&backgroundColor=e2e8f0",
    accessCode: "TF-JSEC-03",
    socials: {},
  },
  {
    id: "aviral-mishra-jsec",
    name: "Aviral Mishra",
    fullName: "Aviral Mishra",
    designation: "Joint Secretary",
    tier: "jsec",
    domain: "E-sports Club",
    branch: "B.Tech CS (DS+AI)",
    bio: "Joint Secretary of E-sports Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=AviralJ&backgroundColor=e2e8f0",
    accessCode: "ES-JSEC-01",
    socials: {},
  },
  {
    id: "divyansh-srivastava",
    name: "Divyansh Srivastava",
    fullName: "Divyansh Srivastava",
    designation: "Joint Secretary",
    tier: "jsec",
    domain: "E-sports Club",
    branch: "B.Tech CSE (DS+AI)",
    bio: "Joint Secretary of E-sports Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Divyansh&backgroundColor=e2e8f0",
    accessCode: "ES-JSEC-02",
    socials: {},
  },
  {
    id: "riza-khaleel",
    name: "Riza Khaleel",
    fullName: "Riza Khaleel",
    designation: "Treasurer",
    tier: "head",
    domain: "Tech Fusion Club",
    branch: "B.TECH ECE",
    bio: "Treasurer of Tech Fusion Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Riza&backgroundColor=e2e8f0",
    accessCode: "TF-HEAD-01",
    socials: {},
  },
  {
    id: "ashish-singh",
    name: "Ashish Singh",
    fullName: "Ashish Singh",
    designation: "Treasurer",
    tier: "head",
    domain: "E-sports Club",
    branch: "B.Tech (CS)",
    bio: "Treasurer of E-sports Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Ashish&backgroundColor=e2e8f0",
    accessCode: "ES-HEAD-01",
    socials: {},
  },
  {
    id: "rudra-pratap-singh",
    name: "Rudra Pratap Singh",
    fullName: "Rudra Pratap Singh",
    designation: "Documentation Head",
    tier: "head",
    domain: "Tech Fusion Club",
    branch: "BBA BA",
    bio: "Documentation Head of Tech Fusion Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Rudra&backgroundColor=e2e8f0",
    accessCode: "TF-HEAD-02",
    socials: {},
  },
  {
    id: "rumana-mahmood",
    name: "Rumana Mahmood Ansari",
    fullName: "Rumana Mahmood Ansari",
    designation: "Documentation Head",
    tier: "head",
    domain: "Tech Fusion Club",
    branch: "B.TECH ECE",
    bio: "Documentation Head of Tech Fusion Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Rumana&backgroundColor=e2e8f0",
    accessCode: "TF-HEAD-03",
    socials: {},
  },
  {
    id: "aimen-abidi",
    name: "Aimen Abidi",
    fullName: "Aimen Abidi",
    designation: "Documentation Head",
    tier: "head",
    domain: "E-sports Club",
    branch: "B.Tech CSE (AI+ML)",
    bio: "Documentation Head of E-sports Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Aimen&backgroundColor=e2e8f0",
    accessCode: "ES-HEAD-02",
    socials: {},
  },
  {
    id: "ayaan",
    name: "Ayaan",
    fullName: "Ayaan",
    designation: "Creative Head",
    tier: "head",
    domain: "Tech Fusion Club",
    branch: "BCA",
    bio: "Creative Head of Tech Fusion Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Ayaan&backgroundColor=e2e8f0",
    accessCode: "TF-HEAD-04",
    socials: {},
  },
  {
    id: "shubham-vishwakarma",
    name: "Shubham Vishwakarma",
    fullName: "Shubham Vishwakarma",
    designation: "Media Head",
    tier: "head",
    domain: "Tech Fusion Club",
    branch: "B.TECH CS (DS+AI)",
    bio: "Media Head of Tech Fusion Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Shubham&backgroundColor=e2e8f0",
    accessCode: "TF-HEAD-05",
    socials: {},
  },
  {
    id: "shreya-tripathi",
    name: "Shreya Tripathi",
    fullName: "Shreya Tripathi",
    designation: "Media Head",
    tier: "head",
    domain: "E-sports Club",
    branch: "B.Tech (ECE)",
    bio: "Media Head of E-sports Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Shreya&backgroundColor=e2e8f0",
    accessCode: "ES-HEAD-03",
    socials: {},
  },
  {
    id: "astik-singh",
    name: "Astik Singh",
    fullName: "Astik Singh",
    designation: "Technical Head",
    tier: "head",
    domain: "Tech Fusion Club",
    branch: "B.TECH ECE",
    bio: "Technical Head of Tech Fusion Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Astik&backgroundColor=e2e8f0",
    accessCode: "TF-HEAD-06",
    socials: {},
  },
  {
    id: "subhadeep-pal",
    name: "Subhadeep Pal",
    fullName: "Subhadeep Pal",
    designation: "Technical Head",
    tier: "head",
    domain: "Tech Fusion Club",
    branch: "B.TECH ME",
    bio: "Technical Head of Tech Fusion Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Subhadeep&backgroundColor=e2e8f0",
    accessCode: "TF-HEAD-07",
    socials: {},
  },
  {
    id: "praveen-singh",
    name: "Praveen Singh",
    fullName: "Praveen Singh",
    designation: "Technical Head",
    tier: "head",
    domain: "E-sports Club",
    branch: "BCA",
    bio: "Technical Head of E-sports Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Praveen&backgroundColor=e2e8f0",
    accessCode: "ES-HEAD-04",
    socials: {},
  },
  {
    id: "abdul-sabroj-khan",
    name: "Abdul Sabroj Khan",
    fullName: "Abdul Sabroj Khan",
    designation: "Management Head",
    tier: "head",
    domain: "Tech Fusion Club",
    branch: "B.TECH ME",
    bio: "Management Head of Tech Fusion Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Abdul&backgroundColor=e2e8f0",
    accessCode: "TF-HEAD-08",
    socials: {},
  },
  {
    id: "aditya-pratap-singh",
    name: "Aditya Pratap Singh",
    fullName: "Aditya Pratap Singh",
    designation: "Management Head",
    tier: "head",
    domain: "Tech Fusion Club",
    branch: "B.TECH ME",
    bio: "Management Head of Tech Fusion Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Aditya&backgroundColor=e2e8f0",
    accessCode: "TF-HEAD-09",
    socials: {},
  },
  {
    id: "vikas-kumar",
    name: "Vikas Kumar",
    fullName: "Vikas Kumar",
    designation: "Management Head",
    tier: "head",
    domain: "Tech Fusion Club",
    branch: "B.TECH CSE",
    bio: "Management Head of Tech Fusion Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Vikas&backgroundColor=e2e8f0",
    accessCode: "TF-HEAD-10",
    socials: {},
  },
  {
    id: "ashutosh-singh",
    name: "Ashutosh Singh",
    fullName: "Ashutosh Singh",
    designation: "Management Head",
    tier: "head",
    domain: "E-sports Club",
    branch: "B.TECH CS (DS+AI)",
    bio: "Management Head of E-sports Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Ashutosh&backgroundColor=e2e8f0",
    accessCode: "ES-HEAD-05",
    socials: {},
  },
  {
    id: "abhishek-jaiswal",
    name: "Abhishek Jaiswal",
    fullName: "Abhishek Jaiswal",
    designation: "Management Head",
    tier: "head",
    domain: "E-sports Club",
    branch: "B.Tech CS (DS+AI)",
    bio: "Management Head of E-sports Club.",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Abhishek&backgroundColor=e2e8f0",
    accessCode: "ES-HEAD-06",
    socials: {},
  },
];
function membersByTier(tier) {
  return members.filter((m) => m.tier === tier);
}
var socialIcons = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  portfolio: Link2,
};
var socialLabels = {
  linkedin: "LinkedIn",
  github: "GitHub",
  instagram: "Instagram",
  portfolio: "Portfolio",
};
/**
 * Flip-card member badge. Front shows the photo, name and designation;
 * activating the card flips it to a futuristic access-badge back face.
 * Works with click, tap, Enter and Space — never hover-only.
 */
function MemberCard({ member, size = "md", index = 0 }) {
  const [flipped, setFlipped] = (0, import_react.useState)(false);
  const backId = (0, import_react.useId)();
  (0, import_react.useEffect)(() => {
    if (!flipped) return;
    const onKey = (e) => {
      if (e.key === "Escape") setFlipped(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [flipped]);
  const heights = {
    lg: "h-[30rem] sm:h-[34rem]",
    md: "h-[26rem] sm:h-[28rem]",
    sm: "h-[22rem]",
  };
  const glowRef = useCursorGlow();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    ref: glowRef,
    className: cn("group cursor-glow rounded-3xl", heights[size]),
    style: { perspective: "1400px" },
    "data-cursor": "view",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
      type: "button",
      onClick: () => setFlipped((v) => !v),
      "aria-pressed": flipped,
      "aria-expanded": flipped,
      "aria-controls": backId,
      "aria-label": `${member.name}, ${member.designation}. ${flipped ? "Hide" : "Show"} member ID details`,
      className:
        "relative block size-full rounded-3xl text-left outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className:
          "relative size-full transition-transform duration-[750ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        style: {
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : void 0,
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flip-face glass overflow-hidden rounded-3xl",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                src: member.photo,
                alt: `${member.name}, ${member.designation}`,
                loading: index < 3 ? "eager" : "lazy",
                decoding: "async",
                className:
                  "size-full object-cover opacity-90 saturate-[0.7] transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-100 group-hover:saturate-100",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className:
                  "absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "absolute inset-x-0 bottom-0 p-6",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "eyebrow",
                    children: member.designation,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                    className: "mt-2 font-display text-xl font-bold leading-tight sm:text-2xl",
                    children: member.name,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                    className:
                      "mt-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className:
                          "inline-block size-1.5 rounded-full bg-primary animate-pulse-dot",
                      }),
                      "Tap to reveal ID",
                    ],
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            id: backId,
            className:
              "flip-face glass-strong overflow-hidden rounded-3xl border-primary/40 p-5 sm:p-6",
            style: { transform: "rotateY(180deg)" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "pointer-events-none absolute inset-0 overflow-hidden opacity-40",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className:
                    "h-16 w-full bg-gradient-to-b from-transparent via-primary/25 to-transparent blur-md animate-scan",
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "relative flex size-full flex-col",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "flex items-start justify-between gap-3",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                            className:
                              "font-mono text-[10px] uppercase tracking-[0.2em] text-primary-glow",
                            children: club.name,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                            className:
                              "mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground",
                            children: "Member access badge",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className:
                          "grid size-10 shrink-0 place-items-center rounded-lg border border-primary/40 bg-primary/10",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "font-display text-xs font-bold text-primary-glow",
                          children: club.initials,
                        }),
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "divider-glow my-4",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                    className: "font-display text-lg font-bold leading-tight sm:text-xl",
                    children: member.fullName,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "mt-1 text-sm font-medium text-primary-glow",
                    children: member.designation,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
                    className: "mt-4 grid grid-cols-2 gap-3 text-xs",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
                            className:
                              "font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground",
                            children: "Domain",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
                            className: "mt-1 font-medium",
                            children: member.domain,
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "col-span-2",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
                            className:
                              "font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground",
                            children: "Branch",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
                            className: "mt-1 font-medium",
                            children: member.branch,
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className:
                      "mt-4 border-l-2 border-primary/40 pl-3 text-xs leading-relaxed text-muted-foreground",
                    children: member.bio,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "mt-auto pt-5",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "flex flex-wrap items-center gap-2",
                        children: [
                          Object.entries(member.socials).map(([key, href]) => {
                            const Icon = socialIcons[key];
                            if (!Icon || !href) return null;
                            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "a",
                              {
                                href,
                                target: "_blank",
                                rel: "noreferrer noopener",
                                tabIndex: flipped ? 0 : -1,
                                "aria-label": `${member.name} on ${socialLabels[key]}`,
                                onClick: (e) => e.stopPropagation(),
                                className:
                                  "grid size-9 place-items-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary-glow",
                                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
                                  className: "size-4",
                                }),
                              },
                              key,
                            );
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                            className:
                              "ml-auto inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
                                className: "size-3",
                              }),
                              " Flip back",
                            ],
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "mt-4 flex items-center gap-3",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            "aria-hidden": "true",
                            className:
                              "h-6 flex-1 rounded-sm bg-[repeating-linear-gradient(90deg,currentColor_0_2px,transparent_2px_5px)] text-primary-glow/35",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className:
                              "font-mono text-[10px] tracking-[0.12em] text-muted-foreground",
                            children: member.accessCode,
                          }),
                        ],
                      }),
                    ],
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
var tiers = [
  {
    tier: "faculty",
    size: "sm",
    cols: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
  },
  {
    tier: "gsec",
    size: "sm",
    cols: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
  },
  {
    tier: "jsec",
    size: "sm",
    cols: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
  },
  {
    tier: "head",
    size: "sm",
    cols: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
  },
  {
    tier: "core",
    size: "sm",
    cols: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
  },
];
function Team() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
        className: "pb-8",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "eyebrow",
              children: "The Leadership & Team",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
              className:
                "mt-4 max-w-4xl text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl",
              children: "The hierarchy powering Tech Fusion Club.",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground",
              children:
                "Tap or click any card to flip it and reveal that member's official access badge — domain, branch, year, and ID code.",
            }),
          ],
        }),
      }),
      tiers.map(({ tier, size, cols }) => {
        const people = membersByTier(tier);
        if (people.length === 0) return null;
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          Section,
          {
            className: "py-10 sm:py-12",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
                className: "flex flex-col gap-2 border-b border-border/70 pb-5",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "font-display text-2xl font-bold text-foreground",
                    children: tierMeta[tier].label,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "max-w-2xl text-sm leading-relaxed text-muted-foreground",
                    children: tierMeta[tier].description,
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
                className: `mt-8 grid gap-5 ${cols}`,
                children: people.map((m, i) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "li",
                    {
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemberCard, {
                        member: m,
                        size,
                        index: i,
                      }),
                    },
                    m.id,
                  ),
                ),
              }),
            ],
          },
          tier,
        );
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABanner, {
        eyebrow: "Join the roster",
        title: "Your badge could be on this page next semester.",
        body: "Applications open twice a year. Pick a domain, meet your mentor, and start shipping.",
      }),
    ],
  });
}
//#endregion
export { Team as component };
