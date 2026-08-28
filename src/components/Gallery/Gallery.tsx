import ImageBlock from "@/components/ImageBlock/ImageBlock";
import type { ProjectImage } from "@/data/projects";
import styles from "./Gallery.module.css";

export default function Gallery({ images }: { images: ProjectImage[] }) {
  return (
    <div className={styles.gallery}>
      {images.map((image) => (
        <ImageBlock key={image.src} image={image} sizes="(max-width: 720px) 100vw, 33vw" />
      ))}
    </div>
  );
}
