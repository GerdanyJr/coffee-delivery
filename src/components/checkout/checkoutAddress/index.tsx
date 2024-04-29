import { MapPinLine } from "@phosphor-icons/react";
import { CheckoutForm } from "../checkoutForm";
export function CheckoutAddress() {
  return (
    <div>
      <h2 className="mb-2 text-lg font-bold leading-snug font-baloo text-base-subtitle">
        Complete seu pedido
      </h2>
      <div className="flex flex-col gap-8 px-5 rounded-md py-9 lg:p-10 bg-base-card font-roboto">
        <div className="flex items-start">
          <MapPinLine className="mr-2" size={22} color="#C47F17" />
          <div className="flex flex-col">
            <h3 className="leading-snug mb-[2px] text-base-subtitle ">
              Endereço de entrega
            </h3>
            <span className="text-sm leading-snug text-base-text">
              Informe o endereço onde deseja receber seu pedido
            </span>
          </div>
        </div>
        <CheckoutForm />
      </div>
    </div>
  );
}
