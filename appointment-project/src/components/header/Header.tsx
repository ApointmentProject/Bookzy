import { Link } from 'react-router-dom';
import Navigation from '../navbar/Navigation';
import { TbCalendar } from "react-icons/tb";
import { useTheme } from '../../context/ThemeContext';

export default function Header() {
    const { isDarkMode } = useTheme();
    return (
        <header
            className={`fixed top-0 left-1/2 transform -translate-x-1/2 -translate-y-5 w-[95%] px-6 py-4 shadow-lg z-50 
    rounded-3xl backdrop-blur-lg transition-colors duration-500 ease-in-out 
    ${isDarkMode ? "bg-gray-600 bg-opacity-40 text-white" : "bg-white bg-opacity-80 text-black"}`}
        >

            <div className="flex items-center justify-between pt-3">
                <div className="flex items-center gap-3">
                    <Link
                        to="/"
                        className={`flex items-center gap-2 text-sm font-semibold hover:underline md:text-lg transition-colors duration-300 
                    ${isDarkMode ? "text-white" : "text-black"}`}
                    >
                        <TbCalendar className={`text-2xl transition-colors duration-300 ${isDarkMode ? "text-white" : "text-black"}`} />
                        <span className="font-merriweather font-bold italic text-2xl">Bookzy</span>
                    </Link>
                </div>
                <Navigation />
            </div>
        </header>
    );
}
