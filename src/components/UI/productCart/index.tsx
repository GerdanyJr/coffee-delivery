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
    <div className={`flex bg-base-card justify-between ${className}`}>
      <div className="flex items-center gap-5">
        <img src={productImage.src} className="size-20" alt="" />
        <div className="flex flex-col gap-2">
          <h2 className="font-light font-roboto text-base-subtitle">{name}</h2>
          <div className="flex justify-between gap-2 font-roboto">
            <InputNumber />
            <SecondaryButton label="Remover" />
          </div>
        </div>
      </div>
      <span className="font-bold text-md font-roboto text-base-text">
        R$ {price}
      </span>
    </div>
  );
}
