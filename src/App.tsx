import About from "./components/About";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
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
      </main>
      <ScrollToTop />
    </>
  );
}

export default App;
