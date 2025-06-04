import type { Metadata } from "next";
import { Raleway, Roboto } from "next/font/google";
import "./globals.css";
import { SectionHeaderLayout } from "@/react/sections/common/sectionHeader/SectionHeaderLayout";
import StoreProvider from "./StoreProvider";
import { ClientLayout } from "@/scripts/api/LayoutClient";
import { ColorSchemeScript, createTheme, mantineHtmlProps, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

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
    <html lang="ru" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript  />
      </head>
      <body className={`${raleway.className} `}>
        <StoreProvider>
          <MantineProvider>
            <ClientLayout>
              {children}
            </ClientLayout>
          </MantineProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
