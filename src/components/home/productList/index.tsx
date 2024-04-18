import { Coffee } from "@/@types/interface/coffee";
import ProductCard from "../../UI/productCard";

export function ProductList({
  title,
  products,
  totalPages,
}: {
  title: string;
  products: Coffee[];
  totalPages: number;
}) {
  console.log(totalPages);
  return (
    <>
      <h2 className="mx-2 mt-16 mb-16 text-3xl font-bold font-baloo text-base-subtitle md:mx-0 mb:my-0">
        {title}
      </h2>
      <div className="flex flex-wrap justify-center gap-y-9 gap-x-8">
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
    </>
  );
}
