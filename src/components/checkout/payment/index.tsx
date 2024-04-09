import { CurrencyDollar } from "@phosphor-icons/react/dist/ssr";
import styles from "./payment.module.css";
import Options from "./options";
export function Payment() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <CurrencyDollar size={20} color="var(--purple)" />
        <span>
          <p className={styles.title}>Pagamento</p>
          <p className={styles.subtitle}>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </span>
      </div>
      <Options />
    </div>
  );
}
