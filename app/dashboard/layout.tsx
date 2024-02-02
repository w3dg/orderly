import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import DashboardNavbar from "@/components/dashboardnavbar";
import Topbar from "./components/topbar";

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
    <div className="flex h-screen flex-col lg:flex-row lg:overflow-hidden">
      <DashboardNavbar></DashboardNavbar>
      <div className="w-full lg:overflow-y-auto flex flex-col">
        <Topbar></Topbar>
        <Toaster />
        <div>{children}</div>
      </div>
    </div>
  );
}
