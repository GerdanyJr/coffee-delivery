"use client";
import React from "react";
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
    <button
      className="flex items-center gap-1 p-2 rounded-md cursor-pointer bg-base-button hover:bg-base-hover"
      {...props}
    >
      <Trash color="#8047F8" size="16" />
      <span className="text-xs font-normal uppercase font-roboto text-base-text">
        {label}
      </span>
    </button>
  );
}
