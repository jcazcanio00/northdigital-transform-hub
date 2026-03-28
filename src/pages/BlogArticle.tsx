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
import { type Article, type ArticleContent, getArticleBySlug } from "@/data/articles";

/* ─── Fade helper ─── */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay },
});

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

/* ─── Render Content Block ─── */
function ContentBlock({ block }: { block: ArticleContent }) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-base sm:text-lg leading-[1.85] text-muted-foreground mb-7">{block.text}</p>;
    case "h2":
      return <h2 className="font-display text-2xl sm:text-[1.85rem] font-bold text-foreground mt-16 mb-6 tracking-tight leading-tight">{block.text}</h2>;
    case "h3":
      return <h3 className="font-display text-xl sm:text-[1.4rem] font-semibold text-foreground mt-12 mb-4 tracking-tight leading-snug">{block.text}</h3>;
    case "quote":
      return (
        <blockquote className="my-8 py-5 px-6 border-l-4 border-primary/40 bg-primary/[0.04] rounded-r-xl">
          <p className="text-lg sm:text-xl italic leading-relaxed text-foreground/85 font-medium">"{block.text}"</p>
        </blockquote>
      );
    case "list":
      return (
        <ul className="my-7 space-y-3.5 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base sm:text-lg leading-[1.75] text-muted-foreground">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "ordered-list":
      return (
        <ol className="my-7 space-y-3.5 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base sm:text-lg leading-[1.75] text-muted-foreground">
              <span className="mt-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">{i + 1}</span>
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
          <img src={block.src} alt={block.alt} className="w-full rounded-xl shadow-md border border-border/30" loading="lazy" />
          {block.caption && <figcaption className="mt-3 text-center text-sm text-muted-foreground/70">{block.caption}</figcaption>}
        </figure>
      );
    case "table":
      return (
        <div className="my-8 overflow-x-auto rounded-xl border border-border/60 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                {block.headers.map((h, i) => (
                  <th key={i} className="px-5 py-3.5 text-left font-semibold text-foreground whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-b border-border/40 last:border-0 hover:bg-muted/30 transition-colors">
                  {row.map((cell, j) => (
                    <td key={j} className={`px-5 py-3.5 text-muted-foreground ${j === 0 ? "font-medium text-foreground" : ""}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

/* ─── Article Meta / Tags ─── */
function ArticleMetaSection({ article }: { article: Article }) {
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
              Convierte este conocimiento en resultados reales
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Implementamos CRM, automatización y estrategias digitales para empresas que quieren crecer con tecnología.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/contacto">Solicitar diagnóstico<ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
              <Button variant="gradient-outline" size="lg" asChild>
                <a href="https://wa.me/529983513337?text=Hola%2C%20quiero%20más%20información" target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("blog_article_final")}>
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

/* ─── Main Article Page ─── */
export default function BlogArticle({ slug: propSlug }: { slug?: string }) {
  // Use prop slug or extract from URL path
  const slug = propSlug || window.location.pathname.replace(/^\/blog\//, "").replace(/\/$/, "") || "";
  const article = getArticleBySlug(slug) || getArticleBySlug(window.location.pathname.replace(/^\//, "").replace(/\/$/, ""));

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!article) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">Artículo no encontrado</h1>
            <p className="text-muted-foreground mb-6">El artículo que buscas no existe o fue removido.</p>
            <Button variant="gradient" asChild><Link to="/blog">Volver al blog</Link></Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const articleUrl = `https://northmkt.com.mx${article.url}`;

  return (
    <>
      <SEO title={article.seoTitle} description={article.excerpt} image={article.image} url={articleUrl} keywords={article.tags?.join(", ")} ogType="article" />
      <Header />
      <main className="min-h-screen">
        {/* ─── Hero ─── */}
        <section className="pt-6 sm:pt-20 pb-10 sm:pb-14">
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
                  <img src="/favicon.webp" alt="North" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{article.author}</p>
                  <p className="text-xs text-muted-foreground">{article.authorRole}</p>
                </div>
              </div>
              <button onClick={() => navigator.share?.({ title: article.title, url: window.location.href }).catch(() => {})} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
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
            {article.content.map((block, i) => (
              <motion.div key={i} {...fade(0)}><ContentBlock block={block} /></motion.div>
            ))}
            <ArticleMetaSection article={article} />
          </div>
        </article>

        <div className="max-w-3xl mx-auto px-6"><hr className="section-divider" /></div>
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
