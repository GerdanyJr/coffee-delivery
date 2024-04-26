"use client";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { Dispatch, SetStateAction } from "react";
import { FilterOption } from "../filterOption";
import { Category } from "@/@types/interface/coffee";
import { Filter } from "@/hooks/useFilter";

export function TagFilter({
  tags,
  filter,
  setFilter,
  open,
  onPress,
  className,
}: {
  tags: Category[];
  filter: Category[];
  setFilter: Dispatch<SetStateAction<Filter>>;
  open: boolean;
  onPress: () => void;
  className?: string;
}) {
  function updateFilter(tag: Category) {
    setFilter((prev) => {
      const existingItemIndex = filter.findIndex((item) => item.id === tag.id);
      let updatedTags: Category[];
      if (existingItemIndex < 0) {
        updatedTags = [...prev.tags, tag];
      } else {
        updatedTags = prev.tags.filter((prevTag) => prevTag.id != tag.id);
      }
      return {
        ...prev,
        tags: updatedTags,
      };
    });
  }
  return (
    <div className={`relative font-roboto ${className}`}>
      <button className="flex items-center gap-1 text-lg" onClick={onPress}>
        Tag
        <CaretDown size={24} className={open ? "rotate-180" : ""} />
      </button>
      {open && (
        <div className="absolute flex flex-col items-start gap-3 p-4 mt-1 bg-white rounded-lg shadow-2xl w-max min-w-[12rem] max-h-52 overflow-scroll -left-32">
          {filter.length > 0 && (
            <button
              onClick={() => setFilter((prev) => ({ ...prev, tags: [] }))}
              className="underline"
            >
              Limpar Filtros
            </button>
          )}
          {tags.map((tag) => (
            <FilterOption
              key={tag.id}
              label={tag.name}
              value={tag.id}
              checked={filter?.includes(tag)}
              onClick={() => updateFilter(tag)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
