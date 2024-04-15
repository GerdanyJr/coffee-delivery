import { InputNumber } from "../inputNumber";
import SecondaryButton from "../secondaryButton";
import productImage from "../../../../public/assets/img/Image-1.png";
export function ProductCart({ name, price }: { name: string; price: string }) {
  return (
    <div className="flex bg-base-card py-2 px-1 w-max">
      <img src={productImage.src} alt="" className="mr-5 h-16 w-16 " />
      <div className="flex flex-col gap-2">
        <h2 className="mb-2 font-roboto leading-snug text-base-subtitle ">
          {name}
        </h2>
        <div className="flex w-[171px] justify-between font-roboto gap-2">
          <InputNumber />
          <SecondaryButton label="Remover" />
        </div>
      </div>
      <span className="font-bold leading-snug text-base-text font-roboto">
        R$ {price}
      </span>
    </div>
  );
}
