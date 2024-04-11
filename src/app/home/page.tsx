import Banner from "@/components/home/banner";
import { ProductList } from "@/components/home/productList";
import { COOFFES } from "@/constants/coffees";
import React from "react";

export default function Home() {
  return (
    <>
      <Banner />
      <ProductList title="Meus Cafés" items={COOFFES} />
    </>
  );
}
