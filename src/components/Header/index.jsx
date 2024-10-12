import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="w-full h-24 shadow-black shadow-sm px-10 py-3 flex justify-between items-center border-2 border-black rounded-lg">
      <Link href={"/"} className="text-2xl font-bold">
        Shoping Cart
      </Link>
      <div className="flex items-center justify-between gap-4">
        <Link href="/cart" className="font-bold ">
          CART
        </Link>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Header;
