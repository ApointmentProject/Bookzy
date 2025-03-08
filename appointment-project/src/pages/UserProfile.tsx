import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { FaUser } from "react-icons/fa6";

import LogInInput from '../components/input/LogInInput';

export default function UserProfile() {
    const { isDarkMode } = useTheme();
    const [activeTab, setActiveTab] = useState("personal");
    return (
        <div className={`container max-w-md mx-auto px-4 py-6 transition-colors duration-300 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
            {/* Tabs */}
            <div className="flex justify-between border-b mb-6">
                {["personal", "security", "preferences"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`py-2 flex-1 text-center transition-all ${activeTab === tab ? "border-b-2 border-indigo-500 font-bold" : "text-gray-500 hover:text-gray-700"}`}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            {/* Personal Info */}
            {activeTab === "personal" && (

                <div className="p-6 rounded-xl shadow-2xl transition-all duration-300 bg-opacity-90 backdrop-blur-xl border border-gray-600">
                    <div className="flex flex-col items-center space-y-6">
                        {/* Profile Icon */}
                        <div className="relative">
                            <div className="w-28 h-28 flex items-center justify-center bg-gray-700 rounded-full border-4 border-gray-500 shadow-lg">
                                <FaUser className="text-gray-300 text-5xl" />
                            </div>
                            <button className="absolute -bottom-3 -right-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-2 text-xs shadow-md">
                                +
                            </button>
                        </div>

                        {/* Full Name Input */}
                        <LogInInput label="Full Name" type="text" value="John Doe" />

                        {/* Rating */}
                        <div className="flex items-center text-sm">
                            <span>Average Rating:</span>
                            <div className="flex ml-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span key={star} className={`text-2xl ${star <= 4 ? "text-yellow-500" : "text-gray-400"}`}>&#9733;</span>
                                ))}
                            </div>
                            <span className="ml-2 font-medium text-gray-300">4.0</span>
                        </div>

                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold shadow-md transition-all">
                            Save Changes
                        </button>
                    </div>
                </div>
            )}

            {/* Security Settings */}
            {activeTab === "security" && (
                <div className="p-4 rounded-lg shadow-lg transition-all duration-300 bg-opacity-80 backdrop-blur-lg border border-gray-700">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Email Address</label>
                            <input type="email" defaultValue="john.doe@example.com" className={`w-full px-3 py-2 rounded-md border focus:ring-2 focus:ring-indigo-500 transition-all ${isDarkMode ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300 text-black"}`} />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Current Password</label>
                            <input type="password" className={`w-full px-3 py-2 rounded-md border focus:ring-2 focus:ring-indigo-500 transition-all ${isDarkMode ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300 text-black"}`} />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">New Password</label>
                            <input type="password" className={`w-full px-3 py-2 rounded-md border focus:ring-2 focus:ring-indigo-500 transition-all ${isDarkMode ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300 text-black"}`} />
                        </div>

                        <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-md">Update Security Settings</button>
                    </div>
                </div>
            )}

            {/* Preferences */}
            {activeTab === "preferences" && (
                <div className="p-6 rounded-xl shadow-2xl transition-all duration-300 bg-opacity-90 backdrop-blur-xl border border-gray-600">
                <div className="space-y-6">
                    {/* Dark Mode */}
                    <div className="flex items-center justify-between">
                        <span>Dark Mode</span>
                        {/* <Switch checked={isDarkMode} disabled /> */}
                    </div>
            
                    {/* Notifications */}
                    <div className="flex items-center justify-between">
                        <span>Notifications</span>
                        {/* <Switch defaultChecked /> */}
                    </div>
            
                    {/* Email Updates */}
                    <div className="flex items-center justify-between">
                        <span>Email Updates</span>
                        {/* <Switch /> */}
                    </div>
            
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold shadow-md transition-all">
                        Save Preferences
                    </button>
                </div>
            </div>
            )}
        </div>
    );
}
