import styles from "./RecordList.module.css";

export interface RecordRow {
  primary: string;
  secondary: string;
  period: string;
}

export default function RecordList({
  id,
  label,
  rows,
}: {
  id?: string;
  label: string;
  rows: RecordRow[];
}) {
  return (
    <section id={id} className={styles.section} aria-label={label}>
      <div className="container">
        <div className={styles.grid}>
          <p className={`eyebrow ${styles.label}`}>{label}</p>
          <ul className={styles.list}>
            {rows.map((row) => (
              <li key={`${row.primary}-${row.period}`} className={styles.row}>
                <span className={styles.primary}>{row.primary}</span>
                <span className={styles.secondary}>{row.secondary}</span>
                <span className={`eyebrow ${styles.period}`}>{row.period}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
