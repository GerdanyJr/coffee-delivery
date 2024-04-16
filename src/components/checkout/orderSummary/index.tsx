"use client";
import { ProductCart } from "@/components/UI/productCart";
import { PrimaryButton } from "@/components/UI/primaryButton";
import { useRouter } from "next/navigation";

export function OrderSummary({ className }: { className?: string }) {
  const checkoutClasses = "text-md flex justify-between";
  const checkoutPrice = "text-lg";
  const router = useRouter();
  return (
    <div className={className}>
      <h2 className="mb-2 text-lg font-bold font-baloo text-base-subtitle">
        Cafés selecionados
      </h2>
      <div className="px-5 rounded-tl-lg rounded-br-lg py-9 rounded-bl-3xl lg:p-9 bg-base-card rounded-tr-3xl">
        <div className="flex flex-col gap-6 pb-7">
          <ProductCart
            name="Café expresso"
            price="9,90"
            className="pb-6 border-b-[1px] border-base-button"
          />
          <ProductCart
            name="Café expresso"
            price="9,90"
            className="pb-6 border-b-[1px] border-base-button"
          />
        </div>
        <div className="my-4 font-baloo text-base-text">
          <div className={checkoutClasses}>
            Total de itens <span className={checkoutPrice}>R$ 29,70</span>
          </div>
          <div className={checkoutClasses}>
            Entrega <span className={checkoutPrice}>R$ 3,50</span>
          </div>
          <div className="flex justify-between text-xl font-bold color-base-subtitle">
            Total
            <span>R$ 33,20</span>
          </div>
        </div>
        <PrimaryButton
          label="Confirmar pedido"
          className="w-full"
          onClick={() => router.push("/home/success")}
        />
      </div>
    </div>
  );
}
