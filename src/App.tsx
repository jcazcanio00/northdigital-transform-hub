import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
const Index = lazy(() => import("./pages/Index.tsx"));
import NotFound from "./pages/NotFound.tsx";
import { ScrollToTop } from "./components/ScrollToTop";
import { WhatsAppFloatingButton } from "./components/WhatsAppButton";

// Lazy load non-homepage routes to reduce initial bundle
const Software = lazy(() => import("./pages/Software.tsx"));
const Cloud = lazy(() => import("./pages/Cloud.tsx"));
const Marketing = lazy(() => import("./pages/Marketing.tsx"));
const Contacto = lazy(() => import("./pages/Contacto.tsx"));
const Acerca = lazy(() => import("./pages/Acerca.tsx"));
const Terminos = lazy(() => import("./pages/Terminos.tsx"));
const Privacidad = lazy(() => import("./pages/Privacidad.tsx"));
const MarketingDigitalCancun = lazy(() => import("./pages/MarketingDigitalCancun.tsx"));
const MarketingDigitalPlayaDelCarmen = lazy(() => import("./pages/MarketingDigitalPlayaDelCarmen.tsx"));
const MarketingDigitalTulum = lazy(() => import("./pages/MarketingDigitalTulum.tsx"));
const Blog = lazy(() => import("./pages/Blog.tsx"));
const CrmEmpresas = lazy(() => import("./pages/CrmEmpresas.tsx"));
const AutomatizacionEmpresarial = lazy(() => import("./pages/AutomatizacionEmpresarial.tsx"));
const BlogArticle = lazy(() => import("./pages/BlogArticle.tsx"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/software" element={<Software />} />
            <Route path="/cloud" element={<Cloud />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/acerca" element={<Acerca />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="/marketing-digital-cancun" element={<MarketingDigitalCancun />} />
            <Route path="/marketing-digital-playa-del-carmen" element={<MarketingDigitalPlayaDelCarmen />} />
            <Route path="/marketing-digital-tulum" element={<MarketingDigitalTulum />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
            <Route path="/crm-empresas" element={<CrmEmpresas />} />
            <Route path="/automatizacion-empresarial" element={<AutomatizacionEmpresarial />} />
            {/* ─── Blog articles with root-level SEO URLs ─── */}
            <Route path="/top-7-de-agencias-de-marketing-digital-en-cancun" element={<BlogArticle slug="top-7-de-agencias-de-marketing-digital-en-cancun" />} />
            <Route path="/que-es-marketing-digital" element={<BlogArticle slug="que-es-marketing-digital" />} />
            <Route path="/seo-en-cancun" element={<BlogArticle slug="seo-en-cancun" />} />
            <Route path="/publicidad-en-facebook-cancun" element={<BlogArticle slug="publicidad-en-facebook-cancun" />} />
            <Route path="/estrategias-de-marketing-digital-para-empresas" element={<BlogArticle slug="estrategias-de-marketing-digital-para-empresas" />} />
            <Route path="/crm-para-empresas-en-cancun" element={<BlogArticle slug="crm-para-empresas-en-cancun" />} />
            <Route path="/automatizacion-de-ventas-para-empresas" element={<BlogArticle slug="automatizacion-de-ventas-para-empresas" />} />
            <Route path="/como-generar-leads-para-mi-empresa-en-cancun" element={<BlogArticle slug="como-generar-leads-para-mi-empresa-en-cancun" />} />
            <Route path="/como-usar-ia-para-vender-mas-en-tu-empresa" element={<BlogArticle slug="como-usar-ia-para-vender-mas-en-tu-empresa" />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <WhatsAppFloatingButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
