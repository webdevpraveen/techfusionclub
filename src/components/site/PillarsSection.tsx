import { useState } from "react";
import { GlowCard } from "@/components/site/GlowCard";
import { Code2, Users, Terminal, Award, Palette, HeartHandshake, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { pillars, type Pillar } from "@/data/pillars";

function getPillarIcon(iconName: Pillar["iconName"]) {
  switch (iconName) {
    case "code":
      return <Code2 className="size-6 text-primary-glow" />;
    case "users":
      return <Users className="size-6 text-accent" />;
    case "terminal":
      return <Terminal className="size-6 text-emerald-400" />;
    case "award":
      return <Award className="size-6 text-cyan-400" />;
    case "palette":
      return <Palette className="size-6 text-pink-400" />;
    case "heart-handshake":
      return <HeartHandshake className="size-6 text-amber-400" />;
  }
}

export function PillarsSection() {
  // Mobile accordion / expanded state (touch-first)
  const [expandedPillar, setExpandedPillar] = useState<string | null>(null);

  const togglePillar = (num: string) => {
    setExpandedPillar((curr) => (curr === num ? null : num));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pillars.map((p) => {
        const isExpanded = expandedPillar === p.number;

        return (
          <GlowCard
            key={p.number}
            className={cn(
              "glass lift group rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300",
              isExpanded && "border-primary-glow/70 shadow-[0_0_25px_rgba(217,72,15,0.2)]",
            )}
          >
            {/* Clickable Header for Mobile Tap Interaction */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => togglePillar(p.number)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  togglePillar(p.number);
                }
              }}
              aria-expanded={isExpanded}
              aria-label={`Pillar ${p.number}: ${p.title}`}
              className="cursor-pointer md:cursor-default outline-none focus-visible:ring-2 focus-visible:ring-primary-glow rounded-xl"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="rounded-xl border border-border bg-surface-strong p-3 transition-transform duration-300 group-hover:scale-105">
                  {getPillarIcon(p.iconName)}
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-primary-glow/70">
                    PILLAR {p.number}
                  </span>
                  {/* Mobile toggle indicator */}
                  <ChevronDown
                    className={cn(
                      "size-4 text-muted-foreground transition-transform duration-300 md:hidden",
                      isExpanded && "rotate-180 text-primary-glow",
                    )}
                  />
                </div>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-primary-glow transition-colors">
                {p.title}
              </h3>

              <p className="font-mono text-xs text-primary-glow mt-1 font-semibold">{p.subtitle}</p>
            </div>

            {/* Description & Details: Always visible on desktop/tablet; togglable or highlighted on mobile */}
            <div
              className={cn(
                "transition-all duration-300 ease-in-out",
                // On mobile: collapsible or full if expanded; on tablet/desktop always visible
                "max-md:overflow-hidden",
                isExpanded ? "max-md:max-h-96 max-md:mt-3" : "max-md:max-h-24 max-md:mt-2",
              )}
            >
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </div>

            {/* Tags footer */}
            <div className="mt-6 pt-4 border-t border-border/40 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border/70 bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors group-hover:border-primary-glow/40"
                >
                  {t}
                </span>
              ))}
            </div>
          </GlowCard>
        );
      })}
    </div>
  );
}
