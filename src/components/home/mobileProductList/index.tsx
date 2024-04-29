"use client";

import { Coffee } from "@/@types/interface/coffee";
import { ProductCard } from "@/components/UI/productCard";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { getCoffees } from "@/services/coffeeService";
import { PriceFilter } from "../filter/priceFilter";
import { useContext, useState } from "react";
import { TagFilter } from "../filter/tagFilter";
import { FilterContext } from "@/store/FilterContext";
import { SearchBar } from "../searchBar";

export function MobileProductList() {
  const [search, setSearch] = useState("");
  const { data, filter, setFilter, onFilterPress, setData } =
    useContext(FilterContext);
  const { ref } = useInfiniteScroll<Coffee>(setData, filter, getCoffees);

  function handleReset(event: React.MouseEvent<HTMLButtonElement>) {
    setSearch("");
    setFilter((prev) => ({ ...prev, search: "" }));
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      setFilter((prev) => ({ ...prev, search: search }));
    }
  }

  return (
    <>
      <div className="flex justify-around mx-4 my-4">
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          onKeyDown={handleKeyDown}
          onReset={handleReset}
        />
        <div className="flex items-center justify-center gap-4">
          <PriceFilter onPress={() => onFilterPress("priceFilter")} />
          <TagFilter onPress={() => onFilterPress("tagFilter")} />
        </div>
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
