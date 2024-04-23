"use client";
import Banner from "@/components/home/banner";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { MobileProductList } from "@/components/home/mobileProductList";
import { DesktopProductList } from "@/components/home/desktopProductList";

export default function Home() {
  const { width } = useWindowDimensions();
  return (
    <>
      <Banner />
      <div className="mt-16">
        {width >= 768 && <DesktopProductList />}
        {width < 768 && <MobileProductList />}
      </div>
    </>
  );
}
