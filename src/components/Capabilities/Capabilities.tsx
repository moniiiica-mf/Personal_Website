import { SITE } from "@/data/site";
import styles from "./Capabilities.module.css";

export default function Capabilities() {
  return (
    <section className={styles.section} aria-label="What I do">
      <div className="container">
        <div className={styles.grid}>
          <p className={`eyebrow ${styles.label}`}>What I do</p>
          <ul className={styles.list}>
            {SITE.capabilities.map((item) => (
              <li key={item} className={styles.row}>
                <span className={styles.item}>{item}</span>
                <span className={styles.mark} aria-hidden="true">
                  →
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
