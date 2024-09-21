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
  },
  {
    title: "ProfitScan",
    description: "Financial Analysis Tool built with Python and Streamlit.",
    category: "Web Application",
    date: "2023-09",
    isPrivate: true,
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
];

export const footerLinks = [
  {
    icon: "github",
    url: "https://github.com/marcohaber99",
    label: "GitHub",
  },
  {
    icon: "linkedin",
    url: "https://linkedin.com/in/marco-haber",
    label: "LinkedIn",
  },
  {
    icon: "email",
    url: "mailto:marco.haber99@gmail.com",
    label: "Email",
  },
];

export const footerText = "Marco Haber. All rights reserved.";