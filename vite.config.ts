import fs from "fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const STATIC_HTML_EXCLUDE_DIRS = new Set([
  ".git",
  ".vercel",
  "dist",
  "node_modules",
  "pages",
  "public",
  "src",
  "supabase",
  "tmp",
]);

const toEntryKey = (relativePath: string) =>
  `entry_${relativePath
    .replace(/index\.html$/, "")
    .replace(/[^a-zA-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")}`;

const collectStaticHtmlInputs = () => {
  const entries: Record<string, string> = {};

  const walk = (absoluteDir: string, relativeDir = "") => {
    const indexPath = path.join(absoluteDir, "index.html");

    if (relativeDir && fs.existsSync(indexPath)) {
      entries[toEntryKey(relativeDir)] = indexPath;
    }

    for (const item of fs.readdirSync(absoluteDir, { withFileTypes: true })) {
      if (!item.isDirectory()) continue;
      if (!relativeDir && STATIC_HTML_EXCLUDE_DIRS.has(item.name)) continue;

      walk(
        path.join(absoluteDir, item.name),
        relativeDir ? `${relativeDir}/${item.name}` : item.name,
      );
    }
  };

  walk(__dirname);
  return entries;
};

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
        ...collectStaticHtmlInputs(),
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
