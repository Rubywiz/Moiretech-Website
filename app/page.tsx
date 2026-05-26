import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Training from "@/components/Training";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Services />
      <Products />
      <Training />
      <WhyUs />
      <Contact />
    </div>
  );
}
