import Image from "next/image";
import type { ProjectImage } from "@/data/projects";
import styles from "./ImageBlock.module.css";

export default function ImageBlock({
  image,
  caption,
  priority,
  sizes = "100vw",
}: {
  image: ProjectImage;
  caption?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <figure className={styles.figure}>
      <div
        className={styles.imageWrap}
        style={{ aspectRatio: image.ratio ?? 16 / 10 }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={styles.image}
        />
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
