import Navigation from "@/components/Navigation/Navigation";
import Hero from "@/components/Hero/Hero";
import FeaturedWorks from "@/components/FeaturedWorks/FeaturedWorks";
import About from "@/components/About/About";
import Capabilities from "@/components/Capabilities/Capabilities";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import { getFeaturedProjects } from "@/data/projects";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <div id="top" />
      <Navigation />
      <main>
        <Hero />
        <FeaturedWorks projects={featuredProjects} />
        <About />
        <Capabilities />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
