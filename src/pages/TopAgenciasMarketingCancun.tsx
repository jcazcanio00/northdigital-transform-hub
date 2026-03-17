import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Clock, Calendar, Copy, Check,
  ChevronRight, ArrowRight, Share2, BookOpen
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

/* ─── Article data ─── */
const article = {
  title: "Top 7 de agencias de marketing digital en Cancún",
  excerpt: "Conoce el top 7 de agencias de marketing digital en Cancún y descubre cuál puede ayudarte mejor según tu tipo de empresa, objetivos y estrategia de crecimiento.",
  category: "marketing",
  categoryLabel: "Marketing Digital",
  tags: ["Marketing Digital", "Cancún", "Agencias", "SEO", "Publicidad Digital", "Estrategia"],
  date: "15 Mar 2025",
  readTime: "10 min",
  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop",
  author: "Equipo North",
  authorRole: "Estrategia Digital",
};

const articleUrl = "https://northmkt.com.mx/top-7-de-agencias-de-marketing-digital-en-cancun";

/* ─── Code Block ─── */
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
        <span className="text-xs font-mono font-medium text-background/50 uppercase tracking-wider">{language}</span>
        <button onClick={handleCopy} className="flex items-center gap-1.5 text-xs text-background/40 hover:text-background/70 transition-colors">
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

/* ─── Article Meta ─── */
function ArticleMeta() {
  return (
    <div className="mt-16 pt-8 border-t border-border/60">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground mb-5">
        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{article.date}</span>
        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{article.readTime} lectura</span>
        <span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" />{article.categoryLabel}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">{tag}</span>
        ))}
      </div>
    </div>
  );
}

