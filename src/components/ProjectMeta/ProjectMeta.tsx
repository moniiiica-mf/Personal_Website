import type { Project } from "@/data/projects";
import styles from "./ProjectMeta.module.css";

export default function ProjectMeta({ project }: { project: Project }) {
  const entries: { label: string; value: string }[] = [];

  if (project.role) entries.push({ label: "Role", value: project.role });
  if (project.timeline)
    entries.push({ label: "Timeline", value: project.timeline });
  if (project.team) entries.push({ label: "Team", value: project.team });
  if (project.tools?.length)
    entries.push({ label: "Tools", value: project.tools.join(", ") });

  if (entries.length === 0) return null;

  return (
    <section className={styles.section} aria-label="Project overview">
      <div className="container">
        <dl className={styles.grid}>
          {entries.map((entry) => (
            <div key={entry.label} className={styles.entry}>
              <dt className="eyebrow">{entry.label}</dt>
              <dd className={styles.value}>{entry.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
