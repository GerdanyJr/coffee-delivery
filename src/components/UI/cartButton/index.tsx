import React from "react";
import { ShoppingCartSimple } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
interface CartButtonProps {
  quantity: number;
  href: string;
}

export default function CartButton({ quantity, href }: CartButtonProps) {
  return (
    <Link
      className="relative p-2 rounded-md cursor-pointer bg-yellow-light text-yellow-dark hover:bg-yellow-dark hover:text-yellow-light"
      href={href}
    >
      <ShoppingCartSimple size={22} weight="fill" />
      {quantity > 0 && (
        <span className="absolute -right-[25%] -top-[25%] bg-yellow-dark text-white flex items-center justify-center font-semibold text-sm size-6 rounded-full">
          {quantity < 100 ? quantity : "99+"}
        </span>
      )}
    </Link>
  );
}
