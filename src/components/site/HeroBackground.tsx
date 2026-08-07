import { useEffect, useState } from "react";
import { Code2, Cpu, Shield, Sparkles, Terminal, Zap } from "lucide-react";

export function HeroBackground() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      {/* 1. Dynamic Cursor Spotlight Glow (Follows Mouse) */}
      <div
        className="absolute size-[32rem] sm:size-[45rem] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-accent/20 to-transparent blur-3xl transition-all duration-700 opacity-60"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* 2. REAL SCROLL PARALLAX: Slow-moving Ambient Background Orbs */}
      <div
        className="absolute -top-24 -left-24 size-[28rem] rounded-full bg-gradient-to-br from-primary/35 via-orange-600/15 to-transparent blur-3xl opacity-75 animate-pulse"
        style={{
          transform: `translateY(${scrollY * 0.25}px)`,
        }}
      />
      <div
        className="absolute -top-32 -right-32 size-[32rem] rounded-full bg-gradient-to-bl from-accent/25 via-amber-500/15 to-transparent blur-3xl opacity-70 animate-pulse"
        style={{
          transform: `translateY(${scrollY * 0.18}px)`,
        }}
      />

      {/* 3. REAL SCROLL PARALLAX: Left Margin Floating Badges (Shifting Upward on Scroll) */}
      <div
        className="hidden lg:block absolute left-8 top-20 glass-strong p-3.5 rounded-2xl border border-primary/40 shadow-2xl backdrop-blur-xl animate-float opacity-90 transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${scrollY * -0.45}px)`,
        }}
      >
        <div className="flex items-center gap-2.5 font-mono text-xs text-primary-glow font-bold">
          <Code2 className="size-4 text-primary-glow animate-pulse" />
          <span>&lt;FusionEngine /&gt;</span>
        </div>
      </div>

      <div
        className="hidden lg:block absolute left-14 top-80 glass p-3 rounded-2xl border border-accent/40 shadow-xl backdrop-blur-lg animate-[float_7s_ease-in-out_infinite_reverse] opacity-80 transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${scrollY * -0.25}px)`,
        }}
      >
        <div className="flex items-center gap-2 font-mono text-xs text-accent font-semibold">
          <Cpu className="size-4 text-accent" />
          <span>Neural Model v6.0</span>
        </div>
      </div>

      <div
        className="hidden lg:block absolute left-10 top-[28rem] glass p-3.5 rounded-2xl border border-emerald-500/40 shadow-xl backdrop-blur-lg animate-float opacity-85 transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${scrollY * -0.35}px)`,
        }}
      >
        <div className="flex items-center gap-2.5 font-mono text-xs text-emerald-400 font-bold">
          <Shield className="size-4 text-emerald-400" />
          <span>CTF Shield Active</span>
        </div>
      </div>

      {/* 4. REAL SCROLL PARALLAX: Right Margin Floating Badges (Shifting Downward on Scroll) */}
      <div
        className="hidden lg:block absolute right-12 top-24 glass p-3.5 rounded-2xl border border-amber-500/40 shadow-xl backdrop-blur-lg animate-[float_6s_ease-in-out_infinite_reverse] opacity-90 transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${scrollY * 0.35}px)`,
        }}
      >
        <div className="flex items-center gap-2.5 font-mono text-xs text-amber-400 font-bold">
          <Terminal className="size-4 text-amber-400" />
          <span>npm run build:live</span>
        </div>
      </div>

      <div
        className="hidden lg:block absolute right-8 top-72 glass-strong p-3 rounded-2xl border border-cyan-400/40 shadow-2xl backdrop-blur-xl animate-float opacity-85 transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 font-bold">
          <Sparkles className="size-4 text-cyan-400" />
          <span>Viveka 6.0 Matrix</span>
        </div>
      </div>

      <div
        className="hidden lg:block absolute right-14 top-[26rem] glass p-3.5 rounded-2xl border border-purple-500/40 shadow-xl backdrop-blur-lg animate-[float_8s_ease-in-out_infinite] opacity-80 transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${scrollY * 0.22}px)`,
        }}
      >
        <div className="flex items-center gap-2.5 font-mono text-xs text-purple-400 font-bold">
          <Zap className="size-4 text-purple-400" />
          <span>100% Student-Led</span>
        </div>
      </div>

      {/* 5. REAL SCROLL PARALLAX: Floating Background Code Snippets (Opposing Parallax Motion) */}
      <div
        className="absolute inset-0 opacity-30 transition-transform duration-75 ease-out"
        style={{
          transform: `translateY(${scrollY * -0.15}px)`,
        }}
      >
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
