import { CreditCard } from "@phosphor-icons/react";
import styles from "./creditCardButton.module.css";
export function CreditCardButton() {
  return (
    <button className={styles.creditCard}>
       <span>
      <CreditCard size={16} color="#8047F8" />
     cartão de crédito</span>
    </button>
  );
}
