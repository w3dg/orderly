import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";

import stockprices from "@/public/stockprices.svg";
import FeaturedProducts from "./featuredproducts";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-between">
        <section className="flex gap-2 lg:gap-3 flex-col pt-4 items-center w-full max-w-4xl mx-auto px-5">
          <div className="flex flex-col gap-2 items-center justify-center py-4 lg:py-20 lg:items-start lg:gap-6 lg:flex-row-reverse">
            <Image height={200} src={stockprices} alt="Illustration" />
            <div className="flex flex-col items-center lg:items-start lg:gap-10 gap-2 pt-3 lg:pt-0">
              <h1 className="text-4xl lg:text-5xl font-bold">Orderly</h1>
              <h2 className="text-center lg:text-left max-w-[65ch]">
                Empower your business with Orderly, the intelligent inventory management system that streamlines your
                operations and drives profitability.
              </h2>
              <Link href={"/dashboard"}>
                <Button className="bg-indigo-700 hover:bg-indigo-900 text-white font-bold">Manage Store</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <section className="px-5 md:px-10 lg:px-16 w-full max-w-6xl mx-auto flex flex-col gap-5">
        <FeaturedProducts />
      </section>
    </>
  );
}
