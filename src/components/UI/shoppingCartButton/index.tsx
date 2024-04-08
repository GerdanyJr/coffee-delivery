"use client";
import React from "react";
import { ShoppingCart } from "@phosphor-icons/react";
import styles from "./shoppingCartButton.module.css";
interface ShoppingCartButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  size: number;
}

export function ShoppingCartButton({
  size,
  ...props
}: ShoppingCartButtonProps) {
  return (
    <button {...props} className={styles.button}>
      <ShoppingCart weight="fill" size={size} />
    </button>
  );
}
