import { MouseEventHandler } from "react";

export function FilterOption({
  label,
  value,
  checked,
  onClick,
}: {
  label: string;
  value: string;
  checked: boolean;
  onClick: MouseEventHandler<HTMLInputElement>;
}) {
  return (
    <div className="flex flex-row-reverse items-center font-light hover:underline">
      <label htmlFor={value} className="pl-2 cursor-pointer peer">
        {label}
      </label>
      <input
        type="checkbox"
        name="priceFilter"
        checked={checked}
        id={value}
        value={value}
        onClick={onClick}
        readOnly
        className="cursor-pointer size-6 checked:accent-black"
      />
    </div>
  );
}
