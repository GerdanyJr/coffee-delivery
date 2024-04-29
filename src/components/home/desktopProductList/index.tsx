"use client";
import { ProductList } from "../productList";
import Pagination from "../pagination";
import { PriceFilter } from "../filter/priceFilter";
import { KeyboardEvent, MouseEvent, useContext, useState } from "react";
import { TagFilter } from "../filter/tagFilter";
import { SearchBar } from "../searchBar";
import { FilterContext } from "@/store/FilterContext";

export function DesktopProductList() {
  const [search, setSearch] = useState("");
  const { data, page, totalPages, setFilter, handleChangePage, onFilterPress } =
    useContext(FilterContext);

  function handleReset(event: MouseEvent<HTMLButtonElement>) {
    setSearch("");
    setFilter((prev) => ({ ...prev, search: "" }));
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      setFilter((prev) => ({ ...prev, search: search }));
    }
  }

  return (
    <>
      <div className="flex items-center justify-between m-2">
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          onKeyDown={handleKeyDown}
          onReset={handleReset}
        />
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
