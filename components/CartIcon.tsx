import React from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

const CartIcon = () => {
  return (
    <Link href={"/"} className="group relative">
      <ShoppingBag className="text-white w-6 h-6  " />
      <span className="absolute -top-1 -right-1 bg-red-400 text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center ">
        0
      </span>
    </Link>
  );
};

export default CartIcon;
