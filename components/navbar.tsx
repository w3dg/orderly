import Link from "next/link";
import ResponsiveLogo from "./ResponsiveLogo";

const Navbar = () => {
  return (
    <div className="border-b bg-[#f7f7f7]">
      <nav className="w-full max-w-4xl mx-auto flex items-center justify-between py-3 px-4">
        <ResponsiveLogo />
        <div className="flex gap-2">
          <Link
            href={"/dashboard/products"}
            className="hidden md:block px-3 py-2 rounded-md border border-transparent hover:border-neutral-300  hover:bg-neutral-300/60"
          >
            Products
          </Link>
          <Link
            href={"/dashboard/categories"}
            className="hidden md:block px-3 py-2 rounded-md border border-transparent hover:border-neutral-300  hover:bg-neutral-300/60"
          >
            Categories
          </Link>
          <Link
            href={"/dashboard/revenue"}
            className="hidden md:block px-3 py-2 rounded-md border border-transparent hover:border-neutral-300  hover:bg-neutral-300/60"
          >
            Revenue
          </Link>
          <Link
            href={"/dashboard"}
            className="px-3 py-2 rounded-md border border-transparent bg-purple-700 text-white hover:border-neutral-300  hover:bg-purple-600/60"
          >
            Dashboard
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
