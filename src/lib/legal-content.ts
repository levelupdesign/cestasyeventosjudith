import { EMAIL, LOCATION, PHONE_DISPLAY } from "@/lib/contact";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const company = SITE_NAME;
const web = SITE_URL;

export const legalPages = {
  "aviso-legal": {
    title: "Aviso legal",
    description: `Aviso legal de ${company}. Información del titular, condiciones de uso y responsabilidad.`,
    sections: [
      {
        title: "1. Datos identificativos",
        content: `En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa que el titular de este sitio web es Judith Ponce Almansa, con domicilio en ${LOCATION}, España. Correo electrónico de contacto: ${EMAIL}. Teléfono: ${PHONE_DISPLAY}.`,
      },
      {
        title: "2. Objeto",
        content: `El presente aviso legal regula el acceso y la utilización del sitio web ${web}, titularidad de ${company}, cuya finalidad es ofrecer información sobre los servicios de cestas personalizadas y decoración de eventos, así como facilitar el contacto con clientes y visitantes.`,
      },
      {
        title: "3. Condiciones de uso",
        content:
          "El acceso a este sitio web atribuye la condición de usuario e implica la aceptación plena de las condiciones aquí expuestas. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios, absteniéndose de emplearlos para actividades ilícitas, contrarias a la buena fe o al orden público, o que puedan dañar los derechos de terceros.",
      },
      {
        title: "4. Propiedad intelectual e industrial",
        content: `Todos los contenidos del sitio web (textos, imágenes, diseño gráfico, logotipos, iconos, software, etc.) son propiedad de ${company} o de terceros que han autorizado su uso, y están protegidos por la normativa española e internacional de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución o comunicación pública sin autorización expresa.`,
      },
      {
        title: "5. Responsabilidad",
        content: `${company} no se hace responsable de los daños derivados del uso indebido del sitio web, de interrupciones del servicio, virus informáticos o de la veracidad de los contenidos enlazados desde páginas de terceros. El titular se reserva el derecho de modificar los contenidos sin previo aviso.`,
      },
      {
        title: "6. Legislación aplicable",
        content:
          "Las relaciones establecidas entre el titular del sitio web y el usuario se regirán por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los Juzgados y Tribunales de Málaga, salvo que la normativa aplicable disponga otra cosa.",
      },
    ],
  },
  "politica-privacidad": {
    title: "Política de privacidad",
    description: `Política de privacidad de ${company}. Información sobre el tratamiento de datos personales conforme al RGPD.`,
    sections: [
      {
        title: "1. Responsable del tratamiento",
        content: `Responsable: Judith Ponce Almansa (${company}). Domicilio: ${LOCATION}, España. Email: ${EMAIL}. Teléfono: ${PHONE_DISPLAY}.`,
      },
      {
        title: "2. Finalidad del tratamiento",
        content:
          "Los datos personales facilitados a través del formulario de contacto, correo electrónico, WhatsApp o redes sociales serán tratados con la finalidad de gestionar consultas, presupuestos, pedidos y la relación comercial derivada de los servicios ofrecidos.",
      },
      {
        title: "3. Legitimación",
        content:
          "La base legal para el tratamiento es el consentimiento del interesado, la ejecución de un contrato o medidas precontractuales, y el interés legítimo del responsable en atender solicitudes de información.",
      },
      {
        title: "4. Conservación de los datos",
        content:
          "Los datos se conservarán mientras se mantenga la relación comercial o durante el plazo necesario para cumplir obligaciones legales. Una vez finalizado el tratamiento, se bloquearán o eliminararán de forma segura.",
      },
      {
        title: "5. Destinatarios",
        content:
          "No se cederán datos a terceros salvo obligación legal o cuando sea necesario para la prestación del servicio (por ejemplo, empresas de mensajería o plataformas de pago), siempre con las garantías adecuadas.",
      },
      {
        title: "6. Derechos del interesado",
        content:
          "Puede ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad enviando un correo a la dirección indicada, adjuntando copia de su DNI. También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).",
      },
      {
        title: "7. Medidas de seguridad",
        content: `${company} adopta las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida o acceso no autorizado.`,
      },
    ],
  },
  cookies: {
    title: "Política de cookies",
    description: `Política de cookies de ${company}. Información sobre el uso de cookies en el sitio web.`,
    sections: [
      {
        title: "1. ¿Qué son las cookies?",
        content:
          "Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario al visitar un sitio web. Permiten recordar preferencias, analizar el tráfico o mejorar la experiencia de navegación.",
      },
      {
        title: "2. Tipos de cookies utilizadas",
        content: `Este sitio web puede utilizar cookies técnicas necesarias para su funcionamiento, cookies de preferencias y, en su caso, cookies analíticas de terceros (como Google Analytics) para conocer el uso del sitio de forma agregada y anónima.`,
      },
      {
        title: "3. Cookies de terceros",
        content:
          "Algunos servicios integrados (por ejemplo, mapas, vídeos o botones de redes sociales) pueden instalar cookies propias. El titular no controla directamente estas cookies; se recomienda consultar las políticas de privacidad de dichos proveedores.",
      },
      {
        title: "4. Gestión y desactivación",
        content:
          "Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador. Tenga en cuenta que la desactivación de cookies técnicas puede afectar al correcto funcionamiento del sitio web.",
      },
      {
        title: "5. Actualización",
        content: `La presente política de cookies puede actualizarse para adaptarse a cambios legislativos o técnicos. La última revisión corresponde a la fecha de publicación en ${web}.`,
      },
    ],
  },
} as const;

export type LegalPageKey = keyof typeof legalPages;
