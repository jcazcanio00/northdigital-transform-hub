

## Plan: Google Workspace — Navigation + SEO Nacional

### 1. Add to Navigation (Header + Footer)

**Header** (`src/components/Header.tsx`):
- Add `{ label: "Google Workspace", href: "/google-workspace-mexico" }` to the `solutions` array (line 12). This automatically appears in both the desktop dropdown and mobile menu.

**Footer** (`src/components/Footer.tsx`):
- Add `{ label: "Google Workspace", href: "/google-workspace-mexico" }` to the Soluciones list (after line 48).

### 2. SEO Meta Tags Update

**`src/pages/GoogleWorkspaceMexico.tsx`** — Update the SEO component:
- **description**: Change to the longer version: *"Implementamos y migramos Google Workspace para empresas en México. Configuración profesional, seguridad, soporte y acompañamiento para equipos que quieren escalar."*
- **keywords**: Expand to include all primary + secondary keywords: *"Google Workspace México, Google Workspace empresas, implementación Google Workspace, migración Google Workspace, correo empresarial Google, soporte Google Workspace México, Google Workspace para empresas, Google Workspace precio México, configurar Google Workspace, servicios Google Workspace México"*

**`google-workspace-mexico/index.html`** — Mirror the same description update in the static HTML entry point for crawlers.

### 3. H1 Verification

Current H1 is already correct: **"Google Workspace para Empresas en México"** — single H1, no changes needed.

### 4. Content Nationalization

Review the page copy — it is already nationally focused ("empresas en México", "equipos", etc.) with no city-specific dominance. No copy changes needed. The "Why Implement" section already says "Las empresas más productivas de México" which is correct.

### 5. Internal Linking

Add contextual links pointing to `/google-workspace-mexico` from:

- **`src/pages/Index.tsx`** (Home): Add a subtle link in the `CloudSection` or `SolutionsSection` component. Since `SolutionsSection` already mentions "Google Workspace" in the Cloud card description, we add a small inline link there.
- **`src/pages/Cloud.tsx`**: Add a link/card or CTA mentioning Google Workspace implementation with anchor text "implementación de Google Workspace".
- **`src/pages/Software.tsx`**: Add a mention in the integrations context linking to Google Workspace.

### 6. Sitemap

Already present in `public/sitemap.xml` with priority 0.9 — no changes needed.

### 7. Indexing

- No `noindex` tags present — confirmed clean.
- Canonical already correct: `https