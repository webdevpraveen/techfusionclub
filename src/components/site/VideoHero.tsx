import { useEffect, useRef } from "react";

/**
 * SRMU-style full-screen hero with:
 * - Looping background video
 * - ALWAYS DARK overlay (hero stays dramatic in both themes)
 * - Left: tagline text (passed as children)
 * - Right: TFC logo with rotating + pulse effects
 *
 * The `dark` class is forced on the section so all children inherit dark-mode
 * semantic colors (foreground = white, muted = grey, primary-glow = bright orange).
 */
export function VideoHero({ children }: { children: React.ReactNode }) {
  // Use the logo variant suitable for light backgrounds
  const logoSrc = "/images/branding/techfusionlogolight.webp";

  const logoRef = useRef<HTMLDivElement>(null);

  // Subtle floating parallax on mouse move (desktop only)
  useEffect(() => {
    const isTouch =
      typeof window !== "undefined" &&
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (isTouch) return;

    let raf = 0;
    const onMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!logoRef.current) return;
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        logoRef.current.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      {/* ── Video Background ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 size-full object-cover"
        poster="/images/branding/hero.jpg"
      >
        <source src="/images/herosection_background.mp4" type="video/mp4" />
      </video>

      {/* ── Light overlays to make text readable ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, oklch(0.985 0.005 270 / 92%) 0%, oklch(0.985 0.005 270 / 65%) 50%, oklch(0.985 0.005 270 / 35%) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, oklch(0.985 0.005 270 / 95%) 0%, oklch(0.985 0.005 270 / 20%) 40%, transparent 100%)",
        }}
      />

      {/* Subtle warm orange tint on left for brand feel */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 10% 50%, oklch(0.55 0.22 38 / 12%) 0%, transparent 70%)",
        }}
      />

      {/* ── Circuit texture overlay ── */}
      <div className="circuit-lines pointer-events-none absolute inset-0 opacity-30" />

      {/* ── Content grid: Left text + Right logo ── */}
      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl items-center px-5 sm:px-8">
        <div className="grid w-full gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 items-center">
          {/* LEFT — Tagline + CTAs */}
          <div className="order-2 lg:order-1">{children}</div>

          {/* RIGHT — Rotating TFC Logo with effects */}
          <div className="order-1 flex items-center justify-center lg:order-2">
            <div className="relative flex items-center justify-center">
              {/* Outer glow ring */}
              <div className="absolute size-64 sm:size-80 lg:size-96 rounded-full border border-[oklch(0.55_0.22_38_/_25%)] animate-[spin_30s_linear_infinite]">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 size-2.5 rounded-full bg-[oklch(0.55_0.22_38)] shadow-[0_0_14px_5px_rgba(217,72,15,0.4)]" />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-2.5 rounded-full bg-[oklch(0.55_0.2_42)] shadow-[0_0_14px_5px_rgba(245,158,11,0.3)]" />
              </div>

              {/* Middle glow ring (counter-rotate) */}
              <div className="absolute size-52 sm:size-72 lg:size-80 rounded-full border border-[oklch(0.55_0.22_38_/_12%)] animate-[spin_20s_linear_infinite_reverse]">
                <div className="absolute top-1/2 -right-1 -translate-y-1/2 size-2 rounded-full bg-emerald-500 shadow-[0_0_12px_4px_rgba(16,185,129,0.3)]" />
                <div className="absolute top-1/2 -left-1 -translate-y-1/2 size-2 rounded-full bg-cyan-500 shadow-[0_0_12px_4px_rgba(6,182,212,0.3)]" />
              </div>

              {/* Inner pulsing ring */}
              <div className="absolute size-44 sm:size-60 lg:size-68 rounded-full border border-dashed border-[oklch(0.55_0.22_38_/_15%)] animate-[spin_15s_linear_infinite]" />

              {/* Ambient pulse glow behind logo */}
              <div className="absolute size-48 sm:size-64 lg:size-72 rounded-full bg-[radial-gradient(circle,_oklch(0.55_0.22_38_/_15%)_0%,_oklch(0.52_0.22_38_/_5%)_40%,_transparent_70%)] animate-pulse" />

              {/* The logo itself — slow spin */}
              <div
                ref={logoRef}
                className="relative z-10 will-change-transform transition-transform duration-300 ease-out"
              >
                <img
                  src={logoSrc}
                  alt="Tech Fusion Club Logo"
                  className="size-40 sm:size-56 lg:size-64 object-contain animate-[spin_18s_linear_infinite] drop-shadow-[0_0_20px_rgba(217,72,15,0.3)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom fade into page background ── */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
