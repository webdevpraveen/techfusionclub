export interface ProjectItem {
  id: string;
  title: string;
  domain: string;
  description: string;
  tags: string[];
  stars: number;
  githubUrl: string;
  demoUrl?: string;
  iconName: "cpu" | "shield" | "smartphone" | "cloud";
}

export const projects: ProjectItem[] = [
  {
    id: "neuro-fusion",
    title: "NeuroFusion AI Assistant",
    domain: "AI / ML Domain",
    description:
      "A privacy-focused local RAG assistant trained on university lecture slides and exam papers to help students revise.",
    tags: ["PyTorch", "LangChain", "FastAPI", "VectorDB"],
    stars: 142,
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    iconName: "cpu",
  },
  {
    id: "cybershield-cli",
    title: "CyberShield CLI Guard",
    domain: "Cybersecurity Domain",
    description:
      "Automated vulnerability scanner and git secret detector built specifically for student development pipelines.",
    tags: ["Rust", "Security", "CLI", "Docker"],
    stars: 98,
    githubUrl: "https://github.com",
    iconName: "shield",
  },
  {
    id: "unicampus-mobile",
    title: "UniCampus Mobile Ecosystem",
    domain: "Mobile Domain",
    description:
      "All-in-one Flutter campus app with real-time class schedule tracking, club events feed, and peer notes sharing.",
    tags: ["Flutter", "Firebase", "Dart", "Tailwind"],
    stars: 215,
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    iconName: "smartphone",
  },
  {
    id: "cloudpulse-infra",
    title: "CloudPulse Infrastructure Matrix",
    domain: "Cloud & DevOps",
    description:
      "Self-hosted Kubernetes deployment matrix used by Tech Fusion Club to host 20+ student apps effortlessly.",
    tags: ["Kubernetes", "Docker", "Terraform", "Go"],
    stars: 84,
    githubUrl: "https://github.com",
    iconName: "cloud",
  },
];
