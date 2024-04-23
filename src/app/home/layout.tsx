import Footer from "@/components/home/footer";
import { Header } from "@/components/home/header";
import type { Metadata, Viewport } from "next";
export const metadata: Metadata = {
  title: {
    default: "Coffee Delivery",
    template: "%s | Coffee Delivery",
  },
  description:
    "Na Coffee Delivery você encontra deliciosos e variádos cafés sem precisar sair de casa. A gente leva até você. Peça agora!",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: ["/favicon.icon?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest:"/site.webmanifest.json",
  keywords: "Coffee, Delivery",
  twitter: {
    card: "summary_large_image",
    site: "@Coffee Delivery",
    creator: "@coffeedelivery",
  },
  openGraph: {
    title:
      "Coffee Delivery: Um café quentinho sem precisar sair de casa. Peça já!",
    description:
      "Na Coffee Delivery você encontra cafés com sabores variados proporcionando experiências únicas.",
    type: "website",
    url: "http:localhost:3000/home",
    siteName: "Coffee Delivery",
    images: [
      {
        url: "/img/Coffee.png",
        width: "800",
        height: "600",
        alt: "Coffee Delivery",
      },
    ],
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
