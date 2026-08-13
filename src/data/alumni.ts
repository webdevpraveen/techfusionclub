export type Alumnus = {
  id: string;
  name: string;
  course: string;
  tenure: string;
  post: string;
  photo?: string;
  socials?: {
    linkedin?: string;
    github?: string;
  };
};

export const alumniList: Alumnus[] = [
  // ---------------- Tenure 2021-2025 ----------------
  {
    id: "member-1",
    name: "Member 1",
    course: "B.Tech Computer Science",
    tenure: "2021-2025",
    post: "General Secretary",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=member1&backgroundColor=e2e8f0",
    socials: { linkedin: "#" },
  },
  {
    id: "member-2",
    name: "Member 2",
    course: "B.Tech Information Technology",
    tenure: "2021-2025",
    post: "Technical Head",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=member2&backgroundColor=e2e8f0",
    socials: { linkedin: "#", github: "#" },
  },
  {
    id: "member-3",
    name: "Member 3",
    course: "B.Tech Computer Engineering",
    tenure: "2021-2025",
    post: "Media Head",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=member3&backgroundColor=e2e8f0",
    socials: { linkedin: "#" },
  },
  {
    id: "member-4",
    name: "Member 4",
    course: "B.Tech AI & Data Science",
    tenure: "2021-2025",
    post: "Creative Head",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=member4&backgroundColor=e2e8f0",
    socials: { linkedin: "#" },
  },

  // ---------------- Tenure 2020-2024 ----------------
  {
    id: "member-5",
    name: "Member 5",
    course: "B.Tech Computer Science",
    tenure: "2020-2024",
    post: "Joint Secretary",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=member5&backgroundColor=e2e8f0",
    socials: { linkedin: "#" },
  },
  {
    id: "member-6",
    name: "Member 6",
    course: "B.Tech Information Technology",
    tenure: "2020-2024",
    post: "Management Head",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=member6&backgroundColor=e2e8f0",
    socials: { linkedin: "#" },
  },
  {
    id: "member-7",
    name: "Member 7",
    course: "B.Tech Computer Engineering",
    tenure: "2020-2024",
    post: "Core Member - Technical",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=member7&backgroundColor=e2e8f0",
    socials: { linkedin: "#", github: "#" },
  },
  {
    id: "member-8",
    name: "Member 8",
    course: "B.Tech AI & Data Science",
    tenure: "2020-2024",
    post: "Documentation Head",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=member8&backgroundColor=e2e8f0",
    socials: { linkedin: "#" },
  },

  // ---------------- Tenure 2019-2023 ----------------
  {
    id: "member-9",
    name: "Member 9",
    course: "B.Tech Computer Science",
    tenure: "2019-2023",
    post: "Founder & General Secretary",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=member9&backgroundColor=e2e8f0",
    socials: { linkedin: "#", github: "#" },
  },
  {
    id: "member-10",
    name: "Member 10",
    course: "B.Tech Information Technology",
    tenure: "2019-2023",
    post: "Treasurer",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=member10&backgroundColor=e2e8f0",
    socials: { linkedin: "#" },
  },
];

export function getAlumniByTenure() {
  const grouped: Record<string, Alumnus[]> = {};
  for (const alumnus of alumniList) {
    if (!grouped[alumnus.tenure]) {
      grouped[alumnus.tenure] = [];
    }
    grouped[alumnus.tenure].push(alumnus);
  }
  // Sort tenures in descending order (e.g. 2021-2025 before 2020-2024)
  const sortedTenures = Object.keys(grouped).sort((a, b) => b.localeCompare(a));
  return sortedTenures.map((tenure) => ({
    tenure,
    alumni: grouped[tenure],
  }));
}
