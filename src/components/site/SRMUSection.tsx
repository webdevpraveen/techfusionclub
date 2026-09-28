import { ArrowUpRight, MapPin } from "lucide-react";

export function SRMUSection() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 py-24 sm:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft orange glow */}
        <div className="absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-[32rem] w-[32rem] rounded-full bg-primary/5 blur-[140px]" />

        {/* Technical grid */}
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:70px_70px]" />

        {/* Decorative rings */}
        <div className="absolute -bottom-40 right-[-8rem] h-[30rem] w-[30rem] rounded-full border border-primary/10" />

        <div className="absolute -bottom-24 right-[-2rem] h-[20rem] w-[20rem] rounded-full border border-primary/10" />

        <div className="absolute bottom-0 right-20 h-2 w-2 rounded-full bg-primary/50" />
      </div>

      <div className="container relative mx-auto px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-12 bg-primary" />

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            SRMU / Our University
          </span>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl">
          {/* Heading */}
          <h2 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            <span className="text-foreground">Built at</span>
            <br />

            <span className="text-primary">
              Shri Ramswaroop
            </span>

            <br />

            <span className="text-foreground">
              Memorial University
            </span>
          </h2>

          {/* Tagline */}
          <p className="mt-7 text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">
            Where technology meets opportunity.
          </p>

          {/* Description */}
          <p className="mt-7 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            Tech Fusion Club is a student-led technical community at Shri
            Ramswaroop Memorial University, created to give students a space
            to learn, build, collaborate, and turn ideas into real projects.
          </p>

          {/* University Card */}
          <div className="mt-12 max-w-5xl overflow-hidden rounded-[2rem] border border-border/70 bg-background/45 p-6 shadow-sm backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              {/* Logo + Address */}
              <div>
                {/* SRMU Logo */}
                <div className="mb-7 inline-flex items-center overflow-hidden rounded-xl bg-[#111111] px-5 py-3">
                  <img
                    src="/images/logo1-BgStIc1Y.png"
                    alt="Shri Ramswaroop Memorial University"
                    className="h-11 w-auto object-contain sm:h-12"
                  />
                </div>

                {/* Address */}
                <div className="flex gap-3">
                  <MapPin className="mt-1 size-5 shrink-0 text-primary" />

                  <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    Village – Hadauri, Post – Tindola
                    <br />
                    Lucknow-Deva Road, Barabanki
                    <br />
                    Uttar Pradesh — 225003
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="shrink-0">
                <a
                  href="https://srmu.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:gap-3 hover:bg-primary/90"
                >
                  Explore SRMU
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Identity */}
          <div className="mt-16 flex flex-col gap-4 border-t border-border/60 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Tech Fusion Club × Shri Ramswaroop Memorial University
            </p>

            <p className="text-xs text-muted-foreground">
              Learn. Build. Collaborate. Ship.
            </p>
          </div>
        </div>

        {/* Large Background SRMU Text */}
        <div className="pointer-events-none absolute -right-10 bottom-0 select-none text-[clamp(9rem,20vw,20rem)] font-black leading-none tracking-[-0.08em] text-foreground/[0.025]">
          SRMU
        </div>
      </div>
    </section>
  );
}