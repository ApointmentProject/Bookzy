import { FiShield, FiLock, FiDatabase, FiUsers } from "react-icons/fi";
import PolicySection from "../components/policy/PolicySection";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useTheme } from "../context/ThemeContext";

export default function PrivacyPolicy() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`w-full px-8 py-14 transition-colors duration-300 ${isDarkMode
        ? "bg-main-dark-bg text-white"
        : "bg-main-light-bg text-black"
        }`}
    >
      <Header />
      <section className="space-y-4 mt-10 transition-colors duration-150">
        <div className="flex items-center space-x-3">
          <FiShield className="h-8 w-8" />
          <h1 className="text-2xl font-bold tracking-tight">
            Política de Privacidad
          </h1>
        </div>
        <div className="rounded-lg border transition-colors duration-150 border-secundary-light-bg dark:border-secundary-dark-bg bg-secundary-light-bg dark:bg-secundary-dark-bg p-6">
          <p className="text-sm leading-relaxed">
            En Bookzy, nuestra prioridad es proteger la información que compartes con
            nosotros. A continuación, describimos cómo manejamos, almacenamos y
            protegemos tus datos. Última actualización: 15 de febrero de 2024.
          </p>
        </div>
      </section>

      <div className="space-y-6 mt-8 transition-colors duration-300">
        <PolicySection
          title="Recolección de datos"
          defaultOpen={true}
          content={[
            <div key="intro" className="flex items-start space-x-3">
              <FiDatabase className="mt-1 h-5 w-5 flex-shrink-0" />
              <p className="text-sm">
                Recopilamos diferentes tipos de información para proporcionar y
                mejorar nuestros servicios:
              </p>
            </div>,
            <div key="1" className="space-y-2 pl-8">
              <h4 className="font-medium text-lightSecondary dark:text-lightPrimary">
                Datos de cuenta y autenticación
              </h4>
              <p className="text-sm">
                Al registrarte o iniciar sesión (incluyendo proveedores externos como Google o
                Facebook), almacenamos tu correo electrónico, nombre, foto de perfil y datos
                necesarios para la autenticación.
              </p>
            </div>,
            <div key="2" className="space-y-2 pl-8">
              <h4 className="font-medium text-lightSecondary dark:text-lightPrimary">
                Datos de uso
              </h4>
              <p className="text-sm">
                Recopilamos información sobre cómo navegas e interactúas con Bookzy, incluyendo
                páginas visitadas, tiempo de permanencia y dispositivos utilizados.
              </p>
            </div>,
            <div key="3" className="space-y-2 pl-8">
              <h4 className="font-medium text-lightSecondary dark:text-lightPrimary">
                Datos de transacciones
              </h4>
              <p className="text-sm">
                Cuando realizas reservas o pagos, recopilamos detalles de la reserva, historial
                de transacciones e información de facturación. No almacenamos datos completos de
                tarjetas de crédito.
              </p>
            </div>,
          ]}
        />

        <PolicySection
          title="Almacenamiento y seguridad"
          content={[
            <div key="intro" className="flex items-start space-x-3">
              <FiLock className="mt-1 h-5 w-5 flex-shrink-0" />
              <p className="text-sm">
                Implementamos medidas técnicas y organizativas para proteger tu información:
              </p>
            </div>,
            <div key="1" className="space-y-2 pl-8">
              <h4 className="font-medium text-lightSecondary dark:text-lightPrimary">
                Servidores y cifrado
              </h4>
              <p className="text-sm">
                Toda la información se aloja en servidores seguros con cifrado TLS/SSL para datos
                en tránsito y cifrado AES-256 para datos en reposo. Nuestros proveedores cumplen con
                certificaciones como ISO 27001.
              </p>
            </div>,
            <div key="2" className="space-y-2 pl-8">
              <h4 className="font-medium text-lightSecondary dark:text-lightPrimary">
                Control de acceso
              </h4>
              <p className="text-sm">
                Solo el personal autorizado puede acceder a la información. Implementamos
                autenticación de múltiples factores y políticas de privilegios mínimos para reducir
                riesgos.
              </p>
            </div>,
          ]}
        />

        <PolicySection
          title="Uso de la información"
          content={[
            <div key="intro" className="flex items-start space-x-3">
              <FiUsers className="mt-1 h-5 w-5 flex-shrink-0" />
              <p className="text-sm">
                Tu información se utiliza exclusivamente para propósitos específicos y legítimos:
              </p>
            </div>,
            <div key="1" className="space-y-2 pl-8">
              <h4 className="font-medium text-lightSecondary dark:text-lightPrimary">
                Prestación de servicios
              </h4>
              <p className="text-sm">
                Utilizamos tus datos para gestionar tu cuenta, procesar reservas, enviar notificaciones
                relacionadas con tus reservas y personalizar tu experiencia.
              </p>
            </div>,
            <div key="2" className="space-y-2 pl-8">
              <h4 className="font-medium text-lightSecondary dark:text-lightPrimary">
                Comunicaciones
              </h4>
              <p className="text-sm">
                Podemos enviarte correos electrónicos transaccionales, notificaciones sobre cambios en
                nuestros términos, alertas de seguridad y, con tu consentimiento, comunicaciones de
                marketing.
              </p>
            </div>,
            <div key="3" className="space-y-2 pl-8">
              <h4 className="font-medium text-lightSecondary dark:text-lightPrimary">
                Proveedores externos
              </h4>
              <p className="text-sm">
                Compartimos datos con terceros solo cuando es necesario para procesar pagos, enviar
                comunicaciones, análisis o cumplir requisitos legales. Todos nuestros proveedores
                cumplen con altos estándares de seguridad.
              </p>
            </div>,
          ]}
        />

        <PolicySection
          title="Retención de datos"
          content={[
            <div key="1" className="space-y-2">
              <p className="text-sm">
                Mantenemos tu información mientras tengas una cuenta activa o mientras sea necesario
                para cumplir fines operativos y legales:
              </p>
              <ul className="list-inside list-disc space-y-1 text-sm pl-4">
                <li>
                  Datos de cuenta: mientras la cuenta esté activa y hasta 12 meses después de su cierre
                </li>
                <li>
                  Datos de transacciones: hasta 7 años (requisitos fiscales)
                </li>
                <li>
                  Datos de comunicaciones: hasta 2 años
                </li>
              </ul>
              <p className="mt-2 text-sm">
                Pasado el período de retención o a solicitud del usuario, eliminamos o anonimizamos la
                información de forma segura, salvo cuando la ley requiera conservarla por más tiempo.
              </p>
            </div>,
          ]}
        />

        <PolicySection
          title="Derechos de los usuarios"
          content={[
            <div key="1" className="space-y-2">
              <p className="text-sm">
                Respetamos y facilitamos el ejercicio de tus derechos sobre tus datos personales:
              </p>
              <ul className="list-inside list-disc space-y-1 text-sm pl-4">
                <li>
                  <strong>Acceso:</strong> Derecho a saber qué datos personales tenemos sobre ti
                </li>
                <li>
                  <strong>Rectificación:</strong> Derecho a corregir datos inexactos
                </li>
                <li>
                  <strong>Eliminación:</strong> Derecho a solicitar la eliminación de tus datos
                </li>
                <li>
                  <strong>Portabilidad:</strong> Derecho a recibir tus datos en un formato transferible
                </li>
                <li>
                  <strong>Oposición:</strong> Derecho a oponerte al procesamiento de tus datos
                </li>
              </ul>
              <p className="mt-2 text-sm">
                Para ejercer estos derechos, contacta a{" "}
                <a
                  href="mailto:privacy@mybookzy.com"
                  className="underline text-primary-indigo"
                >
                  privacy@mybookzy.com
                </a>
              </p>
            </div>,
          ]}
        />

        <PolicySection
          title="Cumplimiento normativo"
          content={[
            <div key="1" className="space-y-2">
              <p className="text-sm">
                Bookzy cumple con las regulaciones de protección de datos aplicables,
                incluyendo:
              </p>
              <ul className="list-inside list-disc space-y-1 text-sm pl-4">
                <li>
                  Reglamento General de Protección de Datos (RGPD) en la Unión Europea
                </li>
                <li>
                  Ley de Privacidad del Consumidor de California (CCPA)
                </li>
                <li>
                  Ley de Protección de Datos Personales en países latinoamericanos
                </li>
              </ul>
            </div>,
          ]}
        />

        <div className="rounded-lg border transition-colors duration-150 border-secundary-light-bg dark:border-secundary-dark-bg bg-secundary-light-bg dark:bg-secundary-dark-bg p-6">
          <h3 className="mb-4 text-lg font-medium">Contacto</h3>
          <p className="text-sm">
            Para más detalles o preguntas sobre cómo gestionamos tu información:
          </p>
          <div className="mt-4 space-y-2">
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:privacy@mybookzy.com"
                className="underline text-primary-indigo"
              >
                privacy@mybookzy.com
              </a>
            </p>
            <p className="text-sm">
              Dirección: Av. Tecnológica 123, Ciudad Innovación, CP 12345
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
