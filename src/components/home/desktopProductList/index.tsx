"use client";
import { ProductList } from "../productList";
import Pagination from "../pagination";
import { PriceFilter } from "../filter/priceFilter";
import { useProducts } from "@/hooks/useProducts";

export function DesktopProductList() {
  const { filter, handleChangePage, page, products, setFilter, totalPages } =
    useProducts();
  return (
    <>
      <div className="flex items-center justify-end">
        <PriceFilter filter={filter} setFilter={setFilter} />
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
