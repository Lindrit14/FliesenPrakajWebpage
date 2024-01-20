import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Divider from "./components/utils/divider";
import "./App.css";

function App() {
  return (
    <div className="bg-concrete-100">
      <Navbar />
      <div className="  flex flex-col items-center ">
        <div className="flex flex-col items-center bg-concrete-50 w-3/4 ">
          <Hero />
        </div>
        <Divider />
        <About />
        <Divider />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
