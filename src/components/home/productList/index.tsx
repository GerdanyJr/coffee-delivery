"use client";
import { Coffee } from "@/@types/interface/coffee";
import { ProductCard } from "../../UI/productCard";
import { useEffect, useState } from "react";

export function ProductList({
  title,
  products,
  filteredCoffees,
  isFiltering,
}: {
  title: string;
  products: Coffee[];
  filteredCoffees: Coffee[];
  isFiltering: boolean;
}) {
  
  return (
    <>
      <h2 className="mx-2 mt-16 mb-16 text-3xl font-bold text-center font-baloo lg:text-start text-base-subtitle dark:text-purple-light">
        {title}
      </h2>
      {isFiltering ? (
        <div className="flex flex-wrap justify-center gap-y-9 gap-x-8">
          {filteredCoffees?.map((filteredCoffee) => (
            <ProductCard
              key={filteredCoffee.id}
              id={filteredCoffee.id}
              image={`http://localhost:8080${filteredCoffee.image}`}
              categories={filteredCoffee.categories}
              price={filteredCoffee.price}
              name={filteredCoffee.name}
              description={filteredCoffee.description}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-y-9 gap-x-8">
          {products?.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={`http://localhost:8080${product.image}`}
              categories={product.categories}
              price={product.price}
              name={product.name}
              description={product.description}
            />
          ))}
        </div>
      )}
    </>
  );
}
