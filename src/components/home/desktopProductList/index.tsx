"use client";
import { ProductList } from "../productList";
import Pagination from "../pagination";
import { PriceFilter } from "../filter/priceFilter";
import { FilterType, useProducts } from "@/hooks/useProducts";
import { useEffect, useState } from "react";
import { Category } from "@/@types/interface/coffee";
import { TagFilter } from "../filter/tagFilter";

export function DesktopProductList() {
  const [openedFilter, setOpenedFilter] = useState<FilterType>();
  const [tags, setTags] = useState<Category[]>([]);
  const { filter, handleChangePage, page, products, setFilter, totalPages } =
    useProducts();
  useEffect(() => {
    async function getTags() {
      const response = await fetch("http://localhost:8080/category");
      const data = (await response.json()) as Category[];
      setTags(data);
    }
    getTags();
  }, []);

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
