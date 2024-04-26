"use client";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { Dispatch, SetStateAction } from "react";
import { FilterOption } from "../filterOption";
import { Filter, defaultFilter } from "@/hooks/useProducts";

export function PriceFilter({
  open,
  onPress,
  filter,
  setFilter,
  className,
}: {
  open: boolean;
  onPress: () => void;
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
  className?: string;
}) {
  function updateFilter(priceFilter: any) {
    setFilter((prev) => ({
      ...prev,
      priceFilter: { ...defaultFilter.priceFilter, ...priceFilter },
    }));
  }
  return (
    <div className={`relative font-roboto ${className}`}>
      <button className="flex items-center gap-1 text-lg" onClick={onPress}>
        Preço
        <CaretDown size={24} className={open ? "rotate-180" : ""} />
      </button>
      {open && (
        <div className="absolute flex flex-col items-start gap-3 p-4 mt-1 bg-white rounded-lg shadow-2xl w-max -left-36">
          <button
            onClick={() =>
              setFilter((prev) => ({
                ...prev,
                priceFilter: {
                  ...defaultFilter.priceFilter,
                },
              }))
            }
            className="underline"
          >
            Limpar Filtros
          </button>
          <FilterOption
            label="Maior Preço"
            value="desc"
            checked={filter?.priceFilter.direction === "desc"}
            onClick={() => updateFilter({ direction: "desc" })}
          />
          <FilterOption
            label="Menor Preço"
            value="asc"
            checked={filter?.priceFilter.direction === "asc"}
            onClick={() => updateFilter({ direction: "asc" })}
          />
          <FilterOption
            label="De R$9,00 até R$20,00"
            value="9-20"
            checked={filter?.priceFilter.max === 20}
            onClick={() => updateFilter({ min: 9, max: 20 })}
          />
          <FilterOption
            label="De R$20,00 até R$40,00"
            value="20-40"
            checked={filter?.priceFilter.max === 40}
            onClick={() => updateFilter({ min: 20, max: 40 })}
          />
          <FilterOption
            label="Maior que R$60,00"
            value="60"
            checked={filter?.priceFilter.min === 60}
            onClick={() => updateFilter({ min: 60 })}
          />
        </div>
      )}
    </div>
  );
}
