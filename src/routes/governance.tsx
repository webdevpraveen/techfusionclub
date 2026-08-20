import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTABanner";
import { Linkedin, Sparkles, ShieldCheck, Award, GraduationCap, Building2, Users, FileCheck } from "lucide-react";

export const Route = createFileRoute("/governance")({
  head: () => ({
    meta: [
      { title: "Governance | Tech Fusion Club (TFC) SRMU" },
      {
        name: "description",
        content:
          "Meet the visionary patrons, registrar, and faculty coordinators governing Tech Fusion Club (TFC) at Shri Ramswaroop Memorial University (SRMU). Powering Viveka fest and tech communities.",
      },
      {
        name: "keywords",
        content: "Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu, tfc governance, srmu faculty",
      },
      { property: "og:title", content: "Governance | Tech Fusion Club (TFC) SRMU" },
      {
        property: "og:description",
        content: "Meet the visionary patrons, registrar, and faculty coordinators governing Tech Fusion Club (TFC) at SRMU.",
      },
      { property: "og:url", content: "https://techfusionclub.vercel.app/governance" },
      { name: "twitter:title", content: "Governance | Tech Fusion Club SRMU" },
      {
        name: "twitter:description",
        content: "Meet the visionary patrons, registrar, and faculty coordinators governing Tech Fusion Club (TFC) at SRMU.",
      },
    ],
    links: [{ rel: "canonical", href: "https://techfusionclub.vercel.app/governance" }],
  }),
  component: Governance,
});

interface LeaderMember {
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin?: string;
  badge?: string;
}

interface GovernanceSectionData {
  title: string;
  subtitle: string;
  members: LeaderMember[];
}

const governanceData: GovernanceSectionData[] = [
  {
    title: "Chief Patrons",
    subtitle: "Visionary institutional leadership guiding the university and student technical ecosystem.",
    members: [
      {
        name: "Er. Pankaj Agarwal",
        role: "Chancellor, SRMU",
        badge: "Chief Patron",
        description:
          "IIT Kanpur alumnus and visionary social entrepreneur driving SRMU towards global academic benchmarks, cutting-edge research, and student-led innovation.",
        image: "https://srmu.ac.in/assets/pankaj-DsE5rnwQ.webp",
        linkedin: "https://www.linkedin.com/in/pankaj-agarwal-b72ab321/",
      },
      {
        name: "Er. Pooja Agarwal",
        role: "Pro Chancellor, SRMU",
        badge: "Chief Patron",
        description:
          "Co-founder of SRMU empowering students through holistic skill development, interdisciplinary technical research, and women-in-technology initiatives.",
        image: "https://srmu.ac.in/assets/pooja-B1uI8fBS.webp",
      },
    ],
  },
  {
    title: "Patrons",
    subtitle: "Executive university officers providing strategic academic and administrative direction.",
    members: [
      {
        name: "Prof. (Dr.) Vijay Tiwari",
        role: "Vice Chancellor, SRMU",
        badge: "Patron",
        description:
          "Distinguished academician advancing university research infrastructure, outcome-based pedagogy, and industry integration across technical domains.",
        image: "https://srmu.ac.in/assets/vijaytiwari-DtLhXa4L.webp",
        linkedin: "https://www.linkedin.com/in/dr-vijay-kumar-tiwari/",
      },
      {
        name: "Prof. (Dr.) Hemendra Sharma",
        role: "Registrar, SRMU",
        badge: "Patron",
        description:
          "Head of University Administration ensuring seamless academic governance, student welfare, regulatory compliance, and institutional efficiency.",
        image: "https://srmu.ac.in/assets/Hemendra-NSaxOOgS.webp",
        linkedin: "https://www.linkedin.com/school/shri-ramswaroop-memorial-university/",
      },
    ],
  },
  {
    title: "Faculty Coordinators",
    subtitle: "Dedicated faculty mentors supervising technical societies, hackathons, and student growth.",
    members: [
      {
        name: "Dr. Veena Singh",
        role: "HoD, Professor IMCE & University Club Coordinator, SRMU",
        badge: "Faculty Advisor",
        description:
          "Chief Faculty Mentor guiding university student technical societies, annual tech fests, inter-departmental logistics, and leadership development.",
        image: "https://srmu.ac.in/assets/dr-veena-singh-CKCbgSAF.webp",
        linkedin: "https://www.linkedin.com/in/prof-dr-veena-singh-26a48b196/",
      },
      {
        name: "Er. Abhishek Kumar Saxena",
        role: "Assistant Director, IQAC & Head Technical Society, SRMU",
        badge: "Faculty Convener",
        description:
          "Convener driving student technical projects, hackathons, open-source build nights, and university digital media initiatives.",
        image: "https://www.vivekatheintelligence.in/abhishek.jpg",
        linkedin: "https://www.linkedin.com/in/abhishek-kumar-saxena-80a51111a/",
      },
      {
        name: "Dr. Mrityunjay Rai",
        role: "Assistant Director IQAC & Coordinator Technical Society",
        badge: "Faculty Coordinator",
        description:
          "Coordinating inter-departmental technical competitions, hardware/software mentorship ladders, and engineering research labs.",
        image: "https://th.bing.com/th/id/OIP.90nfazrcFSf6EtqDH9jVzgHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        linkedin: "https://www.linkedin.com/in/dr-mritunjay-rai-36b85118/",
      },
      {
        name: "Er. Sunny Kumar",
        role: "Assistant Professor DCSE & Coordinator Technical Society",
        badge: "Faculty Coordinator",
        description:
          "Mentoring web & mobile app development bootcamps, competitive coding tracks, and student project showcases.",
        image: "https://srmu.ac.in/storage/teams/11zon-cropped-5-11zon-23022411165423.jpeg",
        linkedin: "https://www.linkedin.com/in/sunny-kumar-a7910b234/",
      },
      {
        name: "Er. Neeta Bhusal Sharma",
        role: "Assistant Professor DCSE & Coordinator Technical Society",
        badge: "Faculty Coordinator",
        description:
          "Guiding AI/ML workshops, cybersecurity hackathons, UI/UX design sprints, and student team development.",
        image: "https://srmu.ac.in/storage/teams/11zon-cropped-2-11zon-23022410512735.jpeg",
      },
    ],
  },
];

