import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Testimonials from "./Testimonials";
import Contact from "../Contact";
import Bridge from "./Bridge";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Bridge />
      <Contact />
    </div>
  );
}
