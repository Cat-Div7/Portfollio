import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
