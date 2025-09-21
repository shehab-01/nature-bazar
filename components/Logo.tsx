import React from "react";
import Link from "next/link";
import logo_picture from "../images/Nature-Bazar-Logo_white.png";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"} className="inline-flex cursor-pointer ">
      <Image
        src={logo_picture}
        alt="banner-1"
        className={cn(
          "inline-flex md:inline-flex w-25 cursor-pointer",
          className
        )}
      />
    </Link>
  );
};

export default Logo;
