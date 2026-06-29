import AboutPreview from "../components/sections/AboutPreview";
import Hero from "../components/sections/Hero";
import Statistics from "../components/sections/Statistics";
import Ticker from "../components/sections/Ticker";
import ScrollRevealWrapper from "../components/ScrollRevealWrapper";
import BrandShowcase from "../components/sections/BrandShowcase";
import GeographicPresence from "../components/sections/GeographicPresence";
import LeadershipPreview from "../components/sections/LeadershipPreview";
import InvestorPreview from "../components/sections/InvestorPreview";
// import CSRPreview from "../components/sections/CSRPreview";
import ContactSection from "../components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
     <ScrollRevealWrapper />
      <Hero />
       <Ticker />
        <AboutPreview />
        <Statistics />
         <BrandShowcase />
          <GeographicPresence />
           <LeadershipPreview />
           <InvestorPreview />
           <ContactSection />
    </>
  );
}