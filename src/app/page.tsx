import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Clients />
      <Testimonials />
      <ContactUs />
    </>
  );
}
