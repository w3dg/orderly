"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ResponsiveLogo from "./ResponsiveLogo";

const DashboardNavbar = () => {
  const pathname = usePathname();

  return (
    <div className="border-b bg-[#f7f7f7]">
      <nav className="w-full max-w-4xl mx-auto flex items-center justify-between py-3 px-4">
        <Link href={"/dashboard"}>
          <ResponsiveLogo />
        </Link>{" "}
        <div className="flex gap-2">
          <Link
            href={"/dashboard"}
            className={`hidden md:block px-3 py-2 rounded-md border border-transparent hover:border-neutral-300  hover:bg-neutral-300/60 ${
              pathname === "/dashboard" ? "text-indigo-800 bg-indigo-100" : ""
            }`}
          >
            Dashboard
          </Link>
          <Link
            href={"/dashboard/products"}
            className={`hidden md:block px-3 py-2 rounded-md border border-transparent hover:border-neutral-300  hover:bg-neutral-300/60 ${
              pathname === "/dashboard/products" ? "text-indigo-800 bg-indigo-100" : ""
            }`}
          >
            Products
          </Link>
          <Link
            href={"/dashboard/categories"}
            className={`hidden md:block px-3 py-2 rounded-md border border-transparent hover:border-neutral-300  hover:bg-neutral-300/60 ${
              pathname === "/dashboard/categories" ? "text-indigo-800 bg-indigo-100" : ""
            }`}
          >
            Categories
          </Link>
          <Link
            href={"/dashboard/revenue"}
            className={`hidden md:block px-3 py-2 rounded-md border border-transparent hover:border-neutral-300  hover:bg-neutral-300/60 ${
              pathname === "/dashboard/revenue" ? "text-indigo-800 bg-indigo-100" : ""
            }`}
          >
            Revenue
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default DashboardNavbar;
