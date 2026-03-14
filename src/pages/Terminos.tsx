import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terminos = () => (
  <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
    <Header />
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl prose prose-sm dark:prose-invert prose-headings:font-display">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display mb-2">Términos y Condiciones</h1>
        <p className="text-muted-foreground mb-8">Última actualización: marzo 2026</p>

        <h2>1. Uso del Sitio</h2>
        <p>
          Al acceder y utilizar el sitio web de North Digital Solutions ("el Sitio"), usted acepta cumplir con estos Términos y Condiciones. El uso del Sitio está destinado exclusivamente a fines informativos y de contratación de nuestros servicios tecnológicos. Queda prohibido el uso del Sitio para actividades ilegales, la distribución de contenido malicioso o cualquier acción que pueda dañar la operación del mismo.
        </p>

        <h2>2. Propiedad Intelectual</h2>
        <p>
          Todo el contenido presente en el Sitio, incluyendo pero no limitándose a textos, gráficos, logotipos, íconos, imágenes, código fuente, diseño y software, es propiedad exclusiva de North Digital Solutions o de sus licenciantes y está protegido por las leyes de propiedad intelectual aplicables. Queda estrictamente prohibida la reproducción, distribución, modificación o uso comercial de cualquier contenido sin autorización expresa por escrito.
        </p>

        <h2>3. Servicios Ofrecidos</h2>
        <p>
          North Digital Solutions ofrece servicios de desarrollo de software empresarial, infraestructura cloud y marketing de crecimiento. Las características, alcance y condiciones específicas de cada servicio se definen en los contratos individuales celebrados con cada cliente. La información presentada en el Sitio es de carácter informativo y no constituye una oferta vinculante.
        </p>

        <h2>4. Limitación de Responsabilidad</h2>
        <p>
          North Digital Solutions no será responsable por daños directos, indirectos, incidentales, consecuentes o punitivos que resulten del uso o la imposibilidad de uso del Sitio. No garantizamos que el Sitio esté libre de errores, virus o interrupciones. El uso del Sitio es bajo su propio riesgo. En ningún caso nuestra responsabilidad total excederá el monto pagado por los servicios contratados.
        </p>

        <h2>5. Enlaces a Terceros</h2>
        <p>
          El Sitio puede contener enlaces a sitios web de terceros. Estos enlaces se proporcionan únicamente para su conveniencia y no implican respaldo o responsabilidad alguna sobre el contenido, políticas de privacidad o prácticas de dichos sitios.
        </p>

        <h2>6. Modificaciones</h2>
        <p>
          Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento sin previo aviso. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el Sitio. El uso continuado del Sitio después de la publicación de cambios constituye la aceptación de los mismos.
        </p>

        <h2>7. Jurisdicción Aplicable</h2>
        <p>
          Estos Términos y Condiciones se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier disputa relacionada con el uso del Sitio o los servicios ofrecidos será sometida a la jurisdicción de los tribunales competentes de la Ciudad de Cancún, Quintana Roo, México, renunciando las partes a cualquier otro fuero que pudiera corresponderles.
        </p>

        <h2>8. Contacto</h2>
        <p>
          Para cualquier consulta relacionada con estos Términos y Condiciones, puede contactarnos en{" "}
          <a href="mailto:info@northmkt.com.mx" className="text-primary hover:underline">info@northmkt.com.mx</a>.
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Terminos;
