import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import WorkWithMe from "@/components/WorkWithMe";
import UpChevron from "@/components/ui/UpChevron";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />

      <Hero />

      <About />

      <WorkWithMe />

      <Contact />

      <UpChevron />

      <Footer />
    </div>
  );
}
