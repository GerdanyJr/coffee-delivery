import { Coffee } from "@/@types/interface/coffee";
import { ProductCard } from "../../UI/productCard";

export function ProductList({
  title,
  products,
}: {
  title: string;
  products: Coffee[];
}) {
  return (
    <>


      <h2 className="mx-2 mt-16 mb-16 text-3xl font-baloo font-bold text-center lg:text-start text-base-subtitle dark:text-purple-light">{title}</h2>
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
    </>
  );
}
