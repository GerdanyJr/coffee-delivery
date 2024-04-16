"use client";
import React from "react";
interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function PrimaryButton({ label, ...props }: PrimaryButtonProps) {
  return (
    <button
      {...props}
      className={`bg-yellow cursor-pointer font-roboto text-white font-semibold uppercase rounded-md px-4 py-3 hover:bg-yellow-dark ${
        props.className ?? ""
      }`}
    >
      {label}
    </button>
  );
}
