import type { Project } from "@/data/projects";
import ImageBlock from "@/components/ImageBlock/ImageBlock";
import styles from "./ProjectHeader.module.css";

export default function ProjectHeader({ project }: { project: Project }) {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.metaRow}>
          <span className="eyebrow">{project.category}</span>
          <span className="eyebrow">{project.year}</span>
        </div>

        <h1 className={styles.title}>{project.title}</h1>

        <p className={styles.description}>{project.description}</p>
      </div>

      <div className={styles.heroWrap}>
        <ImageBlock image={project.hero} priority />
      </div>
    </header>
  );
}
