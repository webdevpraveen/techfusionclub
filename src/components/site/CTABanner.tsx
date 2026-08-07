import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTABanner({
  eyebrow = "Recruitment",
  title = "The next intake is the best time to start.",
  body = "No prior experience required — just consistency. Pick a domain, get a mentor, and start shipping with people who care about the work.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="px-5 pb-24 sm:px-8">
      <Reveal className="mx-auto w-full max-w-7xl">
        <div className="glass-strong hero-gradient border-animated relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-16 sm:py-20">
          <div className="circuit-lines pointer-events-none absolute inset-0 opacity-70" />
          <div className="relative mx-auto max-w-2xl">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-4 text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {body}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/join"
                className="group pulse-glow inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03] sm:w-auto"
              >
                Apply to join
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/about"
                className="glass inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 font-semibold text-foreground transition-colors hover:text-primary-glow sm:w-auto"
              >
                Learn about us
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
