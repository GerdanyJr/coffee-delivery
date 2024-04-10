import { MapPinLine } from "@phosphor-icons/react";
import styles from "./checkoutAddress.module.css";
import { InputText } from "../UI/inputText";
export function CheckoutAddress() {
  return (
    <div className={styles.orderCheck}>
      <h2>Complete seu pedido</h2>
      <div className={styles.addressContainer}>
        <div className={styles.header}>
          <MapPinLine size={22} color="#C47F17" />
          <div className={styles.title}>
            <h3>Endereço de entrega</h3>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </div>
        <form action="">
          <InputText placeholder="CEP" required />
          <InputText placeholder="Rua" required />
          <div>
            <InputText placeholder="Número" required />
            <InputText placeholder="Complemento" />
          </div>
          <div>
            <InputText placeholder="Bairro" required />
            <InputText placeholder="Cidade" required />
            <InputText placeholder="UF" required />
          </div>
        </form>
      </div>
    </div>
  );
}
