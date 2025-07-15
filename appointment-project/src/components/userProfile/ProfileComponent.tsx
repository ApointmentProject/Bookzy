"use client"
import { useTheme } from "../../context/ThemeContext"
import { Button, Avatar, Badge } from "@material-tailwind/react"
import { IoMdSettings} from "react-icons/io"
import { IoLogOutOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function ProfileComponent() {
  const { isDarkMode } = useTheme()
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  // Función para obtener el nombre a mostrar
  const getDisplayName = () => {
    if (user?.firstName && user?.lastName) {
      return `${user.firstName} ${user.lastName}`
    }
    if (user?.email) {
      return user.email.split("@")[0]
    }
    return "Nombre no disponible"
  }

  // Función para obtener la imagen de perfil
  const getProfileImage = () => {
    return user?.profilePic || "/noProfileImage.jpeg"
  }

  // Handler de logout
  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error("Error en logout:", error)
    } finally {
      navigate("/login")
    }
  }

  return (
    <div
      className={`relative min-h-[300px] shadow-lg rounded-lg p-6 transition-all duration-500 ease-out ${
        isDarkMode ? "bg-secundary-dark-bg text-white" : "bg-secundary-light-bg text-black"
      }`}
    >
      {/* Sección principal de información del perfil */}
      <div className="flex flex-col items-center">
        <Badge
          color="gray"
          placement="bottom-end"
          overlap="circular"
          withBorder
          content={<IoMdSettings className="h-3 w-3 text-white" />}
        >
          <Avatar
            src={getProfileImage()}
            alt={getDisplayName()}
            size="xl"
            className="shadow w-24 h-24"
            onError={(e) => {
              ;(e.target as HTMLImageElement).src = "/noProfileImage.jpeg"
            }}
          />
        </Badge>
        <h2 className="mt-3 text-lg font-bold flex items-center gap-2">
          {getDisplayName()}
          <FiEdit className="h-4 w-4 cursor-pointer" />
        </h2>
        <p className="text-gray-600">{user?.email || "Email no disponible"}</p>
        <div className="mt-2 flex items-center space-x-1">
          <span className="text-yellow-800">★★★★☆</span>
          <span className="text-gray-500 text-sm">4.5</span>
        </div>
      </div>

      {/* Sección de manejo de cuenta */}
      <div className="mt-6">
        <h3 className="text-md font-semibold mb-3">Account Management</h3>
        <Button
          variant="outlined"
          fullWidth
          onClick={handleLogout}
          className={`flex items-center justify-center gap-2 py-2 px-4 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors`}
        >
          <IoLogOutOutline className="h-5 w-5" />
          Logout
        </Button>
      </div>
    </div>
  )
}
