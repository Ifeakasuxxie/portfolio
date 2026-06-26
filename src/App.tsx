import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import SocialBar from "./components/SocialBar";
import Work from "./components/Work";
import Showcase from "./components/Showcase";
import Services from "./components/Services";
import Stack from "./components/Stack";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-body">
      <Navbar />
      <Hero />
      <SocialBar />
      <Stats />
      <Work />
      <Showcase />
      <Services />
      <Stack />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
