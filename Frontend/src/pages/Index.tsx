import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { KeyAdvantagesSection } from "@/components/sections/KeyAdvantagesSection";
import { DashboardMapSection } from "@/components/sections/DashboardMapSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { FooterSection } from "@/components/sections/FooterSection";
import "leaflet/dist/leaflet.css";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <KeyAdvantagesSection />
      <DashboardMapSection />
      <VideoSection />
      <FooterSection />
    </div>
  );
};

export default Index;
