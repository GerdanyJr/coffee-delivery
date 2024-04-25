"use client";

import { Coffee } from "@/@types/interface/coffee";
import { ProductCard } from "@/components/UI/productCard";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { getCoffees } from "@/services/coffeeService";

export function MobileProductList({
  title,
  allCoffeesFiltered,
}: {
  title: string;
  allCoffeesFiltered?: Coffee[];
}) {
  const { data, ref } = useInfiniteScroll<Coffee>(getCoffees);

  return (
    <>
      {allCoffeesFiltered ? (
        <>
          <h2 className="mt-16 mb-8 text-3xl font-bold text-center font-baloo text-base-subtitle ">
            Cafés filtrados
          </h2>
          <div className="flex flex-wrap justify-center gap-y-9 gap-x-8">
            {allCoffeesFiltered.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={`http://localhost:8080${product.image}`}
                categories={product.categories}
                price={product.price}
                name={product.name}
                description={product.description}
                ref={parseInt(product.id) === data.length - 1 ? ref : undefined}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="mt-16 mb-8 text-3xl font-bold text-center font-baloo text-base-subtitle ">
            {title}
          </h2>
          <div className="flex flex-wrap justify-center gap-y-9 gap-x-8">
            {data?.map((product, index) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={`http://localhost:8080${product.image}`}
                categories={product.categories}
                price={product.price}
                name={product.name}
                description={product.description}
                ref={index === data.length - 1 ? ref : undefined}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}
