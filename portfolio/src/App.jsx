import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
       <Experience/>
      {/* Temporary spacing */}

      <div style={{ height: "200vh", marginTop: "80px" }}></div>
    </>
  );
}

export default App;