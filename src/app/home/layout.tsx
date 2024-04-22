import Footer from '@/components/home/footer';
import { Header } from "@/components/home/header";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Coffee Delivery",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="lg:mx-16 xl:mx-40">{children}</div>
      <Footer />
    </>
  );
}
