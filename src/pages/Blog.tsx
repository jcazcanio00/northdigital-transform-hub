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
import { getArticlesMeta, getFeaturedArticles, getExtendedExcerpt, type ArticleMeta } from "@/data/articles";

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

/* ─── JSON-LD ─── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Blog de North",
  "description": "Insights, estrategias y guías prácticas sobre marketing digital, automatización, CRM y tecnología para empresas.",
  "url": "https://northmkt.com.mx/blog",
  "publisher": {
    "@type": "Organization",
    "name": "North",
    "url": "https://northmkt.com.mx",
  },
};

/* ─── Components ─── */
const ArticleCard = ({ article }: { article: ArticleMeta }) => (
  <Link to={article.url} className="block">
    <motion.div
      {...fade(0.05)}
      className="group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_60px_-12px_hsl(var(--primary)/0.15)] hover:-translate-y-1.5"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative h-44 overflow-hidden">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <span className="absolute top-3 left-3 text-[8px] font-semibold uppercase tracking-wider text-white px-2 py-0.5 rounded-full bg-primary/80 backdrop-blur-sm">{article.categoryLabel}</span>
      </div>
      <div className="relative z-10 p-5">
        <div className="flex items-center gap-3 text-[10px] text-muted-foreground mb-2.5">
          <span className="flex items-center gap-1"><Clock size={10} /> {article.date}</span>
          <span>·</span>
          <span>{article.readTime} lectura</span>
        </div>
        <h3 className="text-base font-bold font-display mb-2 leading-snug group-hover:text-primary transition-colors duration-300">{article.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-300">Leer más <ChevronRight size={14} /></span>
      </div>
    </motion.div>
  </Link>
);

/* ─── Main Page ─── */
const BlogPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [activeCategory, setActiveCategory] = useState("all");

  const sortArticlesByDate = <T extends { date: string }>(items: T[]) =>
    [...items].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const allArticles = sortArticlesByDate(getArticlesMeta());
  const featured = sortArticlesByDate(getFeaturedArticles());
  const filtered = activeCategory === "all"
    ? allArticles
    : allArticles.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO
        title="Blog de Marketing, CRM y Tecnología | North"
        description="Aprende sobre marketing digital, CRM, automatización y tecnología para hacer crecer tu empresa."
        url="https://northmkt.com.mx/blog"
        keywords="blog marketing digital, blog crm, blog tecnologia empresarial, marketing digital cancun blog"
        jsonLd={jsonLd}
      />
      <Header />

      {/* ═══ HERO ═══ */}
      <section className="pt-6 md:pt-20 pb-10 md:pb-16 relative">
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
              Blog de Tecnología y{" "}
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
              <Link to={featured[0].url} className="lg:col-span-3 block">
                <motion.div
                  {...fade(0.1)}
                  className="group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.12)] hover:-translate-y-2 h-full"
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
                    <p className="text-base text-muted-foreground leading-relaxed mb-5">{featured[0].excerpt}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-300">Leer artículo <ArrowRight size={14} /></span>
                  </div>
                </motion.div>
              </Link>
            )}

            {/* ── Secondary articles (2/5 width, stacked) ── */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {featured.slice(1, 3).map((article, i) => (
                <Link key={article.slug} to={article.url} className="flex-1 block">
                  <motion.div
                    {...fade(0.15 + i * 0.1)}
                    className="group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.12)] hover:-translate-y-1.5 h-full"
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
                </Link>
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
                <ArticleCard key={article.slug} article={article} />
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
                <Link to={s.to} className="group block rounded-2xl border border-border bg-card p-7 hover:border-primary/30 hover:shadow-[0_20px_60px_-12px_hsl(var(--primary)/0.15)] hover:-translate-y-1.5 transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 group-hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.3)] transition-all duration-500">
                    <s.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-bold font-display mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-300">Conocer más <ArrowRight size={14} /></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="py-24 relative overflow-hidden" style={{ background: "var(--gradient-cta)" }}>
        <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[60px] pointer-events-none" />
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
