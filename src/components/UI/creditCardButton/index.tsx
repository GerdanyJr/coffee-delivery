import styles from "./creditCardButton.module.css";
import React from "react";
export function CreditCardButton({
  icon,
  title,
  checked,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  checked: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`${styles.creditCard} ${checked ? styles.checked : ""}`}
      onClick={onClick}
    >
      <span>
        {icon}
        {title}
      </span>
    </button>
  );
}
