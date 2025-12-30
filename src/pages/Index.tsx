import { GridLines, PaperTexture } from "@/components/report/VisualElements";
import { HeroSection } from "@/components/report/HeroSection";
import { MonthlyMVPSection } from "@/components/report/MonthlyMVPSection";
import { DeepDiveSection } from "@/components/report/DeepDiveSection";
import { FunSection } from "@/components/report/FunSection";
import { ClosingSection } from "@/components/report/ClosingSection";

const Index = () => {
  return (
    <main className="relative min-h-screen">
      {/* Visual overlays */}
      <PaperTexture />
      <GridLines />

      {/* Content sections */}
      <HeroSection />
      <MonthlyMVPSection />
      <DeepDiveSection />
      <FunSection />
      <ClosingSection />
    </main>
  );
};

export default Index;