"use client";

import Image from "next/image";
import logoicon from "@/public/logoicon.jpg";
import logoiconFull from "@/public/logoiconlong.jpg";

const ResponsiveLogo = () => {
  return (
    <>
      <Image src={logoicon} height={40} alt="Logo for Orderly" className="md:hidden"></Image>
      <Image src={logoiconFull} height={40} alt="Logo for Orderly" className="hidden md:block"></Image>
    </>
  );
};
export default ResponsiveLogo;
