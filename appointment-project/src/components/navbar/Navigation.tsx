import React from 'react'
import { Link } from 'react-router-dom'


export default function Navigation() {
    return (
        <nav className="flex items-center gap-6">
            {/* LogIn Link */}
            <Link
                to="/home"
                className="text-sm md:text-sm font-semibold text-black"
            >
                Login
            </Link>

            {/* SignUp Link */}
            <Link
                to="/signup"
                className="text-sm md:text-sm font-semibold text-black"
            >
                Sign Up
            </Link>

        </nav>
    );
}
