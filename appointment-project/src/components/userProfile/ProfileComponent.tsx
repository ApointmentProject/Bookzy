import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Button, Avatar } from "@material-tailwind/react";
import { HiOutlineRefresh } from "react-icons/hi";
import { IoIosLogOut } from "react-icons/io";

export default function ProfileComponent() {
  const { isDarkMode } = useTheme();

  // Example accounts
  const [accounts] = useState([
    { id: 1, name: "Work Account", email: "work@example.com" },
    { id: 2, name: "Personal Account", email: "personal@example.com" },
  ]);

  // Handler to switch to a different account
  const handleSwitchAccount = () => {
    // No logic for now
  };

  // Handler to refresh account data
  const handleRefreshAccounts = () => {
    // No logic for now
  };

  // Handlers for deactivate/delete actions
  const handleDeactivateAccount = () => {
    // No logic for now
  };

  const handleDeleteAccount = () => {
    // No logic for now
  };

  return (
    <div
      className={`relative shadow-lg rounded-lg p-6 transition-all duration-500 ease-out ${
        isDarkMode
          ? "bg-secundary-dark-bg text-white"
          : "bg-secundary-light-bg text-black"
      }`}
    >
      {/* Logout icon in top-right corner */}
      <IoIosLogOut
        className="absolute top-4 right-4 h-6 w-6 text-red-500 cursor-pointer"
      />

      {/* Main profile info section */}
      <div className="flex flex-col items-center">
        {/* Main Avatar using Material Tailwind */}
        <Avatar
          src="/noProfileImage.jpeg"
          alt="Profile Avatar"
          size="xxl"
          className="shadow"
        />
        {/* Name and email */}
        <h2 className="mt-3 text-lg font-bold">Josue Matamoros</h2>
        <p className="text-gray-600">JMatamros@ejemplo.com</p>

        {/* Example rating */}
        <div className="mt-2 flex items-center space-x-1">
          <span className="text-yellow-800">★★★★☆</span>
          <span className="text-gray-500 text-sm">4.5</span>
        </div>
      </div>

      {/* Switch account section */}
      <div className="mt-6">
        <h3 className="text-md font-semibold mb-3">Switch Account</h3>

        {/* Account list with smaller Avatars */}
        <ul className="space-y-2">
          {accounts.map((account) => (
            <li
              key={account.id}
              onClick={() => handleSwitchAccount()}
              className={`
                flex items-center gap-3 p-3 rounded cursor-pointer
                ${
                  isDarkMode
                    ? "bg-gray-700 text-white hover:bg-gray-600"
                    : "bg-gray-100 text-black hover:bg-gray-200"
                }
              `}
            >
              {/* Small Avatar for each account */}
              <Avatar
                src="/noProfileImage.jpeg"
                alt="Account Avatar"
                size="sm"
                className="shadow"
              />
              <div>
                <p className="text-sm font-medium">{account.name}</p>
                <p className="text-xs">{account.email}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Switch Account button (outlined, full width) */}
        <Button
          variant="outlined"
          fullWidth
          onClick={handleRefreshAccounts}
          className="flex items-center justify-center gap-2 py-2 px-4 mt-4"
        >
          Switch Account
          <HiOutlineRefresh className="h-5 w-5" />
        </Button>
      </div>

      {/* Account management (deactivate/delete) */}
      <div className="mt-4">
        <h3 className="text-md font-semibold mb-3">Account Management</h3>
        <div className="flex gap-3">
          {/* Deactivate (outlined, yellow hover) */}
          <Button
            variant="outlined"
            fullWidth
            onClick={handleDeactivateAccount}
            className="
              flex-1
              hover:border-yellow-500
              hover:bg-yellow-500
              hover:text-white
              transition-colors
            "
          >
            Deactivate
          </Button>
          {/* Delete (outlined, red hover) */}
          <Button
            variant="outlined"
            fullWidth
            onClick={handleDeleteAccount}
            className="
              flex-1
              hover:border-red-500
              hover:bg-red-500
              hover:text-white
              transition-colors
            "
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
