import { Product } from 'types/product';
import { ProductRating } from 'components/product-rating';
import Image from 'next/image';

export const ProductCard = ({ product }: { product: Product }) => {

  return (
      <div className="group block">
          <a href="./merchandise-detail" className="">
              <div className="space-y-2 font-tommy">
                  <div className="relative aspect-square">
                      <Image
                          src={`/${product.image}`}
                          fill
                          sizes="(min-width: 1184px) 200px, (min-width: 1024px) 20vw, (min-width: 768px) 25vw, 50vw"
                          className="rounded-xl grayscale group-hover:opacity-80"
                          alt={product.name}
                          placeholder="blur"
                          blurDataURL={product.imageBlur}
                      />
                  </div>

                  <div className="truncate text-sm font-medium group-hover:text-vercel-cyan">
                      {product.name}
                  </div>

                  {product.rating ? <ProductRating rating={product.rating}/> : null}
              </div>
          </a>

      </div>
  );
};
