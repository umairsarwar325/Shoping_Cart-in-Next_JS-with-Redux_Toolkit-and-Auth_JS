"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";

const ProductCard = ({ product }) => {
  const {cart} = useSelector((state) => state);
  console.log("cart: ",cart);

  return (
    <Card className="border-2 border-zinc-300 hover:border-2 hover:border-zinc-800 cursor-pointer transition-all">
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="w-full flex h-[300px] justify-center items-center">
        <img src={product.thumbnail} alt={product.title} />
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p>{product.price}</p>
        <Button>ADD TO CART</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
