import { SITE } from "@/data/site";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section} aria-label="About">
      <div className="container">
        <div className={styles.grid}>
          <p className={`eyebrow ${styles.label}`}>{SITE.about.label}</p>
          <div className={styles.body}>
            {SITE.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
