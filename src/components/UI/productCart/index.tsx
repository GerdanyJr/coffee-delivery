import { InputNumber } from "../inputNumber";
import SecondaryButton from "../secondaryButton";
import styles from "./productCart.module.css";
import productImage from "../../../../public/assets/img/Image-1.png";
export function ProductCart({ name, price }: { name: string; price: string }) {
  return (
    <div className={styles.cartContainer}>
      <img src={productImage.src} alt="" />
      <div className={styles.column}>
        <h2 className={styles.coffee_name}>{name}</h2>
        <div className={styles.addToCart}>
          <InputNumber />
          <SecondaryButton label="Remover" />
        </div>
      </div>
      <span className={styles.price}>{price} R$</span>
    </div>
  );
}
