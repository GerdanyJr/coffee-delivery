import { InputNumber } from "../inputNumber";
import SecondaryButton from "../secondaryButton";
import styles from "./productCart.module.css";
import productImage from "../../../../public/assets/img/Image-1.png";
export function ProductCart({ name, price }: { name: string; price: string }) {
  return (
    <div className={styles.cartContainer}>
      <img src={productImage.src} alt="" />
      <div className={styles.column}>
        <div className={styles.details}>
          <h2>{name}</h2>
          <span>R$ {price}</span>
        </div>
        <div className={styles.addToCart}>
          <InputNumber />
          <SecondaryButton label="Remover" />
        </div>
      </div>
    </div>
  );
}
