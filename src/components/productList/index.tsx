"use client";
import { COOFFES } from "@/constants/coffees";
import ProductCard from "../UI/productCard";
import styles from "./productList.module.css";

export function ProductList({ title }: { title: string }) {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.list}>
        {COOFFES.map((cooffe) => (
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
