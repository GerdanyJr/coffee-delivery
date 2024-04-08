"use client";

import ProductCard from "@/components/UI/productCard";
import { CreditCardButton } from "../../components/UI/creditCardButton";
import { InputNumber } from "@/components/UI/inputNumber";
import styles from "./styles.module.css";
import { ProductCart } from '@/components/UI/productCart';
export default function Teste() {
  return (
    <div className={styles.center}>
      <ProductCart/>
    </div>
  );
}
