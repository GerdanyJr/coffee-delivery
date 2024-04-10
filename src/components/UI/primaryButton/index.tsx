"use client";
import React from "react";
import styles from "./primaryButton.module.css";
interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function PrimaryButton({ label, ...props }: PrimaryButtonProps) {
  return (
    <button {...props} className={`${styles.button} ${props.className ?? ""}`}>
      {label}
    </button>
  );
}
