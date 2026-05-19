export const about: string =
  "Full-stack developer building production web applications and AI-powered SaaS products. I work in React, Next.js and TypeScript, integrate LLM APIs, and like owning a project end to end.";

export const tagline: string = "Building web and AI products from Limassol";

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
    title: "Stormchaser",
    description:
      "Quantitative weather prediction-market trading system for Kalshi. Ensemble forecasting (NWS, GFS, ECMWF) with per-city bias correction, inverse-MAE model weighting, and Student-t probability distributions over temperature brackets. Python data pipelines, PostgreSQL, automated Telegram alerts, deployed on a self-managed Hetzner VPS.",
    category: "Quantitative Trading",
    date: "2025 – present",
    isPrivate: true,
  },
  {
    title: "ProfitScan",
    description:
      "SaaS profitability-analysis tool that ingests financial files, allocates shared expenses across transactions using configurable rules, and reports net profit per product, customer and region. Next.js, FastAPI, PostgreSQL on Neon, Cloudflare R2, Clerk. Live in production and currently being shown to small businesses in Cyprus.",
    link: "https://profitscan.app",
    category: "SaaS",
    date: "2025 – present",
    isPrivate: true,
  },
  {
    title: "Klio",
    description:
      "AI-powered WhatsApp assistant SaaS for Cyprus real estate agents, in active development. Multilingual responses (English, Greek, Russian) backed by a RAG knowledge base of Cyprus property regulations, lead qualification via tool calls, and human handoff. Next.js, Convex, Vercel AI SDK with Claude Sonnet, WhatsApp Business Cloud API.",
    category: "AI / SaaS",
    date: "2025 – present",
    isPrivate: true,
  },
  {
    title: "Seafloor",
    description:
      "Open-source 3D maritime emissions globe visualizing six years of EU THETIS-MRV vessel CO2 data. Built with React Three Fiber, Three.js and WebGL, served from Cloudflare Pages, with a Python pipeline preparing the dataset.",
    link: "https://seafloor.pages.dev",
    github: "https://github.com/marcoshaber99/seafloor",
    category: "Data Visualization",
    date: "2026",
    isPrivate: false,
  },
  {
    title: "CurateWay",
    description:
      "AI-powered travel platform for discovering authentic experiences in Cyprus. Full-stack Next.js, React, TypeScript, Convex, Clerk and Stripe.",
    link: "https://curateway.com",
    category: "Web Application",
    date: "2024 – present",
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
    title: "Independent Web Developer, LimassolWeb",
    company: "Limassol, Cyprus",
    duration: "September 2024 – Present",
    description: [
      "Independent web development work for clients in Limassol on a project basis, alongside personal product work. Sites built with Next.js, Astro, TypeScript, and Tailwind, deployed on Vercel and Cloudflare.",
      "Currently working on a multilingual (English / Greek) restaurant site built on Next.js 15 with next-intl, tailored for the Cyprus market.",
    ],
  },
  {
    title: "Software Developer",
    company: "Panaline",
    duration: "August 2023 – June 2024",
    description: [
      "Built an internal financial analysis tool in Python and Streamlit for expense tracking and allocation, used by the operations team.",
      "Automated data ingestion and expense allocation logic, reducing manual processing time on recurring reports.",
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
  Frontend: [
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind",
    "shadcn/ui",
    "TanStack Query",
    "React Three Fiber",
    "HTML5",
    "CSS3",
    "SCSS",
  ],
  Backend: [
    "Node.js",
    "Python",
    "FastAPI",
    "Convex",
    "PostgreSQL",
    "REST APIs",
    "WebSockets",
  ],
  "AI & Data": [
    "Anthropic API",
    "OpenAI API",
    "Vercel AI SDK",
    "RAG",
    "Vector search",
    "Agentic workflows",
    "pandas",
  ],
  Infrastructure: [
    "Vercel",
    "Cloudflare",
    "Neon",
    "Railway",
    "Hetzner VPS",
    "Docker",
    "systemd",
    "Stripe",
    "Clerk",
  ],
  Tools: ["Git", "Linux", "pnpm", "uv", "Figma"],
};
