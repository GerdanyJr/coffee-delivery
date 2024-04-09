import React from "react";
import styles from "./inputText.module.css";

interface InputTextProps extends React.HTMLAttributes<HTMLInputElement> {
  required: boolean;
  value?: string;
}

export function InputText({
  required,
  value,
  ...props
}: InputTextProps) {
  return (
    <div className={styles.input_container}>
      <input
        placeholder="Label"
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