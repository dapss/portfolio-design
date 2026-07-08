import Hero from "@/components/hero";
import Gallery from "@/components/gallery";
import Skills from "@/components/skills";
import About from "@/components/about";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <Skills />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}
