import { GlowCard } from "@/components/site/GlowCard";
import { Users, Layers, Award, Terminal, Code2, Cpu, ShieldCheck } from "lucide-react";

interface Pillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
}

const pillars: Pillar[] = [
  {
    number: "01",
    title: "Weekly Hands-on Build Nights",
    subtitle: "Shipping Code Over Slideware",
    description:
      "Every Thursday evening, members gather in the computer labs to write code, debug real-world applications, and collaborate on cross-domain projects.",
    tags: ["Build Nights", "Peer Coding", "Live Demos"],
    icon: <Code2 className="size-6 text-primary-glow" />,
  },
  {
    number: "02",
    title: "1-on-1 Senior Mentorship Ladder",
    subtitle: "From Beginner to Domain Lead",
    description:
      "Every junior is matched with a senior mentor inside their domain for code reviews, project guidance, and technical career advice.",
    tags: ["Code Review", "Career Prep", "1-on-1 Help"],
    icon: <Users className="size-6 text-accent" />,
  },
  {
    number: "03",
    title: "Production Shipping & Open Source",
    subtitle: "Real Repositories, Real Users",
    description:
      "Members leave university with deployed web apps, open-source pull requests, and production code that interviewers actually ask about.",
    tags: ["GitHub Repos", "Open Source", "Public Deploy"],
    icon: <Terminal className="size-6 text-emerald-400" />,
  },
  {
    number: "04",
    title: "Flagship Hackathons & Competitions",
    subtitle: "Organize & Compete at Scale",
    description:
      "Lead and participate in Viveka 6.0, Smart India Hackathon campus prep, CTFs, and intra-college tech-culture expos.",
    tags: ["Viveka 6.0", "SIH Prep", "CTF Gauntlets"],
    icon: <Award className="size-6 text-cyan-400" />,
  },
];

export function PillarsSection() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {pillars.map((p) => (
        <GlowCard
          key={p.number}
          className="glass lift group rounded-2xl p-7 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="rounded-xl border border-border bg-surface-strong p-3">{p.icon}</div>
              <span className="font-mono text-xs font-bold text-primary-glow/60">
                PILLAR {p.number}
              </span>
            </div>

            <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary-glow transition-colors">
              {p.title}
            </h3>

            <p className="font-mono text-xs text-primary-glow mt-1 font-semibold">{p.subtitle}</p>

            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
          </div>

          <div className="mt-6 pt-4 border-t border-border/40 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border/70 bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </GlowCard>
      ))}
    </div>
  );
}
