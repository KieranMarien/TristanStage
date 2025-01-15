import type { Product } from "types/product";
import { ProductRating } from "components/product-rating";
import Image from "next/image";

export async function SingleProduct() {
  const product: Product = await fetch(
    `https://app-router-api.vercel.app/api/products?id=1`
  ).then((res) => res.json());

  return (
    <div className="grid grid-cols-3 gap-6 p-16 bg-light-brown rounded-r-3xl w-10/12 font-tommy">
      <div className="col-span-2 md:order-1 md:col-span-1">
        <div className="ml-0">
          <div className="space-y-2">
            <div className="relative aspect-square">
              <Image
                  src={`/${product.image}`}
                  className="block rounded-lg grayscale ml-40"
                  alt={product.name}
                  fill
                  sizes="(min-width: 1184px) 200px, (min-width: 1024px) 20vw, (min-width: 768px) 25vw, 50vw"
                  priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-full space-y-4 md:order-2 md:col-span-2 ml-40">
        <div className="truncate text-xl font-medium lg:text-2xl">
          {product.name}
        </div>

        <ProductRating rating={product.rating}/>

        <div className="space-y-4 text-sm">
          <p>{product.description}</p>
          <p>{product.description}</p>
        </div>
        <div className="justify-self-center pt-20">
          <button className="bg-button-white hover:bg-yellow-100 font-bold py-2 px-4 rounded-full">
            Aanvragen
          </button>
        </div>
      </div>
    </div>
  );
}
