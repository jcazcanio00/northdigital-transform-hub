import { useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Gauge,
  Globe2,
  Layers3,
  LineChart,
  MapPin,
  MessageSquare,
  MousePointerClick,
  PenTool,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarqueeText from "@/components/MarqueeText";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_LINK = "https://wa.me/529982127561?text=Hola%2C%20quiero%20cotizar%20una%20pagina%20web%20para%20mi%20empresa";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.55, delay },
});

const SectionBadge = ({ children, dark = false }: { children: ReactNode; dark?: boolean }) => (
  <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs mb-4 ${dark ? "border-brand-navy-foreground/15 bg-brand-navy-foreground/10 text-brand-navy-foreground/70" : "border-primary/20 bg-primary/5 text-muted-foreground"}`}>
    <span className={`${dark ? "bg-brand-red" : "bg-primary"} w-2 h-2 rounded-full animate-status-pulse`} />
    {children}
  </span>
);

const WebMockup = () => (
  <div className="relative mx-auto w-full max-w-[680px]">
    <div className="hidden lg:block absolute -inset-10 rounded-[40px] bg-primary/10 blur-[44px]" />
    <div className="absolute -right-3 top-10 z-20 hidden rounded-2xl border border-white/70 bg-background/90 p-3 shadow-2xl backdrop-blur md:block animate-float-slow">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red/10">
          <TrendingUp size={18} className="text-brand-red" />
        </div>
        <div>
          <div className="text-sm font-extrabold font-display">+38%</div>
          <div className="text-[11px] text-muted-foreground">más solicitudes</div>
        </div>
      </div>
    </div>
    <div className="absolute -left-4 bottom-16 z-20 hidden rounded-2xl border border-white/70 bg-background/90 p-3 shadow-2xl backdrop-blur lg:block animate-float-delayed">
      <div className="flex items-center gap-2 text-xs font-semibold">
        <CheckCircle2 size={16} className="text-primary" />
        Web lista para vender
      </div>
    </div>

    <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-background shadow-2xl">
      <div className="flex items-center gap-2 border-b border-border/50 bg-muted/30 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-brand-red/70" />
        <div className="h-3 w-3 rounded-full bg-accent/60" />
        <div className="h-3 w-3 rounded-full bg-primary/50" />
        <div className="ml-auto hidden rounded-md bg-background/80 px-3 py-1 text-[10px] text-muted-foreground sm:block">north.site/empresa</div>
      </div>
      <div className="grid min-h-[430px] grid-cols-1 lg:grid-cols-[0.58fr_0.42fr]">
        <div className="relative overflow-hidden bg-brand-navy p-5 text-brand-navy-foreground sm:p-7">
          <div className="absolute inset-0 bg-dot-grid opacity-20" />
          <div className="relative z-10 flex h-full flex-col justify-between gap-10">
            <div>
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-brand-navy-foreground/10" />
                  <div className="h-2.5 w-20 rounded-full bg-brand-navy-foreground/30" />
                </div>
                <div className="h-8 w-24 rounded-full bg-brand-red" />
              </div>
              <div className="mb-5 h-3 w-28 rounded-full bg-brand-navy-foreground/25" />
              <div className="space-y-3">
                <div className="h-8 w-full max-w-[320px] rounded-lg bg-brand-navy-foreground/90" />
                <div className="h-8 w-10/12 rounded-lg bg-brand-navy-foreground/70" />
                <div className="h-8 w-8/12 rounded-lg bg-brand-navy-foreground/40" />
              </div>
              <div className="mt-6 space-y-2">
                <div className="h-2 w-11/12 rounded-full bg-brand-navy-foreground/25" />
                <div className="h-2 w-8/12 rounded-full bg-brand-navy-foreground/20" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["UX", "SEO", "CRM"].map((item) => (
                <div key={item} className="rounded-xl border border-brand-navy-foreground/10 bg-brand-navy-foreground/10 p-3">
                  <div className="mb-3 h-7 w-7 rounded-lg bg-brand-navy-foreground/15" />
                  <div className="text-xs font-bold">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-card p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold font-display">Conversion System</div>
              <div className="text-[10px] text-muted-foreground">Landing performance</div>
            </div>
            <div className="rounded-full bg-brand-red/10 px-2.5 py-1 text-[10px] font-bold text-brand-red">Live</div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[{ label: "Leads", value: "124" }, { label: "Speed", value: "98" }, { label: "Mobile", value: "A+" }, { label: "Conv.", value: "6.8%" }].map((item) => (
              <div key={item.label} className="rounded-xl border border-border/60 bg-background p-3">
                <div className="text-[10px] text-muted-foreground">{item.label}</div>
                <div className="text-lg font-extrabold font-display">{item.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-border/60 bg-background p-4">
            <div className="mb-4 flex items-center justify-between text-[11px] font-semibold">
              <span>Solicitudes por canal</span>
              <LineChart size={14} className="text-primary" />
            </div>
            <div className="flex h-28 items-end gap-1.5">
              {[34, 44, 39, 58, 52, 67, 73, 64, 82, 78, 92, 88].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-primary/30 to-primary animate-bar-grow" style={{ height: `${h}%`, animationDelay: `${0.15 + i * 0.04}s` }} />
              ))}
            </div>
          </div>
          <div className="mt-4 space-y-2">
            {["Formulario conectado", "WhatsApp tracking", "Analytics activo"].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-xl border border-border/50 bg-background px-3 py-2 text-[11px]">
                <span className="font-medium">{item}</span>
                <CheckCircle2 size={13} className="text-primary" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const services = [
  { icon: PenTool, title: "Diseño personalizado", desc: "Interfaces alineadas a tu marca, tu oferta y el tipo de cliente que quieres atraer." },
  { icon: Smartphone, title: "Optimización móvil", desc: "Experiencias rápidas, claras y cómodas para convertir desde cualquier dispositivo." },
  { icon: Gauge, title: "Velocidad y rendimiento", desc: "Estructura ligera, navegación fluida y bases sólidas para una web profesional." },
  { icon: Workflow, title: "Integraciones", desc: "Formularios, WhatsApp, CRM, analítica y herramientas comerciales conectadas." },
];

const benefits = [
  { icon: Users, title: "Más clientes calificados", desc: "Una página pensada para guiar al visitante hacia una acción clara." },
  { icon: Sparkles, title: "Imagen más profesional", desc: "Presencia digital premium para competir mejor en mercados turísticos y corporativos." },
  { icon: MousePointerClick, title: "Mayor conversión", desc: "Jerarquía, mensajes y CTAs diseñados para reducir fricción y aumentar contactos." },
  { icon: Target, title: "Mejor posicionamiento", desc: "Estructura preparada para que después puedas escalar SEO, contenido y campañas." },
];

const cities = [
  { city: "Cancún", copy: "para empresas de servicios, turismo, real estate y marcas que necesitan vender con confianza." },
  { city: "Playa del Carmen", copy: "para negocios en crecimiento que requieren presencia digital moderna y comercial." },
  { city: "Tulum", copy: "para proyectos boutique, wellness, hospitality y experiencias de alto valor." },
];

const steps = [
  { num: "01", icon: Target, title: "Análisis", desc: "Entendemos tu negocio, oferta, audiencia y objetivos comerciales." },
  { num: "02", icon: PenTool, title: "Diseño", desc: "Creamos la estructura visual, jerarquía y experiencia enfocada en conversión." },
  { num: "03", icon: Code2, title: "Desarrollo", desc: "Construimos una web responsive, rápida, clara y conectada a tus herramientas." },
  { num: "04", icon: Rocket, title: "Lanzamiento", desc: "Revisamos detalles finales, publicamos y dejamos tu página lista para vender." },
];

const differentiators = [
  "Diseñamos con intención comercial, no solo estética.",
  "Conectamos estrategia, UX, tecnología y performance.",
  "Pensamos en el siguiente paso: leads, CRM, campañas y crecimiento.",
  "Construimos una presencia premium para marcas que quieren verse serias.",
];

const faqs = [
  { q: "¿Cuánto tarda una página web?", a: "Depende del alcance, pero una landing o sitio empresarial suele avanzar en etapas claras: análisis, diseño, desarrollo y lanzamiento." },
  { q: "¿La página queda optimizada para celular?", a: "Sí. El diseño se trabaja mobile-first para que el contenido, los botones y los formularios funcionen perfecto en pantallas pequeñas." },
  { q: "¿Pueden conectar WhatsApp o formularios?", a: "Sí. Podemos integrar llamadas a la acción, formularios, WhatsApp, analítica y herramientas comerciales según el flujo de tu empresa." },
  { q: "¿Sirve para negocios locales en Cancún, Playa o Tulum?", a: "Sí. Adaptamos mensajes, secciones y enfoque comercial al mercado local sin que la página se vea genérica o forzada." },
  { q: "¿Después se puede optimizar para SEO?", a: "Sí. Esta etapa se enfoca en diseño y conversión, dejando una base clara para optimización SEO posterior." },
];

const DisenoDePaginasWeb = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Diseño de Páginas Web | North"
        description="Diseño de páginas web premium para empresas en Cancún, Playa del Carmen y Tulum. Landing pages y sitios modernos enfocados en conversión."
        url="https://northmkt.com.mx/diseno-de-paginas-web/"
        keywords="diseño de páginas web, diseño web cancún, páginas web playa del carmen, diseño web tulum"
      />
      <Header />

      <main>
        <section className="relative overflow-hidden bg-background pt-8 pb-12 md:pt-16 md:pb-20 lg:pt-20">
          <div className="absolute inset-0 bg-dot-grid opacity-40" />
          <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
              <div className="text-center lg:text-left animate-hero-fade-in">
                <SectionBadge>Diseño Web Premium para Empresas</SectionBadge>
                <h1 className="font-display text-4xl font-extrabold leading-[1.05] text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
                  Páginas web diseñadas para verse premium y convertir más clientes
                </h1>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg lg:mx-0">
                  Creamos sitios modernos para empresas en Cancún, Playa del Carmen y Tulum que necesitan transmitir confianza, explicar su valor y generar solicitudes reales.
                </p>
                <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                  <Button size="lg" className="h-14 bg-brand-red px-8 text-base text-brand-red-foreground hover:bg-brand-red/90" asChild>
                    <Link to="/contacto">Solicitar cotización <ArrowRight size={18} /></Link>
                  </Button>
                  <Button variant="gradient-outline" size="lg" className="h-14 px-8 text-base" asChild>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"><MessageSquare size={18} /> Hablar por WhatsApp</a>
                  </Button>
                </div>
                <div className="mt-7 grid grid-cols-3 gap-3 text-left">
                  {["Mobile-first", "UX de conversión", "Look premium"].map((item) => (
                    <div key={item} className="rounded-xl border border-border/60 bg-card/70 p-3 text-xs font-semibold text-foreground/75">
                      <CheckCircle2 size={15} className="mb-2 text-brand-red" />{item}
                    </div>
                  ))}
                </div>
              </div>
              <motion.div {...fade(0.08)}>
                <WebMockup />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-y border-border/60 bg-secondary/50 py-8 md:py-10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-4 md:grid-cols-3">
              {["Diseño orientado a negocio", "Experiencia mobile-first", "Estructura lista para crecer"].map((item, i) => (
                <motion.div key={item} {...fade(i * 0.08)} className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background p-4 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Star size={17} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold font-display">{item}</div>
                    <div className="text-sm text-muted-foreground">Confianza, claridad y conversión desde el primer scroll.</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div {...fade()} className="mx-auto mb-10 max-w-3xl text-center">
              <SectionBadge>Servicio completo</SectionBadge>
              <h2 className="font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">Qué incluye el diseño de tu página web</h2>
            </motion.div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, i) => (
                <motion.div key={service.title} {...fade(i * 0.08)} className="glass-card glass-card-hover rounded-2xl p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <service.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="mb-3 font-display text-lg font-bold">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-navy py-14 text-brand-navy-foreground md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <motion.div {...fade()}>
                <SectionBadge dark>Beneficios de negocio</SectionBadge>
                <h2 className="font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">Una web no debe ser un folleto. Debe ayudarte a vender.</h2>
                <p className="mt-5 text-base leading-relaxed text-brand-navy-foreground/65">Diseñamos la experiencia completa para que tu cliente entienda rápido qué haces, por qué confiar y cuál es el siguiente paso.</p>
              </motion.div>
              <div className="grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit, i) => (
                  <motion.div key={benefit.title} {...fade(i * 0.08)} className="rounded-2xl border border-brand-navy-foreground/10 bg-brand-navy-foreground/[0.08] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-navy-foreground/[0.12]">
                    <benefit.icon size={24} className="mb-5 text-brand-red" />
                    <h3 className="mb-2 font-display text-lg font-bold">{benefit.title}</h3>
                    <p className="text-sm leading-relaxed text-brand-navy-foreground/65">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary/45 py-14 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div {...fade()} className="mx-auto mb-10 max-w-3xl text-center">
              <SectionBadge>Presencia regional</SectionBadge>
              <h2 className="font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">Diseño web para empresas en el Caribe Mexicano</h2>
              <p className="mt-4 text-muted-foreground">Adaptamos el mensaje y la experiencia al mercado donde compite tu empresa, sin perder una imagen corporativa premium.</p>
            </motion.div>
            <div className="grid gap-4 md:grid-cols-3">
              {cities.map((item, i) => (
                <motion.div key={item.city} {...fade(i * 0.08)} className="rounded-2xl border border-border/60 bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <MapPin size={22} className="mb-5 text-brand-red" />
                  <h3 className="font-display text-2xl font-extrabold">{item.city}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Diseñamos páginas web {item.copy}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div {...fade()} className="mx-auto mb-12 max-w-3xl text-center">
              <SectionBadge>Proceso claro</SectionBadge>
              <h2 className="font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">De idea a página lista para vender</h2>
            </motion.div>
            <div className="grid gap-4 lg:grid-cols-4">
              {steps.map((step, i) => (
                <motion.div key={step.title} {...fade(i * 0.08)} className="relative rounded-2xl border border-border/60 bg-card p-6">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10"><step.icon size={21} className="text-primary" /></div>
                    <span className="font-display text-3xl font-extrabold text-primary/15">{step.num}</span>
                  </div>
                  <h3 className="mb-3 font-display text-xl font-bold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-card py-14 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <motion.div {...fade()}>
                <SectionBadge>Diferenciador North</SectionBadge>
                <h2 className="font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">Elegir diseño bonito no es suficiente</h2>
                <p className="mt-5 text-muted-foreground">La diferencia está en construir una experiencia que explique, ordene y convierta. Nuestro enfoque conecta diseño, tecnología y negocio.</p>
              </motion.div>
              <motion.div {...fade(0.08)} className="rounded-2xl bg-brand-navy p-6 text-brand-navy-foreground shadow-2xl md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red"><ShieldCheck size={22} /></div>
                  <div>
                    <div className="font-display text-xl font-bold">Sistema de conversión</div>
                    <div className="text-sm text-brand-navy-foreground/60">No solo una página informativa</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {differentiators.map((item) => (
                    <div key={item} className="flex gap-3 rounded-xl border border-brand-navy-foreground/10 bg-brand-navy-foreground/[0.08] p-3 text-sm text-brand-navy-foreground/75">
                      <CheckCircle2 size={18} className="shrink-0 text-brand-red" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-brand-navy py-14 text-center text-brand-navy-foreground md:py-24">
          <div className="absolute inset-0 bg-dot-grid opacity-15" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <motion.div {...fade()} className="mx-auto max-w-3xl">
              <SectionBadge dark>Listo para avanzar</SectionBadge>
              <h2 className="font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">Haz que tu página trabaje como tu mejor vendedor digital</h2>
              <p className="mx-auto mt-5 max-w-2xl text-brand-navy-foreground/65">Cuéntanos qué vendes y diseñamos una experiencia clara, premium y preparada para convertir visitantes en oportunidades.</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button size="lg" className="h-14 bg-brand-red px-8 text-base text-brand-red-foreground hover:bg-brand-red/90" asChild>
                  <Link to="/contacto">Solicitar cotización <ArrowRight size={18} /></Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 border-brand-navy-foreground/20 bg-brand-navy-foreground/10 px-8 text-base text-brand-navy-foreground hover:bg-brand-navy-foreground hover:text-brand-navy" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"><MessageSquare size={18} /> Hablar con North</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-14 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <motion.div {...fade()} className="mb-8 text-center">
                <SectionBadge>FAQ</SectionBadge>
                <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Preguntas frecuentes</h2>
              </motion.div>
              <Accordion type="single" collapsible className="rounded-2xl border border-border/60 bg-card px-4 md:px-6">
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.q} value={`item-${index}`} className="border-border/60">
                    <AccordionTrigger className="text-left font-display text-base font-bold hover:no-underline md:text-lg">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <MarqueeText />
      <Footer />
    </div>
  );
};

export default DisenoDePaginasWeb;
