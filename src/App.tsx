import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Software from "./pages/Software.tsx";
import Cloud from "./pages/Cloud.tsx";
import Marketing from "./pages/Marketing.tsx";
import Contacto from "./pages/Contacto.tsx";
import Acerca from "./pages/Acerca.tsx";
import Terminos from "./pages/Terminos.tsx";
import Privacidad from "./pages/Privacidad.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/software" element={<Software />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/privacidad" element={<Privacidad />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
