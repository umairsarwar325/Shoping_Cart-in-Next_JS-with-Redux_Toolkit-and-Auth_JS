import { fetchAllProductsAction } from "@/actions";
import { auth } from "@/auth";
import ProductCard from "@/components/ProductCard";
import { redirect } from "next/navigation";

export default async function Home() {
  let getAllProducts;
  const session = await auth()
  if (!session?.user) {
    redirect("/unauth");
  } else {
    getAllProducts = await fetchAllProductsAction();
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-2 w-full p-4">
        {getAllProducts?.products && getAllProducts.products.length > 0
          ? getAllProducts.products.map((product) => (
              <ProductCard product={product} />
            ))
          : null}
      </div>
    </div>
  );
}
