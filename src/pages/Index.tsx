import Header from "@/components/Header";
import BrandStrip from "@/components/BrandStrip";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import LogoSlider from "@/components/LogoSlider";
import TrustSection from "@/components/TrustSection";
import BlueCta from "@/components/BlueCta";
import AboutSection from "@/components/AboutSection";
import SystemsSection from "@/components/SystemsSection";
import CloudSection from "@/components/CloudSection";
import GrowthSection from "@/components/GrowthSection";
import StatsSection from "@/components/StatsSection";
import TestimonialSection from "@/components/TestimonialSection";
import ProcessSection from "@/components/ProcessSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import MarqueeText from "@/components/MarqueeText";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <BrandStrip />
      <HeroSection />
      <LogoSlider />
      <SolutionsSection />
      <TrustSection />
      <BlueCta />
      <AboutSection />
      <SystemsSection />
      <CloudSection />
      <GrowthSection />
      <StatsSection />
      <TestimonialSection />
      <ProcessSection />
      <CtaSection />
      <ContactSection />
      <MarqueeText />
      <Footer />
    </div>
  );
};

export default Index;
