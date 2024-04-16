import Header from "@/components/home/header";
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
    <div>
      <div className="mx-40 my-8">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
}
