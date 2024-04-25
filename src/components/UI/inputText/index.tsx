import React, { forwardRef } from "react";
interface InputTextProps extends React.HTMLAttributes<HTMLInputElement> {
  placeholder: string;
  error?: boolean;
  errorMessage?: string;
  value?: string;
  type?: "text" | "number";
  required?: boolean;
  className?: string;
}

export const InputText = forwardRef(
  (
    {
      placeholder,
      error,
      errorMessage,
      type,
      required,
      value,
      className,
      ...props
    }: InputTextProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const errorClasses = error
      ? "placeholder:text-red-500 border-red-500 "
      : "border-transparent focus:border-yellow-dark";
    return (
      <div className={className}>
        <div className={`relative inline`}>
          <input
            className={`w-full p-4 border-2 ${errorClasses} rounded-lg outline-none text-base-text bg-base-input`}
            value={value}
            type={type ?? "text"}
            placeholder={placeholder}
            ref={ref}
            {...props}
          />
          {value?.length === 0 && !required && (
            <span className="absolute text-xs italic -translate-y-1/2 font-roboto top-1/2 right-3 text-base-label">
              Opcional
            </span>
          )}
        </div>
        {error && errorMessage && (
          <p className="text-sm text-red-500 font-roboto">{errorMessage}</p>
        )}
      </div>
    );
  }
);
