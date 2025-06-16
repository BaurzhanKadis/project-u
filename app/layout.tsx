import type { Metadata } from "next";
import { M_PLUS_1p } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { Container } from "@/components/shared/container";
import { ProductProvider } from "@/components/providers/product-provider";
import { UserProvider } from "@/components/providers/user-provider";
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "U-MERCH - Маркетплейс мерча",
  description:
    "U-MERCH — это платформа для розничных заказов мерча от 1 до 20 изделий с 2D и 3D конструктором дизайна",
};

const mPlus1p = M_PLUS_1p({
  variable: "--font-m-plus-1p",
  subsets: ["latin", "cyrillic"],
  weight: ["100", "300", "400", "500", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${mPlus1p.className} antialiased`}>
        <UserProvider>
          <ProductProvider>
            <Header />
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Container>
                <main>{children}</main>
              </Container>
              <Footer />
            </ThemeProvider>
          </ProductProvider>
        </UserProvider>
      </body>
    </html>
  );
}
