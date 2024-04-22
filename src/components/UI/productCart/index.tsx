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
    <div className={`flex bg-base-card ${className}`}>
      <div className="flex items-center w-full gap-5">
        <img src={productImage.src} className="size-16 lg:size-20" alt="" />
        <div className="flex flex-col w-full gap-2">
          <div className="flex justify-between w-full">
            <h2 className="text-sm font-light font-roboto text-base-subtitle md:text-base">
              {name}
            </h2>
            <span className="text-sm font-bold md:text-base font-roboto text-base-text">
              R$ {price}
            </span>
          </div>
          <div className="flex gap-2 font-roboto">
            <InputNumber />
            <SecondaryButton label="Remover" />
          </div>
        </div>
      </div>
    </div>
  );
}
