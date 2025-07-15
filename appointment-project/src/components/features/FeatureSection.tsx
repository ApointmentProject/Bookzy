import FeatureCard from "./FeatureCard"
import { useTheme } from "../../context/ThemeContext";

import { HiCalendarDays } from "react-icons/hi2";
import { LuAlarmClock } from "react-icons/lu";
import { TbUsersGroup } from "react-icons/tb";

export default function FeatureSection() {
    const { isDarkMode } = useTheme();
    return (
        <section className={`py-16 px-6 transition-colors duration-300 
          ${isDarkMode ? "bg-secundary-dark-bg" : "bg-secundary-light-bg"}`}>
            <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12">
                <FeatureCard
                    icon={<HiCalendarDays className={`h-12 w-12 ${isDarkMode ? "text-main-dark-bg" : "text-indigo-600"}`} />}
                    title="Agendado Inteligente"
                    description="Calendario inteligente que se adapta a tus preferencias y disponibilidad."
                />
                <FeatureCard
                    icon={<LuAlarmClock className={`h-12 w-12 ${isDarkMode ? "text-main-dark-bg" : "text-indigo-600"}`} />}
                    title="Gestión del Tiempo"
                    description="Configura recordatorios y recibe notificaciones para mantenerte al día con tu agenda."
                />
                <FeatureCard
                    icon={<TbUsersGroup className={`h-12 w-12 ${isDarkMode ? "text-main-dark-bg" : "text-indigo-600"}`} />}
                    title="Coordinación de Equipo"
                    description="Comparte calendarios y coordina reuniones con colegas y amigos."
                />
            </div>
        </section>
    );
}
