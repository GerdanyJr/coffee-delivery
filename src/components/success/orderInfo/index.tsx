import { MapPin, Timer, CurrencyDollar } from "@phosphor-icons/react/dist/ssr";
import styles from "./orderInfo.module.css";
import image from "../../../../public/assets/img/Illustration.png";
export function OrderInfo() {
  return (
    <>
      <div className={styles.title}>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é so aguardar que logo o café chegará até você</p>
      </div>
      <div className={styles.inline}>
        <div className={styles.borderwrap}>
          <div className={styles.orderContainer}>
            <div className={styles.address}>
              <span>
                <MapPin color="#fff" size={16} weight="fill" />
              </span>
              <div className={styles.textContent}>
                <p>
                  Entrega em <strong>Rua Joãi Daniel Martinelli, 102</strong>{" "}
                </p>
                <p>Farrapos-Porto Alegre, RS</p>
              </div>
            </div>

            <div className={styles.timeToDelivery}>
              <span>
                <Timer color="#fff" size={16} weight="fill" />
              </span>
              <div className={styles.textContent}>
                <p>Previsão de chegada</p>
                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div className={styles.paymentMethod}>
              <span>
                <CurrencyDollar color="#fff" size={16} />
              </span>
              <div className={styles.textContent}>
                <p>Pagamento na entrega</p>
                <strong>Cartão de crédito</strong>
              </div>
            </div>
          </div>
        </div>
        <img src={image.src} alt="" />
      </div>
    </>
  );
}
