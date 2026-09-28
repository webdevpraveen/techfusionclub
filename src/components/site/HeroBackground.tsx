import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  Code2,
  Cpu,
  Shield,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import { Logo } from "@/components/site/Logo";

export function HeroBackground() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  const orbARef = useRef<HTMLDivElement>(null);
  const orbBRef = useRef<HTMLDivElement>(null);
  const codeLayerRef = useRef<HTMLDivElement>(null);

  const leftBadgesRef = useRef<(HTMLDivElement | null)[]>([]);
  const rightBadgesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const isTouch =
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    let raf = 0;

    let mouseX = 0;
    let mouseY = 0;

    let targetMouseX = 0;
    let targetMouseY = 0;

    let scroll = 0;
    let targetScroll = 0;

    const onMouseMove = (event: MouseEvent) => {
      if (isTouch) return;

      targetMouseX =
        (event.clientX / window.innerWidth - 0.5) * 2;

      targetMouseY =
        (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const onScroll = () => {
      targetScroll = window.scrollY;
    };

    const animate = () => {
      mouseX +=
        (targetMouseX - mouseX) * 0.08;

      mouseY +=
        (targetMouseY - mouseY) * 0.08;

      scroll +=
        (targetScroll - scroll) * 0.08;

      /*
       * ==========================================
       * 1. SPOTLIGHT
       * ==========================================
       */

      if (spotlightRef.current && !isTouch) {
        const x =
          ((mouseX + 1) / 2) * 100;

        const y =
          ((mouseY + 1) / 2) * 100;

        spotlightRef.current.style.left =
          `${x}%`;

        spotlightRef.current.style.top =
          `${y}%`;
      }

      /*
       * ==========================================
       * 2. TFC LOGO
       * ==========================================
       *
       * ONLY SCROLL controls the logo.
       *
       * Hero:
       *     Slightly lower center
       *
       * Scroll:
       *     Lower center -> Right side
       *
       * Pillars:
       *     Remains visible on right side
       */

      if (logoRef.current) {
        const progress =
          Math.min(scroll / 950, 1);

        /*
         * Smooth easing
         */
        const eased =
          progress *
          progress *
          (3 - 2 * progress);

        /*
         * Center -> right
         *
         * Keep it inside viewport.
         */
        const logoX =
          eased * 47;

        /*
         * Move slightly DOWN.
         *
         * Previously this was negative,
         * which pushed the logo upward.
         */
        const logoY =
          eased * 5;

        /*
         * Large -> smaller
         */
        const scale =
          1 - eased * 0.52;

        /*
         * Scroll-based rotation
         */
        const rotation =
          scroll * 0.055 + performance.now() * 0.018;

        logoRef.current.style.transform =
          `translate3d(calc(-50% + ${logoX}vw), calc(-50% + ${logoY}vh), 0) scale(${scale}) rotate(${rotation}deg)`;

        /*
         * Reduced visibility.
         *
         * Logo stays visible but does not
         * overpower the Pillars section.
         */
        logoRef.current.style.opacity =
          "0.12";

        logoRef.current.style.visibility =
          "visible";
      }

      /*
       * ==========================================
       * 3. LEFT BADGES
       * ==========================================
       */

      const leftDepth =
        [22, 15, 18];

      leftBadgesRef.current.forEach(
        (badge, index) => {
          if (!badge) return;

          const depth =
            leftDepth[index] ?? 15;

          const x =
            mouseX * depth;

          const y =
            mouseY * depth -
            scroll *
              (0.07 + index * 0.025);

          badge.style.transform =
            `translate3d(${x}px, ${y}px, 0)`;
        },
      );

      /*
       * ==========================================
       * 4. RIGHT BADGES
       * ==========================================
       */

      const rightDepth =
        [18, 24, 14];

      rightBadgesRef.current.forEach(
        (badge, index) => {
          if (!badge) return;

          const depth =
            rightDepth[index] ?? 15;

          const x =
            mouseX * depth;

          const y =
            mouseY * depth +
            scroll *
              (0.055 + index * 0.02);

          badge.style.transform =
            `translate3d(${x}px, ${y}px, 0)`;
        },
      );

      /*
       * ==========================================
       * 5. LEFT ORB
       * ==========================================
       */

      if (orbARef.current) {
        const x =
          mouseX * -30;

        const y =
          mouseY * -20 +
          scroll * 0.12;

        orbARef.current.style.transform =
          `translate3d(${x}px, ${y}px, 0)`;
      }

      /*
       * ==========================================
       * 6. RIGHT ORB
       * ==========================================
       */

      if (orbBRef.current) {
        const x =
          mouseX * 26;

        const y =
          mouseY * -18 +
          scroll * 0.08;

        orbBRef.current.style.transform =
          `translate3d(${x}px, ${y}px, 0)`;
      }

      /*
       * ==========================================
       * 7. CODE PARALLAX
       * ==========================================
       */

      if (codeLayerRef.current) {
        const x =
          mouseX * -12;

        const y =
          mouseY * -8 -
          scroll * 0.035;

        codeLayerRef.current.style.transform =
          `translate3d(${x}px, ${y}px, 0)`;
      }

      raf =
        requestAnimationFrame(animate);
    };

    window.addEventListener(
      "mousemove",
      onMouseMove,
      { passive: true },
    );

    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true },
    );

    targetScroll =
      window.scrollY;

    raf =
      requestAnimationFrame(animate);

    return () => {
      window.removeEventListener(
        "mousemove",
        onMouseMove,
      );

      window.removeEventListener(
        "scroll",
        onScroll,
      );

      cancelAnimationFrame(raf);
    };
  }, []);

  const setLeftBadge =
    (index: number) =>
    (element: HTMLDivElement | null) => {
      leftBadgesRef.current[index] =
        element;
    };

  const setRightBadge =
    (index: number) =>
    (element: HTMLDivElement | null) => {
      rightBadgesRef.current[index] =
        element;
    };

  /*
   * ==========================================
   * TFC LOGO
   *
   * Portal puts the logo directly under body.
   * Therefore PillarsSection cannot hide it.
   * ==========================================
   */

  const floatingLogo =
    typeof document !== "undefined"
      ? createPortal(
          <div
            ref={logoRef}
            className="tfc-hero-logo pointer-events-none fixed left-1/2 top-[53%] z-[99999] will-change-transform"
            style={{
              width: "min(58rem, 62vw)",
              height: "min(58rem, 62vw)",
              transform:
                "translate3d(-50%, -50%, 0) scale(1) rotate(0deg)",
              opacity: 0.12,
              visibility: "visible",
              pointerEvents: "none",
            }}
            aria-hidden="true"
          >
            <div className="h-full w-full">
              <Logo className="h-full w-full object-contain" />
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      {floatingLogo}

      <div className="pointer-events-none absolute inset-0 overflow-visible select-none">
        {/* ==========================================
            MOUSE SPOTLIGHT
        ========================================== */}

        <div
          ref={spotlightRef}
          className="absolute size-[28rem] rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary/30 via-accent/15 to-transparent blur-3xl opacity-60 sm:size-[42rem]"
          style={{
            left: "50%",
            top: "30%",
            transform:
              "translate(-50%, -50%)",
          }}
        />

        {/* ==========================================
            ORBIT RINGS
        ========================================== */}

        <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2">
          <div className="size-[24rem] rounded-full border border-primary/10 animate-[spin_35s_linear_infinite] sm:size-[38rem]" />
        </div>

        <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2">
          <div className="size-[30rem] rounded-full border border-accent/10 animate-[spin_55s_linear_infinite_reverse] sm:size-[48rem]" />
        </div>

        {/* ==========================================
            AMBIENT ORBS
        ========================================== */}

        <div
          ref={orbARef}
          className="absolute -left-32 -top-32 size-[30rem] rounded-full bg-gradient-to-br from-primary/35 via-orange-600/15 to-transparent blur-3xl opacity-70 will-change-transform animate-pulse"
        />

        <div
          ref={orbBRef}
          className="absolute -right-36 -top-36 size-[34rem] rounded-full bg-gradient-to-bl from-accent/25 via-amber-500/15 to-transparent blur-3xl opacity-65 will-change-transform animate-pulse"
        />

        {/* ==========================================
            LEFT BADGES
        ========================================== */}

        <div
          ref={setLeftBadge(0)}
          className="absolute left-8 top-20 hidden will-change-transform lg:block"
        >
          <div className="glass-strong rounded-2xl border border-primary/40 p-3.5 shadow-2xl backdrop-blur-xl animate-float">
            <div className="flex items-center gap-2.5 font-mono text-xs font-bold text-primary-glow">
              <Code2 className="size-4 text-primary-glow animate-pulse" />
              <span>&lt;FusionEngine /&gt;</span>
            </div>
          </div>
        </div>

        <div
          ref={setLeftBadge(1)}
          className="absolute left-14 top-80 hidden will-change-transform lg:block"
        >
          <div className="glass rounded-2xl border border-accent/40 p-3 shadow-xl backdrop-blur-lg animate-[float_7s_ease-in-out_infinite_reverse]">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent">
              <Cpu className="size-4 text-accent" />
              <span>Neural Model v6.0</span>
            </div>
          </div>
        </div>

        <div
          ref={setLeftBadge(2)}
          className="absolute left-10 top-[28rem] hidden will-change-transform lg:block"
        >
          <div className="glass rounded-2xl border border-emerald-500/40 p-3.5 shadow-xl backdrop-blur-lg animate-float">
            <div className="flex items-center gap-2.5 font-mono text-xs font-bold text-emerald-400">
              <Shield className="size-4 text-emerald-400" />
              <span>CTF Shield Active</span>
            </div>
          </div>
        </div>

        {/* ==========================================
            RIGHT BADGES
        ========================================== */}

        <div
          ref={setRightBadge(0)}
          className="absolute right-12 top-24 hidden will-change-transform lg:block"
        >
          <div className="glass rounded-2xl border border-amber-500/40 p-3.5 shadow-xl backdrop-blur-lg animate-[float_6s_ease-in-out_infinite_reverse]">
            <div className="flex items-center gap-2.5 font-mono text-xs font-bold text-amber-400">
              <Terminal className="size-4 text-amber-400" />
              <span>npm run build:live</span>
            </div>
          </div>
        </div>

        <div
          ref={setRightBadge(1)}
          className="absolute right-8 top-72 hidden will-change-transform lg:block"
        >
          <div className="glass-strong rounded-2xl border border-cyan-400/40 p-3 shadow-2xl backdrop-blur-xl animate-float">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-400">
              <Sparkles className="size-4 text-cyan-400" />
              <span>Viveka 6.0 Matrix</span>
            </div>
          </div>
        </div>

        <div
          ref={setRightBadge(2)}
          className="absolute right-14 top-[26rem] hidden will-change-transform lg:block"
        >
          <div className="glass rounded-2xl border border-purple-500/40 p-3.5 shadow-xl backdrop-blur-lg animate-[float_8s_ease-in-out_infinite]"
          >
            <div className="flex items-center gap-2.5 font-mono text-xs font-bold text-purple-400">
              <Zap className="size-4 text-purple-400" />
              <span>100% Student-Led</span>
            </div>
          </div>
        </div>

        {/* ==========================================
            FLOATING CODE
        ========================================== */}

        <div
          ref={codeLayerRef}
          className="absolute inset-0 opacity-30 will-change-transform"
        >
          <span className="absolute left-1/4 top-16 font-mono text-xs font-bold text-primary-glow animate-[ping_4s_infinite]">
            01010011
          </span>

          <span className="absolute right-1/4 top-1/3 font-mono text-xs font-bold text-accent animate-[bounce_5s_infinite]">
            // VIVEKA_6.0
          </span>

          <span className="absolute left-1/3 top-[60%] font-mono text-xs font-bold text-emerald-400 animate-[pulse_3s_infinite]">
            export const club = "TechFusion";
          </span>

          <span className="absolute right-1/3 top-[80%] font-mono text-xs font-bold text-amber-300 animate-[ping_6s_infinite]">
            fn build_future()
          </span>
        </div>

        {/* ==========================================
            MICRO PARTICLES
        ========================================== */}

        <div className="absolute left-[18%] top-[32%] size-1 rounded-full bg-primary-glow opacity-70 animate-ping" />

        <div className="absolute right-[20%] top-[42%] size-1 rounded-full bg-accent opacity-70 animate-ping [animation-delay:1s]" />

        <div className="absolute left-[28%] top-[72%] size-1 rounded-full bg-emerald-400 opacity-60 animate-ping [animation-delay:1.8s]" />

        <div className="absolute right-[32%] top-[68%] size-1 rounded-full bg-amber-400 opacity-60 animate-ping [animation-delay:2.5s]" />
      </div>
    </>
  );
}