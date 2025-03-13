import { useTheme } from "../../context/ThemeContext";
import LogInButton from "../buttons/LogInButton";
import { Input, Select, Option, Popover, PopoverHandler, PopoverContent } from "@material-tailwind/react";
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
        label="Nombre Completo"
        type="text"
        placeholder="John Doe"
        required crossOrigin={undefined}      />

      <Input
        color={inputColor}
        label="Número de Teléfono"
        type="tel"
        placeholder="Ingresa tu número de teléfono"
        required crossOrigin={undefined}      />

      <Input
        color={inputColor}
        label="Correo Electrónico"
        type="email"
        placeholder="nombre@ejemplo.com"
        required crossOrigin={undefined}      />

      {/* Date Picker integrado en un Input */}
      <Popover placement="bottom">
        <PopoverHandler>
          <Input
            label="Fecha de Nacimiento"
            value={selectedDate ? format(selectedDate, "dd/MM/yyyy") : ""}
            readOnly
            className="cursor-pointer"
            color={inputColor} crossOrigin={undefined}          />
        </PopoverHandler>
        <PopoverContent>
          <div className={`${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-700"} p-2 rounded-md`}>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={(date) => setSelectedDate(date)}
            />
          </div>
        </PopoverContent>
      </Popover>

      <Input
        color={inputColor}
        label="Cédula (ID)"
        type="text"
        placeholder="Ingresa tu número de cédula"
        required crossOrigin={undefined}      />

      {/* Dropdown para género */}
      <Select
        label="Género"
        color={isDarkMode ? "blue-gray" : "blue"}
        className="min-w-full "
      >
        <Option value="male">Masculino</Option>
        <Option value="female">Femenino</Option>
        <Option value="other">Otro</Option>
        <Option value="prefer-not-to-say">Prefiero no decirlo</Option>
      </Select>

      <Input
        color={inputColor}
        label="Contraseña"
        type="password"
        required crossOrigin={undefined}      />

      <Input
        color={inputColor}
        label="Confirmar Contraseña"
        type="password"
        required crossOrigin={undefined}      />

      <LogInButton type="submit" fullWidth>
        Crear Cuenta
      </LogInButton>
    </form>
  );
}
