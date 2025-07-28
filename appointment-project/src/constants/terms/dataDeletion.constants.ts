import { IconType } from "react-icons";
import {
  FiShield,
  FiCheckCircle,
  FiMail,
  FiClock,
  FiAlertTriangle,
  FiMapPin,
} from "react-icons/fi";

// Tipo para las secciones de la tabla de contenidos
export interface TableOfContentItem {
  id: string;
  title: string;
  icon: IconType;
}


export interface ContactInfo {
  title: string;
  value: string;
  icon?: IconType;
  customIcon?: string;
  note?: string;
  linkType?: "email" | "web" | "text";
  lines?: string[];
}

// Tabla de contenidos
export const TABLE_OF_CONTENTS: TableOfContentItem[] = [
  { id: "solicitud", title: "Solicitud de Eliminación", icon: FiMail },
  { id: "proceso", title: "Proceso de Eliminación", icon: FiShield },
  { id: "confirmacion", title: "Confirmación y Consecuencias", icon: FiCheckCircle },
  { id: "contacto", title: "Contacto", icon: FiMail },
];

// Información general
export const GENERAL_INFO = {
  lastUpdate: "28 de Julio de 2025",
  version: "1.0",
  effectiveDate: "28 de Julio de 2025",
};

// Textos del Hero
export const HERO_TEXTS = {
  title: "Instrucciones de Eliminación de Datos",
  subtitle: "En Bookzy, respetamos tu derecho a solicitar la eliminación de tus datos personales. A continuación describimos el proceso que seguimos cuando solicitas que eliminemos tu información.",
};

// Sección 1: Solicitud de Eliminación
export const REQUEST_SECTION = {
  title: "1. Solicitud de Eliminación",
  howToRequest: {
    title: "Cómo solicitar la eliminación",
    intro: "Para solicitar la eliminación de tu cuenta y datos personales, dispones de estas opciones:",
    methods: [
      {
        icon: FiMail,
        title: "Email",
        description: "Enviar correo con asunto \"Solicitud de eliminación de datos\"",
        link: "delete@mybookzy.com",
        linkType: "email",
      },
      {
        customIcon: "🌐",
        title: "Formulario Web",
        description: "Utilizar el formulario online",
        link: "mybookzy.com/data-deletion",
        linkType: "web",
      },
      {
        customIcon: "⚙️",
        title: "Configuración",
        description: "Desde tu cuenta",
        extra: "\"Eliminar mi cuenta\"",
      },
    ],
    requiredInfo: {
      title: "📋 Información Requerida",
      text: "En tu solicitud, incluye el correo electrónico asociado a tu cuenta y tu nombre completo.",
    },
  },
  verification: {
    title: "Verificación de identidad",
    text: "Verificaremos que la solicitud provenga del titular de la cuenta mediante un código de verificación enviado a tu correo electrónico o validación a través del método de autenticación que usaste.",
  },
};

// Sección 2: Proceso de Eliminación
export const PROCESS_SECTION = {
  title: "2. Proceso de Eliminación",
  intro: "Una vez confirmada la solicitud, iniciamos un proceso meticuloso para eliminar tus datos:",
  steps: [
    {
      number: "1",
      title: "Desactivación de la cuenta",
      description: "Primero desactivamos tu cuenta para que no sea accesible, revocando todas las sesiones activas y desactivando las credenciales de acceso.",
    },
    {
      number: "2",
      title: "Eliminación de datos",
      description: "Eliminamos tu información personal de nuestras bases de datos principales, incluyendo:",
      items: [
        "Datos de perfil",
        "Registros de autenticación",
        "Preferencias y configuraciones",
        "Historial de reservas",
        "Comunicaciones",
        "Información de contacto",
      ],
    },
    {
      number: "3",
      title: "Copias de seguridad",
      description: "Tu información será eliminada automáticamente de los respaldos en un plazo de 30 días. Durante ese periodo, tus datos no serán utilizados ni restaurados a los sistemas activos.",
      hasWarning: true,
    },
    {
      number: "⚖️",
      title: "Excepciones legales",
      description: "Si existiera un requerimiento legal para conservar cierta información (como registros de facturación), te lo notificaremos y mantendremos esos datos el tiempo que exija la legislación aplicable.",
      isLegal: true,
    },
  ],
};

