import { ProductsMerchList } from 'components/product-merch-list-grid';
import { RecommendedProductsList } from '@/components/recommended-merch-product-list-grid';

export default function Page() {
    return (
        <div className="bg-transparent">
            <div className="flex items-center justify-center justify-self-center my-8">
                <h2 className="text-3xl font-butler mb-8">Merch</h2>
            </div>
            <div>
                <RecommendedProductsList/>
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-8 ml-28">Discover</h2>
            </div>
            <div>
                <ProductsMerchList/>
            </div>
        </div>
    )
}