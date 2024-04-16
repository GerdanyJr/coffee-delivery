"use client";
import React from "react";
import { ShoppingCart } from "@phosphor-icons/react";
interface ShoppingCartButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  size: number;
}

export function ShoppingCartButton({
  size,
  ...props
}: ShoppingCartButtonProps) {
  return (
    <button {...props} className="p-2 text-white rounded-md cursor-pointer bg-purple hover:bg-purple-dark">
      <ShoppingCart weight="fill" size={size} />
    </button>
  );
}
