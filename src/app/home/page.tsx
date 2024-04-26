"use client";
import Banner from "@/components/home/banner";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { MobileProductList } from "@/components/home/mobileProductList";
import { DesktopProductList } from "@/components/home/desktopProductList";
import { FilterType, useFilter } from "@/hooks/useFilter";
import { useState } from "react";
import { Coffee } from "@/@types/interface/coffee";

export default function Home() {
  const { width } = useWindowDimensions();
  const [openedFilter, setOpenedFilter] = useState<FilterType>();
  const [data, setData] = useState<Coffee[]>([]);
  const { filter, tags, totalPages, page, setFilter, handleChangePage } =
    useFilter(setData);

  function onFilterPress(filter: FilterType) {
    setOpenedFilter((prev) => (prev === filter ? undefined : filter));
  }
  return (
    <>
      <Banner />
      <div className="mt-16">
        {width >= 768 && (
          <DesktopProductList
            openedFilter={openedFilter}
            data={data}
            filter={filter}
            tags={tags}
            page={page}
            totalPages={totalPages}
            handleChangePage={(page) => handleChangePage(page)}
            setFilter={setFilter}
            onFilterPress={onFilterPress}
          />
        )}
        {width < 768 && (
          <MobileProductList
            openedFilter={openedFilter}
            data={data}
            filter={filter}
            tags={tags}
            setData={setData}
            setFilter={setFilter}
            onFilterPress={onFilterPress}
          />
        )}
      </div>
    </>
  );
}
