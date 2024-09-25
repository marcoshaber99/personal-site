export const about: string =
  "Developer passionate about crafting beautiful, functional web apps using React, Next.js, and TypeScript. Quick learner and team player.";

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
    title: "Harmony",
    description:
      "Note Management SaaS built with Next.js and Convex. AI-Assisted, with real-time collaboration.",
    link: "https://harmony-theta.vercel.app/",
    github: "https://github.com/marcoshaber99/thesis-project",
    category: "Web Application",
    date: "2023-06",
    isPrivate: false,
    logo: "/infinity.svg",
    logoDark: "/infinity-dark.svg",
  },
  {
    title: "ProfitScan",
    description: "Financial Analysis Tool built with Python and Streamlit.",
    category: "Web Application",
    date: "2023-09",
    isPrivate: true,
    logo: "/barcode.svg",
    logoDark: "/barcode-dark.svg",
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
    src: "/images/camera-water.JPEG",
    alt: "Camera",
    width: 1600,
    height: 1200,
  },
  {
    id: 2,
    src: "/images/covid.JPEG",
    alt: "Covid",
    width: 1200,
    height: 1600,
  },
  {
    id: 3,
    src: "/images/sparks.JPEG",
    alt: "Sparks",
    width: 1200,
    height: 1600,
  },
  {
    id: 4,
    src: "/images/lens.jpeg",
    alt: "Lens",
    width: 1200,
    height: 1600,
  },
  {
    id: 5,
    src: "/images/human-bird.JPEG",
    alt: "Human-Bird Photoshop Manipulation",
    width: 1200,
    height: 1600,
  },
  {
    id: 6,
    src: "/images/jeeps.JPEG",
    alt: "Jeeps",
    width: 1200,
    height: 1600,
  },
  {
    id: 7,
    src: "/images/road-love.JPEG",
    alt: "Road Love",
    width: 1200,
    height: 1600,
  },
  {
    id: 8,
    src: "/images/fire.JPG",
    alt: "Fire",
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

export const blogPosts: {
  title: string;
  slug: string;
  date: string;
  readTime: number;
  excerpt: string;
}[] = [
  {
    title: "Using Custom Hooks for Better React State Management",
    slug: "custom-hooks",
    date: "2024-10-25",
    readTime: 5,
    excerpt:
      "Learn how to use custom hooks to simplify state management in your React apps and make your code more reusable.",
  },
];
