export const about: string =
  "Full-stack developer with hands-on experience building and shipping production web applications. Strong foundations in HTML, CSS, and JavaScript.";

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
    title: "Seafloor",
    description:
      "3D maritime emissions data visualization built with React Three Fiber, Three.js, and WebGL. Python data pipeline processing real vessel data.",
    link: "https://seafloor.pages.dev",
    github: "https://github.com/marcoshaber99/seafloor",
    category: "Data Visualization",
    date: "2025",
    isPrivate: false,
    logo: "/seafloor.svg",
    logoDark: "/seafloor-logo-dark.svg",
  },
  {
    title: "Klio",
    description:
      "Building an AI-powered WhatsApp assistant for Cyprus real estate agents. Full-stack Next.js app with Convex, Clerk, Stripe, and Vercel AI SDK. (in development)",
    category: "SaaS",
    date: "2025",
    isPrivate: true,
    logo: "/klio.svg",
    logoDark: "/klio-logo-dark.svg",
  },
  {
    title: "CurateWay",
    description:
      "AI-powered travel platform for discovering authentic experiences in Cyprus. Full-stack Next.js 15 app with React 19, TypeScript, Convex, and Stripe payments. (in development)",
    link: "https://curateway.com",
    category: "Web Application",
    date: "2025",
    isPrivate: true,
    logo: "/curateway-logo-dark.svg",
    logoDark: "/curateway-logo-white.svg",
  },
];

export const workExperience: {
  title: string;
  company: string;
  duration: string;
  description: string[];
}[] = [
  {
    title: "Founder & Web Developer",
    company: "LimassolWeb",
    duration: "September 2024 - Present",
    description: [
      "Run a web development agency building production websites for local businesses in Limassol",
      "Translate client designs and requirements into responsive, cross-browser web interfaces",
      "Built an e-commerce-ready site for a local candle business with product pages, testimonials, and newsletter integration",
    ],
  },
  {
    title: "Software Developer",
    company: "Panaline",
    duration: "August 2023 - June 2024",
    description: [
      "Built a financial analysis tool in Python and Streamlit for internal expense tracking",
      "Automated data upload and expense allocation, reducing manual processing time",
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
    src: "https://utfs.io/a/lllwu0d4dv/BT3tktP4ELr6WyChxYjIdEYqQgn7uOiWbsfj05vKH9oz8T3Z",
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
    src: "https://utfs.io/a/lllwu0d4dv/BT3tktP4ELr6PW6p84DQgr1Uu62LfeS0IYWAX9BkOCzyGEnv",
    alt: "Route Handler",
    width: 1200,
    height: 1600,
  },
  {
    id: 7,
    src: "https://utfs.io/a/lllwu0d4dv/BT3tktP4ELr69hmI9gcvOoWstRPKm0fSEFk42d86iNCeTVcI",
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
  Frontend: ["HTML5", "CSS3", "SCSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind"],
  Backend: ["Node.js", "Python", "Convex", "PostgreSQL", "Supabase"],
  Tools: ["Git", "Vercel", "Cloudflare", "Stripe", "Clerk", "Figma"],
};