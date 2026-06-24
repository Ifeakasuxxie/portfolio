import Hero from "./components/Hero";
import SocialBar from "./components/SocialBar";
import Work from "./components/Work";
import Services from "./components/Services";
import Stack from "./components/Stack";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-body">
      <Hero />
      <SocialBar />
      <Work />
      <Services />
      <Stack />
      <About />
      <Contact />
    </div>
  );
}

export default App;
