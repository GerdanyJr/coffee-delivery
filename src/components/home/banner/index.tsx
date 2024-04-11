import React from "react";
import image from "@/../public/assets/img/Coffee.png";
import styles from "./banner.module.css";
import PurpleCooffee from "../../../../public/assets/svg/PurpleCooffee";
import CartIcon from "../../../../public/assets/svg/CartIcon";
import Box from "../../../../public/assets/svg/Box";
import Clock from "../../../../public/assets/svg/Clock";
import { BannerItem } from "./bannerItem";

export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.brand_container}>
        <div className={styles.brand}>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <p>
            Com o Cooffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <div className={styles.items_container}>
          <div className={styles.items}>
            <BannerItem icon={<CartIcon />} title="Compra simples e segura" />
            <BannerItem icon={<Clock />} title="Entrega rápida e rastreada" />
          </div>
          <div className={styles.items}>
            <BannerItem
              icon={<PurpleCooffee />}
              title="O café chega fresquinho até você"
            />
            <BannerItem
              icon={<Box />}
              title="Embalagem mantém o café intacto"
            />
          </div>
        </div>
      </div>
      <img src={image.src} alt="A cooffee cup" />
    </div>
  );
}
