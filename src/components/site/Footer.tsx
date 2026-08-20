import { Link } from "@tanstack/react-router";
import { Mail, ExternalLink } from "lucide-react";
import { club } from "@/data/club";
import { Logo } from "./Logo";

const quickLinks = [
  { to: "/about", label: "About" },
  { to: "/governance", label: "Governance" },
  { to: "/events", label: "Events" },
  { href: "https://viveka.techfusion.club", label: "Viveka 6.0 Fest", external: true },
  { to: "/team", label: "Team" },
] as const;

const moreLinks = [
  { to: "/gallery", label: "Gallery" },
  { to: "/alumni", label: "Alumni" },
  { to: "/join", label: "Join Us" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border/70 px-5 pb-10 pt-16 sm:px-8 sm:pt-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="group flex items-center gap-3">
              <Logo className="h-10 sm:h-12 w-auto" />
              <div className="flex flex-col">
                <span className="font-display text-base font-extrabold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary-glow to-accent drop-shadow-[0_0_10px_rgba(217,72,15,0.4)]">
                  TECH FUSION
                </span>
                <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-primary-glow font-bold -mt-0.5">
                  CLUB
                </span>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {club.tagline} A student-led technical club at {club.university}, active since{" "}
              {club.foundedYear}.
            </p>
          </div>

          <nav aria-label="Footer quick links">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground">
              Explore
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {quickLinks.map((l) => (
                <li key={"to" in l ? l.to : l.href}>
                  {"external" in l && l.external ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 transition-colors hover:text-primary-glow text-primary-glow font-semibold"
                    >
                      {l.label}
                      <ExternalLink className="size-3" />
                    </a>
                  ) : (
                    <Link to={"to" in l ? l.to : "/"} className="transition-colors hover:text-primary-glow">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer secondary links">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground">
              More
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {moreLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-primary-glow">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground">
              Get in touch
            </h2>
            <a
              href={`mailto:${club.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary-glow"
            >
              <Mail className="size-4 shrink-0" />
              {club.email}
            </a>
            <ul className="mt-6 flex flex-wrap gap-2">
              {club.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="glass inline-flex rounded-full px-3.5 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary-glow"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="divider-glow mt-14" />
        <div className="flex flex-col gap-3 pt-6 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} {club.name}
          </p>
          <p>Built by students, for students</p>
        </div>
      </div>
    </footer>
  );
}
