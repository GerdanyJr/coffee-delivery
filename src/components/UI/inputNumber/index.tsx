import { Plus, Minus } from "@phosphor-icons/react";
export function InputNumber() {
  return (
    <div className="inline-flex bg-base-button gap-1  justify-center rounded-md h-[38px] items-center dark:bg-white">
      <button className="w-full h-full py-1 pl-2 pr-1 group">
        <Minus className="group-hover:fill-base-title" color="#8047F8" size={14} />
      </button>
      <span className="leading-snug text-base-title">1</span>
      <button className="w-full h-full py-1 pl-1 pr-2 group">
        <Plus className="group-hover:fill-base-title" color="#8047F8" size={14} />
      </button>
    </div>
  );
}
