export const metadata = {
  title: "Priya IO Systems - Reliable Intelligent Backend Solutions",
  description: "Intelligent SaaS Solutions for Modern Enterprises",
};

import Hero from "@/components/hero-home";
import FeaturesPlanet from "@/components/features-planet";
import SecuritySection from "@/components/security-section";


export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesPlanet />
      <SecuritySection />

    </>
  );
}
