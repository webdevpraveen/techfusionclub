import { createFileRoute } from "@tanstack/react-router";
import { alumniList } from "@/data/alumni";
import type { Alumnus } from "@/data/alumni";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTABanner";
import { Github, Linkedin } from "lucide-react";
import { GlowCard } from "@/components/site/GlowCard";

export const Route = createFileRoute("/alumni")({
  head: () => ({
    meta: [
      { title: "Alumni Network | Tech Fusion Club (TFC) SRMU" },
      {
        name: "description",
        content:
          "Explore the successful alumni network of Tech Fusion Club (TFC) at SRMU. Past leaders, members, and tech professionals who built Viveka and the club's legacy alongside Praveen Singh (webdevpraveen).",
      },
      {
        name: "keywords",
        content:
          "Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu, tfc alumni, srmu alumni",
      },
      { property: "og:title", content: "Alumni Network | Tech Fusion Club (TFC) SRMU" },
      {
        property: "og:description",
        content:
          "Explore the successful alumni network of Tech Fusion Club (TFC) at SRMU. Past leaders who built Viveka.",
      },
      { property: "og:url", content: "https://techfusionclub.vercel.app/alumni" },
      { name: "twitter:title", content: "Alumni | Tech Fusion Club SRMU" },
      {
        name: "twitter:description",
        content:
          "Explore the successful alumni network of Tech Fusion Club (TFC) at SRMU. Past leaders who built Viveka.",
      },
    ],
    links: [{ rel: "canonical", href: "https://techfusionclub.vercel.app/alumni" }],
  }),
  component: Alumni,
});

function AlumniCard({ alumnus, index }: { alumnus: Alumnus; index: number }) {
  return (
    <GlowCard className="glass lift group flex h-full flex-col overflow-hidden rounded-2xl">
      <div className="relative aspect-square overflow-hidden bg-surface">
        {alumnus.photo ? (
          <img
            src={alumnus.photo}
            alt={alumnus.name}
            loading={index < 8 ? "eager" : "lazy"}
            className="size-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />
        ) : (
          <div className="flex size-full items-center justify-center font-display text-4xl text-muted-foreground/30">
            {alumnus.name.charAt(0)}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-bold text-foreground">{alumnus.name}</h3>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-primary-glow">
              {alumnus.post}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between p-5">
        <ul className="space-y-1.5 font-mono text-xs text-muted-foreground">
          <li>
            <span className="text-foreground/40">Course:</span> {alumnus.course}
          </li>
          <li>
            <span className="text-foreground/40">Tenure:</span> {alumnus.tenure}
          </li>
        </ul>
        {alumnus.socials && (
          <div className="mt-6 flex items-center gap-3">
            {alumnus.socials.linkedin && (
              <a
                href={alumnus.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary-glow"
              >
                <Linkedin className="size-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            )}
            {alumnus.socials.github && (
              <a
                href={alumnus.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="size-4" />
                <span className="sr-only">GitHub</span>
              </a>
            )}
          </div>
        )}
      </div>
    </GlowCard>
  );
}

function Alumni() {
  return (
    <>
      <Section className="pb-8">
        <Reveal>
          <p className="eyebrow">TFC Alumni</p>
          <h1 className="mt-4 max-w-4xl text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            The foundation we stand on.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Meet the past members who paved the way. From general secretaries to core members, these
            are the individuals who shaped Tech Fusion Club.
          </p>
        </Reveal>
      </Section>

      <Section className="py-10 sm:py-12">
        <ul className="mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {alumniList.map((member, i) => (
            <li key={member.id}>
              <Reveal delay={(i % 4) * 50}>
                <AlumniCard alumnus={member} index={i} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <CTABanner
        eyebrow="Continue the legacy"
        title="Leave your mark on the club."
        body="Join us today and be part of the next generation of Tech Fusion leaders."
      />
    </>
  );
}
