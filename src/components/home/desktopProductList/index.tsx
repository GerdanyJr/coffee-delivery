"use client";
import { ProductList } from "../productList";
import Pagination from "../pagination";
import { PriceFilter } from "../filter/priceFilter";
import { Filter, FilterType } from "@/hooks/useFilter";
import { Dispatch, SetStateAction } from "react";
import { Category, Coffee } from "@/@types/interface/coffee";
import { TagFilter } from "../filter/tagFilter";

interface DestopProductListProps {
  openedFilter: FilterType;
  data: Coffee[];
  filter: Filter;
  tags: Category[];
  page: number;
  totalPages: number;
  handleChangePage: (page: number) => void;
  setFilter: Dispatch<SetStateAction<Filter>>;
  onFilterPress: (filter: FilterType) => void;
}
export function DesktopProductList({
  tags,
  data,
  page,
  totalPages,
  filter,
  openedFilter,
  setFilter,
  handleChangePage,
  onFilterPress,
}: DestopProductListProps) {
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
      <ProductList products={data} />
      <Pagination
        totalPages={totalPages}
        handleChangePage={handleChangePage}
        currentPage={page}
      />
    </>
  );
}
