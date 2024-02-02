import Link from "next/link";
import ResponsiveLogo from "./ResponsiveLogo";

const Navbar = () => {
  return (
    <div className="border-b bg-neutral-900">
      <nav className="w-full max-w-4xl mx-auto flex items-center justify-between py-3 px-4">
        <Link href={"/"}>
          <ResponsiveLogo />
        </Link>
        <div className="flex gap-2">
          <Link
            href={"/products"}
            className="hidden md:block px-3 py-2 rounded-md border border-transparent hover:border-neutral-700  hover:bg-neutral-800/60"
          >
            All Products
          </Link>
          <Link
            href={"/dashboard"}
            className="px-3 py-2 rounded-md border border-transparent bg-indigo-500/20 border-indigo-700 text-white hover:border-neutral-700  hover:bg-indigo-600/60"
          >
            Dashboard
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
