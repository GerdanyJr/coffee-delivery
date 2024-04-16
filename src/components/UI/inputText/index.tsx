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
        className={`text-base-text bg-base-input p-4 rounded-lg border-2  border-transparent w-full focus:border-yellow-dark outline-none`}
        placeholder={placeholder}
        value={value}
        type={type ?? "text"}
        {...props}
        className="p-4 border-2 border-transparent rounded-lg text-base-text bg-base-input focus:outline-none focus:border-yellow-dark"
      />
      {value?.length === 0 && !required && (
        <span className="absolute text-xs italic -translate-y-1/2 font-roboto top-1/2 right-3 text-base-label">
          Opcional
        </span>
      )}
    </div>
  );
}
