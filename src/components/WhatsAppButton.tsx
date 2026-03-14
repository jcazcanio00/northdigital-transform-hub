import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/529983513337";

const trackWhatsAppClick = (ctaLocation: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "whatsapp_click", {
      contact_method: "whatsapp",
      page_location: window.location.href,
      page_path: window.location.pathname,
      cta_location: ctaLocation,
    });
  }
};

export const WhatsAppFloatingButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:block px-4 py-2 rounded-xl bg-card border border-border/40 shadow-lg text-sm font-medium text-foreground whitespace-nowrap"
          >
            Habla con un especialista
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("floating_button")}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.5)] transition-shadow duration-300"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={26} className="text-white" fill="white" strokeWidth={0} />
      </motion.a>
    </div>
  );
};

export const WhatsAppHeroButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => trackWhatsAppClick("hero_section")}
    className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-[#25D366]/40 text-[#25D366] font-semibold text-base transition-all duration-300 hover:bg-[#25D366]/10 hover:border-[#25D366]/60 hover:shadow-[0_0_20px_rgba(37,211,102,0.15)]"
  >
    <MessageCircle size={18} fill="#25D366" strokeWidth={0} />
    Hablar por WhatsApp
  </a>
);

export { trackWhatsAppClick };