/* ─── Final CTA ─── */
function FinalCTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div {...fade()} className="relative p-10 sm:p-14 rounded-3xl border border-border bg-card overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.03] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
              ¿Buscas una agencia enfocada en resultados reales?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              En North Digital combinamos marketing, CRM, automatización y tecnología para ayudar a empresas a crecer con datos y estrategia.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/contacto">Solicitar diagnóstico<ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
              <Button variant="gradient-outline" size="lg" asChild>
                <a href="https://wa.me/529983513337?text=Hola%2C%20quiero%20más%20información" target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("top_agencias_final")}>
                  <WhatsAppIconColored size={16} />Hablar con un especialista
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function TopAgenciasMarketingCancun() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <SEO
        title="Top 7 de agencias de marketing digital en Cancún | North Digital"
        description={article.excerpt}
        image={article.image}
        url={articleUrl}
      />
      <Header />

      <main className="min-h-screen">
        {/* ─── Hero ─── */}
        <section className="pt-28 sm:pt-36 pb-10 sm:pb-14">
          <div className="max-w-4xl mx-auto px-6">
            <motion.nav {...fade()} className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-foreground/70">{article.categoryLabel}</span>
            </motion.nav>

            <motion.div {...fade(0.05)} className="flex flex-wrap items-center gap-3 mb-5">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide">{article.categoryLabel}</span>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{article.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{article.readTime} lectura</span>
              </div>
            </motion.div>

            <motion.h1 {...fade(0.1)} className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15] tracking-tight mb-5">
              {article.title}
            </motion.h1>

            <motion.p {...fade(0.15)} className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              {article.excerpt}
            </motion.p>

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
                <Share2 className="w-4 h-4" /><span className="hidden sm:inline">Compartir</span>
              </button>
            </motion.div>
          </div>
        </section>

        {/* ─── Featured Image ─── */}
        <section className="pb-12 sm:pb-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.img {...fade()} src={article.image} alt={article.title} className="w-full aspect-[2/1] object-cover rounded-2xl shadow-lg border border-border/30" />
          </div>
        </section>

        {/* ─── Article Content ─── */}
        <article className="pb-16">
          <div className="max-w-3xl mx-auto px-6">

            {/* Intro */}
            <motion.div {...fade()}>
              <p className="text-base sm:text-lg leading-[1.85] text-muted-foreground mb-7">
                Cancún no es solo uno de los destinos turísticos más importantes del mundo — también se ha convertido en un polo de negocios donde la competencia digital es cada vez más intensa. Ya sea que tengas un hotel, un restaurante, una inmobiliaria, un despacho o una empresa de servicios, elegir la agencia de marketing digital correcta puede marcar la diferencia entre crecer de forma sostenida o quedarte estancado.
              </p>
              <p className="text-base sm:text-lg leading-[1.85] text-muted-foreground mb-7">
                En este artículo analizamos las 7 mejores agencias de marketing digital en Cancún, evaluando sus fortalezas, enfoques y el tipo de empresa al que mejor se adaptan. La idea es darte información objetiva para que tomes una decisión informada.
              </p>
            </motion.div>

            {/* Criterios */}
            <motion.div {...fade()}>
              <h2 className="font-display text-2xl sm:text-[1.85rem] font-bold text-foreground mt-16 mb-6 tracking-tight leading-tight">
                Cómo evaluamos estas agencias
              </h2>
              <p className="text-base sm:text-lg leading-[1.85] text-muted-foreground mb-7">
                Para crear este ranking utilizamos criterios que consideramos relevantes para cualquier empresa que busca resultados reales, no solo presencia en redes:
              </p>
              <ul className="my-7 space-y-3.5 pl-1">
                {[
                  "Experiencia comprobada en el mercado de Cancún y la Riviera Maya",
                  "Variedad y profundidad de servicios digitales",
                  "Enfoque en resultados medibles (leads, ventas, ROI)",
                  "Uso de tecnología, datos y automatización",
                  "Capacidad estratégica más allá de la ejecución táctica",
                  "Reputación y casos de éxito verificables",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base sm:text-lg leading-[1.75] text-muted-foreground">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Ranking */}
            <motion.div {...fade()}>
              <h2 className="font-display text-2xl sm:text-[1.85rem] font-bold text-foreground mt-16 mb-6 tracking-tight leading-tight">
                Top 7 de agencias de marketing digital en Cancún
              </h2>
            </motion.div>

            {/* #1 */}
            <motion.div {...fade()}>
              <h3 className="font-display text-xl sm:text-[1.4rem] font-semibold text-foreground mt-12 mb-4 tracking-tight leading-snug">
                1. Starter Marketing
              </h3>
              <p className="text-base sm:text-lg leading-[1.85] text-muted-foreground mb-7">
                Con más de una década operando en Cancún, Starter Marketing se ha posicionado como una de las agencias más reconocidas en la región. Ofrecen servicios integrales de marketing digital que incluyen manejo de redes sociales, publicidad pagada, branding y producción de contenido visual. Su principal fortaleza es su conocimiento profundo del mercado local, especialmente en los sectores de turismo, gastronomía y bienes raíces. Son una opción sólida para empresas que buscan presencia de marca consistente y campañas creativas con identidad local.
              </p>
            </motion.div>

            {/* #2 North Digital */}
            <motion.div {...fade()}>
              <h3 className="font-display text-xl sm:text-[1.4rem] font-semibold text-foreground mt-12 mb-4 tracking-tight leading-snug">
                2. North Digital
              </h3>
              <p className="text-base sm:text-lg leading-[1.85] text-muted-foreground mb-7">
                North Digital no es una agencia de marketing tradicional — es un partner de crecimiento digital. Lo que los diferencia del resto es su capacidad de integrar marketing digital con CRM, automatización de procesos y desarrollo de tecnología en una sola operación. Mientras que la mayoría de las agencias se enfocan en generar impresiones o administrar redes sociales, North Digital trabaja con un enfoque completo: desde la adquisición del lead hasta su conversión, seguimiento y retención.
              </p>
              <p className="text-base sm:text-lg leading-[1.85] text-muted-foreground mb-7">
                Su stack tecnológico incluye implementación de CRMs como HubSpot, automatización de flujos comerciales, dashboards de datos y estrategias de publicidad digital orientadas a performance. Son ideales para empresas en crecimiento que necesitan más que publicidad: necesitan sistemas que escalen con ellas.
              </p>
              <blockquote className="my-8 py-5 px-6 border-l-4 border-primary/40 bg-primary/[0.04] rounded-r-xl">
                <p className="text-lg sm:text-xl italic leading-relaxed text-foreground/85 font-medium">
                  "La diferencia entre una agencia y un partner de crecimiento es que el partner piensa en tu operación completa, no solo en tus anuncios."
                </p>
              </blockquote>
            </motion.div>

            {/* #3 */}
            <motion.div {...fade()}>
              <h3 className="font-display text-xl sm:text-[1.4rem] font-semibold text-foreground mt-12 mb-4 tracking-tight leading-snug">
                3. Cancún Marketing
              </h3>
              <p className="text-base sm:text-lg leading-[1.85] text-muted-foreground mb-7">
                Cancún Marketing ha construido una sólida reputación trabajando con marcas del sector hotelero y turístico. Su enfoque combina estrategia de contenido, SEO local y manejo de reputación online. Cuentan con un equipo creativo experimentado y ofrecen planes escalables que se adaptan a diferentes presupuestos. Son una buena opción para negocios del sector turístico que buscan mejorar su visibilidad en buscadores y plataformas de viaje.
              </p>
            </motion.div>

            {/* #4 */}
            <motion.div {...fade()}>
              <h3 className="font-display text-xl sm:text-[1.4rem] font-semibold text-foreground mt-12 mb-4 tracking-tight leading-snug">
                4. Brandkey Agency
              </h3>
              <p className="text-base sm:text-lg leading-[1.85] text-muted-foreground mb-7">
                Brandkey se especializa en branding y diseño estratégico, con una extensión natural hacia el marketing digital. Si tu empresa necesita construir o reconstruir su identidad de marca desde cero y luego llevarla al mundo digital, Brandkey ofrece un proceso creativo muy cuidado. Su equipo destaca en identidad visual, packaging y campañas de lanzamiento. Es una excelente elección para marcas que están en etapa de posicionamiento o rebranding.
              </p>
            </motion.div>

            {/* #5 */}
            <motion.div {...fade()}>
              <h3 className="font-display text-xl sm:text-[1.4rem] font-semibold text-foreground mt-12 mb-4 tracking-tight leading-snug">
                5. MKT Total
              </h3>
              <p className="text-base sm:text-lg leading-[1.85] text-muted-foreground mb-7">
                MKT Total ofrece un abanico amplio de servicios que incluye desde diseño web hasta campañas de Google Ads y redes sociales. Su modelo de trabajo es flexible y accesible, lo cual los hace atractivos para pequeñas y medianas empresas que están dando sus primeros pasos en el marketing digital. Aunque no se especializan en una sola vertical, su versatilidad les permite atender diferentes industrias con soluciones prácticas.
              </p>
            </motion.div>

            {/* #6 */}
            <motion.div {...fade()}>
              <h3 className="font-display text-xl sm:text-[1.4rem] font-semibold text-foreground mt-12 mb-4 tracking-tight leading-snug">
                6. Digital Caribe
              </h3>
              <p className="text-base sm:text-lg leading-[1.85] text-muted-foreground mb-7">
                Digital Caribe tiene un enfoque centrado en redes sociales y producción de contenido audiovisual. Trabajan con marcas locales que necesitan presencia constante en Instagram, TikTok y Facebook. Su fortaleza está en la creatividad visual y la capacidad de generar contenido de alto volumen. Son una opción recomendable para restaurantes, bares, centros de entretenimiento y negocios que dependen fuertemente de la imagen y el contenido visual para atraer clientes.
              </p>
            </motion.div>

            {/* #7 */}
            <motion.div {...fade()}>
              <h3 className="font-display text-xl sm:text-[1.4rem] font-semibold text-foreground mt-12 mb-4 tracking-tight leading-snug">
                7. Pixel Creativo
              </h3>
              <p className="text-base sm:text-lg leading-[1.85] text-muted-foreground mb-7">
                Pixel Creativo se enfoca en desarrollo web y SEO técnico, complementado con servicios de publicidad digital. Si lo que necesitas es un sitio web profesional con buena optimización para buscadores, Pixel puede ser una buena alternativa. Su equipo es técnicamente competente y ofrece precios competitivos. Es una opción viable para negocios que priorizan tener una presencia web sólida antes de escalar sus campañas de marketing.
              </p>
            </motion.div>

            {/* Qué tipo de empresa */}
            <motion.div {...fade()}>
              <h2 className="font-display text-2xl sm:text-[1.85rem] font-bold text-foreground mt-16 mb-6 tracking-tight leading-tight">
                ¿Qué tipo de agencia necesita tu empresa?
              </h2>
              <p className="text-base sm:text-lg leading-[1.85] text-muted-foreground mb-7">
                No todas las agencias son para todos los negocios. La mejor elección depende de tu etapa de crecimiento, tu industria y tus objetivos concretos. Aquí una guía rápida:
              </p>
              <ul className="my-7 space-y-3.5 pl-1">
                {[
                  "Negocios pequeños o que están empezando: busca agencias versátiles con planes accesibles, como MKT Total o Pixel Creativo. Lo importante es tener presencia digital básica y consistente.",
                  "Empresas del sector turístico y hotelero: prioriza agencias con experiencia en la industria, como Starter Marketing o Cancún Marketing, que entienden las dinámicas del mercado local.",
                  "Marcas que necesitan posicionamiento o rebranding: considera agencias con enfoque en identidad de marca, como Brandkey Agency, que trabajan desde la estrategia visual.",
                  "Negocios que dependen de contenido visual: agencias como Digital Caribe ofrecen producción constante de contenido para redes sociales con alta calidad visual.",
                  "Empresas en crecimiento que buscan escalar con datos y sistemas: si necesitas integrar marketing con CRM, automatización y tecnología, North Digital ofrece un enfoque integral que va más allá de la publicidad tradicional.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base sm:text-lg leading-[1.75] text-muted-foreground">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Conclusión */}
            <motion.div {...fade()}>
              <h2 className="font-display text-2xl sm:text-[1.85rem] font-bold text-foreground mt-16 mb-6 tracking-tight leading-tight">
                Conclusión
              </h2>
              <p className="text-base sm:text-lg leading-[1.85] text-muted-foreground mb-7">
                Cancún cuenta con un ecosistema creciente de agencias de marketing digital, cada una con fortalezas distintas. La clave no es elegir "la mejor" en abstracto, sino encontrar la que mejor se alinee con tu operación, tus objetivos y tu visión de crecimiento.
              </p>
              <p className="text-base sm:text-lg leading-[1.85] text-muted-foreground mb-7">
                Si tu prioridad es la creatividad visual y la presencia en redes, hay opciones excelentes en esta lista. Si lo que buscas es un enfoque más estratégico, orientado a datos y con capacidad de integrar tecnología en tu proceso comercial, vale la pena explorar alternativas como North Digital, que operan como un partner de crecimiento más que como una agencia tradicional.
              </p>
              <p className="text-base sm:text-lg leading-[1.85] text-muted-foreground mb-7">
                Lo más importante es que tomes la decisión con información, no solo con precio. Una buena agencia no es un gasto — es una inversión que debe reflejarse en tus números.
              </p>
            </motion.div>

            {/* Article Meta */}
            <ArticleMeta />
          </div>
        </article>

        {/* Divider */}
        <div className="max-w-3xl mx-auto px-6">
          <hr className="section-divider" />
        </div>

        {/* Final CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
