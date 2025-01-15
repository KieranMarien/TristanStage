import type { Product } from 'types/product';
import { delayShippingEstimate, withDelay } from 'app/lib/delay';
import { cookies } from 'next/headers';

function LoadingDots() {
  return (
    <div className="text-sm">
      <span className="space-x-0.5">
        <span className="inline-flex animate-[loading_1.4s_ease-in-out_infinite] rounded-full">
          &bull;
        </span>
        <span className="inline-flex animate-[loading_1.4s_ease-in-out_0.2s_infinite] rounded-full">
          &bull;
        </span>
        <span className="inline-flex animate-[loading_1.4s_ease-in-out_0.4s_infinite] rounded-full">
          &bull;
        </span>
      </span>
    </div>
  );
}

async function UserSpecificDetails({ productId }: { productId: string }) {
  const data = await withDelay(
    fetch(
      `https://app-router-api.vercel.app/api/products?id=${productId}&filter=price,usedPrice,leadTime,stock`,
      {
        // We intentionally disable Next.js Cache to better demo
        // streaming
        cache: 'no-store',
      }
    ),
    delayShippingEstimate
  );

  const product = (await data.json()) as Product;
}
