import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { Avatar } from "@material-tailwind/react";

import { useTheme } from "../../context/ThemeContext";

export default function Footer() {
    const { isDarkMode } = useTheme();
    const collaborators = [
        { name: "Isaac", image: "https://avatars.githubusercontent.com/u/128321469?s=400&u=9e4c7dd1bd8fd4542d38e183ae7a20992978c98b&v=4" },
        { name: "Adrián", image: "https://avatars.githubusercontent.com/u/129631744?v=4" },
        { name: "Josué", image: "https://avatars.githubusercontent.com/u/129908627?v=4" },
    ];

    return (
        <footer
            className={`w-full border-t border-gray-200 py-4 transition-colors duration-300 ${isDarkMode ? "bg-main-dark-bg text-white" : "bg-main-light-bg text-black"
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between gap-y-4">
                    <div className="flex flex-col gap-2">
                        <div>
                            <div className="text-sm font-medium">Bookzy</div>
                            <div className="text-xs text-gray-500">
                                © {new Date().getFullYear()} All rights reserved.
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            {collaborators.map((collaborator, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="overflow-hidden rounded-full">
                                        <Avatar key={index} src={collaborator.image} alt={collaborator.name} className="h-6 w-6" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 items-end">
                        <div className="flex items-center gap-4">
                            <Link
                                to="https://github.com/ApointmentProject/Bookzy"
                                className="text-gray-500 transition-colors hover:text-black"
                                aria-label="GitHub"
                            >
                                <FaGithub className="h-4 w-4" />
                            </Link>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                            <Link to="/about" className="hover:text-black hover:underline">
                                About
                            </Link>
                            <Link to="/terms" className="hover:text-black hover:underline">
                                Terms
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
