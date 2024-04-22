"use client";

import { Coffee } from "@/@types/interface/coffee";
import { ProductCard } from "@/components/UI/productCard";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { getCoffees } from "@/services/coffeeService";

export function MobileProductList() {
  const { data, ref } = useInfiniteScroll<Coffee>(getCoffees);

  return (
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
  );
}
