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
          <InputText
            placeholder="CEP"
            required
            value={""}
            onChange={() => {}}
          />
          <InputText
            placeholder="Rua"
            required
            value={""}
            onChange={() => {}}
          />
          <div>
            <InputText
              placeholder="Número"
              required
              value={""}
              onChange={() => {}}
            />
            <InputText
              placeholder="Complemento"
              value={""}
              onChange={() => {}}
            />
          </div>
          <div>
            <InputText
              placeholder="Bairro"
              required
              value={""}
              onChange={() => {}}
            />
            <InputText
              placeholder="Cidade"
              required
              value={""}
              onChange={() => {}}
            />
            <InputText
              placeholder="UF"
              required
              value={""}
              onChange={() => {}}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
