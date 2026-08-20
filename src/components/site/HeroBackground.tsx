import { useEffect, useRef } from "react";
import { Code2, Cpu, Shield, Sparkles, Terminal, Zap } from "lucide-react";
import { Logo } from "@/components/site/Logo";

/**
 * HeroBackground uses direct DOM manipulation (refs + rAF) instead of useState
 * to avoid React re-renders on every mouse move / scroll frame.
 * Mouse-tracking spotlight is disabled on touch devices for performance.
 */
export function HeroBackground() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const orbARef = useRef<HTMLDivElement>(null);
  const orbBRef = useRef<HTMLDivElement>(null);
  const badgesLeftRef = useRef<(HTMLDivElement | null)[]>([]);
  const badgesRightRef = useRef<(HTMLDivElement | null)[]>([]);
  const codeLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect touch-only device — skip mouse tracking entirely
    const isTouch =
      typeof window !== "undefined" &&
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    let rafMouse = 0;
    let rafScroll = 0;
    let mouseX = 50;
    let mouseY = 30;
    let scrollY = 0;
    let ticking = false;

    // --- Mouse spotlight (desktop only) ---
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 100;
      mouseY = (e.clientY / window.innerHeight) * 100;
      if (!ticking) {
        rafMouse = requestAnimationFrame(() => {
          const el = spotlightRef.current;
          if (el) {
            el.style.left = `${mouseX}%`;
            el.style.top = `${mouseY}%`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // --- Scroll parallax ---
    const leftFactors = [-0.45, -0.25, -0.35];
    const rightFactors = [0.35, 0.5, 0.22];

    const applyScroll = () => {
      scrollY = window.scrollY;

      // Ambient orbs
      if (orbARef.current) orbARef.current.style.transform = `translateY(${scrollY * 0.25}px)`;
      if (orbBRef.current) orbBRef.current.style.transform = `translateY(${scrollY * 0.18}px)`;

      // Left badges
      badgesLeftRef.current.forEach((el, i) => {
        if (el) el.style.transform = `translateY(${scrollY * (leftFactors[i] ?? 0)}px)`;
      });

      // Right badges
      badgesRightRef.current.forEach((el, i) => {
        if (el) el.style.transform = `translateY(${scrollY * (rightFactors[i] ?? 0)}px)`;
      });

      // Code snippets
      if (codeLayerRef.current)
        codeLayerRef.current.style.transform = `translateY(${scrollY * -0.15}px)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafScroll);
      rafScroll = requestAnimationFrame(applyScroll);
    };

    if (!isTouch) {
      window.addEventListener("mousemove", onMouseMove, { passive: true });
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (!isTouch) {
        window.removeEventListener("mousemove", onMouseMove);
      }
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafMouse);
      cancelAnimationFrame(rafScroll);
    };
  }, []);

  const setLeftBadge = (i: number) => (el: HTMLDivElement | null) => {
    badgesLeftRef.current[i] = el;
  };
  const setRightBadge = (i: number) => (el: HTMLDivElement | null) => {
    badgesRightRef.current[i] = el;
  };

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      {/* 1. Dynamic Cursor Spotlight Glow (Follows Mouse — desktop only) */}
      <div
        ref={spotlightRef}
        className="absolute size-[32rem] sm:size-[45rem] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-accent/20 to-transparent blur-3xl opacity-60 will-change-transform"
        style={{
          left: "50%",
          top: "30%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Background Rotating Logo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 animate-[spin_120s_linear_infinite] pointer-events-none mix-blend-overlay">
        <Logo className="w-[40rem] h-[40rem] sm:w-[60rem] sm:h-[60rem] object-contain" />
      </div>

      {/* 2. Ambient Background Orbs */}
      <div
        ref={orbARef}
        className="absolute -top-24 -left-24 size-[28rem] rounded-full bg-gradient-to-br from-primary/35 via-orange-600/15 to-transparent blur-3xl opacity-75 animate-pulse will-change-transform"
      />
      <div
        ref={orbBRef}
        className="absolute -top-32 -right-32 size-[32rem] rounded-full bg-gradient-to-bl from-accent/25 via-amber-500/15 to-transparent blur-3xl opacity-70 animate-pulse will-change-transform"
      />

      {/* 3. Left Margin Floating Badges */}
      <div
        ref={setLeftBadge(0)}
        className="hidden lg:block absolute left-8 top-20 glass-strong p-3.5 rounded-2xl border border-primary/40 shadow-2xl backdrop-blur-xl animate-float opacity-90 will-change-transform"
      >
        <div className="flex items-center gap-2.5 font-mono text-xs text-primary-glow font-bold">
          <Code2 className="size-4 text-primary-glow animate-pulse" />
          <span>&lt;FusionEngine /&gt;</span>
        </div>
      </div>

      <div
        ref={setLeftBadge(1)}
        className="hidden lg:block absolute left-14 top-80 glass p-3 rounded-2xl border border-accent/40 shadow-xl backdrop-blur-lg animate-[float_7s_ease-in-out_infinite_reverse] opacity-80 will-change-transform"
      >
        <div className="flex items-center gap-2 font-mono text-xs text-accent font-semibold">
          <Cpu className="size-4 text-accent" />
          <span>Neural Model v6.0</span>
        </div>
      </div>

      <div
        ref={setLeftBadge(2)}
        className="hidden lg:block absolute left-10 top-[28rem] glass p-3.5 rounded-2xl border border-emerald-500/40 shadow-xl backdrop-blur-lg animate-float opacity-85 will-change-transform"
      >
        <div className="flex items-center gap-2.5 font-mono text-xs text-emerald-400 font-bold">
          <Shield className="size-4 text-emerald-400" />
          <span>CTF Shield Active</span>
        </div>
      </div>

      {/* 4. Right Margin Floating Badges */}
      <div
        ref={setRightBadge(0)}
        className="hidden lg:block absolute right-12 top-24 glass p-3.5 rounded-2xl border border-amber-500/40 shadow-xl backdrop-blur-lg animate-[float_6s_ease-in-out_infinite_reverse] opacity-90 will-change-transform"
      >
        <div className="flex items-center gap-2.5 font-mono text-xs text-amber-400 font-bold">
          <Terminal className="size-4 text-amber-400" />
          <span>npm run build:live</span>
        </div>
      </div>

      <div
        ref={setRightBadge(1)}
        className="hidden lg:block absolute right-8 top-72 glass-strong p-3 rounded-2xl border border-cyan-400/40 shadow-2xl backdrop-blur-xl animate-float opacity-85 will-change-transform"
      >
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 font-bold">
          <Sparkles className="size-4 text-cyan-400" />
          <span>Viveka 6.0 Matrix</span>
        </div>
      </div>

      <div
        ref={setRightBadge(2)}
        className="hidden lg:block absolute right-14 top-[26rem] glass p-3.5 rounded-2xl border border-purple-500/40 shadow-xl backdrop-blur-lg animate-[float_8s_ease-in-out_infinite] opacity-80 will-change-transform"
      >
        <div className="flex items-center gap-2.5 font-mono text-xs text-purple-400 font-bold">
          <Zap className="size-4 text-purple-400" />
          <span>100% Student-Led</span>
        </div>
      </div>

      {/* 5. Floating Background Code Snippets */}
      <div ref={codeLayerRef} className="absolute inset-0 opacity-30 will-change-transform">
        <span className="absolute top-16 left-1/4 font-mono text-xs text-primary-glow font-bold animate-[ping_4s_infinite]">
          01010011
        </span>
        <span className="absolute top-1/3 right-1/4 font-mono text-xs text-accent font-bold animate-[bounce_5s_infinite]">
          // VIVEKA_6.0
        </span>
        <span className="absolute top-[60%] left-1/3 font-mono text-xs text-emerald-400 font-bold animate-[pulse_3s_infinite]">
          export const club = "TechFusion";
        </span>
        <span className="absolute top-[80%] right-1/3 font-mono text-xs text-amber-300 font-bold animate-[ping_6s_infinite]">
          fn build_future()
        </span>
      </div>
    </div>
  );
}
