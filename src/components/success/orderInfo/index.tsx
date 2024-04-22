"use client";
import AliceCarousel from "react-alice-carousel"
import 'react-alice-carousel/lib/alice-carousel.css';
import image from "../../../../public/assets/img/Illustration.png";
import { items } from "./cardInfo";
const borderRounded =
  "rounded-tr-[36px] rounded-bl-[36px] rounded-tl-[6px] rounded-br-[6px]";
export function OrderInfo() {
  return (
    <>
      <div className="mt-20">
        <h1 className="text-yellow-dark font-baloo text-[32px] font-semibold leading-snug">
          Uhu! Pedido confirmado
        </h1>
        <p className="mt-1 text-xl leading-snug text-base-subtitle font-roboto">
          Agora é so aguardar que logo o café chegará até você
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div
          className={`hidden lg:block min-w-[400px] max-w-[500px] mt-10 w-2/3  h-fit p-[1px] bg-gradient-to-br to-purple from-yellow ${borderRounded}`}
        >
          <div
            className={`hidden lg:flex flex-col gap-8 p-10 bg-white ${borderRounded}`}
          >
            {items.map((item) => {
              return <div>{item}</div>;
            })}
          </div>
        </div>
        <div
          className={`block lg:hidden w-[400px] mt-10  ${borderRounded} h-fit p-[1px] bg-gradient-to-br to-purple from-yellow`}
        >
          <div
            className={`flex lg:hidden flex-col gap-8 p-10 bg-white ${borderRounded}`}
          >
            <AliceCarousel mouseTracking items={items} disableButtonsControls />
          </div>
        </div>
        <img
          src={image.src}
          className="max-w-lg mt-10"
          alt="Homem usando uma motocicleta para entregar um pedido"
        />
      </div>
    </>
  );
}
