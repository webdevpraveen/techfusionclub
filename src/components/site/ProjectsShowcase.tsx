import { GlowCard } from "@/components/site/GlowCard";
import { ExternalLink, Github, Star, Code2, Layers, Cpu, ShieldCheck, Smartphone, Cloud } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  domain: string;
  description: string;
  tags: string[];
  stars: number;
  githubUrl: string;
  demoUrl?: string;
  icon: React.ReactNode;
}

const projects: ProjectItem[] = [
  {
    id: "neuro-fusion",
    title: "NeuroFusion AI Assistant",
    domain: "AI / ML Domain",
    description:
      "A privacy-focused local RAG assistant trained on university lecture slides and exam papers to help students revise.",
    tags: ["PyTorch", "LangChain", "FastAPI", "VectorDB"],
    stars: 142,
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    icon: <Cpu className="size-5 text-primary-glow" />,
  },
  {
    id: "cybershield-cli",
    title: "CyberShield CLI Guard",
    domain: "Cybersecurity Domain",
    description:
      "Automated vulnerability scanner and git secret detector built specifically for student development pipelines.",
    tags: ["Rust", "Security", "CLI", "Docker"],
    stars: 98,
    githubUrl: "https://github.com",
    icon: <ShieldCheck className="size-5 text-accent" />,
  },
  {
    id: "unicampus-mobile",
    title: "UniCampus Mobile Ecosystem",
    domain: "Mobile Domain",
    description:
      "All-in-one Flutter campus app with real-time class schedule tracking, club events feed, and peer notes sharing.",
    tags: ["Flutter", "Firebase", "Dart", "Tailwind"],
    stars: 215,
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    icon: <Smartphone className="size-5 text-emerald-400" />,
  },
  {
    id: "cloudpulse-infra",
    title: "CloudPulse Infrastructure Matrix",
    domain: "Cloud & DevOps",
    description:
      "Self-hosted Kubernetes deployment matrix used by Tech Fusion Club to host 20+ student apps effortlessly.",
    tags: ["Kubernetes", "Docker", "Terraform", "Go"],
    stars: 84,
    githubUrl: "https://github.com",
    icon: <Cloud className="size-5 text-cyan-400" />,
  },
];

export function ProjectsShowcase() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((project) => (
        <GlowCard
          key={project.id}
          className="glass lift group flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:border-primary-glow/50"
        >
          <div>
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-border bg-surface-strong p-2.5">
                  {project.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground transition-colors group-hover:text-primary-glow">
                    {project.title}
                  </h3>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {project.domain}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 rounded-full border border-border/60 bg-surface px-2.5 py-1 font-mono text-[11px] text-amber-400">
                <Star className="size-3 fill-amber-400 text-amber-400" />
                <span>{project.stars}</span>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-surface px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg p-2 text-muted-foreground hover:bg-surface-strong hover:text-foreground transition-colors"
                title="View Code on GitHub"
              >
                <Github className="size-4" />
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg p-2 text-muted-foreground hover:bg-surface-strong hover:text-primary-glow transition-colors"
                  title="Live Preview"
                >
                  <ExternalLink className="size-4" />
                </a>
              )}
            </div>
          </div>
        </GlowCard>
      ))}
    </div>
  );
}
