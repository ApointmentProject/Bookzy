import React from "react";

export default function Home() {
  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-center h-screen w-full bg-lightSecondary">
        <div className="flex flex-row items-center justify-between w-4/5 h-full">
          {/*  Texto aqui abajo */}
          <div className="w-1/3 space-y-5">
            <h1 className="text-6xl font-bold text-white text-start">
              Ten control de tu vida con&nbsp;
              <span className="text-6xl font-bold text-indigo-400 text-start">
                NombreApp
              </span>
            </h1>
            <p className="text-lg text-gray-300 text-start">
              Todas tus citas agendadas y organizadas en un solo lugar. Decide
              en qué lugares registrar tus citas en base a los establecimientos
              registrados en NombreApp
            </p>
          </div>
          {/*  Imagen aqui abajo */}
          <div className="flex items-center justify-end w-2/3 h-full">
            <img src="hero.svg" alt="Hero Image" />
          </div>
        </div>
      </div>
      <div className="h-screen w-full bg-lightPrimary">Hello</div>
    </div>
  );
}
