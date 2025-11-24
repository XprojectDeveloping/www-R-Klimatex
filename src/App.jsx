import About from "./pages/About";
import Bloq from "./pages/Bloq";
import BloqSingle from "./pages/BloqSingle";
import Contact from "./pages/Contact";
import Distribution from "./pages/Distribution";
import HomePage from "./pages/HomePage";
import License from "./pages/License";
import Production from "./pages/Production";
import ProductionSingle from "./pages/ProductionSingle";
import ProductionSingleElements from "./pages/ProductionSingleElements";
import Projects from "./pages/Projects";
import ProjectsSingle from "./pages/ProjectsSingle";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <HomePage />
      <About />
      <Services />
      <Projects />
      <ProjectsSingle />
      <Production />
      <ProductionSingle />
      <ProductionSingleElements />
      <Distribution />
      <Bloq />
      <BloqSingle />
      <Contact />
      <License />
    </>
  );
}

export default App;
