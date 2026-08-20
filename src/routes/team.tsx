import { createFileRoute } from "@tanstack/react-router";
import type { MemberTier } from "@/data/members";
import { membersByTier, tierMeta } from "@/data/members";
import { MemberCard } from "@/components/site/MemberCard";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Core Team | Tech Fusion Club (TFC) SRMU | WebDevPraveen" },
      {
        name: "description",
        content:
          "Meet the core team of Tech Fusion Club (TFC) at SRMU. Faculty Coordinators, General Secretaries, and department heads driving Viveka fest and tech events. Founded by Praveen Singh (webdevpraveen).",
      },
      {
        name: "keywords",
        content:
          "Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu, tech fusion team, coding club leaders",
      },
      { property: "og:title", content: "Core Team | Tech Fusion Club (TFC) SRMU" },
      {
        property: "og:description",
        content:
          "Meet the core team of Tech Fusion Club (TFC) at SRMU. Driving Viveka fest and tech events.",
      },
      { property: "og:url", content: "https://techfusionclub.vercel.app/team" },
      { name: "twitter:title", content: "Team | Tech Fusion Club (TFC SRMU)" },
      {
        name: "twitter:description",
        content:
          "Meet the core team of Tech Fusion Club (TFC) at SRMU. Driving Viveka fest and tech events.",
      },
    ],
    links: [{ rel: "canonical", href: "https://techfusionclub.vercel.app/team" }],
  }),
  component: Team,
});

const tiers: { tier: MemberTier; size: "lg" | "md" | "sm"; cols: string }[] = [
  { tier: "faculty", size: "sm", cols: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5" },
  { tier: "gsec", size: "sm", cols: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5" },
  { tier: "jsec", size: "sm", cols: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5" },
  { tier: "head", size: "sm", cols: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5" },
  { tier: "core", size: "sm", cols: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5" },
];

function Team() {
  return (
    <>
      <Section className="pb-8">
        <Reveal>
          <p className="eyebrow">The Leadership & Team</p>
          <h1 className="mt-4 max-w-4xl text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            The hierarchy powering Tech Fusion Club.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Tap or click any card to flip it and reveal that member's official access badge —
            domain, branch, year, and ID code.
          </p>
        </Reveal>
      </Section>

      {tiers.map(({ tier, size, cols }) => {
        const people = membersByTier(tier);
        if (people.length === 0) return null;
        return (
          <Section key={tier} className="py-10 sm:py-12">
            <Reveal className="flex flex-col gap-2 border-b border-border/70 pb-5">
              <p className="font-display text-2xl font-bold text-foreground">
                {tierMeta[tier].label}
              </p>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {tierMeta[tier].description}
              </p>
            </Reveal>
            <ul className={`mt-8 grid gap-5 ${cols}`}>
              {people.map((m, i) => (
                <li key={m.id}>
                  <MemberCard member={m} size={size} index={i} />
                </li>
              ))}
            </ul>
          </Section>
        );
      })}

      <CTABanner
        eyebrow="Join the roster"
        title="Your badge could be on this page next semester."
        body="Applications open twice a year. Pick a domain, meet your mentor, and start shipping."
      />
    </>
  );
}
