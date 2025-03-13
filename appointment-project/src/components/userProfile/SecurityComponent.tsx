import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Button, Input } from "@material-tailwind/react";

export default function SecurityComponent() {
  const { isDarkMode } = useTheme();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = () => {
    // Check if all fields are filled
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }
    // Check if the new passwords match
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match.");
      return;
    }
    console.log({
      currentPassword,
      newPassword,
      confirmPassword,
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
        <Input
          type="password"
          label="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
          crossOrigin=""
        />
      </div>

      {/* New password */}
      <div className="mb-4">
        <Input
          type="password"
          label="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          crossOrigin=""
        />
      </div>

      {/* Confirm new password */}
      <div className="mb-4">
        <Input
          type="password"
          label="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          crossOrigin=""
        />
      </div>

      {/* Update password button (outlined) */}
      <Button
        variant="outlined"
        fullWidth
        onClick={handleChangePassword}
        className={`flex items-center justify-center gap-2 py-2 px-4 mt-4 ${
          isDarkMode
            ? "border-gray-600 text-white hover:bg-gray-600"
            : "border-gray-300 text-black hover:bg-gray-200"
        } `}
      >
        Update Password
      </Button>
    </div>
  );
}
