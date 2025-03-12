// import { useTheme } from "../../context/ThemeContext";
import LogInInput from "../input/LogInInput";
import LogInButton from "../buttons/LogInButton";

export default function RegisterBusiness() {
  // const { isDarkMode } = useTheme();
  return (
    <form className="space-y-4 p-4">
      {/* Business Information */}
      <LogInInput
        label="Business Name"
        type="text"
        placeholder="Your Business Name"
      />
      <LogInInput
        label="Phone Number"
        type="tel"
        placeholder="+1 234 567 890"
      />
      <LogInInput
        label="Email"
        type="email"
        placeholder="business@example.com"
      />

      {/* Optional Social Media */}
      <LogInInput
        label="Instagram"
        type="text"
        placeholder="Instagram username (optional)"
      />
      <LogInInput
        label="Facebook"
        type="text"
        placeholder="Facebook page URL (optional)"
      />
      <LogInInput
        label="WhatsApp"
        type="text"
        placeholder="WhatsApp number (optional)"
      />

      {/* Member Information */}
      <div className="border-t border-gray-300 pt-4">
        <h3 className="text-lg font-medium text-gray-700 mb-2">
          Member Information
        </h3>
        <div className="space-y-4">
          <LogInInput
            label="Name"
            type="text"
            placeholder="First Name"
            required
          />
          <LogInInput
            label="Last Name"
            type="text"
            placeholder="Last Name"
            required
          />
          <LogInInput
            label="Birthdate"
            type="date"
            required
          />
          <LogInInput
            label="Cédula (ID)"
            type="text"
            placeholder="Enter your ID number"
            required
          />
        </div>
      </div>

      <LogInButton type="submit" fullWidth>
        Register Business
      </LogInButton>
    </form>
  );
}
