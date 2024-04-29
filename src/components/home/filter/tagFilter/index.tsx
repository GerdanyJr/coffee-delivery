import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { useContext } from "react";
import { FilterOption } from "../filterOption";
import { Category } from "@/@types/interface/coffee";
import { FilterContext } from "@/store/FilterContext";

export function TagFilter({
  onPress,
  className,
}: {
  onPress: () => void;
  className?: string;
}) {
  const { tags, openedFilter, filter, setFilter } = useContext(FilterContext);

  function updateFilter(tag: Category) {
    setFilter((prev) => {
      const existingItemIndex = filter.tags.findIndex(
        (item) => item.id === tag.id
      );
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
        <CaretDown
          size={24}
          className={`${
            openedFilter === "tagFilter" ? "rotate-180" : "rotate-0"
          } transition-[250ms] ease-in-out`}
        />
      </button>
      {openedFilter === "tagFilter" && (
        <div className="absolute flex flex-col items-start gap-3 p-4 mt-1 bg-white rounded-lg shadow-2xl w-max min-w-[12rem] max-h-52 overflow-scroll -left-32">
          {filter.tags.length > 0 && (
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
              checked={filter.tags.includes(tag)}
              onClick={() => updateFilter(tag)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
