import { useTheme } from "../../context/ThemeContext";
import { Input, Button, Popover, PopoverHandler, PopoverContent } from "@material-tailwind/react";
import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css';
import { useState } from "react";
import { format } from "date-fns";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function RegisterBusiness() {
  const { isDarkMode } = useTheme();
  const inputColor = isDarkMode ? "white" : "blue";
  const iconColor = isDarkMode ? "white" : "black";

  const [selectedBirthdate, setSelectedBirthdate] = useState<Date | undefined>(undefined);
  // Start with Instagram as the default active social network
  const [activeSocial, setActiveSocial] = useState<"instagram" | "facebook" | "whatsapp">("instagram");
  const [socialValues, setSocialValues] = useState({
    instagram: "",
    facebook: "",
    whatsapp: ""
  });

  return (
    <form className={`space-y-4 p-4 ${isDarkMode ? "text-white" : "text-gray-700"}`}>
      {/* Business Information */}
      <Input
        color={inputColor}
        label="Business Name"
        type="text"
        placeholder="Your Business Name" crossOrigin={undefined}      />
      <Input
        color={inputColor}
        label="Phone Number"
        type="tel"
        placeholder="+1 234 567 890" crossOrigin={undefined}      />
      <Input
        color={inputColor}
        label="Email"
        type="email"
        placeholder="business@example.com" crossOrigin={undefined}      />

      {/* Social Media Information */}
      <h3 className={`text-lg font-medium ${isDarkMode ? "text-white" : "text-black"}`}>
        Social Media Information
      </h3>
      <div className="flex flex-col sm:flex-row w-full space-y-2 sm:space-y-0 sm:space-x-2">
        <Button 
          variant="outlined" 
          onClick={() => setActiveSocial("instagram")} 
          className="flex-1 flex items-center justify-center gap-2 py-1 px-2"
        >
          <FaInstagram size={28} color={iconColor} />
          <span className="text-xs">Instagram</span>
        </Button>
        <Button 
          variant="outlined" 
          onClick={() => setActiveSocial("facebook")} 
          className="flex-1 flex items-center justify-center gap-2 py-1 px-2"
        >
          <FaFacebookF size={22} color={iconColor} />
          <span className="text-xs">Facebook</span>
        </Button>
        <Button 
          variant="outlined" 
          onClick={() => setActiveSocial("whatsapp")} 
          className="flex-1 flex items-center justify-center gap-2 py-1 px-2"
        >
          <FaWhatsapp size={26} color={iconColor} />
          <span className="text-xs">WhatsApp</span>
        </Button>
      </div>
      <div
        className={`transition-all duration-300 ease-in-out ${
          activeSocial ? "opacity-100 translate-y-0 max-h-40" : "opacity-0 -translate-y-2 max-h-0"
        } overflow-hidden`}
      >
        <Input
          color={inputColor}
          label={activeSocial.charAt(0).toUpperCase() + activeSocial.slice(1) +
            (activeSocial === "facebook"
              ? " Page URL"
              : activeSocial === "whatsapp"
                ? " Number"
                : " Username")}
          placeholder={activeSocial === "facebook"
            ? "Facebook page URL"
            : activeSocial === "whatsapp"
              ? "WhatsApp number"
              : "Instagram username"}
          value={socialValues[activeSocial]}
          onChange={(e) => setSocialValues({ ...socialValues, [activeSocial]: e.target.value })} crossOrigin={undefined}        />
      </div>

      {/* Member Information */}
      <h3 className="text-lg font-medium text-gray-700 mb-2">Member Information</h3>
      <div className="space-y-4">
        <Input
          color={inputColor}
          label="First Name"
          type="text"
          placeholder="First Name"
          required crossOrigin={undefined}        />
        <Input
          color={inputColor}
          label="Last Name"
          type="text"
          placeholder="Last Name"
          required crossOrigin={undefined}        />

        {/* Date Picker integrated in an Input for Birthdate */}
        <Popover placement="bottom-start">
          <PopoverHandler>
            <Input
              label="Birthdate"
              value={selectedBirthdate ? format(selectedBirthdate, "dd/MM/yyyy") : ""}
              readOnly
              className="cursor-pointer"
              color={inputColor} crossOrigin={undefined}            />
          </PopoverHandler>
          <PopoverContent className={`p-2 rounded-md shadow-lg ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-700"}`}>
            <DayPicker
              mode="single"
              selected={selectedBirthdate}
              onSelect={(date) => setSelectedBirthdate(date)}
              className="border-none"
            />
          </PopoverContent>
        </Popover>

        <Input
          color={inputColor}
          label="ID Card"
          type="text"
          placeholder="Enter your ID number"
          required crossOrigin={undefined}        />
      </div>

      <Button
        fullWidth
        className="flex items-center justify-center gap-2 py-3 px-4 mt-4 bg-indigo-600 hover:bg-indigo-700"
        type="submit"
      >
        Register Business
      </Button>
    </form>
  );
}
