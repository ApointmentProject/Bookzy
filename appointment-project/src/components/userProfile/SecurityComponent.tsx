import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

export default function SecurityComponent() {
  const { isDarkMode } = useTheme();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = () => {
    // Basic validation: check if all fields are filled
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }
    // Check if the new passwords match
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match.");
      return;
    }
    // Here you could add logic to actually update the password (API call, etc.)
    console.log({
      currentPassword,
      newPassword,
      confirmPassword
    });
    alert("Password updated successfully!");
  };

  return (
    <div
      className={`shadow-lg rounded-lg p-6 transition-all duration-500 ease-out ${
        isDarkMode
          ? "bg-secundary-dark-bg text-white"
          : "bg-secundary-light-bg text-black"
      }`}
    >
      <h2 className="text-xl font-bold mb-4">Change Password</h2>

      {/* Current password */}
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">
          Current Password
        </label>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300
            ${
              isDarkMode
                ? "bg-main-dark-bg text-white border-gray-600"
                : "bg-gray-100 text-black border-gray-300"
            }
          `}
        />
      </div>

      {/* New password */}
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">
          New Password
        </label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300
            ${
              isDarkMode
                ? "bg-main-dark-bg text-white border-gray-600"
                : "bg-gray-100 text-black border-gray-300"
            }
          `}
        />
      </div>

      {/* Confirm new password */}
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">
          Confirm New Password
        </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300
            ${
              isDarkMode
                ? "bg-main-dark-bg text-white border-gray-600"
                : "bg-gray-100 text-black border-gray-300"
            }
          `}
        />
      </div>

      {/* Update password button */}
      <button
        type="button"
        onClick={handleChangePassword}
        className="bg-indigo-600 text-white py-2 px-4 rounded w-full hover:bg-indigo-700 transition-colors"
      >
        Update Password
      </button>
    </div>
  );
}
