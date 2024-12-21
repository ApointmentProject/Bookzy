import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
        <header
          className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-[95%] bg-white bg-opacity-20 backdrop-blur-lg rounded-b-full px-6 py-3 shadow-lg z-50 transition-colors duration-500 ease-in-out ${
            isDarkMode ? 'bg-black text-gray-50' : 'bg-white text-gray-900'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
    
              <Link
                to="/"
                className="text-sm font-semibold hover:underline md:text-lg text-gray-900 dark:text-gray-100"
              >
              <img
                className="w-6 h-6 rounded-full"
                src="https://avatars.githubusercontent.com/u/128321469?v=4"
                alt="Icon"
              />
              </Link>
            </div>
            <Navigation />
          </div>
        </header>
      );
  )
}
