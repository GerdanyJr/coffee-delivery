import React from "react";
import styles from "./header.module.css";
import { CoffeDeliveryLogo } from "../../../../public/assets/svg/CoffeDeliveryLogo";
import Link from "next/link";
import Location from "./location";
import CartButton from "@/components/UI/cartButton";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="home">
        <CoffeDeliveryLogo />
      </Link>
      <div className={styles.actions}>
        <Location />
        <CartButton quantity={0} />
      </div>
    </header>
  );
}
