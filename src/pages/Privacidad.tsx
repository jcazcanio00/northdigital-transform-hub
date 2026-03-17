import SEO from "@/components/SEO";
import LegalPage from "@/components/LegalPage";

const sections = [
  {
    title: "Responsable del Tratamiento",
    content: (
      <p>North Solutions, con domicilio en Cancún, Quintana Roo, México, es responsable del tratamiento de los datos personales que usted nos proporcione a través de este sitio web y nuestros canales de comunicación. Para cualquier consulta puede contactarnos en <a href="mailto:info@northmkt.com.mx">info@northmkt.com.mx</a>.</p>
    ),
  },
  {
    title: "Datos Personales que Recopilamos",
    content: (
      <>
        <p>Recopilamos los siguientes datos personales cuando usted utiliza nuestros formularios de contacto o solicita nuestros servicios:</p>
        <ul>
          <li>Nombre completo</li>
          <li>Nombre de empresa u organización</li>
          <li>Dirección de correo electrónico</li>
          <li>Número de teléfono</li>
          <li>Información sobre el proyecto o servicio solicitado</li>
          <li>Datos de navegación y uso del sitio (mediante cookies)</li>
        </ul>
      </>
    ),
  },
  {
    title: "Finalidad del Tratamiento",
    content: (
      <>
        <p>Sus datos personales serán utilizados para las siguientes finalidades:</p>
        <ul>
          <li>Responder a sus solicitudes de información y contacto</li>
          <li>Elaborar propuestas comerciales y cotizaciones de servicios</li>
          <li>Gestionar la relación contractual de servicios tecnológicos</li>
          <li>Enviar comunicaciones relevantes sobre nuestros servicios (con su consentimiento)</li>
          <li>Mejorar la experiencia de navegación en nuestro sitio web</li>
          <li>Cumplir con obligaciones legales y regulatorias</li>
        </ul>
      </>
    ),
  },
  {
    title: "Protección de Datos Personales",
    content: (
      <p>Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger sus datos personales contra acceso no autorizado, pérdida, alteración o destrucción. Nuestros sistemas utilizan cifrado SSL/TLS y seguimos las mejores prácticas de la industria para garantizar la seguridad de su información.</p>
    ),
  },
  {
    title: "Uso de Cookies",
    content: (
      <>
        <p>Nuestro sitio web utiliza cookies y tecnologías similares para mejorar su experiencia de navegación, analizar el tráfico del sitio y personalizar contenido. Las cookies que utilizamos incluyen:</p>
        <ul>
          <li><strong>Cookies esenciales:</strong> necesarias para el funcionamiento básico del sitio</li>
          <li><strong>Cookies analíticas:</strong> nos ayudan a entender cómo los visitantes interactúan con el sitio</li>
          <li><strong>Cookies de preferencias:</strong> permiten recordar sus configuraciones como el tema visual</li>
        </ul>
        <p>Puede configurar su navegador para rechazar cookies, aunque esto podría afectar la funcionalidad del sitio.</p>
      </>
    ),
  },
  {
    title: "Derechos del Usuario (ARCO)",
    content: (
      <>
        <p>De conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, usted tiene derecho a:</p>
        <ul>
          <li><strong>Acceso:</strong> conocer qué datos personales tenemos sobre usted</li>
          <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos o incompletos</li>
          <li><strong>Cancelación:</strong> solicitar la eliminación de sus datos personales</li>
          <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos para fines específicos</li>
        </ul>
        <p>Para ejercer cualquiera de estos derechos, envíe su solicitud a <a href="mailto:info@northmkt.com.mx">info@northmkt.com.mx</a> indicando su nombre completo, el derecho que desea ejercer y una descripción clara de su solicitud.</p>
      </>
    ),
  },
  {
    title: "Transferencia de Datos",
    content: (
      <p>No compartimos, vendemos ni transferimos sus datos personales a terceros sin su consentimiento previo, salvo cuando sea requerido por ley o sea necesario para la prestación de los servicios contratados.</p>
    ),
  },
  {
    title: "Modificaciones al Aviso",
    content: (
      <p>Nos reservamos el derecho de actualizar este Aviso de Privacidad en cualquier momento. Las modificaciones serán publicadas en esta página con la fecha de última actualización. Le recomendamos revisar periódicamente este aviso.</p>
    ),
  },
];

const Privacidad = () => (
  <>
    <SEO
      title="Aviso de Privacidad | North"
      description="Aviso de privacidad de North. Conoce cómo recopilamos, usamos y protegemos tus datos personales conforme a la ley mexicana."
      url="https://northmkt.com.mx/privacidad"
    />
    <LegalPage
      title="Aviso de Privacidad"
      lastUpdated="marzo 2026"
      sections={sections}
    />
  </>
);

export default Privacidad;
