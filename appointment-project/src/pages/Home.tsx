import Header from "../components/header/Header";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-center h-screen w-full bg-lightSecondary p-6">
        <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-4/5 h-full">
          {/* Texto */}
          <div className="w-full md:w-1/3 space-y-5 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Ten control de tu vida con&nbsp;
              <span className="text-4xl md:text-6xl font-bold text-indigo-400">
                NombreApp
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-300">
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
      <div className="h-screen w-full bg-lightPrimary flex items-center justify-center">
        <p className="text-2xl text-white">Hello</p>
      </div>
    </div>
  );
}
