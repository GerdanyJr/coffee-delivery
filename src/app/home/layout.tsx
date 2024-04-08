import Header from "@/components/home/header";
import styles from "./page.module.css";
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
    <div className={styles.layout_container}>
      <Header />
      {children}
    </div>
  );
}
