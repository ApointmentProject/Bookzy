import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { TbHomeFilled } from "react-icons/tb";
import LogIn from "../components/forms/LogIn";
import RegisterBusiness from "../components/forms/RegisterBusiness";
import RegisterUser from "../components/forms/RegisterUser";

import { useTheme } from "../context/ThemeContext";

const AuthTabs: React.FC = () => {
  // const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  // Estados para el login y registros
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  // Estado para manejar la pestaña: "login", "register" o "business"
  const [tab, setTab] = useState("login");

  useEffect(() => {
    // Quitar las clases de animación después de un pequeño retraso
    setTimeout(() => {
      document.getElementById("login-container")?.classList.remove("opacity-0", "translate-y-5");
    }, 50);
  }, []);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Simula una petición de login
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (err) {
      setError("Failed to sign in. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`flex items-center justify-center min-h-screen p-6 relative transition-colors duration-500 ${isDarkMode ? "bg-main-dark-bg text-white" : "bg-main-light-bg text-black"
        }`}
    >
      {/* Ícono Home en la esquina superior izquierda */}
      <Link
        to="/"
        className={`absolute top-4 left-4 text-3xl md:text-4xl transition-colors duration-300 ${isDarkMode ? "text-white hover:text-gray-400" : "text-black hover:text-gray-600"
          }`}
      >
        <TbHomeFilled />
      </Link>

      <div
        id="login-container"
        className={`w-full max-w-md shadow-lg rounded-lg p-6 opacity-0 translate-y-5 transition-all duration-500 ease-out mt-16 ${isDarkMode ? "bg-secundary-dark-bg text-white" : "bg-secundary-light-bg text-black"
          }`}
      >
        <h2 className="text-2xl font-bold text-center mb-2">Welcome back</h2>
        <p className="text-gray-400 text-center mb-6">Sign in to your account to continue</p>

        {/* Tabs para cambiar entre Login, Register y Business */}
        <div className={`flex mb-4 border-b ${isDarkMode ? "border-gray-700" : "border-gray-300"}`}>
          <button
            className={`w-1/3 py-2 text-center transition-all duration-300 ${tab === "login"
                ? "border-b-2 border-indigo-500"
                : isDarkMode
                  ? "text-gray-400 hover:text-gray-200"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            onClick={() => setTab("login")}
          >
            Login
          </button>
          <button
            className={`w-1/3 py-2 text-center transition-all duration-300 ${tab === "register"
                ? "border-b-2 border-indigo-500"
                : isDarkMode
                  ? "text-gray-400 hover:text-gray-200"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            onClick={() => setTab("register")}
          >
            Register
          </button>
          <button
            className={`w-1/3 py-2 text-center transition-all duration-300 ${tab === "business"
                ? "border-b-2 border-indigo-500"
                : isDarkMode
                  ? "text-gray-400 hover:text-gray-200"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            onClick={() => setTab("business")}
          >
            Business
          </button>
        </div>

        {/* Mostrar formulario según la pestaña seleccionada */}
        <div className="transition-opacity duration-500 ease-in-out">
          {tab === "login" && (
            <LogIn
              email={email}
              password={password}
              isLoading={isLoading}
              error={error}
              onEmailChange={(e) => setEmail(e.target.value)}
              onPasswordChange={(e) => setPassword(e.target.value)}
              onSubmit={handleEmailLogin}
            />
          )}
          {tab === "register" && <RegisterUser />}
          {tab === "business" && <RegisterBusiness />}
        </div>

      </div>
    </div>
  );
};

export default AuthTabs;
