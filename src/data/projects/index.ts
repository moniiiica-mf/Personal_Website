import type { Project } from "./types";
import { bmw } from "./bmw";
import { cohop } from "./cohop";
import { sort } from "./sort";
import { asl } from "./asl";

export type { Project, ProjectSection, ProjectImage } from "./types";

/**
 * Registered projects, in display order. This order drives:
 *  - the homepage Featured Works grid (filtered to `featured: true`)
 *  - the Previous / Next navigation on each case-study page
 *
 * To add a project: create a new file in this folder (see `_template.ts`),
 * then add it to this array. No component code needs to change.
 */
export const projects: Project[] = [bmw, cohop, sort, asl];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  previous: Project | undefined;
  next: Project | undefined;
} {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) {
    return { previous: undefined, next: undefined };
  }
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { previous, next };
}
