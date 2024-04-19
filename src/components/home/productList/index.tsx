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

      <h2 className="mx-0 my-12 text-[32px] font-baloo dark:text-purple-light">{title}</h2>
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
    </>
  );
}
