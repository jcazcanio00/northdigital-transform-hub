import { useEffect, useState } from "react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import {
  ArrowRight, BookOpen, TrendingUp, Zap, Server,
  Target, BarChart3, Clock, ChevronRight, Search,
  Megaphone, Users, Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import MarqueeText from "@/components/MarqueeText";
import Footer from "@/components/Footer";

/* ─── Fade helper ─── */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.5, delay },
});

/* ─── Categories ─── */
const categories = [
  { label: "Todos", value: "all", icon: BookOpen },
  { label: "Marketing Digital", value: "marketing", icon: Megaphone },
  { label: "CRM & Ventas", value: "crm", icon: Users },
  { label: "Automatización", value: "automatizacion", icon: Zap },
  { label: "Tecnología Empresarial", value: "tecnologia", icon: Server },
];

/* ─── Articles data ─── */
const articles = [
  {
    id: 1,
    title: "Cómo elegir el CRM correcto para tu empresa en 2025",
    excerpt: "Una guía completa para evaluar, comparar e implementar un CRM que realmente se adapte a tu operación comercial y acelere tus ventas.",
    category: "crm",
    categoryLabel: "CRM & Ventas",
    date: "12 Mar 2025",
    readTime: "8 min",
    featured: true,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
  },
  {
    id: 2,
    title: "SEO local en 2025: estrategias para dominar Google en tu ciudad",
    excerpt: "Las tácticas de SEO local que realmente funcionan para posicionar tu negocio en Cancún, Playa del Carmen y la Riviera Maya.",
    category: "marketing",
    categoryLabel: "Marketing Digital",
    date: "5 Mar 2025",
    readTime: "10 min",
    featured: true,
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=450&fit=crop",
  },
  {
    id: 3,
    title: "Automatización de ventas: de lead a cliente sin fricción",
    excerpt: "Cómo diseñar flujos automatizados que nutren, califican y convierten leads en clientes de forma consistente.",
    category: "automatizacion",
    categoryLabel: "Automatización",
    date: "28 Feb 2025",
    readTime: "7 min",
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
  },
  {
    id: 4,
    title: "Google Ads para empresas B2B: guía de campañas rentables",
    excerpt: "Estructura de campañas, bidding strategies y optimización de conversiones para empresas que venden a otras empresas.",
    category: "marketing",
    categoryLabel: "Marketing Digital",
    date: "20 Feb 2025",
    readTime: "9 min",
    featured: false,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=450&fit=crop",
  },
  {
    id: 5,
    title: "Migración a la nube: lo que toda empresa debe saber antes de empezar",
    excerpt: "Errores comunes, mejores prácticas y un roadmap claro para mover tu infraestructura a servicios cloud sin interrupciones.",
    category: "tecnologia",
    categoryLabel: "Tecnología Empresarial",
    date: "14 Feb 2025",
    readTime: "11 min",
    featured: false,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop",
  },
  {
    id: 6,
    title: "Lead scoring: cómo priorizar tus prospectos con datos",
    excerpt: "Implementa un sistema de puntuación de leads que identifique a tus mejores oportunidades de venta automáticamente.",
    category: "crm",
    categoryLabel: "CRM & Ventas",
    date: "8 Feb 2025",
    readTime: "6 min",
    featured: false,
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=450&fit=crop",
  },
  {
    id: 7,
    title: "Email marketing que convierte: secuencias para cada etapa del funnel",
    excerpt: "Diseña secuencias de email que nutren prospectos fríos, reactivan leads inactivos y fidelizan clientes existentes.",
    category: "automatizacion",
    categoryLabel: "Automatización",
    date: "1 Feb 2025",
    readTime: "8 min",
    featured: false,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&h=450&fit=crop",
  },
  {
    id: 8,
    title: "Arquitectura de software empresarial: monolito vs microservicios",
    excerpt: "Cuándo tiene sentido cada enfoque y cómo tomar la decisión correcta según el tamaño y madurez de tu empresa.",
    category: "tecnologia",
    categoryLabel: "Tecnología Empresarial",
    date: "25 Ene 2025",
    readTime: "12 min",
    featured: false,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop",
  },
  {
    id: 9,
    title: "Métricas de marketing que realmente importan para tu negocio",
    excerpt: "Olvida las métricas vanidosas. Estas son las KPIs que conectan tu inversión en marketing con ingresos reales.",
    category: "marketing",
    categoryLabel: "Marketing Digital",
    date: "18 Ene 2025",
    readTime: "7 min",
    featured: false,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
  },
];

/* ─── JSON-LD ─── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Blog de North Digital",
  "description": "Insights, estrategias y guías prácticas sobre marketing digital, automatización, CRM y tecnología para empresas.",
  "url": "https://northmkt.com.mx/blog",
  "publisher": {
    "@type": "Organization",
    "name": "North Digital",
    "url": "https://northmkt.com.mx",
  },
};

/* ─── Components ─── */

