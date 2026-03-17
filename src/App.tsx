import About from "./components/About";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <ScrollProgress />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
