import React from "react";
import styles from "./cartButton.module.css";
import { ShoppingCartSimple } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
interface CartButtonProps {
  quantity: number;
  href: string;
}

export default function CartButton({ quantity, href }: CartButtonProps) {
  return (
    <Link className={styles.button} href={href}>
      <ShoppingCartSimple size={22} weight="fill" />
      {quantity > 0 && (
        <span className={styles.badge}>
          {quantity < 100 ? quantity : "99+"}
        </span>
      )}
    </Link>
  );
}
