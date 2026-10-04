import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Home,
  Compass,
  Code2,
  Menu,
  X,
  ExternalLink,
  ChevronRight,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { primaryNavItems, exploreNavItems } from "@/data/navigation";
import { club } from "@/data/club";
import { Logo } from "./Logo";

type ActiveTab = "home" | "explore" | "projects" | "menu" | null;

export function MobileBottomNav() {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  const [activeSheet, setActiveSheet] = useState<"explore" | "menu" | null>(null);

  // Close sheet on route change
  useEffect(() => {
    setActiveSheet(null);
  }, [pathname]);

  // Handle escape key and body scroll locking
  useEffect(() => {
    if (!activeSheet) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveSheet(null);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeSheet]);

  // Determine which tab is active
  const getActiveTab = (): ActiveTab => {
    if (activeSheet === "menu") return "menu";
    if (activeSheet === "explore") return "explore";

    if (pathname === "/") {
      if (typeof window !== "undefined" && window.location.hash === "#projects") {
        return "projects";
      }
      return "home";
    }

    if (pathname === "/events") return "explore";
    return "menu";
  };

  const activeTab = getActiveTab();

  const handleHomeClick = (e: React.MouseEvent) => {
    setActiveSheet(null);
    if (pathname === "/" && typeof window !== "undefined") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleProjectsClick = (e: React.MouseEvent) => {
    setActiveSheet(null);
    if (typeof window !== "undefined") {
      if (pathname === "/") {
        e.preventDefault();
        const el = document.getElementById("projects");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState(null, "", "/#projects");
        }
      } else {
        window.location.href = "/#projects";
      }
    }
  };

  const handleExploreToggle = () => {
    setActiveSheet((curr) => (curr === "explore" ? null : "explore"));
  };

  const handleMenuToggle = () => {
    setActiveSheet((curr) => (curr === "menu" ? null : "menu"));
  };

  return (
    <>
      {/* ═══════════════════ EXPLORE BOTTOM SHEET ═══════════════════ */}
      {activeSheet === "explore" && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Explore Tech Fusion Club"
          className="fixed inset-0 z-50 flex flex-col justify-end md:hidden animate-in fade-in duration-200"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveSheet(null)}
          />

          {/* Sheet Panel */}
          <div className="relative z-10 max-h-[85vh] w-full overflow-y-auto rounded-t-3xl border-t border-border/80 bg-card/95 p-6 shadow-2xl backdrop-blur-2xl animate-in slide-in-from-bottom duration-300 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))]">
            {/* Grab handle */}
            <div className="mx-auto -mt-2 mb-4 h-1.5 w-12 rounded-full bg-muted-foreground/30" />

            <div className="flex items-center justify-between pb-4 border-b border-border/60">
              <div className="flex items-center gap-2">
                <Compass className="size-5 text-primary-glow" />
                <h2 className="font-display text-lg font-bold text-foreground">Explore</h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveSheet(null)}
                className="glass inline-flex size-9 items-center justify-center rounded-full text-muted-foreground hover:text-foreground"
                aria-label="Close explore sheet"
              >
                <X className="size-4" />
              </button>
            </div>

            <p className="mt-3 text-xs text-muted-foreground">
              Discover key areas of the club, from our six operating pillars to upcoming events.
            </p>

            <ul className="mt-4 space-y-2.5">
              {exploreNavItems.map((item) => {
                const isAnchor = Boolean(item.href);

                const content = (
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <span className="font-display text-sm font-semibold text-foreground group-hover:text-primary-glow transition-colors">
                        {item.label}
                      </span>
                      {item.description && (
                        <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <ChevronRight className="size-4 shrink-0 text-muted-foreground group-hover:text-primary-glow group-hover:translate-x-0.5 transition-all" />
                  </div>
                );

                const itemClass =
                  "group flex items-center justify-between rounded-2xl border border-border/60 bg-surface/80 p-4 transition-all hover:border-primary-glow/60 hover:bg-surface-strong active:scale-[0.98]";

                return (
                  <li key={item.label}>
                    {isAnchor ? (
                      <a
                        href={item.href}
                        onClick={() => {
                          setActiveSheet(null);
                          const hash = item.href?.split("#")[1];
                          if (hash && typeof window !== "undefined") {
                            const el = document.getElementById(hash);
                            if (el) {
                              el.scrollIntoView({ behavior: "smooth" });
                            }
                          }
                        }}
                        className={itemClass}
                      >
                        {content}
                      </a>
                    ) : (
                      <Link
                        to={item.to || "/"}
                        onClick={() => setActiveSheet(null)}
                        className={itemClass}
                      >
                        {content}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      {/* ═══════════════════ FULL MENU BOTTOM SHEET ═══════════════════ */}
      {activeSheet === "menu" && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation Menu"
          className="fixed inset-0 z-50 flex flex-col justify-end md:hidden animate-in fade-in duration-200"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveSheet(null)}
          />

          {/* Sheet Panel */}
          <div className="relative z-10 max-h-[88vh] w-full overflow-y-auto rounded-t-3xl border-t border-border/80 bg-card/95 p-6 shadow-2xl backdrop-blur-2xl animate-in slide-in-from-bottom duration-300 pb-[calc(2rem+env(safe-area-inset-bottom,0px))]">
            {/* Grab handle */}
            <div className="mx-auto -mt-2 mb-4 h-1.5 w-12 rounded-full bg-muted-foreground/30" />

            {/* Header with Logo */}
            <div className="flex items-center justify-between pb-4 border-b border-border/60">
              <div className="flex items-center gap-3">
                <Logo className="h-8 w-auto" />
                <div className="flex flex-col">
                  <span className="font-display text-sm font-extrabold tracking-wider uppercase text-foreground">
                    TECH FUSION CLUB
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-primary-glow">
                    Est. {club.foundedYear}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveSheet(null)}
                className="glass inline-flex size-9 items-center justify-center rounded-full text-muted-foreground hover:text-foreground"
                aria-label="Close navigation menu"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Primary Site Navigation Links */}
            <nav aria-label="Mobile full navigation" className="mt-4">
              <ul className="grid grid-cols-2 gap-2">
                {primaryNavItems.map((item) => {
                  const isCurrent =
                    item.to === "/"
                      ? pathname === "/"
                      : pathname === item.to || pathname.startsWith(item.to + "/");

                  return (
                    <li key={item.label}>
                      <Link
                        to={item.to || "/"}
                        onClick={() => setActiveSheet(null)}
                        className={cn(
                          "flex flex-col rounded-xl border p-3 transition-all active:scale-[0.98]",
                          isCurrent
                            ? "border-primary-glow/80 bg-primary/10 text-primary-glow font-semibold"
                            : "border-border/60 bg-surface/60 text-foreground hover:bg-surface-strong hover:text-primary-glow",
                        )}
                      >
                        <span className="font-display text-sm font-semibold">{item.label}</span>
                        {item.description && (
                          <span className="mt-0.5 truncate text-[10px] text-muted-foreground">
                            {item.description}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Featured Action: Viveka Tech Fest */}
            <div className="mt-4 pt-4 border-t border-border/60">
              <a
                href="https://vivekatheintelligence.in/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setActiveSheet(null)}
                className="flex items-center justify-between rounded-xl border border-primary/40 bg-gradient-to-r from-primary/15 via-accent/10 to-transparent p-3.5 transition-transform active:scale-[0.98]"
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles className="size-4 text-primary-glow" />
                  <div>
                    <span className="font-display text-sm font-bold text-foreground">
                      Viveka 6.0 Fest
                    </span>
                    <p className="text-[10px] text-muted-foreground">
                      Annual flagship tech festival site
                    </p>
                  </div>
                </div>
                <ExternalLink className="size-4 text-primary-glow" />
              </a>
            </div>

            {/* Social Links & Contact */}
            <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
              <Link
                to="/contact"
                onClick={() => setActiveSheet(null)}
                className="font-semibold text-primary-glow hover:underline inline-flex items-center gap-1"
              >
                Join the Club <ArrowUpRight className="size-3" />
              </Link>
              <div className="flex items-center gap-3">
                {club.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-foreground transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════ MOBILE-ONLY BOTTOM NAVIGATION BAR ═══════════════════ */}
      <nav
        aria-label="Mobile navigation"
        className={cn(
          "fixed bottom-0 inset-x-0 z-40 md:hidden",
          "glass-strong border-t border-border/80 shadow-[0_-8px_30px_rgba(0,0,0,0.35)] backdrop-blur-2xl bg-card/90",
          "transition-transform duration-300 ease-in-out",
        )}
        style={{
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
        }}
      >
        <div className="mx-auto flex h-16 max-w-lg items-center justify-around px-2">
          {/* 1. Home */}
          <a
            href="/"
            onClick={handleHomeClick}
            aria-current={activeTab === "home" ? "page" : undefined}
            className={cn(
              "group flex flex-1 flex-col items-center justify-center min-h-[44px] min-w-[44px] py-1 transition-colors select-none",
              activeTab === "home"
                ? "text-primary-glow font-semibold"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <div className="relative">
              <Home
                className={cn(
                  "size-5 transition-transform duration-200 group-hover:scale-110",
                  activeTab === "home" && "scale-105",
                )}
              />
              {activeTab === "home" && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-1 rounded-full bg-primary-glow shadow-[0_0_8px_rgba(217,72,15,0.8)]" />
              )}
            </div>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-wider">Home</span>
          </a>

          {/* 2. Explore */}
          <button
            type="button"
            onClick={handleExploreToggle}
            aria-expanded={activeSheet === "explore"}
            aria-haspopup="dialog"
            aria-label="Explore sections"
            className={cn(
              "group flex flex-1 flex-col items-center justify-center min-h-[44px] min-w-[44px] py-1 transition-colors select-none",
              activeTab === "explore"
                ? "text-primary-glow font-semibold"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <div className="relative">
              <Compass
                className={cn(
                  "size-5 transition-transform duration-200 group-hover:scale-110",
                  activeTab === "explore" && "scale-105",
                )}
              />
              {activeTab === "explore" && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-1 rounded-full bg-primary-glow shadow-[0_0_8px_rgba(217,72,15,0.8)]" />
              )}
            </div>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-wider">Explore</span>
          </button>

          {/* 3. Projects */}
          <button
            type="button"
            onClick={handleProjectsClick}
            aria-label="View Projects and Proof of Work"
            className={cn(
              "group flex flex-1 flex-col items-center justify-center min-h-[44px] min-w-[44px] py-1 transition-colors select-none",
              activeTab === "projects"
                ? "text-primary-glow font-semibold"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <div className="relative">
              <Code2
                className={cn(
                  "size-5 transition-transform duration-200 group-hover:scale-110",
                  activeTab === "projects" && "scale-105",
                )}
              />
              {activeTab === "projects" && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-1 rounded-full bg-primary-glow shadow-[0_0_8px_rgba(217,72,15,0.8)]" />
              )}
            </div>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-wider">Projects</span>
          </button>

          {/* 4. Menu */}
          <button
            type="button"
            onClick={handleMenuToggle}
            aria-expanded={activeSheet === "menu"}
            aria-haspopup="dialog"
            aria-label="Open menu"
            className={cn(
              "group flex flex-1 flex-col items-center justify-center min-h-[44px] min-w-[44px] py-1 transition-colors select-none",
              activeTab === "menu"
                ? "text-primary-glow font-semibold"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <div className="relative">
              <Menu
                className={cn(
                  "size-5 transition-transform duration-200 group-hover:scale-110",
                  activeTab === "menu" && "scale-105",
                )}
              />
              {activeTab === "menu" && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-1 rounded-full bg-primary-glow shadow-[0_0_8px_rgba(217,72,15,0.8)]" />
              )}
            </div>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-wider">Menu</span>
          </button>
        </div>
      </nav>
    </>
  );
}
