"use client";
import { Coffee } from "@/@types/interface/coffee";
import ProductCard from "../../UI/productCard";
import { Pages } from "@/@types/interface/pages";

export function ProductList({
  title,
  products,
  total,
  limit,
  totalPages,
  handleChangePage,
  currentPage,
}: {
  title: string;
  products: Coffee[];
  total: number;
  limit: number;
  totalPages: Pages[];
  handleChangePage: (page: number) => void;
  currentPage: number;
}) {
  return (
    <>
      <h2 className="mx-0 my-12 text-[32px] font-baloo">{title}</h2>
      <div className="flex flex-wrap gap-y-9 gap-x-8">
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={`http://localhost:8080/${product.image}`}
            categories={product.categories}
            price={product.price}
            name={product.name}
            description={product.description}
          />
        ))}
      </div>

      {/* <div className="flex justify-between">
        <div>{total}</div>
        <div className="flex gap-2">
          <button>Antes</button>
          {totalPages.map((page, index) => (
            <button
              key={index}
              className={`${
                currentPage == page.pageNumber ? "bg-red-500" : "bg-blue-500"
              }`}
              onClick={() => handleChangePage(page.pageNumber)}
            >
              {page.pageNumber}
            </button>
          ))}
          <button>Depois</button>
        </div>
      </div> */}
    </>
  );
}
