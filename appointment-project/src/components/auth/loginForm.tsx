import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validations/authSchemas";
import { Button, Input } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";


type LoginFormInputs = {
  email: string
  password: string
}

export function LoginForm() {
  const { isDarkMode } = useTheme()
  const { signInWithGoogle, signInWithEmail } = useAuth()
  const navigate = useNavigate()

  const inputColor = isDarkMode ? "white" : "gray";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
  })

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null);


  const onSubmit = async (data: LoginFormInputs) => {
    setIsLoading(true)
    setIsLoading(true)
    setError(null)

    try {
      await signInWithEmail(data.email, data.password)
      setTimeout(() => navigate("/"), 1000)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Error al iniciar sesión. Verifica tus credenciales.")
    } finally {
      setIsLoading(false)
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true)
    setIsLoading(true)
    setError(null)

    try {
      await signInWithGoogle()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Error al iniciar sesión con Google.")
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <div className={`mx-auto w-full max-w-md space-y-6 p-4 sm:p-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Iniciar Sesión</h1>
        <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          Ingresa tu correo y contraseña para acceder
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
            Correo Electrónico
          </label>
          <Input
            {...register("email")}
            id="email"
            name="email"
            type="email"
            placeholder="m@example.com"
            required
            color={inputColor}
            crossOrigin={undefined}
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className={`block text-sm font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
            Contraseña
          </label>
          <Input
            {...register("password")}
            id="password"
            name="password"
            type="password"
            required
            color={inputColor}
            crossOrigin={undefined}
          />
          {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
        </div>

        <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700" disabled={isLoading}>
          {isLoading ? "Iniciando..." : "Iniciar Sesión"}
        </Button>

      </form>

      {error && (
        <div className="mt-4 text-center text-sm text-red-500">
          {error}
        </div>
      )}

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <span className={`w-full border-t ${isDarkMode ? "border-gray-600" : "border-gray-300"}`} />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className={`px-2 ${isDarkMode ? "bg-secundary-dark-bg text-gray-400" : "bg-white text-gray-500"}`}>
            O continúa con
          </span>
        </div>
      </div>

      <Button
        variant="outlined"
        className={`w-full flex items-center justify-center gap-2 ${isDarkMode ? "border-gray-600 text-white hover:bg-gray-800" : "border-gray-300 text-gray-700 hover:bg-gray-50"
          }`}
        onClick={handleGoogleLogin}
        disabled={isLoading}
      >
        <FcGoogle className="h-5 w-5" />
        Iniciar Sesión con Google
      </Button>
    </div>
  )
}


