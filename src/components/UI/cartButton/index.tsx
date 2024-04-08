import React from "react";
import styles from "./cartButton.module.css";
import { ShoppingCartSimple } from "@phosphor-icons/react/dist/ssr";
interface CartButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  quantity: number;
}

export default function CartButton({ quantity, ...props }: CartButtonProps) {
  return (
    <button className={styles.button} {...props}>
      <ShoppingCartSimple size={22} weight="fill" />
      {quantity > 0 && (
        <span className={styles.badge}>
          {quantity < 100 ? quantity : "99+"}
        </span>
      )}
    </button>
  );
}
