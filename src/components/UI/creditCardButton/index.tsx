import React from "react";
export function CreditCardButton({
  icon,
  title,
  checked,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  checked: boolean;
  onClick: () => void;
}) {
  const defaultStyle =
    "rounded-md text-base-text border-[1px] border-transparent bg-base-button";
  const checkedStyle =
    "rounded-md text-base-text border-[1px] border-purple bg-purple-light ";
  return (
    <button
      className={`${defaultStyle} ${checked ? checkedStyle : ""}`}
      onClick={onClick}
    >
      <span className="flex p-4 leading-relaxed text-xs uppercase items-center gap-3 ">
        {icon}
        {title}
      </span>
    </button>
  );
}
