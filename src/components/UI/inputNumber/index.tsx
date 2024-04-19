import { Plus, Minus } from "@phosphor-icons/react";
export function InputNumber() {
  return (
    <div className="inline-flex bg-base-button gap-1 p-2 justify-center rounded-md h-[38px] items-center dark:bg-white">
      <button className="w-4 h-8">
        <Minus className="hover:fill-base-title" color="#8047F8" size={14} />
      </button>
      <span className="m-1 leading-snug text-base-title">1</span>
      <button className="w-4 h-8 ">
        <Plus className="hover:fill-base-title" color="#8047F8" size={14} />
      </button>
    </div>
  );
}
