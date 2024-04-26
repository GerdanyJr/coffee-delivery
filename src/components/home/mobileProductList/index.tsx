"use client";

import { Category, Coffee } from "@/@types/interface/coffee";
import { ProductCard } from "@/components/UI/productCard";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { getCoffees } from "@/services/coffeeService";
import { PriceFilter } from "../filter/priceFilter";
import { Filter, FilterType } from "@/hooks/useFilter";
import { Dispatch, SetStateAction } from "react";
import { TagFilter } from "../filter/tagFilter";

interface MobileProductListprops {
  openedFilter: FilterType;
  data: Coffee[];
  filter: Filter;
  tags: Category[];
  setData: Dispatch<SetStateAction<Coffee[]>>;
  setFilter: Dispatch<SetStateAction<Filter>>;
  onFilterPress: (filter: FilterType) => void;
}
export function MobileProductList({
  openedFilter,
  data,
  filter,
  tags,
  setData,
  setFilter,
  onFilterPress,
}: MobileProductListprops) {
  const { ref } = useInfiniteScroll<Coffee>(setData, filter, getCoffees);

  function onFilterPress(filter: FilterType) {
    setOpenedFilter((prev) => (prev === filter ? undefined : filter));
  }
  return (
    <>
      <div className="flex justify-end gap-4 mx-8 my-4">
        <PriceFilter
          filter={filter}
          setFilter={setFilter}
          open={openedFilter === "priceFilter"}
          onPress={() => onFilterPress("priceFilter")}
        />
        <TagFilter
          filter={filter.tags}
          tags={tags}
          open={openedFilter === "tagFilter"}
          setFilter={setFilter}
          onPress={() => onFilterPress("tagFilter")}
        />
      </div>
      <h2 className="mx-2 mb-16 text-3xl font-bold text-center font-baloo text-base-subtitle">
        Nossos cafés
      </h2>
      <div className="flex flex-wrap justify-center gap-y-9 gap-x-8">
        {data?.map((product, index) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={`http://localhost:8080${product.image}`}
            categories={product.categories}
            price={product.price}
            name={product.name}
            description={product.description}
            ref={index === data.length - 1 ? ref : undefined}
          />
        ))}
      </div>
    </>
  );
}
