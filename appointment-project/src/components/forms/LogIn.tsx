import { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import { useTheme } from "../../context/ThemeContext";
import { IoIosMail, IoIosLock } from "react-icons/io";
import { useAuth } from "../../context/AuthContext";
import { useUserAuth } from "../../hooks/useUserAuth";

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
  const { signInWithGoogle, signInWithEmail, clearError } = useAuth();
  const { isDarkMode } = useTheme();
  const { loading: authLoading, error: authError } = useUserAuth();
  const [localLoading, setLocalLoading] = useState(false);

  async function handleGoogleLogin() {
    setLocalLoading(true);
    clearError();
    try {
      await signInWithGoogle();
    } catch (err) {
      // Error manejado por el contexto
    } finally {
      setLocalLoading(false);
    }
  }

  const submitLogInForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalLoading(true);
    clearError();
    
    try {
      await signInWithEmail(email, password);
    } catch (err) {
      // Error manejado por el contexto
    } finally {
      setLocalLoading(false);
    }
  };

  const isFormLoading = isLoading || authLoading || localLoading;
  const displayError = error || (authError?.message);

  return (
    <div className="space-y-6">
      {displayError && (
        <div className="p-3 rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
          <p className="text-sm text-red-600 dark:text-red-400">{displayError}</p>
        </div>
      )}

      <form onSubmit={submitLogInForm} className="space-y-6">
        <Input
          color={isDarkMode ? "white" : "blue"}
          label="Email"
          type="email"
          value={email}
          onChange={onEmailChange}
          disabled={isFormLoading}
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
          disabled={isFormLoading}
          required
          crossOrigin={undefined}
          icon={<IoIosLock size={22} color={isDarkMode ? "white" : "black"} />}
        />

        <Button
          fullWidth
          className="flex items-center justify-center gap-2 py-3 px-4 mt-4 hover:bg-indigo-700 bg-indigo-600"
          type="submit"
          disabled={isFormLoading}
        >
          {isFormLoading ? "Signing in..." : "Sign in"}
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-300 dark:border-gray-600" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white dark:bg-gray-900 px-2 text-gray-500 dark:text-gray-400">
            Or continue with
          </span>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleGoogleLogin}
          disabled={isFormLoading}
          className="relative flex items-center justify-center w-full max-w-sm px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Iniciar sesión con Google"
        >
          {isFormLoading ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600 mr-2"></div>
              <span className="text-gray-700 dark:text-gray-200">Signing in...</span>
            </div>
          ) : (
            <>
              <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" aria-hidden="true">
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
              <span className="text-gray-700 dark:text-gray-200">Continue with Google</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}