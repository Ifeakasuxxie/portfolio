export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  stack: string[];
  statusLine: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "aurelius",
    name: "Aurelius",
    tagline:
      "Took a broken Replit export — dead config, missing env vars, runtime-locked dependencies — and shipped it to production on Vercel. Five blockers, zero shortcuts.",
    category: "Fine dining restaurant",
    description:
      "A restaurant client needed a live website but had no developer to maintain it long-term. The project was exported from Replit as a React/Vite/TypeScript app using shadcn/ui, but the export wasn't deployment-ready — it depended on Replit-only tooling and broke immediately outside that environment. I diagnosed and fixed five separate production blockers: pnpm catalog-only package specifiers, Vite plugins tied to the Replit runtime, a broken tsconfig, a dead internal workspace reference, and missing environment variables the build silently needed.",
    stack: ["React", "Vite", "TypeScript", "shadcn/ui", "Vercel"],
    statusLine: "status: deployed · vercel",
    image: "/work/aurelius.jpg",
    liveUrl: "https://aurelius-website-ten.vercel.app/",
    githubUrl: "https://github.com/Ifeakasuxxie/aurelius-website",
  },
  {
    slug: "cloud-9",
    name: "Cloud-9",
    tagline:
      "Fine dining restaurant site with a cinematic loading sequence and scroll-animated menu reveal — built to feel like a hospitality brand, not a template.",
    category: "Fine dining restaurant",
    description:
      "Built a full restaurant website for Cloud-9, a fine dining establishment in Abraka, Delta State — signature dishes, full menu, gallery, and a reservations system, with a custom loading sequence and scroll-triggered animations using Framer Motion for a premium editorial feel.",
    stack: ["React", "Vite", "TypeScript", "Framer Motion", "shadcn/ui"],
    statusLine: "status: deployed · vercel",
    image: "/work/cloud-9.jpg",
    liveUrl: "https://cloud-9-website-murex.vercel.app/",
    githubUrl: "https://github.com/Ifeakasuxxie/cloud-9-website",
  },
  {
    slug: "adire-couture",
    name: "Adire Couture",
    tagline:
      "Fashion brand site with a working custom-order form — customers submit a design request directly from the gallery, no back-and-forth before the first message.",
    category: "Fashion designer",
    description:
      "Built a fashion brand site for a Lagos-based designer — full collection gallery, custom order request form wired to Formspree, pricing section, and a brand collaboration page, with editorial-style hero animation and Nigerian fashion photography front and center.",
    stack: ["React", "TypeScript", "Framer Motion", "shadcn/ui", "Formspree"],
    statusLine: "status: built · formspree",
    image: "/work/adire-couture.jpg",
    githubUrl: "https://github.com/Ifeakasuxxie/adire-couture-website",
  },
  {
    slug: "sparkleneat",
    name: "SparkleNeat",
    tagline:
      "Cleaning service site built WhatsApp-first — every button routes straight to a chat, no form to fill before a customer can reach a real person.",
    category: "Cleaning services",
    description:
      "Built the website for a cleaning company serving Lagos — real-estate, commercial, post-construction, and carpet/upholstery cleaning — with a WhatsApp-first conversion flow and trust signals placed directly in the hero. Single HTML file, zero external dependencies, built to load fast on low-bandwidth mobile connections.",
    stack: ["HTML", "CSS", "JavaScript", "Formspree"],
    statusLine: "status: deployed · single-file",
    image: "/work/sparkleneat.jpg",
    liveUrl: "https://sparkle-neat.vercel.app/",
    githubUrl: "https://github.com/Ifeakasuxxie/Sparkle-Neat-",
  },
];
