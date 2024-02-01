import type { Metadata } from "next";
// import { GeistSans } from "geist/font/sans";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ weight: ["400", "600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orderly",
  description: "Inventory for your store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
