import CheckoutContent from "@/components/checkout/content";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Checkout",
};
export default function Checkout() {
  return <CheckoutContent />;
}
