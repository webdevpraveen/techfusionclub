import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Terminal, Shield, Cpu, Code2, Layers, CheckCircle2, Zap } from "lucide-react";
import { GlowCard } from "@/components/site/GlowCard";
import { useTheme } from "@/lib/theme";

export function HeroShowcase() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const logoSrc = isLight ? "/images/branding/techfusionlogolight.png" : "/images/branding/techfusionlogo.png";

  return (
    <div className="relative w-full select-none">
      {/* Background Ambient Neon Orb Glows */}
      <div className="absolute -top-12 -right-12 size-64 sm:size-80 rounded-full bg-gradient-to-br from-primary/40 via-primary-glow/20 to-transparent blur-3xl opacity-70 animate-pulse pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 size-56 sm:size-72 rounded-full bg-gradient-to-tr from-accent/30 via-amber-500/10 to-transparent blur-3xl opacity-60 animate-pulse pointer-events-none" />

      {/* Main Glassmorphic Showcase Window Frame */}
      <GlowCard className="glass-strong relative overflow-hidden rounded-3xl border border-primary/30 p-2 sm:p-3 shadow-[0_20px_60px_-15px_rgba(217,72,15,0.3)] backdrop-blur-2xl transition-all duration-500 hover:border-primary-glow/60">
        
        {/* App Window Header Bar */}
        <div className="flex items-center justify-between border-b border-border/70 bg-surface-strong px-4 py-3 rounded-t-2xl">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
            <div className="size-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
            <div className="size-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
            <span className="ml-2 font-mono text-[11px] text-muted-foreground flex items-center gap-1.5">
              <Terminal className="size-3.5 text-primary-glow" /> techfusion-collective ~ v2026.0
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <span className="inline-block size-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 font-bold">
              6 DOMAINS ACTIVE
            </span>
          </div>
        </div>

        {/* Hero Visual Area with High-Res Image & Overlay Elements */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-b-2xl group">
          <img
            src="/images/branding/hero.jpg"
            alt="Tech Fusion Club Members Working Together"
            className="size-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute inset-0 circuit-lines opacity-30 pointer-events-none" />

          {/* Top-Right Floating Glass Badge: Logo & Identity */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 glass-strong flex items-center gap-3 rounded-2xl p-2.5 sm:p-3 border border-primary-glow/40 shadow-2xl backdrop-blur-xl animate-float">
            <img
              src={logoSrc}
              alt="Logo"
              className="size-8 sm:size-10 object-contain drop-shadow-[0_0_8px_rgba(217,72,15,0.6)]"
            />
            <div className="pr-1 sm:pr-2">
              <p className="font-display text-xs font-extrabold uppercase tracking-wider text-foreground">TECH FUSION</p>
              <p className="font-mono text-[9px] uppercase tracking-widest text-primary-glow font-bold">RECRUITMENT OPEN</p>
            </div>
          </div>

          {/* Bottom Floating Glass Card: Viveka 6.0 Fest Highlight */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 glass p-3.5 sm:p-4 rounded-2xl backdrop-blur-xl border border-border/80 flex items-center justify-between gap-3 shadow-xl">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary-glow font-bold flex items-center gap-1.5">
                <Zap className="size-3.5 fill-primary-glow text-primary-glow" /> FLAGSHIP ANNUAL TECH FEST
              </p>
              <p className="font-display text-sm sm:text-base font-bold text-foreground mt-0.5">
                Viveka 6.0 · March 2027
              </p>
            </div>

            <a
              href="https://viveka.techfusion.club"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 font-mono text-xs font-bold text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-105 shrink-0"
            >
              <span>Explore</span>
              <ArrowUpRight className="size-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </GlowCard>

      {/* Floating Pill Badges below Showcase */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 px-2">
        <div className="flex items-center gap-2">
          <span className="glass rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground flex items-center gap-1">
            <CheckCircle2 className="size-3 text-emerald-400" /> 320+ Members
          </span>
          <span className="glass rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground flex items-center gap-1">
            <CheckCircle2 className="size-3 text-accent" /> 41 Workshops
          </span>
        </div>

        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          100% Student-Run Collective
        </span>
      </div>
    </div>
  );
}
