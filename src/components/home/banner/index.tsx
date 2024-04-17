import PurpleCooffee from "../../../../public/assets/svg/PurpleCooffee";
import CartIcon from "../../../../public/assets/svg/CartIcon";
import Box from "../../../../public/assets/svg/Box";
import Clock from "../../../../public/assets/svg/Clock";
import { BannerItem } from "./bannerItem";
import { BannerImage } from "./bannerImage";

export default function Banner() {
  const itemsClasses = "flex flex-col gap-4";

  return (
    <div className="flex flex-col mt-8 text-center lg:text-start lg:flex-row lg:mt-24 lg:items-center">
      <BannerImage />
      <div>
        <div>
          <h2 className="mb-4 text-5xl font-bold font-baloo md:text-6xl">
            Encontre o café perfeito para qualquer hora do dia
          </h2>
          <p className="text-xl font-semibold font-roboto text-base-subtitle lg:font-normal ">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-8 md:gap-10 md:flex-row">
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
    </div>
  );
}
