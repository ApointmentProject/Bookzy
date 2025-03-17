import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Button, Avatar, IconButton } from "@material-tailwind/react";
import { HiOutlineRefresh } from "react-icons/hi";
import { IoIosLogOut } from "react-icons/io";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProfileComponent() {
  const { isDarkMode } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Ejemplo de cuentas (si deseas mantenerlo en la UI)
  const [accounts] = useState([
    { id: 1, name: "Work Account", email: "work@example.com" },
    { id: 2, name: "Personal Account", email: "personal@example.com" },
  ]);

  // Handlers de ejemplo para cambiar y refrescar cuentas
  const handleSwitchAccount = () => {
    // Lógica por el momento
  };

  const handleRefreshAccounts = () => {
    // Lógica por el momento
  };

  const handleDeactivateAccount = () => {
    // Lógica por el momento
  };

  const handleDeleteAccount = () => {
    // Lógica por el momento
  };

  // Handler de logout que redirige inmediatamente al home
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error en logout:", error);
    } finally {
      navigate("/");
    }
  };

  return (
      <div
          className={`relative min-h-[300px] shadow-lg rounded-lg p-6 transition-all duration-500 ease-out ${
              isDarkMode
                  ? "bg-secundary-dark-bg text-white"
                  : "bg-secundary-light-bg text-black"
          }`}
      >
        {/* Botón de logout en la esquina superior derecha */}
        <IconButton variant="text" className="absolute top-4 right-4 text-red-500 active:translate-x-0 active:translate-y-0" onClick={handleLogout}>
        <IoIosLogOut className="h-6 w-6" />
        </IconButton>

        {/* Sección principal de información del perfil */}
        <div className="flex flex-col items-center">
          <Avatar
              src={user?.photoURL || "/noProfileImage.jpeg"}
              alt={user?.displayName || "Account Avatar"}
              size="sm"
              className="shadow w-12 h-12"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/noProfileImage.jpeg";
              }}
          />
          <h2 className="mt-3 text-lg font-bold">
            {user?.displayName || "Nombre no disponible"}
          </h2>
          <p className="text-gray-600">
            {user?.email || "Email no disponible"}
          </p>
          <div className="mt-2 flex items-center space-x-1">
            <span className="text-yellow-800">★★★★☆</span>
            <span className="text-gray-500 text-sm">4.5</span>
          </div>
        </div>

        {/* Sección de cambio de cuenta */}
        <div className="mt-6">
          <h3 className="text-md font-semibold mb-3">Switch Account</h3>
          <ul className="space-y-2">
            {accounts.map((account) => (
                <li
                    key={account.id}
                    onClick={handleSwitchAccount}
                    className={`flex items-center gap-3 p-3 rounded cursor-pointer ${
                        isDarkMode
                            ? "bg-gray-700 text-white hover:bg-gray-600"
                            : "bg-gray-100 text-black hover:bg-gray-200"
                    }`}
                >
                  <Avatar
                      src="/noProfileImage.jpeg"
                      alt="Account Avatar"
                      size="sm"
                      className="shadow"
                  />
                  <div>
                    <p className="text-sm font-medium">{account.name}</p>
                    <p className="text-xs">{account.email}</p>
                  </div>
                </li>
            ))}
          </ul>
          <Button
              variant="outlined"
              fullWidth
              onClick={handleRefreshAccounts}
              className={`flex items-center justify-center gap-2 py-2 px-4 mt-4 ${
                  isDarkMode
                      ? "border-gray-600 text-white hover:bg-gray-600"
                      : "border-gray-300 text-black hover:bg-gray-200"
              }`}
          >
            Switch Account
            <HiOutlineRefresh className="h-5 w-5" />
          </Button>
        </div>

        {/* Sección de manejo de cuenta */}
        <div className="mt-4">
          <h3 className="text-md font-semibold mb-3">Account Management</h3>
          <div className="flex gap-3">
            <Button
                variant="outlined"
                fullWidth
                onClick={handleDeactivateAccount}
                className="flex-1 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
            >
              Deactivate
            </Button>
            <Button
                variant="outlined"
                fullWidth
                onClick={handleDeleteAccount}
                className="flex-1 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
  );
}
