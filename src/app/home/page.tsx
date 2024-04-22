"use client";
import Banner from "@/components/home/banner";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { MobileProductList } from "@/components/home/mobileProductList";
import { DesktopProductList } from "@/components/home/desktopProductList";
import { PriceFilter } from "@/components/home/filter/priceFilter";

export default function Home() {
  const { width } = useWindowDimensions();
  return (
    <>
      <Banner />
      <div className="mt-16">
        <div className="flex items-center justify-end">
          <PriceFilter />
        </div>
        <h2 className="mx-2 mb-16 text-3xl font-bold text-center lg:text-start font-baloo text-base-subtitle">
          Nossos cafés
        </h2>
        {width >= 768 && <DesktopProductList />}
        {width < 768 && <MobileProductList />}
      </div>
    </>
  );
}
