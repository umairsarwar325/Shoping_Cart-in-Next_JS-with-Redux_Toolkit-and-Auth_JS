"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { signInAction, signOutAction } from "@/actions";

const Header = ({ session }) => {
  const handleSignInAction = async () => {
    await signInAction();
  };
  const handleSignOutAction = async () => {
    await signOutAction();
  };

  return (
    <div className="w-full h-24 shadow-black shadow-sm px-10 py-3 flex justify-between items-center border-2 border-black rounded-lg">
      <Link href={"/"} className="text-2xl font-bold">
        Shoping Cart
      </Link>
      <div className="flex items-center justify-between gap-4">
        <Link href="/cart" className="font-bold ">
          CART
        </Link>
        <Button
          onClick={session?.user ? handleSignOutAction : handleSignInAction}
        >
          {session?.user ? "Logout" : "Login"}
        </Button>
      </div>
    </div>
  );
};

export default Header;
