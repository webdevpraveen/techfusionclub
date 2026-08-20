import { GlowCard } from "@/components/site/GlowCard";

interface Partner {
  name: string;
  category: string;
  badge: string;
}

const partners: Partner[] = [
  { name: "GitHub Education", category: "Open Source Partner", badge: "Global Partner" },
  { name: "AWS Community", category: "Cloud & Credits", badge: "Infrastructure" },
  { name: "Postman API Network", category: "API Workspace", badge: "Dev Partner" },
  { name: "Vercel", category: "Frontend & Hosting", badge: "Deployment" },
  { name: "JetBrains", category: "Developer Tools", badge: "IDE Sponsor" },
  { name: "MongoDB Campus", category: "Database Ecosystem", badge: "Data Partner" },
];

export function PartnersSection() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {partners.map((p) => (
        <GlowCard
          key={p.name}
          className="glass lift flex flex-col items-center justify-center rounded-2xl p-5 text-center border border-border hover:border-primary-glow/60 transition-all"
        >
          <span className="font-display text-sm font-bold text-foreground">{p.name}</span>
          <span className="mt-1 font-mono text-[9px] uppercase tracking-wider text-primary-glow font-semibold">
            {p.category}
          </span>
          <span className="mt-2 rounded-full border border-border/80 bg-surface px-2 py-0.5 font-mono text-[8px] uppercase tracking-widest text-muted-foreground">
            {p.badge}
          </span>
        </GlowCard>
      ))}
    </div>
  );
}
