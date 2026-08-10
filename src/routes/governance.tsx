import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTABanner";
import { Award, ShieldCheck, Users, FileCheck, CheckCircle2, Landmark, GraduationCap, Building2 } from "lucide-react";

export const Route = createFileRoute("/governance")({
  head: () => ({
    meta: [
      { title: "Leadership & Governance — Tech Fusion Club" },
      {
        name: "description",
        content:
          "Official leadership and governance structure of Tech Fusion Club at Shri Ramswaroop Memorial University (SRMU), featuring University Patronage, Faculty Mentors, and Student Executive Council.",
      },
      { property: "og:title", content: "Leadership & Governance — Tech Fusion Club" },
      {
        property: "og:description",
        content: "Institutional patronage, faculty coordinators, and student executive leadership hierarchy.",
      },
      { property: "og:url", content: "/governance" },
    ],
    links: [{ rel: "canonical", href: "/governance" }],
  }),
  component: Governance,
});

const universityPatrons = [
  {
    name: "Er. Pankaj Agarwal",
    role: "Chancellor, SRMU",
    title: "Chief Institutional Patron",
    bio: "IIT Kanpur alumnus providing visionary leadership, strategic direction, and institutional patronage to student technical initiatives.",
    badge: "Patron",
  },
  {
    name: "Er. Pooja Agarwal",
    role: "Pro-Chancellor, SRMU",
    title: "Executive Director",
    bio: "Champion of student innovation, skill development frameworks, and interdisciplinary technical research across campus.",
    badge: "Patron",
  },
  {
    name: "Prof. (Dr.) Devendra Kumar Sharma",
    role: "Vice-Chancellor, SRMU",
    title: "Academic & Research Head",
    bio: "Guiding academic excellence, industry alignment, and university-wide technological advancements.",
    badge: "Leadership",
  },
];

const facultyAdvisors = [
  {
    name: "Dr. R. K. Singh",
    department: "Dean & Head of Student Affairs",
    role: "Chief Faculty Advisor",
    email: "dean.sa@srmu.ac.in",
  },
  {
    name: "Prof. Ananya Sharma",
    department: "Computer Science & Engineering",
    role: "Faculty Coordinator (Technical)",
    email: "ananya.sharma@srmu.ac.in",
  },
  {
    name: "Dr. Alok Kumar",
    department: "Information Technology",
    role: "Faculty Coordinator (Projects & Labs)",
    email: "alok.kumar@srmu.ac.in",
  },
  {
    name: "Dr. Meenakshi Tripathi",
    department: "Electronics & Communication",
    role: "Faculty Coordinator (Outreach & Hackathons)",
    email: "meenakshi.t@srmu.ac.in",
  },
];

const governancePillars = [
  {
    icon: <ShieldCheck className="size-6 text-primary-glow" />,
    title: "Financial & Treasury Integrity",
    description: "100% transparent audit trails for event budgets, corporate sponsorships, and university grants managed under faculty supervision.",
  },
  {
    icon: <Users className="size-6 text-primary-glow" />,
    title: "Merit-Based Student Hierarchy",
    description: "Structured leadership selection based on technical contributions, workshop execution quality, and peer mentorship records.",
  },
  {
    icon: <FileCheck className="size-6 text-primary-glow" />,
    title: "Ethics & Compliance Charter",
    description: "Strict enforcement of academic integrity, inclusive open-source practices, anti-harassment policies, and equal opportunity intake.",
  },
  {
    icon: <CheckCircle2 className="size-6 text-primary-glow" />,
    title: "Annual Performance Review",
    description: "Every academic year, the Executive Council submits a comprehensive report to the Dean of Student Affairs for formal accreditation.",
  },
];

function Governance() {
  return (
    <>
      {/* ---------------- Hero Section ---------------- */}
      <Section className="pb-8">
        <Reveal>
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-primary-glow">
            <Landmark className="size-3.5" />
            <span>Institutional Governance & Supervision</span>
          </div>
          <h1 className="mt-4 max-w-4xl text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Leadership & Governance Framework.
          </h1>
          <p className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Tech Fusion Club operates under the patronage of Shri Ramswaroop Memorial University (SRMU) leadership, guided by dedicated faculty coordinators, and executed by an elected student council.
          </p>
        </Reveal>
      </Section>

      {/* ---------------- University Patronage ---------------- */}
      <Section className="pt-4">
        <SectionHeading
          eyebrow="University Leadership"
          title="Patronage & Executive Direction"
          body="Guiding the club's alignment with national technical standards and university excellence."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {universityPatrons.map((patron, index) => (
            <Reveal key={patron.name} delay={index * 80}>
              <div className="glass lift h-full flex flex-col justify-between rounded-2xl p-7 border border-border/80">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-primary/10 border border-primary/30 px-3 py-0.5 font-mono text-[11px] font-bold text-primary-glow">
                      {patron.badge}
                    </span>
                    <Building2 className="size-5 text-muted-foreground/60" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-foreground">{patron.name}</h3>
                  <p className="font-mono text-xs text-primary-glow font-semibold mt-1">{patron.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{patron.bio}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/60 font-mono text-xs text-muted-foreground">
                  SRMU Executive Board
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------- Faculty Advisory Council ---------------- */}
      <Section>
        <SectionHeading
          eyebrow="Faculty Mentorship"
          title="Faculty Advisory Board"
          body="Providing continuous departmental oversight, academic integration, and lab infrastructure."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {facultyAdvisors.map((advisor, index) => (
            <Reveal key={advisor.name} delay={index * 70}>
              <div className="glass lift flex flex-col justify-between rounded-2xl p-7">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary-glow">
                      <GraduationCap className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">{advisor.name}</h3>
                      <p className="text-xs text-muted-foreground font-medium">{advisor.department}</p>
                    </div>
                  </div>
                  <p className="mt-4 font-mono text-xs text-primary-glow font-semibold bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/15 inline-block">
                    {advisor.role}
                  </p>
                </div>
                <a
                  href={`mailto:${advisor.email}`}
                  className="mt-6 inline-flex font-mono text-xs text-muted-foreground hover:text-primary-glow transition-colors"
                >
                  ✉ {advisor.email}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------- Governance Principles ---------------- */}
      <Section>
        <SectionHeading
          eyebrow="Operating Charter"
          title="Governance Principles & Accountability"
          body="Core rules ensuring fair opportunity, fiscal responsibility, and student empowerment."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {governancePillars.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <div className="glass lift h-full rounded-2xl p-8 border border-border/70">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/30">
                  {item.icon}
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
