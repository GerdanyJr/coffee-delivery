import React from "react";
interface InputTextProps extends React.HTMLAttributes<HTMLInputElement> {
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "number";
  required?: boolean;
  className?: string;
}

export function InputText({
  type,
  required,
  value,
  placeholder,
  className,
  ...props
}: InputTextProps) {
  return (
    <div className={`${className} relative inline`}>
      <input
        className="w-full p-4 border-2 border-transparent rounded-lg outline-none text-base-text bg-base-input focus:border-yellow-dark"
        placeholder={placeholder}
        value={value}
        type={type ?? "text"}
        {...props}
      />
      {value?.length === 0 && !required && (
        <span className="absolute text-xs italic -translate-y-1/2 font-roboto top-1/2 right-3 text-base-label">
          Opcional
        </span>
      )}
    </div>
  );
}
