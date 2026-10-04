import { useState, useEffect } from "react";
import { GlowCard } from "@/components/site/GlowCard";
import {
  ExternalLink,
  Github,
  Star,
  ShieldCheck,
  Smartphone,
  Cloud,
  Cpu,
  X,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { projects, type ProjectItem } from "@/data/projects";

function getProjectIcon(iconName: ProjectItem["iconName"]) {
  switch (iconName) {
    case "cpu":
      return <Cpu className="size-5 text-primary-glow" />;
    case "shield":
      return <ShieldCheck className="size-5 text-accent" />;
    case "smartphone":
      return <Smartphone className="size-5 text-emerald-400" />;
    case "cloud":
      return <Cloud className="size-5 text-cyan-400" />;
  }
}

export function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Handle escape key and scroll lock when modal/sheet is open
  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <GlowCard
            key={project.id}
            className="glass lift group flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:border-primary-glow/50"
          >
            {/* Top clickable block */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              aria-label={`View details for ${project.title}`}
              className="cursor-pointer text-left outline-none focus-visible:ring-2 focus-visible:ring-primary-glow rounded-xl"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-border bg-surface-strong p-2.5">
                    {getProjectIcon(project.iconName)}
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

                <div className="flex items-center gap-1 rounded-full border border-border/60 bg-surface px-2.5 py-1 font-mono text-[11px] text-amber-400 shrink-0">
                  <Star className="size-3 fill-amber-400 text-amber-400" />
                  <span>{project.stars}</span>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>

            {/* Bottom Actions with minimum 44px touch targets */}
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

              <div className="flex items-center gap-1 shrink-0">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-xl text-muted-foreground hover:bg-surface-strong hover:text-foreground transition-colors"
                  aria-label={`View ${project.title} source code on GitHub`}
                  title="View Code on GitHub"
                >
                  <Github className="size-4" />
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-xl text-muted-foreground hover:bg-surface-strong hover:text-primary-glow transition-colors"
                    aria-label={`Open live demo for ${project.title}`}
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

      {/* ═══════════════════ PROJECT DETAIL MODAL (DESKTOP) / BOTTOM SHEET (MOBILE) ═══════════════════ */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Project Details: ${selectedProject.title}`}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-background/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          {/* Backdrop */}
          <div className="fixed inset-0" onClick={() => setSelectedProject(null)} />

          {/* Dialog Container: Bottom Sheet on Mobile, Centered Modal on Desktop */}
          <div className="relative z-10 w-full sm:max-w-xl max-h-[88vh] overflow-y-auto glass-strong border border-border/80 rounded-t-3xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl animate-in slide-in-from-bottom sm:zoom-in-95 duration-200 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] sm:pb-8">
            {/* Grab handle for mobile */}
            <div className="mx-auto -mt-2 mb-4 h-1.5 w-12 rounded-full bg-muted-foreground/30 sm:hidden" />

            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-border bg-surface-strong p-3">
                  {getProjectIcon(selectedProject.iconName)}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {selectedProject.title}
                  </h3>
                  <p className="font-mono text-xs text-primary-glow font-semibold">
                    {selectedProject.domain}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="glass inline-flex size-9 items-center justify-center rounded-full text-muted-foreground hover:text-foreground"
                aria-label="Close project details"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Body */}
            <div className="mt-5 space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {selectedProject.description}
              </p>

              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
                  Technologies & Architecture
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 text-xs font-mono text-muted-foreground">
                <Sparkles className="size-4 text-primary-glow" />
                <span>
                  Verified student production repository · {selectedProject.stars} GitHub stars
                </span>
              </div>
            </div>

            {/* Full-width touch-friendly actions */}
            <div className="mt-7 pt-4 border-t border-border/50 flex flex-col sm:flex-row gap-3">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 font-semibold text-primary-foreground shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Github className="size-4" />
                View Repository
              </a>

              {selectedProject.demoUrl && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl glass px-6 font-semibold text-foreground hover:text-primary-glow active:scale-[0.98] transition-all"
                >
                  <ExternalLink className="size-4" />
                  Live Preview
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
