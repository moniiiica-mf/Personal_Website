/**
 * Site-wide content that isn't tied to a specific project.
 * Edit this file to update copy, nav, credits, and links across the site.
 */

export interface NavItem {
  label: string;
  href: string;
}

export const NAV: NavItem[] = [
  { label: "Home", href: "/#top" },
  { label: "Works", href: "/#work" },
  { label: "Info", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const SITE = {
  name: "Monica Fang",
  title: "Interaction Designer",

  intro:
    "I'm Monica, I create thoughtful digital experiences that help people better understand, navigate, and interact with technology through research, interaction design, and visual storytelling.",

  about: {
    label: "(About me)",
    paragraphs: [
      "I'm Monica Fang, an interaction designer based in Los Angeles and originally from Toronto. I'm currently studying Interaction Design at ArtCenter College of Design after previously studying Global Business and Digital Arts at the University of Waterloo.",
      "I'm interested in designing technology that feels natural and approachable. Outside of design, I enjoy photography and occasionally collaborate on production design for film projects.",
    ],
  },

  capabilities: [
    "Interaction Design",
    "UI/UX Design",
    "User Research",
    "Product Design",
    "Production Design",
    "Photography",
  ],

  education: [
    {
      school: "ArtCenter College of Design",
      degree: "B.S.",
      program: "Interaction Design",
      years: "2025–2028",
    },
    {
      school: "University of Waterloo",
      degree: "B.GBDA.",
      program: "Global Business and Digital Arts",
      years: "2023–2025",
    },
  ],

  experience: [
    {
      role: "UX/UI Designer",
      company: "Beijing Zhongke Huiyuan",
      period: "May 2024 – August 2024",
    },
    {
      role: "UX/UI Designer",
      company: "Glou.co",
      period: "May 2022 – July 2022",
    },
  ],

  contact: {
    heading:
      "Ready to work together? Let's talk about freelance projects, collaborations, and full-time roles.",
    email: "monicafang.mmf@gmail.com",
  },

  footer: {
    linkedinUrl: "https://www.linkedin.com/in/monica-meng-fang-640279240/",
    resumeUrl: "/resume.pdf",
  },
};
