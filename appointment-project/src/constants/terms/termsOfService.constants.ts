import { IconType } from "react-icons";
import {
  FiShield,
  FiUser,
  FiCalendar,
  FiCreditCard,
  FiLock,
  FiFileText,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

// Tipo para las secciones de la tabla de contenidos
export interface TableOfContentItem {
  id: string;
  title: string;
  icon: IconType;
}

// Tabla de contenidos
export const TABLE_OF_CONTENTS: TableOfContentItem[] = [
  { id: "introduccion", title: "Introducción y Aceptación", icon: FiShield },
  { id: "definiciones", title: "Definiciones", icon: FiFileText },
  { id: "uso-servicio", title: "Uso del Servicio", icon: FiUser },
  { id: "agendamiento", title: "Agendamiento de Citas", icon: FiCalendar },
  { id: "cuentas-negocio", title: "Cuentas de Negocio", icon: FiCreditCard },
  { id: "privacidad", title: "Privacidad y Datos", icon: FiLock },
  { id: "propiedad", title: "Propiedad Intelectual", icon: FiFileText },
  { id: "pagos", title: "Pagos y Facturación", icon: FiCreditCard },
  { id: "limitacion", title: "Limitación de Responsabilidad", icon: FiShield },
  { id: "modificaciones", title: "Modificaciones", icon: FiFileText },
  { id: "terminacion", title: "Terminación", icon: FiUser },
  { id: "contacto", title: "Contacto", icon: FiMail },
];

// Información general
export const GENERAL_INFO = {
  lastUpdate: "28 de enero de 2025",
  version: "1.0",
  effectiveDate: "28 de enero de 2025",
};

// Textos del Hero
export const HERO_TEXTS = {
  title: "Términos de Servicio",
  subtitle: "Estos términos rigen el uso de la plataforma Bookzy y establecen los derechos y responsabilidades de todos los usuarios.",
};

// Sección 1: Introducción y Aceptación
export const INTRODUCTION_SECTION = {
  title: "1. Introducción y Aceptación",
  content: {
    welcome: "Bienvenido a Bookzy, una plataforma web que automatiza el proceso de agendamiento de citas entre clientes y negocios como barberías, restaurantes, gimnasios, consultorios médicos y otros servicios.",
    acceptanceTitle: "Aceptación de Términos",
    acceptanceText: "Al acceder y utilizar Bookzy, usted acepta estar legalmente obligado por estos Términos de Servicio. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro servicio.",
    minimumAge: "Debe tener al menos 18 años para utilizar Bookzy. Al registrarse, confirma que cumple con este requisito de edad.",
    legalAgreement: "Estos términos constituyen un acuerdo legal entre usted y Bookzy. Le recomendamos leer cuidadosamente todo el documento antes de utilizar nuestros servicios.",
  },
};

// Sección 2: Definiciones
export const DEFINITIONS = [
  {
    term: "Usuario",
    definition: "Cualquier persona que se registre y utilice la plataforma Bookzy para agendar citas o servicios.",
  },
  {
    term: "Negocio",
    definition: "Empresa, establecimiento o profesional independiente que ofrece servicios a través de la plataforma Bookzy.",
  },
  {
    term: "Servicio",
    definition: "Cualquier actividad, tratamiento o prestación ofrecida por un Negocio a través de la plataforma.",
  },
  {
    term: "Cita",
    definition: "Reserva confirmada entre un Usuario y un Negocio para un Servicio específico en fecha y hora determinadas.",
  },
  {
    term: "Plataforma",
    definition: "La aplicación web Bookzy, incluyendo todas sus funcionalidades, interfaces y servicios relacionados.",
  },
];

// Sección 3: Uso del Servicio
export const SERVICE_USE_SECTION = {
  title: "3. Uso del Servicio",
  registration: {
    title: "3.1 Registro de Cuenta",
    items: [
      "Puede registrarse usando email/contraseña o mediante Google (Firebase)",
      "Debe proporcionar información veraz y actualizada",
      "Es responsable de mantener la confidencialidad de sus credenciales",
      "Debe notificar inmediatamente cualquier uso no autorizado de su cuenta",
    ],
  },
  responsibilities: {
    title: "3.2 Responsabilidades del Usuario",
    allowed: {
      title: "✓ Permitido",
      items: [
        "Agendar citas legítimas",
        "Proporcionar información veraz",
        "Respetar horarios acordados",
        "Comunicarse respetuosamente",
      ],
    },
    prohibited: {
      title: "✗ Prohibido",
      items: [
        "Crear citas falsas o spam",
        "Suplantar identidades",
        "Usar información de terceros sin autorización",
        "Interferir con el funcionamiento de la plataforma",
      ],
    },
  },
  veracity: {
    title: "⚠️ Veracidad de la Información",
    text: "Toda la información proporcionada debe ser precisa y actualizada. La información falsa puede resultar en la suspensión o terminación de su cuenta.",
  },
};

// Sección 4: Agendamiento de Citas
export const APPOINTMENT_SECTION = {
  title: "4. Agendamiento de Citas",
  bookingProcess: {
    title: "4.1 Proceso de Reserva",
    steps: [
      {
        number: "1",
        title: "Selección",
        description: "Elija el negocio y servicio deseado",
      },
      {
        number: "2",
        title: "Programación",
        description: "Seleccione fecha y hora disponible",
      },
      {
        number: "3",
        title: "Confirmación",
        description: "Reciba confirmación de la cita",
      },
    ],
  },
  cancellationPolicy: {
    title: "4.2 Políticas de Cancelación",
    policies: [
      {
        title: "Cancelación por el Usuario",
        description: "Puede cancelar hasta 2 horas antes de la cita sin penalización",
        color: "primary-indigo",
      },
      {
        title: "Cancelación por el Negocio",
        description: "El negocio debe notificar con al menos 4 horas de anticipación",
        color: "primary-indigo",
      },
      {
        title: "No-Shows",
        description: "Múltiples ausencias sin aviso pueden resultar en restricciones de cuenta",
        color: "red",
      },
    ],
  },
  serviceResponsibility: {
    title: "ℹ️ Responsabilidad sobre Servicios",
    text: "Bookzy actúa como intermediario. La calidad y prestación de los servicios es responsabilidad exclusiva del Negocio correspondiente.",
  },
};

// Sección 5: Cuentas de Negocio
export const BUSINESS_SECTION = {
  title: "5. Cuentas de Negocio",
  requirements: {
    title: "5.1 Requisitos para Registro",
    documentation: {
      title: "Documentación Requerida",
      items: [
        "Registro mercantil o licencia comercial",
        "Identificación del representante legal",
        "Comprobante de domicilio del establecimiento",
        "Certificaciones profesionales (si aplica)",
      ],
    },
    information: {
      title: "Información del Negocio",
      items: [
        "Nombre comercial y razón social",
        "Dirección física del establecimiento",
        "Horarios de operación",
        "Servicios ofrecidos y precios",
      ],
    },
  },
  fees: {
    title: "5.2 Comisiones y Tarifas",
    items: [
      { description: "Comisión por cita completada", value: "5%" },
      { description: "Tarifa mensual de suscripción", value: "$29.99" },
      { description: "Procesamiento de pagos", value: "2.9% + $0.30" },
    ],
  },
  obligations: {
    title: "5.3 Obligaciones del Negocio",
    items: [
      "Mantener información actualizada y precisa",
      "Honrar todas las citas confirmadas",
      "Proporcionar servicios de calidad profesional",
      "Cumplir con regulaciones locales y sanitarias",
      "Responder a consultas de clientes oportunamente",
    ],
  },
};

// Sección 6: Privacidad y Datos
export const PRIVACY_SECTION = {
  title: "6. Privacidad y Datos",
  intro: "La protección de su privacidad es fundamental para nosotros. Para información detallada sobre cómo recopilamos, utilizamos y protegemos sus datos, consulte nuestra",
  linkText: "Política de Privacidad",
  dataUse: {
    title: "Uso de Datos para Mejoras",
    items: [
      "Análisis de patrones de uso",
      "Optimización de funcionalidades",
      "Personalización de experiencia",
      "Prevención de fraude",
    ],
  },
  dataSharing: {
    title: "Compartir Información",
    items: [
      "Datos de contacto con negocios para citas",
      "Información necesaria para el servicio",
      "Nunca vendemos datos personales",
      "Cumplimiento de regulaciones legales",
    ],
  },
  rights: {
    title: "🔒 Sus Derechos",
    text: "Puede acceder, modificar o eliminar sus datos personales en cualquier momento desde su perfil o contactándonos directamente.",
  },
};

// Sección 7: Propiedad Intelectual
export const INTELLECTUAL_PROPERTY_SECTION = {
  title: "7. Propiedad Intelectual",
  rights: {
    title: "7.1 Derechos sobre Bookzy",
    intro: "Todos los derechos de propiedad intelectual sobre la plataforma Bookzy, incluyendo pero no limitado a:",
    items: [
      "Código fuente y software",
      "Diseño e interfaz de usuario",
      "Logotipos y marcas comerciales",
      "Contenido y documentación",
      "Algoritmos y funcionalidades",
      "Base de datos y estructura",
      "Materiales de marketing",
      "Innovaciones y mejoras",
    ],
    conclusion: "Son propiedad exclusiva de Bookzy y están protegidos por las leyes de propiedad intelectual aplicables.",
  },
  licenses: {
    title: "7.2 Licencias de Uso",
    granted: {
      title: "✓ Licencia Otorgada a Usuarios",
      intro: "Le otorgamos una licencia limitada, no exclusiva y revocable para:",
      items: [
        "Acceder y usar la plataforma para fines personales",
        "Agendar citas y gestionar su cuenta",
        "Interactuar con negocios a través de la plataforma",
      ],
    },
    restrictions: {
      title: "✗ Restricciones",
      items: [
        "No puede copiar, modificar o distribuir el software",
        "No puede realizar ingeniería inversa",
        "No puede crear trabajos derivados",
        "No puede usar la plataforma para fines comerciales no autorizados",
      ],
    },
  },
  userContent: {
    title: "7.3 Contenido Generado por Usuarios",
    intro: "Al subir contenido a la plataforma (reseñas, fotos, comentarios), usted:",
    items: [
      "Mantiene la propiedad de su contenido original",
      "Otorga a Bookzy una licencia para usar, mostrar y distribuir el contenido",
      "Garantiza que tiene los derechos necesarios sobre el contenido",
      "Se responsabiliza por la legalidad y precisión del contenido",
    ],
  },
};

// Sección 8: Pagos y Facturación
export const PAYMENT_SECTION = {
  title: "8. Pagos y Facturación",
  methods: {
    title: "8.1 Métodos de Pago Aceptados",
    items: [
      {
        icon: FiCreditCard,
        title: "Tarjetas",
        description: "Visa, MasterCard, American Express",
      },
      {
        customIcon: "PP",
        title: "PayPal",
        description: "Cuenta PayPal verificada",
      },
      {
        customIcon: "$",
        title: "Transferencia",
        description: "Transferencia bancaria directa",
      },
    ],
  },
  refundPolicy: {
    title: "8.2 Políticas de Reembolso",
    policies: [
      {
        title: "Reembolso Completo",
        description: "Cancelación con más de 24 horas de anticipación",
        color: "green",
      },
      {
        title: "Reembolso Parcial (50%)",
        description: "Cancelación entre 2-24 horas antes de la cita",
        color: "yellow",
      },
      {
        title: "Sin Reembolso",
        description: "Cancelación con menos de 2 horas o no-show",
        color: "red",
      },
    ],
  },
  disputes: {
    title: "8.3 Disputas de Pago",
    intro: "En caso de disputas relacionadas con pagos, seguimos este proceso:",
    steps: [
      "Contacte nuestro soporte dentro de 7 días",
      "Investigación y mediación (5-10 días hábiles)",
      "Resolución y comunicación de decisión",
    ],
  },
};

// Sección 9: Limitación de Responsabilidad
export const LIABILITY_SECTION = {
  title: "9. Limitación de Responsabilidad",
  intermediaryRole: {
    title: "⚠️ Importante: Rol de Intermediario",
    text: "Bookzy actúa únicamente como intermediario tecnológico entre usuarios y negocios. No somos responsables por la calidad, seguridad o legalidad de los servicios prestados por terceros.",
  },
  exclusions: {
    title: "9.1 Exclusiones de Responsabilidad",
    thirdPartyServices: {
      title: "Servicios de Terceros",
      items: [
        "Calidad de servicios prestados por negocios",
        "Lesiones o daños durante la prestación del servicio",
        "Incumplimiento de citas por parte de negocios",
        "Disputas entre usuarios y negocios",
      ],
    },
    serviceAvailability: {
      title: "Disponibilidad del Servicio",
      items: [
        "Interrupciones temporales del servicio",
        "Mantenimiento programado o de emergencia",
        "Fallas técnicas o de conectividad",
        "Ataques cibernéticos o problemas de seguridad",
      ],
    },
  },
  damageLimitations: {
    title: "9.2 Limitaciones de Daños",
    intro: "En ningún caso Bookzy será responsable por daños indirectos, incidentales, especiales o consecuenciales, incluyendo pero no limitado a:",
    items: [
      "Pérdida de ganancias o ingresos",
      "Pérdida de datos o información",
      "Daño a la reputación",
      "Costos de servicios sustitutos",
      "Interrupción de negocio",
      "Pérdida de oportunidades",
      "Daños punitivos",
      "Cualquier otro daño indirecto",
    ],
  },
  maxLiability: {
    title: "💡 Nuestra Responsabilidad Máxima",
    text: "En caso de que se determine responsabilidad, el monto máximo será equivalente a las tarifas pagadas por el usuario en los últimos 12 meses, sin exceder $1,000 USD.",
  },
};

// Sección 10: Modificaciones
export const MODIFICATIONS_SECTION = {
  title: "10. Modificaciones",
  rightToModify: {
    title: "10.1 Derecho a Modificar",
    intro: "Nos reservamos el derecho de modificar estos Términos de Servicio en cualquier momento para reflejar cambios en:",
    items: [
      "Funcionalidades de la plataforma",
      "Regulaciones legales aplicables",
      "Políticas comerciales",
      "Mejoras en seguridad y privacidad",
    ],
  },
  notification: {
    title: "10.2 Notificación de Cambios",
    methods: [
      {
        icon: FiMail,
        title: "Notificación por Email",
        description: "Le enviaremos un aviso a su dirección de correo registrada",
      },
      {
        customIcon: "!",
        title: "Notificación en la Plataforma",
        description: "Mostraremos un aviso prominente al iniciar sesión",
      },
      {
        icon: FiCalendar,
        title: "Período de Gracia",
        description: "30 días para revisar los cambios antes de que entren en vigor",
      },
    ],
  },
  acceptance: {
    title: "📋 Aceptación de Cambios",
    text: "El uso continuado de la plataforma después de la notificación constituye aceptación de los nuevos términos. Si no está de acuerdo, puede cerrar su cuenta.",
  },
};

// Sección 11: Terminación
export const TERMINATION_SECTION = {
  title: "11. Terminación",
  byUser: {
    title: "11.1 Terminación por el Usuario",
    intro: "Puede cerrar su cuenta en cualquier momento desde la configuración de su perfil o contactándonos directamente. Al cerrar su cuenta:",
    effects: [
      "Se cancelarán todas las citas futuras",
      "Perderá acceso a su historial de citas",
      "Sus datos se procesarán según nuestra Política de Privacidad",
      "Las obligaciones de pago pendientes permanecen vigentes",
    ],
  },
  byBookzy: {
    title: "11.2 Terminación por Bookzy",
    intro: "Podemos suspender o cerrar su cuenta inmediatamente en caso de:",
    seriousViolations: {
      title: "Violaciones Graves",
      items: [
        "Uso fraudulento de la plataforma",
        "Suplantación de identidad",
        "Actividades ilegales",
        "Ataques al sistema",
      ],
    },
    breaches: {
      title: "Incumplimientos",
      items: [
        "Violación repetida de términos",
        "No-shows frecuentes",
        "Comportamiento abusivo",
        "Falta de pago",
      ],
    },
  },
  effects: {
    title: "11.3 Efectos de la Terminación",
    immediate: {
      title: "Inmediatos",
      items: [
        "Pérdida de acceso a la cuenta y servicios",
        "Cancelación de citas futuras",
        "Suspensión de licencias otorgadas",
      ],
    },
    permanent: {
      title: "Permanentes",
      items: [
        "Las obligaciones de pago siguen vigentes",
        "Las limitaciones de responsabilidad permanecen",
        "Los derechos de propiedad intelectual se mantienen",
      ],
    },
  },
};

// Sección 12: Contacto
export const CONTACT_SECTION = {
  title: "12. Contacto",
  intro: "Si tiene preguntas sobre estos Términos de Servicio o necesita asistencia, puede contactarnos a través de los siguientes medios:",
  contacts: {
    legal: {
      icon: FiMail,
      title: "Email Legal",
      value: "legal@bookzy.com",
      note: "Respuesta en 24-48 horas",
    },
    address: {
      icon: FiMapPin,
      title: "Dirección Física",
      lines: [
        "Av. Tecnológica 123, Piso 8",
        "Ciudad de México, CDMX 01234",
        "México",
      ],
    },
    support: {
      customIcon: "?",
      title: "Soporte General",
      value: "soporte@bookzy.com",
      note: "Para consultas técnicas",
    },
    hours: {
      customIcon: "⚖",
      title: "Horario de Atención",
      lines: ["Lunes a Viernes: 9:00 - 18:00", "Zona horaria: GMT-6 (México)"],
    },
  },
  importantNote: "Para consultas urgentes relacionadas con citas o problemas técnicos, utilice el soporte general. El email legal está destinado únicamente para asuntos relacionados con estos términos y condiciones.",
};

// Enlaces del footer
export const FOOTER_LINKS = [
  { href: "/privacy", text: "Política de Privacidad" },
  { href: "/data-deletion", text: "Eliminación de Datos" },
  { href: "/contact", text: "Contacto" },
];

// Texto del footer
export const FOOTER_TEXT = {
  copyright: "© 2025 Bookzy. Todos los derechos reservados.",
  version: `Términos de Servicio - Versión ${GENERAL_INFO.version} - Vigente desde el ${GENERAL_INFO.effectiveDate}`,
};