import { InputNumber } from "../inputNumber";
import SecondaryButton from "../secondaryButton";
import productImage from "../../../../public/assets/img/Image-1.png";
export function ProductCart({
  name,
  price,
  className,
}: {
  name: string;
  price: string;
  className?: string;
}) {
  return (
    <div className="flex px-1 py-2 bg-base-card w-max">
      <img src={productImage.src} alt="" className="w-16 h-16 mr-5 " />
      <div className="flex flex-col gap-2">
        <h2 className="mb-2 leading-snug font-roboto text-base-subtitle ">
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
