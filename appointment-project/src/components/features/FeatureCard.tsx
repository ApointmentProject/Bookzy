import { useTheme } from "../../context/ThemeContext";

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
    const { isDarkMode } = useTheme();

    return (
        <div className={`p-8 rounded-xl transition-colors duration-300 shadow-lg flex flex-col items-center 
          ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
          <div className="h-14 w-14 text-primary mb-4">{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-lg mt-2 text-center">{description}</p>
        </div>
      );
}
