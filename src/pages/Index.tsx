import { lazy, Suspense } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogoSlider from "@/components/LogoSlider";
import SolutionsSection from "@/components/SolutionsSection";
import Footer from "@/components/Footer";

// Lazy-load below-the-fold sections to reduce initial JS
const TrustSection = lazy(() => import("@/components/TrustSection"));
const BlueCta = lazy(() => import("@/components/BlueCta"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const SystemsSection = lazy(() => import("@/components/SystemsSection"));
const CloudSection = lazy(() => import("@/components/CloudSection"));
const GrowthSection = lazy(() => import("@/components/GrowthSection"));
const StatsSection = lazy(() => import("@/components/StatsSection"));
const TestimonialSection = lazy(() => import("@/components/TestimonialSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const CtaSection = lazy(() => import("@/components/CtaSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const MarqueeText = lazy(() => import("@/components/MarqueeText"));

const indexJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "North",
    "url": "https://northmkt.com.mx",
    "logo": "https://northmkt.com.mx/favicon.webp",
    "description": "Agencia de marketing digital y desarrollo de software empresarial en Cancún. Especialistas en infraestructura cloud, marketing de crecimiento y sistemas a medida.",
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
    "areaServed": {
      "@type": "Country",
      "name": "México"
    },
    "serviceType": ["Software empresarial", "Infraestructura cloud", "Marketing de crecimiento", "Marketing digital"]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <SEO
        title="North | Software Empresarial, Cloud Services y Marketing de Crecimiento"
        description="Agencia de marketing digital en Cancún especializada en software empresarial, infraestructura cloud y estrategias de crecimiento basadas en datos para escalar tu negocio."
        url="https://northmkt.com.mx"
        jsonLd={indexJsonLd}
      />
      <Header />
      <HeroSection />
      <LogoSlider />
      <SolutionsSection />
      <Suspense fallback={null}>
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
      </Suspense>
      <Footer />
    </div>
  );
};

export default Index;
