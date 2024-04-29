"use client";

import { Category, Coffee } from "@/@types/interface/coffee";
import { ProductCard } from "@/components/UI/productCard";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { getCoffees } from "@/services/coffeeService";
import { PriceFilter } from "../filter/priceFilter";
import { FilterType } from "@/hooks/useFilter";
import { useContext } from "react";
import { TagFilter } from "../filter/tagFilter";
import { FilterContext } from "@/store/FilterContext";

interface MobileProductListprops {
  onFilterPress: (filter: FilterType) => void;
}
export function MobileProductList({ onFilterPress }: MobileProductListprops) {
  const { data, tags, openedFilter, filter, setFilter, setData } =
    useContext(FilterContext);
  const { ref } = useInfiniteScroll<Coffee>(setData, filter, getCoffees);

  return (
    <>
      <div className="flex justify-end gap-4 mx-8 my-4">
        <PriceFilter onPress={() => onFilterPress("priceFilter")} />
        <TagFilter onPress={() => onFilterPress("tagFilter")} />
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
