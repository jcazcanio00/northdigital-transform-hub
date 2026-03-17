import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import northPin from "@/assets/logo-north-dark-new.webp";
import {
  ArrowLeft, Clock, Calendar, User, BookOpen, Copy, Check,
  ChevronRight, MessageCircle, ArrowRight, Share2, TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { WhatsAppIconColored, trackWhatsAppClick } from "@/components/WhatsAppButton";

/* ─── Fade helper ─── */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay },
});

/* ─── Sample articles (same IDs as Blog.tsx) ─── */
const articlesData: Record<string, {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  categoryLabel: string;
  tags: string[];
  date: string;
  readTime: string;
  image: string;
  author: string;
  authorRole: string;
  content: ArticleContent[];
}> = {
  "1": {
    id: 1,
    title: "Cómo elegir el CRM correcto para tu empresa en 2025",
    excerpt: "Una guía completa para evaluar, comparar e implementar un CRM que realmente se adapte a tu operación comercial y acelere tus ventas.",
    category: "crm",
    categoryLabel: "CRM & Ventas",
    tags: ["CRM", "Ventas", "HubSpot", "Salesforce", "Automatización", "B2B"],
    date: "12 Mar 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    author: "Equipo North",
    authorRole: "Estrategia Digital",
    content: [
      { type: "paragraph", text: "Elegir un CRM no es solo una decisión tecnológica — es una decisión estratégica que impacta directamente tu capacidad de vender, retener clientes y escalar tu operación. En 2025, el mercado de CRMs ha evolucionado significativamente, y las opciones van desde plataformas enterprise hasta soluciones ligeras basadas en IA." },
      { type: "h2", text: "¿Por qué necesitas un CRM en 2025?" },
      { type: "paragraph", text: "Las empresas que implementan un CRM correctamente ven un incremento promedio del 29% en ventas y una mejora del 42% en la retención de clientes. Pero la clave está en elegir el correcto." },
      { type: "quote", text: "Un CRM mal implementado es peor que no tener CRM. La herramienta debe adaptarse a tu proceso, no al revés." },
      { type: "h2", text: "Criterios clave para evaluar un CRM" },
      { type: "paragraph", text: "Antes de comparar precios o funcionalidades, necesitas definir tres cosas fundamentales sobre tu operación:" },
      { type: "list", items: ["Tamaño de tu equipo comercial y volumen de leads mensuales", "Complejidad de tu ciclo de ventas (B2B vs B2C, ticket promedio)", "Integraciones necesarias con tu stack tecnológico actual", "Nivel de personalización requerido en reportes y dashboards", "Presupuesto total incluyendo implementación y capacitación"] },
      { type: "h2", text: "Comparativa de plataformas populares" },
      { type: "paragraph", text: "Analizamos las plataformas más relevantes para empresas en Latinoamérica, considerando precio, soporte en español y facilidad de implementación." },
      { type: "h3", text: "HubSpot CRM" },
      { type: "paragraph", text: "Ideal para empresas en crecimiento que buscan una plataforma todo-en-uno. Su versión gratuita es sorprendentemente completa, y la curva de aprendizaje es baja." },
      { type: "h3", text: "Salesforce" },
      { type: "paragraph", text: "La opción enterprise por excelencia. Extremadamente personalizable pero requiere inversión significativa en implementación y administración." },
      { type: "ordered-list", items: ["Define tu proceso de ventas actual", "Identifica los puntos de fricción", "Evalúa 3-5 opciones con demos personalizadas", "Implementa con un piloto de 30 días", "Mide y optimiza basándote en datos"] },
      { type: "h2", text: "Integración con tu stack tecnológico" },
      { type: "paragraph", text: "Un CRM moderno debe conectarse nativamente con tus herramientas existentes. Aquí un ejemplo de cómo se ve una integración típica con webhook:" },
      { type: "code", language: "javascript", code: `// Webhook: Nuevo lead desde formulario web
const handleNewLead = async (formData) => {
  const lead = {
    name: formData.name,
    email: formData.email,
    source: 'website',
    score: calculateLeadScore(formData),
    assignedTo: getNextSalesRep()
  };
  
  // Crear contacto en CRM
  const contact = await crm.contacts.create(lead);
  
  // Disparar automatización
  await automation.trigger('new-lead', {
    contactId: contact.id,
    sequence: 'welcome-nurture'
  });
  
  return contact;
};` },
      { type: "h2", text: "Errores comunes al implementar un CRM" },
      { type: "paragraph", text: "Después de implementar CRMs para decenas de empresas, estos son los errores que vemos con más frecuencia:" },
      { type: "list", items: ["No mapear el proceso de ventas antes de configurar la herramienta", "Intentar migrar todo de golpe en lugar de hacer una transición gradual", "No capacitar al equipo adecuadamente", "Elegir basándose solo en precio sin considerar el costo total de ownership", "No definir KPIs claros desde el inicio"] },
      { type: "quote", text: "La tecnología es solo el 30% del éxito. El otro 70% es proceso, adopción y mejora continua." },
      { type: "h2", text: "Métricas para medir el éxito" },
      { type: "paragraph", text: "Una vez implementado, necesitas trackear estas métricas para asegurarte de que tu inversión está dando resultados. Te recomendamos crear un dashboard con las siguientes KPIs:" },
      { type: "code", language: "json", code: `{
  "kpis": {
    "adoption_rate": "% del equipo usando el CRM diariamente",
    "data_quality": "% de contactos con datos completos",
    "pipeline_velocity": "Tiempo promedio de lead a cliente",
    "conversion_rate": "% de leads que se convierten en clientes",
    "roi": "Ingresos generados vs costo del CRM"
  }
}` },
      { type: "paragraph", text: "Recuerda: un CRM es una inversión a largo plazo. Dale al menos 90 días antes de evaluar resultados definitivos, y asegúrate de tener un proceso de mejora continua establecido." },
    ],
  },
};

