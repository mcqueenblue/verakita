import Hero from "./sections/Hero";
import ValueProp from "./sections/ValueProp";
import Features from "./sections/Features";
import HowItWorks from "./sections/HowItWorks";
import CTA from "./sections/CTA";

/**
 * Landing Page (verakita.com)
 * Neo-Brutalist design with bold typography and chunky elements
 */
export default function LandingPage() {
  return (
    <>
      <Hero />
      <ValueProp />
      <HowItWorks />
      <Features />
      <CTA />
    </>
  );
}
