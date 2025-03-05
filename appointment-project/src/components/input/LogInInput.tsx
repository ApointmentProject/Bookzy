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
    return (
      <div className="space-y-2">
        <label className="block text-gray-300">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className="w-full px-3 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    );
  }
  