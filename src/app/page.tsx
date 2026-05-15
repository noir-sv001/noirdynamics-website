import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProcessFlow from "@/components/ProcessFlow";
import ProductDevelopment from "@/components/ProductDevelopment";
import Tooling from "@/components/Tooling";
import AdvancedSystems from "@/components/AdvancedSystems";
import Commercialization from "@/components/Commercialization";
import SystemGrid from "@/components/SystemGrid";
import MaterialPanels from "@/components/MaterialPanels";
import SectionBreak from "@/components/SectionBreak";
import SystemMotion from "@/components/SystemMotion";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-[#F5F5F5]">
      <SystemGrid />
      <SystemMotion />
      <MaterialPanels />

      <Navbar />
      <Hero />

      <ProcessFlow />

      <SectionBreak label="01–04 / Product Development" />
      <ProductDevelopment />

      <SectionBreak label="05–06 / Engineering & Manufacturing" />
      <Tooling />

      <SectionBreak label="07–08 / Market Deployment" />
      <AdvancedSystems />
      <Commercialization />

      <FinalCTA />
      <Footer />
    
    </main>
  );
}