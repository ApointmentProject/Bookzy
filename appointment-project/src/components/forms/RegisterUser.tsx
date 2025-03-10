import { useTheme } from "../../context/ThemeContext";
import LogInInput from "../input/LogInInput";
import LogInButton from "../buttons/LogInButton";

export default function RegisterUser() {
  const { isDarkMode } = useTheme();
  return (
    <form className={`space-y-4 ${isDarkMode ? "text-white" : "text-gray-700"}`}>
      <LogInInput label="Full Name" type="text" placeholder="John Doe" />
      <LogInInput label="Email" type="email" placeholder="name@example.com" />
      <LogInInput label="Birthday" type="date" required />
      <LogInInput label="Cédula (ID)" type="text" placeholder="Enter your ID number" />

      {/* Dropdown para género */}
      <div className="space-y-2">
        <label className="block">Gender</label>
        <select
          defaultValue=""
          className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 
          ${isDarkMode ? "bg-gray-800 border border-gray-600" : "bg-gray-100 border border-gray-300"}`}
          required
        >
          <option value="" disabled>
            Select your gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </select>
      </div>

      <LogInInput label="Password" type="password" required />
      <LogInInput label="Confirm Password" type="password" required />

      <LogInButton type="submit" fullWidth>
        Create Account
      </LogInButton>
    </form>
  );
}
