import React from "react";
import styles from "./inputText.module.css";

interface InputTextProps extends React.HTMLAttributes<HTMLInputElement> {
  value: string;
  placeholder: string;
  required?: boolean;
}

export function InputText({
  required,
  value,
  placeholder,
  ...props
}: InputTextProps) {
  return (
    <div className={styles.input_container}>
      <input
        placeholder={placeholder}
        value={value}
        {...props}
        className={styles.input}
      />
      {value?.length === 0 && !required && (
        <span className={styles.span}>Opcional</span>
      )}
    </div>
  );
}
