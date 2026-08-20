import { a as e, n as t, r as n, t as r } from "./utils-Bu-ICgPr.js";
var i = e(n());
function a() {
  let [e, t] = (0, i.useState)(!1);
  return (
    (0, i.useEffect)(() => {
      let e = window.matchMedia(`(prefers-reduced-motion: reduce)`);
      t(e.matches);
      let n = () => t(e.matches);
      return (e.addEventListener(`change`, n), () => e.removeEventListener(`change`, n));
    }, []),
    e
  );
}
function o() {
  let e = (0, i.useRef)(null);
  return (
    (0, i.useEffect)(() => {
      let t = e.current;
      if (!t) return;
      if (typeof IntersectionObserver > `u`) {
        t.classList.add(`is-visible`);
        return;
      }
      let n = new IntersectionObserver(
        (e) => {
          e.forEach((e) => {
            e.isIntersecting && (e.target.classList.add(`is-visible`), n.unobserve(e.target));
          });
        },
        { threshold: 0.15, rootMargin: `0px 0px -40px 0px` },
      );
      return (n.observe(t), () => n.disconnect());
    }, []),
    e
  );
}
function s(e, t = 1600) {
  let [n, r] = (0, i.useState)(0),
    [o, s] = (0, i.useState)(!1),
    c = (0, i.useRef)(null),
    l = a();
  return (
    (0, i.useEffect)(() => {
      let n = c.current;
      if (!n) return;
      if (l || typeof IntersectionObserver > `u`) {
        (r(e), s(!1));
        return;
      }
      let i = 0,
        a = new IntersectionObserver(
          (n) => {
            if (!n[0]?.isIntersecting) return;
            a.disconnect();
            let o = performance.now(),
              c = (n) => {
                let a = Math.min(1, (n - o) / t),
                  l = 1 - (1 - a) ** 3;
                (r(Math.round(e * l)), a < 1 ? (i = requestAnimationFrame(c)) : s(!0));
              };
            i = requestAnimationFrame(c);
          },
          { threshold: 0.4 },
        );
      return (
        a.observe(n),
        () => {
          (a.disconnect(), cancelAnimationFrame(i));
        }
      );
    }, [e, t, l]),
    { ref: c, value: n, settled: o }
  );
}
function c() {
  let e = (0, i.useRef)(null);
  return (
    (0, i.useEffect)(() => {
      let t = e.current;
      if (
        !t ||
        typeof window > `u` ||
        !window.matchMedia(`(hover: hover) and (pointer: fine)`).matches ||
        window.matchMedia(`(prefers-reduced-motion: reduce)`).matches
      )
        return;
      let n = (e) => {
        let n = t.getBoundingClientRect();
        (t.style.setProperty(`--mx`, `${e.clientX - n.left}px`),
          t.style.setProperty(`--my`, `${e.clientY - n.top}px`));
      };
      return (t.addEventListener(`pointermove`, n), () => t.removeEventListener(`pointermove`, n));
    }, []),
    e
  );
}
var l = t();
function u({ children: e, className: t, delay: n = 0, as: i = `div` }) {
  let a = o();
  return (0, l.jsx)(i, {
    ref: a,
    className: r(`reveal`, t),
    style: n ? { transitionDelay: `${n}ms` } : void 0,
    children: e,
  });
}
function d({ eyebrow: e, title: t, body: n, align: i = `left`, action: a, className: o }) {
  return (0, l.jsxs)(u, {
    className: r(
      `flex flex-col gap-6`,
      i === `center` ? `items-center text-center` : `md:flex-row md:items-end md:justify-between`,
      o,
    ),
    children: [
      (0, l.jsxs)(`div`, {
        className: r(`max-w-2xl`, i === `center` && `mx-auto`),
        children: [
          e ? (0, l.jsx)(`p`, { className: `eyebrow mb-4`, children: e }) : null,
          (0, l.jsx)(`h2`, {
            className: `text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]`,
            children: t,
          }),
          n
            ? (0, l.jsx)(`p`, {
                className: `mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg`,
                children: n,
              })
            : null,
        ],
      }),
      a ? (0, l.jsx)(`div`, { className: `shrink-0`, children: a }) : null,
    ],
  });
}
function f({ children: e, className: t, id: n }) {
  return (0, l.jsx)(`section`, {
    id: n,
    className: r(`px-5 py-20 sm:px-8 sm:py-24 lg:py-28`, t),
    children: (0, l.jsx)(`div`, { className: `mx-auto w-full max-w-7xl`, children: e }),
  });
}
export { c as a, s as i, d as n, u as r, f as t };
