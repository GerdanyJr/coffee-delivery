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
  const checkedClasses = "border-purple bg-purple-light";
  return (
    <button
      className={`bg-base-button border-[1px] rounded-md text-base-text hover:bg-base-hover p-4 ${
        checked && checkedClasses
      }`}
      onClick={onClick}
    >
      <span className="flex items-center gap-2">
        {icon}
        <span className="text-xs uppercase ">{title}</span>
      </span>
    </button>
  );
}
