import type { Metadata } from "next";
import { Raleway, Roboto } from "next/font/google";
import "./globals.css";
import { SectionHeaderLayout } from "@/react/sections/common/sectionHeader/SectionHeaderLayout";
import StoreProvider from "./StoreProvider";
import { ClientLayout } from "@/scripts/api/LayoutClient";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "300", "400", "500", "700", "900"]
});

const raleway = Raleway({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});



export const metadata: Metadata = {
  title: "Shopcart",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <StoreProvider>
        <body className={`${raleway.className} `}>
          <ClientLayout>
            {children}
          </ClientLayout>
        </body>
      </StoreProvider>
    </html>
  );
}
