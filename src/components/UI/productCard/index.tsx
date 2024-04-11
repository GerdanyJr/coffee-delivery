import { Coffee } from "@/@types/interface/coffee";
import { InputNumber } from "../inputNumber";
import { ShoppingCartButton } from "../shoppingCartButton";
import styles from "./productCard.module.css";
function ProductCard({ description, image, name, price, tags }: Coffee) {
  return (
    <div className={styles.productCardContainer}>
      <img src={image} alt={name} />
      <div className={styles.tag_container}>
        {tags.map((tag) => (
          <span className={styles.coffeeTag} key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <h2>{name}</h2>
      <p>{description}</p>
      <div className={styles.priceContainer}>
        <span>
          R$ <strong>{price}</strong>
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
