import { GlowCard } from "@/components/site/GlowCard";
import { UserPlus, BookOpen, Rocket, Award, CheckCircle2 } from "lucide-react";

interface Milestone {
  step: string;
  title: string;
  quarter: string;
  description: string;
  highlights: string[];
  icon: React.ReactNode;
}

const milestones: Milestone[] = [
  {
    step: "PHASE 01",
    title: "Onboarding & Domain Selection",
    quarter: "AUG - SEP",
    description: "Orientation week, domain diagnostic test, and 1-on-1 mentor assignment.",
    highlights: ["Orientation Keynote", "Domain Diagnostic", "1-on-1 Mentor Allocation"],
    icon: <UserPlus className="size-5 text-primary-glow" />,
  },
  {
    step: "PHASE 02",
    title: "Deep-Dive Bootcamps & Build Nights",
    quarter: "OCT - DEC",
    description: "Hands-on domain workshops, weekly build nights, and mini-project submissions.",
    highlights: ["8 Domain Bootcamps", "Weekly Build Nights", "Git & CI/CD Certification"],
    icon: <BookOpen className="size-5 text-accent" />,
  },
  {
    step: "PHASE 03",
    title: "SIH Hackathon & Project Incubation",
    quarter: "JAN - MAR",
    description:
      "Participate in Smart India Hackathon campus rounds and build production-ready projects in teams.",
    highlights: ["SIH Internal Hackathon", "Live Project Demos", "National Level Pitching"],
    icon: <Rocket className="size-5 text-emerald-400" />,
  },
  {
    step: "PHASE 04",
    title: "Viveka 6.0 Annual Fest & Leadership",
    quarter: "APR - MAY",
    description:
      "Organize the university's flagship technical festival and step into core leadership roles.",
    highlights: [
      "Viveka 6.0 Flagship Fest",
      "Harmony Tech-Culture Expo",
      "Alumni Placement Network",
    ],
    icon: <Award className="size-5 text-cyan-400" />,
  },
];

export function ClubRoadmap() {
  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Glow track vertical line for desktop */}
      <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary-glow via-accent to-primary/20 opacity-40" />

      <div className="space-y-8 lg:space-y-12">
        {milestones.map((m, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={m.step}
              className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Timeline Center Node */}
              <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 size-10 rounded-full border-2 border-primary-glow bg-card items-center justify-center shadow-[0_0_15px_rgba(217,72,15,0.5)]">
                {m.icon}
              </div>

              {/* Content Card */}
              <div className="w-full lg:w-[calc(50%-2.5rem)]">
                <GlowCard className="glass lift rounded-2xl p-6 sm:p-7 border border-border hover:border-primary-glow/60 transition-all">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-primary-glow font-bold">
                      {m.step}
                    </span>
                    <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full border border-border bg-surface text-muted-foreground">
                      {m.quarter}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground">{m.title}</h3>

                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                    {m.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-border/40 flex flex-wrap gap-2">
                    {m.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-1 font-mono text-[10px] text-foreground/80 bg-surface-strong px-2.5 py-1 rounded-md"
                      >
                        <CheckCircle2 className="size-3 text-emerald-400" />
                        {h}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
