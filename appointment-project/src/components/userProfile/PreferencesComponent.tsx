import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import Toggle from "../../components/toggle/Toggle";
import { Button } from "@material-tailwind/react";

export default function PreferencesComponent() {
  const { isDarkMode, toggleTheme } = useTheme();

  // Local state for language and notifications
  const [language, setLanguage] = useState("English");
  const [notifications, setNotifications] = useState(true);

  // Function to "save" preferences
  const handleSavePreferences = () => {
    console.log({
      temaOscuro: isDarkMode,
      idioma: language,
      notificaciones: notifications,
    });
  };

  return (
    <div
      className={`shadow-lg rounded-lg p-6 transition-all duration-500 ease-out ${
        isDarkMode
          ? "bg-secundary-dark-bg text-white"
          : "bg-secundary-light-bg text-black"
      }`}
    >
      <h2 className="text-xl font-bold mb-4">Preferencias</h2>

      {/* Toggle to switch between dark mode */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-medium">Tema oscuro</span>
        <Toggle
          label=""
          initialState={isDarkMode}
          onToggle={toggleTheme}
          size="md"
        />
      </div>

      {/* Select to change language */}
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">Idioma</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300
            ${
              isDarkMode
                ? "bg-main-dark-bg text-white border-gray-600"
                : "bg-gray-100 text-black border-gray-300"
            }`}
        >
          <option value="Español">Español</option>
          <option value="Inglés">Inglés</option>
        </select>
      </div>

      {/* Toggle for notifications */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-medium">Notificaciones</span>
        <Toggle
          label="" // No extra text will be shown
          initialState={notifications}
          onToggle={setNotifications}
          size="md"
        />
      </div>

      <Button
        variant="outlined"
        fullWidth
        onClick={handleSavePreferences}
        className={`flex items-center justify-center gap-2 py-2 px-4 mt-4 ${
          isDarkMode
            ? "border-gray-600 text-white hover:bg-gray-600"
            : "border-gray-300 text-black hover:bg-gray-200"
        } `}
      >
        Guardar preferencias
      </Button>
    </div>
  );
}
