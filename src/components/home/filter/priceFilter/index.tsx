"use client";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { Dispatch, SetStateAction, useState } from "react";
import { FilterOption } from "./filterOption";

export interface Filter {
  sort: string | undefined;
  direction: "asc" | "desc" | undefined;
  min: number | undefined;
  max: number | undefined;
}
const defaultFilter: Filter = {
  direction: undefined,
  max: undefined,
  min: undefined,
  sort: undefined,
};

export function PriceFilter({
  filter,
  setFilter,
  className,
}: {
  filter: Filter | undefined;
  setFilter: Dispatch<SetStateAction<Filter | undefined>>;
  className?: string;
}) {
  const [pressed, setPressed] = useState(false);

  return (
    <div className={`relative font-roboto ${className}`}>
      <button
        className="flex items-center gap-1 text-lg"
        onClick={() => setPressed((prev) => !prev)}
      >
        Preço
        <CaretDown size={24} className={pressed ? "rotate-180" : ""} />
      </button>
      {pressed && (
        <div className="absolute flex flex-col items-start gap-3 p-4 mt-1 bg-white rounded-lg shadow-2xl w-max -left-36">
          {filter && (
            <button onClick={() => setFilter(undefined)} className="underline">
              Limpar Filtros
            </button>
          )}
          <FilterOption
            label="Maior Preço"
            value="desc"
            checked={filter?.direction === "desc"}
            onClick={() => setFilter({ ...defaultFilter, direction: "desc" })}
          />
          <FilterOption
            label="Menor Preço"
            value="asc"
            checked={filter?.direction === "asc"}
            onClick={() => setFilter({ ...defaultFilter, direction: "asc" })}
          />
          <FilterOption
            label="De R$9,00 até R$20,00"
            value="9-20"
            checked={filter?.max === 20}
            onClick={() => setFilter({ ...defaultFilter, min: 9, max: 20 })}
          />
          <FilterOption
            label="De R$20,00 até R$40,00"
            value="20-40"
            checked={filter?.max === 40}
            onClick={() => setFilter({ ...defaultFilter, min: 20, max: 40 })}
          />
          <FilterOption
            label="Maior que R$60,00"
            value="60"
            checked={filter?.min === 60}
            onClick={() => setFilter({ ...defaultFilter, min: 60 })}
          />
        </div>
      )}
    </div>
  );
}
