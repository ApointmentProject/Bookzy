import * as React from "react";
import { FaChevronDown } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

interface PolicySectionProps {
  title: string;
  content: React.ReactNode[];
  defaultOpen?: boolean;
}

export default function PolicySection({
  title,
  content,
  defaultOpen = false,
}: PolicySectionProps) {
  const { isDarkMode } = useTheme();
  const [open, setOpen] = React.useState(defaultOpen);

  return (
    <div
      className={`rounded-lg border ${
        isDarkMode
          ? "border-gray-800 bg-gray-900"
          : "border-secundary-light-bg bg-main-light-bg"
      }`}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between p-4 focus:outline-none"
      >
        <span
          className={`text-base font-medium ${
            isDarkMode ? "text-white" : "text-lightSecondary"
          }`}
        >
          {title}
        </span>
        <FaChevronDown
          className={`h-5 w-5 transition-transform duration-200 ${
            isDarkMode ? "text-white" : "text-lightSecondary"
          } ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          open ? "max-h-screen border-t" : "max-h-0"
        }`}
      >
        <div className="p-4 space-y-4">
          {content.map((item, index) => (
            <div
              key={index}
              className={`text-sm ${
                isDarkMode ? "text-white" : "text-lightSecondary"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
