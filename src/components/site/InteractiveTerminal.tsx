import { useState, useRef, useEffect } from "react";
import { Terminal, CornerDownLeft, Sparkles, Copy, Check } from "lucide-react";
import { GlowCard } from "@/components/site/GlowCard";

interface CommandOutput {
  id: string;
  cmd: string;
  output: React.ReactNode;
}

export function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      id: "init-1",
      cmd: "system --status",
      output: (
        <div className="space-y-1 text-emerald-400">
          <p>[SYS_OK] Tech Fusion Core v4.2.0 initialized.</p>
          <p>[NET_STATUS] 6 Domains operational | 320 Active Nodes | University Node: Online</p>
          <p className="text-muted-foreground text-xs mt-1">
            Type <span className="text-primary-glow font-bold">'help'</span> or click quick commands
            below to explore.
          </p>
        </div>
      ),
    },
  ]);
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    let outputContent: React.ReactNode;

    switch (cleanCmd) {
      case "help":
        outputContent = (
          <div className="space-y-1.5 text-xs sm:text-sm">
            <p className="text-primary-glow font-semibold">Available Fusion Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pl-2 font-mono text-muted-foreground">
              <div>
                <span className="text-accent font-bold">domains</span> - View 6 tech domains
              </div>
              <div>
                <span className="text-accent font-bold">events</span> - Upcoming workshops & fest
              </div>
              <div>
                <span className="text-accent font-bold">stats</span> - Live club metrics
              </div>
              <div>
                <span className="text-accent font-bold">projects</span> - Shipped student builds
              </div>
              <div>
                <span className="text-accent font-bold">join</span> - How to apply for 2026
              </div>
              <div>
                <span className="text-accent font-bold">clear</span> - Clear terminal terminal
                screen
              </div>
            </div>
          </div>
        );
        break;

      case "domains":
        outputContent = (
          <div className="space-y-1 text-xs sm:text-sm">
            <p className="text-primary-glow font-bold">Active Fusion Domains:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground font-mono">
              <li>
                <strong className="text-foreground">01. Web Development:</strong> React, Next.js,
                TypeScript, Tailwind
              </li>
              <li>
                <strong className="text-foreground">02. AI / Machine Learning:</strong> PyTorch,
                LLMs, Computer Vision
              </li>
              <li>
                <strong className="text-foreground">03. Cybersecurity:</strong> CTFs, Pentesting,
                Reverse Engineering
              </li>
              <li>
                <strong className="text-foreground">04. Mobile App Dev:</strong> Flutter, React
                Native, Swift
              </li>
              <li>
                <strong className="text-foreground">05. Cloud & DevOps:</strong> Docker, K8s, AWS,
                CI/CD
              </li>
              <li>
                <strong className="text-foreground">06. UI/UX Design:</strong> Figma, Design
                Systems, Motion Design
              </li>
            </ul>
          </div>
        );
        break;

      case "events":
        outputContent = (
          <div className="space-y-2 text-xs sm:text-sm font-mono">
            <div>
              <p className="text-accent font-bold">🚀 Annual Flagship Tech Fest:</p>
              <p className="text-foreground font-semibold">Viveka 6.0 (2027) [Past: Viveka 5.0]</p>
              <p className="text-muted-foreground">
                📍 Central Auditorium · 36-Hour Hackathon + Expo
              </p>
            </div>
            <div>
              <p className="text-emerald-400 font-bold">🇮🇳 National Competitions:</p>
              <p className="text-foreground font-semibold">
                Smart India Hackathon (SIH) Internal Prep
              </p>
            </div>
            <div>
              <p className="text-cyan-400 font-bold">🎭 University Tech-Culture Fest:</p>
              <p className="text-foreground font-semibold">Harmony 2026 — Tech Track</p>
            </div>
          </div>
        );
        break;

      case "stats":
        outputContent = (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs text-center py-1">
            <div className="glass p-2 rounded-lg">
              <span className="block text-primary-glow text-lg font-bold">320+</span>Active Members
            </div>
            <div className="glass p-2 rounded-lg">
              <span className="block text-accent text-lg font-bold">41</span>Workshops Done
            </div>
            <div className="glass p-2 rounded-lg">
              <span className="block text-emerald-400 text-lg font-bold">14+</span>Shipped Apps
            </div>
            <div className="glass p-2 rounded-lg">
              <span className="block text-cyan-400 text-lg font-bold">6</span>Tech Domains
            </div>
          </div>
        );
        break;

      case "projects":
        outputContent = (
          <div className="space-y-1.5 text-xs font-mono">
            <p className="text-primary-glow font-bold">🔥 Featured Member Builds:</p>
            <p>
              <span className="text-foreground font-semibold">1. NeuroFusion AI</span> - Open-source
              RAG chatbot for campus notes
            </p>
            <p>
              <span className="text-foreground font-semibold">2. CyberShield CLI</span> - Automated
              vulnerability scanner tool
            </p>
            <p>
              <span className="text-foreground font-semibold">3. UniCampus App</span> - Flutter
              navigation app used by 2,000+ students
            </p>
          </div>
        );
        break;

      case "join":
        outputContent = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-emerald-400 font-bold">✨ Recruitment Status: OPEN</p>
            <p className="text-muted-foreground">
              Requirements: Curiosity + Commitment to building.
            </p>
            <p className="text-primary-glow font-semibold mt-1">
              Visit /join or click "Join the club" to submit your application!
            </p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        outputContent = (
          <p className="text-destructive text-xs font-mono">
            Command not recognized: '{cleanCmd}'. Type{" "}
            <span className="text-primary-glow font-bold">'help'</span> for available commands.
          </p>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        cmd: cmdStr,
        output: outputContent,
      },
    ]);
    setInput("");
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText("npx tech-fusion-club@latest");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <GlowCard className="glass-strong border-animated overflow-hidden rounded-2xl shadow-2xl">
      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-border/80 bg-surface-strong px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="size-3 rounded-full bg-red-500/80" />
          <div className="size-3 rounded-full bg-yellow-500/80" />
          <div className="size-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-xs text-muted-foreground flex items-center gap-1.5">
            <Terminal className="size-3.5 text-primary-glow" /> fusion-shell@techfusion: ~
          </span>
        </div>

        <button
          onClick={handleCopyCode}
          className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground hover:text-foreground transition-colors glass px-2.5 py-1 rounded-md"
          title="Copy CLI command"
        >
          {copied ? (
            <Check className="size-3 text-emerald-400" />
          ) : (
            <Copy className="size-3 text-primary-glow" />
          )}
          <span>{copied ? "Copied!" : "npx tech-fusion-club"}</span>
        </button>
      </div>

      {/* Terminal Content Body */}
      <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm min-h-[220px] max-h-[360px] overflow-y-auto space-y-4">
        {history.map((item) => (
          <div key={item.id} className="space-y-1.5 animate-rise">
            <div className="flex items-center gap-2 text-primary-glow">
              <span className="text-accent">$</span>
              <span className="font-semibold text-foreground">{item.cmd}</span>
            </div>
            <div className="pl-4 text-muted-foreground">{item.output}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Quick Command Chips */}
      <div className="px-4 py-2 border-t border-border/40 bg-surface/30 flex flex-wrap items-center gap-1.5">
        <span className="font-mono text-[10px] text-muted-foreground mr-1 uppercase tracking-wider flex items-center gap-1">
          <Sparkles className="size-3 text-primary-glow" /> Quick:
        </span>
        {["help", "domains", "events", "stats", "projects", "join"].map((c) => (
          <button
            key={c}
            onClick={() => handleCommand(c)}
            className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-surface border border-border/80 text-muted-foreground hover:text-primary-glow hover:border-primary-glow/50 transition-all hover:scale-105"
          >
            ${c}
          </button>
        ))}
      </div>

      {/* Terminal Input Line */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCommand(input);
        }}
        className="flex items-center border-t border-border/80 bg-background/50 px-4 py-2.5"
      >
        <span className="font-mono text-accent font-bold mr-2 text-sm">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type command ('help', 'domains', 'projects'...)..."
          className="flex-1 bg-transparent font-mono text-xs sm:text-sm text-foreground focus:outline-none placeholder:text-muted-foreground/60"
        />
        <button
          type="submit"
          className="p-1 rounded text-muted-foreground hover:text-primary-glow transition-colors"
        >
          <CornerDownLeft className="size-4" />
        </button>
      </form>
    </GlowCard>
  );
}
