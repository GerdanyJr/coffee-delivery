"use client";
import { Payment } from "@/components/checkout/payment";
import { CheckoutAddress } from "../../../components/checkoutAddress";
import { OrderSummary } from "@/components/checkout/orderSummary";

export default function Checkout() {
  return (
    <div className="flex justify-between mt-20">
      <div className="flex flex-col gap-1 w-[55%]">
        <CheckoutAddress />
        <Payment />
      </div>
      <OrderSummary />
    </div >
  );
}
