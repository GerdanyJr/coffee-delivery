"use client";

import ProductCard from "@/components/UI/productCard";
import { CreditCardButton } from "../../components/UI/creditCardButton";
import { InputNumber } from "@/components/UI/inputNumber";
import styles from "./styles.module.css";
export default function Teste() {
  return (
    <div className={styles.center}>
      <ProductCard />
    </div>
  );
}
