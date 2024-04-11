"use client";
import { Payment } from "@/components/checkout/payment";
import { CheckoutAddress } from "../../../components/checkoutAddress";
import { OrderSummary } from "@/components/checkout/orderSummary";
import styles from "./styles.module.css";

export default function Checkout() {
  return (
    <div className={styles.container}>
      <div className={styles.complete_container}>
        <CheckoutAddress />
        <Payment />
      </div>
      <OrderSummary />
    </div >
  );
}
