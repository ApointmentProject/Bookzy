import React,{useState} from "react";
import Header from "../components/header/Header";
import { useTheme } from "../context/ThemeContext";

export default function Home() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className={`h-full w-full transition-colors duration-300 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <Header />
      <div className={`flex flex-col md:flex-row items-center justify-center h-screen w-full p-6 transition-colors duration-300 
          ${isDarkMode ? "bg-black" : "bg-lightPrimary"}`}>
        <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-4/5 h-full">
          {/* Texto */}
          <div className="w-full md:w-1/3 space-y-5 text-center md:text-left">
            <h1 className={`text-4xl md:text-6xl font-bold transition-colors duration-300 
              ${isDarkMode ? "text-white" : "text-black"}`}>
              Ten control de tu vida con&nbsp;
              <span className={`text-4xl md:text-6xl font-bold transition-colors duration-300 
                ${isDarkMode ? "text-indigo-400" : "text-indigo-600"}`}>
                NombreApp
              </span>
            </h1>
            <p className={`text-base md:text-lg transition-colors duration-300 
              ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              Todas tus citas agendadas y organizadas en un solo lugar. Decide
              en qué lugares registrar tus citas en base a los establecimientos
              registrados en NombreApp.
            </p>
          </div>
          {/* Imagen */}
          <div className="flex items-center justify-center md:justify-end w-full md:w-2/3 h-full">
            <img
              src="hero.svg"
              alt="Hero Image"
              className="w-4/5 md:w-auto max-w-xs md:max-w-none"
            />
          </div>
        </div>
      </div>
      <div className={`h-screen w-full flex items-center justify-center transition-colors duration-300 
          ${isDarkMode ? "bg-gray-900" : "bg-lightPrimary"}`}>
        <p className={`text-2xl transition-colors duration-300 ${isDarkMode ? "text-white" : "text-black"}`}>Hello</p>
      </div>
    </div>
  );

}
