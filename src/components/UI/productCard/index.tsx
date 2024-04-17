import { Coffee } from "@/@types/interface/coffee";
import { InputNumber } from "../inputNumber";
import { ShoppingCartButton } from "../shoppingCartButton";
function ProductCard({ description, image, name, price, categories }: Coffee) {
  return (
    <div className="flex flex-col bg-base-card rounded-tl-md rounded-br-md rounded-tr-[36px] rounded-bl-[36px] w-min items-center font-roboto">
      <img className="w-[120px] h-[120px] -mt-5 mb-4" src={image} alt={name} />
      <div className="flex w-[90%] flex-wrap justify-center mb-4 gap-1">
        {categories?.map((product) => (
          <span
            key={product.id}
            className="bg-yellow-light uppercase text-yellow-dark text-[10px] font-bold rounded-full py-1 px-2"
          >
            {product.name}
          </span>
        ))}
      </div>

      <h2 className="mb-2 text-xl font-bold leading-snug font-baloo">{name}</h2>
      <p className="mb-8 text-sm leading-snug text-center text-base-label mx-5 w-[216px]">
        {description}
      </p>
      <div className=" mb-5 flex items-center justify-between w-[208px]">
        <span className="text-sm font-normal leading-snug text-base-text">
          R${" "}
          <strong className="text-2xl font-extrabold leading-snug font-baloo">
            {price}
          </strong>
        </span>
        <div className="flex items-center gap-2">
          <InputNumber />
          <ShoppingCartButton size={22} />
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
