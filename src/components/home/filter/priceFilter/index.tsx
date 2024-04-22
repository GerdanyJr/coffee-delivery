"use client";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { FilterOption } from "./filterOption";

export function PriceFilter() {
  const [pressed, setPressed] = useState(false);
  const [selected, setSelected] = useState("");

  function handleClick(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    const value = e.currentTarget.value;
    setSelected((prev) => (prev == value ? "" : value));
  }

  return (
    <div className="relative font-roboto">
      <button
        className="flex items-center gap-1 text-lg"
        onClick={() => setPressed((prev) => !prev)}
      >
        Preço <CaretDown size={24} className={pressed ? "rotate-180" : ""} />
      </button>
      {pressed && (
        <div className="absolute flex flex-col items-start gap-3 p-4 mt-1 bg-white rounded-lg shadow-2xl w-max -left-36">
          {selected && (
            <button onClick={() => setSelected("")} className="underline">
              limpar filtros
            </button>
          )}
          <FilterOption
            label="Maior Preço"
            value="decrescent"
            checked={selected == "decrescent"}
            onClick={handleClick}
          />
          <FilterOption
            label="Menor Preço"
            value="crescent"
            checked={selected == "crescent"}
            onClick={handleClick}
          />
          <FilterOption
            label="de R$9,00 até R$20,00"
            value="9-20"
            checked={selected == "9-20"}
            onClick={handleClick}
          />
          <FilterOption
            label="de R$20,00 até R$40,00"
            value="20-40"
            checked={selected == "20-40"}
            onClick={handleClick}
          />
          <FilterOption
            label="Maior que R$60,00"
            value="60"
            checked={selected == "60"}
            onClick={handleClick}
          />
        </div>
      )}
    </div>
  );
}
