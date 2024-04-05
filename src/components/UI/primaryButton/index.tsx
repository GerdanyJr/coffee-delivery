"use client";
import styles from "./primaryButton.module.css";
interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function PrimaryButton({ label, ...props }: PrimaryButtonProps) {
  return (
    <button {...props} className={styles.button}>
      {label}
    </button>
  );
}
