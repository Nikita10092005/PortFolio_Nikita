import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import GithubSection from "@/components/GithubSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Resume />
        <Education />
        <Achievements />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
