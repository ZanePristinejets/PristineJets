import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Testimonials from "./Testimonials";
import Contact from "../Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
}
