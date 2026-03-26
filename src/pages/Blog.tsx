import { memo, useEffect, useMemo, useState } from "react";
import SEO from "@/components/SEO";
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
import BlogReveal from "@/components/blog/BlogReveal";
import { getArticlesMeta, getFeaturedArticles, getExtendedExcerpt, type Article, type ArticleMeta } from "@/data/articles";

type BlogCardArticle = Article | ArticleMeta;

const sortArticlesByDate = <T extends { date: string }>(items: T[]) =>
  [...items].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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

const blogSolutions = [
  { to: "/crm-empresas", icon: Users, title: "CRM para Empresas", desc: "Implementación de CRM y automatización de ventas para escalar tu operación comercial." },
  { to: "/software", icon: Server, title: "Software Empresarial", desc: "Desarrollo de software a medida que digitaliza y optimiza los procesos de tu empresa." },
  { to: "/marketing-digital-cancun", icon: TrendingUp, title: "Marketing Digital", desc: "Estrategias de marketing digital basadas en datos para generar leads y escalar ingresos." },
] as const;

/* ─── Components ─── */
const ArticleCard = memo(({ article }: { article: ArticleMeta }) => (
  <Link to={article.url} className="block">
    <BlogReveal delay={0.05}>
      <div className="group relative transform-gpu h-full min-h-[360px] rounded-2xl border border-border bg-card overflow-hidden transition-[transform,border-color,box-shadow] duration-500 hover:border-primary/30 hover:shadow-[0_20px_60px_-12px_hsl(var(--primary)/0.15)] hover:-translate-y-1.5 blog-card-surface">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative aspect-[16/9] overflow-hidden">
          <img src={article.image} alt={article.title} width={400} height={225} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <span className="absolute top-3 left-3 text-[8px] font-semibold uppercase tracking-wider text-white px-2 py-0.5 rounded-full bg-primary/80 backdrop-blur-sm">{article.categoryLabel}</span>
        </div>
        <div className="relative z-10 flex min-h-[154px] flex-col p-5">
          <div className="flex items-center gap-3 text-[10px] text-muted-foreground mb-2.5">
            <span className="flex items-center gap-1"><Clock size={10} /> {article.date}</span>
            <span>·</span>
            <span>{article.readTime} lectura</span>
          </div>
          <h3 className="text-base font-bold font-display mb-2 leading-snug group-hover:text-primary transition-colors duration-300">{article.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
          <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-[gap] duration-300 group-hover:gap-2.5">Leer más <ChevronRight size={14} /></span>
        </div>
      </div>
    </BlogReveal>
  </Link>
));

const FeaturedPrimaryCard = memo(({ article, excerpt }: { article: BlogCardArticle; excerpt: string }) => (
  <Link to={article.url} className="lg:col-span-3 block">
    <BlogReveal delay={0.1}>
      <div className="group relative transform-gpu rounded-2xl border border-border bg-card overflow-hidden transition-[transform,border-color,box-shadow] duration-500 hover:border-primary/30 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.12)] hover:-translate-y-2 h-full blog-card-surface">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="relative aspect-[16/9] lg:aspect-[2/1] overflow-hidden">
          <img src={article.image} alt={article.title} width={800} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="eager" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <span className="absolute top-4 left-4 text-[9px] font-semibold uppercase tracking-wider text-white px-2.5 py-1 rounded-full bg-primary/80 backdrop-blur-sm">{article.categoryLabel}</span>
        </div>
        <div className="relative z-10 flex min-h-[224px] flex-col p-6 lg:p-8">
          <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-3">
            <span className="flex items-center gap-1"><Clock size={11} /> {article.date}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><BookOpen size={11} /> {article.readTime} lectura</span>
            <span>·</span>
            <span className="flex items-center gap-1"><TrendingUp size={11} /> Destacado</span>
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-display mb-4 leading-snug group-hover:text-primary transition-colors duration-300">{article.title}</h3>
          <p className="text-base text-muted-foreground leading-relaxed mb-5 line-clamp-3 lg:line-clamp-4">{excerpt}</p>
          <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-[gap] duration-300 group-hover:gap-2.5">Leer artículo <ArrowRight size={14} /></span>
        </div>
      </div>
    </BlogReveal>
  </Link>
));

const FeaturedSecondaryCard = memo(({ article, delay }: { article: BlogCardArticle; delay: number }) => (
  <Link to={article.url} className="flex-1 block">
    <BlogReveal delay={delay}>
      <div className="group relative transform-gpu rounded-2xl border border-border bg-card overflow-hidden transition-[transform,border-color,box-shadow] duration-500 hover:border-primary/30 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.12)] hover:-translate-y-1.5 h-full blog-card-surface">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="relative aspect-[16/9] overflow-hidden">
          <img src={article.image} alt={article.title} width={400} height={225} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <span className="absolute top-3 left-3 text-[8px] font-semibold uppercase tracking-wider text-white px-2 py-0.5 rounded-full bg-primary/80 backdrop-blur-sm">{article.categoryLabel}</span>
        </div>
        <div className="relative z-10 flex min-h-[168px] flex-col p-5">
          <div className="flex items-center gap-3 text-[10px] text-muted-foreground mb-2">
            <span className="flex items-center gap-1"><Clock size={10} /> {article.date}</span>
            <span>·</span>
            <span>{article.readTime} lectura</span>
          </div>
          <h3 className="text-lg font-bold font-display mb-2 leading-snug group-hover:text-primary transition-colors duration-300">{article.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">{article.excerpt}</p>
          <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-[gap] duration-300 group-hover:gap-2.5">Leer artículo <ArrowRight size={14} /></span>
        </div>
      </div>
    </BlogReveal>
  </Link>
));

const SolutionCard = memo(({ solution, delay }: { solution: (typeof blogSolutions)[number]; delay: number }) => (
  <BlogReveal delay={delay}>
    <Link to={solution.to} className="group block transform-gpu rounded-2xl border border-border bg-card p-7 hover:border-primary/30 hover:shadow-[0_20px_60px_-12px_hsl(var(--primary)/0.15)] hover:-translate-y-1.5 transition-[transform,border-color,box-shadow] duration-500 h-full blog-card-surface">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 group-hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.3)] transition-[background-color,box-shadow] duration-500">
        <solution.icon size={22} className="text-primary" />
      </div>
      <h3 className="font-bold font-display mb-2 group-hover:text-primary transition-colors">{solution.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{solution.desc}</p>
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-[gap] duration-300 group-hover:gap-2.5">Conocer más <ArrowRight size={14} /></span>
    </Link>
  </BlogReveal>
));

/* ─── Main Page ─── */
const BlogPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [activeCategory, setActiveCategory] = useState("all");

  const allArticles = useMemo(() => sortArticlesByDate(getArticlesMeta()), []);
  const featured = useMemo(() => sortArticlesByDate(getFeaturedArticles()), []);
  const featuredExcerpt = useMemo(() => (featured[0] ? getExtendedExcerpt(featured[0]) : ""), [featured]);
  const filtered = useMemo(
    () => activeCategory === "all" ? allArticles : allArticles.filter((a) => a.category === activeCategory),
    [activeCategory, allArticles]
  );

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
      <section className="pt-6 md:pt-20 pb-10 md:pb-16 relative min-h-[280px] md:min-h-[360px]">
        <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
          <BlogReveal>
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
          </BlogReveal>
        </div>
      </section>

      {/* ═══ TOPIC MARQUEE ═══ */}
      <div className="relative flex min-h-[56px] items-center py-4 overflow-hidden select-none pointer-events-none border-y border-border/30 bg-muted/30">
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
          <BlogReveal className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/15 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Selección recomendada
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
              Artículos <span className="gradient-text">destacados</span>
            </h2>
          </BlogReveal>

          {/* Editorial split layout */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* ── Primary article (3/5 width) ── */}
            {featured[0] && (
              <FeaturedPrimaryCard article={featured[0]} excerpt={featuredExcerpt} />
            )}

            {/* ── Secondary articles (2/5 width, stacked) ── */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {featured.slice(1, 3).map((article, i) => (
                <FeaturedSecondaryCard key={article.slug} article={article} delay={0.15 + i * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CATEGORIES + ARTICLES GRID ═══ */}
      <section id="articulos" className="py-20 surface-sunken relative">
        <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <BlogReveal className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display mb-6">
              Explora por <span className="gradient-text">categoría</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-[background-color,border-color,color,box-shadow] duration-300 border ${
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
          </BlogReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filtered.length > 0 ? (
              filtered.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))
            ) : (
              <BlogReveal className="col-span-full text-center py-16">
                <Search size={40} className="text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground">No hay artículos en esta categoría aún. Pronto publicaremos nuevo contenido.</p>
              </BlogReveal>
            )}
          </div>
        </div>
      </section>

      {/* ═══ SOLUCIONES ═══ */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-mesh pointer-events-none opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <BlogReveal className="text-center mb-12">
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
          </BlogReveal>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {blogSolutions.map((solution, i) => (
              <SolutionCard key={solution.to} solution={solution} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="py-24 relative overflow-hidden" style={{ background: "var(--gradient-cta)" }}>
        <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[60px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
          <BlogReveal>
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
          </BlogReveal>
        </div>
      </section>

      <MarqueeText />
      <Footer />
    </div>
  );
};

export default BlogPage;
