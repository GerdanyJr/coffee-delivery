"use client";
import { Payment } from "@/components/checkout/payment";
import { CheckoutAddress } from "../../../components/checkoutAddress";
import { OrderSummary } from "@/components/checkout/orderSummary";

export default function Checkout() {
  return (
    <div className="flex flex-col justify-between gap-8 mt-20 lg:flex-row lg:gap-4">
      <OrderSummary className="w-full lg:order-1" />
      <div className="flex flex-col w-full gap-4">
        <CheckoutAddress />
        <Payment />
      </div>
    </div>
  );
}
