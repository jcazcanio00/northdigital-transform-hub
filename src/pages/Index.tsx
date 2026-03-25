import SEO from "@/components/SEO";
import Header from "@/components/Header";
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

const indexJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "North",
    "url": "https://northmkt.com.mx",
    "logo": "https://northmkt.com.mx/logo.png",
    "description": "Automatiza, escala y crece con tecnología. Software empresarial, cloud y marketing de crecimiento para empresas modernas.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cancún",
      "addressRegion": "Quintana Roo",
      "addressCountry": "MX"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+52-998-351-3337",
      "contactType": "sales",
      "availableLanguage": ["Spanish", "English"]
    },
    "sameAs": [
      "https://www.facebook.com/northmkt",
      "https://www.instagram.com/northmkt",
      "https://www.linkedin.com/company/north-marketing/"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "North",
    "url": "https://northmkt.com.mx",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://northmkt.com.mx/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "North",
    "image": "https://northmkt.com.mx/og-image.jpg",
    "url": "https://northmkt.com.mx",
    "telephone": "+52-998-351-3337",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cancún",
      "addressRegion": "Quintana Roo",
      "addressCountry": "MX"
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "areaServed": {
      "@type": "Country",
      "name": "México"
    },
    "serviceType": ["Marketing digital", "SEO", "Google Ads", "CRM", "Software empresarial", "Cloud services"]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <SEO
        title="North | Automatiza, Escala y Crece con Tecnología"
        description="Automatiza, escala y crece con tecnología. Software empresarial, cloud y marketing de crecimiento para empresas modernas."
        url="https://northmkt.com.mx"
        keywords="north, software empresarial, cloud, marketing de crecimiento, automatizacion, tecnologia para empresas"
        jsonLd={indexJsonLd}
      />
      <Header />
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
