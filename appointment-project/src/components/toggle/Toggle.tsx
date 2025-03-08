import { useState } from "react";

interface ToggleProps {
  label?: string;
  initialState?: boolean;
  onToggle?: (isChecked: boolean) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Toggle({ label, initialState = false, onToggle, disabled = false, size = "md" }: ToggleProps) {
  const [isChecked, setIsChecked] = useState(initialState);

  const handleToggle = () => {
    if (disabled) return;

    const newState = !isChecked;
    setIsChecked(newState);
    onToggle?.(newState);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  // Tamaños dinámicos
  const sizeClasses = {
    sm: { track: "w-8 h-4", thumb: "w-3 h-3", thumbOn: "translate-x-4" },
    md: { track: "w-11 h-6", thumb: "w-5 h-5", thumbOn: "translate-x-5" },
    lg: { track: "w-14 h-7", thumb: "w-6 h-6", thumbOn: "translate-x-7" },
  };

  return (
    <div className="flex items-center">
      {label && (
        <label className={`mr-3 text-sm font-medium ${disabled ? "text-gray-400" : "text-gray-700 dark:text-gray-300"}`}>
          {label}
        </label>
      )}
      <button
        id="toggle"
        type="button"
        role="switch"
        aria-checked={isChecked}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className={`relative inline-flex ${sizeClasses[size].track} flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
          isChecked ? "bg-indigo-500" : "bg-gray-300 dark:bg-gray-700"
        } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        tabIndex={disabled ? -1 : 0}
      >
        <span className="sr-only">{isChecked ? "On" : "Off"}</span>
        <span
          aria-hidden="true"
          className={`pointer-events-none ${sizeClasses[size].thumb} rounded-full bg-white shadow-lg ring-0 transition-transform duration-300 ${
            isChecked ? sizeClasses[size].thumbOn : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