const FeaturedCard = ({ article, large = false }: { article: typeof articles[0]; large?: boolean }) => (
  <Link to={`/blog/${article.id}`} className="block">
  <motion.div
    {...fade(0.1)}
    className={`group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.15)] hover:-translate-y-2 ${large ? "md:col-span-2 md:grid md:grid-cols-2" : ""}`}
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    <div className={`relative overflow-hidden ${large ? "md:h-full h-48" : "h-48"}`}>
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      <span className="absolute top-4 left-4 text-[9px] font-semibold uppercase tracking-wider text-white px-2.5 py-1 rounded-full bg-primary/80 backdrop-blur-sm">
        {article.categoryLabel}
      </span>
    </div>
    <div className="relative z-10 p-6">
      <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-3">
        <span className="flex items-center gap-1"><Clock size={11} /> {article.date}</span>
        <span>·</span>
        <span className="flex items-center gap-1"><BookOpen size={11} /> {article.readTime} lectura</span>
      </div>
      <h3 className={`font-bold font-display mb-3 group-hover:text-primary transition-colors duration-300 leading-snug ${large ? "text-xl lg:text-2xl" : "text-lg"}`}>
        {article.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{article.excerpt}</p>
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-300">
        Leer artículo <ArrowRight size={14} />
      </span>
    </div>
  </motion.div>
  </Link>
);

const ArticleCard = ({ article }: { article: typeof articles[0] }) => (
  <Link to={`/blog/${article.id}`} className="block">
  <motion.div
    {...fade(0.05)}
    className="group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_60px_-12px_hsl(var(--primary)/0.15)] hover:-translate-y-1.5"
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative h-44 overflow-hidden">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      <span className="absolute top-3 left-3 text-[8px] font-semibold uppercase tracking-wider text-white px-2 py-0.5 rounded-full bg-primary/80 backdrop-blur-sm">
        {article.categoryLabel}
      </span>
    </div>
    <div className="relative z-10 p-5">
      <div className="flex items-center gap-3 text-[10px] text-muted-foreground mb-2.5">
        <span className="flex items-center gap-1"><Clock size={10} /> {article.date}</span>
        <span>·</span>
        <span>{article.readTime} lectura</span>
      </div>
      <h3 className="text-base font-bold font-display mb-2 leading-snug group-hover:text-primary transition-colors duration-300">
        {article.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-300">
        Leer más <ChevronRight size={14} />
      </span>
    </div>
  </motion.div>
  </Link>
);

/* ─── Main Page ─── */
const BlogPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [activeCategory, setActiveCategory] = useState("all");

  const featured = articles.filter((a) => a.featured);
  const filtered = activeCategory === "all"
    ? articles.filter((a) => !a.featured)
    : articles.filter((a) => a.category === activeCategory && !a.featured);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO
        title="Blog de Marketing Digital, CRM y Automatización | North Digital"
        description="Aprende sobre marketing digital, CRM, automatización y tecnología empresarial con guías prácticas para hacer crecer tu empresa."
        url="https://northmkt.com.mx/blog"
        jsonLd={jsonLd}
      />
      <Header />

      {/* ═══ HERO ═══ */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
          <motion.div {...fade()}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              <BookOpen size={12} className="text-primary" />
              Knowledge Hub
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight mb-6">
              Blog de Tecnología, CRM y{" "}
              <span className="gradient-text">Crecimiento Empresarial</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              Insights, estrategias y guías prácticas sobre marketing digital, automatización, CRM y tecnología para empresas.
            </p>
            <Button variant="gradient" size="lg" asChild>
              <a href="#articulos">Explorar artículos <ArrowRight size={16} className="ml-2" /></a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ═══ TOPIC MARQUEE ═══ */}
      <div className="relative py-4 overflow-hidden select-none pointer-events-none border-y border-border/30 bg-muted/30">
        <div className="flex whitespace-nowrap animate-marquee-slow items-center h-full">
          {[...Array(3)].flatMap((_, r) =>
            ["CRM", "Automatización", "SEO", "Google Ads", "Funnels", "Analytics", "IA", "Software Empresarial", "Growth", "Marketing Digital"].map((t, i) => (
              <span key={`${r}-${i}`} className="text-sm font-medium text-muted-foreground/60 mx-4 tracking-wide">
                {t}
                <span className="text-primary/30 mx-4">✦</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* ═══ FEATURED POSTS ═══ */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/15 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Selección recomendada
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
              Artículos <span className="gradient-text">destacados</span>
            </h2>
          </motion.div>

          {/* Editorial split layout */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* ── Primary article (3/5 width) ── */}
            {featured[0] && (
              <motion.div
                {...fade(0.1)}
                className="lg:col-span-3 group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.12)] hover:-translate-y-2"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative h-60 sm:h-72 lg:h-[340px] overflow-hidden">
                  <img src={featured[0].image} alt={featured[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-4 left-4 text-[9px] font-semibold uppercase tracking-wider text-white px-2.5 py-1 rounded-full bg-primary/80 backdrop-blur-sm">{featured[0].categoryLabel}</span>
                </div>
                <div className="relative z-10 p-6 lg:p-8">
                  <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Clock size={11} /> {featured[0].date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><BookOpen size={11} /> {featured[0].readTime} lectura</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><TrendingUp size={11} /> Destacado</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-display mb-4 leading-snug group-hover:text-primary transition-colors duration-300">{featured[0].title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-2">{featured[0].excerpt}</p>
                  <p className="text-sm text-muted-foreground/70 leading-relaxed mb-5 max-w-lg">Descubre las mejores prácticas y recomendaciones que pueden transformar la manera en que tu empresa opera y crece en el mercado actual.</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-300">Leer artículo <ArrowRight size={14} /></span>
                </div>
              </motion.div>
            )}

            {/* ── Secondary articles (2/5 width, stacked) ── */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {featured.slice(1, 3).map((article, i) => (
                <motion.div
                  key={article.id}
                  {...fade(0.15 + i * 0.1)}
                  className="group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.12)] hover:-translate-y-1.5 flex-1"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="relative h-40 overflow-hidden">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <span className="absolute top-3 left-3 text-[8px] font-semibold uppercase tracking-wider text-white px-2 py-0.5 rounded-full bg-primary/80 backdrop-blur-sm">{article.categoryLabel}</span>
                  </div>
                  <div className="relative z-10 p-5">
                    <div className="flex items-center gap-3 text-[10px] text-muted-foreground mb-2">
                      <span className="flex items-center gap-1"><Clock size={10} /> {article.date}</span>
                      <span>·</span>
                      <span>{article.readTime} lectura</span>
                    </div>
                    <h3 className="text-lg font-bold font-display mb-2 leading-snug group-hover:text-primary transition-colors duration-300">{article.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">{article.excerpt}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-300">Leer artículo <ArrowRight size={14} /></span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CATEGORIES + ARTICLES GRID ═══ */}
      <section id="articulos" className="py-20 surface-sunken relative">
        <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display mb-6">
              Explora por <span className="gradient-text">categoría</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeCategory === cat.value
                      ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_-5px_hsl(var(--primary)/0.4)]"
                      : "bg-card border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  <cat.icon size={14} />
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filtered.length > 0 ? (
              filtered.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))
            ) : (
              <motion.div {...fade()} className="col-span-full text-center py-16">
                <Search size={40} className="text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground">No hay artículos en esta categoría aún. Pronto publicaremos nuevo contenido.</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ SOLUCIONES ═══ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-mesh pointer-events-none opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <Layers size={12} className="text-primary" />
              Soluciones
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display mb-3">
              Explora nuestras <span className="gradient-text">soluciones</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Del conocimiento a la acción. Implementa las estrategias que necesitas con nuestro equipo.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { to: "/crm-empresas", icon: Users, title: "CRM para Empresas", desc: "Implementación de CRM y automatización de ventas para escalar tu operación comercial." },
              { to: "/software", icon: Server, title: "Software Empresarial", desc: "Desarrollo de software a medida que digitaliza y optimiza los procesos de tu empresa." },
              { to: "/marketing-digital-cancun", icon: TrendingUp, title: "Marketing Digital", desc: "Estrategias de marketing digital basadas en datos para generar leads y escalar ingresos." },
            ].map((s, i) => (
              <motion.div key={s.to} {...fade(i * 0.1)}>
                <Link
                  to={s.to}
                  className="group block rounded-2xl border border-border bg-card p-7 hover:border-primary/30 hover:shadow-[0_20px_60px_-12px_hsl(var(--primary)/0.15)] hover:-translate-y-1.5 transition-all duration-500 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 group-hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.3)] transition-all duration-500">
                    <s.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-bold font-display mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-300">
                    Conocer más <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="py-24 relative overflow-hidden" style={{ background: "var(--gradient-cta)" }}>
        <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[200px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
          <motion.div {...fade()}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display mb-6 text-white">
              ¿Listo para <span className="gradient-text">crecer</span>?
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
              Hablemos sobre cómo podemos ayudarte a implementar estas estrategias en tu empresa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gradient" size="lg" asChild>
                <a href="/contacto">Hablar con un especialista <ArrowRight size={16} className="ml-2" /></a>
              </Button>
              <Button size="lg" className="bg-white/10 hover:bg-white hover:text-foreground text-white border border-white/20 transition-all" asChild>
                <a href="https://wa.me/529983513337" target="_blank" rel="noopener noreferrer">WhatsApp <ArrowRight size={16} className="ml-2" /></a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <MarqueeText />
      <Footer />
    </div>
  );
};

export default BlogPage;
