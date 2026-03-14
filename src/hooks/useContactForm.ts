import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

const initialForm: ContactFormData = {
  name: "", email: "", company: "", phone: "",
  projectType: "", budget: "", timeline: "", message: "",
};

export function useContactForm() {
  const { toast } = useToast();
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [loading, setLoading] = useState(false);

  const updateField = (field: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim()) {
      toast({ title: "Error", description: "Nombre y email son requeridos.", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact", {
        body: form,
      });

      if (error) throw error;

      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias. Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.",
      });
      setForm(initialForm);
    } catch (err) {
      console.error("Submit error:", err);
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Intenta de nuevo o contáctanos por WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return { form, loading, updateField, handleSubmit };
}
