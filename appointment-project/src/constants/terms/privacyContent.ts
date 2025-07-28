import {
  FiDatabase,
  FiLock,
  FiUsers,
  FiClock,
  FiShield,
  FiGlobe,
  FiMail,
} from "react-icons/fi";

export const HERO = {
  title: "Política de Privacidad",
  description:
    "En Bookzy, nuestra prioridad es proteger la información que compartes con nosotros. A continuación, describimos cómo manejamos, almacenamos y protegemos tus datos.",
};

export const LAST_UPDATED = "15 de febrero de 2024";

export const BREADCRUMBS = [
  { text: "Inicio", isActive: false },
  { text: "Legal", isActive: false },
  { text: "Privacidad de Información", isActive: true },
];

export const TABLE_OF_CONTENTS = [
  { id: "recoleccion", title: "Recolección de Datos", icon: FiDatabase },
  { id: "almacenamiento", title: "Almacenamiento y Seguridad", icon: FiLock },
  { id: "uso", title: "Uso de la Información", icon: FiUsers },
  { id: "retencion", title: "Retención de Datos", icon: FiClock },
  { id: "derechos", title: "Derechos de los Usuarios", icon: FiShield },
  { id: "cumplimiento", title: "Cumplimiento Normativo", icon: FiGlobe },
  { id: "contacto", title: "Contacto", icon: FiMail },
];


export const PRIVACY_SECTIONS = [
  {
    id: "recoleccion",
    title: "Recolección de Datos",
    icon: FiDatabase,
    content: [
      "Recopilamos información de cuenta como nombre, correo electrónico y datos de autenticación al registrarte o iniciar sesión (incluso mediante proveedores externos como Google).",
      "Registramos datos de uso como las páginas visitadas, tiempo de permanencia, interacciones y dispositivos utilizados para mejorar la experiencia de usuario.",
      "Cuando realizas reservas o pagos, almacenamos información como el historial de transacciones, monto y fecha. No almacenamos datos completos de tarjetas de crédito ni credenciales bancarias."
    ]
  },
  {
    id: "almacenamiento",
    title: "Almacenamiento y Seguridad",
    icon: FiLock,
    content: [
      "Implementamos cifrado TLS/SSL para proteger los datos en tránsito y AES-256 para los datos almacenados.",
      "Los servidores están alojados en centros de datos con certificaciones de seguridad como ISO 27001.",
      "Contamos con políticas estrictas de acceso limitado al personal autorizado, autenticación de múltiples factores y registros de auditoría."
    ]
  },
  {
    id: "uso",
    title: "Uso de la Información",
    icon: FiUsers,
    content: [
      "Utilizamos la información para gestionar cuentas, personalizar la experiencia de usuario, procesar pagos y enviar notificaciones sobre actividades importantes.",
      "Con tu consentimiento, podemos enviarte comunicaciones promocionales, actualizaciones de productos y newsletters.",
      "Los datos también se utilizan para fines analíticos internos y mejora de nuestros servicios."
    ]
  },
  {
    id: "retencion",
    title: "Retención de Datos",
    icon: FiClock,
    content: [
      "Mantenemos tu información mientras tu cuenta esté activa y durante un período adicional para cumplir con requisitos legales y fiscales.",
      "Los datos de cuenta pueden conservarse hasta 12 meses después de la desactivación. Las transacciones se almacenan por hasta 7 años, conforme a normativas contables.",
      "Tras vencer el plazo de retención, la información se elimina o anonimiza de manera segura."
    ]
  },
  {
    id: "derechos",
    title: "Derechos de los Usuarios",
    icon: FiShield,
    content: [
      "Puedes solicitar acceso, rectificación o eliminación de tus datos personales en cualquier momento.",
      "Tienes derecho a oponerte al tratamiento de tus datos o solicitar su portabilidad en un formato estructurado y común.",
      "Para ejercer tus derechos, contáctanos mediante el correo de privacidad indicado al final de esta política."
    ]
  },
  {
    id: "cumplimiento",
    title: "Cumplimiento Normativo",
    icon: FiGlobe,
    content: [
      "Cumplimos con regulaciones internacionales de protección de datos como el Reglamento General de Protección de Datos (RGPD), la Ley de Privacidad del Consumidor de California (CCPA), y la Ley de Protección de Datos Personales en América Latina.",
      "Nuestros proveedores y socios contractuales están sujetos a políticas de privacidad y acuerdos de confidencialidad."
    ]
  },
  {
    id: "contacto",
    title: "Contacto",
    icon: FiMail,
    content: [
      "Si tienes preguntas sobre esta política o deseas ejercer tus derechos, puedes contactarnos a través del correo privacy@mybookzy.com.",
      "También puedes escribirnos a nuestra dirección física o comunicarte durante nuestro horario de atención disponible en el sitio web."
    ]
  }
];
