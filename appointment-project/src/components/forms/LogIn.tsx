import { useNavigate } from "react-router-dom";
import { Input, Button } from "@material-tailwind/react";
import { useTheme } from "../../context/ThemeContext";
import { IoIosMail, IoIosLock } from "react-icons/io";
import { signInWithGoogle } from "../../firebase/authService";
import { useValidatePassword } from "../../hooks/useApi.ts";

interface LogInFormProps {
  email: string;
  password: string;
  isLoading: boolean;
  error: string | null;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function LogIn({
  email,
  password,
  isLoading,
  error,
  onEmailChange,
  onPasswordChange,
}: LogInFormProps) {
  const navigate = useNavigate();

  function handleGoogleLogin() {
    // Implementar inicio de sesión con Google
    signInWithGoogle();
    // navigate("/profile");
  }


  const { isDarkMode } = useTheme();

  const { mutate } = useValidatePassword();
  const submitLogInForm = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(email, password);
    mutate({ email, password }, {
      onSuccess: (data) => {
        if (data.passwordMatch) {
          alert("Login exitoso!");
          navigate("/profile");
        } else {
          alert("Contraseña incorrecta");
        }
      },
      onError: (error) => {
        console.error("Error al iniciar sesión:", error);
        alert("Error al validar credenciales");
      }
    });
  };


  return (
    <form onSubmit={submitLogInForm} className="space-y-6">
      <Input
        color={isDarkMode ? "white" : "blue"}
        label="Email"
        type="email"
        value={email}
        onChange={onEmailChange}
        disabled={isLoading}
        required
        crossOrigin={undefined}
        icon={<IoIosMail size={22} color={isDarkMode ? "white" : "black"} />}
      />
      <Input
        color={isDarkMode ? "white" : "blue"}
        label="Password"
        type="password"
        value={password}
        onChange={onPasswordChange}
        disabled={isLoading}
        required
        crossOrigin={undefined}
        icon={<IoIosLock size={22} color={isDarkMode ? "white" : "black"} />}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}

      <Button
        fullWidth
        className="flex items-center justify-center gap-2 py-3 px-4 mt-4  hover:bg-indigo-700 bg-indigo-600"
        type="submit"
      >
        {isLoading ? "Signing in..." : "Sign in"}
      </Button>

      <div className="flex justify-center space-x-4">
        {/* Botón de Google */}
        <button
          onClick={() => handleGoogleLogin()}
          className="relative flex items-center justify-center w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-sm hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 focus:outline-none"
          aria-label="Iniciar sesión con Google"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent to-transparent hover:from-blue-500/20 hover:to-transparent transition-all duration-300" />
          <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
