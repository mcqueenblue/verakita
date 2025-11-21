import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import HowItWorks from "./sections/HowItWorks";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import Footer from "./sections/Footer";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <Pricing />
      <Footer />
    </>
  );
}