const governancePillars = [
  {
    icon: <ShieldCheck className="size-6 text-primary-glow" />,
    title: "Institutional Transparency",
    description: "100% audited event budgets, student grants, and university club operations under faculty supervision.",
  },
  {
    icon: <Users className="size-6 text-primary-glow" />,
    title: "Student Empowerment",
    description: "Merit-based student leadership council driving domain workshops, open-source projects, and peer ladders.",
  },
  {
    icon: <GraduationCap className="size-6 text-primary-glow" />,
    title: "Academic & Industry Alignment",
    description: "Continuous mentorship bridging academic curriculum with modern tech stack practices.",
  },
  {
    icon: <FileCheck className="size-6 text-primary-glow" />,
    title: "Ethics & Open Source Charter",
    description: "Strict enforcement of academic integrity, inclusive open mentorship, and anti-harassment standards.",
  },
];

function LeaderCard({ member }: { member: LeaderMember }) {
  return (
    <div className="glass lift group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/70 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 w-full sm:w-[21rem]">
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-full bg-primary/10 border border-primary/30 px-3 py-0.5 font-mono text-[10px] font-bold text-primary-glow uppercase tracking-wider">
            {member.badge || "Leadership"}
          </span>
          <Building2 className="size-4 text-muted-foreground/60" />
        </div>

        <h3 className="mt-4 font-display text-xl font-bold text-foreground group-hover:text-primary-glow transition-colors">
          {member.name}
        </h3>
        <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-wider text-primary-glow">
          {member.role}
        </p>

        <div className="mt-4 relative h-64 w-full overflow-hidden rounded-xl bg-surface/50 border border-border/50">
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            className="h-full w-full object-cover object-top rounded-xl transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-50" />
        </div>

        <p className="mt-4 text-xs leading-relaxed text-muted-foreground font-normal">
          {member.description}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
        <span className="font-mono text-[11px] text-muted-foreground font-medium">SRMU Governance</span>
        {member.linkedin ? (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name}'s LinkedIn profile`}
            className="inline-flex size-8 items-center justify-center rounded-full bg-surface border border-border/80 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110"
          >
            <Linkedin className="size-4" />
          </a>
        ) : (
          <span className="size-8" />
        )}
      </div>
    </div>
  );
}

function Governance() {
  return (
    <>
      {/* ---------------- Header Section ---------------- */}
      <Section className="pb-10 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs font-bold text-primary-glow">
            <Sparkles className="size-3.5 animate-pulse" />
            <span>Institutional Governance & Leadership</span>
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Leadership & <span className="text-gradient">Governance</span>
          </h1>
          <p className="mt-4 text-pretty text-lg text-muted-foreground max-w-2xl mx-auto">
            The visionary university patrons, registrar, and faculty coordinators behind Shri Ramswaroop Memorial University and Tech Fusion Club.
          </p>
        </Reveal>
      </Section>

      {/* ---------------- Governance Categories ---------------- */}
      {governanceData.map((sec, secIdx) => (
        <Section key={sec.title} className="py-8">
          <Reveal delay={secIdx * 50}>
            <div className="text-center mb-10 max-w-2xl mx-auto">
              <h2 className="inline-block border-b-2 border-primary/40 pb-2 font-mono text-xl font-bold uppercase tracking-widest text-foreground sm:text-2xl">
                {sec.title}
              </h2>
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                {sec.subtitle}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {sec.members.map((m) => (
                <LeaderCard key={m.name} member={m} />
              ))}
            </div>
          </Reveal>
        </Section>
      ))}

      {/* ---------------- Governance Pillars Section ---------------- */}
      <Section className="py-12">
        <Reveal>
          <div className="text-center mb-12">
            <span className="eyebrow">Operating Principles</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground">
              Governance & Integrity Charter
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
              Core institutional standards governing Tech Fusion Club operations, student elections, and event execution.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {governancePillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="glass lift h-full rounded-2xl p-6 border border-border/70">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/30 mb-4">
                    {p.icon}
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Section>

      <CTABanner />
    </>
  );
}
