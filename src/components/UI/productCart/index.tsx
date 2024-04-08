import { InputNumber } from "../inputNumber";
import SecondaryButton from "../secondaryButton";
import styles from "./productCart.module.css";
import productImage from "../../../../public/assets/img/Image-1.png";
export function ProductCart() {
  return (
    <div className={styles.cartContainer}>
      <img src={productImage.src} alt="" />
      <div className={styles.column}>
        <div className={styles.details}>
          <h2>Expresso Tradicional</h2>
          <span>R$ 9,90</span>
        </div>
        <div className={styles.addToCart}>
          <InputNumber />
          <SecondaryButton label="Remover" />
        </div>
      </div>
    </div>
  );
}
