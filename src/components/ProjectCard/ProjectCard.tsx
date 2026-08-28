import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <Link
        href={`/work/${project.slug}`}
        className={styles.link}
        aria-label={`View ${project.title} case study`}
      >
        <header className={styles.meta}>
          <h3 className={styles.title}>{project.title}</h3>
          <div className={styles.tags}>
            <span className="tag">{project.category}</span>
            <span className="tag">{project.year}</span>
          </div>
        </header>
        <div
          className={styles.imageWrap}
          style={{ aspectRatio: project.thumbnail.ratio ?? 4 / 5 }}
        >
          <Image
            src={project.thumbnail.src}
            alt={project.thumbnail.alt}
            fill
            sizes="(max-width: 720px) 100vw, 50vw"
            className={styles.image}
          />
        </div>
      </Link>
    </article>
  );
}
