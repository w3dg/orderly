import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import DashboardNavbar from "@/components/dashboardnavbar";

export const metadata: Metadata = {
  title: "Orderly | Dashboard",
  description: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={GeistSans.className}>
          <DashboardNavbar></DashboardNavbar>
          {children}
        </body>
      </html>
    </>
  );
}
