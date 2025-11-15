import Hero from "./sections/Hero";
import Features from "./sections/Features";
import HowItWorks from "./sections/HowItWorks";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";

/**
 * Landing Page (verakita.com)
 * Main marketing page with smooth scrolling and GSAP animations
 */
export default function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </>
  );
}
