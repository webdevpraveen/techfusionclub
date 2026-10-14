import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

type NavLink = { to: string; label: string } | { href: string; label: string; external: true };

const links: NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/members", label: "Members" },
  { to: "/alumni", label: "Alumni" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

/**
 * Dynamic Morphing Navigation Bar:
 * - At top of page (scrollY <= 20): Stretches full-width edge-to-edge flush with the top.
 * - When scrolled (scrollY > 20): Smoothly lifts off and morphs into a centered, floating frosted-glass pill.
 */
export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close mobile nav on route change
  useEffect(() => {
    setOpen(false);
  }, [currentPath]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 z-50 flex justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        scrolled
          ? "top-3 sm:top-5 px-3 sm:px-6 pointer-events-none"
          : "top-0 px-0 pointer-events-auto",
      )}
    >
      <nav
        aria-label="Primary"
        className={cn(
          "pointer-events-auto relative flex items-center justify-between gap-3 sm:gap-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "w-full max-w-5xl rounded-full px-3.5 sm:px-5 py-2 sm:py-2.5 bg-white/60 dark:bg-black/60 backdrop-blur-3xl backdrop-saturate-[200%] border border-white/50 dark:border-white/20 shadow-[0_14px_40px_0_rgba(0,0,0,0.22),inset_0_1px_1px_0_rgba(255,255,255,0.7)] dark:shadow-[0_16px_48px_0_rgba(0,0,0,0.8),inset_0_1px_1px_0_rgba(255,255,255,0.25)]"
            : "w-full max-w-full rounded-none px-4 sm:px-8 lg:px-12 py-3.5 sm:py-4 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-2xl border-b border-black/5 dark:border-white/10 shadow-none",
        )}
      >
        {/* Brand Logo & Name */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 sm:gap-3 shrink-0"
          onClick={() => setOpen(false)}
        >
          <Logo className="h-8 sm:h-9 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-sm" />
          <div className="flex flex-col">
            <span className="font-display text-sm sm:text-base font-black tracking-wider uppercase text-foreground drop-shadow-sm">
              TECH FUSION
            </span>
            <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-primary font-bold -mt-1">
              CLUB
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={"to" in link ? link.to : link.href}>
              {"external" in link && link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs sm:text-[13px] font-semibold text-primary transition-all duration-200 hover:text-foreground hover:bg-white/20 dark:hover:bg-white/10"
                >
                  {link.label}
                  <ExternalLink className="size-3" />
                </a>
              ) : (
                <Link
                  to={"to" in link ? link.to : "/"}
                  activeOptions={{ exact: ("to" in link ? link.to : "/") === "/" }}
                  activeProps={{ className: "text-primary font-bold bg-primary/10 shadow-sm" }}
                  className="rounded-full px-3 py-1.5 text-xs sm:text-[13px] font-semibold text-muted-foreground transition-all duration-200 hover:text-foreground hover:bg-white/20 dark:hover:bg-white/10"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-9 items-center justify-center rounded-full border border-white/40 dark:border-white/20 bg-white/30 dark:bg-white/10 text-foreground backdrop-blur-xl transition-all duration-200 hover:bg-white/50 dark:hover:bg-white/20 shadow-sm"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu Card with Full Glassmorphism */}
        {open && (
          <div
            id="mobile-nav"
            className={cn(
              "absolute top-full mt-2 inset-x-0 p-4 border shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-3xl backdrop-saturate-[180%] animate-in fade-in slide-in-from-top-2 lg:hidden",
              scrolled
                ? "rounded-3xl border-white/50 dark:border-white/20 bg-white/80 dark:bg-black/80 text-foreground shadow-[0_20px_50px_rgba(0,0,0,0.3),inset_0_1px_1px_0_rgba(255,255,255,0.6)] dark:shadow-[0_24px_60px_rgba(0,0,0,0.8),inset_0_1px_1px_0_rgba(255,255,255,0.2)]"
                : "rounded-2xl border-border/60 bg-white/95 dark:bg-zinc-950/95 text-foreground shadow-xl",
            )}
          >
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={"to" in link ? link.to : link.href}>
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-xl px-4 py-2.5 font-display text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="size-3.5" />
                    </a>
                  ) : (
                    <Link
                      to={"to" in link ? link.to : "/"}
                      onClick={() => setOpen(false)}
                      activeOptions={{ exact: ("to" in link ? link.to : "/") === "/" }}
                      activeProps={{ className: "text-primary font-bold bg-primary/10" }}
                      className="block rounded-xl px-4 py-2.5 font-display text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground hover:bg-white/30 dark:hover:bg-white/10"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
