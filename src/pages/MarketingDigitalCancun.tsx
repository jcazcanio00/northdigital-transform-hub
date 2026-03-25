import { useEffect } from "react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import {
  Search, Target, BarChart3, TrendingUp, Zap, ArrowRight, ArrowDown,
  MousePointerClick, LineChart, Globe, Eye, Users, DollarSign,
  ChevronRight, Layers, Megaphone,
  PieChart, Gauge, ShoppingCart, FileText, Mail, Repeat,
  Activity, ArrowUpRight, Filter, Percent, MapPin, HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import MarqueeText from "@/components/MarqueeText";
import Footer from "@/components/Footer";
import { WhatsAppHeroButton } from "@/components/WhatsAppButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ─── Fade helper ─── */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.5, delay },
});

/* ─── Growth Dashboard ─── */
const GrowthMockup = () => {
  const funnelData = [
    { stage: "Visitors", value: "84,320", pct: 100, color: "bg-primary" },
    { stage: "Leads", value: "6,218", pct: 74, color: "bg-primary/80" },
    { stage: "MQLs", value: "2,847", pct: 52, color: "bg-accent" },
    { stage: "Opportunities", value: "892", pct: 34, color: "bg-accent/80" },
    { stage: "Closed", value: "247", pct: 18, color: "bg-green-500" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="rounded-2xl border border-border overflow-hidden bg-card shadow-2xl"
    >
      <div className="flex items-center justify-between px-4 py-2.5 bg-muted/50 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          <span className="ml-2 text-[10px] text-muted-foreground font-mono">marketing-analytics.north.dev</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-status-pulse" />
          <span className="text-[8px] text-green-500 font-medium uppercase tracking-wider">Live</span>
        </div>
      </div>

      <div className="p-3 space-y-3">
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: "Revenue", value: "$148K", change: "+24%", icon: DollarSign, color: "text-green-500" },
            { label: "ROAS", value: "5.2x", change: "+1.1x", icon: TrendingUp, color: "text-primary" },
            { label: "Conv. Rate", value: "4.8%", change: "+0.6%", icon: Target, color: "text-accent" },
            { label: "CAC", value: "$32", change: "-18%", icon: Users, color: "text-yellow-500" },
          ].map((m) => (
            <div key={m.label} className="rounded-lg border border-border bg-muted/20 p-2.5">
              <div className="flex items-center justify-between mb-1">
                <m.icon size={11} className={m.color} />
                <span className="text-[8px] text-green-500 font-semibold flex items-center gap-0.5">
                  <ArrowUpRight size={7} />{m.change}
                </span>
              </div>
              <p className="text-base font-bold font-display leading-none">{m.value}</p>
              <p className="text-[7px] text-muted-foreground uppercase tracking-wider mt-1">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-5 gap-2">
          <div className="col-span-3 rounded-lg border border-border p-2.5">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[8px] text-muted-foreground uppercase tracking-wider font-semibold">Monthly Revenue</p>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-[7px] text-muted-foreground"><span className="w-1.5 h-1.5 rounded-sm bg-primary/30" />2024</span>
                <span className="flex items-center gap-1 text-[7px] text-primary font-medium"><span className="w-1.5 h-1.5 rounded-sm bg-primary" />2025</span>
              </div>
            </div>
            <div className="flex items-end gap-[3px] h-20">
              {[
                { prev: 35, curr: 42 }, { prev: 38, curr: 48 }, { prev: 32, curr: 45 },
                { prev: 42, curr: 55 }, { prev: 40, curr: 58 }, { prev: 48, curr: 62 },
                { prev: 45, curr: 65 }, { prev: 52, curr: 72 }, { prev: 50, curr: 68 },
                { prev: 55, curr: 78 }, { prev: 58, curr: 82 }, { prev: 60, curr: 90 },
              ].map((d, i) => (
                <div key={i} className="flex-1 flex gap-[1px] items-end h-full">
                  <div className="flex-1 rounded-t-sm bg-primary/15" style={{ height: `${d.prev}%` }} />
                  <div className="flex-1 rounded-t-sm bg-primary hover:bg-primary/80 transition-colors" style={{ height: `${d.curr}%` }} />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-1">
              {["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"].map((m) => (
                <span key={m} className="text-[6px] text-muted-foreground flex-1 text-center">{m}</span>
              ))}
            </div>
          </div>

          <div className="col-span-2 rounded-lg border border-border p-2.5">
            <p className="text-[8px] text-muted-foreground uppercase tracking-wider font-semibold mb-2">Channel ROAS</p>
            <div className="space-y-2">
              {[
                { name: "Google Ads", roas: "6.1x", pct: 85, color: "bg-primary" },
                { name: "SEO", roas: "12.4x", pct: 100, color: "bg-green-500" },
                { name: "Landing Pages", roas: "4.8x", pct: 68, color: "bg-accent" },
                { name: "Email", roas: "8.2x", pct: 92, color: "bg-yellow-500" },
              ].map((ch) => (
                <div key={ch.name}>
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[8px] text-foreground/70">{ch.name}</span>
                    <span className="text-[8px] font-bold text-foreground">{ch.roas}</span>
                  </div>
                  <div className="h-1 rounded-full bg-muted/50 overflow-hidden">
                    <div className={`h-full rounded-full ${ch.color}`} style={{ width: `${ch.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-border p-2.5">
            <p className="text-[8px] text-muted-foreground uppercase tracking-wider font-semibold mb-2">Conversion Funnel</p>
            <div className="space-y-1">
              {funnelData.map((f) => (
                <div key={f.stage} className="flex items-center gap-2">
                  <div className="w-full max-w-[100px] h-[6px] rounded-full bg-muted/30 overflow-hidden">
                    <div className={`h-full rounded-full ${f.color}`} style={{ width: `${f.pct}%` }} />
                  </div>
                  <span className="text-[8px] font-bold text-foreground shrink-0 w-10 text-right">{f.value}</span>
                  <span className="text-[7px] text-muted-foreground shrink-0">{f.stage}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-border p-2.5">
            <p className="text-[8px] text-muted-foreground uppercase tracking-wider font-semibold mb-2">Performance Feed</p>
            <div className="space-y-1.5">
              {[
                { msg: "SEO: +14 keywords top 3", type: "success" },
                { msg: "Google Ads: CPA ↓ 22%", type: "success" },
                { msg: "Landing B: CVR +1.2%", type: "info" },
                { msg: "Email: 42% open rate", type: "success" },
                { msg: "Retargeting: ROAS 8.4x", type: "info" },
              ].map((l, i) => (
                <div key={i} className="flex items-center gap-1.5 text-[8px]">
                  <span className={`w-1 h-1 rounded-full shrink-0 ${l.type === "success" ? "bg-green-500" : "bg-primary/60"}`} />
                  <span className="text-foreground/70 truncate">{l.msg}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[7px] text-muted-foreground pt-1 border-t border-border/50">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-green-500" /> GA4</span>
            <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-green-500" /> Ads</span>
            <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-green-500" /> CRM</span>
            <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-green-500" /> Tag Mgr</span>
          </div>
          <span className="font-mono">Updated: 2m ago</span>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Data ─── */
const channels = [
  { icon: Search, title: "SEO Estratégico Local", desc: "Posicionamiento orgánico en Google para búsquedas de alto valor en Cancún, Playa del Carmen y Tulum. Dominamos las SERPs locales con arquitectura técnica avanzada.", tag: "Orgánico" },
  { icon: Target, title: "Google Ads & SEM", desc: "Campañas de búsqueda, display y performance max orientadas al mercado de Quintana Roo con optimización de bidding y audiencias locales.", tag: "Paid" },
  { icon: Layers, title: "Landing Pages de Alto Impacto", desc: "Páginas de conversión diseñadas con frameworks CRO, A/B testing y personalización para cada segmento de audiencia en la Riviera Maya.", tag: "Conversión" },
  { icon: LineChart, title: "Analítica y Atribución", desc: "GA4, server-side tracking, modelos de atribución multicanal y dashboards ejecutivos para decisiones basadas en datos.", tag: "Data" },
  { icon: MousePointerClick, title: "CRO & Experimentación", desc: "Programa de experimentación con heatmaps, session recordings, tests A/B multivariados y análisis de embudo.", tag: "Optimización" },
  { icon: Mail, title: "Email & Marketing Automation", desc: "Secuencias de nurturing, lead scoring, segmentación predictiva y workflows que aceleran el pipeline de ventas.", tag: "Automation" },
];

const frameworkSteps = [
  { icon: Megaphone, title: "Adquisición", desc: "SEO local, SEM y canales pagados para captar tráfico cualificado en Cancún y la Riviera Maya.", color: "text-blue-500", metric: "84K visits/mo" },
  { icon: MousePointerClick, title: "Conversión", desc: "Landing pages, CRO y experimentación para convertir visitantes en leads y clientes.", color: "text-green-500", metric: "4.8% CVR" },
  { icon: Repeat, title: "Retención", desc: "Email automation, nurturing y engagement para maximizar el lifetime value del cliente.", color: "text-yellow-500", metric: "42% retention" },
  { icon: TrendingUp, title: "Escala", desc: "Amplificar los canales rentables con modelos predictivos y expansión multicanal.", color: "text-primary", metric: "5.2x ROAS" },
];

const marketingLogos = [
  { name: "Google Ads", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "Google Analytics", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googleanalytics.svg" },
  { name: "Tag Manager", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googletagmanager.svg" },
  { name: "Semrush", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/semrush.svg" },
  { name: "HubSpot", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hubspot.svg" },
  { name: "Mailchimp", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mailchimp.svg" },
  { name: "Hotjar", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hotjar.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/vercel.svg" },
  { name: "Stripe", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/stripe.svg" },
  { name: "Zapier", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zapier.svg" },
  { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
];

const metrics = [
  { icon: DollarSign, title: "ROAS", desc: "Cada peso invertido en pauta genera un retorno medible y optimizado mes a mes para negocios en Cancún y Playa del Carmen.", value: "5.2x", sub: "promedio" },
  { icon: Percent, title: "Tasa de conversión", desc: "Optimización continua de landing pages y embudos para maximizar cada visita de usuarios en la Riviera Maya.", value: "4.8%", sub: "avg. CVR" },
  { icon: Eye, title: "CTR en campañas", desc: "Creativos y copy optimizados que superan benchmarks de industria consistentemente.", value: "+62%", sub: "vs. industry" },
  { icon: Users, title: "Coste por Lead", desc: "Reducción progresiva del CAC mediante optimización de audiencias y bidding en Quintana Roo.", value: "-34%", sub: "reducción" },
  { icon: TrendingUp, title: "Tráfico orgánico", desc: "Crecimiento sostenido de visitas orgánicas para empresas en Cancún, Tulum y Playa del Carmen.", value: "+120%", sub: "YoY growth" },
  { icon: Gauge, title: "Core Web Vitals", desc: "Páginas rápidas que mejoran posicionamiento, Quality Score y experiencia de usuario.", value: "<1.5s", sub: "LCP target" },
];

const useCases = [
  { icon: ShoppingCart, title: "E-commerce & D2C", desc: "Estrategias full-funnel para tiendas online en Cancún: desde adquisición con Google Shopping hasta retención con email y retargeting dinámico." },
  { icon: Globe, title: "Turismo & Hospitalidad", desc: "Marketing digital especializado para hoteles, tours y experiencias en la Riviera Maya. SEO local, Google Ads y estrategias de temporada." },
  { icon: FileText, title: "Inmobiliarias", desc: "Lead generation para desarrolladoras y agencias inmobiliarias en Cancún y Playa del Carmen con campañas de alta intención." },
  { icon: Users, title: "Servicios Profesionales", desc: "SEO local, Google Ads y landing pages especializadas para firmas de consultoría, legal y servicios técnicos en Quintana Roo." },
  { icon: PieChart, title: "Startups & Scale-ups", desc: "Validación rápida de canales, unit economics y frameworks de growth para startups en el Caribe Mexicano." },
  { icon: BarChart3, title: "Franquicias & Retail", desc: "Estrategias de marketing digital multilocación para cadenas y franquicias con presencia en Cancún, Playa del Carmen y Tulum." },
];

const localAreas = [
  { name: "Cancún", desc: "Agencia de marketing digital en Cancún enfocada en crecimiento empresarial, SEO local, generación de leads y campañas de alto rendimiento para negocios en la zona hotelera, centro y Puerto Cancún." },
  { name: "Playa del Carmen", desc: "Servicios de marketing digital para empresas en Playa del Carmen. Estrategias de posicionamiento, Google Ads y automatización comercial para negocios en Quinta Avenida, Playacar y alrededores." },
  { name: "Tulum", desc: "Estrategias digitales para negocios en Tulum. SEO, campañas pagadas y presencia digital para empresas turísticas, inmobiliarias y de servicios en la zona hotelera y pueblo." },
  { name: "Riviera Maya", desc: "Soluciones de marketing digital para empresas en toda la Riviera Maya, incluyendo Puerto Morelos, Akumal y Puerto Aventuras. Cobertura integral con estrategias adaptadas al mercado regional." },
];

const faqs = [
  {
    q: "¿Ofrecen servicios de marketing digital en Playa del Carmen?",
    a: "Sí. Trabajamos con empresas en Playa del Carmen diseñando estrategias de SEO local, Google Ads, automatización de leads y analítica avanzada. Nuestro equipo conoce el mercado de la zona y adapta cada campaña al contexto local.",
  },
  {
    q: "¿Trabajan con empresas en Tulum?",
    a: "Absolutamente. Ofrecemos servicios de marketing digital en Tulum enfocados en turismo, hospitalidad, inmobiliarias y servicios profesionales. Diseñamos estrategias que conectan con audiencias locales e internacionales.",
  },
  {
    q: "¿Qué incluye el servicio de marketing digital en Cancún?",
    a: "Nuestro servicio de marketing digital en Cancún incluye SEO técnico y local, campañas de Google Ads, landing pages de conversión, email marketing, analítica avanzada con GA4 y CRO. Todo orientado a generar leads cualificados y escalar ingresos.",
  },
  {
    q: "¿Cubren toda la Riviera Maya?",
    a: "Sí. Brindamos cobertura de marketing digital en toda la Riviera Maya: Cancún, Playa del Carmen, Tulum, Puerto Morelos, Akumal y Puerto Aventuras. Adaptamos cada estrategia al mercado y la audiencia de cada zona.",
  },
  {
    q: "¿Pueden integrar el marketing digital con un CRM o software empresarial?",
    a: "Sí. Integramos las estrategias de marketing digital con soluciones de automatización de ventas, CRM empresarial y software a medida para que cada lead se gestione de forma eficiente desde el primer contacto.",
  },
];

/* ─── JSON-LD ─── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Agencia de Marketing Digital en Cancún, Playa del Carmen y Riviera Maya",
    "provider": {
      "@type": "Organization",
      "name": "North",
      "url": "https://northmkt.com.mx",
    },
    "description": "Agencia de marketing digital en Cancún, Playa del Carmen, Tulum y Riviera Maya. Especialistas en SEO, Google Ads, CRO y analítica avanzada para empresas.",
    "url": "https://northmkt.com.mx/marketing-digital-cancun",
    "areaServed": [
      { "@type": "City", "name": "Cancún" },
      { "@type": "City", "name": "Playa del Carmen" },
      { "@type": "City", "name": "Tulum" },
      { "@type": "Place", "name": "Riviera Maya" },
    ],
    "serviceType": "Marketing Digital",
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "North - Agencia de Marketing Digital en Cancún",
    "image": "https://northmkt.com.mx/og-image.png",
    "url": "https://northmkt.com.mx/marketing-digital-cancun",
    "telephone": "+52-998-351-3337",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cancún",
      "addressRegion": "Quintana Roo",
      "addressCountry": "MX",
    },
    "priceRange": "$$",
    "areaServed": [
      { "@type": "City", "name": "Cancún" },
      { "@type": "City", "name": "Playa del Carmen" },
      { "@type": "City", "name": "Tulum" },
      { "@type": "Place", "name": "Riviera Maya" },
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a,
      },
    })),
  },
];

/* ─── Main Page ─── */
const MarketingDigitalCancunPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO
        title="Marketing Digital en Cancún | SEO, Ads y Crecimiento"
        description="Agencia de marketing digital en Cancún. Genera clientes con SEO, Google Ads y estrategias de crecimiento."
        url="https://northmkt.com.mx/marketing-digital-cancun"
        jsonLd={jsonLd}
      />
      <Header />

      {/* ═══ HERO ═══ */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fade()}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
                <MapPin size={12} className="text-primary" />
                CANCÚN · PLAYA DEL CARMEN · RIVIERA MAYA
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight mb-6">
                Agencia de Marketing{" "}
                <span className="gradient-text">Digital en Cancún</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Estrategias de marketing digital basadas en datos para empresas en Cancún, Playa del Carmen, Tulum y la Riviera Maya. SEO local, Google Ads, CRO y analítica avanzada para escalar tus ingresos de forma predecible.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="gradient" size="lg" asChild>
                  <a href="#servicios">Nuestros Servicios <ArrowDown size={16} className="ml-2" /></a>
                </Button>
                <WhatsAppHeroButton />
              </div>
            </motion.div>
            <GrowthMockup />
          </div>
        </div>
      </section>

      {/* ═══ ZONAS DE SERVICIO ═══ */}
      <section className="py-20 border-y border-border/10 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-muted/20 to-background pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <MapPin size={12} className="text-primary" />
              Cobertura Regional
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display mb-3">
              Marketing Digital en Cancún, Playa del Carmen y{" "}
              <span className="gradient-text">Riviera Maya</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              North ofrece servicios de marketing digital en las principales ciudades de Quintana Roo. Diseñamos estrategias específicas para cada mercado local.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {localAreas.map((area, i) => (
              <motion.div
                key={area.name}
                {...fade(i * 0.08)}
                className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.15)] transition-all duration-500"
              >
                <MapPin size={20} className="text-primary mb-3" />
                <h3 className="font-bold font-display mb-2 text-base">{area.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICIOS DE MARKETING DIGITAL ═══ */}
      <section id="servicios" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Servicios
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Servicios de Marketing <span className="gradient-text">Digital en Cancún</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada canal está diseñado para generar tráfico cualificado, leads y revenue medible para negocios en Cancún, Playa del Carmen, Tulum y la Riviera Maya.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {channels.map((s, i) => (
              <motion.div
                key={s.title}
                {...fade(i * 0.07)}
                className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.15)] hover:-translate-y-2"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 group-hover:scale-110 group-hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] transition-all duration-500">
                      <s.icon size={26} className="text-primary" />
                    </div>
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-primary/60 px-2.5 py-1 rounded-full border border-primary/15 bg-primary/5">{s.tag}</span>
                  </div>
                  <h3 className="text-lg font-bold font-display mb-3 group-hover:text-primary transition-colors duration-300">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Internal linking */}
          <motion.div {...fade(0.3)} className="mt-10 text-center">
            <p className="text-sm text-muted-foreground mb-3">
              Complementa tu estrategia digital con nuestras soluciones tecnológicas:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/crm-empresas" className="text-sm text-primary hover:text-primary/80 underline underline-offset-4 transition-colors">
                Automatización de ventas con CRM
              </Link>
              <span className="text-muted-foreground/30">·</span>
              <Link to="/software" className="text-sm text-primary hover:text-primary/80 underline underline-offset-4 transition-colors">
                Software empresarial a medida
              </Link>
              <span className="text-muted-foreground/30">·</span>
              <Link to="/cloud" className="text-sm text-primary hover:text-primary/80 underline underline-offset-4 transition-colors">
                Soluciones tecnológicas en la nube
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ FRAMEWORK DE CRECIMIENTO ═══ */}
      <section className="py-24 surface-sunken relative">
        <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Framework de <span className="gradient-text">Crecimiento</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un sistema probado de cuatro fases para escalar negocios en Cancún, Playa del Carmen, Tulum y la Riviera Maya.
            </p>
          </motion.div>

          {/* Desktop pipeline */}
          <div className="hidden lg:block relative max-w-4xl mx-auto">
            <div className="absolute top-[60px] left-[12%] right-[12%] h-[3px] bg-border/40 rounded-full" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="absolute top-[60px] left-[12%] right-[12%] h-[3px] rounded-full origin-left"
              style={{ background: "linear-gradient(90deg, hsl(210 100% 55%), hsl(var(--primary)), hsl(198 93% 55%), hsl(var(--primary)))" }}
            />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="absolute top-[58px] left-[12%] right-[12%] h-[7px] rounded-full origin-left blur-sm opacity-40"
              style={{ background: "linear-gradient(90deg, hsl(var(--primary)/0.5), hsl(var(--primary)), hsl(var(--primary)/0.5))" }}
            />

            <div className="grid grid-cols-4 gap-6">
              {frameworkSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
                  className="flex flex-col items-center text-center group"
                >
                  <span className="text-[10px] font-bold text-primary/40 mb-2 group-hover:text-primary transition-colors">{String(i + 1).padStart(2, "0")}</span>
                  <div className="relative z-10">
                    <div className="w-[88px] h-[88px] rounded-2xl border-2 border-border bg-card flex items-center justify-center shadow-lg group-hover:border-primary/50 group-hover:shadow-[0_0_40px_-8px_hsl(var(--primary)/0.4)] transition-all duration-500">
                      <step.icon size={30} className={`${step.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <div className="absolute -bottom-[4px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary/50 border-2 border-card group-hover:bg-primary group-hover:shadow-[0_0_12px_hsl(var(--primary)/0.5)] transition-all duration-300" />
                  </div>
                  <h4 className="text-sm font-bold font-display mt-5 mb-1 group-hover:text-primary transition-colors duration-300">{step.title}</h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed max-w-[180px] mb-2">{step.desc}</p>
                  <span className="text-[9px] font-bold text-primary/70 px-2.5 py-0.5 rounded-full bg-primary/5 border border-primary/10">{step.metric}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile pipeline */}
          <div className="lg:hidden relative max-w-md mx-auto">
            <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
            {frameworkSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-5 mb-8 last:mb-0 relative group"
              >
                <div className="relative z-10 w-10 h-10 rounded-xl border-2 border-primary/20 bg-card flex items-center justify-center shrink-0 shadow-sm group-hover:border-primary/40 transition-colors">
                  <step.icon size={16} className={step.color} />
                </div>
                <div className="pt-0.5">
                  <span className="text-[9px] font-bold text-primary/50">{String(i + 1).padStart(2, "0")}</span>
                  <h4 className="text-sm font-bold font-display group-hover:text-primary transition-colors">{step.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-1">{step.desc}</p>
                  <span className="text-[9px] font-bold text-primary/70">{step.metric}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TECH SLIDER ═══ */}
      <section className="py-14 relative overflow-hidden border-y border-border/10">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-muted/20 to-background pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 mb-6">
          <p className="text-center text-[10px] text-muted-foreground tracking-[0.25em] uppercase font-medium">
            Tecnologías y plataformas que utilizamos para marketing digital en Cancún y Riviera Maya
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="flex animate-[scroll_35s_linear_infinite] w-max gap-14 px-6">
            {[...marketingLogos, ...marketingLogos].map((logo, i) => (
              <div key={`${logo.name}-${i}`} className="flex flex-col items-center gap-2 min-w-[80px] opacity-50 hover:opacity-100 transition-opacity duration-300">
                <img src={logo.icon} alt={logo.name} className="w-8 h-8 object-contain dark:invert dark:brightness-200 dark:contrast-200" loading="lazy" />
                <span className="text-[9px] text-muted-foreground tracking-wider uppercase whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MID-PAGE CTA ═══ */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(220 60% 8%), hsl(220 70% 14%), hsl(220 60% 8%))" }} />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[8, 22, 38, 54, 70, 86].map((top, i) => (
            <div
              key={i}
              className={`absolute left-0 whitespace-nowrap text-[${10 + (i % 3)}px] font-mono tracking-[0.3em] text-blue-400 animate-[scroll_${40 + i * 8}s_linear_infinite${i % 2 ? '_reverse' : ''}]`}
              style={{ top: `${top}%`, opacity: i % 2 === 0 ? 0.06 : 0.04 }}
            >
              {"▸ acquisition ▸ conversion ▸ retention ▸ scale ▸ ROAS ▸ CTR ▸ CVR ▸ CAC ▸ LTV ▸ MRR ▸ pipeline ▸ funnel ▸ growth ▸ analytics ▸ attribution ▸ acquisition ▸ conversion ▸ retention ▸ scale ▸ ROAS ▸ CTR ▸ CVR ▸ CAC ▸ LTV ▸ MRR ▸ pipeline ▸ funnel ▸ growth ▸ analytics ▸ attribution "}
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,60%,8%)] via-transparent to-[hsl(220,60%,8%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,60%,8%)]/60 via-transparent to-[hsl(220,60%,8%)]/60 pointer-events-none" />
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[60px] pointer-events-none" style={{ background: "radial-gradient(ellipse, hsl(var(--primary)/0.12), transparent 70%)" }} />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
          <motion.div {...fade()}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/50 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Marketing Digital Cancún
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display mb-6 text-white leading-tight">
              Tu agencia de marketing digital{" "}
              <span className="gradient-text">en Cancún y Riviera Maya</span>
            </h2>
            <p className="text-base sm:text-lg text-white/50 mb-10 max-w-xl mx-auto leading-relaxed">
              Combinamos conocimiento local con estrategias de clase mundial para ayudarte a dominar el mercado de Cancún, Playa del Carmen, Tulum y toda la Riviera Maya.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gradient" size="lg" asChild>
                <a href="/contacto">Solicitar Estrategia <ArrowRight size={16} className="ml-2" /></a>
              </Button>
              <Button size="lg" className="bg-white/[0.07] hover:bg-white/15 text-white border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300" asChild>
                <a href="https://wa.me/529983513337" target="_blank" rel="noopener noreferrer">Hablar por WhatsApp <ArrowRight size={16} className="ml-2" /></a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ MÉTRICAS ═══ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-mesh pointer-events-none opacity-50" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Resultados
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Métricas que <span className="gradient-text">optimizamos</span> en Cancún
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nos enfocamos en los indicadores que realmente impactan el crecimiento y la rentabilidad de tu negocio en Cancún, Playa del Carmen y la Riviera Maya.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {metrics.map((m, i) => (
              <motion.div
                key={m.title}
                {...fade(i * 0.08)}
                className="group relative rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_60px_-12px_hsl(var(--primary)/0.2)] hover:-translate-y-1.5"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.02]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/10 flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/25 group-hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.3)] transition-all duration-500">
                      <m.icon size={22} className="text-primary" />
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-extrabold font-display gradient-text leading-none">{m.value}</span>
                      <p className="text-[8px] text-muted-foreground uppercase tracking-wider mt-0.5">{m.sub}</p>
                    </div>
                  </div>
                  <h3 className="text-base font-bold font-display mb-2 group-hover:text-primary transition-colors duration-300">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CASOS DE USO ═══ */}
      <section className="py-24 surface-sunken relative">
        <div className="absolute inset-0 bg-gradient-to-t from-muted/20 via-transparent to-muted/20 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
              Industrias
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Marketing digital para <span className="gradient-text">tu industria en Cancún</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estrategias de marketing digital especializadas por vertical para empresas en Cancún, Playa del Carmen, Tulum y la Riviera Maya.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {useCases.map((u, i) => (
              <motion.div key={u.title} {...fade(i * 0.07)} className="group rounded-2xl border border-border bg-card p-7 hover:border-primary/25 hover:shadow-[0_20px_60px_-12px_hsl(var(--primary)/0.15)] hover:-translate-y-1.5 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 group-hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.25)] transition-all duration-500">
                    <u.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-bold font-display group-hover:text-primary transition-colors">{u.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-mesh pointer-events-none opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-3xl">
          <motion.div {...fade()} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs text-muted-foreground mb-4">
              <HelpCircle size={12} className="text-primary" />
              Preguntas Frecuentes
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display mb-3">
              Preguntas sobre marketing digital en{" "}
              <span className="gradient-text">Cancún y Riviera Maya</span>
            </h2>
          </motion.div>
          <motion.div {...fade(0.1)}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-xl border border-border bg-card px-6 data-[state=open]:border-primary/20 transition-colors"
                >
                  <AccordionTrigger className="text-sm font-semibold font-display text-left hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="py-24 relative overflow-hidden" style={{ background: "var(--gradient-cta)" }}>
        <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[60px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
          <motion.div {...fade()}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display mb-6 text-white">
              Escala tu negocio en Cancún con{" "}
              <span className="gradient-text">marketing digital</span>
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
              La agencia de marketing digital en Cancún, Playa del Carmen y Riviera Maya que combina datos, tecnología y creatividad para generar resultados medibles.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gradient" size="lg" asChild>
                <a href="/contacto">Empezar ahora <ArrowRight size={16} className="ml-2" /></a>
              </Button>
              <Button size="lg" className="bg-white/10 hover:bg-white hover:text-foreground text-white border border-white/20 transition-all" asChild>
                <a href="https://wa.me/529983513337" target="_blank" rel="noopener noreferrer">Hablar por WhatsApp <ArrowRight size={16} className="ml-2" /></a>
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

export default MarketingDigitalCancunPage;
