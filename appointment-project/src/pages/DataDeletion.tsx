import { FiTrash2, FiShield, FiCheckCircle } from "react-icons/fi";
import PolicySection from "../components/policy/PolicySection";
import { useTheme } from "../context/ThemeContext";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header"; // Ajusta la ruta según corresponda

export default function DataDeletion() {
  const { isDarkMode } = useTheme();
  const containerClasses = isDarkMode ? "bg-main-dark-bg text-white" : "bg-main-light-bg text-black";

  return (
    <div className={`${containerClasses} w-full min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8`}>
      <Header />
      <div className="mb-8">
        <div className="flex items-center space-x-3">
          <FiTrash2 className="h-8 w-8" />
          <h1 className="text-2xl font-bold tracking-tight">
            Instrucciones de Eliminación de Datos
          </h1>
        </div>
        <div className="mt-4">
          <p>
            En Bookzy, respetamos tu derecho a solicitar la eliminación de tus datos personales. A continuación describimos el proceso que seguimos cuando solicitas que eliminemos tu información. Última actualización: 15 de febrero de 2024.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <PolicySection
          title="Solicitud de eliminación"
          defaultOpen={true}
          content={[
            <div key="1" className="space-y-2">
              <h3 className="text-lg font-medium">Cómo solicitar la eliminación</h3>
              <p>
                Para solicitar la eliminación de tu cuenta y datos personales, dispones de estas opciones:
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li>
                  Enviar un correo a{" "}
                  <a href="mailto:delete@mybookzy.com" className="underline text-primary-indigo">
                    delete@mybookzy.com
                  </a>{" "}
                  con el asunto "Solicitud de eliminación de datos"
                </li>
                <li>
                  Utilizar el formulario en{" "}
                  <a href="https://mybookzy.com/data-deletion" className="underline text-primary-indigo">
                    https://mybookzy.com/data-deletion
                  </a>
                </li>
                <li>Acceder a la configuración de tu cuenta y seleccionar "Eliminar mi cuenta"</li>
              </ul>
              <p>
                En tu solicitud, incluye el correo electrónico asociado a tu cuenta y tu nombre completo.
              </p>
            </div>,
            <div key="2" className="space-y-2">
              <h3 className="text-lg font-medium">Verificación de identidad</h3>
              <p>
                Verificaremos que la solicitud provenga del titular de la cuenta mediante un código de verificación enviado a tu correo electrónico o validación a través del método de autenticación que usaste.
              </p>
            </div>,
          ]}
        />

        <PolicySection
          title="Proceso de eliminación"
          content={[
            <div key="intro" className="flex items-start space-x-3">
              <FiShield className="mt-1 h-5 w-5" />
              <p>
                Una vez confirmada la solicitud, iniciamos un proceso meticuloso para eliminar tus datos:
              </p>
            </div>,
            <div key="1" className="space-y-2 pl-8">
              <h3 className="text-lg font-medium">Desactivación de la cuenta</h3>
              <p>
                Primero desactivamos tu cuenta para que no sea accesible, revocando todas las sesiones activas y desactivando las credenciales de acceso.
              </p>
            </div>,
            <div key="2" className="space-y-2 pl-8">
              <h3 className="text-lg font-medium">Eliminación de datos</h3>
              <p>
                Eliminamos tu información personal de nuestras bases de datos principales, incluyendo datos de perfil, registros de autenticación, preferencias y configuraciones, historial de reservas y comunicaciones.
              </p>
            </div>,
            <div key="3" className="space-y-2 pl-8">
              <h3 className="text-lg font-medium">Copias de seguridad</h3>
              <p>
                Tu información será eliminada automáticamente de los respaldos en un plazo de 30 días. Durante ese periodo, tus datos no serán utilizados ni restaurados a los sistemas activos.
              </p>
            </div>,
            <div key="4" className="space-y-2 pl-8">
              <h3 className="text-lg font-medium">Excepciones legales</h3>
              <p>
                Si existiera un requerimiento legal para conservar cierta información (como registros de facturación), te lo notificaremos y mantendremos esos datos el tiempo que exija la legislación aplicable.
              </p>
            </div>,
          ]}
        />

        <PolicySection
          title="Confirmación y consecuencias"
          content={[
            <div key="intro" className="flex items-start space-x-3">
              <FiCheckCircle className="mt-1 h-5 w-5" />
              <p>
                Una vez completado el proceso:
              </p>
            </div>,
            <div key="1" className="space-y-2 pl-8">
              <h3 className="text-lg font-medium">Notificación</h3>
              <p>
                Te enviaremos un correo electrónico confirmando que tu cuenta ha sido eliminada permanentemente y tu información personal ha sido eliminada o anonimizada.
              </p>
            </div>,
            <div key="2" className="space-y-2 pl-8">
              <h3 className="text-lg font-medium">Consecuencias</h3>
              <p>
                Al eliminar tus datos:
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Perderás acceso permanente a tu cuenta</li>
                <li>Se eliminarán todas tus reservas pasadas y futuras</li>
                <li>Perderás cualquier crédito o beneficio acumulado</li>
                <li>No podrás recuperar ningún contenido o historial</li>
              </ul>
              <p>
                La eliminación es irreversible. Si deseas volver a usar Bookzy, deberás crear una cuenta nueva.
              </p>
            </div>,
            <div key="3" className="space-y-2 pl-8">
              <h3 className="text-lg font-medium">Período de reflexión</h3>
              <p>
                Ofrecemos un período de 48 horas después de confirmar tu solicitud durante el cual puedes cancelarla respondiendo al correo de confirmación.
              </p>
            </div>,
          ]}
        />

        <div className="mt-8 rounded-md bg-white dark:bg-gray-900">
          <div className="p-4">
            <h3 className="mb-4 text-xl font-medium">Contacto para eliminación de datos</h3>
            <p>
              Si tienes dudas sobre este proceso, puedes contactar a:
            </p>
            <div className="mt-4 space-y-2">
              <p>
                Email:{" "}
                <a href="mailto:delete@mybookzy.com" className="underline text-primary-indigo">
                  delete@mybookzy.com
                </a>
              </p>
              <p>
                Formulario web:{" "}
                <a href="https://mybookzy.com/data-deletion" className="underline text-primary-indigo">
                  https://mybookzy.com/data-deletion
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
