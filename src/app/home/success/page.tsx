import { Metadata } from "next";
import { OrderInfo } from "../../../components/success/orderInfo";
export const metadata: Metadata = {
  title: "Success",
};
export default function Success() {
  return (
    <div className="mx-20 lg:mx-0">
      <OrderInfo />
    </div>
  );
}
