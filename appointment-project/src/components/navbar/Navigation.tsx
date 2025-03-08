import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { CgDarkMode } from 'react-icons/cg';
import { BiLogInCircle } from "react-icons/bi";

import { useTheme } from '../../context/ThemeContext';



export default function Navigation() {
    const { isDarkMode, toggleTheme } = useTheme();
    const [isRotated, setIsRotated] = useState(false);

    const handleToggleTheme = () => {
        setIsRotated(!isRotated);
        toggleTheme();
    };
    return (
        <nav className="flex items-center gap-6">
            {/* LogIn Link */}
            <Link
                to="/login"
                className={`text-sm md:text-sm font-semibold transition-colors duration-300 ${isDarkMode ? "text-white hover:text-gray-300" : "text-black hover:text-gray-700"}`}
            >
                <BiLogInCircle className="h-5 w-5 sm:h-4 sm:w-4 md:h-6 md:w-6 lg:h-6 lg:w-6" />
            </Link>

            {/* SignUp Link */}
            <button
                aria-label="Toggle dark mode"
                className={`text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400 transition-transform duration-500 ${isRotated ? 'rotate-180' : ''
                    }`}
                onClick={handleToggleTheme}
            >
                <CgDarkMode className="h-5 w-5 sm:h-4 sm:w-4 md:h-6 md:w-6 lg:h-6 lg:w-6" />
            </button>
        </nav>
    );
}
