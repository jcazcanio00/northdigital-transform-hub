import SEO from "@/components/SEO";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SeoIntroSection from "@/components/SeoIntroSection";
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
    "name": "North Digital",
    "url": "https://northmkt.com.mx",
    "logo": "https://northmkt.com.mx/favicon.webp",
    "description": "Agencia de marketing digital en Cancún, Playa del Carmen y Tulum. Especialistas en software empresarial, infraestructura cloud y marketing de crecimiento para empresas en Quintana Roo.",
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
    ],
    "areaServed": [
      { "@type": "City", "name": "Cancún" },
      { "@type": "City", "name": "Playa del Carmen" },
      { "@type": "City", "name": "Tulum" },
      { "@type": "State", "name": "Quintana Roo" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "North Digital",
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
    "name": "North Digital",
    "image": "https://northmkt.com.mx/og-image.png",
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
    "areaServed": [
      { "@type": "City", "name": "Cancún" },
      { "@type": "City", "name": "Playa del Carmen" },
      { "@type": "City", "name": "Tulum" },
      { "@type": "State", "name": "Quintana Roo" },
      { "@type": "Country", "name": "México" }
    ],
    "serviceType": ["Agencia de marketing digital", "Software empresarial", "Infraestructura cloud", "Marketing de crecimiento", "Marketing digital en Cancún", "Marketing digital en Playa del Carmen", "Marketing digital en Tulum"]
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "North Digital",
    "image": "https://northmkt.com.mx/og-image.png",
    "url": "https://northmkt.com.mx",
    "telephone": "+52-998-351-3337",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cancún",
      "addressRegion": "Quintana Roo",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.1619,
      "longitude": -86.8515
    },
    "areaServed": [
      { "@type": "City", "name": "Cancún" },
      { "@type": "City", "name": "Playa del Carmen" },
      { "@type": "City", "name": "Tulum" }
    ],
    "priceRange": "$$",
    "sameAs": [
      "https://www.facebook.com/northmkt",
      "https://www.instagram.com/northmkt",
      "https://www.linkedin.com/company/north-marketing/"
    ]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <SEO
        title="Agencia de Marketing Digital en Cancún, Playa del Carmen y Tulum | North Digital"
        description="Agencia de marketing digital especializada en crecimiento empresarial, cloud, software y estrategia digital para empresas en Cancún, Playa del Carmen y Tulum."
        url="https://northmkt.com.mx"
        jsonLd={indexJsonLd}
      />
      <Header />
      <HeroSection />
      <SeoIntroSection />
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
