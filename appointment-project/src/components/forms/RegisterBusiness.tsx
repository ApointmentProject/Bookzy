import { useTheme } from "../../context/ThemeContext";
import { Input, Button, Popover, PopoverHandler, PopoverContent } from "@material-tailwind/react";
import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css';
import { useState } from "react";
import { format } from "date-fns";

export default function RegisterBusiness() {
  const { isDarkMode } = useTheme();
  const inputColor = isDarkMode ? "white" : "blue";
  const [selectedBirthdate, setSelectedBirthdate] = useState<Date | undefined>(undefined);

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

      {/* Optional Social Media */}
      <Input
        color={inputColor}
        label="Instagram"
        type="text"
        placeholder="Instagram username (optional)" crossOrigin={undefined}      />
      <Input
        color={inputColor}
        label="Facebook"
        type="text"
        placeholder="Facebook page URL (optional)" crossOrigin={undefined}      />
      <Input
        color={inputColor}
        label="WhatsApp"
        type="text"
        placeholder="WhatsApp number (optional)" crossOrigin={undefined}      />

      {/* Member Information */}
      <div className="border-t border-gray-300 pt-4">
        <h3 className="text-lg font-medium text-gray-700 mb-2">
          Member Information
        </h3>
        <div className="space-y-4">
          <Input
            color={inputColor}
            label="First Name"
            type="text"
            placeholder="First Name"
            required crossOrigin={undefined}          />
          <Input
            color={inputColor}
            label="Last Name"
            type="text"
            placeholder="Last Name"
            required crossOrigin={undefined}          />

          {/* Date Picker integrated in an Input for Birthdate */}
          <Popover placement="bottom-start">
            <PopoverHandler>
              <Input
                label="Birthdate"
                value={selectedBirthdate ? format(selectedBirthdate, "dd/MM/yyyy") : ""}
                readOnly
                className="cursor-pointer"
                color={inputColor} crossOrigin={undefined}              />
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
            required crossOrigin={undefined}          />
        </div>
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
