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
          <InputText placeholder="CEP" required value={""} />
          <InputText placeholder="Rua" required value={""} />
          <div>
            <InputText placeholder="Número" required value={""} />
            <InputText placeholder="Complemento" value={""} />
          </div>
          <div>
            <InputText placeholder="Bairro" required value={""} />
            <InputText placeholder="Cidade" required value={""} />
            <InputText placeholder="UF" required value={""} />
          </div>
        </form>
      </div>
    </div>
  );
}
