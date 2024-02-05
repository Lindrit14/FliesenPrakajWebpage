import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Services from "./Services";
// import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import Divider from "./utils/divider";

function Home() {
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
        <Services />
        <Divider />
        <Projects />
        <Divider />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
