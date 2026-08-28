import type { Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import styles from "./ProjectGrid.module.css";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
