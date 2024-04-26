"use client";
import { ProductList } from "../productList";
import Pagination from "../pagination";
import { PriceFilter } from "../filter/priceFilter";
import { FilterType, useFilter } from "@/hooks/useFilter";
import { useState } from "react";
import { Coffee } from "@/@types/interface/coffee";
import { TagFilter } from "../filter/tagFilter";

export function DesktopProductList() {
  const [openedFilter, setOpenedFilter] = useState<FilterType>();
  const [products, setProducts] = useState<Coffee[]>([]);
  const { filter, tags, page, totalPages, handleChangePage, setFilter } =
    useFilter(setProducts);

  function onFilterPress(filter: FilterType) {
    setOpenedFilter((prev) => (prev === filter ? undefined : filter));
  }
  return (
    <>
      <div className="flex justify-end gap-2">
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
      <h2 className="mx-2 mb-16 text-3xl font-bold text-start font-baloo text-base-subtitle">
        Nossos cafés
      </h2>
      <ProductList products={products} />
      <Pagination
        totalPages={totalPages}
        handleChangePage={handleChangePage}
        currentPage={page}
      />
    </>
  );
}
