import { SITE } from "@/data/site";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className="container">
        <div className={styles.grid}>
          <p className={`eyebrow ${styles.kicker}`}>{SITE.title}</p>
          <p className={styles.intro}>{SITE.intro}</p>
        </div>
      </div>
    </section>
  );
}
