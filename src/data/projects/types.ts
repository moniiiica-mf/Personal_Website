/**
 * Project data model.
 *
 * Every case study is described entirely through data — no page-layout code
 * needs to change to add a new project. Add a new file in this folder,
 * register it in `index.ts`, and drop its images into `public/projects/<slug>/`.
 */

export interface ProjectImage {
  src: string;
  alt: string;
  /** intrinsic aspect ratio as width/height, e.g. 16/10. Prevents layout shift. */
  ratio?: number;
}

export type ProjectSection =
  | {
      type: "text";
      label?: string;
      heading?: string;
      body: string;
    }
  | {
      type: "largeText";
      body: string;
    }
  | {
      type: "image";
      image: ProjectImage;
      caption?: string;
    }
  | {
      type: "fullWidthImage";
      image: ProjectImage;
      caption?: string;
    }
  | {
      type: "twoImages";
      images: [ProjectImage, ProjectImage];
      caption?: string;
    }
  | {
      type: "imageText";
      image: ProjectImage;
      label?: string;
      heading?: string;
      body: string;
    }
  | {
      type: "textImage";
      image: ProjectImage;
      label?: string;
      heading?: string;
      body: string;
    }
  | {
      type: "insights";
      label?: string;
      items: {
        title: string;
        body: string;
      }[];
    }
  | {
      type: "quote";
      quote: string;
      attribution?: string;
    }
  | {
      type: "gallery";
      images: ProjectImage[];
    }
  | {
      type: "video";
      src: string;
      poster?: string;
      caption?: string;
    }
  | {
      type: "prototype";
      embedSrc: string;
      label?: string;
      caption?: string;
    }
  | {
      type: "process";
      label?: string;
      steps: {
        title: string;
        body: string;
      }[];
    }
  | {
      type: "reflection";
      body: string;
    };

export interface Project {
  slug: string;
  title: string;
  year: string;
  category: string;
  /** short one/two-line description used on the homepage grid + project header */
  description: string;
  thumbnail: ProjectImage;
  hero: ProjectImage;
  featured: boolean;
  role?: string;
  timeline?: string;
  team?: string;
  tools?: string[];
  sections: ProjectSection[];
}
