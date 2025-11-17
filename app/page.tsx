import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import HowItWorks from "./sections/HowItWorks";
import Features from "./sections/Features";
import Footer from "./sections/Footer";

/**
 * Landing Page (verakita.com)
 * Dark modern design inspired by Morpho.org
 */
export default function LandingPage() {
  return (
    <>
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <Footer />
    </>
  );
}
