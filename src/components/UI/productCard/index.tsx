import productImage from "../../../../public/assets/img/Image-1.png";
import { InputNumber } from "../inputNumber";
import { ShoppingCartButton } from "../shoppingCartButton";
import styles from "./productCard.module.css";
function ProductCard() {
  return (
    <div className={styles.productCardContainer}>
      <img src={productImage.src} alt="Café expresso" />
      <span className={styles.coffeeTag}>Tradicional</span>
      <h2>Expresso tradicional</h2>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <div className={styles.priceContainer}>
        <span>
          R$ <strong>9,90</strong>
        </span>
        <div className={styles.shopContainer}>
          <InputNumber />
          <ShoppingCartButton size={22} />
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
