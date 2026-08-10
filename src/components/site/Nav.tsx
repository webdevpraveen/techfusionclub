import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/theme";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/governance", label: "Governance" },
  { to: "/events", label: "Events" },
  { to: "/team", label: "Team" },
  { to: "/gallery", label: "Gallery" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "glass-strong border-b border-border/80 shadow-2xl backdrop-blur-2xl"
          : "border-b border-transparent bg-background/20 backdrop-blur-md",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-8"
      >
        {/* Direct Logo Image + Clean Bold Gradient Heading */}
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <Logo className="h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-display text-xl font-extrabold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary-glow to-accent drop-shadow-[0_0_12px_rgba(217,72,15,0.4)] sm:text-2xl">
              TECH FUSION
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-primary-glow font-bold -mt-1">
              CLUB
            </span>
          </div>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={"to" in link ? link.to : link.href}>
              {"external" in link && link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="electric-link inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold text-primary-glow transition-colors hover:text-foreground xl:px-4"
                >
                  {link.label}
                  <ExternalLink className="size-3" />
                </a>
              ) : (
                <Link
                  to={"to" in link ? link.to : "/"}
                  activeOptions={{ exact: ("to" in link ? link.to : "/") === "/" }}
                  activeProps={{ className: "text-foreground font-semibold" }}
                  className="electric-link rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground xl:px-4"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Light / Dark Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className="glass hover:bg-surface-strong relative inline-flex size-10 items-center justify-center rounded-full text-foreground transition-transform duration-300 hover:scale-110 border border-border"
          >
            {theme === "dark" ? (
              <Sun className="size-5 text-amber-400 transition-all duration-300" />
            ) : (
              <Moon className="size-5 text-indigo-600 transition-all duration-300" />
            )}
          </button>

          <Link
            to="/join"
            className="group pulse-glow relative hidden overflow-hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03] sm:inline-flex"
          >
            <span className="relative z-10">Join the Club</span>
            <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-primary-foreground/25 opacity-0 group-hover:animate-sheen group-hover:opacity-100" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="glass inline-flex size-10 items-center justify-center rounded-full text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        hidden={!open}
        className="glass-strong border-t px-5 pb-8 pt-4 lg:hidden"
      >
        <ul className="flex flex-col">
          {links.map((link) => (
            <li key={"to" in link ? link.to : link.href}>
              {"external" in link && link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-border/60 py-3.5 font-display text-lg font-semibold text-primary-glow"
                >
                  <span>{link.label}</span>
                  <ExternalLink className="size-4" />
                </a>
              ) : (
                <Link
                  to={"to" in link ? link.to : "/"}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: ("to" in link ? link.to : "/") === "/" }}
                  activeProps={{ className: "text-primary-glow" }}
                  className="block border-b border-border/60 py-3.5 font-display text-lg font-semibold text-muted-foreground"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <Link
          to="/join"
          onClick={() => setOpen(false)}
          className="mt-6 block rounded-full bg-primary px-5 py-3 text-center font-semibold text-primary-foreground"
        >
          Join the Club
        </Link>
      </div>
    </header>
  );
}
