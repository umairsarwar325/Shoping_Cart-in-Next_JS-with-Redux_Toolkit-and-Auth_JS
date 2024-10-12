"use server";

import { auth, signIn, signOut } from "@/auth";

const fetchAllProductsAction = async () => {
  try {
    const result = await fetch("https://dummyjson.com/products");
    const data = await result.json();
    return {
      success: true,
      products: data?.products,
    };
  } catch (error) {
    console.log(error);
  }
};

const signInAction = async () => {
  await signIn("github");
};


const signOutAction = async () => {
  await signOut();
};

export { fetchAllProductsAction, signInAction, signOutAction };
