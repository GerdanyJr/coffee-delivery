"use client";
import Banner from "@/components/home/banner";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { MobileProductList } from "@/components/home/mobileProductList";
import { DesktopProductList } from "@/components/home/desktopProductList";
import { FilterType, useFilter } from "@/hooks/useFilter";
import { useState } from "react";
import { FilterContextProvider } from "@/store/FilterContext";

export default function Home() {
  const { width } = useWindowDimensions();
  const [openedFilter, setOpenedFilter] = useState<FilterType>();

  function onFilterPress(filter: FilterType) {
    setOpenedFilter((prev) => (prev === filter ? undefined : filter));
  }

  return (
    <>
      <Banner />
      <FilterContextProvider>
        <div className="mt-16">
          {width >= 768 && <DesktopProductList />}
          {width < 768 && <MobileProductList onFilterPress={onFilterPress} />}
        </div>
      </FilterContextProvider>
    </>
  );
}
