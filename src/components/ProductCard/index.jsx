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
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "@/store/slices/cartSlice";

const ProductCard = ({ product }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleAddtoCart = () => {
    dispatch(addItem(product));
    console.log("object");
  };
  const handlRemoveFromCart = () => {
    dispatch(removeItem(product.id));
    console.log("object");
  };

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
        <Button onClick={cart.items.some(item=> item.id === product.id) ? handlRemoveFromCart : handleAddtoCart}>
        {cart.items.some(item=> item.id === product.id) ? "REMOVE" : "ADD TO CART"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
