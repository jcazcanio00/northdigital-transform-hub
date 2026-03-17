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
