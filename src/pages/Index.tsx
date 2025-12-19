import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { ChallengeSection } from "@/components/ChallengeSection";
import { WhyNowSection } from "@/components/WhyNowSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactCTASection } from "@/components/ContactCTASection";
import { ContactModal } from "@/components/ContactModal";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenContact={() => setIsContactOpen(true)} />
      
      <main>
        <HeroSection onOpenContact={() => setIsContactOpen(true)} />
        <TrustBar />
        <ChallengeSection />
        <WhyNowSection />
        <SolutionsSection />
        <CapabilitiesSection />
        <CaseStudiesSection />
        <ProcessSection />
        <WhyUsSection />
        <FAQSection />
        <ContactCTASection onOpenContact={() => setIsContactOpen(true)} />
      </main>

      <Footer />

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
};

export default Index;
