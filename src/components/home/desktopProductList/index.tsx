"use client";
import { ProductList } from "../productList";
import Pagination from "../pagination";
import { PriceFilter } from "../filter/priceFilter";
import { useContext, useRef } from "react";
import { TagFilter } from "../filter/tagFilter";
import { SearchBar } from "../searchBar";
import { FilterContext } from "@/store/FilterContext";

export function DesktopProductList() {
  const input = useRef<HTMLInputElement>();
  const { data, page, totalPages, handleChangePage, onFilterPress } =
    useContext(FilterContext);

  return (
    <>
      <div className="flex items-center justify-between m-2">
        <div className="flex gap-4">
          <PriceFilter onPress={() => onFilterPress("priceFilter")} />
          <TagFilter onPress={() => onFilterPress("tagFilter")} />
        </div>
      </div>
      <h2 className="mx-2 mb-16 text-3xl font-bold text-start font-baloo text-base-subtitle">
        Nossos cafés
      </h2>
      <ProductList products={data} />
      <Pagination
        totalPages={totalPages}
        handleChangePage={handleChangePage}
        currentPage={page}
      />
    </>
  );
}
