import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import SolutionsSection from "@/components/SolutionsSection";
import SystemsSection from "@/components/SystemsSection";
import CloudSection from "@/components/CloudSection";
import GrowthSection from "@/components/GrowthSection";
import ProcessSection from "@/components/ProcessSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative">
      {/* Global atmospheric mesh gradient */}
      <div className="fixed inset-0 bg-mesh pointer-events-none z-0" />

      {/* Global floating orbs for atmospheric depth */}
      <div className="fixed top-[20%] left-[10%] w-[500px] h-[500px] floating-orb bg-primary/5 z-0" />
      <div className="fixed top-[60%] right-[5%] w-[400px] h-[400px] floating-orb bg-accent/4 z-0" style={{ animationDelay: "3s" }} />
      <div className="fixed bottom-[10%] left-[40%] w-[350px] h-[350px] floating-orb bg-primary/3 z-0" style={{ animationDelay: "5s" }} />

      <div className="relative z-10">
        <Header isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
        <HeroSection />
        <TrustSection />
        <SolutionsSection />
        <SystemsSection />
        <CloudSection />
        <GrowthSection />
        <ProcessSection />
        <CtaSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
