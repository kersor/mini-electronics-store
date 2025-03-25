import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { SectionHeaderLayout } from "@/react/sections/common/sectionHeader/SectionHeaderLayout";

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
      <body className={`${raleway.className}`}>
            <SectionHeaderLayout />
            {children}
      </body>
    </html>
  );
}
