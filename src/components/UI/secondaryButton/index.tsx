"use client";
import React from "react";
import styles from "./secondaryButton.module.css";
import { Trash } from "@phosphor-icons/react";
interface SecondaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export default function SecondaryButton({
  label,
  ...props
}: SecondaryButtonProps) {
  return (
    <button className={styles.button} {...props}>
      <Trash color="#8047F8" size="16" />
      <span>{label}</span>
    </button>
  );
}
