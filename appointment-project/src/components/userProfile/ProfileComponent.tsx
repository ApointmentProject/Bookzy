import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function ProfileComponent() {
  const { isDarkMode } = useTheme();
  return (
    <div  className={` shadow-lg rounded-lg p-6 transition-all duration-500 ease-out ${
      isDarkMode ? "bg-secundary-dark-bg text-white" : "bg-secundary-light-bg text-black"
    }`}>
      {/* Sección de avatar e información principal */}
      <div className="flex flex-col items-center ">
        {/* Avatar */}
        <img
          src="/noProfileImage.jpeg"
          alt="Profile Avatar"
          className="w-24 h-24 rounded-full shadow"
        />
        {/* Nombre y correo */}
        <h2 className="mt-3 text-lg font-bold">Josue Matamoros</h2>
        <p className="text-gray-600">JMatamros@ejemplo.com</p>

        <div className="mt-2 flex items-center space-x-1">
          <span className="text-yellow-800">★★★★☆</span>
          <span className="text-gray-500 text-sm">4.5</span>
        </div>
      </div>

    </div>
  );
}
