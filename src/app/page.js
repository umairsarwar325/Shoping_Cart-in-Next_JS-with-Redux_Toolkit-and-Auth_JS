import { fetchAllProductsAction } from "@/actions";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const getAllProducts = await fetchAllProductsAction();

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
