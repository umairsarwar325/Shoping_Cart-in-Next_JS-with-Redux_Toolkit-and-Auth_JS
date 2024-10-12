"use server";
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

export { fetchAllProductsAction };
