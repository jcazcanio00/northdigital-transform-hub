import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, phone, projectType, budget, timeline, message } = await req.json();

    if (!name || !email) {
      return new Response(JSON.stringify({ error: "Nombre y email son requeridos" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Store lead in database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase.from("leads").insert({
      name,
      email,
      company: company || null,
      phone: phone || null,
      project_type: projectType || null,
      budget: budget || null,
      timeline: timeline || null,
      message: message || null,
    });

    if (dbError) {
      console.error("DB insert error:", dbError);
      throw new Error("Error al guardar el lead");
    }

    // Send email notification
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    
    if (RESEND_API_KEY) {
      const emailBody = `
Nuevo contacto desde northmkt.com.mx

Nombre: ${name}
Empresa: ${company || "No especificada"}
Email: ${email}
Teléfono / WhatsApp: ${phone || "No proporcionado"}
Tipo de proyecto: ${projectType || "No especificado"}
Presupuesto estimado: ${budget || "No especificado"}
Tiempo estimado: ${timeline || "No especificado"}

Mensaje:
${message || "Sin mensaje"}
      `.trim();

      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "North MKT <onboarding@resend.dev>",
          to: ["info@northmkt.com.mx"],
          subject: "Nuevo contacto desde northmkt.com.mx",
          text: emailBody,
        }),
      });

      if (!emailRes.ok) {
        const errBody = await emailRes.text();
        console.error("Resend error:", emailRes.status, errBody);
        // Don't fail the request if email fails - lead is already saved
      }
    } else {
      console.warn("RESEND_API_KEY not configured - email not sent, lead saved to DB");
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Error desconocido";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
