"use client";

import { Category, Coffee } from "@/@types/interface/coffee";
import { ProductCard } from "@/components/UI/productCard";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { getCoffees } from "@/services/coffeeService";
import { PriceFilter } from "../filter/priceFilter";
import { FilterType } from "@/hooks/useProducts";
import { useEffect, useState } from "react";
import { TagFilter } from "../filter/tagFilter";

export function MobileProductList() {
  const [openedFilter, setOpenedFilter] = useState<FilterType>();
  const [tags, setTags] = useState<Category[]>([]);
  useEffect(() => {
    async function getTags() {
      const response = await fetch("http://localhost:8080/category");
      const data = (await response.json()) as Category[];
      setTags(data);
    }
    getTags();
  }, []);
  const { data, ref, filter, setFilter } =
    useInfiniteScroll<Coffee>(getCoffees);

  function onFilterPress(filter: FilterType) {
    setOpenedFilter((prev) => (prev === filter ? undefined : filter));
  }
  return (
    <>
      <div className="flex justify-end gap-4 mx-8">
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
