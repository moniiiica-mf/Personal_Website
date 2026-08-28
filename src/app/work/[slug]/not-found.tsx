import Link from "next/link";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import styles from "./not-found.module.css";

export default function ProjectNotFound() {
  return (
    <>
      <div id="top" />
      <Navigation />
      <main>
        <section className={styles.section}>
          <div className="container">
            <p className="eyebrow">404</p>
            <h1 className={styles.heading}>Project not found</h1>
            <p className={styles.body}>
              The project you&apos;re looking for doesn&apos;t exist or may
              have been moved.
            </p>
            <Link href="/#work" className="pillButton">
              Back to works
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
