import LogInButton from "../buttons/LogInButton";
import LogInInput from "../input/LogInInput";
import { AiOutlineGoogle, AiFillInstagram } from "react-icons/ai";

interface LogInFormProps {
    email: string;
    password: string;
    isLoading: boolean;
    error: string | null;
    onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent) => void;
}

export default function LogIn({ email, password, isLoading, error, onEmailChange, onPasswordChange, onSubmit }: LogInFormProps) {
    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <LogInInput
                label="Email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={onEmailChange}
                disabled={isLoading}
            />
            <LogInInput
                label="Password"
                type="password"
                value={password}
                onChange={onPasswordChange}
                disabled={isLoading}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
            <LogInButton type="submit" fullWidth disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign in"}
            </LogInButton>

            <div className="flex justify-center space-x-4">
                {/* Botón de Google */}
                <button
                    onClick={() => console.log("Google login")}
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

                {/* Botón de Instagram */}
                <button
                    onClick={() => console.log("Instagram login")}
                    className="relative flex items-center justify-center w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-sm hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 focus:outline-none"
                    aria-label="Iniciar sesión con Instagram"
                >
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent to-transparent hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="w-5 h-5 text-pink-500"
                        aria-hidden="true"
                    >
                        <path
                            fill="currentColor"
                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 
           114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 190.7c-41.9 0-75.8-33.9-75.8-75.8s33.9-75.8 
           75.8-75.8 75.8 33.9 75.8 75.8-33.9 75.8-75.8 75.8zm146.4-194.3c0 14.9-12 26.9-26.9 26.9-14.9 0-26.9-12-26.9-26.9s12-26.9 
           26.9-26.9c14.9 0 26.9 12 26.9 26.9zM398.8 80c-15.7-15.7-36.5-24.3-58.7-24.3H107.9C85.7 55.7 64.9 64.3 49.2 80 33.5 95.7 
           24.9 116.5 24.9 138.7v222.5c0 22.2 8.6 43 24.3 58.7 15.7 15.7 36.5 24.3 58.7 24.3h232.2c22.2 0 43-8.6 
           58.7-24.3 15.7-15.7 24.3-36.5 24.3-58.7V138.7c0-22.2-8.6-43-24.3-58.7zM398.8 373c0 13.2-5.2 25.8-14.9 
           35.5-9.7 9.7-22.3 14.9-35.5 14.9H107.9c-13.2 0-25.8-5.2-35.5-14.9-9.7-9.7-14.9-22.3-14.9-35.5V138.7c0-13.2 
           5.2-25.8 14.9-35.5 9.7-9.7 22.3-14.9 35.5-14.9h232.2c13.2 0 25.8 5.2 35.5 14.9 9.7 9.7 14.9 22.3 14.9 35.5V373z"
                        />
                    </svg>
                </button>
            </div>


        </form>
    );
}






