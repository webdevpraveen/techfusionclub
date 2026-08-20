import { n as e } from "./utils-Bu-ICgPr.js";
import { t } from "./CTABanner-DVwM-bl3.js";
import { t as n } from "./github-CMjJcyRn.js";
import { t as r } from "./linkedin-IyalMxU_.js";
import { r as i, t as a } from "./Section-Bzy8-56x.js";
import { t as o } from "./GlowCard-CKkiIY9F.js";
var s = Array.from({ length: 50 }).map((e, t) => ({
    id: `member-${t + 1}`,
    name: `Member ${t + 1}`,
    course: [
      `B.Tech Computer Science`,
      `B.Tech Information Technology`,
      `B.Tech AI & Data Science`,
      `B.Tech Computer Engineering`,
    ][t % 4],
    tenure: [`2021-2025`, `2020-2024`, `2019-2023`][t % 3],
    post: [`General Secretary`, `Technical Head`, `Core Member`, `Joint Secretary`, `Media Head`][
      t % 5
    ],
    photo: `https://api.dicebear.com/9.x/notionists/svg?seed=member${t + 1}&backgroundColor=e2e8f0`,
    socials: { linkedin: `#`, github: t % 2 == 0 ? `#` : void 0 },
  })),
  c = e();
function l({ alumnus: e, index: t }) {
  return (0, c.jsxs)(o, {
    className: `glass lift group flex h-full flex-col overflow-hidden rounded-2xl`,
    children: [
      (0, c.jsxs)(`div`, {
        className: `relative aspect-square overflow-hidden bg-surface`,
        children: [
          e.photo
            ? (0, c.jsx)(`img`, {
                src: e.photo,
                alt: e.name,
                loading: t < 8 ? `eager` : `lazy`,
                className: `size-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0`,
              })
            : (0, c.jsx)(`div`, {
                className: `flex size-full items-center justify-center font-display text-4xl text-muted-foreground/30`,
                children: e.name.charAt(0),
              }),
          (0, c.jsx)(`div`, {
            className: `absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80`,
          }),
          (0, c.jsx)(`div`, {
            className: `absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4`,
            children: (0, c.jsxs)(`div`, {
              children: [
                (0, c.jsx)(`h3`, {
                  className: `font-display text-xl font-bold text-foreground`,
                  children: e.name,
                }),
                (0, c.jsx)(`p`, {
                  className: `font-mono text-[10px] uppercase tracking-[0.15em] text-primary-glow`,
                  children: e.post,
                }),
              ],
            }),
          }),
        ],
      }),
      (0, c.jsxs)(`div`, {
        className: `flex flex-1 flex-col justify-between p-5`,
        children: [
          (0, c.jsxs)(`ul`, {
            className: `space-y-1.5 font-mono text-xs text-muted-foreground`,
            children: [
              (0, c.jsxs)(`li`, {
                children: [
                  (0, c.jsx)(`span`, { className: `text-foreground/40`, children: `Course:` }),
                  ` `,
                  e.course,
                ],
              }),
              (0, c.jsxs)(`li`, {
                children: [
                  (0, c.jsx)(`span`, { className: `text-foreground/40`, children: `Tenure:` }),
                  ` `,
                  e.tenure,
                ],
              }),
            ],
          }),
          e.socials &&
            (0, c.jsxs)(`div`, {
              className: `mt-6 flex items-center gap-3`,
              children: [
                e.socials.linkedin &&
                  (0, c.jsxs)(`a`, {
                    href: e.socials.linkedin,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `text-muted-foreground transition-colors hover:text-primary-glow`,
                    children: [
                      (0, c.jsx)(r, { className: `size-4` }),
                      (0, c.jsx)(`span`, { className: `sr-only`, children: `LinkedIn` }),
                    ],
                  }),
                e.socials.github &&
                  (0, c.jsxs)(`a`, {
                    href: e.socials.github,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `text-muted-foreground transition-colors hover:text-foreground`,
                    children: [
                      (0, c.jsx)(n, { className: `size-4` }),
                      (0, c.jsx)(`span`, { className: `sr-only`, children: `GitHub` }),
                    ],
                  }),
              ],
            }),
        ],
      }),
    ],
  });
}
function u() {
  return (0, c.jsxs)(c.Fragment, {
    children: [
      (0, c.jsx)(a, {
        className: `pb-8`,
        children: (0, c.jsxs)(i, {
          children: [
            (0, c.jsx)(`p`, { className: `eyebrow`, children: `TFC Alumni` }),
            (0, c.jsx)(`h1`, {
              className: `mt-4 max-w-4xl text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl`,
              children: `The foundation we stand on.`,
            }),
            (0, c.jsx)(`p`, {
              className: `mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground`,
              children: `Meet the past members who paved the way. From general secretaries to core members, these are the individuals who shaped Tech Fusion Club.`,
            }),
          ],
        }),
      }),
      (0, c.jsx)(a, {
        className: `py-10 sm:py-12`,
        children: (0, c.jsx)(`ul`, {
          className: `mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`,
          children: s.map((e, t) =>
            (0, c.jsx)(
              `li`,
              {
                children: (0, c.jsx)(i, {
                  delay: (t % 4) * 50,
                  children: (0, c.jsx)(l, { alumnus: e, index: t }),
                }),
              },
              e.id,
            ),
          ),
        }),
      }),
      (0, c.jsx)(t, {
        eyebrow: `Continue the legacy`,
        title: `Leave your mark on the club.`,
        body: `Join us today and be part of the next generation of Tech Fusion leaders.`,
      }),
    ],
  });
}
export { u as component };
