"use client";
import { Payment } from "@/components/checkout/payment";
import { CheckoutAddress } from "../../../components/checkoutAddress";
import { OrderSummary } from "@/components/checkout/orderSummary";

export default function Checkout() {
  return (
    <div className="flex justify-between gap-8 mt-20">
      <div className="flex flex-col w-3/5 gap-4">
        <CheckoutAddress />
        <Payment />
      </div>
      <OrderSummary className="w-2/5" />
    </div>
  );
}
