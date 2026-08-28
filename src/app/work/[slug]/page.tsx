import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import ProjectHeader from "@/components/ProjectHeader/ProjectHeader";
import ProjectMeta from "@/components/ProjectMeta/ProjectMeta";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import ProjectNavigation from "@/components/ProjectNavigation/ProjectNavigation";
import {
  getAllProjects,
  getAdjacentProjects,
  getProjectBySlug,
} from "@/data/projects";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <>
      <div id="top" />
      <Navigation />
      <main>
        <article>
          <ProjectHeader project={project} />
          <ProjectMeta project={project} />
          {project.sections.map((section, index) => (
            <ProjectSection key={index} section={section} />
          ))}
        </article>
        <ProjectNavigation previous={previous} next={next} />
      </main>
      <Footer />
    </>
  );
}
