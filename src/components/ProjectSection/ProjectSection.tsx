import type { ProjectSection as ProjectSectionData } from "@/data/projects";
import ImageBlock from "@/components/ImageBlock/ImageBlock";
import Gallery from "@/components/Gallery/Gallery";
import Insights from "@/components/Insights/Insights";
import styles from "./ProjectSection.module.css";

export default function ProjectSection({
  section,
}: {
  section: ProjectSectionData;
}) {
  switch (section.type) {
    case "text":
      return (
        <section className={`${styles.section} ${styles.textSection}`}>
          <div className="container">
            <div className={styles.textGrid}>
              {(section.label || section.heading) && (
                <div className={styles.textLead}>
                  {section.label && (
                    <p className="eyebrow">{section.label}</p>
                  )}
                  {section.heading && (
                    <h2 className={styles.textHeading}>{section.heading}</h2>
                  )}
                </div>
              )}
              <p className={styles.body}>{section.body}</p>
            </div>
          </div>
        </section>
      );

    case "largeText":
      return (
        <section className={styles.section}>
          <div className="container">
            <p className={styles.largeText}>{section.body}</p>
          </div>
        </section>
      );

    case "image":
      return (
        <section className={styles.section}>
          <div className="container">
            <ImageBlock image={section.image} caption={section.caption} />
          </div>
        </section>
      );

    case "fullWidthImage":
      return (
        <section className={styles.section}>
          <div className={styles.bleed}>
            <ImageBlock image={section.image} caption={section.caption} />
          </div>
        </section>
      );

    case "twoImages":
      return (
        <section className={styles.section}>
          <div className="container">
            <div className={styles.twoImages}>
              <ImageBlock image={section.images[0]} sizes="(max-width: 720px) 100vw, 50vw" />
              <ImageBlock image={section.images[1]} sizes="(max-width: 720px) 100vw, 50vw" />
            </div>
            {section.caption && (
              <p className={styles.caption}>{section.caption}</p>
            )}
          </div>
        </section>
      );

    case "imageText":
      return (
        <section className={styles.section}>
          <div className="container">
            <div className={styles.mediaTextGrid}>
              <ImageBlock image={section.image} sizes="(max-width: 720px) 100vw, 50vw" />
              <div className={styles.mediaTextBody}>
                {section.label && <p className="eyebrow">{section.label}</p>}
                {section.heading && (
                  <h2 className={styles.textHeading}>{section.heading}</h2>
                )}
                <p className={styles.body}>{section.body}</p>
              </div>
            </div>
          </div>
        </section>
      );

    case "textImage":
      return (
        <section className={styles.section}>
          <div className="container">
            <div className={`${styles.mediaTextGrid} ${styles.reversed}`}>
              <div className={styles.mediaTextBody}>
                {section.label && <p className="eyebrow">{section.label}</p>}
                {section.heading && (
                  <h2 className={styles.textHeading}>{section.heading}</h2>
                )}
                <p className={styles.body}>{section.body}</p>
              </div>
              <ImageBlock image={section.image} sizes="(max-width: 720px) 100vw, 50vw" />
            </div>
          </div>
        </section>
      );

    case "insights":
      return (
        <section className={styles.section}>
          <div className="container">
            <Insights label={section.label} items={section.items} />
          </div>
        </section>
      );

    case "quote":
      return (
        <section className={styles.section}>
          <div className="container">
            <blockquote className={styles.quote}>
              <p>&ldquo;{section.quote}&rdquo;</p>
              {section.attribution && (
                <cite className={styles.attribution}>
                  {section.attribution}
                </cite>
              )}
            </blockquote>
          </div>
        </section>
      );

    case "gallery":
      return (
        <section className={styles.section}>
          <div className="container">
            <Gallery images={section.images} />
          </div>
        </section>
      );

    case "video":
      return (
        <section className={styles.section}>
          <div className="container">
            <figure>
              <video
                className={styles.video}
                src={section.src}
                poster={section.poster}
                controls
                playsInline
              />
              {section.caption && (
                <figcaption className={styles.caption}>
                  {section.caption}
                </figcaption>
              )}
            </figure>
          </div>
        </section>
      );

    case "prototype":
      return (
        <section className={styles.section}>
          <div className="container">
            {section.label && <p className="eyebrow">{section.label}</p>}
            <div className={styles.prototypeFrame}>
              <iframe
                src={section.embedSrc}
                title={section.label ?? "Interactive prototype"}
                allow="fullscreen"
                loading="lazy"
              />
            </div>
            {section.caption && (
              <p className={styles.caption}>{section.caption}</p>
            )}
          </div>
        </section>
      );

    case "process":
      return (
        <section className={styles.section}>
          <div className="container">
            {section.label && (
              <p className={`eyebrow ${styles.processLabel}`}>
                {section.label}
              </p>
            )}
            <ol className={styles.processList}>
              {section.steps.map((step, index) => (
                <li key={step.title} className={styles.processStep}>
                  <span className={styles.number}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className={styles.textHeading}>{step.title}</h3>
                    <p className={styles.body}>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      );

    case "reflection":
      return (
        <section className={styles.section}>
          <div className="container">
            <div className={styles.textGrid}>
              <div className={styles.textLead}>
                <p className="eyebrow">Reflection</p>
              </div>
              <p className={styles.body}>{section.body}</p>
            </div>
          </div>
        </section>
      );

    default:
      return null;
  }
}
