"use client";
import { Coffee } from "@/@types/interface/coffee";
import ProductCard from "../../UI/productCard";
import styles from "./productList.module.css";

export function ProductList({
  title,
  items,
}: {
  title: string;
  items: Coffee[];
}) {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.list}>
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
