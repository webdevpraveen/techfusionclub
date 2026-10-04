import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { primaryNavItems } from "@/data/navigation";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          {primaryNavItems.map((link) => (
            <li key={link.to || link.href}>
              {link.external && link.href ? (
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
                  to={link.to || "/"}
                  activeOptions={{ exact: (link.to || "/") === "/" }}
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
          {primaryNavItems.map((link) => (
            <li key={link.to || link.href}>
              {link.external && link.href ? (
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
                  to={link.to || "/"}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: (link.to || "/") === "/" }}
                  activeProps={{ className: "text-primary-glow" }}
                  className="block border-b border-border/60 py-3.5 font-display text-lg font-semibold text-muted-foreground"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
