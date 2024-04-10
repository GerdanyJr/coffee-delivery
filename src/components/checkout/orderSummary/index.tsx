"use client";
import { ProductCart } from "@/components/UI/productCart";
import styles from "./orderSummary.module.css";
import { PrimaryButton } from "@/components/UI/primaryButton";

export function OrderSummary() {
  return (
    <>
      <h2 className={styles.summary_header}>Cafés selecionados</h2>
      <div className={styles.summary_container}>
        <div className={styles.items}>
          <ProductCart />
          <ProductCart />
        </div>
        <div className={styles.price}>
          <div>
            Total de itens <span>R$ 29,70</span>
          </div>
          <div>
            Entrega <span>R$ 3,50</span>
          </div>
          <div>
            Total <span>R$ 33,20</span>
          </div>
        </div>
        <PrimaryButton
          label="Confirmar pedido"
          className={styles.confirm_button}
        />
      </div>
    </>
  );
}
