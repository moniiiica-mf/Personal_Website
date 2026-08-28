import type { Project } from "./types";

export const bmw: Project = {
  slug: "bmw-ai-companion",
  title: "BMW AI Companion",
  year: "2026",
  category: "Interaction Design",
  description: "[Content coming soon]",
  featured: true,
  thumbnail: {
    src: "/projects/bmw/thumbnail.svg",
    alt: "BMW AI Companion project thumbnail",
    ratio: 4 / 5,
  },
  hero: {
    src: "/projects/bmw/hero.svg",
    alt: "BMW AI Companion hero image",
    ratio: 16 / 10,
  },
  sections: [
    {
      type: "text",
      body: "[Content coming soon]",
    },
  ],
};
