import React from "react";
interface InputTextProps extends React.HTMLAttributes<HTMLInputElement> {
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "number";
  required?: boolean;
}

export function InputText({
  type,
  required,
  value,
  placeholder,
  ...props
}: InputTextProps) {
  return (
    <div className="relative inline">
      <input
        placeholder={placeholder}
        value={value}
        type={type ?? "text"}
        {...props}
        className="p-4 border-2 border-transparent rounded-lg text-base-text bg-base-input focus:outline-none focus:border-yellow-dark"
      />
      {value?.length === 0 && !required && (
        <span className="absolute text-sm italic font-sm font-roboto top-2/4 right-3 text-base-label translate-y-2/4">
          Opcional
        </span>
      )}
    </div>
  );
}
