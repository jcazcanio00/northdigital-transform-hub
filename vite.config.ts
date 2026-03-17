import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: { overlay: false },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        // Page-specific HTML entry points (OG metadata for crawlers)
        pageBlog: path.resolve(__dirname, "blog/index.html"),
        pageSoftware: path.resolve(__dirname, "software/index.html"),
        pageCloud: path.resolve(__dirname, "cloud/index.html"),
        pageMarketing: path.resolve(__dirname, "marketing/index.html"),
        pageContacto: path.resolve(__dirname, "contacto/index.html"),
        pageAcerca: path.resolve(__dirname, "acerca/index.html"),
        pageMdCancun: path.resolve(__dirname, "marketing-digital-cancun/index.html"),
        pageMdPlaya: path.resolve(__dirname, "marketing-digital-playa-del-carmen/index.html"),
        pageMdTulum: path.resolve(__dirname, "marketing-digital-tulum/index.html"),
        pageCrm: path.resolve(__dirname, "crm-empresas/index.html"),
        pageAutomatizacion: path.resolve(__dirname, "automatizacion-empresarial/index.html"),
        pageTerminos: path.resolve(__dirname, "terminos/index.html"),
        pagePrivacidad: path.resolve(__dirname, "privacidad/index.html"),
        // Blog article static HTML entry points
        blogArticle1: path.resolve(__dirname, "blog/1/index.html"),
        topAgencias: path.resolve(__dirname, "blog/top-7-de-agencias-de-marketing-digital-en-cancun/index.html"),
        queEsMarketing: path.resolve(__dirname, "blog/que-es-marketing-digital/index.html"),
        seoCancun: path.resolve(__dirname, "blog/seo-en-cancun/index.html"),
        facebookCancun: path.resolve(__dirname, "blog/publicidad-en-facebook-cancun/index.html"),
        estrategiasMarketing: path.resolve(__dirname, "blog/estrategias-de-marketing-digital-para-empresas/index.html"),
        crmCancun: path.resolve(__dirname, "blog/crm-para-empresas-en-cancun/index.html"),
        automatizacionVentas: path.resolve(__dirname, "blog/automatizacion-de-ventas-para-empresas/index.html"),
        generarLeads: path.resolve(__dirname, "blog/como-generar-leads-para-mi-empresa-en-cancun/index.html"),
      },
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
