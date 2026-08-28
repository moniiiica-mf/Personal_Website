import type { Project } from "./types";

export const sort: Project = {
  slug: "sort",
  title: "Sort!",
  year: "2025",
  category: "Interaction Design",
  description: "[Content coming soon]",
  featured: true,
  thumbnail: {
    src: "/projects/sort/thumbnail.svg",
    alt: "Sort! project thumbnail",
    ratio: 4 / 5,
  },
  hero: {
    src: "/projects/sort/hero.svg",
    alt: "Sort! hero image",
    ratio: 16 / 10,
  },
  sections: [
    {
      type: "text",
      body: "[Content coming soon]",
    },
  ],
};
