"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wallet2, LayoutDashboard, PackageSearch, SquareStack } from "lucide-react";
import ResponsiveLogo from "./ResponsiveLogo";

const DashboardNavbar = () => {
  const pathname = usePathname();

  return (
    <div className="border-b bg-neutral-900">
      <nav className="hidden h-full lg:flex lg:flex-col w-full lg:w-64 mx-auto gap-8 py-3 px-5 border-r">
        <Link href={"/"}>
          <ResponsiveLogo />
        </Link>
        <div className="flex flex-col gap-2">
          {/* dashboard home link */}
          <Link
            href={"/dashboard"}
            className={`hidden md:flex gap-2 px-3 py-2 rounded-md border border-transparent hover:border-neutral-700  hover:bg-neutral-800/60 ${
              pathname === "/dashboard" ? "text-red-200 bg-red-400/20" : ""
            }`}
          >
            <LayoutDashboard />
            <p>Dashboard</p>
          </Link>

          {/* products */}
          <Link
            href={"/dashboard/products"}
            className={`hidden md:flex gap-2  px-3 py-2 rounded-md border border-transparent hover:border-neutral-700  hover:bg-neutral-800/60 ${
              pathname === "/dashboard/products" ? "text-red-200 bg-red-400/20" : ""
            }`}
          >
            <PackageSearch />
            <p>Products</p>
          </Link>

          {/* Categories */}
          <Link
            href={"/dashboard/categories"}
            className={`hidden md:flex gap-2  px-3 py-2 rounded-md border border-transparent hover:border-neutral-700  hover:bg-neutral-800/60 ${
              pathname === "/dashboard/categories" ? "text-red-200 bg-red-400/20" : ""
            }`}
          >
            <SquareStack />
            <p>Categories</p>
          </Link>

          {/* Revenue */}
          <Link
            href={"/dashboard/orders"}
            className={`hidden md:flex gap-2  px-3 py-2 rounded-md border border-transparent hover:border-neutral-700  hover:bg-neutral-800/60 ${
              pathname === "/dashboard/orders" ? "text-red-200 bg-red-400/20" : ""
            }`}
          >
            <Wallet2 />
            <p>Orders</p>
          </Link>
        </div>
      </nav>

      {/* mobile nav */}
      <nav className="flex gap-3 justify-between lg:hidden px-3 py-2">
        <Link href={"/"}>
          <ResponsiveLogo />
        </Link>
        <div className="flex gap-2">
          <Link
            href={"/dashboard"}
            className={`px-3 py-2 rounded-md border border-transparent hover:border-neutral-700  hover:bg-neutral-800/60 ${
              pathname === "/dashboard" ? "text-red-800 bg-red-400/20" : ""
            }`}
          >
            <LayoutDashboard />
          </Link>
          <Link
            href={"/dashboard/products"}
            className={`px-3 py-2 rounded-md border border-transparent hover:border-neutral-700  hover:bg-neutral-800/60 ${
              pathname === "/dashboard/products" ? "text-red-800 bg-red-400/20" : ""
            }`}
          >
            <PackageSearch />
          </Link>
          <Link
            href={"/dashboard/categories"}
            className={`px-3 py-2 rounded-md border border-transparent hover:border-neutral-700  hover:bg-neutral-800/60 ${
              pathname === "/dashboard/categories" ? "text-red-800 bg-red-400/20" : ""
            }`}
          >
            <SquareStack />
          </Link>
          <Link
            href={"/dashboard/orders"}
            className={`px-3 py-2 rounded-md border border-transparent hover:border-neutral-700  hover:bg-neutral-800/60 ${
              pathname === "/dashboard/orders" ? "text-red-800 bg-red-400/20" : ""
            }`}
          >
            <Wallet2 />
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default DashboardNavbar;
