import {ProductRating} from "@/components/product-rating";

import { productsMerchandise } from '@/app/lib/product-data-tables';
const productsMerch2 = await productsMerchandise;



export async function ProductsMerchList() {
    return (
        <div className="bg-transparent font-tommy">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Merchandise</h2>
                <div
                    className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {productsMerch2.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                            <img
                                alt={product.imageAlt}
                                src={product.imageSrc}
                                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
                            />
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            {product.rating ? <ProductRating rating={product.rating}/> : null}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}