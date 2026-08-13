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

export const alumniList: Alumnus[] = Array.from({ length: 50 }).map((_, i) => ({
  id: `member-${i + 1}`,
  name: `Member ${i + 1}`,
  course: [
    "B.Tech Computer Science",
    "B.Tech Information Technology",
    "B.Tech AI & Data Science",
    "B.Tech Computer Engineering",
  ][i % 4],
  tenure: ["2021-2025", "2020-2024", "2019-2023"][i % 3],
  post: [
    "General Secretary",
    "Technical Head",
    "Core Member",
    "Joint Secretary",
    "Media Head",
  ][i % 5],
  photo: `https://api.dicebear.com/9.x/notionists/svg?seed=member${i + 1}&backgroundColor=e2e8f0`,
  socials: { linkedin: "#", github: i % 2 === 0 ? "#" : undefined },
}));
