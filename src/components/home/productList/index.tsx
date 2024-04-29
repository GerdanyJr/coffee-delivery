import { Coffee } from "@/@types/interface/coffee";
import { ProductCard } from "../../UI/productCard";
import Link from "next/link";

export function ProductList({ products }: { products: Coffee[] }) {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-y-9 gap-x-8">
        {products?.map((product) => (
          <Link href={`/home/product/${product.id}`} key={product.id}>
            <ProductCard
              key={product.id}
              id={product.id}
              image={`http://localhost:8080${product.image}`}
              categories={product.categories}
              price={product.price}
              name={product.name}
              description={product.description}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
