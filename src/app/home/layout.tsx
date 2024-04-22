import { Header } from "@/components/home/header";
import type { Metadata } from "next";
import Footer from "@/components/home/footer";
export const metadata: Metadata = {
  title: "Coffee Delivery",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pt-8">
      <Header />
      <div className="lg:mx-16 xl:mx-40">{children}</div>
      <Footer />
    </div>
  );
}
