"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import ProjectGrid from "@/components/ProjectGrid/ProjectGrid";
import styles from "./FeaturedWorks.module.css";

const PAGE_SIZE = 4;

export default function FeaturedWorks({ projects }: { projects: Project[] }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visible = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <section id="work" className={styles.section} aria-label="Featured works">
      <div className="container">
        <div className={styles.heading}>
          <h2 className={styles.headingText}>Featured works</h2>
        </div>

        <ProjectGrid projects={visible} />

        {hasMore && (
          <div className={styles.loadMoreRow}>
            <button
              type="button"
              className="pillButton"
              onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
