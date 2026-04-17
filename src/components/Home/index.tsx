import Hero from "./Hero";
// import CaseResults from "./CaseResults";
import Services from "./Services";
import About from "./About";
import Contact from "../Contact";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      {/* <CaseResults /> */}
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
}
