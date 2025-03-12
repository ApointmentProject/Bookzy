import Header from "../components/header/Header";
import FeatureSection from "../components/features/FeatureSection";
import Partnerships from "../components/marquee/Partnerships";

import { useTheme } from "../context/ThemeContext";

export default function Home() {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`h-full w-full pt-24 transition-colors duration-300 ${
        isDarkMode ? "bg-main-dark-bg text-white" : "bg-main-light-bg text-black"
      }`}
    >
      <Header />
      {/* Sección Principal */}
      <div
        className={`flex flex-col md:flex-row items-center justify-center w-full p-6 md:py-24 transition-colors duration-300 ${
          isDarkMode ? "bg-main-dark-bg" : "bg-main-light-bg"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-4/5 h-auto md:h-full md:gap-10">
          {/* Texto */}
          <div className="w-full md:w-1/3 space-y-5 text-center md:text-left">
            <h1
              className={`text-4xl md:text-6xl font-bold transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Ten control de tu vida con&nbsp;
              <span
                className={`text-4xl md:text-6xl font-bold transition-colors duration-300 ${
                  isDarkMode ? "text-indigo-400" : "text-indigo-600"
                }`}
              >
                Bookzy
              </span>
            </h1>
            <p
              className={`text-base md:text-lg transition-colors duration-300 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Todas tus citas agendadas y organizadas en un solo lugar. Decide
              en qué lugares registrar tus citas en base a los establecimientos
              registrados en NombreApp.
            </p>
          </div>
          {/* Imagen */}
          <div className="flex items-center justify-center md:justify-end md:w-2/3 h-auto md:h-full pb-8 md:pb-0">
            <img
              src="cloud.png"
              alt="Hero Image"
              className="w-3/5 max-w-xs sm:w-1/4 md:w-1/3 lg:w-1/4 object-contain mt-8"
            />
          </div>
        </div>
      </div>
      {/* Sección de Features con más espacio */}
      <div className="md:py-32">
        <FeatureSection />
      </div>
      {/* Sección de Partnerships con más espacio */}
      <div>
        <Partnerships />
      </div>
    </div>
  );
}
