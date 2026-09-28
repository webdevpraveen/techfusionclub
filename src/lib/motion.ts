import { useEffect, useRef, useState } from "react";

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

/** Adds `is-visible` to the element once it scrolls into view. */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
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
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

export function useCountUp(target: number, duration = 1600) {
  const [value, setValue] = useState(0);
  const [settled, setSettled] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
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
        const tick = (now: number) => {
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

  return { ref, value, settled };
}

/**
 * Cursor-reactive radial glow. Writes --mx/--my on the element so the
 * `cursor-glow` utility can position its highlight. Desktop pointers only.
 */
export function useCursorGlow<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window === "undefined" ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  return ref;
}

export function useCountdown(iso: string) {
  const target = new Date(iso).getTime();
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setRemaining(Math.max(0, target - Date.now()));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [target]);

  if (remaining === null) return null;
  const s = Math.floor(remaining / 1000);
  return {
    isLive: remaining > 0,
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

/** False on the server and when the reader asked for less motion. */
function canAnimate() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  return true;
}

/**
 * Tilt + cursor glow in one pointer handler, so a card that wants both effects
 * doesn't need two refs fighting over the same element. Writes --tilt-x /
 * --tilt-y for the `tilt-card` utility and --mx / --my for `cursor-glow`.
 * Desktop pointers only.
 */
export function useTiltGlow<T extends HTMLElement = HTMLDivElement>(max = 6) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window === "undefined" ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      !canAnimate()
    ) {
      return;
    }

    let frame = 0;
    let tiltX = 0;
    let tiltY = 0;
    let mx = "50%";
    let my = "50%";

    const write = () => {
      frame = 0;
      el.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
      el.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
      el.style.setProperty("--mx", mx);
      el.style.setProperty("--my", my);
    };

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      tiltX = -py * max * 2;
      tiltY = px * max * 2;
      mx = `${e.clientX - rect.left}px`;
      my = `${e.clientY - rect.top}px`;
      if (!frame) frame = requestAnimationFrame(write);
    };

    const onLeave = () => {
      tiltX = 0;
      tiltY = 0;
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(write);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [max]);

  return ref;
}

/**
 * Vertical parallax as the element crosses the viewport. `speed` is px of
 * travel per viewport height; negative moves against scroll.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(speed = 60) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !canAnimate()) return;

    let frame = 0;
    const apply = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // -1 (below fold) → 1 (above fold)
      const centered = (rect.top + rect.height / 2 - vh / 2) / (vh / 2);
      el.style.transform = `translate3d(0, ${(centered * speed * -1).toFixed(2)}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return ref;
}
