import Header from "@/components/home/header";
import styles from "./page.module.css";
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
      <div className={styles.layout_container}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
}
