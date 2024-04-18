import React from "react";
import { CoffeDeliveryLogo } from "../../../../public/assets/svg/CoffeDeliveryLogo";
import Link from "next/link";
import Location from "./location";
import CartButton from "@/components/UI/cartButton";

export function Header() {
  return (
    <header className="flex justify-between mx-4 lg:mx-16 xl:mx-40">
      <Link href="/home">
        <CoffeDeliveryLogo />
      </Link>
      <div className="flex gap-2">
        <Location place="Porto Alegre, RS" />
        <CartButton quantity={2} href="/home/checkout" />
      </div>
    </header>
  );
}