/* ─── Content types ─── */
type ArticleContent =
  | { type: "paragraph"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "ordered-list"; items: string[] }
  | { type: "code"; language: string; code: string }
  | { type: "image"; src: string; alt: string; caption?: string };

/* ─── Code Block Component ─── */
function CodeBlock({ language, code }: { language: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-xl border border-border/60 overflow-hidden bg-foreground shadow-lg">
      <div className="flex items-center justify-between px-4 py-2.5 bg-foreground/90 border-b border-background/5">
        <span className="text-xs font-mono font-medium text-background/50 uppercase tracking-wider">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-background/40 hover:text-background/70 transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>
      <pre className="p-5 overflow-x-auto text-sm leading-relaxed">
        <code className="font-mono text-accent">{code}</code>
      </pre>
    </div>
  );
}

/* ─── Render Content Block ─── */
function ContentBlock({ block }: { block: ArticleContent }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-base sm:text-lg leading-[1.85] text-muted-foreground mb-7">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2 className="font-display text-2xl sm:text-[1.85rem] font-bold text-foreground mt-16 mb-6 tracking-tight leading-tight">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="font-display text-xl sm:text-[1.4rem] font-semibold text-foreground mt-12 mb-4 tracking-tight leading-snug">
          {block.text}
        </h3>
      );
    case "quote":
      return (
        <blockquote className="my-8 py-5 px-6 border-l-4 border-primary/40 bg-primary/[0.04] rounded-r-xl">
          <p className="text-lg sm:text-xl italic leading-relaxed text-foreground/85 font-medium">
            "{block.text}"
          </p>
        </blockquote>
      );
    case "list":
      return (
        <ul className="my-6 space-y-3 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base sm:text-lg leading-[1.7] text-muted-foreground">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "ordered-list":
      return (
        <ol className="my-6 space-y-3 pl-1 counter-reset-list">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base sm:text-lg leading-[1.7] text-muted-foreground">
              <span className="mt-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      );
    case "code":
      return <CodeBlock language={block.language} code={block.code} />;
    case "image":
      return (
        <figure className="my-10">
          <img
            src={block.src}
            alt={block.alt}
            className="w-full rounded-xl shadow-md border border-border/30"
            loading="lazy"
          />
          {block.caption && (
            <figcaption className="mt-3 text-center text-sm text-muted-foreground/70">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    default:
      return null;
  }
}

/* ─── Inline CTA ─── */
function InlineCTA() {
  return (
    <div className="my-12 p-8 rounded-2xl border border-primary/15 bg-primary/[0.03] text-center">
      <p className="text-lg sm:text-xl font-semibold text-foreground mb-2">
        ¿Quieres implementar esto en tu empresa?
      </p>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        Te ayudamos a elegir e implementar la solución perfecta para tu operación.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Button variant="gradient" size="lg" asChild>
          <Link to="/contacto">
            Solicitar diagnóstico
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
        <Button variant="gradient-outline" size="lg" asChild>
          <a
            href="https://wa.me/529983513337?text=Hola%2C%20quiero%20más%20información"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("blog_article_inline")}
          >
            <WhatsAppIconColored size={16} />
            Hablar por WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}

/* ─── Final CTA ─── */
function FinalCTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          {...fade()}
          className="relative p-10 sm:p-14 rounded-3xl border border-border bg-card overflow-hidden text-center"
        >
          {/* subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.03] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Convierte este conocimiento en resultados reales
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Implementamos CRM, automatización y estrategias digitales para empresas que quieren crecer con tecnología.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/contacto">
                  Solicitar diagnóstico
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button variant="gradient-outline" size="lg" asChild>
                <a
                  href="https://wa.me/529983513337?text=Hola%2C%20quiero%20más%20información"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("blog_article_final")}
                >
                  <WhatsAppIconColored size={16} />
                  Hablar con un especialista
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Main Article Page ─── */
export default function BlogArticle() {
  const { id } = useParams<{ id: string }>();
  const article = id ? articlesData[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">Artículo no encontrado</h1>
            <p className="text-muted-foreground mb-6">El artículo que buscas no existe o fue removido.</p>
            <Button variant="gradient" asChild>
              <Link to="/blog">Volver al blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  /* insert inline CTA roughly in the middle of content */
  const midpoint = Math.floor(article.content.length / 2);

  return (
    <>
      <SEO
        title={`${article.title} | North Blog`}
        description={article.excerpt}
        image={article.image}
      />
      <Header />

      <main className="min-h-screen">
        {/* ─── Hero ─── */}
        <section className="pt-28 sm:pt-36 pb-10 sm:pb-14">
          <div className="max-w-4xl mx-auto px-6">
            {/* Breadcrumb */}
            <motion.nav {...fade()} className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-foreground/70">{article.categoryLabel}</span>
            </motion.nav>

            {/* Category + meta */}
            <motion.div {...fade(0.05)} className="flex flex-wrap items-center gap-3 mb-5">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide">
                {article.categoryLabel}
              </span>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime} lectura
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              {...fade(0.1)}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15] tracking-tight mb-5"
            >
              {article.title}
            </motion.h1>

            {/* Excerpt */}
            <motion.p {...fade(0.15)} className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              {article.excerpt}
            </motion.p>

            {/* Author + Share */}
            <motion.div {...fade(0.2)} className="flex items-center justify-between pb-8 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                  <img src="/favicon.webp" alt="North Digital" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{article.author}</p>
                  <p className="text-xs text-muted-foreground">{article.authorRole}</p>
                </div>
              </div>
              <button
                onClick={() => navigator.share?.({ title: article.title, url: window.location.href }).catch(() => {})}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Compartir</span>
              </button>
            </motion.div>
          </div>
        </section>

        {/* ─── Featured Image ─── */}
        <section className="pb-12 sm:pb-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.img
              {...fade()}
              src={article.image}
              alt={article.title}
              className="w-full aspect-[2/1] object-cover rounded-2xl shadow-lg border border-border/30"
            />
          </div>
        </section>

        {/* ─── Article Content ─── */}
        <article className="pb-16">
          <div className="max-w-3xl mx-auto px-6">
            {article.content.map((block, i) => (
              <div key={i}>
                {i === midpoint && <InlineCTA />}
                <motion.div {...fade(0)}>
                  <ContentBlock block={block} />
                </motion.div>
              </div>
            ))}
          </div>
        </article>

        {/* ─── Section divider ─── */}
        <div className="max-w-3xl mx-auto px-6">
          <hr className="section-divider" />
        </div>

        {/* ─── Final CTA ─── */}
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
