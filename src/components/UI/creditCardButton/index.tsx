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
  const defaultStyle = "rounded-md text-base-text border-[1px]  bg-base-button";
  const checkedStyle =
    "rounded-md text-base-text border-[1px] border-purple bg-purple-light";
  return (
    <button
      className={`${defaultStyle} ${checked ? checkedStyle : ""}`}
      onClick={onClick}
    >
      <span className="flex items-center gap-3 p-4 text-xs leading-relaxed uppercase ">
        {icon}
        {title}
      </span>
    </button>
  );
}
