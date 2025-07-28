import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Header from "../components/header/Header";
import { useTheme } from "../context/ThemeContext";

export default function TermsAndPolitics() {
  const { isDarkMode } = useTheme();
  const containerClasses = isDarkMode
    ? "bg-main-dark-bg text-white transition-colors duration-300"
    : "bg-main-light-bg text-lightSecondary transition-colors duration-300";

  return (
    <div className={`${containerClasses} min-h-screen pt-20`}>
      <Header />
      <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <section className="space-y-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Políticas y Términos de Bookzy
          </h1>
          <p className="text-lg">
            En Bookzy, nos comprometemos a proteger tu privacidad y garantizar la transparencia en el manejo de tus datos.
          </p>
        </section>

        <div className="grid gap-8 mt-8 w-full max-w-6xl md:grid-cols-2 lg:grid-cols-3">
          <Link to="/privacy" className="group">
            <div className="rounded-lg border border-secundary-light-bg dark:border-secundary-dark-bg bg-secundary-light-bg dark:bg-secundary-dark-bg p-6 shadow-sm hover:shadow-md transition-colors duration-300">
              <h2 className="mb-4 text-xl font-semibold">
                Política de Privacidad
              </h2>
              <p className="mb-6">
                Información sobre cómo recopilamos, almacenamos, utilizamos y protegemos tus datos personales.
              </p>
              <div className="flex items-center text-sm font-medium text-primary-indigo">
                Leer política
                <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          <Link to="/data-deletion" className="group">
            <div className="rounded-lg border border-secundary-light-bg dark:border-secundary-dark-bg bg-secundary-light-bg dark:bg-secundary-dark-bg p-6 shadow-sm hover:shadow-md transition-colors duration-300">
              <h2 className="mb-4 text-xl font-semibold">
                Eliminación de Datos
              </h2>
              <p className="mb-6">
                Instrucciones sobre cómo solicitar la eliminación de tus datos personales de nuestros sistemas.
              </p>
              <div className="flex items-center text-sm font-medium text-primary-indigo">
                Ver instrucciones
                <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          <Link to="/terms-of-service" className="group">
            <div className="rounded-lg border border-secundary-light-bg dark:border-secundary-dark-bg bg-secundary-light-bg dark:bg-secundary-dark-bg p-6 shadow-sm hover:shadow-md transition-colors duration-300">
              <h2 className="mb-4 text-xl font-semibold">
                Términos de Servicio
              </h2>
              <p className="mb-6">
                Condiciones generales de uso, derechos y responsabilidades para utilizar los servicios de Bookzy.
              </p>
              <div className="flex items-center text-sm font-medium text-primary-indigo">
                Ver términos
                <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}