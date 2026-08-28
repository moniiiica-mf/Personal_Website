import { SITE } from "@/data/site";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.links}>
          <a
            href={SITE.footer.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className={`eyebrow ${styles.link}`}
          >
            LinkedIn ↗
          </a>
          <a
            href={SITE.footer.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className={`eyebrow ${styles.link}`}
          >
            Resume ↗
          </a>
        </div>

        <h2 className={styles.name} aria-label={SITE.name}>
          {SITE.name}
        </h2>

        <div className={styles.bottomRow}>
          <span className={styles.copy}>
            © {year} {SITE.name}
          </span>
          <span className={styles.copy}>{SITE.title}</span>
        </div>
      </div>
    </footer>
  );
}
