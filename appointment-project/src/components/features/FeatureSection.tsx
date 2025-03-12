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
                    title="Smart Scheduling"
                    description="Intelligent calendar that adapts to your preferences and availability."
                />
                <FeatureCard
                    icon={<LuAlarmClock className={`h-12 w-12 ${isDarkMode ? "text-main-dark-bg" : "text-indigo-600"}`} />}
                    title="Time Management"
                    description="Set reminders and get notifications to stay on top of your schedule."
                />
                <FeatureCard
                    icon={<TbUsersGroup className={`h-12 w-12 ${isDarkMode ? "text-main-dark-bg" : "text-indigo-600"}`} />}
                    title="Team Coordination"
                    description="Share calendars and coordinate meetings with colleagues and friends."
                />
            </div>
        </section>
    );
}
