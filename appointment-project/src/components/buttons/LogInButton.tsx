interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

export default function LogInButton({
  children,
  onClick,
  type = "button",
  className = "",
  fullWidth = false,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`px-4 py-2 rounded-md font-semibold transition duration-200 
      ${fullWidth ? "w-full" : ""}
      ${disabled ? "bg-gray-600 text-gray-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700 text-white"}
      ${className}`}
    >
      {children}
    </button>
  );
}
