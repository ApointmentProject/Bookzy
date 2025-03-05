import React from 'react'
import { Link } from 'react-router-dom'


export default function Navigation() {
    return (
        <nav className="flex items-center gap-6">
            {/* LogIn Link */}
            <Link
                to="/login"
                className="text-sm md:text-sm font-semibold text-white"
            >
                Login
            </Link>

            {/* SignUp Link */}

        </nav>
    );
}
