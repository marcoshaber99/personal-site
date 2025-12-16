export const about: string =
  "Developer passionate about crafting modern, functional web apps using React, Next.js, and TypeScript. Quick learner, listener, and team player.";

export const projects: {
  title: string;
  description: string;
  link?: string;
  github?: string;
  category: string;
  date: string;
  isPrivate: boolean;
  logo: string;
  logoDark?: string;
}[] = [
  {
    title: "haber-ui",
    description:
      "A collection of React + Tailwind v4 components specifically designed for AI applications, following the shadcn/ui installable component approach.",
    link: "https://haberui.com",
    github: "https://github.com/marcoshaber99/haberui",
    category: "UI Components",
    date: "2025",
    isPrivate: false,
    logo: "/haberui-logo.svg",
    logoDark: "/haberui-logo-dark.svg",
  },
  {
    title: "Vivlio",
    description:
      "An open-source, developer-focused educational blog platform (in early development). ",
    link: "https://vivlio.dev",
    github: "https://github.com/marcoshaber99/minimal-ai-blog",
    category: "Web Application",
    date: "2025",
    isPrivate: false,
    logo: "/vivlio-logo-dark.svg",
    logoDark: "/vivlio-logo.svg",
  },
];

export const workExperience: {
  title: string;
  company: string;
  duration: string;
  description: string[];
}[] = [
  {
    title: "Full Stack Developer",
    company: "Panaline",
    duration: "June 2023 - August 2024",
    description: [
      "Developed a financial analysis tool using Python and Streamlit",
      "Implemented data upload and expense allocation features",
      "Designed customizable reporting for business insights",
    ],
  },
];

export const photographs: {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}[] = [
  {
    id: 1,
    src: "https://utfs.io/a/lllwu0d4dv/BT3tktP4ELr6y2IjIoRRaF3HgAWc2fXiTpxs4DI0qSkmbyCd",
    alt: "Salted Sensor",
    width: 1600,
    height: 1200,
  },
  {
    id: 2,
    src: "https://utfs.io/a/lllwu0d4dv/BT3tktP4ELr6JslxH1Fwbnr3E04UvoSBi8mAIZlYjXgqJuOC",
    alt: "Last Swim",
    width: 1200,
    height: 1600,
  },
  {
    id: 3,
    src: "https://utfs.io/a/lllwu0d4dv/BT3tktP4ELr611DIFS0thQgU3HEwbi9kWKOZy4VpGPvXlAuB",
    alt: "Constellations",
    width: 1200,
    height: 1600,
  },
  {
    id: 4,
    src: "https://utfs.io/a/lllwu0d4dv/BT3tktP4ELr6BW7IcS4ELr61CagSVyDQF2O0tzbWPveXkc4B",
    alt: "Frame Work",
    width: 1200,
    height: 1600,
  },
  {
    id: 5,
    src: "https://utfs.io/a/lllwu0d4dv/BT3tktP4ELr6YrOcoeh9XCbxlSzwuMkPR75TrZtq6QEG4pIv",
    alt: "Fragments",
    width: 1200,
    height: 1600,
  },
  {
    id: 6,
    src: "https://utfs.io/a/lllwu0d4dv/BT3tktP4ELr6ENiy1YyKch0W5iv7yxAH8w2PrlN3jsbuf1YU",
    alt: "Route Handler",
    width: 1200,
    height: 1600,
  },
  {
    id: 7,
    src: "https://utfs.io/a/lllwu0d4dv/BT3tktP4ELr6LQ4PRZXsgtVR0MrHZ2w8uGNkBcS5ayPqeI7D",
    alt: "Protected Route",
    width: 1200,
    height: 1600,
  },
  {
    id: 8,
    src: "https://utfs.io/a/lllwu0d4dv/BT3tktP4ELr6TZ33pEZuslCnHKm8WQjEM5S6IYqoV9z0e3fO",
    alt: "Hot Reload",
    width: 1200,
    height: 1600,
  },
];

export const footerText = "Marco Haber. All rights reserved.";

export const skills: Record<string, string[]> = {
  Languages: ["JavaScript", "TypeScript", "Python", "HTML", "CSS", "SQL"],
  Frameworks: ["React JS", "Next JS", "Node JS", "Express JS", "TailwindCSS"],
  "Software Skills": ["Git", "GitHub", "Figma", "AWS (S3)"],
};
