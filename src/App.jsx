import About from "./components/About";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroArea from "./components/HeroArea";
import Interests from "./components/Interests";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="font-poppins bg-[#1E1E1E]">
      <Navbar />
      <HeroArea />
      <Carousel />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Interests />
      <Contact />
      <Carousel />
      <Footer />
    </div>
  );
};

export default App;
