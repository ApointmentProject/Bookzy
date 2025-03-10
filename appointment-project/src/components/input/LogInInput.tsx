import { useTheme } from "../../context/ThemeContext";

interface InputProps {
    label: string;
    type: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    disabled?: boolean;
}

export default function LogInInput({
    label,
    type,
    placeholder,
    value,
    onChange,
    required,
    disabled,
}: InputProps) {
    const { isDarkMode } = useTheme(); 

    return (
        <div className="space-y-2">
            <label className={`block text-sm font-medium transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
                className={`w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300
                    ${isDarkMode ? "bg-main-dark-bg text-white border-gray-600 placeholder-gray-400" : "bg-gray-100 text-black border-gray-300 placeholder-gray-500"}`}
            />
        </div>
    );
}
