import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import { Background, CursorGlow, Loader, ScrollProgress } from "./components/Effects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import GitHubSection from "./components/GitHubSection";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <CursorGlow />
      <Background />
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GitHubSection />
        <Education />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
