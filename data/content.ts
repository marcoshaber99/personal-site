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
    title: "Klio",
    description:
      "WhatsApp assistant for estate agents in Cyprus, live at kliohq.com and onboarding its first agents. Answers buyers in their own language (Greek, English, Russian, Hebrew) strictly from the agent's listings, qualifies budget, area and timeline as the conversation flows, hands price talk to a human, and books viewings the agent approves with one tap from their dashboard. Next.js, Convex, Vercel AI SDK with Claude, WhatsApp Business Cloud API.",
    link: "https://kliohq.com",
    category: "AI / SaaS",
    date: "2025 – present",
    isPrivate: true,
  },
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
    title: "Seafloor",
    description:
      "Open-source 3D maritime emissions globe visualizing six years of EU THETIS-MRV vessel CO2 data. Built with React Three Fiber, Three.js and WebGL, served from Cloudflare Pages, with a Python pipeline preparing the dataset.",
    link: "https://seafloor.pages.dev",
    github: "https://github.com/marcoshaber99/seafloor",
    category: "Data Visualization",
    date: "2026",
    isPrivate: false,
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
    duration: "2024 – present",
    description: [
      "Independent web development work for clients in Limassol on a project basis, alongside personal product work. Sites built with Next.js, Astro, TypeScript, and Tailwind, deployed on Vercel and Cloudflare.",
      "Currently working on a multilingual (English / Greek) restaurant site built on Next.js 15 with next-intl, tailored for the Cyprus market.",
    ],
  },
  {
    title: "Software Developer",
    company: "Panaline",
    duration: "2023 – 2024",
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
    width: 4096,
    height: 2893,
  },
  {
    id: 2,
    src: "https://utfs.io/a/lllwu0d4dv/BT3tktP4ELr6JslxH1Fwbnr3E04UvoSBi8mAIZlYjXgqJuOC",
    alt: "Last Swim",
    width: 1700,
    height: 2100,
  },
  {
    id: 3,
    src: "https://utfs.io/a/lllwu0d4dv/BT3tktP4ELr6WyChxYjIdEYqQgn7uOiWbsfj05vKH9oz8T3Z",
    alt: "Constellations",
    width: 4096,
    height: 3140,
  },
  {
    id: 4,
    src: "https://utfs.io/a/lllwu0d4dv/BT3tktP4ELr6BW7IcS4ELr61CagSVyDQF2O0tzbWPveXkc4B",
    alt: "Frame Work",
    width: 6000,
    height: 4000,
  },
  {
    id: 5,
    src: "https://utfs.io/a/lllwu0d4dv/BT3tktP4ELr6YrOcoeh9XCbxlSzwuMkPR75TrZtq6QEG4pIv",
    alt: "Fragments",
    width: 1080,
    height: 738,
  },
  {
    id: 6,
    src: "https://utfs.io/a/lllwu0d4dv/BT3tktP4ELr6PW6p84DQgr1Uu62LfeS0IYWAX9BkOCzyGEnv",
    alt: "Route Handler",
    width: 4096,
    height: 2729,
  },
  {
    id: 7,
    src: "https://utfs.io/a/lllwu0d4dv/BT3tktP4ELr69hmI9gcvOoWstRPKm0fSEFk42d86iNCeTVcI",
    alt: "Protected Route",
    width: 4096,
    height: 2994,
  },
  {
    id: 8,
    src: "https://utfs.io/a/lllwu0d4dv/BT3tktP4ELr6TZ33pEZuslCnHKm8WQjEM5S6IYqoV9z0e3fO",
    alt: "Hot Reload",
    width: 900,
    height: 1600,
  },
];

export const skills: Record<string, string[]> = {
  Frontend: [
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind",
    "shadcn/ui",
    "TanStack Query",
    "React Three Fiber",
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