// Sección 3: Confirmación y Consecuencias
export const CONFIRMATION_SECTION = {
  title: "3. Confirmación y Consecuencias",
  notification: {
    title: "Una vez completado el proceso:",
    subtitle: "Notificación",
    text: "Te enviaremos un correo electrónico confirmando que tu cuenta ha sido eliminada permanentemente y tu información personal ha sido eliminada o anonimizada.",
  },
  consequences: {
    title: "Consecuencias de la eliminación",
    warning: {
      icon: FiAlertTriangle,
      title: "⚠️ Proceso Irreversible",
      text: "La eliminación es permanente. Si deseas volver a usar Bookzy, deberás crear una cuenta nueva.",
    },
    intro: "Al eliminar tus datos:",
    losses: {
      title: "✗ Perderás",
      items: [
        "Acceso permanente a tu cuenta",
        "Todas tus reservas pasadas y futuras",
        "Cualquier crédito o beneficio acumulado",
        "Todo contenido o historial",
      ],
    },
    guarantees: {
      title: "✓ Licencia Otorgada a Usuarios",
      items: [
        "Eliminación completa de datos personales",
        "Confirmación por email del proceso",
        "Cumplimiento de regulaciones de privacidad",
        "Transparencia en todo el proceso",
      ],
    },
  },
  reflectionPeriod: {
    title: "Período de reflexión",
    text: "Ofrecemos un período de 48 horas después de confirmar tu solicitud durante el cual puedes cancelarla respondiendo al correo de confirmación.",
    tip: "💡 Consejo: Asegúrate de descargar cualquier información importante antes de proceder con la eliminación.",
  },
};

// Sección 4: Contacto
export const CONTACT_SECTION = {
  title: "4. Contacto para Eliminación de Datos",
  intro: "Si tienes dudas sobre este proceso, puedes contactar a:",
  contacts: [
    {
      icon: FiMail,
      title: "Email Especializado",
      value: "delete@mybookzy.com",
      linkType: "email",
      note: "Exclusivo para eliminación de datos",
    },
    {
      customIcon: "🌐",
      title: "Formulario Web",
      value: "mybookzy.com/data-deletion",
      linkType: "web",
      note: "Proceso guiado paso a paso",
    },
    {
      icon: FiClock,
      title: "Tiempo de Respuesta",
      value: "24-48 horas hábiles",
      note: "Confirmación inmediata por email",
    },
    {
      icon: FiMapPin,
      title: "Horario de Atención",
      lines: ["Lunes a Viernes: 9:00 - 18:00", "Zona horaria: GMT-6 (Costa Rica)"],
    },
  ],
  importantNote: "Este canal está dedicado exclusivamente a solicitudes de eliminación de datos. Para otras consultas, utiliza nuestros canales de soporte general.",
};

// Enlaces del footer
export const FOOTER_LINKS = [
  { href: "/privacy", text: "Política de Privacidad" },
  { href: "/terms", text: "Términos de Servicio" },
  { href: "/contact", text: "Contacto" },
];

// Texto del footer
export const FOOTER_TEXT = {
  copyright: "© 2025 Bookzy. Todos los derechos reservados.",
  version: `Eliminación de Datos - Versión ${GENERAL_INFO.version} - Vigente desde el ${GENERAL_INFO.effectiveDate}`,
};

// Breadcrumbs
export const BREADCRUMBS = [
  { text: "Inicio", isActive: false },
  { text: "Legal", isActive: false },
  { text: "Eliminación de Datos", isActive: true },
];