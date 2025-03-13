import { useTheme } from "../../context/ThemeContext";
import { Input, Select, Option, Popover, PopoverHandler, PopoverContent, Button } from "@material-tailwind/react";
import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css';
import { useState } from "react";
import { format } from "date-fns";

export default function RegisterUser() {
  const { isDarkMode } = useTheme();
  const inputColor = isDarkMode ? "white" : "blue";
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <form className={`space-y-6 ${isDarkMode ? "text-white" : "text-gray-700"}`}>
      <Input
        color={inputColor}
        label="Full Name"
        type="text"
        placeholder="John Doe"
        required crossOrigin={undefined}
      />

      <Input
        color={inputColor}
        label="Phone Number"
        type="tel"
        placeholder="Enter your phone number"
        required crossOrigin={undefined}
      />

      <Input
        color={inputColor}
        label="Email"
        type="email"
        placeholder="name@example.com"
        required crossOrigin={undefined}
      />

      {/* Date Picker integrated in an Input */}
      <Popover placement="bottom-start">
        <PopoverHandler>
          <Input
            label="Date of Birth"
            value={selectedDate ? format(selectedDate, "dd/MM/yyyy") : ""}
            readOnly
            className="cursor-pointer"
            color={inputColor} crossOrigin={undefined}
          />
        </PopoverHandler>
        <PopoverContent className={`p-2 rounded-md shadow-lg ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-700"}`}>
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={(date) => setSelectedDate(date)}
            className="border-none"
          />
        </PopoverContent>
      </Popover>

      <Input
        color={inputColor}
        label="ID Card"
        type="text"
        required crossOrigin={undefined}
      />

      <Select
        label="Gender"
        color={isDarkMode ? "blue-gray" : "blue"}
        className="min-w-full"
      >
        <Option value="male">Male</Option>
        <Option value="female">Female</Option>
        <Option value="other">Other</Option>
        <Option value="prefer-not-to-say">Prefer not to say</Option>
      </Select>

      <Input
        color={inputColor}
        label="Password"
        type="password"
        required crossOrigin={undefined}
      />

      <Input
        color={inputColor}
        label="Confirm Password"
        type="password"
        required crossOrigin={undefined}
      />

      <Button
        fullWidth
        className="flex items-center justify-center gap-2 py-3 px-4 mt-4 bg-indigo-600 hover:bg-indigo-700"
      >
        Create Account
      </Button>
    </form>
  );
}