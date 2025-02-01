import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header/Header";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from "@/theme/theme";

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
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Header />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
