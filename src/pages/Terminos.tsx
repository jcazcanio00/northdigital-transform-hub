import SEO from "@/components/SEO";
import LegalPage from "@/components/LegalPage";

const sections = [
  {
    title: "Uso del Sitio",
    content: (
      <p>Al acceder y utilizar el sitio web de North Solutions ("el Sitio"), usted acepta cumplir con estos Términos y Condiciones. El uso del Sitio está destinado exclusivamente a fines informativos y de contratación de nuestros servicios tecnológicos. Queda prohibido el uso del Sitio para actividades ilegales, la distribución de contenido malicioso o cualquier acción que pueda dañar la operación del mismo.</p>
    ),
  },
  {
    title: "Propiedad Intelectual",
    content: (
      <p>Todo el contenido presente en el Sitio, incluyendo pero no limitándose a textos, gráficos, logotipos, íconos, imágenes, código fuente, diseño y software, es propiedad exclusiva de North Solutions o de sus licenciantes y está protegido por las leyes de propiedad intelectual aplicables. Queda estrictamente prohibida la reproducción, distribución, modificación o uso comercial de cualquier contenido sin autorización expresa por escrito.</p>
    ),
  },
  {
    title: "Servicios Ofrecidos",
    content: (
      <p>North Solutions ofrece servicios de desarrollo de software empresarial, infraestructura cloud y marketing de crecimiento. Las características, alcance y condiciones específicas de cada servicio se definen en los contratos individuales celebrados con cada cliente. La información presentada en el Sitio es de carácter informativo y no constituye una oferta vinculante.</p>
    ),
  },
  {
    title: "Limitación de Responsabilidad",
    content: (
      <p>North Solutions no será responsable por daños directos, indirectos, incidentales, consecuentes o punitivos que resulten del uso o la imposibilidad de uso del Sitio. No garantizamos que el Sitio esté libre de errores, virus o interrupciones. El uso del Sitio es bajo su propio riesgo. En ningún caso nuestra responsabilidad total excederá el monto pagado por los servicios contratados.</p>
    ),
  },
  {
    title: "Enlaces a Terceros",
    content: (
      <p>El Sitio puede contener enlaces a sitios web de terceros. Estos enlaces se proporcionan únicamente para su conveniencia y no implican respaldo o responsabilidad alguna sobre el contenido, políticas de privacidad o prácticas de dichos sitios.</p>
    ),
  },
  {
    title: "Modificaciones",
    content: (
      <p>Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento sin previo aviso. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el Sitio. El uso continuado del Sitio después de la publicación de cambios constituye la aceptación de los mismos.</p>
    ),
  },
  {
    title: "Jurisdicción Aplicable",
    content: (
      <p>Estos Términos y Condiciones se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier disputa relacionada con el uso del Sitio o los servicios ofrecidos será sometida a la jurisdicción de los tribunales competentes de la Ciudad de Cancún, Quintana Roo, México, renunciando las partes a cualquier otro fuero que pudiera corresponderles.</p>
    ),
  },
  {
    title: "Contacto",
    content: (
      <p>Para cualquier consulta relacionada con estos Términos y Condiciones, puede contactarnos en <a href="mailto:info@northmkt.com.mx">info@northmkt.com.mx</a>.</p>
    ),
  },
];

const Terminos = () => (
  <>
    <SEO
      title="Términos y Condiciones | North Digital"
      description="Términos y condiciones de uso del sitio web y servicios de North Digital Solutions. Propiedad intelectual, limitaciones y jurisdicción aplicable."
      url="https://northmkt.com.mx/terminos"
    />
    <LegalPage
      title="Términos y Condiciones"
      lastUpdated="marzo 2026"
      sections={sections}
    />
  </>
);

export default Terminos;
