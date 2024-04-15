import React from "react";
import image from "@/../public/assets/img/Coffee.png";
import PurpleCooffee from "../../../../public/assets/svg/PurpleCooffee";
import CartIcon from "../../../../public/assets/svg/CartIcon";
import Box from "../../../../public/assets/svg/Box";
import Clock from "../../../../public/assets/svg/Clock";
import { BannerItem } from "./bannerItem";

export default function Banner() {
  const itemsClasses = "flex flex-col gap-4";
  return (
    <div className="flex justify-between items-center mt-24 gap-12">
      <div>
        <div>
          <h2 className="text-5xl font-baloo font-bold mb-4">
            Encontre o café perfeito para qualquer hora do dia
          </h2>
          <p className="font-roboto text-base-subtitle text-xl">
            Com o Cooffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <div className="flex justify-between flex-wrap mt-16">
          <div className={itemsClasses}>
            <BannerItem icon={<CartIcon />} title="Compra simples e segura" />
            <BannerItem icon={<Clock />} title="Entrega rápida e rastreada" />
          </div>
          <div className={itemsClasses}>
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
      <img src={image.src} alt="A cooffee cup" className="w-2/5" />
    </div>
  );
}
