import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DevelopmentFlow from "@/components/DevelopmentFlow";
import ProductDevelopment from "@/components/ProductDevelopment";
import Tooling from "@/components/Tooling";
import AdvancedSystems from "@/components/AdvancedSystems";
import Commercialization from "@/components/Commercialization";
import SystemGrid from "@/components/SystemGrid";
import SectionBreak from "@/components/SectionBreak";
import SystemMotion from "@/components/SystemMotion";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-[#F5F5F5]">
      <SystemGrid />
      <SystemMotion />

      <Navbar />
      <Hero />

      <SectionBreak label="Development Architecture" />
      <DevelopmentFlow />

      <ProductDevelopment />
      <Tooling />

      <SectionBreak label="Industrial Systems" />
      <AdvancedSystems />

      <Commercialization />

      <SectionBreak label="Market Deployment" />

      <FinalCTA />
      <Footer />
    
    </main>
  );
}