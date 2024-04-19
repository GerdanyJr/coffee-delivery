import React from "react";
import { CoffeDeliveryLogo } from "../../../../public/assets/svg/CoffeDeliveryLogo";
import { CoffeeDeliveryLogoDark } from "../../../../public/assets/svg/CoffeeDeliveryLogoDark";
import Link from "next/link";
import Location from "./location";
import CartButton from "@/components/UI/cartButton";
import DarkMode from "../darkMode";

export default function Header() {
  return (
    <header className="flex justify-between">
      <Link href="/home">
        <div className='hidden dark:flex'>
          <CoffeeDeliveryLogoDark/>
        </div>
        <div className="dark:hidden">
          <CoffeDeliveryLogo />
        </div>
      </Link>
      <div className="flex gap-2">
        <DarkMode />
        <Location place="Porto Alegre, RS" />
        <CartButton quantity={2} href="/home/checkout" />
      </div>
    </header>
  );
}
