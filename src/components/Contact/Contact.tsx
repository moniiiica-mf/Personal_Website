import { SITE } from "@/data/site";
import CopyEmailButton from "./CopyEmailButton";
import styles from "./Contact.module.css";

export default function Contact() {
  const { email, heading } = SITE.contact;

  return (
    <section id="contact" className={styles.section} aria-label="Contact">
      <div className="container">
        <div className={styles.grid}>
          <p className={`eyebrow ${styles.label}`}>Contact</p>
          <div className={styles.body}>
            <p className={styles.heading}>{heading}</p>
            <div className={styles.actions}>
              <span className={`tag ${styles.emailTag}`}>{email}</span>
              <CopyEmailButton email={email} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
