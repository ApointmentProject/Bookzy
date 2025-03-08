import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineGoogle, AiFillInstagram } from "react-icons/ai";
import { TbHomeFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

import Header from "../components/header/Header";
import LogInInput from "../components/input/LogInInput";
import LogInButton from "../components/buttons/LogInButton";
import { useTheme } from "../context/ThemeContext";

export default function LogIn() {
    const navigate = useNavigate();
    const { isDarkMode, toggleTheme } = useTheme();

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [tab, setTab] = useState("login");

    useEffect(() => {
        // Agregar la clase después de un pequeño retraso para activar la animación
        setTimeout(() => {
            document.getElementById("login-container")?.classList.remove("opacity-0", "translate-y-5");
        }, 50);
    }, []);

    const handleEmailLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            navigate("/");
        } catch (err) {
            setError("Failed to sign in. Please check your credentials.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={`flex items-center justify-center min-h-screen p-6 relative transition-colors duration-500 ${isDarkMode ? "bg-main-dark-bg text-white" : "bg-main-light-bg text-black"}`}>

            {/* Ícono Home arriba a la izquierda */}
            <Link to="/" className={`absolute top-4 left-4 text-3xl md:text-4xl transition-colors duration-300 ${isDarkMode ? "text-white hover:text-gray-400" : "text-black hover:text-gray-600"}`}>
                <TbHomeFilled />
            </Link>

            <div
                id="login-container"
                className={`w-full max-w-md shadow-lg rounded-lg p-6 opacity-0 translate-y-5 transition-all duration-500 ease-out ${isDarkMode ? "bg-secundary-dark-bg text-white" : "bg-secundary-light-bg text-black"}`}
            >
                <h2 className="text-2xl font-bold text-center mb-2">Welcome back</h2>
                <p className="text-gray-400 text-center mb-6">Sign in to your account to continue</p>

                {/* Tabs */}
                <div className={`flex mb-4 border-b ${isDarkMode ? "border-gray-700" : "border-gray-300"}`}>
                    <button
                        className={`w-1/2 py-2 text-center transition-all duration-300 ${tab === "login"
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
                        className={`w-1/2 py-2 text-center transition-all duration-300 ${tab === "register"
                            ? "border-b-2 border-indigo-500"
                            : isDarkMode
                                ? "text-gray-400 hover:text-gray-200"
                                : "text-gray-600 hover:text-gray-800"
                            }`}
                        onClick={() => setTab("register")}
                    >
                        Register
                    </button>
                </div>

                {/* Forms */}
                <div className="transition-opacity duration-500 ease-in-out">
                    {tab === "login" ? (
                        <form onSubmit={handleEmailLogin} className="space-y-4">
                            <LogInInput
                                label="Email"
                                type="email"
                                placeholder="name@example.com"
                                value={email ?? ""}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={isLoading}
                            />
                            <LogInInput
                                label="Password"
                                type="password"
                                value={password ?? ""}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={isLoading}
                            />
                            {error && <p className="text-sm text-red-500">{error}</p>}
                            <LogInButton type="submit" fullWidth disabled={isLoading}>
                                {isLoading ? "Signing in..." : "Sign in"}
                            </LogInButton>
                        </form>
                    ) : (
                        <form className="space-y-4">
                            <LogInInput label="Full Name" type="text" placeholder="John Doe" />
                            <LogInInput label="Email" type="email" placeholder="name@example.com" />
                            <LogInInput label="Birthday" type="date" required />
                            <LogInInput label="Cédula (ID)" type="text" placeholder="Enter your ID number" />

                            {/* Gender Dropdown */}
                            <div className="space-y-2">
                                <label className="block text-gray-300">Gender</label>
                                <select
                                    defaultValue=""
                                    className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 
        ${isDarkMode ? "bg-gray-800 text-white border border-gray-600" : "bg-gray-100 text-black border border-gray-300"}`}
                                    required
                                >
                                    <option value="" disabled>Select your gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="non-binary">Non-binary</option>
                                    <option value="other">Other</option>
                                    <option value="prefer-not-to-say">Prefer not to say</option>
                                </select>

                            </div>

                            <LogInInput label="Password" type="password" required />
                            <LogInInput label="Confirm Password" type="password" required />

                            <LogInButton type="submit" fullWidth>
                                Create Account
                            </LogInButton>
                        </form>
                    )}
                </div>

                {/* Separator */}
                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className={`w-full border-t ${isDarkMode ? "border-gray-700" : "border-gray-300"}`}></div>
                    </div>
                    <div className={`relative flex justify-center text-xs px-2 ${isDarkMode ? "text-gray-400 bg-secundary-dark-bg" : "text-gray-600 bg-secundary-light-bg"}`}>
                        Or continue with
                    </div>
                </div>

                <div className="mt-8">
                    {/* Social Login */}
                    <LogInButton
                        onClick={() => console.log("Google login")}
                        fullWidth
                        className="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
                    >
                        Sign in with <AiOutlineGoogle className="text-white text-lg" />
                    </LogInButton>

                    <LogInButton
                        onClick={() => console.log("Instagram login")}
                        fullWidth
                        className="mt-2 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 hover:from-purple-600 hover:via-pink-600 hover:to-yellow-600 text-white flex items-center justify-center gap-2"
                    >
                        Sign in with <AiFillInstagram className="text-white text-lg" />
                    </LogInButton>
                </div>
            </div>
        </div>
    );


}
