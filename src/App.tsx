import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <main>
        <Hero />
      </main>
      <ScrollToTop />
    </>
  );
}

export default App;
