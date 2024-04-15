import { Plus, Minus } from "@phosphor-icons/react";
export function InputNumber() {
  return (
    <div className="inline-flex bg-base-button gap-1 p-2 justify-center rounded-md h-[38px] items-center">
      <button className="h-8 w-4">
        <Minus className="hover:fill-base-title" color="#8047F8" size={14} />
      </button>
      <span className="text-base-title leading-snug m-1">1</span>
      <button className="h-8 w-4 ">
        <Plus className="hover:fill-base-title" color="#8047F8" size={14} />
      </button>
    </div>
  );
}
