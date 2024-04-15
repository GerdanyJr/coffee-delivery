"use client";
import { Coffee } from "@/@types/interface/coffee";
import ProductCard from "../../UI/productCard";

export function ProductList({
  title,
  items,
}: {
  title: string;
  items: Coffee[];
}) {
  return (
    <>
      <h2 className="font-baloo my-16 text-3xl font-bold text-base-subtitle">
        {title}
      </h2>
      <div className="flex justify-center flex-wrap gap-x-7 gap-y-8">
        {items.map((cooffe) => (
          <ProductCard
            key={cooffe.name}
            image={cooffe.image}
            tags={cooffe.tags}
            name={cooffe.name}
            description={cooffe.description}
            price={cooffe.price}
          />
        ))}
      </div>
    </>
  );
}
