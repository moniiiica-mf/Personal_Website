import Link from "next/link";
import type { Project } from "@/data/projects";
import styles from "./ProjectNavigation.module.css";

export default function ProjectNavigation({
  previous,
  next,
}: {
  previous?: Project;
  next?: Project;
}) {
  return (
    <nav className={styles.nav} aria-label="Project navigation">
      <div className="container">
        <div className={styles.allWorks}>
          <Link href="/#work" className="pillButton">
            All works
          </Link>
        </div>

        <div className={styles.row}>
          {previous ? (
            <Link
              href={`/work/${previous.slug}`}
              className={`${styles.link} ${styles.previous}`}
            >
              <span className="eyebrow">← Previous project</span>
              <span className={styles.projectTitle}>{previous.title}</span>
            </Link>
          ) : (
            <span />
          )}

          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className={`${styles.link} ${styles.next}`}
            >
              <span className="eyebrow">Next project →</span>
              <span className={styles.projectTitle}>{next.title}</span>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </nav>
  );
}
