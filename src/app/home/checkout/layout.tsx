import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Checkout",
};
export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
