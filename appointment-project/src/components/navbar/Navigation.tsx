import React from 'react'
import { Link } from 'react-router-dom'


export default function Navigation() {
    return (
        <nav className="flex items-center gap-6">
          {/* Home Link */}
          <Link
            to="/home"
            className="text-sm md:text-lg font-semibold text-gray-800 dark:text-gray-200 hover:underline"
          >
          </Link>
    
        </nav>
      );
}
