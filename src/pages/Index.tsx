import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-cairo">
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;
