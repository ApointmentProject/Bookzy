import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineGoogle, AiFillInstagram } from "react-icons/ai";

import Header from "../components/header/Header";
import LogInInput from "../components/input/LogInInput";
import LogInButton from "../components/buttons/LogInButton";

export default function LogIn() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [tab, setTab] = useState("login");

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
        <div className="flex items-center justify-center min-h-screen bg-gray-900 p-6">
            <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white text-center mb-2">
                    Welcome back
                </h2>
                <p className="text-gray-400 text-center mb-6">
                    Sign in to your account to continue
                </p>

                {/* Tabs */}
                <div className="flex mb-4 border-b border-gray-700">
                    <button
                        className={`w-1/2 py-2 text-center ${tab === "login"
                                ? "text-white border-b-2 border-indigo-500"
                                : "text-gray-400"
                            }`}
                        onClick={() => setTab("login")}
                    >
                        Login
                    </button>
                    <button
                        className={`w-1/2 py-2 text-center ${tab === "register"
                                ? "text-white border-b-2 border-indigo-500"
                                : "text-gray-400"
                            }`}
                        onClick={() => setTab("register")}
                    >
                        Register
                    </button>
                </div>

                {tab === "login" ? (
                    <form onSubmit={handleEmailLogin} className="space-y-4">
                        <LogInInput
                            label="Email"
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isLoading}
                        />
                        <LogInInput
                            label="Password"
                            type="password"
                            value={password}
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
                                className="w-full px-3 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            >
                                <option value="" disabled selected>
                                    Select your gender
                                </option>
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

                {/* Separator */}
                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-700"></div>
                    </div>
                    <div className="relative flex justify-center text-xs text-gray-400 bg-gray-800 px-2">
                        Or continue with
                    </div>
                </div>

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
    );
}
