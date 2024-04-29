import { Category, Coffee } from "@/@types/interface/coffee";
import {
  Filter,
  FilterType,
  defaultFilter,
  useFilter,
} from "@/hooks/useFilter";
import React, { createContext, useState } from "react";

export const FilterContext = createContext({
  tags: [] as Category[],
  data: [] as Coffee[],
  page: 0,
  totalPages: 0,
  filter: defaultFilter as Filter,
  openedFilter: undefined as FilterType,
  handleChangePage: (page: number) => {},
  setFilter: (value: React.SetStateAction<Filter>) => {},
  onFilterPress: (filter: FilterType) => {},
  setData: (value: React.SetStateAction<Coffee[]>) => {},
});

export function FilterContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openedFilter, setOpenedFilter] = useState<FilterType>();
  const [data, setData] = useState<Coffee[]>([]);
  const { filter, tags, totalPages, page, setFilter, handleChangePage } =
    useFilter(setData);

  function onFilterPress(filter: FilterType) {
    setOpenedFilter((prev) => (prev === filter ? undefined : filter));
  }

  return (
    <FilterContext.Provider
      value={{
        tags,
        data,
        page,
        totalPages,
        openedFilter,
        filter,
        setFilter,
        handleChangePage,
        onFilterPress,
        setData,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
